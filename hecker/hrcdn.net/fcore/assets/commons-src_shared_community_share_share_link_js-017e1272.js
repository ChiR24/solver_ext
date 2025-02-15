"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_share_share_link_js"], {
        bVDs: (e, a, t) => {
            t.d(a, {
                ZP: () => I
            });
            var c = t("L5+t"),
                n = t("+9dH"),
                o = t("PRvr"),
                r = t("DTvD"),
                s = t.n(r),
                i = t("TSYQ"),
                m = t.n(i),
                l = t("gQMU"),
                u = t.n(l),
                p = t("u6S6"),
                h = t.n(p),
                d = t("CmRW"),
                g = t("RSe9"),
                k = t("0dsM"),
                w = t("sI5T"),
                _ = t("0idV"),
                b = t("6GtL"),
                f = t("8+7d"),
                v = t("rpVu"),
                y = t("mbQF"),
                C = ["text", "Icon", "onClick", "fab", "coloredLogo"];

            function R(e) {
                var {
                    text: a,
                    Icon: t,
                    onClick: c,
                    fab: r,
                    coloredLogo: i
                } = e, m = (0, o.Z)(e, C);
                return r ? s().createElement(d.Dr, (0, n.Z)({
                    className: "social-btn-fab",
                    onClick: c
                }, m), s().createElement(t, {
                    className: "social-share-icon"
                }), s().createElement("span", {
                    className: "fab-fallback-share"
                }, a)) : i ? s().createElement(d.Dr, (0, n.Z)({
                    onClick: c
                }, m), s().createElement("img", {
                    src: i,
                    className: "social-btn-colored-logo",
                    alt: a
                })) : s().createElement(g.Z, (0, n.Z)({
                    Icon: t,
                    onClick: c,
                    btnText: a,
                    className: "social-share-icon",
                    tooltip: !1
                }, m))
            }
            class Z extends s().Component {
                constructor() {
                    super(...arguments), (0, c.Z)(this, "shareOnPopup", (e => {
                        var a = screen.width / 2 - 300,
                            t = screen.height / 2 - 150;
                        window.open(e, "_blank", "noopener noreferrer", "height=".concat(300, ",width=").concat(600, ",top=").concat(t, ",left=").concat(a)), window.focus()
                    })), (0, c.Z)(this, "sharedProps", (e => {
                        var {
                            fab: a,
                            page: t,
                            name: c,
                            isColored: n,
                            appUtil: o
                        } = this.props, r = u()(h()(t));
                        return {
                            fab: a,
                            coloredLogo: n && o.assetPath("social_share/".concat(e, ".svg")),
                            onClick: this.shareLink.bind(this, e),
                            "data-event-category": "HRC Skills",
                            "data-event-label": "".concat(u()(e)).concat(r),
                            "data-cd-skill": c
                        }
                    }))
                }
                shareLink(e, a) {
                    a.preventDefault();
                    var t = (0, f.O1)(e, this.props);
                    (0, f.OA)(t).then((a => {
                        var t = (0, f.kD)(a, e, this.props);
                        this.shareOnPopup(t)
                    }));
                    var {
                        name: c,
                        page: n,
                        slug: o,
                        badge: r = {}
                    } = this.props, s = {
                        attribute1: n,
                        attribute2: e,
                        attribute3: "trigger" === c ? "social-dialog" : "social-buttons",
                        attribute4: o,
                        attribute5: JSON.stringify(r)
                    };
                    b.Z.track("Click", "SocialShare", s)
                }
                render() {
                    var {
                        fab: e,
                        className: a,
                        align: t
                    } = this.props;
                    return s().createElement("div", {
                        className: m()(a, e ? "fab-icon-share-wrapper" : "social-links-wrapper", {
                            "pull-left": "left" === t,
                            "text-center": "center" === t,
                            "pull-right": "right" === t || !t
                        })
                    }, s().createElement(R, (0, n.Z)({
                        text: "Share on Facebook",
                        Icon: k.Z
                    }, this.sharedProps("facebook"))), s().createElement(R, (0, n.Z)({
                        text: "Share on Twitter",
                        Icon: w.Z
                    }, this.sharedProps("twitter"))), s().createElement(R, (0, n.Z)({
                        text: "Share on LinkedIn",
                        Icon: _.Z
                    }, this.sharedProps("linkedin"))))
                }
            }(0, c.Z)(Z, "defaultProps", {
                meta: {},
                align: "right",
                fab: !1
            });
            const I = (0, y.ZP)((0, v.Z)(Z))
        },
        "8+7d": (e, a, t) => {
            t.d(a, {
                O1: () => s,
                OA: () => i,
                kD: () => m
            });
            var c = t("/0+J"),
                n = t("qdqJ"),
                o = t("9Xvv"),
                r = t("hz+Z");

            function s(e, a) {
                var {
                    name: t,
                    page: c,
                    slug: n,
                    meta: o,
                    badge: r = {},
                    profile: s
                } = a, i = "trigger" === t ? "social-dialog" : "social-buttons", {
                    username: m
                } = s, {
                    badge_type: l,
                    stars: u,
                    level: p
                } = r;
                switch (c) {
                    case "30daysofcode":
                        return "https://www.hackerrank.com/domains/tutorials/30-days-of-code?utm_campaign=".concat(i, "&utm_medium=").concat(e, "&utm_source=tutorial");
                    case "crackingthecodinginterview":
                        return "https://www.hackerrank.com/domains/tutorials/cracking-the-coding-interview?utm_campaign=".concat(i, "&utm_medium=").concat(e, "&utm_source=tutorial");
                    case "tutorial":
                        return "https://www.hackerrank.com/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=tutorial");
                    case "contest":
                        return "https://www.hackerrank.com/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=contest");
                    case "domain":
                        return "https://www.hackerrank.com/domains/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=domain");
                    case "domains":
                        return "https://www.hackerrank.com?utm_campaign=".concat(i, "&utm_medium=").concat(e, "&utm_source=domainlist");
                    case "challenges":
                    case "challenge_attempt_share":
                        return "https://www.hackerrank.com/challenges/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=challenge");
                    case "chapter_completed":
                        return "https://www.hackerrank.com/domains/".concat(o.track_slug, "/").concat(o.chapter_slug, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=").concat(c);
                    case "code_snippet":
                        return "https://www.hackerrank.com/snippets/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=").concat(c);
                    case "badge_share":
                    case "badge_share_profile":
                        return "https://www.hackerrank.com/".concat(m, "?badge=").concat(l, "&stars=").concat(u, "&level=").concat(p, "&utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=").concat(c, "&social=linkedin");
                    case "certificate_social_share":
                        return "https://www.hackerrank.com/certificates/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=").concat(c, "&social=linkedin");
                    case "interview_preparation":
                        return "https://www.hackerrank.com/interview/".concat(n, "?utm_campaign=").concat(i, "&utm_medium=").concat(e, "&utm_source=").concat(c, "&social=linkedin");
                    default:
                        return "https://www.hackerrank.com?utm_campaign=".concat(i, "&utm_medium=").concat(e, "&utm_source=domains")
                }
            }
            var i = function() {
                    var e = (0, c.Z)((function*(e) {
                        try {
                            var a = yield(0, n.Z)(e);
                            return o.Z.url(a) ? a : e
                        } catch (a) {
                            return e
                        }
                    }));
                    return function(a) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = (e, a, t) => {
                    var c = "",
                        {
                            quote: n,
                            hashtag: o,
                            name: s
                        } = t;
                    switch (a) {
                        case "twitter":
                            e = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(function(e, a) {
                                var {
                                    name: t,
                                    meta: c,
                                    page: n,
                                    badge: o = {}
                                } = a, s = "";
                                switch (a.slug && (s = a.slug.charAt(0).toUpperCase() + a.slug.slice(1)), n) {
                                    case "30daysofcode":
                                        return "Just joined the #30DaysofCode challenge to improve my #coding skills! Join me and thousands of coders ".concat(e, " @HackerRank");
                                    case "crackingthecodinginterview":
                                        return "Started Cracking the Coding Interview on @HackerRank! Join me and learn the secrets from @gayle ".concat(e, " @HackerRank");
                                    case "tutorial":
                                        return "Just joined ".concat(t, " on @HackerRank to improve my #programming skills! Join me and thousands of coders ").concat(e);
                                    case "contest":
                                        return "Join me and sign up to compete in ".concat(t, " on @HackerRank ").concat(e, " #programming");
                                    case "domain":
                                        return "Want to boost your coding skills? @HackerRank is the best way to practice ".concat(t, " ").concat(e, " #programming");
                                    case "domains":
                                        return "Keep your coding skills sharp by solving programming challenges ".concat(e, "  on @HackerRank #programming");
                                    case "challenges":
                                        return "Success! Just solved ".concat(t, " on @HackerRank. Can you complete the challenge? ").concat(e, " #programming");
                                    case "challenge_attempt_share":
                                        return "Can you help me solve this challenge? ".concat(e, " #programming");
                                    case "chapter_completed":
                                        return "Just solved all ".concat(c.chapter, " challenges in ").concat(c.track, " on @HackerRank. Try it out! ").concat(e, " #programming");
                                    case "code_snippet":
                                        return "Check out my code snippet on @HackerRank. ".concat(e);
                                    case "badge_share":
                                    case "badge_share_profile":
                                        return "".concat((0, r.nc)(o), " ").concat(e);
                                    case "certificate_social_share":
                                        return "I just earned ".concat(t, " skill certificate via @HackerRank. Get your skills certified and show the world what you can do! #skilloverpedigree ").concat(e);
                                    case "interview_preparation":
                                        return "Are you preparing for interview? Try ".concat(s, "'s interview preparation challenges ").concat(e);
                                    default:
                                        return "Keep your coding skills sharp by solving programming challenges ".concat(e, " on @HackerRank #programming")
                                }
                            }(e, t)));
                            break;
                        case "facebook":
                            n && (c += "&quote=".concat(encodeURIComponent(n))), o && (c += "&hashtag=".concat(encodeURIComponent(o))), e = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(e)).concat(c);
                            break;
                        case "linkedin":
                            n && (c += "&title=".concat(s ? encodeURIComponent("".concat(n, " - (").concat(s, ")")) : encodeURIComponent(n))), e = "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(e)).concat(c);
                            break;
                        default:
                            throw new Error("Unsupported social type")
                    }
                    return e
                }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_share_share_link_js-017e1272.js.map