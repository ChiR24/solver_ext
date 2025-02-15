"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9326], {
        55938: function(e, n, t) {
            t.d(n, {
                L: function() {
                    return s
                }
            });
            var r = t(26042),
                o = t(69396),
                i = t(85893),
                s = t(67294).forwardRef((function(e, n) {
                    return (0, i.jsx)("svg", (0, o.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, i.jsx)("path", {
                            strokeLinecap: "round",
                            strokeWidth: 2,
                            d: "M6 14.4H3.6a1.2 1.2 0 01-1.2-1.2V4.4a2 2 0 012-2h8.8a1.2 1.2 0 011.2 1.2V6M12 21.6h7.2a2.4 2.4 0 002.4-2.4V12a2.4 2.4 0 00-2.4-2.4H12A2.4 2.4 0 009.6 12v7.2a2.4 2.4 0 002.4 2.4z"
                        })
                    }))
                }))
        },
        51590: function(e, n, t) {
            t.d(n, {
                Q: function() {
                    return z
                }
            });
            var r = t(29815),
                o = t(85893),
                i = t(11321),
                s = t(67294),
                a = t(49037),
                l = t(17693),
                c = t(12922),
                d = t(40832),
                u = t(73534),
                f = t(19906),
                m = t(79898),
                p = t(29321),
                h = t(39606),
                v = t(80570),
                w = t(11516),
                x = t(68708),
                g = t(70341),
                b = t(20337),
                y = t(13295),
                k = t(35847),
                N = t(42432),
                j = t(26042),
                I = t(69396),
                E = t(99534),
                C = t(62758),
                T = function(e) {
                    var n = e.tooltip,
                        t = e.children,
                        r = e.className,
                        i = (0, E.Z)(e, ["tooltip", "children", "className"]);
                    return (0, o.jsx)(C.u, {
                        label: n,
                        children: (0, o.jsx)("button", (0, I.Z)((0, j.Z)({
                            className: (0, c.yI)(w.nx.labelTextSecondary, w.rG.bgFillSecondary, "flex h-6 w-6 shrink-0 items-center justify-center rounded", {
                                "opacity-40": i.disabled
                            }, r)
                        }, i), {
                            children: t
                        }))
                    })
                },
                _ = function(e) {
                    var n = e.className;
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: n,
                        children: (0, o.jsx)("path", {
                            d: "M2.99999 8.9999H21M5.99999 21.5999H18C19.9882 21.5999 21.6 19.9881 21.6 17.9999V5.9999C21.6 4.01168 19.9882 2.3999 18 2.3999H5.99999C4.01177 2.3999 2.39999 4.01168 2.39999 5.9999V17.9999C2.39999 19.9881 4.01177 21.5999 5.99999 21.5999Z",
                            stroke: "currentColor",
                            strokeWidth: "2"
                        })
                    })
                },
                S = t(14924),
                P = function(e) {
                    var n = e.children,
                        t = e.isActive,
                        r = e.onClick;
                    return (0, o.jsx)("button", {
                        className: (0, c.yI)(w.rG.labelTextPrimary, "px-2", (0, S.Z)({}, w.nx.labelTextPrimary, t)),
                        onClick: r,
                        children: n
                    })
                },
                L = t(10253),
                O = t(24974),
                Z = t(13042),
                R = s.forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, I.Z)((0, j.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M7.2 16.8L2.4 12l4.8-4.8m9.6 0l4.8 4.8-4.8 4.8"
                        })
                    }))
                })),
                M = t(55938),
                D = t(41435),
                F = function(e) {
                    var n = e.previewUrl,
                        t = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        r = (0, s.useMemo)((function() {
                            return n ? '<iframe src="'.concat(n, '" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>') : ""
                        }), [n]),
                        a = (0, L.Z)((0, O.c)(r, {
                            successDuration: 2e3
                        }), 2),
                        l = a[0],
                        d = a[1],
                        u = (0, s.useState)(!1),
                        f = u[0],
                        m = u[1];
                    return (0, o.jsx)(D.J2, {
                        trigger: "hover",
                        open: f,
                        onOpenChange: m,
                        side: "bottom",
                        align: "end",
                        className: (0, c.yI)("w-[280px] rounded-lg p-0", w.nx.bgLayer02, w.nx.borderBorderTertiary),
                        content: (0, o.jsxs)("div", {
                            className: "flex h-full w-full flex-col gap-0.5 p-1.5",
                            children: [(0, o.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, o.jsxs)("div", {
                                    className: (0, c.yI)(w.nx.labelTextPrimary, "flex items-center"),
                                    children: [(0, o.jsx)(R, {
                                        className: "mx-1.5 inline-block h-4 w-4 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                    }), t("embedCode")]
                                }), (0, o.jsx)(Z.z, {
                                    variant: "primary",
                                    size: "lg",
                                    label: (0, o.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, o.jsx)(M.L, {
                                            className: "inline-block h-3 w-3 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                        }), (0, o.jsx)("div", {
                                            className: "text-xs",
                                            children: t(l ? "copiedEmbedCode" : "copyEmbedCode")
                                        })]
                                    }),
                                    className: "text-md rounded-[5px] px-2.5 py-1",
                                    onClick: function() {
                                        return d()
                                    }
                                })]
                            }), (0, o.jsx)("div", {
                                className: (0, c.yI)(w.nx.bgFillTertiary, w.nx.labelTextTertiary, "w-full overflow-hidden whitespace-pre-wrap rounded-lg px-3 py-1"),
                                children: (0, o.jsx)("pre", {
                                    className: "m-0 whitespace-break-spaces break-all p-0 leading-[20px]",
                                    children: r
                                })
                            })]
                        }),
                        children: (0, o.jsx)("div", {
                            children: (0, o.jsx)(T, {
                                children: (0, o.jsx)(R, {
                                    className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                })
                            })
                        })
                    })
                },
                B = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return e ? [n()] : t
                },
                W = function(e) {
                    var n = e.className,
                        t = e.url,
                        r = (0, d.G)() ? y.Z : b.Z;
                    return (0, o.jsx)("a", {
                        href: null !== t && void 0 !== t ? t : "/",
                        className: (0, c.yI)("mb-0.5 flex pl-1", n),
                        children: (0, o.jsx)(f.y, {
                            className: "h-full",
                            src: r,
                            alt: "LeetCode Logo"
                        })
                    })
                },
                z = function(e) {
                    var n, t, d = e.submissionId,
                        f = e.canOpenInPanel,
                        b = e.canOpenInNewTab,
                        y = e.showBackToSubmission,
                        j = e.showCopyEmbedCode,
                        I = e.showNavbar,
                        E = e.dynamicallyResizeIframe,
                        C = e.className,
                        S = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        L = (0, p.P)(d, {
                            keepPreviousData: !0
                        }).data,
                        O = null !== (n = null === L || void 0 === L ? void 0 : L.questionSlug) && void 0 !== n ? n : "",
                        Z = null !== (t = (0, v.x)(null !== O && void 0 !== O ? O : "").data) && void 0 !== t ? t : {},
                        R = Z.hasFrontendPreview,
                        M = Z.frontendPreviews,
                        D = null === L || void 0 === L ? void 0 : L.code,
                        z = null === L || void 0 === L ? void 0 : L.lang,
                        A = null === L || void 0 === L ? void 0 : L.langName,
                        q = (0, s.useMemo)((function() {
                            var e;
                            if (z && M) return null === (e = (0, u.a)(M)) || void 0 === e ? void 0 : e[z]
                        }), [M, z]),
                        G = (0, s.useState)(),
                        H = G[0],
                        V = G[1],
                        $ = (0, s.useMemo)((function() {
                            return O ? (0, x.hr)() + g.Hb.questionSubmissionPreview(O, d) : ""
                        }), [O, d]),
                        U = (0, a.h)(),
                        J = (0, s.useState)(0),
                        Q = J[0],
                        Y = J[1],
                        X = (0, s.useState)(null),
                        K = X[0],
                        ee = X[1];
                    (0, s.useEffect)((function() {
                        if (E && K) {
                            var e = function(e) {
                                var n, t = K.contentWindow;
                                if (e.source === t && "preview-height" === (null === (n = e.data) || void 0 === n ? void 0 : n.type)) {
                                    var r = Math.min(Math.max(e.data.height, 100), 500);
                                    K.style.height = "".concat(r + 10, "px")
                                }
                            };
                            return window.addEventListener("message", e), (0, N.b)(K.contentWindow, "stream-preview-height"),
                                function() {
                                    window.removeEventListener("message", e), (0, N.b)(K.contentWindow, "stop-streaming-preview-height")
                                }
                        }
                    }), [E, K]);
                    var ne = !!((null === L || void 0 === L ? void 0 : L.statusCode) === h.F6.AC && R && q && z && D),
                        te = !!D,
                        re = (0, r.Z)(B(te, (function() {
                            return {
                                key: "submissionCode",
                                label: null !== A && void 0 !== A ? A : "Code",
                                content: (0, o.jsx)("div", {
                                    className: "px-4 py-2",
                                    children: (0, o.jsx)(m.B, {
                                        code: null !== D && void 0 !== D ? D : "",
                                        lang: "javascript",
                                        showCopyIcon: !0
                                    })
                                })
                            }
                        }))).concat((0, r.Z)(B(ne, (function() {
                            return {
                                key: "preview",
                                label: "Preview",
                                content: (0, o.jsxs)("div", {
                                    className: "flex h-full w-full flex-col",
                                    children: [I && (0, o.jsx)(k.$, {
                                        url: $,
                                        onRefresh: function() {
                                            return Y((function(e) {
                                                return e + 1
                                            }))
                                        },
                                        canOpenInNewTab: b,
                                        className: (0, c.yI)(w.nx.borderBorderQuaternary, "border-t")
                                    }), (0, o.jsx)(l.b, {
                                        framework: z,
                                        solutionCode: D,
                                        previewCode: q,
                                        className: "!mb-0 h-full rounded-b-lg",
                                        setIframe: ee
                                    }, Q)]
                                })
                            }
                        }))));
                    return 0 === re.length ? null : (void 0 === H && V(re[0]), (0, o.jsxs)("div", {
                        className: (0, c.yI)(w.nx.bgFillQuaternary, w.nx.borderBorderQuaternary, "flex w-full flex-col border", C),
                        children: [ne && (0, o.jsxs)("div", {
                            className: (0, c.yI)(w.nx.labelTextSecondary, "flex h-8 min-h-[32px] items-center justify-between pl-2 pr-1 text-xs"),
                            children: [(0, o.jsxs)("div", {
                                className: "flex items-center",
                                children: [y && (0, o.jsx)(W, {
                                    className: "m-0 h-4 w-4 p-0",
                                    url: g.Hb.submissionOverview(O, String(d))
                                }), re.map((function(e, n) {
                                    return (0, o.jsxs)(s.Fragment, {
                                        children: [(0, o.jsx)(P, {
                                            isActive: e.key === (null === H || void 0 === H ? void 0 : H.key),
                                            onClick: function() {
                                                return V(e)
                                            },
                                            children: e.label
                                        }), n !== re.length - 1 && (0, o.jsx)("div", {
                                            className: (0, c.yI)(w.nx.bgBorderTertiary, "h-3 w-[1px]")
                                        })]
                                    }, e.key)
                                }))]
                            }), (0, o.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [j && (0, o.jsx)(F, {
                                    previewUrl: $
                                }), f && (0, o.jsx)(T, {
                                    onClick: function() {
                                        null === U || void 0 === U || U.openSubmissionPreviewTab({
                                            submissionId: d,
                                            title: (null === L || void 0 === L ? void 0 : L.statusDisplay) ? "".concat(null === L || void 0 === L ? void 0 : L.statusDisplay, " (Preview)") : void 0
                                        })
                                    },
                                    tooltip: S("openInPanelTooltip"),
                                    children: (0, o.jsx)(_, {
                                        className: "!h-[14px] !w-[14px]"
                                    })
                                })]
                            })]
                        }), re.map((function(e) {
                            return (0, o.jsx)("div", {
                                className: (0, c.yI)("h-full w-full overflow-auto", {
                                    hidden: e.key !== (null === H || void 0 === H ? void 0 : H.key)
                                }),
                                children: e.content
                            }, e.key)
                        }))]
                    }))
                }
        },
        37438: function(e, n, t) {
            t.d(n, {
                x: function() {
                    return v
                }
            });
            var r = t(85893),
                o = t(67294),
                i = t(11321),
                s = t(17693),
                a = t(12922),
                l = t(73534),
                c = t(29321),
                d = t(39606),
                u = t(80570),
                f = t(11516),
                m = t(45480),
                p = t(70341),
                h = t(40791),
                v = function(e) {
                    var n, t, v = e.submissionId,
                        w = e.className,
                        x = e.inNewTab,
                        g = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        b = (0, c.P)(v, {
                            keepPreviousData: !0
                        }).data,
                        y = null !== (n = null === b || void 0 === b ? void 0 : b.questionSlug) && void 0 !== n ? n : "",
                        k = null !== (t = (0, u.x)(null !== y && void 0 !== y ? y : "").data) && void 0 !== t ? t : {},
                        N = k.hasFrontendPreview,
                        j = k.frontendPreviews,
                        I = null === b || void 0 === b ? void 0 : b.code,
                        E = null === b || void 0 === b ? void 0 : b.lang,
                        C = (0, o.useMemo)((function() {
                            var e;
                            if (E && j) return null === (e = (0, l.a)(j)) || void 0 === e ? void 0 : e[E]
                        }), [j, E]),
                        T = (null === b || void 0 === b ? void 0 : b.statusCode) === d.F6.AC || (null === b || void 0 === b ? void 0 : b.statusCode) === d.F6.WA;
                    return N && I && C && E && T ? (0, r.jsx)("div", {
                        className: (0, a.yI)(f.nx.borderBorderQuaternary, "flex w-full flex-col border", w),
                        children: (0, r.jsxs)("div", {
                            className: "flex h-full w-full flex-col",
                            children: [(0, r.jsx)(s.b, {
                                framework: E,
                                solutionCode: I,
                                previewCode: C,
                                className: (0, a.yI)("!mb-0 h-full rounded-lg", {
                                    "rounded-none": x
                                })
                            }), x && (0, r.jsxs)(h.r, {
                                href: p.Hb.submissionOverview(y, String(v)),
                                className: (0, a.yI)(f.nx.bgFixedBlack, f.nx.labelTextSecondary, f.rG.labelTextPrimary, "flex gap-1.5 rounded-lg px-2.5 py-1.5", "fixed bottom-1 left-1 cursor-pointer"),
                                isExternal: !0,
                                children: [(0, r.jsx)("span", {
                                    className: "text-[8px] leading-4",
                                    children: g("openIn")
                                }), (0, r.jsx)(m.qE, {
                                    className: "h-[15px] w-[65px]"
                                })]
                            })]
                        })
                    }) : null
                }
        },
        17693: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return f
                }
            });
            var r = t(10253),
                o = t(85893),
                i = t(67294),
                s = t(12922),
                a = t(11516),
                l = t(75117),
                c = t(68708),
                d = t(42432),
                u = '<!DOCTYPE html> <html lang="en"> <head> <title></title> <style>html{width:100%;height:100%;background-color:#fff}.error-message{padding:20px 0}.error-message code{font-size:1.5rem;font-weight:600}.error-message pre{white-space:pre-wrap;color:#f8615c;font-size:1rem}</style> <script src="https://unpkg.com/@babel/standalone@7.22.10/babel.min.js" integrity="sha384-j3hJyLAMgziKcMrSEvioQYE+y3XwwEqRtgJXJHaZq42wD9qbFIjRI/wm/fRH0mU3" crossorigin="anonymous"><\/script> <script src="https://unpkg.com/react@18.2.0/umd/react.development.js" integrity="sha384-0HL/VWVbwweJfp0saUL50fXRuSABCdVeinTBoJCDXprLkJ49VI0QMWNGMRt8ebnT" crossorigin="anonymous"><\/script> <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js" integrity="sha384-79Od0yhavbvtuP2nWl+Y6mwgs8AlknSIikYSw0+uOc65GTyH8SW7e2hCyCB303Y2" crossorigin="anonymous"><\/script> <script src="#CONSOLE_FEED_URL"><\/script> <script>Babel.registerPlugin("prevent-infinite-loops",preventInfiniteLoops);const ITERATIONS_LIMIT=10001;function preventInfiniteLoops({types:e,template:t}){const n=t("\\n          if (IDX++ > ITERATIONS_LIMIT) {\\n            if (!window.infiniteLoopError) {\\n              window.infiniteLoopError = new RangeError(\\n                \'Potential infinite loop detected, exceeded \' + ITERATIONS_LIMIT + \' iterations.\'\\n              );\\n            }\\n            throw window.infiniteLoopError;\\n          }\\n        ");return{visitor:{"WhileStatement|DoWhileStatement|ForStatement":(t,i)=>{const o=t.scope.parent.generateUidIdentifier("loopIt"),r=e.numericLiteral(0);t.scope.parent.push({id:o,init:r});const I=n({IDX:o,ITERATIONS_LIMIT:e.numericLiteral(ITERATIONS_LIMIT)});if(t.get("body").isBlockStatement())t.get("body").unshiftContainer("body",I);else{const n=t.get("body").node;t.get("body").replaceWith(e.blockStatement([I,n]))}}}}}<\/script> <script>Babel.registerPlugin("transform-import-export-to-global",transformImportExportToGlobalPlugin);const IMPORT_IDENFIFIER_MAP={react:"React","react-dom":"ReactDOM"};function transformImport(r,t,e,o,a){const n=e.filter((r=>"ImportDefaultSpecifier"!==r.type)).map((r=>{const t=r.imported.name;return o.objectProperty(o.identifier(t),o.identifier(t),!1,!0)})),i=o.variableDeclaration("const",[o.variableDeclarator(o.objectPattern(n),o.identifier(t))]);a.replaceWith(i)}function transformImportExportToGlobalPlugin({types:r}){return{visitor:{ImportDeclaration(t){const{node:e}=t,o=e.source.value,a=e.specifiers;if(!IMPORT_IDENFIFIER_MAP[o])throw new Error(`Imports from "${o}" are not allowed`);a.length>0&&transformImport(o,IMPORT_IDENFIFIER_MAP[o],a,r,t)},ExportNamedDeclaration(r){const{node:t}=r,e=t.declaration;e?r.replaceWith(e):r.remove()},ExportDefaultDeclaration(r){r.remove()}}}}<\/script> <script>(()=>{const e={};function n(){const e=document.getElementById("root");e&&e.remove();const n=document.createElement("div");return n.id="root",document.body.appendChild(n),n}window.mountReact=function(e){const o=n(),t=ReactDOM.createRoot(o);return t.render(React.createElement(e,{})),()=>{t.unmount()}},e.react={babelOptions:{presets:["react"],plugins:["transform-import-export-to-global","prevent-infinite-loops"]},mountFnName:"mountReact"},window.mountVanillajs=function(e){const o=n(),t=e();return o.appendChild(t),()=>null},e.vanillajs={babelOptions:{plugins:["transform-import-export-to-global","prevent-infinite-loops"]},mountFnName:"mountVanillajs"};const o="#PARENT_ORIGIN";function t(e,n={}){window.parent.postMessage({type:e,...n},o)}window.__registeredEvents=[],window.__protectedEvents=[[window,"message"]];const r=EventTarget.prototype.addEventListener;function i(){window.__unmount&&"function"==typeof window.__unmount&&window.__unmount(),window.__unmount=null,window.__registeredEvents.forEach((([e,n,o])=>{e.removeEventListener(n,o)})),window.__registeredEvents=[]}EventTarget.prototype.addEventListener=function(e,n,o){var t,i;t=this,i=e,window.__protectedEvents.some((([e,n])=>e===t&&n===i))||window.__registeredEvents.push([this,e,n]),r.call(this,e,n,o)},window.unmountCurrentSolution=i,Hook(window.console,(async e=>{t("console",{log:e})})),window.addEventListener("message",(function(n){if(n.origin!==o)return;switch(n.data&&n.data.type){case"eval":!function(e){if("string"!=typeof e)throw new Error("Invalid console command");let n=null,o=!1;try{if(e.startsWith("{"))try{const n=`(${e})`;new Function(n),e=n}catch(e){}n=(0,eval)(e)}catch(e){n=e,o=!0}const r=Parse(o?"error":"log",[n]);t("eval-result",{result:Encode(r)})}(n.data.command);break;case"render-solution":{const{framework:o,solutionCode:t,previewCode:r}=n.data;!function(n,o,t){if(!o)throw new Error("Solution code is missing");if(!t)throw new Error("Preview code is missing");const r=e[n];if(!r)throw new Error(`Framework "${n}" is not supported`);const i=r.babelOptions,s="window.unmountCurrentSolution();",d=`window.__unmount = window.${r.mountFnName}(App);`,a=[s,Babel.transform(o,i).code,Babel.transform(t,i).code,d].join("\\n\\n");(0,eval)(a)}(o,t,r);break}case"stream-preview-height":window.__resizeObserver||(window.__resizeObserver=new ResizeObserver((()=>{t("preview-height",{height:document.documentElement.scrollHeight})})),window.__resizeObserver.observe(document.documentElement));break;case"stop-streaming-preview-height":window.__resizeObserver&&(window.__resizeObserver.disconnect(),window.__resizeObserver=void 0)}})),window.onerror=function(e,o,t,r,s){console.error(e),i();const d=n();return d.innerHTML=\'<div class="error-message">\\n          <div><code>Something went wrong.</code></div>\\n          <div><pre></pre><div>\\n        </div>\',d.querySelector("pre").textContent=e,!0}})()<\/script> </head> <body></body> </html> ',
                f = (0, i.memo)((function(e) {
                    var n = e.framework,
                        t = e.solutionCode,
                        f = e.previewCode,
                        p = e.onSolutionRender,
                        h = e.setIframe,
                        v = e.className,
                        w = (0, i.useState)(null),
                        x = w[0],
                        g = w[1],
                        b = (0, i.useMemo)((function() {
                            return u.replace("#CONSOLE_FEED_URL", l.xf).replace("#PARENT_ORIGIN", (0, c.hr)())
                        }), []);
                    (0, i.useEffect)((function() {
                        return function() {
                            h && h(null)
                        }
                    }), [h]);
                    var y = (0, i.useRef)(!1),
                        k = (0, i.useRef)(!1),
                        N = (0, i.useRef)({
                            framework: void 0,
                            solutionCode: void 0,
                            previewCode: void 0
                        }),
                        j = (0, r.Z)(m(t, 1e3), 2),
                        I = j[0],
                        E = j[1],
                        C = (0, r.Z)(m(f, 1e3), 2),
                        T = C[0],
                        _ = C[1];
                    n !== N.current.framework && (y.current = !1, k.current = !1, N.current.framework = n, N.current.solutionCode = I, N.current.previewCode = T);
                    var S = null === x || void 0 === x ? void 0 : x.contentWindow;
                    return (0, i.useEffect)((function() {
                        var e = y.current && void 0 !== I,
                            t = k.current && void 0 !== T;
                        e && t && n && ((0, d.b)(S, "render-solution", {
                            framework: n,
                            solutionCode: I,
                            previewCode: T
                        }), p && p(n, I, T))
                    }), [T, I, n, S, p]), (0, i.useEffect)((function() {
                        y.current && k.current || (void 0 !== t && t !== N.current.solutionCode && (N.current.solutionCode = t, E(t), y.current = !0), void 0 !== f && f !== N.current.previewCode && (N.current.previewCode = f, _(f), k.current = !0))
                    }), [t, E, f, _]), (0, o.jsx)("iframe", {
                        className: (0, s.yI)(a.nx.bgFixedWhite, "h-full w-full !min-w-[auto] border-0", v),
                        onLoad: function(e) {
                            g(e.currentTarget), h && h(e.currentTarget)
                        },
                        srcDoc: b,
                        sandbox: "allow-scripts allow-forms"
                    })
                }));

            function m(e, n) {
                var t = (0, i.useRef)(!0),
                    r = (0, i.useState)(),
                    o = r[0],
                    s = r[1];
                return (0, i.useEffect)((function() {
                    t.current && (t.current = !1, s(e));
                    var r = setTimeout((function() {
                        return s(e)
                    }), n);
                    return function() {
                        return clearTimeout(r)
                    }
                }), [e, n]), [o, s]
            }
        },
        35847: function(e, n, t) {
            t.d(n, {
                $: function() {
                    return y
                }
            });
            var r = t(14924),
                o = t(26042),
                i = t(69396),
                s = t(99534),
                a = t(85893),
                l = t(67294),
                c = t(11321),
                d = t(62758),
                u = t(11516),
                f = t(12922),
                m = t(50144),
                p = l.forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, o.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M16 20l-8-8 8-8"
                        })
                    }))
                })),
                h = l.forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, o.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M20.822 15a9.604 9.604 0 01-9.122 6.6A9.6 9.6 0 1119.329 6.17m.687 1.029a9.62 9.62 0 00-.687-1.029m0 0L17.1 8.4h4.8V3.6L19.329 6.17zM19.5 8L21 6"
                        })
                    }))
                })),
                v = t(20108),
                w = t(55938),
                x = t(93769),
                g = t(29297),
                b = function(e) {
                    var n = e.children,
                        t = e.className,
                        r = e.tooltip,
                        l = (0, s.Z)(e, ["children", "className", "tooltip"]);
                    return (0, a.jsx)(d.u, {
                        label: r,
                        isDisabled: l.disabled,
                        children: (0, a.jsx)("button", (0, i.Z)((0, o.Z)({
                            className: (0, f.yI)(u.nx.labelTextSecondary, u.rG.bgFillSecondary, "flex h-6 w-6 shrink-0 items-center justify-center rounded", {
                                "opacity-40": l.disabled
                            }, t)
                        }, l), {
                            children: n
                        }))
                    })
                },
                y = function(e) {
                    var n, t = e.url,
                        o = e.onRefresh,
                        i = e.canOpenInNewTab,
                        s = e.className,
                        y = (0, c.$G)("problems", {
                            keyPrefix: "preview"
                        }).t,
                        k = (0, m.E)(),
                        N = (0, x.z2)((function(e) {
                            return e.questionSlug
                        })),
                        j = (0, l.useMemo)((function() {
                            return k ? t : location.href
                        }), [k, t]),
                        I = (0, l.useRef)(null),
                        E = !!I.current && I.current.offsetWidth < I.current.scrollWidth;
                    return (0, a.jsxs)("div", {
                        className: (0, f.yI)("flex h-8 min-h-[32px] w-full items-center p-1", s),
                        children: [(0, a.jsx)(b, {
                            disabled: !0,
                            tooltip: y("goBackTooltip"),
                            children: (0, a.jsx)(p, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, a.jsx)(b, {
                            disabled: !0,
                            tooltip: y("goForwardTooltip"),
                            children: (0, a.jsx)(p, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 -scale-x-100 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, a.jsx)(b, {
                            onClick: o,
                            tooltip: y("refreshTooltip"),
                            children: (0, a.jsx)(h, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 -scale-x-100 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, a.jsx)(d.u, {
                            label: k ? j : y("upgradeToGetUrl"),
                            placement: "top",
                            isDisabled: !!k && !E,
                            children: (0, a.jsxs)("div", {
                                ref: I,
                                className: (0, f.yI)(u.nx.bgFillTertiary, u.rG.bgFillPrimary, (n = {}, (0, r.Z)(n, u.nx.labelTextSecondary, !k), (0, r.Z)(n, "flex items-center gap-1", !k), (0, r.Z)(n, u.nx.labelTextPrimary, k), n), "relative mx-1 w-full rounded px-2 py-0.5 text-sm", "overflow-hidden text-ellipsis whitespace-nowrap"),
                                children: [!k && (0, a.jsx)("div", {
                                    className: (0, f.yI)("absolute left-0 top-0 h-full w-full", "bg-gradient-to-l via-40%", "from-[#E7E7E7] via-[#E7E7E7] to-[#E7E7E7]/20", "dark:from-[#373737] dark:via-[#373737] dark:to-[#373737]/20")
                                }), !k && (0, a.jsx)(v.A, {
                                    className: (0, f.yI)("h-3 w-3 shrink-0")
                                }), j]
                            })
                        }), i && k && (0, a.jsx)(b, {
                            tooltip: y("openInNewTabTooltip"),
                            onClick: function() {
                                window.open(j, "_blank"), g.d.qdQdLivePreviewOpenNewTabClick({
                                    qd_question_slug: N
                                })
                            },
                            children: (0, a.jsx)(w.L, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        })]
                    })
                }
        },
        45480: function(e, n, t) {
            t.d(n, {
                wn: function() {
                    return s
                },
                qE: function() {
                    return a
                }
            });
            var r = t(85893),
                o = t(12922),
                i = t(40832),
                s = "/_next/static/images/logo-us-dark-889c76d523e0a941011c8a61ca2160c1.svg",
                a = function(e) {
                    var n = e.className,
                        t = e.alt,
                        a = (0, i.G)() ? s : "/_next/static/images/logo-us-light-c66921ba5fbfcc35476dbc11610182d7.svg";
                    return (0, r.jsx)("img", {
                        className: (0, o.yI)("h-8", n),
                        src: a,
                        alt: null !== t && void 0 !== t ? t : ""
                    })
                }
        },
        41435: function(e, n, t) {
            t.d(n, {
                J2: function() {
                    return h
                }
            });
            var r = t(26042),
                o = t(69396),
                i = t(99534),
                s = t(10253),
                a = t(85893),
                l = t(67294),
                c = t(86419),
                d = t(12922),
                u = t(9962),
                f = c.fC,
                m = c.xz,
                p = l.forwardRef((function(e, n) {
                    var t = e.className,
                        o = e.align,
                        s = void 0 === o ? "center" : o,
                        l = e.sideOffset,
                        u = void 0 === l ? 8 : l,
                        f = e.collisionPadding,
                        m = void 0 === f ? 8 : f,
                        p = (0, i.Z)(e, ["className", "align", "sideOffset", "collisionPadding"]);
                    return (0, a.jsx)(c.h_, {
                        children: (0, a.jsx)(c.VY, (0, r.Z)({
                            ref: n,
                            align: s,
                            sideOffset: u,
                            collisionPadding: m,
                            className: (0, d.yI)("bg-sd-popover text-sd-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-sd-md border-sd-border z-modal border p-4 shadow-md outline-none", t),
                            onOpenAutoFocus: function(e) {
                                return e.preventDefault()
                            }
                        }, p))
                    })
                }));
            p.displayName = c.VY.displayName;
            var h = function(e) {
                var n, t = e.defaultOpen,
                    c = e.open,
                    h = e.onOpenChange,
                    v = e.modal,
                    w = e.children,
                    x = e.content,
                    g = e.trigger,
                    b = void 0 === g ? "click" : g,
                    y = e.openDelay,
                    k = void 0 === y ? 100 : y,
                    N = e.closeDelay,
                    j = void 0 === N ? 300 : N,
                    I = e.className,
                    E = e.hideWhenDetached,
                    C = (0, i.Z)(e, ["defaultOpen", "open", "onOpenChange", "modal", "children", "content", "trigger", "openDelay", "closeDelay", "className", "hideWhenDetached"]),
                    T = l.useRef(null),
                    _ = (0, u.s)(T.current, {
                        root: null,
                        threshold: 0
                    }),
                    S = null !== (n = null === _ || void 0 === _ ? void 0 : _.isIntersecting) && void 0 !== n && n,
                    P = E && !S,
                    L = (0, s.Z)(l.useState(null), 2),
                    O = L[0],
                    Z = L[1],
                    R = (0, s.Z)(l.useState(null), 2),
                    M = R[0],
                    D = R[1],
                    F = l.useCallback((function() {
                        M && clearTimeout(M);
                        var e = setTimeout((function() {
                            return null === h || void 0 === h ? void 0 : h(!0)
                        }), k);
                        Z(e)
                    }), [M, h, k]),
                    B = l.useCallback((function() {
                        O && clearTimeout(O);
                        var e = setTimeout((function() {
                            return null === h || void 0 === h ? void 0 : h(!1)
                        }), j);
                        D(e)
                    }), [O, h, j]),
                    W = l.useCallback((function(e) {
                        return e.preventDefault()
                    }), []);
                l.useEffect((function() {
                    return function() {
                        O && clearTimeout(O), M && clearTimeout(M)
                    }
                }), [O, M]);
                var z = l.useMemo((function() {
                    return "hover" === b ? {
                        onMouseEnter: F,
                        onMouseLeave: B,
                        onClick: W
                    } : {}
                }), [F, B, W, b]);
                return (0, a.jsxs)(f, {
                    defaultOpen: t,
                    open: c,
                    onOpenChange: h,
                    modal: v,
                    children: [(0, a.jsx)(m, (0, o.Z)((0, r.Z)({
                        asChild: !0,
                        ref: T
                    }, z), {
                        children: w
                    })), (0, a.jsx)(p, (0, o.Z)((0, r.Z)({
                        className: (0, d.yI)(I, {
                            hidden: P
                        }),
                        hideWhenDetached: E
                    }, C, z), {
                        children: x
                    }))]
                })
            }
        },
        79898: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return p
                }
            });
            var r = t(85893),
                o = t(93179),
                i = t(85901),
                s = t(55570),
                a = t(67294),
                l = t(12922),
                c = t(40832),
                d = {
                    "c#": "csharp",
                    "c++": "cpp",
                    python3: "python",
                    pythondata: "python",
                    golang: "go",
                    js: "javascript",
                    ts: "typescript",
                    mysql: "sql",
                    mssql: "sql",
                    oraclesql: "sql",
                    oracle: "sql",
                    postgresql: "sql",
                    cangjie: "cpp"
                },
                u = t(11516),
                f = t(92320),
                m = function(e) {
                    var n = e.code,
                        t = e.className;
                    return (0, r.jsx)("pre", {
                        className: (0, l.yI)(u.nx.labelTextPrimary, t),
                        style: {
                            fontSize: 13,
                            fontFamily: "Menlo, Monaco, Consolas",
                            textShadow: "none"
                        },
                        children: n
                    })
                },
                p = function(e) {
                    var n = e.lang,
                        t = e.code,
                        u = e.showCopyIcon,
                        p = e.showCopyToEditorIcon,
                        h = e.copyButtonClassName,
                        v = e.actionButtonsClassName,
                        w = e.className,
                        x = e.wrapperClassName,
                        g = e.showLanguage,
                        b = (0, c.G)(),
                        y = t.length < 1e4,
                        k = (0, a.useMemo)((function() {
                            return function() {
                                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                return null !== (e = d[n.toLowerCase()]) && void 0 !== e ? e : n.toLowerCase()
                            }(n)
                        }), [n]);
                    return (0, r.jsxs)("div", {
                        className: (0, l.yI)("group relative", x),
                        translate: "no",
                        children: [g && (0, r.jsx)("div", {
                            className: "px-3 pt-2 capitalize",
                            children: k
                        }), y ? (0, r.jsx)(o.Z, {
                            language: k,
                            customStyle: {
                                background: "transparent",
                                padding: 0,
                                margin: 0,
                                fontSize: 13,
                                fontFamily: "Menlo, Monaco, Consolas",
                                textShadow: "none"
                            },
                            style: b ? i.Z : Object.assign({}, s.Z, {
                                'code[class*="language-"]': {
                                    textShadow: "none"
                                },
                                operator: {
                                    color: "#9a6e3a"
                                },
                                entity: {
                                    color: "#9a6e3a",
                                    cursor: "help"
                                },
                                url: {
                                    color: "#9a6e3a"
                                },
                                ".language-css .token.string": {
                                    color: "#9a6e3a"
                                },
                                ".style .token.string": {
                                    color: "#9a6e3a"
                                }
                            }),
                            wrapLines: !0,
                            className: w,
                            children: t
                        }) : (0, r.jsx)(m, {
                            code: t,
                            className: w
                        }), (0, r.jsxs)("div", {
                            className: (0, l.yI)("absolute -right-1.5 -top-0.5 flex gap-2", v),
                            children: [!!u && (0, r.jsx)(f.nC, {
                                copyValue: t,
                                className: (0, l.yI)(h)
                            }), !!p && (0, r.jsx)(f.T1, {
                                code: t,
                                lang: n,
                                className: (0, l.yI)(h)
                            })]
                        })]
                    })
                }
        },
        40791: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return m
                }
            });
            var r = t(26042),
                o = t(69396),
                i = t(99534),
                s = t(85893),
                a = t(67294),
                l = t(41664),
                c = t.n(l),
                d = t(12922),
                u = t(15371),
                f = function(e) {
                    return e.includes("/subscribe")
                },
                m = (0, a.forwardRef)((function(e, n) {
                    var t = e.href,
                        a = e.children,
                        l = e.className,
                        m = e.isExternal,
                        p = (0, i.Z)(e, ["href", "children", "className", "isExternal"]),
                        h = m ? {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {},
                        v = p.noTruncate,
                        w = (0, i.Z)(p, ["noTruncate"]);
                    if (f(t)) return (0, s.jsx)("a", (0, o.Z)((0, r.Z)({
                        ref: n,
                        href: t
                    }, w, h), {
                        className: (0, d.yI)("no-underline", u.Cj.labelBlueStandardHover, v ? "" : "truncate", l),
                        children: a
                    }));
                    var x = (0, s.jsx)("a", (0, o.Z)((0, r.Z)({
                        ref: n
                    }, w, h), {
                        className: (0, d.yI)("no-underline", u.Cj.labelBlueStandardHover, v ? "" : "truncate", l),
                        children: a
                    }));
                    return t ? (0, s.jsx)(c(), {
                        ref: n,
                        href: t,
                        children: x
                    }) : x
                }))
        },
        40832: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return s
                }
            });
            var r = t(82010),
                o = t(67294),
                i = t(82338),
                s = function() {
                    var e = (0, r.F)(),
                        n = e.theme,
                        t = e.forcedTheme,
                        s = (0, i.a)("(prefers-color-scheme: dark)"),
                        a = (0, o.useState)(!1),
                        l = a[0],
                        c = a[1];
                    return (0, o.useEffect)((function() {
                        c(!0)
                    }), []), !l || (t ? "dark" === t : "dark" === n || "system" === n && s)
                }
        },
        50144: function(e, n, t) {
            t.d(n, {
                E: function() {
                    return o
                }
            });
            var r = t(50632),
                o = function() {
                    var e, n, t;
                    return Boolean(null === (e = (0, r.U5)()) || void 0 === e || null === (n = e.data) || void 0 === n || null === (t = n.userStatus) || void 0 === t ? void 0 : t.isPremium)
                }
        },
        42432: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return o
                }
            });
            var r = t(26042),
                o = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    null === e || void 0 === e || e.postMessage((0, r.Z)({
                        type: n
                    }, t), "*")
                }
        },
        13295: function(e, n) {
            n.Z = "/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
        },
        20337: function(e, n) {
            n.Z = "/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png"
        }
    }
]);