(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9597], {
        55072: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/problems/[slug]/[[...tab]]", function() {
                return e(22215)
            }])
        },
        42031: function(n, t, e) {
            "use strict";
            e.d(t, {
                L: function() {
                    return c
                }
            });
            var s = e(85893),
                r = e(67294),
                u = (0, r.memo)((function(n) {
                    var t = n.styleDomClassName,
                        e = n.jsScript,
                        u = n.unmountDelay,
                        o = void 0 === u ? 500 : u,
                        i = (0, r.useState)(!1),
                        c = i[0],
                        a = i[1];
                    return (0, r.useEffect)((function() {
                        c || (a(!0), setTimeout((function() {
                            var n;
                            return null === (n = document.querySelector(".".concat(t))) || void 0 === n ? void 0 : n.remove()
                        }), 100))
                    }), [c, t, o]), c ? null : (0, s.jsx)("script", {
                        lang: "javascript",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                })),
                o = e(31157),
                i = e.n(o),
                c = (0, r.memo)((function() {
                    var n = "qd-description-style",
                        t = i()._getCss().replace(/`/g, "'"),
                        e = "\n    (() => {\n      const style = document.createElement('style')\n      style.className = '".concat(n, "'\n      style.innerHTML = `\n        ").concat(t, "\n      `\n      document.body.appendChild(style)\n    })()\n  ");
                    return (0, s.jsx)(u, {
                        styleDomClassName: n,
                        jsScript: e,
                        unmountDelay: 1e3
                    })
                }))
        },
        22215: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                __N_SSP: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var s = e(85893),
                r = (e(67294), e(21628)),
                u = e(42031),
                o = e(80315),
                i = !0;

            function c(n) {
                var t = n.isRobotVisit,
                    e = n.isMobile;
                return (0, o.VM)(!0), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(u.L, {}), (0, s.jsx)(r.J, {
                        isRobotVisit: t,
                        isMobile: e
                    })]
                })
            }
        }
    },
    function(n) {
        var t = function(t) {
            return n(n.s = t)
        };
        n.O(0, [2440, 5321, 7409, 6074, 2247, 1668, 9973, 7948, 1272, 1332, 5933, 9510, 630, 6898, 296, 2791, 2054, 2993, 5685, 1265, 4336, 5762, 1972, 2214, 129, 4948, 3573, 6037, 2997, 6908, 8931, 9148, 5435, 1874, 4428, 5426, 6246, 5872, 6216, 6834, 2622, 6360, 7438, 3358, 3052, 1516, 7834, 5490, 6770, 2320, 401, 9326, 5277, 4869, 8273, 9982, 923, 468, 8637, 4151, 582, 1006, 6390, 4105, 2138, 9774, 2888, 179], (function() {
            return t(16862), t(55072)
        }));
        var e = n.O();
        _N_E = e
    }
]);