"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_constants_js-src_shared_community_util_hrc_dark_mode_use_user_th-b09c80"], {
        ij00: (e, t, n) => {
            n.d(t, {
                bY: () => c,
                fJ: () => i,
                fu: () => a,
                oH: () => o,
                vb: () => r
            });
            var r = "https://download.linkedin.com/desktop/add2profile/buttons/en_US.png",
                a = "https://hrcdn.net/s3_pub/hr-assets/hr-apply-job-icon-light-2.png",
                i = "https://hrcdn.net/s3_pub/hr-assets/hr-apply-job-icon-dark.png",
                c = "https://www.hackerrank.com/auth/resume",
                o = ["Software Engineer", "Front-End Developer (React)"]
        },
        Xh0i: (e, t, n) => {
            n.d(t, {
                g: () => a,
                x: () => r
            });
            var r = "user_theme",
                a = {
                    dark: "dark",
                    light: "light"
                }
        },
        kMMV: (e, t, n) => {
            n.d(t, {
                $: () => c
            });
            var r = n("i7RB"),
                a = n.n(r),
                i = n("Xh0i");

            function c() {
                return a().get(i.x)
            }
        },
        "tS+n": (e, t, n) => {
            n.d(t, {
                d: () => o
            });
            var r = n("0ier"),
                a = n("Xh0i"),
                i = n("kMMV"),
                c = e => {
                    var t, n;
                    return (null === (t = e.community) || void 0 === t || null === (n = t.profile) || void 0 === n ? void 0 : n.user_prefers_theme) || a.g.light
                };

            function o() {
                var e = (0, r.v9)(c);
                return (0, i.$)() || (null != e ? e : a.g.light)
            }
        },
        "7sDY": (e, t, n) => {
            n.d(t, {
                EA: () => v,
                F1: () => f,
                Un: () => g,
                _l: () => m,
                as: () => u,
                em: () => d,
                pE: () => h,
                x5: () => p
            }), n("ioFf");
            var r = n("L5+t"),
                a = n("wd/R"),
                i = n.n(a),
                c = n("5F93"),
                o = n("M53O");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                var n, {
                        username: r
                    } = e.community.profile,
                    a = e.community.skillsVerification.tests[t],
                    i = null === (n = e.community.skillsVerification[r]) || void 0 === n ? void 0 : n.results[t];
                return l(l({}, a), i)
            }

            function d(e, t) {
                var {
                    tests: n
                } = e.community.skillsVerification, r = Object.values(n).find((e => e.track_slug === t));
                return r ? u(e, r.unique_id) : void 0
            }

            function f(e) {
                return !!e && e !== o.lZ.INITIATED && e !== o.lZ.STARTED
            }

            function p(e, t) {
                var n, {
                    skillsVerification: r
                } = e.community;
                return null === (n = r[t]) || void 0 === n ? void 0 : n.didInvalidate
            }

            function h() {
                return {
                    breadcrumb: (e, t) => {
                        var {
                            skillSlug: n,
                            testId: r
                        } = e, a = [];
                        if (!n) return [{
                            text: "Certification Tests",
                            path: "/skills-verification"
                        }];
                        var i = d(t, n);
                        return a.push({
                            path: "/skills-verification/".concat(n),
                            text: "Certification Test"
                        }), r && a.push({
                            path: "/skills-verification/".concat(n, "}/").concat(r),
                            text: "".concat(v(i))
                        }), a
                    },
                    pageLabel: (e, t) => {
                        var {
                            skillSlug: n
                        } = e;
                        if (!n) return "Get Certified";
                        var r = d(t, n),
                            a = "role" === (null == r ? void 0 : r.type) ? "Role" : "Skills";
                        return "".concat(v(r), " ").concat(a, " Certification Test")
                    }
                }
            }

            function v(e) {
                var {
                    label: t,
                    level: n
                } = e, r = n ? " (".concat(n, ")") : "";
                return "".concat(t).concat(r)
            }

            function g(e) {
                if (!e) return "unavailable";
                var t = new Date(e);
                return new Date > t ? "available" : "locked"
            }

            function m(e) {
                var t = i()(),
                    n = i()(e).diff(t, "days"),
                    r = (0, c._6)("day", n + 1);
                return "".concat(n + 1, " ").concat(r)
            }
        },
        M53O: (e, t, n) => {
            n.d(t, {
                lZ: () => c
            }), n("Vd3H"), n("ioFf"), n("yt8O"), n("rGqo"), ["C++", "Java", "Python", "Ruby", "Javascript", "HTML", "CSS", "AngularJS", "ReactJS", "NodeJS", "PHP", "C#", "C", "Go", "Objective-C", "Swift", "Oracle", "MS SQL", "Scala", "Django", "Flask", "HTML5", "Ruby on Rails", "iOS", "Android", "Machine Learning", "Hadoop", "Big Data", "Cassandra", "MongoDB", "DB2", "MySQL", "SQL", "Coffeescript", "Haskell", "Perl", "BASH", "Clojure", "Scala", "TypeScript", "Lua", "Common Lisp (SBCL)", "Erlang", "D", "OCaml", "Pascal", "Groovy", "F#", "VB.NET", "Tcl", "Whitespace", "Octave", "R", "XQuery", "Racket", "Cobol", "XML", "Rust", "Fortran", "ADA", "Elixir", "Julia"].sort();
            var r = (new Date).getFullYear() - 1,
                a = ("lt".concat(r), "".concat(r - 1, " and before"), Array.from({
                    length: 4
                }, ((e, t) => ({
                    name: String(r + t),
                    value: String(r + t)
                }))), "gt".concat(r + 3), "".concat(r + 4, " and after"), ["BS", "MS", "B.Tech", "ME", "M.Tech", "PhD"].map((e => ({
                    name: e
                }))), ["Biomedical Engineering", "Bioinformatics", "Biotechnology", "Business Administration", "Chemical Engineering", "Computer Science", "Computer Information Systems", "Computer Networking", "Computer Science & Engineering", "Data Science", "Electrical Engineering", "Electrical Engineering & Computer Science", "Information Technology", "Mathematics", "Security", "Software Engineering"].map((e => ({
                    name: e
                }))), {
                    new: {
                        state: "applicant_accepted",
                        constant: "NEW"
                    },
                    contacted: {
                        state: "contacted",
                        constant: "CONTACTED"
                    },
                    interviewing: {
                        state: "interviewing",
                        constant: "INTERVIEWING"
                    },
                    offered: {
                        state: "offered",
                        constant: "OFFERED"
                    },
                    rejected: {
                        state: "rejected",
                        constant: "REJECTED"
                    },
                    archived: {
                        state: "archived",
                        constant: "ARCHIVED"
                    },
                    "offer-accepted": {
                        state: "offer_accepted",
                        constant: "ACCEPTED"
                    }
                });
            i = {}, Object.entries(a).forEach((e => {
                i[e[1].state] = e[0]
            })), i.provisionally_failed = "rejected", Array.from({
                length: 11
            }, ((e, t) => ({
                label: t,
                value: t
            })));
            var i, c = {
                INITIATED: "initiated",
                STARTED: "started",
                PROCESSING: "test_finished",
                FAILED: "test_failed",
                PASSED: "test_passed",
                RETAKE_AVAILABLE: "retake_available"
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_constants_js-src_shared_community_util_hrc_dark_mode_use_user_th-b09c80-6fede1ce.js.map