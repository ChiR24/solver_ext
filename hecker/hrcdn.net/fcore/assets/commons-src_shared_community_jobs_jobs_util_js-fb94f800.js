"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_jobs_jobs_util_js"], {
        ReF2: (n, l, r) => {
            function e(n) {
                return n.map((n => {
                    return (l = n).charAt(0).toLowerCase() + l.slice(1);
                    var l
                }))
            }

            function i(n) {
                var l, {
                    skills: r
                } = n;
                return null === r || 0 === (null == r ? void 0 : r.length) || void 0 === r ? null : (null !== (l = [...r]) && void 0 !== l ? l : null).sort(((n, l) => n.localeCompare(l))).map((n => {
                    return (l = n).charAt(0).toUpperCase() + l.slice(1);
                    var l
                })).join(" • ")
            }
            r.d(l, {
                Iv: () => s,
                Qd: () => u,
                Rt: () => t,
                Rx: () => a,
                gK: () => e,
                im: () => o,
                mC: () => c,
                rX: () => i,
                si: () => f
            }), r("Vd3H"), r("Z2Ku"), r("KKXr"), r("yt8O"), r("rGqo"), r("pIFo"), r("UfWW"), r("7tbW"), r("hzCD"), r("5F93");
            var t = n => "hrc-demo" === n,
                u = {
                    US: "US",
                    UK: "GB"
                };

            function c(n) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        country: r
                    } = n,
                    {
                        country: e = "United States"
                    } = l;
                return r === e
            }

            function o(n) {
                return n.filter((n => {
                    var {
                        level: l,
                        badge_category: r
                    } = n;
                    return l > 1 && "HackerBadge::Chapter" !== r
                }))
            }

            function s(n) {
                var l, r, e, i, t;
                return null == n || null === (l = n.replace(/&gt;/g, ">")) || void 0 === l || null === (r = l.replace(/&lt;/g, "<")) || void 0 === r || null === (e = r.replace(/&quot;/g, '"')) || void 0 === e || null === (i = e.replace(/&apos;/g, "'")) || void 0 === i || null === (t = i.replace(/&amp;/g, "&")) || void 0 === t ? void 0 : t.replace(/(?:\r\n|\r|\n|\\n|\r\\n)/g, "<p/>")
            }

            function a(n, l) {
                var r = Object.keys(n).includes("companies") ? JSON.stringify(n.companies) : null,
                    e = Object.keys(n).includes("countries") ? JSON.stringify(n.countries) : null,
                    i = Object.keys(n).includes("roles") ? JSON.stringify(n.roles) : null,
                    t = Object.keys(n).includes("experiences") ? JSON.stringify(n.experiences) : null;
                return r || e || i || t ? "roles" === l ? f(r, e, t) : "countries" === l ? f(r, i, t) : "companies" === l ? f(e, i, t) : "experiences" === l ? f(r, i, e) : void 0 : "all"
            }

            function f(n, l, r) {
                if (null === n) {
                    if (null !== l && null !== r) return JSON.stringify("".concat(l, "-").concat(r));
                    if (null == r) return JSON.stringify(l);
                    if (null == l) return JSON.stringify(r)
                }
                if (null === l) {
                    if (null !== n && null !== r) return JSON.stringify("".concat(n, "-").concat(r));
                    if (null === r) return JSON.stringify(n);
                    if (null === n) return JSON.stringify(r)
                }
                return null === r && null !== n && null !== l ? JSON.stringify("".concat(n, "-").concat(l)) : null === n && null === l && null === r ? null : JSON.stringify("".concat(n, "-").concat(l, "-").concat(r))
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_jobs_jobs_util_js-fb94f800.js.map