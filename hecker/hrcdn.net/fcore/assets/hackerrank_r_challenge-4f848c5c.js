"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["hackerrank_r_challenge"], {
        WktJ: () => {},
        tcpQ: () => {},
        qowp: () => {},
        rmoA: (e, t, a) => {
            a.d(t, {
                Z: () => ie
            });
            var s = a("L5+t"),
                n = a("DTvD"),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("0ier"),
                c = a("KMmN"),
                m = a("rpVu"),
                d = a("XBRQ"),
                u = a("qxc9"),
                h = a("CmRW"),
                p = a("znFd"),
                g = a("Am1b"),
                b = a("5F93"),
                E = a("TSYQ"),
                v = a.n(E),
                k = a("LJb6"),
                f = a("6GtL"),
                y = a("t3Eu"),
                S = a.n(y),
                x = a("zE4Q"),
                N = a("uqVu"),
                w = a("bVDs");
            class C extends n.PureComponent {
                constructor() {
                    super(), (0, s.Z)(this, "calculateWindowSize", (() => {
                        this.setState({
                            windowWidth: window.innerWidth,
                            windowHeight: window.innerHeight
                        })
                    })), (0, s.Z)(this, "onModalClose", (() => {
                        var {
                            onClose: e,
                            analyticsKey: t,
                            analyticsAttribute: a,
                            allowClose: s
                        } = this.props;
                        s && (t && f.Z.track("Click", "".concat(t, "Close"), a), e())
                    })), (0, s.Z)(this, "renderRectangle", (e => {
                        e.beginPath(), e.rect(0, 0, 10, 15), e.stroke(), e.fill(), e.closePath()
                    })), this.state = {
                        windowWidth: 1280,
                        windowHeight: 768
                    }
                }
                componentDidMount() {
                    this.calculateWindowSize(), window.addEventListener("resize", this.calculateWindowSize), this.trackModalViewed()
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.calculateWindowSize)
                }
                trackModalViewed() {
                    var {
                        analyticsKey: e,
                        analyticsAttribute: t
                    } = this.props.badge;
                    e && f.Z.track("Viewed", e, t)
                }
                badgeSocialShare() {
                    var {
                        badge: e
                    } = this.props;
                    return l().createElement("div", {
                        className: "badge-share-modal"
                    }, l().createElement(w.ZP, {
                        badge: e,
                        align: "center",
                        page: "badge_share"
                    }))
                }
                renderBadgeContent() {
                    var {
                        badge: e,
                        button: t,
                        title: a,
                        message: s,
                        badgeShare: n
                    } = this.props, {
                        windowWidth: i,
                        windowHeight: r
                    } = this.state, o = N.Uh[N.QV[e.level] || "bronze"].confetti;
                    return l().createElement("div", {
                        className: "modal-content"
                    }, l().createElement(x.Z, {
                        badge: e
                    }), l().createElement("div", {
                        className: "progress-title"
                    }, a), l().createElement("div", {
                        className: "progress-message"
                    }, s), t, n && this.badgeSocialShare(), l().createElement(S(), {
                        colors: o,
                        width: i,
                        height: r,
                        drawShape: this.renderRectangle,
                        className: "confetti"
                    }))
                }
                render() {
                    var {
                        open: e,
                        allowClose: t,
                        modalClass: a
                    } = this.props;
                    return l().createElement(k.Z, {
                        open: e,
                        onClose: this.onModalClose,
                        modalClass: v()("badge-confetti-modal", a)
                    }, t && l().createElement("div", {
                        className: "icon2-close close",
                        onClick: this.onModalClose
                    }), l().createElement("div", {
                        className: "status-wrap"
                    }, this.renderBadgeContent()))
                }
            }(0, s.Z)(C, "defaultProps", {
                onClose: b.ZT,
                title: "Congrats!",
                allowClose: !0
            });
            const _ = C;
            class T extends n.PureComponent {
                getAnalyticsAttribute() {
                    var {
                        badge_type: e,
                        level: t,
                        stars: a
                    } = this.props.badge;
                    return {
                        attribute1: e,
                        attribute2: t,
                        attribute3: a
                    }
                }
                render() {
                    var {
                        badge: e,
                        open: t,
                        onClose: a,
                        ctaButton: s
                    } = this.props, {
                        stars: n
                    } = e;
                    return l().createElement(_, {
                        badge: e,
                        open: t,
                        onClose: a,
                        message: "You have earned your ".concat((0, b.fv)(n), " star."),
                        button: s,
                        badgeShare: !0,
                        analyticsKey: "BadgeLevelUpModal",
                        analyticsAttribute: this.getAnalyticsAttribute()
                    })
                }
            }(0, s.Z)(T, "propTypes", {
                badge: r().object.isRequired,
                open: r().bool.isRequired,
                onClose: r().func.isRequired,
                nextChallengeURL: r().string,
                ctaButton: r().element
            }), (0, s.Z)(T, "defaultProps", {
                onClose: b.ZT
            });
            const Z = T;
            a("ioFf");
            var P = a("ANjH"),
                D = a("WLt8"),
                A = a("+Ebv"),
                j = (a("OG14"), a("66t9")),
                R = a("JlLr"),
                F = a("u6Nk"),
                L = a("4Qk4"),
                B = a("6wV0"),
                O = a("OGsD"),
                I = a("04gq"),
                V = a("hz+Z"),
                q = a("ZxB4"),
                M = a("Py6l");
            class U extends l().Component {
                constructor(e) {
                    super(e), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "closeStatusBanner", (() => {
                        this.props.submissionActions.setGlobalSubmissionStatus(null)
                    })), this.state = {}
                }
                getFinalScore() {
                    var {
                        display_score: e
                    } = this.props.submission;
                    return parseFloat(e || 0).toFixed(2)
                }
                renderSocialShare() {
                    var {
                        id: e,
                        name: t,
                        contest_slug: a,
                        slug: s,
                        kind: n
                    } = this.props.submission, i = this.getFinalScore(), r = Math.round(i) || 0, o = "I scored ".concat(r, " points in the ").concat(t, " challenge on HackerRank"), c = (0, u.cu)({
                        slug: s,
                        contest_slug: a
                    }), m = "".concat(F.HOST).concat(c, "/submissions/").concat(n, "/").concat(e);
                    return l().createElement("div", {
                        className: "share-btns-wrap"
                    }, l().createElement("iframe", {
                        src: "//www.facebook.com/plugins/share_button.php?href=".concat(m, "&layout=button&size=small"),
                        scrolling: "no",
                        frameBorder: "0",
                        className: "share-btn",
                        allowTransparency: "true"
                    }), "  ", l().createElement("iframe", {
                        src: "https://platform.twitter.com/widgets/tweet_button.html?count=none&url=".concat(m, "&text=").concat(o),
                        scrolling: "no",
                        frameBorder: "0",
                        className: "share-btn",
                        allowTransparency: "true"
                    }))
                }
                renderNextStarMessage() {
                    var {
                        submission: e,
                        appUtil: t
                    } = this.props, {
                        location: {
                            query: {
                                h_l: a
                            }
                        }
                    } = t, {
                        contest_slug: s,
                        badges: n = []
                    } = e, i = n[0];
                    return !i || "master" !== s || (0, O.QJ)(a) ? null : (0, V.J6)(i) > 0 ? l().createElement("div", {
                        className: "next-star-message"
                    }, l().createElement("span", null, (0, V.EA)(i, "submission"))) : ""
                }
                renderChallengeLockedStatus() {
                    var {
                        submission: e
                    } = this.props, {
                        next_challenge: t
                    } = e, a = t && t.epoch_starttime;
                    return l().createElement("div", {
                        className: "next-star-message locked-status"
                    }, "The next challenge in this tutorial will unlock in ", l().createElement(R.Z, {
                        finishTimeMs: 1e3 * a,
                        onTimerEnd: () => {
                            this.setState({
                                timerCompleted: !0
                            })
                        }
                    }))
                }
                renderNextChallengeLinks() {
                    var e, t, a, s, {
                            submission: n,
                            appUtil: i,
                            currentPlaylist: r,
                            isHomePageV2Enabled: o
                        } = this.props,
                        {
                            timerCompleted: c
                        } = this.state,
                        {
                            location: {
                                query: {
                                    h_l: m
                                },
                                search: d = ""
                            }
                        } = i,
                        {
                            contest_slug: h,
                            next_challenge_slug: p,
                            random_challenge_slug: g,
                            solved: b,
                            next_challenge: E
                        } = n,
                        {
                            closeStatusBanner: v
                        } = this,
                        k = (0, O.QJ)(m),
                        {
                            parent: f
                        } = r,
                        y = "locked" === (E && E.status);
                    return 1 === b && (p ? (a = "Try the next challenge", s = "".concat((0, u.cu)({
                        slug: p,
                        contest_slug: h
                    })).concat(d)) : f && f.slug === q.Ts.INTERVIEW_PREPARATION_KIT && (a = "Proceed to ".concat(f.name), s = "/interview/".concat(q.Ts.INTERVIEW_PREPARATION_KIT)), y && !c && (o ? (a = "Go to Home", s = "/home") : (a = "Go to Dashboard", s = "/dashboard")), s && (e = l().createElement(j.Link, {
                        className: "challenge-link close-success",
                        to: s,
                        onClick: v
                    }, a))), k || ("master" === h ? 1 === b && g && (t = l().createElement(j.Link, {
                        className: "challenge-link hr_tour-leaderboard close-success",
                        to: (0, u.cu)({
                            slug: g,
                            contest_slug: h
                        }),
                        onClick: v
                    }, "Try a Random Challenge")) : h.startsWith("company-page-") || (t = l().createElement(j.Link, {
                        className: "challenge-link hr_tour-leaderboard close-success",
                        to: "".concat((0, u.c8)({
                            contest_slug: h
                        }), "/leaderboard"),
                        onClick: v
                    }, "Contest Leaderboard"))), t || e ? l().createElement("div", {
                        className: "next-challenge-link"
                    }, e && l().createElement("span", {
                        className: "challenge-next-link"
                    }, e), t && e && l().createElement("span", {
                        className: "seperator"
                    }, " | "), t && l().createElement("span", {
                        className: "challenge-random-link"
                    }, t)) : null
                }
                renderErrorView() {
                    var {
                        submission: e
                    } = this.props, {
                        contest_slug: t,
                        slug: a
                    } = e;
                    return l().createElement("div", {
                        className: "error-message-wrapper"
                    }, l().createElement(j.Link, {
                        className: "error-link",
                        to: (0, u.cu)({
                            slug: a,
                            contest_slug: t
                        })
                    }, "Try Again!"))
                }
                renderNewSubmissionStatusBanner() {
                    var {
                        submission: e,
                        challenge: t,
                        profile: a
                    } = this.props, {
                        timerCompleted: s
                    } = this.state, {
                        name: n,
                        next_challenge: i
                    } = e, r = "locked" === (i && i.status) && !s, o = this.getFinalScore(), c = o > 0, m = (0, I.L0)(e, t, a);
                    return l().createElement(B.Z, {
                        className: "theme-m-content submission-status-banner",
                        layer: 2
                    }, l().createElement("div", {
                        className: "submission-model-wrapper"
                    }, l().createElement("div", {
                        className: "points-message"
                    }, "solutionUnlocked" === m ? "You have successfully solved ".concat(n) : "Your ".concat(n, " submission got ").concat(o, " points.")), c ? this.renderSocialShare() : this.renderErrorView(), c && this.renderNextStarMessage(), c && r && this.renderChallengeLockedStatus(), c && this.renderNextChallengeLinks()), l().createElement("span", {
                        className: "ui-icon-cross cross-icon",
                        onClick: this.closeStatusBanner
                    }))
                }
                render() {
                    var {
                        submission: e
                    } = this.props;
                    return e ? this.renderNewSubmissionStatusBanner() : null
                }
            }(0, s.Z)(U, "propTypes", {
                submission: r().object,
                challenge: r().object,
                submissionActions: r().object.isRequired,
                appUtil: r().object.isRequired,
                profile: r().object,
                currentPlaylist: r().object.isRequired,
                isHomePageV2Enabled: r().bool
            }), U = (0, o.$j)(((e, t) => {
                var {
                    submissions: a,
                    profile: s
                } = e.community, {
                    location: n
                } = t.appUtil, l = (0, O.t1)(n), i = e.community.playlist[l] || {}, r = (0, M.YO)(e);
                return {
                    submission: a.globalStatus,
                    profile: s,
                    currentPlaylist: i,
                    isHomePageV2Enabled: r
                }
            }), (e => ({
                submissionActions: (0, P.DE)(L.Z, e)
            })))(U);
            const G = U = (0, m.Z)(U);

            function H(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : H(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            class K extends l().Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "renderItem", (e => l().createElement("div", {
                        className: "tab-item-color",
                        "data-analytics": "ChallengeViewTab",
                        "data-attr1": e.to,
                        "data-attr2": e.title,
                        "data-attr3": "no_full_screen"
                    }, l().createElement("span", {
                        className: "ui-icon-label"
                    }, e.title), e.iconClass && l().createElement("i", {
                        className: "".concat(e.iconClass)
                    }))))
                }
                getTabList() {
                    var {
                        challenge: e,
                        contest: t,
                        appUtil: a
                    } = this.props, {
                        isRouteActive: s
                    } = a, n = (0, u.cu)(e), l = (0, u.fp)({
                        challenge: e,
                        contest: t,
                        challengeBaseUrl: n
                    }).map((e => W(W({}, e), {}, {
                        to: e.url
                    })));
                    return {
                        tabList: l,
                        activeTabIndex: (0, u.p$)(l, n, s)
                    }
                }
                getMobileTabList(e) {
                    return e.filter((e => "forumTab" !== e.id))
                }
                render() {
                    var {
                        challenge: e
                    } = this.props, {
                        tabList: t,
                        activeTabIndex: a
                    } = this.getTabList(), s = this.getMobileTabList(t), n = a;
                    return l().createElement("div", {
                        className: "challenge-page-header container"
                    }, l().createElement(G, {
                        challenge: e
                    }), l().createElement(d.Hi, null, l().createElement(D.ZP, {
                        as: D.ZP.AS.NAV,
                        activeTab: a
                    }, l().createElement(D.ZP.List, {
                        tabList: t,
                        renderItem: this.renderItem,
                        visibleTabCount: 6
                    }))), l().createElement(d.ij, null, l().createElement(D.ZP, {
                        as: D.ZP.AS.NAV,
                        activeTab: n
                    }, l().createElement(D.ZP.List, {
                        tabList: s,
                        renderItem: this.renderItem
                    }))))
                }
            }
            K = (0, o.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    profile: s
                } = e.community, {
                    rating: n,
                    detail: l
                } = (0, u.CD)(e, a);
                return {
                    challenge: l,
                    contest: {
                        slug: l.contest_slug
                    },
                    rating: n,
                    profile: s
                }
            }), (e => ({
                challengeActions: (0, P.DE)(A.Z, e)
            })))(K);
            const Q = K = (0, m.Z)(K);
            var Y = a("OYaA"),
                z = a("Pk8f");

            function X(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : X(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var $ = a("qdqJ"),
                ee = a("XEGk");

            function te(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : te(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            class se extends n.Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "state", {
                        isShareAvailable: !1,
                        metaAttribute: {
                            url: void 0
                        },
                        open: !1
                    }), (0, s.Z)(this, "toggleFab", (() => {
                        var {
                            open: e
                        } = this.state, {
                            analyticsAttributes: t
                        } = this.props;
                        this.setState({
                            open: !e
                        }, (() => {
                            f.Z.track("Click", "HrFabShareFallback".concat(this.state.open ? "Open" : "Close"), t)
                        }))
                    })), (0, s.Z)(this, "setShareStatus", (() => {
                        navigator.share && this.setState({
                            isShareAvailable: !0
                        })
                    })), (0, s.Z)(this, "getOpenGraphData", (() => {
                        var {
                            pathname: e
                        } = this.props.location, t = document.querySelector('meta[property="og:title"]'), a = document.querySelector('meta[property="og:description"]');
                        return {
                            title: t && t.getAttribute("content"),
                            description: a && a.getAttribute("content"),
                            url: "".concat(window.location.origin).concat(e, "?utm_source=mobile&utm_medium=mobile_browser")
                        }
                    }))
                }
                componentDidMount() {
                    this.setShareStatus();
                    var e = this.getOpenGraphData();
                    (0, $.Z)(e.url).then((t => {
                        var a = ae(ae({}, e), {}, {
                            url: t
                        });
                        this.setState({
                            metaAttribute: a
                        })
                    }))
                }
                render() {
                    var {
                        isShareAvailable: e,
                        open: t,
                        metaAttribute: a
                    } = this.state, {
                        challenge: s,
                        contest: n,
                        analyticsAttributes: i
                    } = this.props;
                    return (a.url || !e) && l().createElement(z.Z, {
                        open: t,
                        icon: "ui-icon-share",
                        handleOpen: e ? () => function(e, t) {
                            if (navigator.share) {
                                var {
                                    title: a,
                                    description: s,
                                    url: n
                                } = e;
                                navigator.share({
                                    title: a,
                                    text: s,
                                    url: n
                                }).then((() => {
                                    f.Z.track("Click", "HrFabShareNativeSuccess", t)
                                })).catch((e => {
                                    var t = JSON.stringify(e),
                                        a = J(J({}, analyticsAttribute), {}, {
                                            attribute5: t
                                        });
                                    f.Z.track("Click", "HrFabShareNativeFailure", a)
                                }))
                            }
                        }(a, i) : this.toggleFab,
                        handleClose: this.toggleFab
                    }, l().createElement(ee.Z, {
                        challenge: s,
                        contest: n,
                        fab: !0
                    }))
                }
            }(0, s.Z)(se, "propTypes", {
                challenge: r().object.isRequired,
                contest: r().object.isRequired,
                location: r().object.isRequired,
                analyticsAttributes: r().shape({
                    attribute1: r().string.isRequired,
                    attribute2: r().any.isRequired,
                    attribute3: r().string,
                    attribute4: r().string
                }).isRequired
            });
            const ne = se;
            a("tcpQ");
            class le extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "closeLevelupModal", (e => {
                        this.setState({
                            updatedBadge: void 0
                        }, e)
                    })), (0, s.Z)(this, "onLevelUpContinue", (() => {
                        this.closeLevelupModal((() => {
                            this.getElem(".challenge-response") && this.getElem(".challenge-response").scrollIntoView()
                        }))
                    })), this.state = {
                        authModalOpen: !0
                    }
                }
                UNSAFE_componentWillReceiveProps(e) {
                    var t = this.getUpdatedBadge(e.badges);
                    t && this.setState({
                        updatedBadge: t
                    })
                }
                getUpdatedBadge(e) {
                    var {
                        badges: t
                    } = this.props, a = {};
                    t.forEach((e => {
                        a[e.badge_type] = e
                    }));
                    for (var s = 0, n = e.length; s < n; s++) {
                        var l = e[s],
                            i = a[l.badge_type];
                        if (i && (i.stars !== l.stars || i.level !== l.level)) return l
                    }
                }
                getElem(e) {
                    return this.challengeView.querySelector(e)
                }
                renderButton() {
                    return l().createElement(h.ZP, {
                        className: "ui-btn-primary",
                        onClick: this.onLevelUpContinue
                    }, "Continue")
                }
                renderBadgeLevelUpModal() {
                    var {
                        updatedBadge: e
                    } = this.state;
                    return l().createElement(Z, {
                        open: !0,
                        onClose: this.closeLevelupModal,
                        badge: e,
                        ctaButton: this.renderButton()
                    })
                }
                render() {
                    var {
                        profile: e,
                        appUtil: t,
                        challenge: a,
                        contest: s,
                        location: n
                    } = this.props, {
                        authModalOpen: i,
                        updatedBadge: r
                    } = this.state, {
                        location: {
                            query: {
                                h_l: o
                            }
                        }
                    } = t, {
                        challengeSlug: c,
                        contestSlug: m = "master"
                    } = this.props, u = {
                        attribute1: "ChallegePage",
                        attribute2: a.id,
                        attribute3: m,
                        attribute4: c
                    };
                    return l().createElement("div", {
                        className: "challenge-view theme-m",
                        ref: e => this.challengeView = e
                    }, l().createElement(Q, null), this.props.children, !e.username && i && l().createElement(g.Z, {
                        open: !0,
                        onClose: () => this.setState({
                            authModalOpen: !1
                        }),
                        initialMessage: {
                            type: "info",
                            data: "Please signup or login in order to view this challenge"
                        },
                        tab: "signup"
                    }), r && this.renderBadgeLevelUpModal(), (0, O.QJ)(o) && l().createElement(Y.Z, {
                        featureId: 3,
                        align: "left",
                        className: "feature-feedback-bottom-right-fixed",
                        popoverClassName: "popover-bottom-right-fixed",
                        coordinate: {
                            right: "83px",
                            bottom: "15px"
                        },
                        theme: "theme-m"
                    }), l().createElement(d.ij, null, l().createElement(ne, {
                        challenge: a,
                        contest: s,
                        location: n,
                        analyticsAttributes: u
                    })))
                }
            }(0, s.Z)(le, "propTypes", {
                profile: r().object.isRequired,
                challenge: r().object.isRequired,
                contest: r().object.isRequired,
                badges: r().array,
                appUtil: r().object,
                globalSubmissionStatus: r().object,
                abTest: r().object
            }), le = (0, o.$j)(((e, t) => {
                var {
                    profile: a,
                    badges: s,
                    submissions: n,
                    featureFlags: l
                } = e.community, {
                    params: i
                } = t.appUtil, {
                    contestSlug: r = "master"
                } = i, {
                    badgeTypes: o,
                    detail: c
                } = (0, u.CD)(e, i), m = o.map((e => s.badge[e]));
                return {
                    challenge: c,
                    contest: (0, p.sh)(r, e),
                    profile: a,
                    featureFlags: l,
                    badges: m,
                    globalSubmissionStatus: n.globalStatus || {}
                }
            }))(le), le = (0, c.ZP)(le);
            const ie = le = (0, m.Z)(le)
        },
        VflA: (e, t, a) => {
            a.d(t, {
                Z: () => b
            });
            var s = a("L5+t"),
                n = a("DTvD"),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("0ier"),
                c = a("XBRQ"),
                m = a("rpVu"),
                d = a("KMmN"),
                u = a("qxc9"),
                h = a("WLt8"),
                p = a("eRsb");
            class g extends n.PureComponent {
                tutorialDetails() {
                    var {
                        tabSlug: e
                    } = this.props.appUtil.params;
                    return l().createElement("div", null, l().createElement("h2", {
                        className: "text-sec-headline-s"
                    }, e, " details"), l().createElement("hr", {
                        className: "hr-line-light"
                    }))
                }
                renderSidebar(e) {
                    var {
                        challenge: t
                    } = this.props;
                    return l().createElement(c.Hi, null, l().createElement("aside", {
                        className: "hackdown-sidebar right-pane challenge-sidebar"
                    }, this.tutorialDetails(), l().createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }), l().createElement(p.ZP, {
                        challenge: t
                    })))
                }
                render() {
                    var {
                        sidebar: e,
                        content: t
                    } = this.props.pageContent;
                    return l().createElement("div", {
                        className: "container hackdown-container panes-container"
                    }, l().createElement(h.ZP, {
                        className: "left-pane"
                    }, l().createElement(h.ZP.Content, {
                        className: "tab-content"
                    }, l().createElement("div", {
                        className: "hackdown-content"
                    }, l().createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })))), this.renderSidebar(e))
                }
            }(0, s.Z)(g, "propTypes", {
                pageContent: r().object.isRequired,
                challengeSlug: r().string.isRequired,
                appUtil: r().object.isRequired,
                abTest: r().object.isRequired,
                isEditorialAvailable: r().bool,
                contestSlug: r().string,
                challenge: r().object.isRequired
            }), g = (0, o.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    pageContent: s,
                    is_editorial_available: n,
                    challengeSlug: l,
                    contest_slug: i,
                    detail: r
                } = (0, u.$A)(a, e);
                return {
                    pageContent: s,
                    isEditorialAvailable: n,
                    challengeSlug: l,
                    contestSlug: i,
                    challenge: r
                }
            }))(g), g = (0, d.ZP)(g);
            const b = g = (0, m.Z)(g)
        },
        Ffka: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var s = a("DTvD"),
                n = a.n(s),
                l = a("17x9"),
                i = a.n(l),
                r = a("0ier"),
                o = a("ANjH"),
                c = a("rpVu"),
                m = a("qxc9"),
                d = a("znFd"),
                u = a("dWRL");

            function h(e) {
                var {
                    challenge: t,
                    contest: a
                } = e;
                return n().createElement("div", {
                    className: "challenge-page-label-wrapper align-items-center"
                }, n().createElement("h1", {
                    className: "ui-icon-label page-label"
                }, t.name, a.ended && n().createElement("span", {
                    "data-balloon": "Any further submissions will not be considered for leaderboard.",
                    "data-balloon-pos": "up"
                }, n().createElement("i", {
                    className: "ui-icon-lock",
                    "aria-label": "Lock icon"
                }))), n().createElement(u.ZP, {
                    challenge: t,
                    className: "icon-bookmark"
                }))
            }
            h.propTypes = {
                challenge: i().object,
                appUtil: i().object,
                contest: i().object.isRequired
            };
            const p = (0, o.qC)(c.Z, (0, r.$j)(((e, t) => {
                var {
                    params: a,
                    params: {
                        contestSlug: s = "master"
                    }
                } = t.appUtil, {
                    detail: n
                } = (0, m.CD)(e, a);
                return {
                    challenge: n,
                    contest: (0, d.sh)(s, e)
                }
            })))(h)
        },
        eRsb: (e, t, a) => {
            a.d(t, {
                ZP: () => g
            }), a("Z2Ku");
            var s = a("DTvD"),
                n = a.n(s),
                l = a("17x9"),
                i = a.n(l),
                r = a("66t9"),
                o = a("TSYQ"),
                c = a.n(o),
                m = a("ANjH"),
                d = a("rpVu"),
                u = a("qxc9");

            function h(e) {
                var {
                    slug: t,
                    linkText: a,
                    icon: s,
                    dataAttr: l,
                    challenge: i,
                    appUtil: {
                        params: {
                            challengeSlug: o,
                            contestSlug: m = "master"
                        },
                        isRouteActive: d
                    }
                } = e, h = "".concat((0, u.cu)(i), "/").concat(t);
                return d(h) ? null : n().createElement("div", {
                    className: "link-wrapper"
                }, n().createElement(r.Link, {
                    to: h,
                    "data-analytics": "ChallengeSidebarUI",
                    "data-attr1": l,
                    "data-attr2": o,
                    "data-attr3": m
                }, n().createElement("i", {
                    className: c()(s, "ui-icon-grey sidebar-icon")
                }), n().createElement("span", {
                    className: "ui-icon-label"
                }, a)))
            }
            a("WktJ");
            var p = e => {
                var {
                    challenge: t,
                    challenge: {
                        custom_tabs: a,
                        is_editorial_available: s,
                        kind: l
                    }
                } = e, {
                    location: {
                        pathname: i
                    }
                } = e.appUtil, r = i.includes("/forum"), o = "mcq" === l, c = !!(Array.isArray(a) ? a.length : a);
                return !c && !s && o && r ? null : n().createElement("div", {
                    className: "challenge-sidebar-help"
                }, n().createElement("h2", {
                    className: "text-sec-headline-s"
                }, "Need Help?"), n().createElement("hr", {
                    className: "hr-line-light"
                }), n().createElement("div", {
                    className: "mlB"
                }, !!c && n().createElement(h, {
                    slug: "tutorial",
                    linkText: "View tutorial",
                    icon: "ui-icon-tutorial",
                    dataAttr: "tutorial",
                    challenge: t
                }), n().createElement(h, {
                    slug: "forum",
                    linkText: "View discussions",
                    icon: "ui-icon-discussion",
                    dataAttr: "discussions",
                    challenge: t
                }), s && n().createElement(h, {
                    slug: "editorial",
                    linkText: "View editorial",
                    icon: "ui-icon-editorial",
                    dataAttr: "editorial",
                    challenge: t
                }), !o && n().createElement(h, {
                    slug: "leaderboard",
                    linkText: "View top submissions",
                    icon: "ui-icon-trophy",
                    dataAttr: "topscorers",
                    challenge: t
                })))
            };
            h.propTypes = {
                appUtil: i().object.isRequired,
                slug: i().string.isRequired,
                linkText: i().string.isRequired,
                icon: i().string.isRequired,
                dataAttr: i().string.isRequired,
                challenge: i().object.isRequired
            }, p.propTypes = {
                challenge: i().object.isRequired
            }, h = (0, d.Z)(h);
            const g = (0, m.qC)(d.Z)(p)
        },
        XEGk: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var s = a("DTvD"),
                n = a.n(s),
                l = a("17x9"),
                i = a.n(l),
                r = a("bVDs");

            function o(e) {
                var t, a, s, {
                        challenge: l,
                        contest: i,
                        fab: o
                    } = e,
                    {
                        slug: c,
                        contest_slug: m
                    } = l;
                return "master" === m ? (t = c.startsWith("30") ? "30daysofcode" : c.startsWith("ctci") ? "crackingthecodinginterview" : "challenges", a = l.name, s = c) : (t = "contest", a = i.name, s = i.slug), n().createElement("div", {
                    className: "social-share-wrap-2"
                }, n().createElement("div", {
                    className: "clearfix"
                }, n().createElement(r.ZP, {
                    align: "left",
                    name: a,
                    page: t,
                    slug: s,
                    fab: o
                })))
            }
            o.propTypes = {
                challenge: i().object,
                contest: i().object.isRequired,
                fab: i().bool
            }, o.defaultProps = {
                fab: !1,
                challenge: {}
            };
            const c = o
        },
        "D+35": (e, t, a) => {
            a.d(t, {
                ZP: () => R
            });
            var s = a("L5+t"),
                n = (a("CX2u"), a("DTvD")),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("0ier"),
                c = a("wd/R"),
                m = a.n(c),
                d = a("TSYQ"),
                u = a.n(d),
                h = a("ANjH"),
                p = a("XBRQ"),
                g = a("+Ebv"),
                b = a("5F93"),
                E = a("qxc9"),
                v = a("KMmN"),
                k = a("rpVu"),
                f = a("CXtD"),
                y = a("WLt8"),
                S = a("CmRW"),
                x = a("eRsb"),
                N = a("kU9v"),
                w = a("6GtL"),
                C = a("u6Nk");
            class _ extends n.Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "state", {
                        submittingRating: !1,
                        submittingSuggestion: !1,
                        showSuggestionForm: !1,
                        message: "",
                        suggestion: ""
                    }), (0, s.Z)(this, "onRatingSubmit", (e => {
                        var t = 1 === e && "submittingRating";
                        this.submitFeedback(t, e), this.setState({
                            showSuggestionForm: 3 === e
                        })
                    })), (0, s.Z)(this, "resetStates", (() => {
                        this.setState({
                            submittingRating: !1,
                            submittingSuggestion: !1,
                            showSuggestionForm: !1,
                            suggestion: ""
                        })
                    })), (0, s.Z)(this, "onSubmit", (e => {
                        e.preventDefault(), this.submitFeedback("submittingSuggestion")
                    })), (0, s.Z)(this, "onTextareaChange", (e => {
                        this.setState({
                            suggestion: e.target.value
                        })
                    }))
                }
                submitFeedback(e, t) {
                    e && this.setState({
                        [e]: !0
                    });
                    var {
                        suggestion: a
                    } = this.state, {
                        appUtil: {
                            location: {
                                pathname: s
                            }
                        }
                    } = this.props, n = "submittingSuggestion" === e ? "" : 1 === t ? "success" : "error";
                    (0, N.ajaxPutWithToken)({
                        url: (0, C.getApiUrl)("updateFeedback", {
                            apiPrefix: "rest",
                            id: 4
                        }),
                        data: {
                            rating: t,
                            description: a,
                            path: s
                        },
                        loadingMessage: !1,
                        success: () => {
                            e && this.resetStates(), this.setState({
                                message: n
                            })
                        },
                        error: () => {
                            this.resetStates()
                        }
                    }), w.Z.batch_track("Click", "FeedbackEditorialSubmit", {
                        attribute1: t || 3,
                        attribute2: a
                    })
                }
                render() {
                    var {
                        showSuggestionForm: e,
                        suggestion: t,
                        submittingRating: a,
                        submittingSuggestion: s,
                        message: i
                    } = this.state, {
                        className: r
                    } = this.props;
                    return l().createElement("div", {
                        className: u()("container challenge-editorial-feedback", r)
                    }, l().createElement("h2", {
                        className: "feedback-heading"
                    }, "Feedback"), l().createElement("p", {
                        className: "text-content"
                    }, "Was this editorial helpful?"), l().createElement(S.ZP, {
                        className: "ui-btn-secondary",
                        onClick: this.onRatingSubmit.bind(null, 1),
                        loading: a,
                        "data-automation": "yes"
                    }, "Yes"), l().createElement(S.ZP, {
                        className: "ui-btn-secondary",
                        onClick: this.onRatingSubmit.bind(null, 3),
                        "data-automation": "no"
                    }, "No"), "success" === i && l().createElement("div", {
                        className: "banner banner-success text-content"
                    }, l().createElement("i", {
                        className: "ui-icon-happy-face"
                    }), l().createElement("span", null, "Thanks for the feedback.")), "error" === i && l().createElement("div", {
                        className: "banner banner-error text-content"
                    }, l().createElement("i", {
                        className: "ui-icon-sad-face"
                    }), l().createElement("span", null, "Sorry about that. What can we do better?")), e && l().createElement(n.Fragment, null, l().createElement("h2", {
                        className: "feedback-heading"
                    }, "How can it be better?"), l().createElement("form", {
                        onSubmit: this.onSubmit
                    }, l().createElement("textarea", {
                        placeholder: "Add your comments",
                        className: "feedback-suggestion",
                        rows: "5",
                        cols: "10",
                        onChange: this.onTextareaChange,
                        value: t,
                        title: "Add your comments",
                        name: "suggestion"
                    }), l().createElement(S.ZP, {
                        className: "ui-btn-primary",
                        loading: s,
                        disabled: !t
                    }, "Submit"))))
                }
            }(0, s.Z)(_, "propTypes", {
                appUtil: r().object.isRequired
            });
            const T = (0, h.qC)(k.Z)(_);
            var Z = a("IqDh"),
                P = a("P6qq");

            function D(e) {
                var {
                    name: t,
                    avatar: a,
                    task: s,
                    tasker: n,
                    challengeSlug: i,
                    contestSlug: r,
                    content: o,
                    dataAnalytics: c,
                    className: m
                } = e, d = {
                    username: t,
                    avatar: a
                }, h = {
                    attribute1: "ChallegeEditorial",
                    attribute2: t,
                    attribute3: r || "master",
                    attribute4: i
                };
                return l().createElement("section", {
                    className: u()("challenge-editorial-block", m)
                }, !!t && l().createElement("div", {
                    className: "editorial-subsection-header"
                }, l().createElement(f.Z, {
                    avatar: a,
                    name: t,
                    avatarClass: "avatar"
                }), l().createElement("h2", {
                    className: "d-inline align-middle editorial-subsection-heading"
                }, "".concat(s, " by ")), l().createElement(Z.Z, {
                    user: d,
                    analyticsAttributes: h
                }, l().createElement(P.Z, {
                    username: t,
                    newTab: !0,
                    linkAttributes: {
                        className: "align-middle profile-card",
                        "data-analytics": c || "Editorial".concat(n, "UserName"),
                        "data-attr1": i,
                        "data-attr2": t
                    }
                }))), !!n && l().createElement("div", {
                    className: "editorial-header-box"
                }, l().createElement("p", {
                    className: "editorial-header-para"
                }, "Problem ".concat(n, "'s code:"))), !!o && l().createElement("div", {
                    className: "editorial-code-box"
                }, l().createElement("div", {
                    className: "hackdown-content",
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })))
            }

            function A(e) {
                var {
                    title: t,
                    value: a,
                    className: s,
                    htmlContent: n
                } = e;
                return l().createElement("div", {
                    className: "editorial-details"
                }, l().createElement("span", {
                    className: "editorial-sec-headline"
                }, "".concat(t, ": ")), n ? l().createElement("div", {
                    className: u()("editorial-sec-text html-content", s),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }) : l().createElement("span", {
                    className: u()("editorial-sec-text", s)
                }, a))
            }
            D.propTypes = {
                name: r().string.isRequired,
                task: r().string.isRequired,
                tasker: r().string,
                content: r().string,
                avatar: r().string,
                challengeSlug: r().string,
                dataAnalytics: r().string,
                className: r().string
            }, A.propTypes = {
                title: r().string.isRequired,
                value: r().string,
                htmlContent: r().string,
                className: r().string
            };
            class j extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "unlockEditorial", (() => {
                        var {
                            challenge: e,
                            contest: t,
                            challengeActions: a,
                            appUtil: {
                                isAuthRequired: s
                            }
                        } = this.props;
                        s({
                            type: "info",
                            data: "Please signup or login to perform this action."
                        }) || (this.setState({
                            isLoading: !0
                        }), a.getEditorialDetail({
                            challengeSlug: e.slug,
                            contestSlug: t.slug,
                            unlock: !0
                        }).finally((() => this.setState({
                            isLoading: !1
                        }))))
                    })), (0, s.Z)(this, "renderLockedState", (() => {
                        var {
                            challenge: e,
                            appUtil: {
                                assetPath: t
                            }
                        } = this.props, {
                            isLoading: a
                        } = this.state;
                        return l().createElement("section", {
                            className: "theme-m container panes-container challenge-editorial-container"
                        }, l().createElement(y.ZP, {
                            className: "left-pane"
                        }, l().createElement(y.ZP.Content, {
                            className: "tab-content text-center"
                        }, l().createElement("div", {
                            className: "editorial-content-locked"
                        }, l().createElement("img", {
                            src: t("challenges/locked-content.svg"),
                            alt: "Lock Icon",
                            className: "editorial-lock-icon"
                        }), l().createElement("p", {
                            className: "text-para-headline"
                        }, "This editorial requires unlocking.", l().createElement("br", null), "If you unlock the editorial, your score will not be counted toward your progress."), l().createElement(S.KM, {
                            onClick: this.unlockEditorial,
                            loading: a
                        }, "Yes, I want to unlock")))), l().createElement(p.Hi, null, l().createElement("aside", {
                            className: "right-pane challenge-sidebar"
                        }, l().createElement(x.ZP, {
                            challenge: e
                        }))))
                    })), this.state = {
                        isLoading: !1
                    }
                }
                renderVideo() {
                    var {
                        challenge: e,
                        contest: t,
                        editorial: a
                    } = this.props;
                    if (!a.video || !a.video_author) return null;
                    var {
                        video_author: {
                            username: s,
                            avatar: n
                        }
                    } = a;
                    return l().createElement("div", {
                        className: "row"
                    }, l().createElement(D, {
                        name: s,
                        challengeSlug: e.slug,
                        contestSlug: t.slug,
                        avatar: n,
                        task: "Video Explanation",
                        dataAnalytics: "EditorialEditorialistUserName"
                    }), l().createElement("div", {
                        className: "mlB hackdown-video"
                    }, l().createElement("iframe", {
                        type: "text/html",
                        src: "https://www.youtube.com/embed/".concat(a.video.youtube_id, "?").concat((0, b.UK)({
                            enablejsapi: 1,
                            version: 3,
                            autoplay: 0,
                            rel: 0,
                            origin: "https://www.hackerrank.com"
                        })),
                        frameBorder: "0",
                        allowFullScreen: !0
                    })))
                }
                renderApproach() {
                    var {
                        challenge: e,
                        contest: t,
                        editorial: {
                            editorialist_avatar: a,
                            editorialist: s,
                            approach: n
                        }
                    } = this.props;
                    return n ? l().createElement(D, {
                        className: "approach-content",
                        name: s,
                        challengeSlug: e.slug,
                        contestSlug: t.slug,
                        avatar: a,
                        task: "Editorial",
                        content: n
                    }) : null
                }
                renderSetterCode() {
                    var {
                        challenge: e,
                        contest: t,
                        editorial: a
                    } = this.props;
                    return a.setter_code ? l().createElement(D, {
                        className: "editorial-setter-code",
                        name: a.setter_name,
                        challengeSlug: e.slug,
                        contestSlug: t.slug,
                        avatar: a.setter_avatar,
                        task: "Set",
                        tasker: "Setter",
                        content: a.setter_code
                    }) : null
                }
                renderTesterCode() {
                    var {
                        challenge: e,
                        contest: t,
                        editorial: a
                    } = this.props;
                    return a.tester_code ? l().createElement(D, {
                        className: "editorial-tester-code",
                        name: a.tester_name,
                        challengeSlug: e.slug,
                        contestSlug: t.slug,
                        avatar: a.tester_avatar,
                        task: "Tested",
                        tasker: "Tester",
                        content: a.tester_code
                    }) : null
                }
                renderOriginalContestInfo() {
                    var {
                        editorial: e,
                        challenge: t,
                        contest: a
                    } = this.props;
                    return "master" === a.slug ? e.contest_slug && "master" !== e.contest_slug ? l().createElement("p", null, l().createElement("span", {
                        className: "editorial-sec-headline"
                    }, "Originally featured in "), l().createElement("span", {
                        className: "editorial-sec-headline"
                    }, l().createElement("a", {
                        href: "/contests/".concat(e.contest_slug),
                        "data-analytics": "EditorialOriginalContest",
                        "data-attr1": t.slug,
                        "data-attr2": e.contest_slug
                    }, e.contest_name))) : l().createElement("p", null, l().createElement("span", {
                        className: "editorial-sec-headline"
                    }, "This is a Practice Challenge")) : null
                }
                render() {
                    var {
                        editorial: e,
                        challenge: t
                    } = this.props;
                    if (!t.is_solution_unlocked && !t.solved || !e || !Object.keys(e).length) return this.renderLockedState();
                    var a = void 0;
                    return e.statistics && (a = JSON.parse(e.statistics)), l().createElement("section", {
                        className: "theme-m challenge-editorial-container"
                    }, l().createElement("div", {
                        className: "container hackdown-container panes-container"
                    }, e.draft && l().createElement("h2", {
                        className: "text-center"
                    }, "THIS POST IS STILL A DRAFT."), l().createElement(y.ZP, {
                        className: "left-pane"
                    }, l().createElement(y.ZP.Content, {
                        className: "tab-content"
                    }, this.renderVideo(), this.renderApproach(), this.renderSetterCode(), this.renderTesterCode())), l().createElement(p.Hi, null, l().createElement("aside", {
                        className: "right-pane hackdown-sidebar challenge-sidebar"
                    }, l().createElement("div", {
                        className: "sidebar-editorial"
                    }, l().createElement("h2", {
                        className: "text-sec-headline-s"
                    }, "Statistics"), l().createElement("hr", {
                        className: "hr-line-light"
                    }), t.difficulty_name && l().createElement(A, {
                        title: "Difficulty",
                        value: t.difficulty_name,
                        className: "difficulty-".concat(t.difficulty_name.toLowerCase())
                    }), a && l().createElement(A, {
                        title: "Success Rate",
                        value: "".concat((0, b.NM)(100 * a.successful_submissions / a.challenge_submissions, 2), "%")
                    }), e.time_complexity_html ? l().createElement(A, {
                        title: "Time Complexity",
                        htmlContent: e.time_complexity_html
                    }) : l().createElement(A, {
                        title: "Time Complexity",
                        value: e.time_complexity
                    }), e.required_knowledge && l().createElement(A, {
                        title: "Required Knowledge",
                        value: e.required_knowledge
                    }), l().createElement(A, {
                        title: "Publish Date",
                        value: m()(e.created_at).format("MMM DD YYYY")
                    }), this.renderOriginalContestInfo(), a && l().createElement("p", {
                        className: "mlB editorial-sec-headline"
                    }, "Of the ".concat(a.contest_participation, " contest participants, ").concat(a.challenge_submissions, " (").concat((0, b.NM)(100 * a.challenge_submissions / a.contest_participation, 2), "%) submitted code for this challenge."))), l().createElement(x.ZP, {
                        challenge: t
                    })))), l().createElement(T, null))
                }
            }(0, s.Z)(j, "propTypes", {
                challenge: r().object.isRequired,
                contest: r().object.isRequired,
                editorial: r().object,
                challengeActions: r().object.isRequired,
                appUtil: r().object.isRequired
            }), j = (0, o.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    contestSlug: s
                } = a, {
                    detail: n,
                    editorial: l
                } = (0, E.CD)(e, a);
                return {
                    challenge: n,
                    contest: {
                        slug: s || n.contest_slug
                    },
                    editorial: l
                }
            }), (e => ({
                challengeActions: (0, h.DE)(g.Z, e)
            })))(j), j = (0, v.ZP)(j);
            const R = j = (0, k.Z)(j)
        },
        QozN: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var s = a("+9dH"),
                n = a("PRvr"),
                l = a("DTvD"),
                i = a.n(l),
                r = a("vN+2"),
                o = a.n(r),
                c = a("TSYQ"),
                m = a.n(c),
                d = a("3wkN"),
                u = ["isLoading", "gitIframeUrl", "className", "title"];

            function h(e) {
                var {
                    isLoading: t,
                    gitIframeUrl: a,
                    className: l,
                    title: r
                } = e, o = (0, n.Z)(e, u);
                return i().createElement(d.Z, null, i().createElement("div", {
                    className: m()("git-ux-iframe-wrapper", l)
                }, t && i().createElement("p", {
                    className: "git-ux-iframe-loader"
                }, "Please wait while the view is loading…"), i().createElement("iframe", (0, s.Z)({
                    src: a,
                    className: "git-ux-iframe",
                    title: r
                }, o))))
            }
            h.defaultProps = {
                isLoading: !1,
                title: "Git View",
                onLoad: o()
            };
            const p = h
        },
        "+9ki": (e, t, a) => {
            a.d(t, {
                ZP: () => it
            }), a("ioFf");
            var s = a("L5+t"),
                n = (a("Z2Ku"), a("DTvD")),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("TSYQ"),
                c = a.n(o),
                m = a("0ier"),
                d = a("ANjH"),
                u = a("HZII"),
                h = a.n(u),
                p = a("CmRW"),
                g = a("6wV0"),
                b = a("WLt8"),
                E = a("+Fuw"),
                v = a("XBRQ"),
                k = a("4Dgq"),
                f = a("ZxB4"),
                y = a("PQeH"),
                S = a("5F93"),
                x = a("zNJu"),
                N = a("rpVu"),
                w = a("6GtL"),
                C = a("kU9v"),
                _ = a("qxc9"),
                T = a("znFd"),
                Z = a("OGsD"),
                P = a("+9dH"),
                D = a("66t9");
            class A extends l().Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "state", void 0)
                }
                render() {
                    var {
                        tabsList: e,
                        activeTabIndex: t
                    } = this.props;
                    return l().createElement("div", {
                        className: "full-screen-sidebar"
                    }, l().createElement("div", {
                        className: "extra-sidebar-wrapper"
                    }, l().createElement("div", {
                        className: "sidebar-container"
                    }, l().createElement("ul", {
                        className: "sidebar-list"
                    }, e.map(((e, a) => l().createElement("li", {
                        key: a,
                        className: c()("tab-item", {
                            active: a === t
                        })
                    }, l().createElement(D.Link, {
                        className: "tab-item-color",
                        to: e.url,
                        "data-analytics": "ChallengeViewTab",
                        "data-attr1": e.url,
                        "data-attr2": e.title,
                        "data-attr3": "full_screen"
                    }, l().createElement("span", {
                        className: "ui-icon-label"
                    }, e.title)))))))))
                }
            }(0, s.Z)(A, "propTypes", {
                tabList: r().array,
                activeTabIndex: r().number
            });
            const j = A;
            var R = a("3Ama"),
                F = a("7Vvb"),
                L = a("Py6l"),
                B = (a("piGc"), e => {
                    var {
                        assetPath: t,
                        handleScreenRestore: a,
                        isHomePagev2Enabled: s,
                        isFrontend: n
                    } = e;
                    return l().createElement("div", {
                        className: "full-screeen-header",
                        "data-theme": "dark",
                        "data-theme-version": "3"
                    }, l().createElement("div", {
                        className: "align-left-conatiner"
                    }, l().createElement("div", {
                        className: "nav-link-item logo-wrap"
                    }, l().createElement(D.Link, {
                        to: s ? "/home" : "/dashboard",
                        "data-analytics": "NavBarLogo",
                        className: "logo-link d-flex align-items-center"
                    }, l().createElement("img", {
                        id: "feed-intro",
                        className: "logo-img-small",
                        src: t("brand/logo-new-white-green.svg"),
                        alt: "HackerRank Logo"
                    }))), l().createElement("div", {
                        className: "nav-logo-separator"
                    }, "|"), l().createElement(F.Z, null)), l().createElement("div", {
                        className: "align-right-container hr-flex hr-gap-0.25 hr-align-center"
                    }, n && l().createElement(R.Z, null), l().createElement("a", {
                        onClick: a,
                        className: "restoreScreen active-link no-select",
                        "data-analytics": "Exit fullscreen"
                    }, l().createElement("span", null, "Exit Full Screen View"), l().createElement("i", {
                        className: "ui-icon-restore-size"
                    }))))
                });
            const O = (0, m.$j)((e => ({
                isHomePageV2Enabled: (0, L.YO)(e)
            })))(B);
            var I = a("9iBw"),
                V = a("N4dn"),
                q = a("sLmT");
            a("i3qf");
            class M extends l().PureComponent {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "state", {}), (0, s.Z)(this, "tutorBotRef", l().createRef())
                }
                componentDidMount() {
                    this.props.isFrontend || (this.splitInstance = (0, I.Z)([this.leftPane, this.rightPane], {
                        sizes: this.props.sizes,
                        gutterSize: 12,
                        minSize: [300, 650]
                    }), function(e, t, a) {
                        var s, n, l, i, r;
                        a = (0, V.Mk)(a), e = (0, V.Mk)(e), t = (0, V.Mk)(t);
                        var o = e => {
                                var t = (0, V.pW)(a),
                                    n = (0, V.pW)(e),
                                    l = e.offsetHeight,
                                    i = n.top - t.top;
                                return {
                                    top: i,
                                    bottom: s - (i + l),
                                    height: l
                                }
                            },
                            c = e => {
                                var {
                                    top: t,
                                    bottom: a
                                } = o(e);
                                return {
                                    node: e,
                                    initialRelTop: t,
                                    initialRelBottom: a,
                                    initialPosition: e.style.position || "initial"
                                }
                            };
                        a.style.position = "relative";
                        var m = () => {
                                var s = o(e),
                                    n = o(t);
                                (r = (0, V.cx)(a)) > i ? u(s, n) : d(s, n), i = (0, V.cx)(a)
                            },
                            d = (e, t) => {
                                e.top > n.initialRelTop && (n.node.style.transform = "translate3d(0, ".concat(r, "px, 0)")), t.top > l.initialRelTop && (l.node.style.transform = "translate3d(0, ".concat(r, "px, 0)"))
                            },
                            u = (e, t) => {
                                0 === e.bottom && 0 === t.bottom || (e.bottom > 0 && h(n, e), t.bottom > 0 && h(l, t))
                            },
                            h = (e, t) => {
                                e.initialRelBottom >= 0 ? e.node.style.transform = "translate3d(0, ".concat(r, "px, 0)") : e.node.style.transform = "translate3d(0, ".concat(r + (s - t.height), "px, 0)")
                            },
                            p = () => {
                                s = a.offsetHeight, n = c(e), l = c(t), n.node.style.transform = "translate3d(0, 0, 0)", l.node.style.transform = "translate3d(0, 0, 0)", i = 0, r = 0, window.scrollTo({
                                    top: 0
                                }), a.addEventListener("scroll", m)
                            };
                        p(), window.addEventListener("resize", (() => {
                            a.removeEventListener("scroll", m), p()
                        }))
                    }(document.querySelector(".full-screen-sidebar"), document.querySelector(".left-pane-content"), this.leftPane))
                }
                componentWillUnmount() {
                    return this.splitInstance && this.splitInstance.destroy()
                }
                renderLeftPane() {
                    var {
                        leftPane: e,
                        isFrontend: t,
                        rightPane: a,
                        tabsList: s,
                        activeTabIndex: n,
                        tutorBotProps: i,
                        showTutorBot: r
                    } = this.props;
                    return t ? l().createElement("div", {
                        className: "hr-flex"
                    }, l().createElement(j, {
                        ref: e => {
                            this.sidebar = e
                        },
                        tabsList: s,
                        activeTabIndex: n
                    }), a) : l().createElement("div", {
                        className: "fs-panes-container"
                    }, l().createElement("div", {
                        className: "fs-left-pane",
                        ref: e => {
                            this.leftPane = e
                        }
                    }, l().createElement("div", {
                        className: "left-pane-container"
                    }, l().createElement(j, {
                        ref: e => {
                            this.sidebar = e
                        },
                        tabsList: s,
                        activeTabIndex: n
                    }), l().createElement("div", {
                        ref: this.tutorBotRef,
                        className: "left-pane-content tutor-bot-wrapper"
                    }, e, r && l().createElement(k.L, (0, P.Z)({
                        sendAnalyticsFn: w.Z,
                        containerRef: this.tutorBotRef,
                        tutorBotApiUrl: q.bl.tutorBotApiUrl,
                        tutorBotAuthUrl: q.bl.tutorBotAuthUrl,
                        tutorBotEnv: "prod",
                        tutorBotAuthToken: ""
                    }, i))))), a && l().createElement("div", {
                        ref: e => {
                            this.rightPane = e
                        },
                        className: "fs-right-pane"
                    }, a))
                }
                render() {
                    var {
                        assetPath: e,
                        handleScreenRestore: t,
                        isFrontend: a
                    } = this.props;
                    return l().createElement("div", {
                        className: "full-screen-view"
                    }, l().createElement(O, {
                        assetPath: e,
                        handleScreenRestore: t,
                        isFrontend: a
                    }), l().createElement("div", {
                        className: "contents-wrapper"
                    }, this.renderLeftPane()))
                }
            }(0, s.Z)(M, "propTypes", {
                isFrontend: r().bool,
                leftPane: r().element,
                rightPane: r().element,
                assetPath: r().func,
                tabsList: r().array,
                activeTabIndex: r().number,
                handleScreenRestore: r().func,
                sizes: r().array,
                tutorBotProps: r().object,
                showTutorBot: r().bool
            }), (0, s.Z)(M, "defaultProps", {
                sizes: [45, 55.5]
            });
            const U = M;
            var G = a("cUsN"),
                H = a("+Ebv"),
                W = a("4Qk4"),
                K = a("eRsb");
            class Q extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "lockTimeout", void 0), (0, s.Z)(this, "retry", (() => {
                        var {
                            challengeActions: e,
                            challenge: t
                        } = this.props;
                        this.setState({
                            selectedAnswer: void 0
                        }), e.uptateRetry({
                            challengeSlug: t.slug,
                            contestSlug: t.contest_slug,
                            retry: !0
                        })
                    })), this.state = {}
                }
                UNSAFE_componentWillReceiveProps(e) {
                    e.challenge !== this.props.challenge && this.setState({
                        selectedAnswer: void 0
                    })
                }
                componentWillUnmount() {
                    clearTimeout(this.lockTimeout)
                }
                selectAnswer(e) {
                    this.stopLockTimer();
                    var {
                        challenge: t,
                        appUtil: a
                    } = this.props, {
                        id: s,
                        hacker_mcq_attempt: n,
                        retry: l
                    } = t;
                    a.isAuthRequired({
                        type: "info",
                        data: "Please signup or login to perform this action."
                    }) || n && !l || (this.state.selectedAnswer !== e ? (w.Z.track("McqSubmissionStarted", "", {
                        attribute1: s,
                        attribute2: e
                    }), this.setState({
                        selectedAnswer: e
                    }), this.startLockTimer()) : this.setState({
                        selectedAnswer: void 0
                    }))
                }
                startLockTimer() {
                    this.setState({
                        lockTime: 0
                    }, (() => {
                        setTimeout((() => this.setState({
                            lockTime: 3e3
                        }))), this.lockTimeout = setTimeout((() => {
                            this.submitAnswer(), this.setState({
                                lockTime: void 0
                            })
                        }), 3e3)
                    }))
                }
                stopLockTimer() {
                    this.setState({
                        lockTime: void 0
                    }), clearTimeout(this.lockTimeout)
                }
                submitAnswer() {
                    var {
                        challengeActions: e,
                        challenge: t
                    } = this.props, {
                        slug: a,
                        contest_slug: s,
                        attempt_counter: n
                    } = t, {
                        selectedAnswer: l
                    } = this.state;
                    e.submitMcq({
                        challengeSlug: a,
                        contestSlug: s,
                        answer: l,
                        attemptCounter: n + 1
                    })
                }
                renderChoices() {
                    for (var {
                            choices: e
                        } = this.props.challenge, t = [], a = 0, s = e.length; a < s; a += 2) t.push(l().createElement("div", {
                        key: a,
                        className: "plB choices-wrapper"
                    }, this.renderChoice(e[a], a), !!e[a + 1] && this.renderChoice(e[a + 1], a + 1)));
                    return l().createElement("div", {
                        className: "choices-container"
                    }, t)
                }
                renderChoice(e, t) {
                    var a, s, {
                            id: n,
                            hacker_mcq_attempt: i,
                            answer: r,
                            retry: o
                        } = this.props.challenge,
                        {
                            selectedAnswer: m
                        } = this.state,
                        d = !o && r === t,
                        u = !o && i && i.answer === t;
                    return a = m === t || u ? "ui-icon-circle-filled" : void 0 === o || o ? "ui-icon-circle" : "ui-icon-circle disabled", d ? s = "ui-icon-check-circle" : u && (s = "ui-icon-cross"), l().createElement("div", {
                        className: "choice-item"
                    }, l().createElement("i", {
                        className: c()("answer-icon", a),
                        onClick: this.selectAnswer.bind(this, t),
                        "data-analytics": "McqChallengeOption",
                        "data-attr1": n,
                        "data-attr2": t
                    }), l().createElement("span", {
                        className: "ui-icon-label choice-label"
                    }, e), (d || u) && l().createElement("i", {
                        className: c()("answer-icon", s)
                    }))
                }
                renderAttemptLeft() {
                    var {
                        mcq_attempt_limit: e,
                        attempt_counter: t,
                        retry: a,
                        solved: s,
                        hacker_mcq_attempt: n
                    } = this.props.challenge, i = e - t, r = !!i && !a && !s && n && !n.solved;
                    return l().createElement("div", {
                        className: "attempts-message"
                    }, "You have", " ", l().createElement("strong", null, l().createElement("span", null, i)), " ", "attempts left.", r && l().createElement(p.ZP, {
                        className: "msL ui-btn ui-btn-primary",
                        onClick: this.retry
                    }, "Retry"))
                }
                renderLockProgress() {
                    var {
                        lockTime: e
                    } = this.state;
                    if (void 0 !== e) {
                        var t = 0 === e ? 0 : 100;
                        return l().createElement("div", {
                            className: "lock-choice-wrapper justify-content-between align-items-center"
                        }, l().createElement("p", {
                            className: "msR"
                        }, "Locking..."), l().createElement("div", {
                            className: "filler-wrapper"
                        }, l().createElement("div", {
                            className: "filler",
                            style: {
                                width: "".concat(t, "%"),
                                transitionDuration: "".concat(e, "ms")
                            }
                        })))
                    }
                }
                renderPrevNextButtons() {
                    var {
                        track: e,
                        previous_challenge: t,
                        next_challenge: a,
                        contest_slug: s
                    } = this.props.challenge, n = e && "tutorials" === e.track_slug, i = "master" === s ? "" : "/".concat(s);
                    return l().createElement("div", {
                        className: "prev-next-challenge mjT mjB clearfix"
                    }, t && !n && l().createElement("div", {
                        className: "previous-challenge pull-left"
                    }, l().createElement(D.Link, {
                        to: "".concat(i, "/challenges/").concat(t.slug),
                        "data-analytics": "mcq-challenge-prev"
                    }, l().createElement(p.ZP, {
                        className: "ui-btn ui-btn-secondary"
                    }, l().createElement("span", null, "‹ "), l().createElement("span", null, t.name), l().createElement("span", null, " (Previous)")))), a && !n && l().createElement("div", {
                        className: "next-challenge pull-right"
                    }, l().createElement(D.Link, {
                        to: "".concat(i, "/challenges/").concat(a.slug),
                        "data-analytics": "mcq-challenge-next"
                    }, l().createElement(p.ZP, {
                        className: "ui-btn ui-btn-primary"
                    }, l().createElement("span", null, a.name), l().createElement("span", null, " (Next) ›")))))
                }
                render() {
                    var {
                        profile: e,
                        challenge: t
                    } = this.props, {
                        body_html: a
                    } = t;
                    return l().createElement("div", {
                        className: "mcq-challenge-view theme-m"
                    }, l().createElement("div", {
                        className: "container qod-container panes-container"
                    }, l().createElement(b.ZP, {
                        className: "left-pane"
                    }, l().createElement(b.ZP.Content, {
                        className: "tab-content"
                    }, l().createElement("div", {
                        className: "question-title plB",
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    }), l().createElement("div", {
                        className: "plB"
                    }, this.renderChoices(), l().createElement("input", {
                        type: "hidden",
                        className: "update-link",
                        value: "0"
                    })), this.renderLockProgress(), !!e.username && this.renderAttemptLeft(), this.renderPrevNextButtons())), l().createElement(v.Hi, null, l().createElement("aside", {
                        className: "right-pane"
                    }, l().createElement(K.ZP, {
                        challenge: t
                    })))))
                }
            }(0, s.Z)(Q, "propTypes", {
                challenge: r().object.isRequired,
                profile: r().object.isRequired
            }), Q = (0, m.$j)((e => {
                var {
                    profile: t
                } = e.community;
                return {
                    profile: t
                }
            }), (e => ({
                challengeActions: (0, d.DE)(H.Z, e)
            })))(Q);
            const Y = Q = (0, N.Z)(Q);
            a("yt8O"), a("rGqo");
            var z = a("f0Wu"),
                X = a.n(z),
                J = a("aK2r"),
                $ = (a("pIFo"), a("+QRC")),
                ee = a.n($);
            class te extends l().Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "copyTestcase", (() => {
                        var {
                            raw_input: e
                        } = this.props.testCase;
                        ee()(e)
                    })), (0, s.Z)(this, "downloadTestcase", (() => {
                        var {
                            testcase_url: e
                        } = this.props.testCase;
                        window.open(e, "_blank")
                    }))
                }
                render() {
                    var {
                        testCase: e,
                        testCaseIndex: t
                    } = this.props, {
                        id: a,
                        raw_input: s,
                        raw_output: n,
                        sample_explanation: i,
                        sample_svg: r
                    } = e;
                    return s.replace("\n", "<br>"), l().createElement("div", {
                        className: "visual-test-case"
                    }, l().createElement("div", {
                        className: "challenge-sample-input-title"
                    }, l().createElement("div", {
                        className: "sample-input-header"
                    }, l().createElement("p", null, l().createElement("strong", null, "Sample Input ", t + 1))), l().createElement("div", {
                        className: "sample-input-buttons"
                    }, l().createElement("a", {
                        href: "#!",
                        className: "msR",
                        onClick: this.copyTestcase
                    }, "Copy"), l().createElement("a", {
                        href: "#",
                        onClick: this.downloadTestcase
                    }, "Download"))), l().createElement("div", {
                        className: "visual-input-style visual-hackdown-content"
                    }, l().createElement("div", {
                        className: "input-left"
                    }, l().createElement("pre", {
                        className: "pre-style"
                    }, l().createElement("div", {
                        className: "img-style",
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    }))), l().createElement("div", {
                        className: "input-right"
                    }, l().createElement("pre", {
                        className: "pre-style"
                    }, l().createElement("div", {
                        className: "input-text"
                    }, (0, S.eN)(s))))), l().createElement("div", {
                        className: "challenge-sample-output-title"
                    }, l().createElement("p", null, l().createElement("strong", null, "Sample Output ", t + 1))), l().createElement("div", {
                        className: "challenge-sample-output-body"
                    }, l().createElement("div", {
                        className: "visual-hackdown-content"
                    }, l().createElement("pre", null, l().createElement("code", null, l().createElement("div", null, (0, S.eN)(n)))))), l().createElement("div", {
                        className: "challenge-sample-explanation-title"
                    }, !!i && l().createElement("p", null, l().createElement("strong", null, "Explanation ", t + 1))), l().createElement("div", {
                        className: "challenge-explanation-body"
                    }, l().createElement("p", {
                        className: "explanation-style"
                    }, l().createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }))))
                }
            }
            te.propTypes = {
                testCase: r().object,
                testCaseIndex: r().number
            };
            const ae = te;
            var se = (0, N.Z)((function(e) {
                    var {
                        text: t,
                        framework: a,
                        appUtil: s
                    } = e, [i, r] = (0, n.useState)(!1), {
                        params: {
                            challengeSlug: o,
                            contestSlug: c
                        },
                        location: {
                            query: m
                        }
                    } = s;
                    return l().createElement(p.Dr, {
                        className: "project-instruction-copy-btn",
                        onClick: function() {
                            ee()(t), r(!0), setTimeout((() => {
                                r(!1)
                            }), 1e3), w.Z.batch_track("Click", "CopyProjectInstructions", {
                                attribute1: t,
                                attribute2: c,
                                attribute3: o,
                                attribute6: a,
                                attribute11: "true" === m.isFullScreen
                            })
                        },
                        "data-event-category": "HRC Practice",
                        "data-event-label": "CopyProjectInstructions",
                        "data-cd-challenge-slug": o,
                        "data-cd-challenge-framework": a,
                        "data-cd-contest-slug": c
                    }, i ? "Copied!" : "Copy Command")
                })),
                ne = (0, N.Z)((function(e) {
                    var {
                        href: t,
                        text: a,
                        appUtil: s,
                        framework: n
                    } = e, {
                        params: {
                            challengeSlug: i,
                            contestSlug: r
                        },
                        location: {
                            query: o
                        }
                    } = s;
                    return l().createElement("li", null, l().createElement("a", {
                        href: t,
                        onClick: () => {
                            w.Z.batch_track("Click", "ChallengeSoftwareInstructions", {
                                attribute1: t,
                                attribute2: r,
                                attribute3: i,
                                attribute6: n,
                                attribute11: "true" === o.isFullScreen
                            })
                        },
                        target: "_blank",
                        "data-event-category": "HRC Practice",
                        "data-event-label": "ChallengeSoftwareInstructions",
                        "data-cd-challenge-slug": i,
                        "data-cd-challenge-framework": n,
                        "data-cd-contest-slug": r
                    }, a))
                }));

            function le(e) {
                var {
                    framework: t
                } = e, a = {
                    framework: t
                };
                switch (t) {
                    case f.DL.REACT:
                    case f.DL.ANGULAR:
                    case f.DL.NODE:
                        return l().createElement(n.Fragment, null, l().createElement("p", null, "We recommend installing ", l().createElement("b", null, "Node 8 LTS or above"), "."), l().createElement("ul", {
                            className: "software-instruction-list"
                        }, l().createElement(ne, (0, P.Z)({
                            href: "https://nodejs.org/en/download/",
                            text: "Download & Install Node.JS"
                        }, a))));
                    case f.DL.JAVA:
                        return l().createElement(n.Fragment, null, l().createElement("p", null, "The question(s) requires ", l().createElement("b", null, "Java Development Kit 8"), "."), l().createElement("ul", {
                            className: "software-instruction-list"
                        }, l().createElement(ne, (0, P.Z)({
                            href: "https://openjdk.java.net/install/",
                            text: "Install OpenJDK 8 on MacOS or Linux"
                        }, a)), l().createElement(ne, (0, P.Z)({
                            href: "https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",
                            text: "Install JDK 8 on Windows"
                        }, a))));
                    case f.DL.RAILS:
                        return l().createElement(n.Fragment, null, l().createElement("p", null, "The question(s) requires ", l().createElement("b", null, "Ruby version 2.2.2"), " or above and ", l().createElement("b", null, "Rails 5.0"), "."), l().createElement("ul", {
                            className: "software-instruction-list"
                        }, l().createElement(ne, (0, P.Z)({
                            href: "https://www.ruby-lang.org/en/documentation/installation/",
                            text: "Install Ruby"
                        }, a)), l().createElement(ne, (0, P.Z)({
                            href: "https://guides.rubyonrails.org/v5.0/getting_started.html#installing-rails",
                            text: "Install Rails"
                        }, a))));
                    case f.DL.PYTHON:
                        return l().createElement(n.Fragment, null, l().createElement("p", null, "This question requires ", l().createElement("b", null, "Python 2"), " and ", l().createElement("b", null, "Django 1.11.5"), "."), l().createElement("ul", {
                            className: "software-instruction-list"
                        }, l().createElement(ne, (0, P.Z)({
                            href: "https://docs.djangoproject.com/en/1.11/intro/install/",
                            text: "Install Python and Django"
                        }, a))));
                    case f.DL.DOT_NET:
                        return l().createElement(n.Fragment, null, l().createElement("p", null, "This question requires ", l().createElement("b", null, ".NET Core 3.0"), ". If you don’t have these installed on your local environment already, follow the instructions below to install them before you being the test."), l().createElement("ul", {
                            className: "software-instruction-list"
                        }, l().createElement(ne, (0, P.Z)({
                            href: "https://docs.microsoft.com/en-us/dotnet/core/install/sdk",
                            text: "Install .NET Core 3"
                        }, a))));
                    case f.DL.JUPYTER:
                    default:
                        return ""
                }
            }

            function ie(e) {
                var {
                    commands: t,
                    framework: a
                } = e;
                return t.map((e => {
                    var {
                        label: t,
                        command: s
                    } = e;
                    return l().createElement("div", {
                        key: t
                    }, l().createElement("p", {
                        className: "project-instruction"
                    }, l().createElement("span", {
                        className: "project-instruction-label"
                    }, t), l().createElement(se, {
                        text: s,
                        framework: a
                    })), l().createElement("pre", null, s))
                }))
            }
            const re = function(e) {
                var {
                    framework: t,
                    commands: a
                } = e;
                return l().createElement("div", {
                    className: "challenge-instructions"
                }, l().createElement("h2", {
                    className: "instruction-heading"
                }, "Software Instructions"), l().createElement(le, {
                    framework: t
                }), a && l().createElement(n.Fragment, null, l().createElement("h2", {
                    className: "instruction-heading"
                }, "Project Instructions"), l().createElement("p", null, "Use the following commands to work with this project"), l().createElement(ie, {
                    commands: a,
                    framework: t
                })))
            };
            var oe = a("/ayo");
            class ce extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "ctciHeaderTopics", void 0), (0, s.Z)(this, "contentRef", l().createRef()), (0, s.Z)(this, "renderVisualTestcases", (() => {
                        var {
                            sample_testcases: e
                        } = this.props.challenge;
                        if (e) return e.map(((e, t) => l().createElement(ae, {
                            key: e.id,
                            testCase: e,
                            testCaseIndex: t
                        })))
                    })), this.state = {}, this.ctciHeaderTopics = {
                        crack1: "cracking analysis",
                        "ctci-big-o": "asymptotic analysis",
                        "ctci-array-left-rotation": "arrays",
                        "ctci-making-anagrams": "strings",
                        "ctci-ransom-note": "hashing",
                        "ctci-linked-list-cycle": "linked lists",
                        "ctci-balanced-brackets": "stacks",
                        "ctci-queue-using-two-stacks": "queues",
                        "ctci-is-binary-search-tree": "binary search trees",
                        "ctci-find-the-running-median": "heaps",
                        "ctci-contacts": "tries",
                        "ctci-bubble-sort": "bubble sort",
                        "ctci-comparator-sorting": "sorting",
                        "ctci-ice-cream-parlor": "binary search",
                        "ctci-connected-cell-in-a-grid": "depth-first search",
                        "ctci-bfs-shortest-reach": "breadth-first search",
                        "ctci-fibonacci-numbers": "recursion",
                        "ctci-recursive-staircase": "recursion and memoization",
                        "ctci-coin-change": "dynamic programming",
                        "ctci-lonely-integer": "bit manipulation",
                        "ctci-merge-sort": "merge sort"
                    }
                }
                componentDidMount() {
                    var {
                        isProjectsEnabled: e
                    } = this.props;
                    if (e) {
                        var t = this.contentRef.current,
                            a = Array.from(t.querySelectorAll(".content-service-text p")),
                            s = a.filter((e => e.classList.contains("section-title")));
                        a.filter((e => e.textContent.length <= 1)).forEach((e => e.classList.add("whitespace"))), s.forEach((e => {
                            e.setAttribute("role", "heading"), e.setAttribute("aria-level", 2)
                        }))
                    }
                }
                getChallengeMessage() {
                    var {
                        challenge: e,
                        contest: t
                    } = this.props;
                    return e.has_ended ? "Submissions will no longer be placed on the leaderboard. You may still attempt this problem for practice." : e.has_started ? e.has_started && !e.has_ended && "weekly" === t.kind ? "Your submission will run against only preliminary test cases. Full test cases will run at the end of the day." : void 0 : "Hi Admin, this challenge is not yet open to the public."
                }
                renderVideoItem(e) {
                    var {
                        youtube_id: t,
                        title: a
                    } = e, s = X().duration(e.duration).format("mm:ss");
                    return l().createElement("li", {
                        className: "video-item"
                    }, l().createElement("button", {
                        className: "show-topic-video cursor btn msR",
                        onClick: () => this.setState({
                            openVideo: {
                                youtubeId: t,
                                title: a
                            }
                        }),
                        "data-attr3": t,
                        "data-attr4": a
                    }, "Watch Video"), l().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    }), l().createElement("span", null, " Tutorial (".concat(s, ")")))
                }
                renderHelp() {
                    var {
                        track: e,
                        videos: t
                    } = this.props.challenge;
                    if (e && "tutorials" === e.track_slug && "cracking-the-coding-interview" === e.slug) return l().createElement("div", {
                        className: "clearfix grey-header cap plL plR psT psB help-container"
                    }, l().createElement("div", {
                        className: "pull-left help-label"
                    }, l().createElement("p", {
                        className: "plT plB mlT mlB bold"
                    }, "Need Help?")), l().createElement("ul", {
                        className: "pull-left video-wrap"
                    }, t && t.length && this.renderVideoItem(t[0]), l().createElement("li", null, l().createElement("button", {
                        className: "show-editorials-tab cursor btn msR"
                    }, "Get Answer"), " Detailed video and written explanation.")))
                }
                render() {
                    var {
                        challenge: e,
                        selectedLanguage: t,
                        isProjectsEnabled: a
                    } = this.props, s = this.getChallengeMessage(), {
                        openVideo: n
                    } = this.state, {
                        framework: i,
                        commands: r
                    } = e, {
                        visual_output_flag: o,
                        kind: m
                    } = e, d = e.preferred_body_html || e.body_html;
                    if (t) {
                        var u = (e.available_translations || []).filter((e => e.language === t))[0];
                        u && (d = u.body_html)
                    }
                    return l().createElement("div", {
                        className: "theme-m hr_tour-problem-statement problem-statement have-external-links"
                    }, l().createElement("div", {
                        className: "content-text challenge-text mlB hackdown-container theme-m"
                    }, s && l().createElement("strong", {
                        className: "challenge-message block-center"
                    }, s), l().createElement("div", {
                        ref: this.contentRef,
                        className: c()("challenge-body-html", {
                            "content-service-text": a
                        }),
                        dangerouslySetInnerHTML: {
                            __html: d
                        }
                    }), a && l().createElement(re, {
                        framework: i,
                        commands: r
                    }), o && this.renderVisualTestcases()), "article" === m && l().createElement("div", {
                        className: "mlA plA"
                    }), n && l().createElement(J.Z, {
                        open: !0,
                        onClose: () => this.setState({
                            openVideo: void 0
                        }),
                        youtubeId: n.youtubeId,
                        title: n.title
                    }))
                }
            }
            const me = (0, oe.ZP)(ce);
            var de = a("IqDh"),
                ue = a("P6qq"),
                he = a("1Tel");
            class pe extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "suggestionXhr", void 0), (0, s.Z)(this, "suggestionCloseTimeout", void 0), (0, s.Z)(this, "updateSuggestion", (e => {
                        var t = (e.target.value || "").trim();
                        this.setState({
                            suggestion: t
                        })
                    })), (0, s.Z)(this, "submitSuggestion", (e => {
                        if (e.preventDefault(), !this.props.appUtil.isAuthRequired({
                                type: "info",
                                data: "Please signup or login to perform this action."
                            })) {
                            var {
                                challenge: t
                            } = this.props, {
                                suggestion: a
                            } = this.state, {
                                id: s,
                                contest_slug: n
                            } = t;
                            if (this.setState({
                                    suggestionError: []
                                }), !a || a.length < 20) this.setState({
                                suggestionError: ["Your suggestion should contain at least 20 characters."]
                            });
                            else {
                                var l = {
                                    suggestion: a,
                                    default_category_id: 6,
                                    default_sub_category_id: 20,
                                    challenge_id: s,
                                    challenge_url: (0, _.cu)(t),
                                    contest_slug: n
                                };
                                this.setState({
                                    submittingSuggestion: !0
                                }), this.suggestionXhr = (0, C.ajaxPostWithToken)({
                                    url: (0, q.kG)("challengeEditSuggestion"),
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    data: l,
                                    success: e => {
                                        this.setState({
                                            submittingSuggestion: !1
                                        }), e.status ? (this.setState({
                                            suggestionError: [],
                                            successfullSubmission: !0
                                        }), this.suggestionCloseTimeout = setTimeout((() => {
                                            this.setState({
                                                successfullSubmission: !1,
                                                openSuggestionForm: !1
                                            })
                                        }), 3e3)) : this.setState({
                                            suggestionError: e.errors.length ? e.errors : ["Unknown Error"]
                                        })
                                    },
                                    error: () => {
                                        this.setState({
                                            submittingSuggestion: !1,
                                            suggestionError: ["Unknown Error"]
                                        })
                                    }
                                })
                            }
                        }
                    })), this.state = {
                        suggestionError: []
                    }
                }
                componentWillUnmount() {
                    this.suggestionXhr && this.suggestionXhr.abort(), clearTimeout(this.suggestionCloseTimeout)
                }
                renderSubmissionError() {
                    var e = this.state.suggestionError || [];
                    if (e.length) return l().createElement("div", {
                        className: "alert error"
                    }, 1 === e.length ? l().createElement("span", null, e[0]) : l().createElement("ul", {
                        className: "text-left"
                    }, e.map(((e, t) => l().createElement("li", {
                        key: t
                    }, "err")))))
                }
                renderNewSubmissionError() {
                    var e = this.state.suggestionError || [];
                    if (e.length) return l().createElement("div", {
                        className: "suggestion-error"
                    }, 1 === e.length ? l().createElement("span", null, e[0]) : l().createElement("ul", {
                        className: "text-left"
                    }, e.map(((e, t) => l().createElement("li", {
                        key: t
                    }, "err")))))
                }
                renderSuggestionForm() {
                    var {
                        openSuggestionForm: e,
                        submittingSuggestion: t,
                        successfullSubmission: a,
                        suggestion: s
                    } = this.state;
                    return e ? l().createElement("div", {
                        className: "challenge-suggestion-form theme-m-content"
                    }, l().createElement("div", {
                        className: "suggestion-progress-wrapper"
                    }, this.renderNewSubmissionError(), a && l().createElement("div", {
                        className: "suggestion-success"
                    }, "Suggestion Sent!"), !a && l().createElement("div", {
                        className: "suggestion-form-wrapper fullscreen-hide"
                    }, l().createElement("div", {
                        className: "suggestion-heading"
                    }, "Thanks for helping us refine this problem statement. Please address your suggestions below."), l().createElement("textarea", {
                        id: "suggestion",
                        rows: "10",
                        className: "suggestion-text-area tall challenge_suggestion-input",
                        onChange: this.updateSuggestion
                    }, s), l().createElement("div", {
                        className: "pull-right"
                    }, l().createElement(p.ZP, {
                        className: "ui-btn ui-btn-secondary js-suggestion-cancel",
                        disabled: t,
                        "data-analytics": "Cancel Suggestion",
                        onClick: () => this.setState({
                            openSuggestionForm: !1
                        })
                    }, "Cancel"), l().createElement(p.ZP, {
                        className: "ui-btn ui-btn-primary js-suggestion-save",
                        disabled: t,
                        "data-analytics": "Submit Suggestion",
                        onClick: this.submitSuggestion
                    }, t ? "Saving..." : "Save"))))) : null
                }
                render() {
                    var {
                        challenge: e
                    } = this.props;
                    return l().createElement("div", {
                        className: "link-wrapper fullscreen-hide"
                    }, l().createElement("a", {
                        className: "cursor",
                        "data-analytics": "ChallengeViewSuggestEdit",
                        "data-attr1": e.slug,
                        onClick: () => {
                            this.setState({
                                openSuggestionForm: !0
                            })
                        }
                    }, l().createElement("i", {
                        className: "ui-icon-grey sidebar-icon ui-icon-edit"
                    }), l().createElement("span", {
                        className: "ui-icon-label"
                    }, "Suggest Edits")), this.renderSuggestionForm())
                }
            }(0, s.Z)(pe, "propTypes", {
                challenge: r().object.isRequired,
                appUtil: r().object.isRequired
            });
            const ge = pe = (0, N.Z)(pe);
            var be = a("rDMc"),
                Ee = a("TBNV"),
                ve = a("VQj3"),
                ke = a("+EHj"),
                fe = a("x+Gs");

            function ye(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ye(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var xe = ["Problem Statement", "Samples and Explanation", "Test Cases", "Other"].map((e => ({
                label: "Other" === e ? "Other (Difficulty, Scoring, Classification, Originality, etc)" : e,
                value: e
            })));
            class Ne extends l().Component {
                constructor(e) {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "onCheckboxChange", (e => {
                        var {
                            checked: t,
                            value: a
                        } = e.target, {
                            selectedCategories: s
                        } = this.state;
                        t ? s.push(a) : s.splice(s.indexOf(a), 1), this.setState({
                            selectedCategories: [...s]
                        })
                    })), (0, s.Z)(this, "onCheckListChange", (e => {
                        this.setState({
                            selectedCategories: e
                        })
                    })), (0, s.Z)(this, "updateRating", (() => {
                        var {
                            challengeActions: e,
                            challenge: t,
                            profile: a
                        } = this.props, {
                            rating: s,
                            selectedCategories: n,
                            message: l,
                            feedbackModalOpen: i
                        } = this.state;
                        e.updateRating({
                            categories: n,
                            message: l,
                            rating: s.rating,
                            ratingId: s.id,
                            challengeId: t.id,
                            challengeSlug: t.slug,
                            contestSlug: t.contest_slug,
                            hackerId: a.id
                        }).then((() => {
                            i && this.setState({
                                feedbackModalOpen: !1,
                                message: "",
                                selectedCategories: [],
                                ratingSubmitted: !1
                            })
                        }))
                    })), (0, s.Z)(this, "submitRating", (e => {
                        if (!this.props.appUtil.isAuthRequired({
                                type: "info",
                                data: "Please signup or login to perform this action."
                            })) {
                            var {
                                challengeActions: t,
                                challenge: a,
                                profile: s
                            } = this.props, {
                                rating: n
                            } = this.state;
                            this.setState({
                                rating: Se(Se({}, n), {}, {
                                    rating: e
                                }),
                                ratingSubmitted: !0
                            }, (() => {
                                n.id ? this.updateRating() : t.addRating({
                                    challengeId: a.id,
                                    challengeSlug: a.slug,
                                    contestSlug: a.contest_slug,
                                    hackerId: s.id,
                                    rating: e
                                })
                            }))
                        }
                    })), (0, s.Z)(this, "closeModal", (() => {
                        this.setState({
                            feedbackModalOpen: !1
                        })
                    })), this.state = {
                        rating: e.rating,
                        message: "",
                        selectedCategories: []
                    }
                }
                componentDidMount() {
                    this.state.rating.id || this.loadRating()
                }
                UNSAFE_componentWillReceiveProps(e) {
                    e.rating !== this.props.rating && this.setState({
                        rating: e.rating
                    })
                }
                loadRating() {
                    var {
                        challengeActions: e,
                        challenge: t,
                        profile: a
                    } = this.props;
                    if (a.id) {
                        var {
                            id: s,
                            slug: n,
                            contest_slug: l
                        } = t;
                        e.loadRating({
                            challengeId: s,
                            challengeSlug: n,
                            contestSlug: l,
                            hackerId: a.id
                        })
                    }
                }
                getRatingCategories() {
                    var {
                        selectedCategories: e
                    } = this.state;
                    return {
                        list: xe,
                        value: e
                    }
                }
                renderFeedbackBackForm() {
                    var {
                        onCheckboxChange: e,
                        updateRating: t,
                        closeModal: a
                    } = this;
                    return l().createElement(Ee.Z, {
                        open: !0,
                        onClose: a,
                        title: "Help Us Improve",
                        className: "challenge-rating-feedback",
                        size: "small"
                    }, l().createElement(fe.k8, {
                        fallback: l().createElement(ve.Z, {
                            diameter: 80
                        })
                    }, l().createElement("form", {
                        name: "ratingFeedbackForm"
                    }, l().createElement("div", {
                        className: "formgroup"
                    }, l().createElement("div", {
                        className: "row"
                    }, l().createElement("div", {
                        className: "span-xs-16 rating_feedback"
                    }, l().createElement("p", {
                        className: "bold category-title"
                    }, "Which sections of this challenge need improvement?"), l().createElement("label", null, l().createElement("input", {
                        type: "checkbox",
                        name: "category",
                        className: "inline category pmL",
                        value: "Problem Statement",
                        onClick: e
                    }), "Problem Statement"), l().createElement("label", null, l().createElement("input", {
                        type: "checkbox",
                        name: "category",
                        className: "inline category pmL",
                        value: "Samples and Explanation",
                        onClick: e
                    }), "Samples and Explanation"), l().createElement("label", null, l().createElement("input", {
                        type: "checkbox",
                        name: "category",
                        className: "inline category pmL",
                        value: "Test Cases",
                        onClick: e
                    }), "Test Cases"), l().createElement("label", null, l().createElement("input", {
                        type: "checkbox",
                        name: "category",
                        className: "inline category psL",
                        value: "Other",
                        onClick: e
                    }), "Other (Difficulty, Scoring, Classification, Originality, etc)"))), l().createElement("p", {
                        className: "mdT bold"
                    }, "Is there anything else you'd like to share with us?"), l().createElement("textarea", {
                        name: "description",
                        rows: "3",
                        className: "block-full-width description msT",
                        onChange: e => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    })), l().createElement("div", {
                        className: "clearfix"
                    }, l().createElement("div", {
                        className: "hr-dialog-buttons pull-right"
                    }, l().createElement("button", {
                        type: "button",
                        className: "btn hr-dialog-button",
                        onClick: a
                    }, "Cancel"), l().createElement("button", {
                        type: "button",
                        className: "btn hr_primary-btn hr-dialog-button",
                        onClick: t
                    }, "Save"))))))
                }
                renderNewFeedbackBackForm() {
                    var {
                        onCheckListChange: e,
                        updateRating: t,
                        closeModal: a
                    } = this, s = this.getRatingCategories();
                    return l().createElement(Ee.Z, {
                        open: !0,
                        onClose: a,
                        theme: "theme-m",
                        title: "Help Us Improve",
                        className: "challenge-rating-feedback",
                        size: "small"
                    }, l().createElement("form", {
                        name: "ratingFeedbackForm"
                    }, l().createElement("div", {
                        className: "theme-m-section rating-form-wrapper"
                    }, l().createElement("h5", {
                        className: "section-improvement"
                    }, "Which sections of this challenge need improvement?"), l().createElement(ke.Z, {
                        list: s.list,
                        value: s.value,
                        onChange: e
                    }), l().createElement("h5", {
                        className: "mlT section-improvement"
                    }, "Is there anything else you'd like to share with us?"), l().createElement("textarea", {
                        name: "description",
                        rows: "5",
                        cols: "10",
                        className: "message-text",
                        onChange: e => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    })), l().createElement("div", {
                        className: "clearfix"
                    }, l().createElement("div", {
                        className: "pull-right"
                    }, l().createElement("button", {
                        type: "button",
                        className: "ui-btn ui-btn-secondary",
                        onClick: a
                    }, "Cancel"), l().createElement("button", {
                        type: "button",
                        className: "ui-btn ui-btn-primary msL",
                        onClick: t
                    }, "Save")))))
                }
                render() {
                    var {
                        feedbackModalOpen: e,
                        rating: t,
                        ratingSubmitted: a
                    } = this.state, {
                        theme: s
                    } = this.props;
                    return l().createElement("div", {
                        className: "challenge-rating rating"
                    }, l().createElement("p", {
                        className: "zeta rating-label"
                    }, "rate this challenge"), l().createElement(be.Z, {
                        analyticsId: "RatedChallenge",
                        currentRating: t.rating || 0,
                        onRate: this.submitRating
                    }), a && l().createElement("span", {
                        className: "rating_reply color-alt-grey hidden psL"
                    }, "Thanks!"), a && t.rating <= 3 && l().createElement("div", {
                        className: "rating_feedback"
                    }, l().createElement("p", {
                        className: "small text-content msT"
                    }, "How can we improve?"), l().createElement("button", {
                        className: "ui-btn ui-btn-primary bb-rate-challenge msT",
                        "data-analytics": "RatingFeedback",
                        onClick: () => this.setState({
                            feedbackModalOpen: !0
                        })
                    }, "Let us know")), e && ("theme-m" === s ? this.renderNewFeedbackBackForm() : this.renderFeedbackBackForm()))
                }
            }(0, s.Z)(Ne, "propTypes", {
                challenge: r().object.isRequired,
                profile: r().object.isRequired,
                contest: r().object.isRequired,
                rating: r().object.isRequired,
                theme: r().oneOf(["theme-m", "default"])
            }), (0, s.Z)(Ne, "defaultProps", {
                theme: "default"
            }), Ne = (0, m.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    profile: s
                } = e.community, {
                    rating: n
                } = (0, _.CD)(e, a);
                return {
                    rating: n,
                    profile: s
                }
            }), (e => ({
                challengeActions: (0, d.DE)(H.Z, e)
            })))(Ne);
            const we = Ne = (0, N.Z)(Ne);
            var Ce = a("XEGk");
            a("tcpQ"), a("WktJ");
            class _e extends n.Component {
                constructor(e) {
                    super(e), (0, s.Z)(this, "renderVideo", ((e, t) => {
                        var {
                            challenge: a,
                            appUtil: s
                        } = this.props, {
                            slug: n,
                            contest_slug: i
                        } = a, {
                            youtube_id: r,
                            title: o,
                            duration: c
                        } = e, m = -1;
                        return s.location && s.location.query && s.location.query.autoopen && (m = parseInt(s.location.query.autoopen, 10)), 0 === t ? l().createElement("li", {
                            key: t
                        }, l().createElement(he.Z, {
                            title: o,
                            key: t,
                            autoOpen: 1 === m,
                            duration: c,
                            youtubeId: r,
                            contestSlug: i,
                            challengeSlug: n
                        })) : l().createElement("li", {
                            key: t,
                            className: "link-wrapper more-videos-wrapper"
                        }, l().createElement("a", {
                            className: "video-modal cursor flex-link",
                            "data-slug": r,
                            "data-analytics": "ChallengeSidebarRelatedVideo",
                            "data-attr1": n,
                            "data-attr2": i,
                            "data-attr3": r,
                            "data-attr4": o,
                            "data-original-title": o,
                            onClick: () => this.setState({
                                openVideo: {
                                    youtubeId: r,
                                    title: o
                                }
                            }),
                            "data-placement": "top-left"
                        }, l().createElement("i", {
                            className: "ui-icon-play-circle ui-icon-grey sidebar-icon flex-icon-play"
                        }), l().createElement("span", {
                            className: "ui-icon-label video-title title-lable ellipsis"
                        }, o), l().createElement("span", {
                            className: "video-duration-display"
                        }, "(", (0, S.Nd)(c), ")")))
                    })), (0, s.Z)(this, "renderTopics", ((e, t) => {
                        var {
                            challenge: a
                        } = this.props, {
                            slug: s,
                            title: n
                        } = e, i = a.track && "cracking-the-coding-interview" === a.track.slug;
                        return l().createElement("li", {
                            key: t,
                            className: "link-wrapper"
                        }, l().createElement(D.Link, {
                            className: "cursor flex-link",
                            "data-slug": s,
                            "data-analytics": "ChallengeSidebarRelatedTopic",
                            "data-attr1": a.slug,
                            "data-attr2": a.contest_slug,
                            "data-attr3": s,
                            to: "".concat((0, _.w7)(a), "/").concat(s),
                            target: i ? "_blank" : ""
                        }, l().createElement("i", {
                            className: "ui-icon-editorial ui-icon-grey sidebar-icon"
                        }), l().createElement("span", {
                            className: "ui-icon-label title-lable ellipsis"
                        }, n)))
                    })), this.state = {}
                }
                showAllTestCase() {
                    var {
                        challenge: e
                    } = this.props;
                    return e.has_all_test_cases_public || e.moderator_or_support
                }
                renderHelpSection() {
                    var {
                        challenge: e
                    } = this.props, t = e.topics || [], a = e.videos || [];
                    if (t.length || a.length) return l().createElement("div", {
                        className: "resources-section challenge-sidebar-help"
                    }, l().createElement("div", {
                        className: "text-sec-headline-s"
                    }, "RESOURCES"), l().createElement("hr", {
                        className: "hr-line-light"
                    }), l().createElement("ul", {
                        className: "related-resources"
                    }, a.map(this.renderVideo), t.map(this.renderTopics)))
                }
                renderChallengeOptions() {
                    var {
                        challenge: e,
                        contest: t
                    } = this.props, a = e.difficulty_name.toLowerCase(), s = {
                        username: e.author_name,
                        avatar: e.author_avatar
                    }, n = {
                        attribute1: "ChallegeProblem",
                        attribute2: e.author_name,
                        attribute3: t.slug || "master",
                        attribute4: e.slug
                    };
                    return l().createElement("div", {
                        className: "sidebar-problem-difficulty challenge-sidebar-help"
                    }, e.hacker && e.hacker.id && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Author"), l().createElement(de.Z, {
                        user: s,
                        align: "left",
                        analyticsAttributes: n
                    }, l().createElement(ue.Z, {
                        userObj: s,
                        linkAttributes: {
                            className: "pull-right text-link ellipsis link-style",
                            "data-analytics": "ChallengeViewHeaderAuthor",
                            "data-attr1": e.slug,
                            "data-attr2": e.author_name
                        }
                    }))), e.color && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Color Code"), l().createElement("p", {
                        className: "sidebar-detail pull-right"
                    }, l().createElement("span", {
                        className: "acm-challenge-balloon-large",
                        style: {
                            backgroundColor: e.color
                        }
                    }))), "dataset" !== e.kind && (!t || "acm" !== t.kind && !t.hide_difficulty && "mcq" !== e.kind) && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Difficulty"), l().createElement("p", {
                        className: c()("pull-right difficulty-".concat(a))
                    }, "engulf" === e.companySlug ? 100 : e.difficulty_name)), "master" === e.contest_slug && ("code" === e.kind && e.is_custom || "game" === e.kind && 1 === e.player_count) && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label",
                        "data-balloon": "We will consider you have solved this challenge if you get greater than or equal to this score.",
                        "data-balloon-pos": "up",
                        "data-balloon-length": "large"
                    }, "Cutoff Score"), l().createElement("p", {
                        className: "sidebar-detail pull-right"
                    }, (e.factor * e.solved_score).toFixed(2))), l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Max Score"), l().createElement("p", {
                        className: "sidebar-detail pull-right"
                    }, "engulf" === e.companySlug ? 100 : e.max_score)), e.real_dynamic && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Scoring"), l().createElement(D.Link, {
                        to: "/scoring/dynamic-scoring",
                        target: "_blank",
                        rel: "tooltip",
                        className: "pull-right",
                        "data-original-title": "The score is dynamic based on the number of solves.",
                        id: "dynamic-popover",
                        "data-analytics": "ChallengeViewSidebarDynamic",
                        "data-attr1": e.slug
                    }, l().createElement("small", {
                        className: "badge info"
                    }, "Dynamic"))), "dataset" !== e.kind && l().createElement("div", {
                        className: "difficulty-block"
                    }, l().createElement("p", {
                        className: "difficulty-label"
                    }, "Submitted By"), l().createElement(D.Link, {
                        to: "".concat((0, _.cu)(e), "/leaderboard"),
                        className: "pull-right text-link",
                        "data-analytics": "ChallengeViewHackerCount",
                        "data-attr1": e.slug
                    }, e.submitted_hackers_count)))
                }
                renderAdminOptions() {
                    var {
                        challenge: e,
                        contest: t
                    } = this.props;
                    return e.can_edit ? l().createElement("div", {
                        className: "challenge-sidebar-help challenge-edit-link"
                    }, l().createElement("div", {
                        className: "text-sec-headline-s"
                    }, "ADMIN OPTIONS"), l().createElement("hr", {
                        className: "hr-line-light"
                    }), l().createElement("div", {
                        className: "mlB"
                    }, l().createElement("div", {
                        className: "link-wrapper"
                    }, l().createElement(D.Link, {
                        to: "/administration/contests/edit/".concat(t.id, "/challenges/edit/").concat(e.id),
                        "data-analytics": "ChallengeViewSidebarEdit",
                        "data-attr1": e.slug
                    }, l().createElement("i", {
                        className: "ui-icon-grey sidebar-icon ui-icon-edit"
                    }), l().createElement("span", {
                        className: "ui-icon-label"
                    }, "Edit Challenge"))), l().createElement("div", {
                        className: "link-wrapper"
                    }, l().createElement(D.Link, {
                        to: "/contests/".concat(e.contest_slug, "/judge/submissions/challenge/").concat(e.slug),
                        "data-analytics": "ChallengeViewSidebarSubmissions",
                        "data-attr1": e.slug
                    }, l().createElement("i", {
                        className: "ui-icon-grey sidebar-icon ui-icon-trophy"
                    }), l().createElement("span", {
                        className: "ui-icon-label"
                    }, "View Submissions"))))) : null
                }
                renderOpenVideo() {
                    var {
                        openVideo: e
                    } = this.state;
                    return e && l().createElement(J.Z, {
                        open: !0,
                        onClose: () => this.setState({
                            openVideo: void 0
                        }),
                        youtubeId: e.youtubeId,
                        title: e.title
                    })
                }
                renderAdditionalOptions() {
                    var {
                        challenge: e,
                        onLanguageSelect: t,
                        isProjectsEnabled: a,
                        selectedLanguage: s
                    } = this.props, n = e.slug, i = e.contest_slug, r = "/rest/contests/".concat(i, "/challenges/").concat(n), o = e.available_translations;
                    return l().createElement("div", {
                        className: "challenge-sidebar-help need-help-wrapper"
                    }, l().createElement("div", {
                        className: "text-sec-headline-s"
                    }, "MORE DETAILS"), l().createElement("hr", {
                        className: "hr-line-light"
                    }), !a && l().createElement(l().Fragment, null, l().createElement("div", {
                        className: "link-wrapper"
                    }, l().createElement(D.Link, {
                        to: "".concat(r, "/download_pdf?language=English"),
                        target: "_blank",
                        id: "pdf-link",
                        "data-analytics": "ChallengeViewSidebarPDF",
                        "data-attr1": n
                    }, l().createElement("i", {
                        className: "ui-icon-grey sidebar-icon ui-icon-download"
                    }), l().createElement("span", {
                        className: "ui-icon-label"
                    }, "Download problem statement"))), "frontend" !== (null == e ? void 0 : e.kind) && l().createElement("div", {
                        className: "link-wrapper"
                    }, l().createElement(D.Link, {
                        to: "".concat(r, "/download_testcases"),
                        target: "_blank",
                        id: "test-cases-link",
                        "data-analytics": "ChallengeViewSidebarTestCases",
                        "data-attr1": n
                    }, l().createElement("i", {
                        className: "ui-icon-grey sidebar-icon ui-icon-download"
                    }), l().createElement("span", {
                        className: "ui-icon-label"
                    }, this.showAllTestCase() ? "Download all test cases" : "Download sample test cases")))), l().createElement(ge, {
                        challenge: e
                    }), !!o.length && l().createElement("div", {
                        className: "language-selector pjT"
                    }, l().createElement("div", {
                        className: "msB language-options"
                    }, l().createElement("p", {
                        className: "text-sec-headline-s"
                    }, "Choose a translation"), l().createElement("hr", {
                        className: "hr-line-light"
                    })), l().createElement("select", {
                        className: "language-items translations",
                        onChange: e => t(e.target.value),
                        selected: s
                    }, l().createElement("option", {
                        value: "English"
                    }, " English "), o.map(((e, t) => l().createElement("option", {
                        key: t,
                        value: e.language
                    }, " ", e.language, " "))))))
                }
                renderNeedHelpSection() {
                    var {
                        challenge: e
                    } = this.props;
                    return l().createElement(K.ZP, {
                        challenge: e
                    })
                }
                render() {
                    var {
                        challenge: e,
                        contest: t,
                        isProjectsEnabled: a
                    } = this.props;
                    return l().createElement("aside", {
                        className: "theme-m-content fullscreen-hide challenge-sidebar"
                    }, l().createElement("div", {
                        className: "challenge-sidebar-container"
                    }, this.renderChallengeOptions(), !a && this.renderAdminOptions(), this.renderNeedHelpSection(), this.renderHelpSection(), l().createElement(we, {
                        challenge: e,
                        contest: t,
                        theme: "theme-m"
                    }), this.renderAdditionalOptions(), this.renderOpenVideo(), l().createElement(Ce.Z, {
                        challenge: e,
                        contest: t
                    })))
                }
            }
            const Te = (0, d.qC)(N.Z, oe.ZP)(_e);
            var Ze = a("Vnb/"),
                Pe = (a("CX2u"), a("KKXr"), a("MU20"));
            class De extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "pollTime", void 0), (0, s.Z)(this, "pollCount", void 0), (0, s.Z)(this, "pollTimeout", void 0), (0, s.Z)(this, "clickInput", (() => {
                        this.refs.fileInput.click(), this.setState({
                            confirmUploadOpen: !1
                        })
                    })), (0, s.Z)(this, "downloadFile", (() => {
                        var {
                            dataSetId: e,
                            dataSetFile: t,
                            challenge: a
                        } = this.props, s = (0, q.kG)("dataSetFileSubmissions", {
                            challengeSlug: a.slug,
                            contestSlug: a.contest_slug
                        });
                        window.open("".concat(s, "/").concat(t.latestSubmission.id, "/download?data_set_id=").concat(e, "&data_set_file_id=").concat(t.id), "_blank")
                    })), (0, s.Z)(this, "onUploadClick", (e => {
                        var {
                            latestSubmission: t
                        } = this.props.dataSetFile;
                        t ? this.setState({
                            confirmUploadOpen: !0
                        }) : this.clickInput()
                    })), (0, s.Z)(this, "pollStatus", (() => {
                        var {
                            challengeActions: e,
                            dataSetId: t,
                            dataSetFile: a,
                            challenge: s
                        } = this.props, {
                            latestSubmission: n
                        } = a;
                        !n || n.validation_status >= 3 || (clearTimeout(this.pollTimeout), this.pollCount += 1, this.pollCount > 10 && this.pollTime < 2e4 && (this.pollTime = 1.1 * this.pollTime), e.pollDataSetUploadStatus({
                            challengeSlug: s.slug,
                            contestSlug: s.contest_slug,
                            submissionId: n.id,
                            dataSetId: t,
                            dataSetFileId: a.id
                        }).then((() => {
                            this.pollTimeout = setTimeout(this.pollStatus, this.pollTime)
                        })))
                    })), (0, s.Z)(this, "uploadFile", (e => {
                        var t = e.target.files[0],
                            {
                                dataSetId: a,
                                dataSetFile: s,
                                challenge: n,
                                challengeActions: l
                            } = this.props,
                            {
                                latestSubmission: i,
                                human_readable_upload_limit: r,
                                upload_limit: o,
                                kind: c
                            } = s;
                        if (t) {
                            var m = t.name.split(".").pop();
                            if (t.size > o) alert("Please upload a file smaller than ".concat(r));
                            else if (c.split().some((e => e === m))) {
                                this.setState({
                                    uploading: !0
                                });
                                var d = new FormData;
                                d.append("payload", t), d.append("data_set_id", a), d.append("data_set_file_id", s.id);
                                var u = l.uploadDataSetFile({
                                    challengeSlug: n.slug,
                                    contestSlug: n.contest_slug,
                                    dataSetId: a,
                                    dataSetFileId: s.id,
                                    formData: d
                                });
                                u.finally((() => this.setState({
                                    uploading: !1
                                }))), u.then((e => {
                                    e.status ? this.pollTimeout = setTimeout(this.pollStatus, this.pollTime) : alert("Error occured! Please try again.")
                                }), (() => {
                                    alert("Error occured! Please try again.")
                                }))
                            } else alert("Filetype incorrect. Only the following types are allowed: ".concat(c))
                        }
                    })), this.state = {}, this.pollTime = 1e3, this.pollCount = 0
                }
                componentDidMount() {
                    this.pollStatus()
                }
                componentWillUnmount() {
                    clearTimeout(this.pollTimeout)
                }
                getStatusInfo(e) {
                    return {
                        1: {
                            text: "Validation Pending",
                            color: "orange"
                        },
                        2: {
                            text: "Validation Processing",
                            color: "orange"
                        },
                        3: {
                            text: "Validation Passed",
                            color: "green"
                        },
                        4: {
                            text: "Validation Failed",
                            color: "red"
                        }
                    }[e]
                }
                getMaxScore() {
                    var {
                        allSubmissions: e
                    } = this.props.dataSetFile;
                    if (e.length) return e.reduce(((e, t) => Math.max(e, t)), e[0].score)
                }
                render() {
                    var {
                        dataSetId: e,
                        dataSetFile: t
                    } = this.props, {
                        id: a,
                        label: s,
                        remaining_upload_count: n,
                        latestSubmission: i
                    } = t, {
                        confirmUploadOpen: r,
                        uploading: o,
                        deleting: m
                    } = this.state, d = this.getMaxScore(), u = this.getStatusInfo(i ? i.validation_status : null);
                    return l().createElement("div", {
                        className: "plL plT dataset-file-item"
                    }, l().createElement("div", {
                        className: "row"
                    }, l().createElement("div", {
                        className: "span4 pull-left"
                    }, l().createElement("label", null, s, ":")), l().createElement("div", {
                        className: "span6 pull-left pad-top"
                    }, i && l().createElement("p", {
                        className: "js_label"
                    }, l().createElement("span", {
                        className: "file-name"
                    }, i.file_name), l().createElement("span", {
                        className: "file-size"
                    }, "(", i.human_readable_file_size, ")"))), l().createElement("div", {
                        className: "span6 pull-right pad-top"
                    }, l().createElement("p", {
                        className: "js-upload-count-wrap"
                    }, n && l().createElement("span", null, l().createElement("em", null, "Uploads Remaining:"), " ", n)))), l().createElement("form", {
                        className: "js_playload_wrap hide"
                    }, l().createElement("input", {
                        type: "file",
                        className: "hide js_payload",
                        ref: "fileInput",
                        name: "payload",
                        onChange: this.uploadFile
                    })), l().createElement("div", null, l().createElement("button", {
                        className: "btn btn-small js_upload",
                        disabled: o,
                        onClick: this.onUploadClick
                    }, l().createElement("i", {
                        className: "icon--single icon-upload"
                    })), i && l().createElement("button", {
                        className: "btn btn-small js_download",
                        disabled: o,
                        onClick: this.downloadFile
                    }, l().createElement("i", {
                        className: "icon--single icon-download"
                    }))), l().createElement("div", {
                        className: "row plT plB"
                    }, i && i.score && l().createElement("div", {
                        className: "span8 js-score-wrap pad-top"
                    }, l().createElement("p", null, l().createElement("strong", null, "Score:"), " ", i.score), l().createElement("div", null, l().createElement("em", {
                        className: "js-max-score-wrap"
                    }, "(Max Score: ", d, ")"))), l().createElement("div", {
                        className: "span8 pad-top"
                    }, l().createElement("p", {
                        className: c()("upload-status", {
                            "grey-text": m || o
                        }, u ? u.color : "")
                    }, m && "Removing...", o && "Uploading...", u && u.text))), i && i.checker_message && l().createElement("div", {
                        className: "row plB js_checker_message_wrap"
                    }, l().createElement("label", {
                        className: "span16"
                    }, "Checker Message:"), l().createElement("div", {
                        className: "span16 js_checker_message checker-message"
                    }, (0, S.eN)(i.checker_message))), r && l().createElement(Pe.Z, {
                        title: s,
                        open: !0,
                        confirmText: "Okay",
                        cancelText: "Cancel",
                        onConfirm: this.clickInput,
                        onCancel: () => this.setState({
                            confirmUploadOpen: !1
                        })
                    }, l().createElement("div", null, "This will change your final submission.")))
                }
            }(0, s.Z)(De, "propTypes", {
                dataSetFile: r().object,
                dataSetId: r().number,
                challenge: r().object,
                challengeActions: r().object
            });
            const Ae = De = (0, m.$j)((e => ({})), (e => ({
                challengeActions: (0, d.DE)(H.Z, e)
            })))(De);

            function je(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : je(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function Fe(e) {
                var {
                    challenge: t,
                    dataSet: a
                } = e, {
                    id: s,
                    label: n,
                    download_link: i,
                    download_link_label: r,
                    data_set_file: o
                } = a;
                return l().createElement("div", {
                    className: "data-set-upload-list-view"
                }, l().createElement("span", null, l().createElement("strong", null, n), ":"), i && l().createElement(D.Link, {
                    className: "btn btn-link",
                    target: "_blank",
                    to: i
                }, r || "download link"), l().createElement("div", {
                    id: "data-set-files-wrapper"
                }, o.map((e => l().createElement(Ae, {
                    key: e.id,
                    dataSetFile: e,
                    dataSetId: s,
                    challenge: t
                })))))
            }
            Fe.propTypes = {
                dataSet: r().object,
                challenge: r().object
            };
            class Le extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), this.state = {
                        loadingSubmittedDataSet: !0
                    }
                }
                componentDidMount() {
                    this.loadSubmittedDataSets()
                }
                loadSubmittedDataSets() {
                    var {
                        challengeActions: e,
                        challenge: t
                    } = this.props;
                    this.setState({
                        loadingSubmittedDataSet: !0
                    }), e.getDataSetFileSubmissions({
                        contestSlug: t.contest_slug,
                        challengeSlug: t.slug
                    }).finally((() => {
                        setTimeout((() => {
                            this.setState({
                                loadingSubmittedDataSet: !1
                            })
                        }), 300)
                    }))
                }
                getDataSets() {
                    var {
                        dataSetFiles: e,
                        challenge: t
                    } = this.props, {
                        data_set: a
                    } = t, s = {}, n = {};
                    return e.forEach((e => {
                        var t = "".concat(e.data_set_id, "|").concat(e.data_set_file_id);
                        s[t] = e, n[t] || (n[t] = []), n[t].push(e)
                    })), a.map((e => Re(Re({}, e), {}, {
                        data_set_file: e.data_set_file.map((t => {
                            var a = "".concat(e.id, "|").concat(t.id);
                            return Re(Re({}, t), {}, {
                                latestSubmission: s[a],
                                allSubmissions: n[a] || []
                            })
                        }))
                    })))
                }
                renderDataSets() {
                    var e = this.getDataSets(),
                        {
                            challenge: t
                        } = this.props;
                    return l().createElement("div", {
                        className: "span10 light-wrap plA",
                        id: "datasets-upload-wrapper"
                    }, e.map(((e, a) => l().createElement(Fe, {
                        dataSet: e,
                        challenge: t,
                        key: a
                    }))))
                }
                render() {
                    var e, {
                            profile: t
                        } = this.props,
                        {
                            loadingSubmittedDataSet: a
                        } = this.state;
                    return e = t.username ? a ? l().createElement("div", {
                        className: "gray light-wrap span8 mlB"
                    }, "Loading user data") : this.renderDataSets() : l().createElement("div", {
                        className: "gray light-wrap span8 mlB"
                    }, "Please login in order to upload your solutions"), l().createElement("div", {
                        className: "row"
                    }, e)
                }
            }(0, s.Z)(Le, "propTypes", {
                profile: r().object,
                challenge: r().object,
                dataSetFiles: r().array,
                challengeActions: r().object.isRequired
            }), (0, s.Z)(Le, "defaultProps", {
                dataSetFiles: []
            });
            const Be = Le;
            var Oe = a("TLuM"),
                Ie = a("fXFR"),
                Ve = a("xFHe"),
                qe = a.n(Ve),
                Me = a("GNxy");
            const Ue = JSON.parse('{"v":"5.7.0","fr":30,"ip":0,"op":90,"w":825,"h":825,"nm":"Pre-comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":4,"ty":4,"nm":"ÃÂÃÂÃÂºÃÂ° 2","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[190]},{"i":{"x":[0.667],"y":[1.019]},"o":{"x":[0.333],"y":[0]},"t":28,"s":[191]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0.034]},"t":45,"s":[198.741]},{"t":79,"s":[190]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[180.285,91.051,0],"to":[-0.5,2.333,0],"ti":[-0.167,0.333,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":28,"s":[177.285,105.051,0],"to":[0.167,-0.333,0],"ti":[-0.667,4,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[181.285,89.051,0],"to":[0.667,-4,0],"ti":[0.167,-0.333,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":67,"s":[181.285,81.051,0],"to":[-0.167,0.333,0],"ti":[0.167,-1.667,0]},{"t":89,"s":[180.285,91.051,0]}],"ix":2},"a":{"a":0,"k":[-221.715,95.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.87,-6.025],[-8,-27],[-10.721,6.14],[-0.455,5.253],[-4,11],[8.822,3.516]],"o":[[-59,73],[4.497,15.177],[8.352,-4.783],[9,-104],[1.863,-5.123],[-10.121,-4.034]],"v":[[-242.5,83.5],[-273,271],[-238.265,285.283],[-229,261],[-201,97],[-210.355,75.636]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.6862745098039216,0.6862745098039216,0.6862745098039216,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.807843137254902,0.807843137254902,0.807843137254902,0.655,0.9294117647058824,0.9294117647058824,0.9294117647058824,1,0.9372549019607843,0.9372549019607843,0.9372549019607843],"ix":9}},"s":{"a":0,"k":[-276.108,154.158],"ix":5},"e":{"a":0,"k":[-180.613,173.333],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"ÃÂÃÂÃÂºÃÂ° 1","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"i":{"x":[0.665],"y":[0.832]},"o":{"x":[0.296],"y":[0]},"t":40,"s":[-11]},{"i":{"x":[0.811],"y":[1.256]},"o":{"x":[0.428],"y":[-0.7]},"t":67,"s":[3.659]},{"t":89,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":3,"s":[-223.715,93.051,0],"to":[0,4.333,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":31,"s":[-223.715,119.051,0],"to":[0,0,0],"ti":[0,4.333,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":52,"s":[-223.715,93.051,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":70,"s":[-223.715,76.051,0],"to":[0,0,0],"ti":[0,0,0]},{"t":89,"s":[-223.715,93.051,0]}],"ix":2},"a":{"a":0,"k":[-223.715,93.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.87,-6.025],[-8,-27],[-10.721,6.14],[-0.455,5.253],[-4,11],[8.822,3.516]],"o":[[-59,73],[4.497,15.177],[8.352,-4.783],[9,-104],[1.863,-5.123],[-10.121,-4.034]],"v":[[-242.5,83.5],[-273,271],[-238.265,285.283],[-229,261],[-201,97],[-210.355,75.636]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.6352941176470588,0.6352941176470588,0.6352941176470588,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9372549019607843,0.9372549019607843,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"ÃÂ³ÃÂ»ÃÂ°ÃÂ· 2","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,-120.5,0],"ix":2},"a":{"a":0,"k":[-158,-120.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":36,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":41,"s":[100,0,100]},{"t":46,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[36,93],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.40784313725490196,0.9568627450980393,0.4470588235294118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-158,-120.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"ÃÂ³ÃÂ»ÃÂ°ÃÂ· 1","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-158,-120.5,0],"ix":2},"a":{"a":0,"k":[-158,-120.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0.167,0]},"t":36,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":41,"s":[100,0,100]},{"t":46,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[36,93],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.40784313725490196,0.9568627450980393,0.4470588235294118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-158,-120.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"ÃÂÃÂºÃÂÃÂ°ÃÂ½","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[-16.492,-119,0],"to":[6.794,-3.569,0],"ti":[-6.794,3.569,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":45,"s":[24.269,-140.413,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":53,"s":[24.269,-140.413,0],"to":[-6.794,3.569,0],"ti":[6.794,-3.569,0]},{"t":79,"s":[-16.492,-119,0]}],"ix":2},"a":{"a":0,"k":[-16.492,-119,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[0,0.5],[80.5,-54],[0,0],[-3,82.5],[43.5,1]],"o":[[-1.383,5.531],[0,0],[0,0],[1.508,-41.476],[-43.5,-1]],"v":[[9,-199.75],[-65,-40.5],[158,-40.5],[210,-121],[152.25,-199.5]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":45,"s":[{"i":[[0,0.5],[80.5,-54],[0,0],[-3,82.5],[43.5,1]],"o":[[-1.383,5.531],[0,0],[0,0],[1.508,-41.476],[-43.5,-1]],"v":[[31.083,-199.182],[-42.917,-39.932],[158,-40.5],[210,-121],[152.25,-199.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":53,"s":[{"i":[[0,0.5],[80.5,-54],[0,0],[-3,82.5],[43.5,1]],"o":[[-1.383,5.531],[0,0],[0,0],[1.508,-41.476],[-43.5,-1]],"v":[[31.083,-199.182],[-42.917,-39.932],[158,-40.5],[210,-121],[152.25,-199.5]],"c":true}]},{"t":79,"s":[{"i":[[0,0.5],[80.5,-54],[0,0],[-3,82.5],[43.5,1]],"o":[[-1.383,5.531],[0,0],[0,0],[1.508,-41.476],[-43.5,-1]],"v":[[9,-199.75],[-65,-40.5],[158,-40.5],[210,-121],[152.25,-199.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.227450980392,0.227450980392,0.227450980392,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[441,162],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":64,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.133333333333,0.133333333333,0.133333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-16.5,-119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[102.759,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"ÃÂ³ÃÂ¾ÃÂ»ÃÂ¾ÃÂ²ÃÂ°","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":28,"s":[-9]},{"t":79,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[-19.719,9.59,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":47,"s":[-19.719,45.59,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":53,"s":[-19.719,45.59,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[-19.719,9.59,0]}],"ix":2},"a":{"a":0,"k":[-19.719,9.59,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[42.021,64.812],[78,-156],[-182,-20],[0,0],[-35.843,52.428]],"o":[[-118,-182],[-28.425,56.851],[34.319,3.771],[0,0],[26.995,-39.487]],"v":[[242,-226],[-284,-218],[-178,14],[140,16],[250.406,-40.457]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.953,0.953,0.953,0.655,0.8509803921568627,0.8705882352941177,0.8901960784313725,1,0.7647058823529411,0.7647058823529411,0.7647058823529411],"ix":9}},"s":{"a":0,"k":[-296,-60],"ix":5},"e":{"a":0,"k":[198,-58],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"ÃÂÃÂµÃÂ»ÃÂ¾","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[413.796,587.822,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":45,"s":[413.796,507.822,0],"to":[0,0,0],"ti":[0,0,0]},{"t":90,"s":[413.796,587.822,0]}],"ix":2},"a":{"a":0,"k":[-20.704,175.322,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[227,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.576470588235,0.576470588235,0.576470588235,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607843137,0.819607843137,0.819607843137,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-23.5,68.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[51,0],[15.678,-82.948],[-49.731,-49.359],[-13.15,-0.292],[-37.729,38.101],[10.258,44.845]],"o":[[-12.374,0],[-8.179,43.273],[38.555,38.266],[13.544,0.301],[45.84,-46.291],[-15.181,-66.366]],"v":[[-27,31],[-179.678,102.948],[-132.269,283.359],[-25,320],[91.483,284.497],[137.742,101.155]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.953,0.953,0.953,0.655,0.8509803921568627,0.8705882352941177,0.8901960784313725,1,0.7647058823529411,0.7647058823529411,0.7647058823529411],"ix":9}},"s":{"a":0,"k":[-166,148],"ix":5},"e":{"a":0,"k":[86,146],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"ÃÂÃÂÃÂ¾ 2","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[263.5,-118,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[247.381,-117.593,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[263.5,-118,0]}],"ix":2},"a":{"a":0,"k":[-305.5,-118,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[111,138],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.882353001015,0.882353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-305.5,-118],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"ÃÂÃÂÃÂ¾ 1","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[-305.5,-118,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[-321.619,-117.593,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[-305.5,-118,0]}],"ix":2},"a":{"a":0,"k":[-305.5,-118,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[111,138],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.882353001015,0.882353001015,0.882353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-305.5,-118],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"ÃÂÃÂµÃÂ½ÃÂ","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[416,791,0],"ix":2},"a":{"a":0,"k":[-17.5,380.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":45,"s":[108,108,100]},{"t":90,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[249,59],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.76862745098,0.76862745098,0.76862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-17.5,380.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}'),
                Ge = e => {
                    var {
                        toggleFullScreen: t
                    } = e;
                    return l().createElement("div", null, l().createElement(Me.tM, {
                        className: "hr-flex hr-align-center hr-col challenge-full-screen-nudge-wrapper"
                    }, l().createElement(qe(), {
                        className: "challenge-full-screen-nudge-wrapper__lottie",
                        animationData: Ue,
                        loop: !0
                    }), l().createElement("div", {
                        className: "hr-flex hr-col hr-gap-1 hr-align-center hr-m-t-1"
                    }, "Hey there! Please enter the full-screen mode for the best experience", l().createElement(Me.wt, {
                        variant: "secondary",
                        isFullWidth: !1,
                        onClick: t
                    }, "Enter Fullscreen"))))
                };
            var He = a("8Oi2"),
                We = a("bSSt"),
                Ke = a("FYTy"),
                Qe = a("QozN"),
                Ye = a("3D6Z");
            const ze = (0, d.qC)(N.Z, (0, m.$j)((function(e, t) {
                var {
                    challengeSlug: a,
                    contestSlug: s
                } = t.appUtil.params, n = (0, _.M2)(a, s), {
                    challenges: {
                        gitData: l
                    },
                    profile: {
                        id: i
                    }
                } = e.community, {
                    git_browse_url: r,
                    git_url: o
                } = l[n];
                return {
                    gitBrowseUrl: r,
                    gitUrl: o,
                    uniqueKey: "".concat(i, "-").concat(n)
                }
            }), null))((function(e) {
                var t, a, {
                        gitUrl: s,
                        gitBrowseUrl: i,
                        uniqueKey: r,
                        handleSubmission: o,
                        submitBlocked: c,
                        language: m,
                        appUtil: {
                            params: {
                                contestSlug: d = "master",
                                challengeSlug: u
                            }
                        }
                    } = e,
                    h = "".concat(i, "/commits/master"),
                    b = "".concat(s, "/history"),
                    E = (0, n.useRef)(new We.Z({
                        type: "basic",
                        placement: "topCenter",
                        icon: "ui-icon-clipboard",
                        duration: 5,
                        closable: !0
                    })).current,
                    [v, k] = (0, n.useState)(!0),
                    [y, S] = (0, n.useState)(void 0),
                    [x, N] = (0, n.useState)(h),
                    w = () => {
                        k(!0), N("".concat(h, "?_=").concat((new Date).getTime()))
                    },
                    _ = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        E.update({
                            icon: "ui-icon-github",
                            type: e.type || "basic",
                            message: e.message || "Git commit received! Auto-reloading the view"
                        })
                    },
                    T = () => {
                        var e;
                        e = b, (a = (0, C.ajaxGet)({
                            url: e,
                            noCsrf: !0
                        })).then((e => {
                            if (null != e && e.length) {
                                var t = r,
                                    {
                                        date: a = null
                                    } = e[0],
                                    s = sessionStorage.getItem(t);
                                a && s !== a && (s && (_(), w()), sessionStorage.setItem(t, e[0].date))
                            }
                        })).catch((e => {
                            _({
                                type: "error",
                                message: e.message || "Unable to fetch git commits log"
                            })
                        })).finally((() => {
                            t = setTimeout(T, 3e4)
                        }))
                    };
                return (0, n.useEffect)((() => (T(), () => {
                    E.hide(), clearTimeout(t), a && a.abort()
                })), [s, r]), (0, n.useEffect)((() => {
                    k(!0), N("".concat(i, "/commits/master"))
                }), [i]), l().createElement("section", {
                    className: "git-ux-wrapper theme-m"
                }, l().createElement(g.Z, {
                    className: "git-ux"
                }, l().createElement("div", {
                    className: "git-ux-section"
                }, l().createElement("h4", {
                    className: "git-ux-heading"
                }, "Step 1: Clone git repository"), l().createElement(Ye.Z, {
                    value: s,
                    className: "git-ux-copy-btn",
                    btnText: "Copy Git URL",
                    metrics: {
                        "data-analytics": "CopyGitUrl",
                        "data-attr2": d,
                        "data-attr3": u,
                        "data-event-category": "HRC Practice",
                        "data-event-label": "CopyGitUrl",
                        "data-cd-contest-slug": d,
                        "data-cd-challenge-slug": u
                    }
                })), l().createElement("div", {
                    className: "git-ux-section git-ux-step2"
                }, l().createElement("h4", {
                    className: "git-ux-heading"
                }, "Step 2: View your latest submission from local here"), y && l().createElement("p", {
                    className: "git-ux-text-refresh-status"
                }, "Last updated at ", y, " |", l().createElement(p.Dr, {
                    Icon: Ke.Z,
                    iconAlignment: "left",
                    disabled: v,
                    onClick: w,
                    "data-analytics": "RefreshGitListView",
                    "data-attr2": d,
                    "data-atrr3": u,
                    "data-event-category": "HRC Practice",
                    "data-event-label": "RefreshGitListView",
                    "data-cd-contest-slug": d,
                    "data-cd-challenge-slug": u
                }, "Refresh View"))), l().createElement(Qe.Z, {
                    isLoading: v,
                    className: "git-list-iframe-wrapper",
                    gitIframeUrl: x,
                    title: "Project Question Git View",
                    onLoad: () => {
                        var e;
                        k(!1), S((e = new Date, "".concat(e.getDate(), " ").concat(function() {
                            var e = new Date;
                            return f.qe[e.getMonth()]
                        }(), " ").concat(e.getFullYear(), ", ").concat(e.toLocaleTimeString())))
                    }
                })), l().createElement(p.KM, {
                    className: "git-ux-btn-submit",
                    onClick: o,
                    disabled: c,
                    loading: c,
                    "data-analytics": "SubmitCode",
                    "data-attr1": "full_screen",
                    "data-attr2": d,
                    "data-atrr3": u,
                    "data-attr4": f.NM.FULLSTACK,
                    "data-attr6": m,
                    "data-event-category": "HRC Practice",
                    "data-event-label": "SubmitCode",
                    "data-cd-contest-slug": d,
                    "data-cd-challenge-slug": u,
                    "data-cd-challenge-kind": f.NM.FULLSTACK,
                    "data-cd-submission-lang": m
                }, "Submit Code"))
            }));
            var Xe = a("OYaA"),
                Je = a("RMPL"),
                $e = [{
                    author: "bot",
                    message: "Give me a hint.",
                    variant: "suggestion",
                    reactKey: "errorCodeSuggestions_1",
                    date: Date.now()
                }, {
                    author: "bot",
                    message: "How do I resolve this error?",
                    variant: "suggestion",
                    reactKey: "errorCodeSuggestions_2",
                    date: Date.now()
                }, {
                    author: "bot",
                    message: "Why are the test cases failing?",
                    variant: "suggestion",
                    reactKey: "errorCodeSuggestions_3",
                    date: Date.now()
                }],
                et = [{
                    author: "bot",
                    message: "Explore alternate solutions.",
                    variant: "suggestion",
                    reactKey: "successCodeSuggestions_1",
                    date: Date.now()
                }, {
                    author: "bot",
                    message: "Areas I can improve my code?",
                    variant: "suggestion",
                    reactKey: "successCodeSuggestions_2",
                    date: Date.now()
                }, {
                    author: "bot",
                    message: "How could I reduce time or space complexity?",
                    variant: "suggestion",
                    reactKey: "successCodeSuggestions_3",
                    date: Date.now()
                }],
                tt = a("1ZGV");

            function at(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? at(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : at(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            a("GjFC"), a("CnOq");
            var nt = "fs-ch-seen";
            class lt extends l().Component {
                constructor() {
                    var e;
                    super(...arguments), e = this, (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "compileTimeout", void 0), (0, s.Z)(this, "splitInstance", void 0), (0, s.Z)(this, "responseView", void 0), (0, s.Z)(this, "editorView", void 0), (0, s.Z)(this, "leftPane", void 0), (0, s.Z)(this, "rightPane", void 0), (0, s.Z)(this, "tutorBotSendMessageFn", void 0), (0, s.Z)(this, "state", {}), (0, s.Z)(this, "darkModeBannerSeen", (() => {
                        var {
                            profile: e,
                            profileActions: t
                        } = this.props;
                        e.dark_mode_banner_seen || t.updateProfile("me", {
                            dark_mode_banner_seen: !0
                        })
                    })), (0, s.Z)(this, "darkModeSeen", (() => {
                        var {
                            profile: e,
                            profileActions: t
                        } = this.props;
                        e.dark_mode_seen || (t.updateProfile("me", {
                            dark_mode_seen: !0
                        }), w.Z.batch_track("View", "DarkModeIntro", {
                            attribute1: "finish_intro"
                        }))
                    })), (0, s.Z)(this, "codeChangeCallback", (e => {
                        var {
                            featureFlags: t
                        } = this.props, {
                            show_tutor_bot_v1: a
                        } = t;
                        "false" !== a && this.setState({
                            tutorBotCodeContext: e
                        })
                    })), (0, s.Z)(this, "runOnceOnLoad", h()((() => {}))), (0, s.Z)(this, "handleEditorLoad", (() => {
                        this.runOnceOnLoad()
                    })), (0, s.Z)(this, "handleDarkModeIntroUse", (e => {
                        var t = "start_intro" === e ? {
                            isFullBtnHighlighted: !0,
                            theme: "dark"
                        } : {};
                        this.setState(st(st({}, t), {}, {
                            showDarkModePanel: !1
                        })), this.darkModeBannerSeen(), w.Z.batch_track("Click", "DarkModeIntro", {
                            attribute1: e
                        })
                    })), (0, s.Z)(this, "changeTheme", (e => {
                        var t = this.isChangeThemeBtnHighlighted() ? {
                            isChangeThemeBtnUsed: !0
                        } : {};
                        this.setState(st(st({}, t), {}, {
                            theme: e
                        }))
                    })), (0, s.Z)(this, "toggleFullScreen", (e => {
                        var {
                            router: t,
                            challenge: a,
                            contest: s,
                            location: n
                        } = this.props, {
                            theme: l,
                            isChangeThemeBtnUsed: i
                        } = this.state, r = st(st({}, n.query), {}, {
                            isFullScreen: e
                        }), o = {
                            attribute1: e,
                            attribute2: a.slug,
                            attribute3: s.slug || "master"
                        };
                        a.kind === f.NM.FULLSTACK ? w.Z.batch_track("Click", "AttemptChallenge", st(st({}, o), {}, {
                            attribute1: a.kind
                        })) : w.Z.batch_track("Click", "SwitchToFullScreenEditor", o), t.push(st(st({}, n), {}, {
                            query: r
                        })), !i && e && "light" !== l && this.darkModeSeen();
                        var c = this.isChangeThemeBtnHighlighted() ? {
                            isChangeThemeBtnUsed: !0
                        } : {};
                        this.setState(st(st({}, c), {}, {
                            isFullBtnHighlighted: !1
                        }))
                    })), (0, s.Z)(this, "scrollToResponse", (() => {
                        this.responseView && this.responseView.scrollIntoView({
                            behavior: "smooth"
                        })
                    })), (0, s.Z)(this, "scrollToEditor", (() => {
                        this.editorView && this.editorView.scrollIntoView({
                            behavior: "smooth"
                        })
                    })), (0, s.Z)(this, "onLanguageSelect", (e => {
                        this.setState({
                            selectedLanguage: e
                        })
                    })), (0, s.Z)(this, "onCodeChange", (() => {
                        this.setState({
                            errorMarkers: void 0,
                            compileTestBlocked: !1,
                            submitBlocked: !1
                        })
                    })), (0, s.Z)(this, "onChallengeTestRun", (e => {
                        this.clearResponseView(), this.setState({
                            editorAction: "test",
                            compileTestBlocked: !0,
                            compileStatusString: "Uploading...",
                            submissionError: ""
                        }, (() => {
                            this.compileTestStatus(e), this.scrollToResponse()
                        }))
                    })), (0, s.Z)(this, "onChallengeSubmission", (function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            {
                                submitChallenge: a
                            } = e.props.submissionActions,
                            {
                                appUtil: {
                                    location: s
                                }
                            } = e.props,
                            n = (0, Z.t1)(s);
                        e.clearResponseView(), e.setState({
                            editorAction: "submit",
                            submitBlocked: !0,
                            compileStatusString: void 0
                        }, e.scrollToResponse);
                        var {
                            challenge: l
                        } = e.props, {
                            contest_slug: i,
                            slug: r
                        } = l;
                        a({
                            contestSlug: i,
                            challengeSlug: r,
                            code: t.code,
                            language: t.language || l.languages[0],
                            playlistSlug: n
                        }).then((t => {
                            e.setState({
                                submitBlocked: !1
                            }), t.status ? e.setState({
                                submissionId: t.model.id,
                                submissionError: ""
                            }) : t.message && e.setState({
                                submissionError: t.message
                            })
                        }), (() => {
                            e.setState({
                                submitBlocked: !1
                            })
                        }))
                    })), (0, s.Z)(this, "getTutorBotSuggestionMessageFn", (e => {
                        this.tutorBotSendMessageFn = e
                    }))
                }
                static getDerivedStateFromProps(e, t) {
                    var a, {
                            location: {
                                pathname: s
                            },
                            challenge: n
                        } = e,
                        {
                            prevPathname: l
                        } = t;
                    return s !== l ? st(st({}, Object.keys(t).reduce(((e, t) => (e[t] = void 0, e)), {})), {}, {
                        prevPathname: s,
                        isChangeThemeBtnUsed: !1,
                        showDarkModePanel: !1,
                        isFrontendChallenge: null !== (a = (null == n ? void 0 : n.kind) === f.NM.FRONTEND) && void 0 !== a && a,
                        theme: "light"
                    }) : null
                }
                componentWillUnmount() {
                    Je.Z.disconnect(), this.splitInstance && this.splitInstance.destroy(), clearTimeout(this.compileTimeout), y.Z.showScrollBars()
                }
                componentDidMount() {
                    var {
                        challenge: e,
                        profile: t,
                        profileActions: a,
                        featureFlags: s
                    } = this.props, {
                        show_tutor_bot_v1: n
                    } = s;
                    t.dark_mode_banner_seen && this.setState({
                        isChangeThemeBtnUsed: !0
                    }), "solve-me-first" === e.slug && "clicked_nux" === t.status_solve_me_first && a.updateProfile("me", {
                        status_solve_me_first: "reached_challenge_page"
                    }), "false" !== n && C.ajaxGetWithToken({
                        url: (0, q.kG)("tutorBotAuthUrl"),
                        jsonApi: !0
                    })
                }
                componentDidUpdate(e) {
                    this.isFullScreen(e) && !this.isFullScreen(this.props) && this.scrollToEditorWrapper()
                }
                scrollToEditorWrapper() {
                    setTimeout((() => {
                        var e;
                        null === (e = this.rightPane) || void 0 === e || e.scrollIntoView()
                    }), 0)
                }
                isFullScreen(e) {
                    var {
                        location: t
                    } = e || this.props;
                    return "true" === (0, S.d)(t).isFullScreen
                }
                isChangeThemeBtnHighlighted() {
                    var {
                        theme: e,
                        isFullBtnHighlighted: t,
                        isChangeThemeBtnUsed: a
                    } = this.state, s = this.isFullScreen();
                    return !a && !t && s && "light" !== e
                }
                clearResponseView() {
                    this.setState({
                        submissionId: void 0,
                        compileData: void 0,
                        compileErrors: void 0
                    })
                }
                trackCompileTestStatus(e, t) {
                    var a, {
                            contest: s,
                            challenge: n,
                            featureFlags: l
                        } = this.props,
                        {
                            code: i,
                            language: r
                        } = t,
                        {
                            compilemessage: o,
                            stderr: c,
                            stdout: m,
                            testcase_message: d
                        } = this.state.compileData,
                        {
                            statusText: u,
                            statusClass: h
                        } = (0, tt.I)(this.state.compileData),
                        {
                            show_tutor_bot_v1: p
                        } = l,
                        g = p && "false" !== p;
                    if (w.Z.batch_track("CompileTestStatusRecieved", n.slug, {
                            attribute1: s.slug,
                            attribute3: r,
                            attribute7: e
                        }), g)
                        if ("error" === h) {
                            if ("Runtime Error" === u ? a = "runtime error: ".concat(o || c) : "Compilation Error" === u ? a = "compilation error: ".concat(o || c) : "Wrong Answer" === u && (a = "wrong answers: ".concat(d || m)), a) {
                                var b = "language: ".concat(r, ",\ncode: ").concat(i, ",\n").concat(a, "\n");
                                this.setState({
                                    tutorBotCodeContext: b
                                }), this.tutorBotSendMessageFn($e)
                            }
                        } else if ("success" === h && "Compilation Successful" === u) {
                        var E = "language: ".concat(r, ",\ncode: ").concat(i, ",\ncompilation successful: ").concat(d, "\n");
                        this.setState({
                            tutorBotCodeContext: E
                        }), this.tutorBotSendMessageFn(et)
                    }
                }
                compileTestStatus(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500,
                        {
                            challenge: s,
                            appUtil: {
                                location: n
                            }
                        } = this.props,
                        l = (0, Z.t1)(n);
                    (0, _.NM)({
                        challenge: s,
                        codeshellData: e,
                        compileId: t,
                        playlistSlug: l
                    }).then((t => {
                        var {
                            error_markers: s,
                            status: n,
                            errors: l,
                            id: i,
                            games: r,
                            status_string: o
                        } = t.model;
                        s && s.markers && this.setState({
                            errorMarkers: s
                        }), this.clearResponseView(), 2 === n && l ? (this.setState({
                            compileErrors: l,
                            compileTestBlocked: !1,
                            compileStatusString: void 0
                        }), this.trackCompileTestStatus(n, e)) : n > 0 || r && r.length ? (this.setState({
                            compileTestBlocked: !1,
                            compileData: t.model,
                            compileStatusString: void 0
                        }), this.trackCompileTestStatus(n, e), this.scrollToResponse()) : (this.compileTimeout && clearTimeout(this.compileTimeout), a < 1e4 && (a *= 1.05), this.compileTimeout = setTimeout((() => {
                            this.compileTestStatus(e, i, a)
                        }), a), this.setState({
                            compileStatusString: "string" == typeof o ? o : "Processing..."
                        }))
                    }), (() => {
                        this.setState({
                            compileTestBlocked: !1
                        })
                    }))
                }
                renderCodeEditor() {
                    var {
                        profile: e,
                        challenge: t,
                        contest: a,
                        appUtil: s,
                        submission: n
                    } = this.props, {
                        location: i
                    } = s, r = !!i.query.zen, {
                        showDarkModePanel: o,
                        compileTestBlocked: c,
                        submitBlocked: m,
                        errorMarkers: d
                    } = this.state, u = this.isFullScreen();
                    return l().createElement(Ze.ZP, {
                        profile: e,
                        challenge: t,
                        contest: a,
                        zenMode: r,
                        submission: n,
                        showDarkModePanel: o,
                        onEditorLoad: this.handleEditorLoad,
                        onDarkModeIntroUse: this.handleDarkModeIntroUse,
                        onChallengeTestRun: this.onChallengeTestRun,
                        onChallengeSubmission: this.onChallengeSubmission,
                        toggleFullScreen: this.toggleFullScreen,
                        onCodeChange: this.onCodeChange,
                        onCodeChangeCallback: this.codeChangeCallback,
                        compileTestBlocked: c,
                        submitBlocked: m,
                        errorMarkers: d,
                        isFullScreen: u
                    })
                }
                renderDesignCodeEditor() {
                    return l().createElement("div", null)
                }
                renderDatasetUploader() {
                    var {
                        fileSubmissions: e,
                        challenge: t,
                        profile: a,
                        challengeActions: s
                    } = this.props;
                    return l().createElement(Be, {
                        dataSetFiles: e,
                        challenge: t,
                        profile: a,
                        challengeActions: s
                    })
                }
                renderFullScreenViewEditor() {
                    var {
                        appUtil: {
                            params: {
                                challengeSlug: e,
                                contestSlug: t = "master"
                            }
                        },
                        challenge: {
                            kind: a,
                            languages: s
                        }
                    } = this.props, {
                        submitBlocked: n
                    } = this.state;
                    return this.isFullScreen() ? a === f.NM.FULLSTACK ? l().createElement(ze, {
                        handleSubmission: this.onChallengeSubmission,
                        submitBlocked: n,
                        language: s[0]
                    }) : void 0 : l().createElement("div", {
                        className: "attempt-challenge-btn-wrapper"
                    }, l().createElement(p.KM, {
                        onClick: this.toggleFullScreen.bind(null, !0),
                        "data-event-category": "HRC Practice",
                        "data-event-label": "AttemptChallenge",
                        "data-cd-contest-slug": t,
                        "data-cd-challenge-slug": e,
                        "data-cd-challenge-kind": a,
                        "data-automation": "attempt-challenge-btb"
                    }, "Attempt Challenge"))
                }
                renderEditor() {
                    var {
                        kind: e
                    } = this.props.challenge;
                    return ["code", "game", "client-server", "database"].includes(e) ? this.renderCodeEditor() : "design" === e ? this.renderDesignCodeEditor() : "dataset" === e ? this.renderDatasetUploader() : e === f.NM.FULLSTACK ? this.renderFullScreenViewEditor() : null
                }
                renderResponseOutput() {
                    var {
                        editorAction: e,
                        submissionId: t,
                        compileData: a
                    } = this.state, {
                        profile: s,
                        challenge: n
                    } = this.props;
                    return "test" === e && a ? l().createElement(Oe.Z, {
                        compileData: a,
                        challenge: n
                    }) : "submit" === e && t ? l().createElement(He.ZP, {
                        challenge: n,
                        profile: s,
                        submissionId: t,
                        pageType: "problem",
                        onTryAgain: this.scrollToEditor
                    }) : void 0
                }
                getTabList() {
                    var {
                        challenge: e,
                        contest: t,
                        appUtil: a
                    } = this.props, {
                        isRouteActive: s
                    } = a, n = (0, _.cu)(e), l = (0, _.fp)({
                        challenge: e,
                        contest: t,
                        challengeBaseUrl: n
                    });
                    return {
                        tabsList: l,
                        activeTabIndex: (0, _.p$)(l, n, s)
                    }
                }
                renderMcqChallenge() {
                    var {
                        challenge: e
                    } = this.props;
                    return l().createElement(Y, {
                        challenge: e
                    })
                }
                renderFrontendIDE() {
                    var {
                        profile: e,
                        challenge: t,
                        contest: a
                    } = this.props;
                    return this.isFullScreen() ? l().createElement(Ie.ZP, {
                        profile: e,
                        challenge: t,
                        contest: a
                    }) : l().createElement(Ge, {
                        toggleFullScreen: this.toggleFullScreen.bind(null, !0)
                    })
                }
                renderCodingArea() {
                    var {
                        compileData: e,
                        submissionId: t,
                        compileErrors: a,
                        compileStatusString: s,
                        submissionError: n
                    } = this.state;
                    return l().createElement("section", {
                        className: "code-editor-section split",
                        ref: e => {
                            this.rightPane = e
                        }
                    }, l().createElement("div", {
                        ref: e => this.editorView = e
                    }, this.renderEditor()), n && l().createElement("div", {
                        id: "submission-message"
                    }, l().createElement("p", {
                        className: "error"
                    }, n)), l().createElement("div", {
                        ref: e => {
                            this.responseView = e
                        },
                        className: "challenge-response fs-container"
                    }, a && l().createElement(g.Z, {
                        layer: 2,
                        className: "compilation-errors-card"
                    }, l().createElement("div", {
                        className: "compilation-error-heading"
                    }, "Error "), a.map(((e, t) => l().createElement("div", {
                        key: t,
                        className: "compilation-errors"
                    }, e)))), s && l().createElement("h5", {
                        className: "compilation-progress"
                    }, s), (e || t) && l().createElement("div", {
                        className: "output-area-wrap"
                    }, l().createElement("div", {
                        className: "output-area mlT psT",
                        id: "output-area"
                    }, this.renderResponseOutput()))))
                }
                renderFullScreenProblem() {
                    var {
                        challenge: e,
                        contest: t,
                        appUtil: a,
                        profile: s,
                        featureFlags: n
                    } = this.props, {
                        selectedLanguage: i,
                        isFrontendChallenge: r
                    } = this.state, {
                        tabsList: o,
                        activeTabIndex: c
                    } = this.getTabList(), {
                        show_tutor_bot_v1: m
                    } = n, d = m && "false" !== m && !r, u = {
                        productNamespace: "HRC",
                        tutorBotModel: m,
                        conversationId: String(null == e ? void 0 : e.id),
                        userId: String(null == s ? void 0 : s.id),
                        theme: (null == s ? void 0 : s.user_prefers_theme) || "light",
                        getSendMessageFn: this.getTutorBotSuggestionMessageFn,
                        codeContext: this.state.tutorBotCodeContext,
                        questionContext: !(0, S.sk)() && (0, tt.d)((null == e ? void 0 : e.preferred_body_html) || (null == e ? void 0 : e.body_html))
                    }, h = l().createElement("div", {
                        id: "fullScreenLeftPane",
                        className: "problem-statement-container"
                    }, l().createElement(me, {
                        challenge: e,
                        contest: t,
                        selectedLanguage: i
                    })), p = l().createElement("div", {
                        className: "challenge-page-wrap theme-m-content"
                    }, this.renderCodingArea()), g = l().createElement("div", {
                        className: "challenge-page-wrap frontend-pane theme-m-content"
                    }, this.renderFrontendIDE());
                    return l().createElement(U, {
                        isFrontend: r,
                        handleScreenRestore: () => {
                            this.toggleFullScreen(!1)
                        },
                        leftPane: r ? null : h,
                        rightPane: r ? g : p,
                        assetPath: a.assetPath,
                        tabsList: o,
                        activeTabIndex: c,
                        tutorBotProps: u,
                        showTutorBot: d
                    })
                }
                renderChallenge() {
                    var {
                        challenge: e,
                        contest: t
                    } = this.props, {
                        selectedLanguage: a,
                        isFrontendChallenge: s
                    } = this.state, n = this.isFullScreen();
                    return n ? this.renderFullScreenProblem() : l().createElement("div", {
                        className: "container challenge-page-wrap panes-container theme-m-content"
                    }, l().createElement("div", {
                        className: c()("full-screen-split split-wrap left-pane", {
                            "is-fullscreen": n
                        })
                    }, l().createElement("section", {
                        className: "problem-statement split",
                        ref: e => this.leftPane = e
                    }, e.solved && l().createElement(b.ZP, null, l().createElement(b.ZP.Content, null, l().createElement(v.ij, null, l().createElement(we, {
                        challenge: e,
                        contest: t
                    })))), l().createElement(b.ZP, null, l().createElement(b.ZP.Content, null, l().createElement(me, {
                        challenge: e,
                        contest: t,
                        selectedLanguage: a
                    })))), s ? this.renderFrontendIDE() : this.renderCodingArea()), l().createElement(v.Hi, null, l().createElement("div", {
                        className: "right-pane"
                    }, l().createElement(Te, {
                        challenge: e,
                        contest: t,
                        onLanguageSelect: this.onLanguageSelect,
                        selectedLanguage: a
                    }))))
                }
                renderFeatureFeedbackForFullstack() {
                    if (!(0, S.sk)()) {
                        var {
                            isFullstackFeatureFeedback: e,
                            appUtil: {
                                location: {
                                    query: t
                                }
                            }
                        } = this.props, a = "true" === t.isFullScreen, s = "true" === x.Z.getItem(nt);
                        return e ? a && x.Z.setItem(nt, "true") : x.Z.removeItem(nt), s && !a ? l().createElement(Xe.Z, {
                            featureId: 10,
                            align: "left",
                            className: "feature-feedback-bottom-right-fixed",
                            popoverClassName: "popover-bottom-right-fixed",
                            coordinate: {
                                right: "83px",
                                bottom: "20px"
                            },
                            theme: "theme-m"
                        }) : void 0
                    }
                }
                render() {
                    var {
                        challenge: e
                    } = this.props, {
                        isFullBtnHighlighted: t,
                        theme: a
                    } = this.state, s = this.isChangeThemeBtnHighlighted();
                    return l().createElement("section", {
                        className: "challenge-interface challenge-problem"
                    }, l().createElement(E.Wk, {
                        value: {
                            isFullBtnHighlighted: t,
                            isChangeThemeBtnHighlighted: s,
                            theme: a,
                            changeTheme: this.changeTheme
                        }
                    }, l().createElement("div", {
                        className: "challenge-body"
                    }, l().createElement("div", {
                        className: "challenge-body-elements-problem challenge-container-element"
                    }, "mcq" === e.kind ? this.renderMcqChallenge() : this.renderChallenge()))), e.kind === f.NM.FULLSTACK && this.renderFeatureFeedbackForFullstack())
                }
            }(0, s.Z)(lt, "propTypes", {
                challenge: r().object.isRequired,
                contest: r().object.isRequired,
                profile: r().object.isRequired,
                submissionActions: r().object.isRequired,
                challengeActions: r().object.isRequired,
                fileSubmissions: r().array,
                appUtil: r().object.isRequired,
                submission: r().object
            }), lt = (0, m.$j)((function(e, t) {
                var {
                    params: a
                } = t.appUtil, {
                    submissionId: s,
                    contestSlug: n = "master"
                } = a, {
                    profile: l,
                    submissions: i,
                    featureFlags: r
                } = e.community, {
                    detail: o,
                    fileSubmissions: c
                } = (0, _.CD)(e, a), m = (0, T.sh)(n, e);
                return {
                    challenge: o,
                    submission: i.allSubmissions[s],
                    contest: m,
                    profile: l,
                    fileSubmissions: c,
                    isFullstackFeatureFeedback: Boolean(e.featureFeedback.featureLists[10]),
                    featureFlags: r
                }
            }), (e => ({
                submissionActions: (0, d.DE)(W.Z, e),
                challengeActions: (0, d.DE)(H.Z, e),
                profileActions: (0, d.DE)(G.Z, e)
            })))(lt);
            const it = lt = (0, N.Z)(lt)
        },
        jeZn: (e, t, a) => {
            a.d(t, {
                Z: () => A
            });
            var s = a("L5+t"),
                n = (a("Z2Ku"), a("CX2u"), a("yt8O"), a("rGqo"), a("KKXr"), a("DTvD")),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("0ier"),
                c = a("f0Wu"),
                m = a.n(c),
                d = a("66t9"),
                u = a("TSYQ"),
                h = a.n(u),
                p = a("WLt8"),
                g = a("ZG/v"),
                b = a("XBRQ"),
                E = a("t4BO"),
                v = a("qxc9"),
                k = a("VD8A"),
                f = a("YAkj"),
                y = a("rpVu"),
                S = a("04gq"),
                x = a("8Oi2"),
                N = a("CmRW");

            function w(e) {
                var {
                    submission: t
                } = e, {
                    name: a,
                    next_challenge: s
                } = t;
                return s ? l().createElement("div", {
                    className: "submission-recommendation"
                }, l().createElement("p", {
                    className: "recommend-text"
                }, "People who solved ", l().createElement("strong", null, a), " attempted this next:"), l().createElement(d.Link, {
                    className: "challenge-link",
                    to: s.url,
                    target: "_blank"
                }, l().createElement("div", {
                    className: "recommendation-card"
                }, l().createElement("div", {
                    className: "challenge-desc"
                }, l().createElement("div", {
                    className: "challenge-name"
                }, s.name), l().createElement("div", {
                    className: "challenge-preview"
                }, s.preview || "")), l().createElement("div", {
                    className: "challenge-btn-wrap"
                }, l().createElement(N.KM, null, "Solve Challenge"))))) : null
            }
            w.propTypes = {
                submission: r().object
            };
            const C = w;
            var _ = a("KMmN"),
                T = a("ZxB4"),
                Z = a("eRsb"),
                P = a("QozN");
            class D extends l().Component {
                constructor() {
                    super(), (0, s.Z)(this, "codeshellKindsArr", void 0), (0, s.Z)(this, "codeViewer", void 0), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "handleGitUxIframeLoad", (() => {
                        this.setState({
                            isGitListLoading: !1
                        })
                    })), this.codeshellKindsArr = ["code", "database"], this.state = {
                        isGitListLoading: !0
                    }
                }
                componentDidMount() {
                    this.codeshellKindsArr.includes(this.props.submission.kind) && this.initialCodeMirror()
                }
                initialCodeMirror() {
                    var {
                        appUtil: e,
                        submission: t
                    } = this.props, {
                        assetPath: a
                    } = e, {
                        language: s,
                        code: n
                    } = t;
                    this.setState({
                        loadingCodeMirror: !0
                    });
                    var l = [];
                    l.push(new Promise(((t, n) => {
                        (0, f.Tt)(e).then((() => {
                            (0, k.Zn)(s, a).finally(t)
                        }), n)
                    }))), l.push((0, E.a)([a("codeshell_editor_theme_m.css")])), Promise.all(l).then((() => {
                        this.setState({
                            loadingCodeMirror: !1
                        }, (() => {
                            "function" == typeof window.CodeMirror && window.CodeMirror(this.codeViewer, {
                                lineNumbers: !0,
                                firstLineNumber: this.getStartingLine(),
                                lineWrapping: !0,
                                matchBrackets: !0,
                                mode: k.Bw[s],
                                indentUnit: 4,
                                readOnly: !0,
                                value: n
                            })
                        }))
                    }))
                }
                getStartingLine() {
                    var {
                        challenge: e,
                        submission: t
                    } = this.props, {
                        language: a
                    } = t, s = e["".concat(a, "_skeliton_head")];
                    return s && a ? s.split("\n").length + 1 : 1
                }
                renderBlob() {
                    return l().createElement("div", {
                        className: "apply-blob"
                    })
                }
                renderFullStackBlock() {
                    var {
                        gitBrowseUrl: e,
                        submission: t
                    } = this.props, {
                        isGitListLoading: a
                    } = this.state, {
                        code: s
                    } = t, n = "".concat(e, "/").concat(s);
                    return s.startsWith("DELETED_") ? l().createElement("div", {
                        className: "deleted-commit"
                    }, l().createElement(g.Z, {
                        className: "deleted-commit-icon"
                    }), l().createElement("p", {
                        className: "deleted-commit-text"
                    }, "Details for this commit are not available because it was", l().createElement("br", null), "deleted by you.")) : l().createElement("div", {
                        className: "project-block"
                    }, l().createElement(P.Z, {
                        isLoading: a,
                        className: "project-git-iframe-wrapper",
                        title: "Project Submission Git View",
                        gitIframeUrl: n,
                        onLoad: this.handleGitUxIframeLoad
                    }))
                }
                renderDesignBlock() {
                    var {
                        slug: e,
                        language: t,
                        kind: a
                    } = this.props.submission;
                    return l().createElement("div", {
                        className: "pull-right submissions_code-copy msT"
                    }, l().createElement("a", {
                        className: "copy_to_clipboard small cursor",
                        "data-analytics": "SubmissionViewOpenInEditor",
                        "data-attr1": e,
                        "data-attr2": t,
                        "data-attr3": a
                    }, l().createElement("i", {
                        className: "icon-flow-branch"
                    }), " Open in editor"))
                }
                renderDatasetBlock() {
                    var {
                        data_set_file_submission_download_link: e
                    } = this.props.submission;
                    if (e) return l().createElement("div", {
                        className: "dataset-block"
                    }, l().createElement("h3", {
                        className: "plB"
                    }, "Submitted DataSet"), l().createElement("a", {
                        href: e,
                        target: "_blank"
                    }, "Download"))
                }
                renderFriendsLeaderboard() {
                    return l().createElement("div", {
                        id: "js-friends-leaderboard"
                    })
                }
                renderCodeBlock() {
                    var {
                        submission: e,
                        challenge: t
                    } = this.props, {
                        language: a,
                        slug: s,
                        kind: n,
                        id: i
                    } = e, r = (0, v.cu)(t);
                    return l().createElement("div", null, this.renderFriendsLeaderboard(), l().createElement("div", {
                        className: "code-block"
                    }, l().createElement("h3", {
                        className: "section-title"
                    }, "Submitted Code"), l().createElement("div", {
                        className: "code-wrap"
                    }, l().createElement("div", {
                        className: "submission-code-head"
                    }, l().createElement("div", {
                        className: "head-left"
                    }, l().createElement("span", null, l().createElement("strong", null, "Language:"), " ", k.hy[a])), l().createElement("div", {
                        className: "head-right"
                    }, l().createElement(d.Link, {
                        to: "".concat(r, "/copy-from/").concat(i),
                        className: "small cursor text-link",
                        "data-analytics": "SubmissionViewOpenInEditor",
                        "data-attr1": s,
                        "data-attr2": a,
                        "data-attr3": n
                    }, l().createElement("i", {
                        className: "ui-icon-fork"
                    }), "Open in editor"))), l().createElement("div", {
                        className: "code-viewer",
                        ref: e => {
                            this.codeViewer = e
                        }
                    }))))
                }
                renderSubmissionHeader() {
                    var {
                        view_by_owner: e,
                        hacker_username: t,
                        created_at_epoch: a,
                        status: s,
                        display_score: n,
                        display_status: i,
                        language: r
                    } = this.props.submission, o = s.startsWith("Accepted") ? "success" : "error", c = "Queued" !== s && "Processing" !== s && "Codechecker Error" !== s && "text" !== r, d = !e && t ? t : "You";
                    return l().createElement("div", {
                        className: "submission-header"
                    }, l().createElement("div", {
                        className: "submitted-at"
                    }, "".concat(d, " made this submission ").concat(m()(1e3 * a).fromNow(), ".")), c && l().createElement("div", {
                        className: "submission-score"
                    }, l().createElement("label", {
                        className: "label"
                    }, "Score:"), l().createElement("span", {
                        className: "value"
                    }, parseFloat(n || 0).toFixed(2))), l().createElement("div", {
                        className: "status-wrap"
                    }, l().createElement("label", {
                        className: "label"
                    }, "Status:"), l().createElement("span", {
                        className: h()("value", o)
                    }, i || s)))
                }
                renderSubmissionStatus() {
                    var {
                        submission: e,
                        challenge: t,
                        profile: a
                    } = this.props, {
                        id: s
                    } = e, n = {
                        submissionId: s,
                        challenge: t,
                        profile: a,
                        pageType: "submission"
                    };
                    return l().createElement(x.ZP, n)
                }
                renderSubmissionRecommendation() {
                    var {
                        submission: e
                    } = this.props, {
                        solved: t,
                        contest_slug: a
                    } = e;
                    if (t && "master" === a) return l().createElement(C, {
                        submission: e
                    })
                }
                renderSubmissionDetail() {
                    var {
                        submission: e
                    } = this.props, {
                        company: t,
                        kind: a
                    } = e, s = this.renderCodeBlock();
                    return l().createElement("section", {
                        className: "submission-details mjB"
                    }, this.renderSubmissionHeader(), this.renderSubmissionRecommendation(), t && this.renderBlob(), a === T.NM.FULLSTACK && this.renderFullStackBlock(), a === T.NM.DESIGN && this.renderDesignBlock(), a === T.NM.DATASET && this.renderDatasetBlock(), this.codeshellKindsArr.includes(a) && s)
                }
                renderSubmissionDetailPane() {
                    var {
                        challenge: e
                    } = this.props;
                    return l().createElement("div", {
                        className: "panes-container"
                    }, l().createElement("div", {
                        className: "left-pane"
                    }, l().createElement(p.ZP, null, l().createElement(p.ZP.Content, {
                        className: "tab-content"
                    }, this.renderSubmissionDetail())), this.renderSubmissionStatus()), l().createElement(b.Hi, null, l().createElement("aside", {
                        className: "right-pane challenge-sidebar"
                    }, l().createElement(Z.ZP, {
                        challenge: e
                    }))))
                }
                render() {
                    return l().createElement("div", {
                        className: "container submission-detail-wrapper"
                    }, this.renderSubmissionDetailPane())
                }
            }(0, s.Z)(D, "propTypes", {
                submission: r().object.isRequired,
                challenge: r().object.isRequired,
                profile: r().object.isRequired,
                abTest: r().object.isRequired
            }), D = (0, o.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    submissionId: s
                } = a, {
                    challenges: n,
                    submissions: l,
                    profile: i
                } = e.community, {
                    detail: r
                } = (0, v.CD)(e, a), o = r.kind === T.NM.FULLSTACK ? (0, S.YN)(n, a) : null;
                return {
                    challenge: r,
                    submission: l.allSubmissions[s],
                    profile: i,
                    gitBrowseUrl: o
                }
            }))(D), D = (0, y.Z)(D);
            const A = D = (0, _.ZP)(D)
        },
        s4BS: (e, t, a) => {
            a.d(t, {
                Z: () => C
            });
            var s = a("L5+t"),
                n = a("DTvD"),
                l = a.n(n),
                i = a("17x9"),
                r = a.n(i),
                o = a("0ier"),
                c = a("66t9"),
                m = a("f0Wu"),
                d = a.n(m),
                u = a("TSYQ"),
                h = a.n(u),
                p = a("CmRW"),
                g = a("MbLQ"),
                b = a("WLt8"),
                E = a("5F93"),
                v = a("XBRQ"),
                k = a("rpVu"),
                f = a("x/fO"),
                y = a("qxc9"),
                S = a("sLmT"),
                x = a("VD8A"),
                N = a("eRsb");
            a("qowp");
            class w extends l().Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "renderCell", ((e, t, a) => {
                        var s, {
                                challenge: n
                            } = this.props,
                            i = (0, y.cu)(n),
                            {
                                slug: r,
                                kind: o
                            } = n,
                            {
                                language: m,
                                created_at: u,
                                score: p,
                                status: g,
                                is_preliminary_score: b,
                                id: v
                            } = a,
                            k = "";
                        switch (g.startsWith("Accepted") ? (k = "check-circle", s = "statusAccepted") : "Compilation error" === g ? (k = "cross", s = "statusError") : "Queued" === g ? (k = "loading", s = "statusQueued") : "Processed" === g || "Processing" === g || (k = "cross", s = "statusError"), e) {
                            case "result":
                                return l().createElement("div", {
                                    className: h()("ellipsis", s)
                                }, l().createElement("i", {
                                    className: "ui-icon-".concat(k)
                                }), g);
                            case "score":
                                return l().createElement("div", {
                                    className: h()("ellipsis submission-score")
                                }, (0, E.Ts)(p, 2, 1), b && l().createElement("span", {
                                    className: "badge badge-info"
                                }, "PRELIMINARY"));
                            case "language":
                                return l().createElement("div", {
                                    className: h()("ellipsis submission-language")
                                }, x.hy[m] || m);
                            case "time":
                                return l().createElement("div", {
                                    className: h()("ellipsis submission-time")
                                }, d()(d().unix(u)).fromNow());
                            case "viewResult":
                                return l().createElement("div", {
                                    className: h()("ellipsis submission-result")
                                }, "mcq" !== o && l().createElement(c.Link, {
                                    to: "".concat(i, "/submissions/code/").concat(v),
                                    className: "text-link",
                                    "data-analytics": "SubmissionsListViewResults",
                                    "data-attr1": r,
                                    "data-attr2": a.slug,
                                    "data-attr10": p
                                }, "View Results"));
                            default:
                                return l().createElement("div", {
                                    className: "ellipsis"
                                }, a[e])
                        }
                    }))
                }
                renderNoSubmissionMessage() {
                    var {
                        challenge: e
                    } = this.props, {
                        name: t,
                        slug: a
                    } = e, s = (0, y.cu)(e);
                    return l().createElement("div", {
                        className: "no-submissions-wrapper text-center"
                    }, l().createElement("p", {
                        className: "no-submissions-message"
                    }, "You have not made any submissions for ".concat(t, " yet.")), l().createElement(c.Link, {
                        to: "".concat(s, "/problem"),
                        "data-analytics": "ChallengeViewSubmSolveChallenge",
                        "data-attr1": a
                    }, l().createElement(p.KM, null, "Solve ".concat(t.length < 40 ? t : "Problem"))))
                }
                renderSubmissionListTable() {
                    var {
                        submissions: e
                    } = this.props;
                    return l().createElement("div", {
                        className: "submission-list-table"
                    }, l().createElement(g.Z, {
                        data: e,
                        noHeader: !1,
                        tableClass: h()("ui-submission-list-table")
                    }, l().createElement(g.s, {
                        flex: 1,
                        columnKey: "result",
                        header: "Result",
                        columnClass: "result",
                        headerClass: "result",
                        renderCell: this.renderCell.bind(this, "result")
                    }), l().createElement(g.s, {
                        flex: 1,
                        columnKey: "score",
                        header: "Score",
                        columnClass: "score",
                        headerClass: "score",
                        renderCell: this.renderCell.bind(this, "score")
                    }), l().createElement(g.s, {
                        flex: 1,
                        columnKey: "language",
                        header: "Language",
                        columnClass: "language",
                        headerClass: "language",
                        renderCell: this.renderCell.bind(this, "language")
                    }), l().createElement(g.s, {
                        flex: 1,
                        columnKey: "time",
                        header: "Time",
                        columnClass: "time",
                        headerClass: "time",
                        renderCell: this.renderCell.bind(this, "time")
                    }), l().createElement(g.s, {
                        flex: 1,
                        columnKey: "view-results",
                        columnClass: "view-results",
                        headerClass: "view-results",
                        renderCell: this.renderCell.bind(this, "viewResult")
                    })))
                }
                render() {
                    var {
                        submissions: e,
                        appUtil: t,
                        totalSubmissions: a,
                        challenge: s
                    } = this.props, n = Math.ceil(a / S.tl.SUBMISSIONS_PER_PAGE);
                    return l().createElement("div", {
                        className: "container panes-container"
                    }, l().createElement("div", {
                        className: "left-pane"
                    }, l().createElement(b.ZP, null, l().createElement(b.ZP.Content, {
                        className: "tab-content"
                    }, l().createElement("div", {
                        className: h()({
                            "general-table-wrapper": e.length
                        })
                    }, l().createElement("div", {
                        className: "submission-list-wrapper theme-m-content general-table"
                    }, e.length ? this.renderSubmissionListTable() : this.renderNoSubmissionMessage())))), !!e.length && l().createElement("div", {
                        className: "submission-pagination"
                    }, l().createElement(f.Z, {
                        location: t.location,
                        count: n
                    }))), l().createElement(v.Hi, null, l().createElement("aside", {
                        className: "right-pane challenge-sidebar"
                    }, l().createElement(N.ZP, {
                        challenge: s
                    }))))
                }
            }(0, s.Z)(w, "propTypes", {
                challenge: r().object.isRequired,
                submissions: r().array.isRequired,
                totalSubmissions: r().number.isRequired,
                appUtil: r().object.isRequired
            }), w = (0, o.$j)(((e, t) => {
                var {
                    params: a
                } = t.appUtil, {
                    challengeSlug: s,
                    contestSlug: n
                } = a, l = Number(a.pageNo) || 1, {
                    submissions: i
                } = e.community, r = (0, y.M2)(s, n), {
                    detail: o
                } = (0, y.CD)(e, a), c = i.challengeSubmissions[r];
                return {
                    challenge: o,
                    submissions: c.page[l],
                    totalSubmissions: c.total
                }
            }))(w);
            const C = w = (0, k.Z)(w)
        },
        "3D6Z": (e, t, a) => {
            a.d(t, {
                Z: () => h
            });
            var s = a("+9dH"),
                n = a("DTvD"),
                l = a.n(n),
                i = a("TSYQ"),
                r = a.n(i),
                o = a("4ZbX"),
                c = a("CmRW"),
                m = a("kPpE"),
                d = a("QXJT");

            function u(e) {
                var {
                    value: t,
                    metrics: a,
                    className: n
                } = e, {
                    copied: i,
                    handleClick: u
                } = (0, d.Z)(t, {
                    timeout: 3e3
                });
                return l().createElement("div", {
                    className: r()("copy-link-input", n)
                }, l().createElement(o.ZP, {
                    className: "copy-link-input-text",
                    value: t,
                    theme: "theme-m"
                }), l().createElement(c.ZP, (0, s.Z)({
                    className: "copy-link-input-button btn-as-link",
                    onClick: u
                }, a), i ? l().createElement(m.phY, null) : l().createElement(m.ris, null)))
            }
            u.defaultProps = {
                metrics: {},
                btnText: "Copy Link",
                btnAfterCopyText: "Copied!"
            };
            const h = u
        },
        "x/fO": (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var s = a("+9dH"),
                n = a("PRvr"),
                l = (a("pIFo"), a("OG14"), a("DTvD")),
                i = a.n(l),
                r = a("66t9"),
                o = a("0jRy"),
                c = a("ZZ4+"),
                m = ["location"],
                d = /(.*?)\/(\d*)($|\/$)/;

            function u(e) {
                var {
                    location: t
                } = e, a = (0, n.Z)(e, m), {
                    page: l,
                    basePath: u
                } = function(e) {
                    var t, a = e.replace(d, ((e, a, s) => (t = Number(s), a)));
                    return {
                        page: t || 1,
                        basePath: a
                    }
                }(t.pathname);
                return i().createElement(o.Z, (0, s.Z)({
                    page: l
                }, a, {
                    renderItem: e => {
                        var a = "".concat(u, "/").concat(e.goToPage).concat(t.search);
                        return i().createElement(c.Z, (0, s.Z)({
                            renderElement: r.Link,
                            to: a
                        }, e))
                    }
                }))
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_challenge-4f848c5c.js.map