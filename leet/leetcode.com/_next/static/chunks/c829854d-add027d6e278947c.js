"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5321], {
        1156: function(e, r, a) {
            a.d(r, {
                LX: function() {
                    return De
                },
                MO: function() {
                    return le
                },
                UP: function() {
                    return E
                },
                Yd: function() {
                    return rr
                },
                c7: function() {
                    return ar
                },
                nn: function() {
                    return ze
                },
                oR: function() {
                    return se
                },
                wN: function() {
                    return lr
                },
                xe: function() {
                    return te
                }
            });
            var t = a(67294),
                l = a(94184),
                d = a.n(l),
                o = a(52699),
                n = a(38356),
                b = a(92921),
                i = a(73935),
                s = a(80129),
                g = a(42054);
            const k = d()(" top-[-50px] bg-[#ffffff] border-solid border-t-[256px] border-r-[256px] border-r-transparent border-t-transparent border-b-[256px] border-b-transparent border-l-[0] border-l-[#ffffff]", " dark:bg-[#2b2b2b] dark:border-r-[#2b2b2b] dark:border-l-[256px]"),
                c = d()(`${k} translate-x-[29%] rotate-45 dark:translate-x-[-19%] dark:translate-y-[-50%] dark:rotate-45`),
                u = d()(`${k} translate-x-[35%] rotate-45 dark:translate-x-[-25%] dark:translate-y-[-50%] dark:rotate-45`);

            function h(e, r) {
                return r.encode ? r.strict ? encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)) : encodeURIComponent(e) : e
            }

            function m(e, r) {
                if (!e) return "";
                ! function(e) {
                    if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                }((r = {
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    ...r
                }).arrayFormatSeparator);
                const a = a => {
                        return r.skipNull && (null === (t = e[a]) || void 0 === t) || r.skipEmptyString && "" === e[a];
                        var t
                    },
                    t = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return r => (a, t) => {
                                    const l = a.length;
                                    return void 0 === t || e.skipNull && null === t || e.skipEmptyString && "" === t ? a : null === t ? [...a, [h(r, e), "[", l, "]"].join("")] : [...a, [h(r, e), "[", h(l, e), "]=", h(t, e)].join("")]
                                };
                            case "bracket":
                                return r => (a, t) => void 0 === t || e.skipNull && null === t || e.skipEmptyString && "" === t ? a : null === t ? [...a, [h(r, e), "[]"].join("")] : [...a, [h(r, e), "[]=", h(t, e)].join("")];
                            case "colon-list-separator":
                                return r => (a, t) => void 0 === t || e.skipNull && null === t || e.skipEmptyString && "" === t ? a : null === t ? [...a, [h(r, e), ":list="].join("")] : [...a, [h(r, e), ":list=", h(t, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const r = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return a => (t, l) => void 0 === l || e.skipNull && null === l || e.skipEmptyString && "" === l ? t : (l = null === l ? "" : l, 0 === t.length ? [
                                        [h(a, e), r, h(l, e)].join("")
                                    ] : [
                                        [t, h(l, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return r => (a, t) => void 0 === t || e.skipNull && null === t || e.skipEmptyString && "" === t ? a : null === t ? [...a, h(r, e)] : [...a, [h(r, e), "=", h(t, e)].join("")]
                        }
                    }(r),
                    l = {};
                for (const [o, n] of Object.entries(e)) a(o) || (l[o] = n);
                const d = Object.keys(l);
                return !1 !== r.sort && d.sort(r.sort), d.map((a => {
                    const l = e[a];
                    return void 0 === l ? "" : null === l ? h(a, r) : Array.isArray(l) ? 0 === l.length && "bracket-separator" === r.arrayFormat ? h(a, r) + "[]" : l.reduce(t(a), []).join("&") : h(a, r) + "=" + h(l, r)
                })).filter((e => e.length > 0)).join("&")
            }
            const v = ({
                    href: e,
                    children: r,
                    onClick: a,
                    className: l
                }) => {
                    const o = t.createElement("span", {
                        className: d()("display-none h-8 w-[84px] cursor-pointer  rounded-[8px] bg-[#ffa1161f] text-center leading-8 transition-colors hover:bg-[#ffa11633] lg:inline-block", l)
                    }, r);
                    return e ? t.createElement("a", {
                        onClick: a,
                        href: e
                    }, o) : t.createElement("a", {
                        onClick: a
                    }, o)
                },
                p = "nav-premium",
                y = "nav-shop-premium",
                x = "navbar-dropdown-context",
                f = "study-plan-card",
                w = {
                    [p]: "lp_pl",
                    [y]: "nb_npl",
                    [x]: "um_pl",
                    [f]: "sp_cd"
                };

            function C(e, r) {
                const a = r ? String(r.source) : "",
                    t = a in w ? w[a] : r ? r.ref || "" : void 0;
                return `${e}${r?`?${m({...r,ref:t})}`:""}`
            }
            const E = ({
                    className: e,
                    queryObject: r,
                    pageReference: a,
                    ...l
                }) => t.createElement(v, Object.assign({}, l, {
                    href: C("/subscribe/", { ...r,
                        source: a || "ot"
                    }),
                    className: e
                }), t.createElement("span", {
                    className: d()("text-brand-orange")
                }, "Premium")),
                A = "text-border-tertiary dark:text-border-tertiary",
                B = "text-text-secondary dark:text-text-secondary",
                N = "text-text-primary dark:text-text-primary",
                S = "bg-fill-tertiary dark:bg-fill-tertiary",
                L = "bg-gray-60 dark:bg-gray-60",
                T = "bg-layer-02 dark:bg-layer-02",
                R = "bg-layer-01 dark:bg-layer-01",
                G = "border-border-tertiary dark:border-border-tertiary",
                F = "border-text-primary dark:border-text-primary",
                M = "hover:text-text-secondary dark:hover:text-text-secondary",
                P = "hover:text-text-primary dark:hover:text-text-primary",
                H = "hover:bg-fill-secondary dark:hover:bg-fill-secondary",
                O = {
                    label1: "text-label-1 dark:text-dark-label-1",
                    label2: "text-label-2 dark:text-dark-label-2",
                    label3: "text-label-3 dark:text-dark-label-3",
                    label4: "text-label-4 dark:text-dark-label-4",
                    labelGrey1: "text-gray-1 dark:text-dark-gray-1",
                    labelGrey3: "text-gray-3 dark:text-dark-gray-3",
                    labelGrey4: "text-gray-4 dark:text-dark-gray-4",
                    labelGrey5: "text-gray-5 dark:text-dark-gray-5",
                    labelGrey6: "text-gray-6 dark:text-dark-gray-6",
                    labelGrey6Hover: "hover:text-gray-6 dark:hover:text-dark-gray-6",
                    labelGrey7: "text-gray-7 dark:text-dark-gray-7",
                    labelGrey7Hover: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGrey7GroupHover: "group-hover:text-gray-7 dark:group-hover:text-dark-gray-7",
                    labelGrey8: "text-gray-8 dark:text-dark-gray-8",
                    labelGrey8Hover: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelReverse: "text-label-r dark:text-dark-label-r",
                    labelReverseHover: "hover:text-label-r dark:hover:text-dark-label-r",
                    labelWhite: "text-white dark:text-dark-white",
                    labelBlack: "text-black dark:text-white",
                    labelBlueStandard: "text-blue-s dark:text-dark-blue-s",
                    labelBlueStandardHover: "hover:text-blue-s dark:hover:text-dark-blue-s",
                    labelBlueStandardGroupHover: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelBlue3Hover: "hover:text-blue-3 dark:hover:text-dark-blue-3",
                    labelBlue: "text-blue dark:text-blue",
                    labelBlueHover: "hover:text-blue dark:hover:text-blue",
                    labelPink1: "text-pink-1 dark:text-pink-1",
                    labelGreenStandard: "text-green-s dark:text-dark-green-s",
                    labelGreenStandardHover: "hover:text-green-s dark:hover:text-dark-green-s",
                    labelRedStandard: "text-red-s dark:text-dark-red-s",
                    labelRedStandardHover: "hover:text-red-s dark:hover:text-dark-red-s",
                    labelOlive: "text-olive dark:text-dark-olive",
                    labelPink: "text-pink dark:text-dark-pink",
                    labelRed: "text-red-s dark:text-red-s",
                    labelYellow: "text-yellow dark:text-dark-yellow",
                    labelYellowHover: "hover:text-yellow dark:hover:text-dark-yellow",
                    labelBrandOrange: "text-brand-orange dark:text-dark-brand-orange",
                    labelBrandOrangeHover: "hover:text-brand-orange dark:hover:text-dark-brand-orange",
                    labelTeal: "text-teal dark:text-dark-teal",
                    label1Hover: "hover:text-label-1 dark:hover:text-dark-label-1",
                    label2Hover: "hover:text-label-2 dark:hover:text-dark-label-2",
                    label3Hover: "hover:text-label-3 dark:hover:text-dark-label-3",
                    placeholderLabel4: "placeholder:text-label-4 dark:placeholder:text-dark-label-4",
                    label1GroupHover: "group-hover:text-label-1 dark:group-hover:text-dark-label-1",
                    label2GroupHover: "group-hover:text-label-2 dark:group-hover:text-dark-label-2",
                    bgPaper: "bg-paper dark:bg-dark-paper",
                    bgPaperHover: "hover:bg-paper dark:hover:bg-dark-paper",
                    bgOverlay1: "bg-overlay-1 dark:bg-dark-overlay-1",
                    bgOverlay2: "bg-overlay-2 dark:bg-dark-overlay-2",
                    bgOverlay3: "bg-overlay-3 dark:bg-dark-overlay-3",
                    bgOverlay4: "bg-overlay-4 dark:bg-dark-overlay-4",
                    bgBlue0: "bg-blue-0 dark:bg-dark-blue-0",
                    bgBlue1: "bg-blue-1 dark:bg-dark-blue-1",
                    bgBlue3: "bg-blue-3 dark:bg-dark-blue-3",
                    bgBlue0Hover: "hover:bg-blue-0 dark:hover:bg-dark-blue-0",
                    bgBlue1Hover: "hover:bg-blue-1 dark:hover:bg-dark-blue-1",
                    bgBlue3Hover: "hover:bg-blue-3 dark:hover:bg-dark-blue-3",
                    bgBlueSHover: "hover:bg-blue-s dark:hover:bg-dark-blue-s",
                    bgGreen3Hover: "hover:bg-green-3 dark:hover:bg-dark-green-3",
                    bgGreenStandard: "bg-green-s dark:bg-dark-green-s",
                    bgGreenSHover: "hover:bg-green-s dark:hover:bg-dark-green-s",
                    bgGreen0: "bg-green-0 dark:bg-dark-green-0",
                    bgGreen1: "bg-green-1 dark:bg-dark-green-1",
                    bgGreen2: "bg-green-2 dark:bg-dark-green-2",
                    bgBlueStandard: "bg-blue-s dark:bg-dark-blue-s",
                    bgRedStandard: "bg-red-s dark:bg-dark-red-s",
                    bgRedSHover: "hover:bg-red-s dark:hover:bg-dark-red-s",
                    bgRed3Hover: "hover:bg-red-3 dark:hover:bg-dark-red-3",
                    bgPurple: "bg-purple dark:bg-dark-purple",
                    bgYellow: "bg-yellow dark:bg-dark-yellow",
                    bgYellow0: "bg-yellow-0 dark:bg-dark-yellow-0",
                    bgOlive: "bg-olive dark:bg-dark-olive",
                    bgPink: "bg-pink dark:bg-dark-pink",
                    bgRed1: "bg-red-1 dark:bg-dark-red-1",
                    bgOrange1: "bg-orange-1 dark:bg-dark-orange-1",
                    bgOrange2: "bg-orange-2 dark:bg-dark-orange-2",
                    bgBrandOrange: "bg-brand-orange dark:bg-dark-brand-orange",
                    bgBrandOrangeHover: "hover:bg-brand-orange dark:hover:bg-brand-orange",
                    bgGray2Hover: "hover:bg-gray-2 dark:hover:bg-dark-gray-2",
                    bgGray4: "bg-gray-4 dark:bg-dark-gray-4",
                    bgGray5: "bg-gray-5 dark:bg-dark-gray-5",
                    bgGray6: "bg-gray-6 dark:bg-dark-gray-6",
                    bgGray7: "bg-gray-7 dark:bg-dark-gray-7",
                    bgGray8: "bg-gray-8 dark:bg-dark-gray-8",
                    bgWhite: "bg-white dark:bg-white",
                    bgBlack: "bg-black dark:bg-black",
                    bgPink2: "bg-pink-2 dark:bg-pink-2",
                    bg: "bg-layer-bg dark:bg-dark-layer-bg",
                    bgLayer1: "bg-layer-1 dark:bg-dark-layer-1",
                    bgLayer1Hover: "hover:bg-layer-1 dark:hover:bg-dark-layer-1",
                    bgLayer2: "bg-layer-2 dark:bg-dark-layer-2",
                    bgLayer3: "bg-layer-3 dark:bg-dark-layer-3",
                    bgTransparent: "bg-transparent dark:bg-dark-transparent",
                    bgTransparentFocus: "focus:bg-transparent dark:focus:bg-dark-transparent",
                    bgTransparentActive: "active:bg-transparent dark:active:bg-dark-transparent",
                    bgTransparentHover: "hover:bg-transparent dark:hover:bg-dark-transparent",
                    bgBlocker: "bg-blocker dark:bg-dark-blocker",
                    bgLabel2: "bg-label-2 dark:bg-dark-label-2",
                    fill1: "bg-fill-1 dark:bg-dark-fill-1",
                    fill2: "bg-fill-2 dark:bg-dark-fill-2",
                    fill3: "bg-fill-3 dark:bg-dark-fill-3",
                    fill4: "bg-fill-4 dark:bg-dark-fill-4",
                    fillBlueStandard: "bg-blue-s dark:bg-dark-blue-s",
                    fillRedStandard: "bg-red-s dark:bg-dark-red-s",
                    fill1Hover: "hover:bg-fill-1 dark:hover:bg-dark-fill-1",
                    fill2Hover: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    fill3Hover: "hover:bg-fill-3 dark:hover:bg-dark-fill-3",
                    fill4Hover: "hover:bg-fill-4 dark:hover:bg-dark-fill-4",
                    fill4Focus: "focus:bg-fill-4 dark:focus:bg-dark-fill-4",
                    fillRed1: "bg-red-1 dark:bg-red-1",
                    fillGray1: "bg-gray-1 dark:bg-dark-gray-1",
                    fillGray2: "bg-gray-2 dark:bg-dark-gray-2",
                    fillGray5: "bg-gray-5 dark:bg-dark-gray-5",
                    divider1: "border-divider-1 dark:border-dark-divider-1",
                    divider2: "border-divider-2 dark:border-gray-7",
                    divider3: "border-divider-3 dark:border-dark-divider-3",
                    divider4: "border-divider-4 dark:border-dark-divider-4",
                    bgDivider1: "bg-divider-1 dark:bg-dark-divider-1",
                    bgDivider2Hover: "hover:bg-divider-2 dark:hover:bg-dark-divider-2",
                    bgDivider3: "bg-divider-3 dark:bg-dark-divider-3",
                    bgDivider3Hover: "hover:bg-divider-3 dark:hover:bg-dark-divider-3",
                    bgDivider4: "bg-divider-4 dark:bg-dark-divider-4",
                    bgDivider4Hover: "hover:bg-divider-4 dark:hover:bg-dark-divider-4",
                    dividerBorder1Hover: "hover:border-divider-1 dark:hover:border-dark-divider-1",
                    dividerBorder2: "border-divider-border-2 dark:border-dark-divider-border-2",
                    dividerBlueStandard: "border-blue-s dark:border-dark-blue-s",
                    dividerGreenStandard: "border-green-s dark:border-dark-green-s",
                    dividerGreen2: "border-green-2 dark:border-dark-green-2",
                    dividerBrandOrange: "border-brand-orange",
                    dividerGray2: "border-gray-2 dark:border-dark-gray-2",
                    dividerGray4: "border-gray-4 dark:border-dark-gray-4",
                    borderLayer1: "border-layer-1 dark:border-dark-layer-1",
                    borderFill1: "border-fill-1 dark:border-dark-fill-1",
                    borderFill2: "border-fill-2 dark:border-dark-fill-2",
                    borderFill3: "border-fill-3 dark:border-dark-fill-3",
                    borderFill4: "border-fill-4 dark:border-dark-fill-4",
                    borderLabel1: "border-label-1 dark:border-dark-label-1",
                    borderLabel2: "border-label-2 dark:border-dark-label-2",
                    borderLabel3: "border-label-3 dark:border-dark-label-3",
                    borderLabel4: "border-label-4 dark:border-dark-label-4",
                    borderGray7: "border-gray-7 dark:border-dark-gray-7",
                    labelTransparent: "text-transparent dark:text-dark-transparent",
                    labelCurrent: "text-current dark:text-dark-current",
                    labelYellow10: "text-yellow-10 dark:text-dark-yellow-10",
                    labelYellow20: "text-yellow-20 dark:text-dark-yellow-20",
                    labelYellow40: "text-yellow-40 dark:text-dark-yellow-40",
                    labelYellow60: "text-yellow-60 dark:text-dark-yellow-60",
                    labelYellow80: "text-yellow-80 dark:text-dark-yellow-80",
                    labelYellow100: "text-yellow-100 dark:text-dark-yellow-100",
                    labelGreen10: "text-green-10 dark:text-dark-green-10",
                    labelGreen20: "text-green-20 dark:text-dark-green-20",
                    labelGreen40: "text-green-40 dark:text-dark-green-40",
                    labelGreen60: "text-green-60 dark:text-dark-green-60",
                    labelGreen80: "text-green-80 dark:text-dark-green-80",
                    labelGreen100: "text-green-100 dark:text-dark-green-100",
                    labelMagenta10: "text-magenta-10 dark:text-dark-magenta-10",
                    labelMagenta20: "text-magenta-20 dark:text-dark-magenta-20",
                    labelMagenta40: "text-magenta-40 dark:text-dark-magenta-40",
                    labelMagenta60: "text-magenta-60 dark:text-dark-magenta-60",
                    labelMagenta80: "text-magenta-80 dark:text-dark-magenta-80",
                    labelMagenta100: "text-magenta-100 dark:text-dark-magenta-100",
                    labelGray10: "text-gray-10 dark:text-dark-gray-10",
                    labelGray20: "text-gray-20 dark:text-dark-gray-20",
                    labelGray40: "text-gray-40 dark:text-dark-gray-40",
                    labelGray60: "text-gray-60 dark:text-dark-gray-60",
                    labelGray80: "text-gray-80 dark:text-dark-gray-80",
                    labelGray100: "text-gray-100 dark:text-dark-gray-100",
                    labelTeal10: "text-teal-10 dark:text-dark-teal-10",
                    labelTeal20: "text-teal-20 dark:text-dark-teal-20",
                    labelTeal40: "text-teal-40 dark:text-dark-teal-40",
                    labelTeal60: "text-teal-60 dark:text-dark-teal-60",
                    labelTeal80: "text-teal-80 dark:text-dark-teal-80",
                    labelTeal100: "text-teal-100 dark:text-dark-teal-100",
                    labelBlue10: "text-blue-10 dark:text-dark-blue-10",
                    labelBlue20: "text-blue-20 dark:text-dark-blue-20",
                    labelBlue40: "text-blue-40 dark:text-dark-blue-40",
                    labelBlue60: "text-blue-60 dark:text-dark-blue-60",
                    labelBlue80: "text-blue-80 dark:text-dark-blue-80",
                    labelBlue100: "text-blue-100 dark:text-dark-blue-100",
                    labelPurple10: "text-purple-10 dark:text-dark-purple-10",
                    labelPurple20: "text-purple-20 dark:text-dark-purple-20",
                    labelPurple40: "text-purple-40 dark:text-dark-purple-40",
                    labelPurple60: "text-purple-60 dark:text-dark-purple-60",
                    labelPurple80: "text-purple-80 dark:text-dark-purple-80",
                    labelPurple100: "text-purple-100 dark:text-dark-purple-100",
                    labelRed10: "text-red-10 dark:text-dark-red-10",
                    labelRed20: "text-red-20 dark:text-dark-red-20",
                    labelRed40: "text-red-40 dark:text-dark-red-40",
                    labelRed60: "text-red-60 dark:text-dark-red-60",
                    labelRed80: "text-red-80 dark:text-dark-red-80",
                    labelRed100: "text-red-100 dark:text-dark-red-100",
                    labelFixedWhite: "text-fixed-white dark:text-dark-fixed-white",
                    labelFixedBlack: "text-fixed-black dark:text-dark-fixed-black",
                    labelBrandBlack: "text-brand-black dark:text-dark-brand-black",
                    labelBrandOrange: "text-brand-orange dark:text-dark-brand-orange",
                    labelBrandGray: "text-brand-gray dark:text-dark-brand-gray",
                    labelBrandWhite: "text-brand-white dark:text-dark-brand-white",
                    labelLayerPure: "text-layer-pure dark:text-dark-layer-pure",
                    labelLayerBackground: "text-layer-background dark:text-dark-layer-background",
                    labelLayer01: "text-layer-01 dark:text-dark-layer-01",
                    labelLayer02: "text-layer-02 dark:text-dark-layer-02",
                    labelLayer03: "text-layer-03 dark:text-dark-layer-03",
                    labelFillQuaternary: "text-fill-quaternary dark:text-dark-fill-quaternary",
                    labelFillTertiary: "text-fill-tertiary dark:text-dark-fill-tertiary",
                    labelFillPrimary: "text-fill-primary dark:text-dark-fill-primary",
                    labelFillSecondary: "text-fill-secondary dark:text-dark-fill-secondary",
                    labelFillPure: "text-fill-pure dark:text-dark-fill-pure",
                    labelDifficultyHard: "text-difficulty-hard dark:text-dark-difficulty-hard",
                    labelDifficultyMedium: "text-difficulty-medium dark:text-dark-difficulty-medium",
                    labelDifficultyEasy: "text-difficulty-easy dark:text-dark-difficulty-easy",
                    labelBorderSecondary: "text-border-secondary dark:text-dark-border-secondary",
                    labelBorderQuaternary: "text-border-quaternary dark:text-dark-border-quaternary",
                    labelBorderPrimary: "text-border-primary dark:text-dark-border-primary",
                    labelBorderTertiary: "text-border-tertiary dark:text-dark-border-tertiary",
                    labelSpecialRose: "text-special-rose dark:text-dark-special-rose",
                    labelSpecialSunny: "text-special-sunny dark:text-dark-special-sunny",
                    labelSpecialKiwi: "text-special-kiwi dark:text-dark-special-kiwi",
                    labelSpecialSkyler: "text-special-skyler dark:text-dark-special-skyler",
                    labelSpecialLavender: "text-special-lavender dark:text-dark-special-lavender",
                    labelTextQuaternary: "text-text-quaternary dark:text-text-quaternary",
                    labelTextTertiary: "text-text-tertiary dark:text-text-tertiary",
                    labelTextSecondary: "text-text-secondary dark:text-text-secondary",
                    labelTextPrimary: "text-text-primary dark:text-text-primary",
                    labelTextReverse: "text-text-reverse dark:text-text-reverse",
                    labelMessageWarning: "text-message-warning dark:text-dark-message-warning",
                    labelMessageDanger: "text-message-danger dark:text-dark-message-danger",
                    labelMessageSuccess: "text-message-success dark:text-dark-message-success",
                    labelMessagePrimary: "text-message-primary dark:text-dark-message-primary",
                    bgTransparent: "bg-transparent dark:bg-dark-transparent",
                    bgCurrent: "bg-current dark:bg-dark-current",
                    bgYellow10: "bg-yellow-10 dark:bg-dark-yellow-10",
                    bgYellow20: "bg-yellow-20 dark:bg-dark-yellow-20",
                    bgYellow40: "bg-yellow-40 dark:bg-dark-yellow-40",
                    bgYellow60: "bg-yellow-60 dark:bg-dark-yellow-60",
                    bgYellow80: "bg-yellow-80 dark:bg-dark-yellow-80",
                    bgYellow100: "bg-yellow-100 dark:bg-dark-yellow-100",
                    bgGreen10: "bg-green-10 dark:bg-dark-green-10",
                    bgGreen20: "bg-green-20 dark:bg-dark-green-20",
                    bgGreen40: "bg-green-40 dark:bg-dark-green-40",
                    bgGreen60: "bg-green-60 dark:bg-dark-green-60",
                    bgGreen80: "bg-green-80 dark:bg-dark-green-80",
                    bgGreen100: "bg-green-100 dark:bg-dark-green-100",
                    bgMagenta10: "bg-magenta-10 dark:bg-dark-magenta-10",
                    bgMagenta20: "bg-magenta-20 dark:bg-dark-magenta-20",
                    bgMagenta40: "bg-magenta-40 dark:bg-dark-magenta-40",
                    bgMagenta60: "bg-magenta-60 dark:bg-dark-magenta-60",
                    bgMagenta80: "bg-magenta-80 dark:bg-dark-magenta-80",
                    bgMagenta100: "bg-magenta-100 dark:bg-dark-magenta-100",
                    bgGray10: "bg-gray-10 dark:bg-dark-gray-10",
                    bgGray20: "bg-gray-20 dark:bg-dark-gray-20",
                    bgGray40: "bg-gray-40 dark:bg-dark-gray-40",
                    bgGray60: "bg-gray-60 dark:bg-dark-gray-60",
                    bgGray80: "bg-gray-80 dark:bg-dark-gray-80",
                    bgGray100: "bg-gray-100 dark:bg-dark-gray-100",
                    bgTeal10: "bg-teal-10 dark:bg-dark-teal-10",
                    bgTeal20: "bg-teal-20 dark:bg-dark-teal-20",
                    bgTeal40: "bg-teal-40 dark:bg-dark-teal-40",
                    bgTeal60: "bg-teal-60 dark:bg-dark-teal-60",
                    bgTeal80: "bg-teal-80 dark:bg-dark-teal-80",
                    bgTeal100: "bg-teal-100 dark:bg-dark-teal-100",
                    bgBlue10: "bg-blue-10 dark:bg-dark-blue-10",
                    bgBlue20: "bg-blue-20 dark:bg-dark-blue-20",
                    bgBlue40: "bg-blue-40 dark:bg-dark-blue-40",
                    bgBlue60: "bg-blue-60 dark:bg-dark-blue-60",
                    bgBlue80: "bg-blue-80 dark:bg-dark-blue-80",
                    bgBlue100: "bg-blue-100 dark:bg-dark-blue-100",
                    bgPurple10: "bg-purple-10 dark:bg-dark-purple-10",
                    bgPurple20: "bg-purple-20 dark:bg-dark-purple-20",
                    bgPurple40: "bg-purple-40 dark:bg-dark-purple-40",
                    bgPurple60: "bg-purple-60 dark:bg-dark-purple-60",
                    bgPurple80: "bg-purple-80 dark:bg-dark-purple-80",
                    bgPurple100: "bg-purple-100 dark:bg-dark-purple-100",
                    bgRed10: "bg-red-10 dark:bg-dark-red-10",
                    bgRed20: "bg-red-20 dark:bg-dark-red-20",
                    bgRed40: "bg-red-40 dark:bg-dark-red-40",
                    bgRed60: "bg-red-60 dark:bg-dark-red-60",
                    bgRed80: "bg-red-80 dark:bg-dark-red-80",
                    bgRed100: "bg-red-100 dark:bg-dark-red-100",
                    bgFixedWhite: "bg-fixed-white dark:bg-dark-fixed-white",
                    bgFixedBlack: "bg-fixed-black dark:bg-dark-fixed-black",
                    bgBrandBlack: "bg-brand-black dark:bg-dark-brand-black",
                    bgBrandOrange: "bg-brand-orange dark:bg-dark-brand-orange",
                    bgBrandGray: "bg-brand-gray dark:bg-dark-brand-gray",
                    bgBrandWhite: "bg-brand-white dark:bg-dark-brand-white",
                    bgLayerPure: "bg-layer-pure dark:bg-dark-layer-pure",
                    bgLayerBackground: "bg-layer-background dark:bg-dark-layer-background",
                    bgLayer01: "bg-layer-01 dark:bg-dark-layer-01",
                    bgLayer02: "bg-layer-02 dark:bg-dark-layer-02",
                    bgLayer03: "bg-layer-03 dark:bg-dark-layer-03",
                    bgFillQuaternary: "bg-fill-quaternary dark:bg-dark-fill-quaternary",
                    bgFillTertiary: "bg-fill-tertiary dark:bg-dark-fill-tertiary",
                    bgFillPrimary: "bg-fill-primary dark:bg-dark-fill-primary",
                    bgFillSecondary: "bg-fill-secondary dark:bg-dark-fill-secondary",
                    bgFillPure: "bg-fill-pure dark:bg-dark-fill-pure",
                    bgDifficultyHard: "bg-difficulty-hard dark:bg-dark-difficulty-hard",
                    bgDifficultyMedium: "bg-difficulty-medium dark:bg-dark-difficulty-medium",
                    bgDifficultyEasy: "bg-difficulty-easy dark:bg-dark-difficulty-easy",
                    bgBorderSecondary: "bg-border-secondary dark:bg-dark-border-secondary",
                    bgBorderQuaternary: "bg-border-quaternary dark:bg-dark-border-quaternary",
                    bgBorderPrimary: "bg-border-primary dark:bg-dark-border-primary",
                    bgBorderTertiary: "bg-border-tertiary dark:bg-dark-border-tertiary",
                    bgSpecialRose: "bg-special-rose dark:bg-dark-special-rose",
                    bgSpecialSunny: "bg-special-sunny dark:bg-dark-special-sunny",
                    bgSpecialKiwi: "bg-special-kiwi dark:bg-dark-special-kiwi",
                    bgSpecialSkyler: "bg-special-skyler dark:bg-dark-special-skyler",
                    bgSpecialLavender: "bg-special-lavender dark:bg-dark-special-lavender",
                    bgTextQuaternary: "bg-text-quaternary dark:bg-dark-text-quaternary",
                    bgTextTertiary: "bg-text-tertiary dark:bg-dark-text-tertiary",
                    bgTextSecondary: "bg-text-secondary dark:bg-dark-text-secondary",
                    bgTextPrimary: "bg-text-primary dark:bg-dark-text-primary",
                    bgTextReverse: "bg-text-reverse dark:bg-dark-text-reverse",
                    bgMessageWarning: "bg-message-warning dark:bg-dark-message-warning",
                    bgMessageDanger: "bg-message-danger dark:bg-dark-message-danger",
                    bgMessageSuccess: "bg-message-success dark:bg-dark-message-success",
                    bgMessagePrimary: "bg-message-primary dark:bg-dark-message-primary",
                    borderTransparent: "border-transparent dark:border-dark-transparent",
                    borderCurrent: "border-current dark:border-dark-current",
                    borderYellow10: "border-yellow-10 dark:border-dark-yellow-10",
                    borderYellow20: "border-yellow-20 dark:border-dark-yellow-20",
                    borderYellow40: "border-yellow-40 dark:border-dark-yellow-40",
                    borderYellow60: "border-yellow-60 dark:border-dark-yellow-60",
                    borderYellow80: "border-yellow-80 dark:border-dark-yellow-80",
                    borderYellow100: "border-yellow-100 dark:border-dark-yellow-100",
                    borderGreen10: "border-green-10 dark:border-dark-green-10",
                    borderGreen20: "border-green-20 dark:border-dark-green-20",
                    borderGreen40: "border-green-40 dark:border-dark-green-40",
                    borderGreen60: "border-green-60 dark:border-dark-green-60",
                    borderGreen80: "border-green-80 dark:border-dark-green-80",
                    borderGreen100: "border-green-100 dark:border-dark-green-100",
                    borderMagenta10: "border-magenta-10 dark:border-dark-magenta-10",
                    borderMagenta20: "border-magenta-20 dark:border-dark-magenta-20",
                    borderMagenta40: "border-magenta-40 dark:border-dark-magenta-40",
                    borderMagenta60: "border-magenta-60 dark:border-dark-magenta-60",
                    borderMagenta80: "border-magenta-80 dark:border-dark-magenta-80",
                    borderMagenta100: "border-magenta-100 dark:border-dark-magenta-100",
                    borderGray10: "border-gray-10 dark:border-dark-gray-10",
                    borderGray20: "border-gray-20 dark:border-dark-gray-20",
                    borderGray40: "border-gray-40 dark:border-dark-gray-40",
                    borderGray60: "border-gray-60 dark:border-dark-gray-60",
                    borderGray80: "border-gray-80 dark:border-dark-gray-80",
                    borderGray100: "border-gray-100 dark:border-dark-gray-100",
                    borderTeal10: "border-teal-10 dark:border-dark-teal-10",
                    borderTeal20: "border-teal-20 dark:border-dark-teal-20",
                    borderTeal40: "border-teal-40 dark:border-dark-teal-40",
                    borderTeal60: "border-teal-60 dark:border-dark-teal-60",
                    borderTeal80: "border-teal-80 dark:border-dark-teal-80",
                    borderTeal100: "border-teal-100 dark:border-dark-teal-100",
                    borderBlue10: "border-blue-10 dark:border-dark-blue-10",
                    borderBlue20: "border-blue-20 dark:border-dark-blue-20",
                    borderBlue40: "border-blue-40 dark:border-dark-blue-40",
                    borderBlue60: "border-blue-60 dark:border-dark-blue-60",
                    borderBlue80: "border-blue-80 dark:border-dark-blue-80",
                    borderBlue100: "border-blue-100 dark:border-dark-blue-100",
                    borderPurple10: "border-purple-10 dark:border-dark-purple-10",
                    borderPurple20: "border-purple-20 dark:border-dark-purple-20",
                    borderPurple40: "border-purple-40 dark:border-dark-purple-40",
                    borderPurple60: "border-purple-60 dark:border-dark-purple-60",
                    borderPurple80: "border-purple-80 dark:border-dark-purple-80",
                    borderPurple100: "border-purple-100 dark:border-dark-purple-100",
                    borderRed10: "border-red-10 dark:border-dark-red-10",
                    borderRed20: "border-red-20 dark:border-dark-red-20",
                    borderRed40: "border-red-40 dark:border-dark-red-40",
                    borderRed60: "border-red-60 dark:border-dark-red-60",
                    borderRed80: "border-red-80 dark:border-dark-red-80",
                    borderRed100: "border-red-100 dark:border-dark-red-100",
                    borderFixedWhite: "border-fixed-white dark:border-dark-fixed-white",
                    borderFixedBlack: "border-fixed-black dark:border-dark-fixed-black",
                    borderBrandBlack: "border-brand-black dark:border-dark-brand-black",
                    borderBrandOrange: "border-brand-orange dark:border-dark-brand-orange",
                    borderBrandGray: "border-brand-gray dark:border-dark-brand-gray",
                    borderBrandWhite: "border-brand-white dark:border-dark-brand-white",
                    borderLayerPure: "border-layer-pure dark:border-dark-layer-pure",
                    borderLayerBackground: "border-layer-background dark:border-dark-layer-background",
                    borderLayer01: "border-layer-01 dark:border-dark-layer-01",
                    borderLayer02: "border-layer-02 dark:border-dark-layer-02",
                    borderLayer03: "border-layer-03 dark:border-dark-layer-03",
                    borderFillQuaternary: "border-fill-quaternary dark:border-dark-fill-quaternary",
                    borderFillTertiary: "border-fill-tertiary dark:border-dark-fill-tertiary",
                    borderFillPrimary: "border-fill-primary dark:border-dark-fill-primary",
                    borderFillSecondary: "border-fill-secondary dark:border-dark-fill-secondary",
                    borderFillPure: "border-fill-pure dark:border-dark-fill-pure",
                    borderDifficultyHard: "border-difficulty-hard dark:border-dark-difficulty-hard",
                    borderDifficultyMedium: "border-difficulty-medium dark:border-dark-difficulty-medium",
                    borderDifficultyEasy: "border-difficulty-easy dark:border-dark-difficulty-easy",
                    borderBorderSecondary: "border-border-secondary dark:border-dark-border-secondary",
                    borderBorderQuaternary: "border-border-quaternary dark:border-dark-border-quaternary",
                    borderBorderPrimary: "border-border-primary dark:border-dark-border-primary",
                    borderBorderTertiary: "border-border-tertiary dark:border-dark-border-tertiary",
                    borderSpecialRose: "border-special-rose dark:border-dark-special-rose",
                    borderSpecialSunny: "border-special-sunny dark:border-dark-special-sunny",
                    borderSpecialKiwi: "border-special-kiwi dark:border-dark-special-kiwi",
                    borderSpecialSkyler: "border-special-skyler dark:border-dark-special-skyler",
                    borderSpecialLavender: "border-special-lavender dark:border-dark-special-lavender",
                    borderTextQuaternary: "border-text-quaternary dark:border-dark-text-quaternary",
                    borderTextTertiary: "border-text-tertiary dark:border-dark-text-tertiary",
                    borderTextSecondary: "border-text-secondary dark:border-dark-text-secondary",
                    borderTextPrimary: "border-text-primary dark:border-dark-text-primary",
                    borderTextReverse: "border-text-reverse dark:border-dark-text-reverse",
                    borderMessageWarning: "border-message-warning dark:border-dark-message-warning",
                    borderMessageDanger: "border-message-danger dark:border-dark-message-danger",
                    borderMessageSuccess: "border-message-success dark:border-dark-message-success",
                    borderMessagePrimary: "border-message-primary dark:border-dark-message-primary"
                },
                j = {
                    card: "shadow-level1 dark:shadow-dark-level1",
                    commandBar: "shadow-level2 dark:shadow-dark-level2",
                    dropdown: "shadow-level3 dark:shadow-dark-level3",
                    modal: "shadow-level4 dark:shadow-dark-level4",
                    layer1: "shadow-layer1 dark:shadow-dark-layer1",
                    layer2: "shadow-layer2 dark:shadow-dark-layer2",
                    layer3: "shadow-layer3 dark:shadow-dark-layer3"
                },
                D = {
                    labelWhite: "hover:text-white dark:hover:text-white",
                    label1: "hover:text-label-1 dark:hover:text-dark-label-1",
                    groupLabelBlueS: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    label1Group: "group-hover:text-label-1 dark:group-hover:text-dark-label-1",
                    label2: "hover:text-label-2 dark:hover:text-dark-label-2",
                    label2Group: "group-hover:text-label-2 dark:group-hover:text-dark-label-2",
                    labelBlueS: "hover:text-blue-s dark:hover:text-dark-blue-s",
                    labelGray5Group: "group-hover:text-gray-5 dark:group-hover:text-dark-gray-5",
                    labelGray6: "hover:text-gray-6 dark:hover:text-dark-gray-6",
                    labelGray6Group: "group-hover:text-gray-6 dark:group-hover:text-dark-gray-6",
                    labelGrey7: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGray7: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGrey7Group: "group-hover:text-gray-7 dark:group-hover:text-dark-gray-7",
                    labelGrey8: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelGray8: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelGrey8Group: "group-hover:text-gray-8 dark:group-hover:text-dark-gray-8",
                    labelBlueSGroup: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelBlueStandardGroup: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelGreenStandardGroup: "group-hover:text-green-s dark:group-hover:text-dark-green-s",
                    labelRedStandard: "hover:text-red-s dark:hover:text-dark-red-s",
                    labelBrandOrangeGroup: "group-hover:text-brand-orange dark:group-hover:text-dark-brand-orange",
                    bgLayer2: "hover:bg-layer-2 dark:hover:bg-dark-layer-2",
                    bgBlue0: "hover:bg-blue-0 dark:hover:bg-dark-blue-0",
                    bgBlue1: "hover:bg-blue-1 dark:hover:bg-dark-blue-1",
                    bgGray3: "hover:bg-gray-3 dark:hover:bg-dark-gray-3",
                    bgGray6: "hover:bg-gray-6 dark:hover:bg-dark-gray-6",
                    bgGray6Group: "group-hover:bg-gray-6 dark:group-hover:bg-dark-gray-6",
                    bgGreen3: "hover:bg-green-3 dark:hover:bg-dark-green-3",
                    bgTransparent: "hover:bg-transparent dark:hover:bg-transparent",
                    bgTransparentGroup: "group-hover:bg-transparent dark:group-hover:bg-transparent",
                    bgYellow0: "hover:bg-yellow-0 dark:hover:bg-dark-yellow-0",
                    bgRedStandardGroup: "group-hover:bg-red-s dark:group-hover:bg-dark-red-s",
                    bgBrandOrangeGroup: "group-hover:bg-brand-orange dark:group-hover:bg-dark-brand-orange",
                    bgFixedWhiteFocus: "focus:bg-white dark:focus:bg-white",
                    fill2: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    fill2Focus: "focus:bg-fill-2 dark:focus:bg-dark-fill-2",
                    fill3: "hover:bg-fill-3 dark:hover:bg-dark-fill-3",
                    fill4: "hover:bg-fill-4 dark:hover:bg-dark-fill-4",
                    bgLayer2Group: "group-hover:bg-layer-2 dark:group-hover:bg-dark-layer-3",
                    fill3Focus: "focus:bg-fill-3 dark:focus:bg-dark-fill-3",
                    bgBlueStandardFocus: "focus:bg-blue-s dark:focus:bg-dark-blue-s",
                    borderBlueStandardFocus: "focus:border-blue-s dark:focus:border-dark-blue-s",
                    labelTransparent: "hover:text-transparent dark:hover:text-dark-transparent",
                    labelCurrent: "hover:text-current dark:hover:text-dark-current",
                    labelYellow10: "hover:text-yellow-10 dark:hover:text-dark-yellow-10",
                    labelYellow20: "hover:text-yellow-20 dark:hover:text-dark-yellow-20",
                    labelYellow40: "hover:text-yellow-40 dark:hover:text-dark-yellow-40",
                    labelYellow60: "hover:text-yellow-60 dark:hover:text-dark-yellow-60",
                    labelYellow80: "hover:text-yellow-80 dark:hover:text-dark-yellow-80",
                    labelYellow100: "hover:text-yellow-100 dark:hover:text-dark-yellow-100",
                    labelGreen10: "hover:text-green-10 dark:hover:text-dark-green-10",
                    labelGreen20: "hover:text-green-20 dark:hover:text-dark-green-20",
                    labelGreen40: "hover:text-green-40 dark:hover:text-dark-green-40",
                    labelGreen60: "hover:text-green-60 dark:hover:text-dark-green-60",
                    labelGreen80: "hover:text-green-80 dark:hover:text-dark-green-80",
                    labelGreen100: "hover:text-green-100 dark:hover:text-dark-green-100",
                    labelMagenta10: "hover:text-magenta-10 dark:hover:text-dark-magenta-10",
                    labelMagenta20: "hover:text-magenta-20 dark:hover:text-dark-magenta-20",
                    labelMagenta40: "hover:text-magenta-40 dark:hover:text-dark-magenta-40",
                    labelMagenta60: "hover:text-magenta-60 dark:hover:text-dark-magenta-60",
                    labelMagenta80: "hover:text-magenta-80 dark:hover:text-dark-magenta-80",
                    labelMagenta100: "hover:text-magenta-100 dark:hover:text-dark-magenta-100",
                    labelGray10: "hover:text-gray-10 dark:hover:text-dark-gray-10",
                    labelGray20: "hover:text-gray-20 dark:hover:text-dark-gray-20",
                    labelGray40: "hover:text-gray-40 dark:hover:text-dark-gray-40",
                    labelGray60: "hover:text-gray-60 dark:hover:text-dark-gray-60",
                    labelGray80: "hover:text-gray-80 dark:hover:text-dark-gray-80",
                    labelGray100: "hover:text-gray-100 dark:hover:text-dark-gray-100",
                    labelTeal10: "hover:text-teal-10 dark:hover:text-dark-teal-10",
                    labelTeal20: "hover:text-teal-20 dark:hover:text-dark-teal-20",
                    labelTeal40: "hover:text-teal-40 dark:hover:text-dark-teal-40",
                    labelTeal60: "hover:text-teal-60 dark:hover:text-dark-teal-60",
                    labelTeal80: "hover:text-teal-80 dark:hover:text-dark-teal-80",
                    labelTeal100: "hover:text-teal-100 dark:hover:text-dark-teal-100",
                    labelBlue10: "hover:text-blue-10 dark:hover:text-dark-blue-10",
                    labelBlue20: "hover:text-blue-20 dark:hover:text-dark-blue-20",
                    labelBlue40: "hover:text-blue-40 dark:hover:text-dark-blue-40",
                    labelBlue60: "hover:text-blue-60 dark:hover:text-dark-blue-60",
                    labelBlue80: "hover:text-blue-80 dark:hover:text-dark-blue-80",
                    labelBlue100: "hover:text-blue-100 dark:hover:text-dark-blue-100",
                    labelPurple10: "hover:text-purple-10 dark:hover:text-dark-purple-10",
                    labelPurple20: "hover:text-purple-20 dark:hover:text-dark-purple-20",
                    labelPurple40: "hover:text-purple-40 dark:hover:text-dark-purple-40",
                    labelPurple60: "hover:text-purple-60 dark:hover:text-dark-purple-60",
                    labelPurple80: "hover:text-purple-80 dark:hover:text-dark-purple-80",
                    labelPurple100: "hover:text-purple-100 dark:hover:text-dark-purple-100",
                    labelRed10: "hover:text-red-10 dark:hover:text-dark-red-10",
                    labelRed20: "hover:text-red-20 dark:hover:text-dark-red-20",
                    labelRed40: "hover:text-red-40 dark:hover:text-dark-red-40",
                    labelRed60: "hover:text-red-60 dark:hover:text-dark-red-60",
                    labelRed80: "hover:text-red-80 dark:hover:text-dark-red-80",
                    labelRed100: "hover:text-red-100 dark:hover:text-dark-red-100",
                    labelFixedWhite: "hover:text-fixed-white dark:hover:text-dark-fixed-white",
                    labelFixedBlack: "hover:text-fixed-black dark:hover:text-dark-fixed-black",
                    labelBrandBlack: "hover:text-brand-black dark:hover:text-dark-brand-black",
                    labelBrandOrange: "hover:text-brand-orange dark:hover:text-dark-brand-orange",
                    labelBrandGray: "hover:text-brand-gray dark:hover:text-dark-brand-gray",
                    labelBrandWhite: "hover:text-brand-white dark:hover:text-dark-brand-white",
                    labelLayerPure: "hover:text-layer-pure dark:hover:text-dark-layer-pure",
                    labelLayerBackground: "hover:text-layer-background dark:hover:text-dark-layer-background",
                    labelLayer01: "hover:text-layer-01 dark:hover:text-dark-layer-01",
                    labelLayer02: "hover:text-layer-02 dark:hover:text-dark-layer-02",
                    labelLayer03: "hover:text-layer-03 dark:hover:text-dark-layer-03",
                    labelFillQuaternary: "hover:text-fill-quaternary dark:hover:text-dark-fill-quaternary",
                    labelFillTertiary: "hover:text-fill-tertiary dark:hover:text-dark-fill-tertiary",
                    labelFillPrimary: "hover:text-fill-primary dark:hover:text-dark-fill-primary",
                    labelFillSecondary: "hover:text-fill-secondary dark:hover:text-dark-fill-secondary",
                    labelFillPure: "hover:text-fill-pure dark:hover:text-dark-fill-pure",
                    labelDifficultyHard: "hover:text-difficulty-hard dark:hover:text-dark-difficulty-hard",
                    labelDifficultyMedium: "hover:text-difficulty-medium dark:hover:text-dark-difficulty-medium",
                    labelDifficultyEasy: "hover:text-difficulty-easy dark:hover:text-dark-difficulty-easy",
                    labelBorderSecondary: "hover:text-border-secondary dark:hover:text-dark-border-secondary",
                    labelBorderQuaternary: "hover:text-border-quaternary dark:hover:text-dark-border-quaternary",
                    labelBorderPrimary: "hover:text-border-primary dark:hover:text-dark-border-primary",
                    labelBorderTertiary: "hover:text-border-tertiary dark:hover:text-dark-border-tertiary",
                    labelSpecialRose: "hover:text-special-rose dark:hover:text-dark-special-rose",
                    labelSpecialSunny: "hover:text-special-sunny dark:hover:text-dark-special-sunny",
                    labelSpecialKiwi: "hover:text-special-kiwi dark:hover:text-dark-special-kiwi",
                    labelSpecialSkyler: "hover:text-special-skyler dark:hover:text-dark-special-skyler",
                    labelSpecialLavender: "hover:text-special-lavender dark:hover:text-dark-special-lavender",
                    labelTextQuaternary: "hover:text-text-quaternary dark:hover:text-dark-text-quaternary",
                    labelTextTertiary: "hover:text-text-tertiary dark:hover:text-dark-text-tertiary",
                    labelTextSecondary: "hover:text-text-secondary dark:hover:text-dark-text-secondary",
                    labelTextPrimary: "hover:text-text-primary dark:hover:text-dark-text-primary",
                    labelTextReverse: "hover:text-text-reverse dark:hover:text-dark-text-reverse",
                    labelMessageWarning: "hover:text-message-warning dark:hover:text-dark-message-warning",
                    labelMessageDanger: "hover:text-message-danger dark:hover:text-dark-message-danger",
                    labelMessageSuccess: "hover:text-message-success dark:hover:text-dark-message-success",
                    labelMessagePrimary: "hover:text-message-primary dark:hover:text-dark-message-primary",
                    bgTransparent: "hover:bg-transparent dark:hover:bg-dark-transparent",
                    bgCurrent: "hover:bg-current dark:hover:bg-dark-current",
                    bgYellow10: "hover:bg-yellow-10 dark:hover:bg-dark-yellow-10",
                    bgYellow20: "hover:bg-yellow-20 dark:hover:bg-dark-yellow-20",
                    bgYellow40: "hover:bg-yellow-40 dark:hover:bg-dark-yellow-40",
                    bgYellow60: "hover:bg-yellow-60 dark:hover:bg-dark-yellow-60",
                    bgYellow80: "hover:bg-yellow-80 dark:hover:bg-dark-yellow-80",
                    bgYellow100: "hover:bg-yellow-100 dark:hover:bg-dark-yellow-100",
                    bgGreen10: "hover:bg-green-10 dark:hover:bg-dark-green-10",
                    bgGreen20: "hover:bg-green-20 dark:hover:bg-dark-green-20",
                    bgGreen40: "hover:bg-green-40 dark:hover:bg-dark-green-40",
                    bgGreen60: "hover:bg-green-60 dark:hover:bg-dark-green-60",
                    bgGreen80: "hover:bg-green-80 dark:hover:bg-dark-green-80",
                    bgGreen100: "hover:bg-green-100 dark:hover:bg-dark-green-100",
                    bgMagenta10: "hover:bg-magenta-10 dark:hover:bg-dark-magenta-10",
                    bgMagenta20: "hover:bg-magenta-20 dark:hover:bg-dark-magenta-20",
                    bgMagenta40: "hover:bg-magenta-40 dark:hover:bg-dark-magenta-40",
                    bgMagenta60: "hover:bg-magenta-60 dark:hover:bg-dark-magenta-60",
                    bgMagenta80: "hover:bg-magenta-80 dark:hover:bg-dark-magenta-80",
                    bgMagenta100: "hover:bg-magenta-100 dark:hover:bg-dark-magenta-100",
                    bgGray10: "hover:bg-gray-10 dark:hover:bg-dark-gray-10",
                    bgGray20: "hover:bg-gray-20 dark:hover:bg-dark-gray-20",
                    bgGray40: "hover:bg-gray-40 dark:hover:bg-dark-gray-40",
                    bgGray60: "hover:bg-gray-60 dark:hover:bg-dark-gray-60",
                    bgGray80: "hover:bg-gray-80 dark:hover:bg-dark-gray-80",
                    bgGray100: "hover:bg-gray-100 dark:hover:bg-dark-gray-100",
                    bgTeal10: "hover:bg-teal-10 dark:hover:bg-dark-teal-10",
                    bgTeal20: "hover:bg-teal-20 dark:hover:bg-dark-teal-20",
                    bgTeal40: "hover:bg-teal-40 dark:hover:bg-dark-teal-40",
                    bgTeal60: "hover:bg-teal-60 dark:hover:bg-dark-teal-60",
                    bgTeal80: "hover:bg-teal-80 dark:hover:bg-dark-teal-80",
                    bgTeal100: "hover:bg-teal-100 dark:hover:bg-dark-teal-100",
                    bgBlue10: "hover:bg-blue-10 dark:hover:bg-dark-blue-10",
                    bgBlue20: "hover:bg-blue-20 dark:hover:bg-dark-blue-20",
                    bgBlue40: "hover:bg-blue-40 dark:hover:bg-dark-blue-40",
                    bgBlue60: "hover:bg-blue-60 dark:hover:bg-dark-blue-60",
                    bgBlue80: "hover:bg-blue-80 dark:hover:bg-dark-blue-80",
                    bgBlue100: "hover:bg-blue-100 dark:hover:bg-dark-blue-100",
                    bgPurple10: "hover:bg-purple-10 dark:hover:bg-dark-purple-10",
                    bgPurple20: "hover:bg-purple-20 dark:hover:bg-dark-purple-20",
                    bgPurple40: "hover:bg-purple-40 dark:hover:bg-dark-purple-40",
                    bgPurple60: "hover:bg-purple-60 dark:hover:bg-dark-purple-60",
                    bgPurple80: "hover:bg-purple-80 dark:hover:bg-dark-purple-80",
                    bgPurple100: "hover:bg-purple-100 dark:hover:bg-dark-purple-100",
                    bgRed10: "hover:bg-red-10 dark:hover:bg-dark-red-10",
                    bgRed20: "hover:bg-red-20 dark:hover:bg-dark-red-20",
                    bgRed40: "hover:bg-red-40 dark:hover:bg-dark-red-40",
                    bgRed60: "hover:bg-red-60 dark:hover:bg-dark-red-60",
                    bgRed80: "hover:bg-red-80 dark:hover:bg-dark-red-80",
                    bgRed100: "hover:bg-red-100 dark:hover:bg-dark-red-100",
                    bgFixedWhite: "hover:bg-fixed-white dark:hover:bg-dark-fixed-white",
                    bgFixedBlack: "hover:bg-fixed-black dark:hover:bg-dark-fixed-black",
                    bgBrandBlack: "hover:bg-brand-black dark:hover:bg-dark-brand-black",
                    bgBrandOrange: "hover:bg-brand-orange dark:hover:bg-dark-brand-orange",
                    bgBrandGray: "hover:bg-brand-gray dark:hover:bg-dark-brand-gray",
                    bgBrandWhite: "hover:bg-brand-white dark:hover:bg-dark-brand-white",
                    bgLayerPure: "hover:bg-layer-pure dark:hover:bg-dark-layer-pure",
                    bgLayerBackground: "hover:bg-layer-background dark:hover:bg-dark-layer-background",
                    bgLayer01: "hover:bg-layer-01 dark:hover:bg-dark-layer-01",
                    bgLayer02: "hover:bg-layer-02 dark:hover:bg-dark-layer-02",
                    bgLayer03: "hover:bg-layer-03 dark:hover:bg-dark-layer-03",
                    bgFillQuaternary: "hover:bg-fill-quaternary dark:hover:bg-dark-fill-quaternary",
                    bgFillTertiary: "hover:bg-fill-tertiary dark:hover:bg-dark-fill-tertiary",
                    bgFillPrimary: "hover:bg-fill-primary dark:hover:bg-dark-fill-primary",
                    bgFillSecondary: "hover:bg-fill-secondary dark:hover:bg-dark-fill-secondary",
                    bgFillPure: "hover:bg-fill-pure dark:hover:bg-dark-fill-pure",
                    bgDifficultyHard: "hover:bg-difficulty-hard dark:hover:bg-dark-difficulty-hard",
                    bgDifficultyMedium: "hover:bg-difficulty-medium dark:hover:bg-dark-difficulty-medium",
                    bgDifficultyEasy: "hover:bg-difficulty-easy dark:hover:bg-dark-difficulty-easy",
                    bgBorderSecondary: "hover:bg-border-secondary dark:hover:bg-dark-border-secondary",
                    bgBorderQuaternary: "hover:bg-border-quaternary dark:hover:bg-dark-border-quaternary",
                    bgBorderPrimary: "hover:bg-border-primary dark:hover:bg-dark-border-primary",
                    bgBorderTertiary: "hover:bg-border-tertiary dark:hover:bg-dark-border-tertiary",
                    bgSpecialRose: "hover:bg-special-rose dark:hover:bg-dark-special-rose",
                    bgSpecialSunny: "hover:bg-special-sunny dark:hover:bg-dark-special-sunny",
                    bgSpecialKiwi: "hover:bg-special-kiwi dark:hover:bg-dark-special-kiwi",
                    bgSpecialSkyler: "hover:bg-special-skyler dark:hover:bg-dark-special-skyler",
                    bgSpecialLavender: "hover:bg-special-lavender dark:hover:bg-dark-special-lavender",
                    bgTextQuaternary: "hover:bg-text-quaternary dark:hover:bg-dark-text-quaternary",
                    bgTextTertiary: "hover:bg-text-tertiary dark:hover:bg-dark-text-tertiary",
                    bgTextSecondary: "hover:bg-text-secondary dark:hover:bg-dark-text-secondary",
                    bgTextPrimary: "hover:bg-text-primary dark:hover:bg-dark-text-primary",
                    bgTextReverse: "hover:bg-text-reverse dark:hover:bg-dark-text-reverse",
                    bgMessageWarning: "hover:bg-message-warning dark:hover:bg-dark-message-warning",
                    bgMessageDanger: "hover:bg-message-danger dark:hover:bg-dark-message-danger",
                    bgMessageSuccess: "hover:bg-message-success dark:hover:bg-dark-message-success",
                    bgMessagePrimary: "hover:bg-message-primary dark:hover:bg-dark-message-primary",
                    borderTransparent: "hover:border-transparent dark:hover:border-dark-transparent",
                    borderCurrent: "hover:border-current dark:hover:border-dark-current",
                    borderYellow10: "hover:border-yellow-10 dark:hover:border-dark-yellow-10",
                    borderYellow20: "hover:border-yellow-20 dark:hover:border-dark-yellow-20",
                    borderYellow40: "hover:border-yellow-40 dark:hover:border-dark-yellow-40",
                    borderYellow60: "hover:border-yellow-60 dark:hover:border-dark-yellow-60",
                    borderYellow80: "hover:border-yellow-80 dark:hover:border-dark-yellow-80",
                    borderYellow100: "hover:border-yellow-100 dark:hover:border-dark-yellow-100",
                    borderGreen10: "hover:border-green-10 dark:hover:border-dark-green-10",
                    borderGreen20: "hover:border-green-20 dark:hover:border-dark-green-20",
                    borderGreen40: "hover:border-green-40 dark:hover:border-dark-green-40",
                    borderGreen60: "hover:border-green-60 dark:hover:border-dark-green-60",
                    borderGreen80: "hover:border-green-80 dark:hover:border-dark-green-80",
                    borderGreen100: "hover:border-green-100 dark:hover:border-dark-green-100",
                    borderMagenta10: "hover:border-magenta-10 dark:hover:border-dark-magenta-10",
                    borderMagenta20: "hover:border-magenta-20 dark:hover:border-dark-magenta-20",
                    borderMagenta40: "hover:border-magenta-40 dark:hover:border-dark-magenta-40",
                    borderMagenta60: "hover:border-magenta-60 dark:hover:border-dark-magenta-60",
                    borderMagenta80: "hover:border-magenta-80 dark:hover:border-dark-magenta-80",
                    borderMagenta100: "hover:border-magenta-100 dark:hover:border-dark-magenta-100",
                    borderGray10: "hover:border-gray-10 dark:hover:border-dark-gray-10",
                    borderGray20: "hover:border-gray-20 dark:hover:border-dark-gray-20",
                    borderGray40: "hover:border-gray-40 dark:hover:border-dark-gray-40",
                    borderGray60: "hover:border-gray-60 dark:hover:border-dark-gray-60",
                    borderGray80: "hover:border-gray-80 dark:hover:border-dark-gray-80",
                    borderGray100: "hover:border-gray-100 dark:hover:border-dark-gray-100",
                    borderTeal10: "hover:border-teal-10 dark:hover:border-dark-teal-10",
                    borderTeal20: "hover:border-teal-20 dark:hover:border-dark-teal-20",
                    borderTeal40: "hover:border-teal-40 dark:hover:border-dark-teal-40",
                    borderTeal60: "hover:border-teal-60 dark:hover:border-dark-teal-60",
                    borderTeal80: "hover:border-teal-80 dark:hover:border-dark-teal-80",
                    borderTeal100: "hover:border-teal-100 dark:hover:border-dark-teal-100",
                    borderBlue10: "hover:border-blue-10 dark:hover:border-dark-blue-10",
                    borderBlue20: "hover:border-blue-20 dark:hover:border-dark-blue-20",
                    borderBlue40: "hover:border-blue-40 dark:hover:border-dark-blue-40",
                    borderBlue60: "hover:border-blue-60 dark:hover:border-dark-blue-60",
                    borderBlue80: "hover:border-blue-80 dark:hover:border-dark-blue-80",
                    borderBlue100: "hover:border-blue-100 dark:hover:border-dark-blue-100",
                    borderPurple10: "hover:border-purple-10 dark:hover:border-dark-purple-10",
                    borderPurple20: "hover:border-purple-20 dark:hover:border-dark-purple-20",
                    borderPurple40: "hover:border-purple-40 dark:hover:border-dark-purple-40",
                    borderPurple60: "hover:border-purple-60 dark:hover:border-dark-purple-60",
                    borderPurple80: "hover:border-purple-80 dark:hover:border-dark-purple-80",
                    borderPurple100: "hover:border-purple-100 dark:hover:border-dark-purple-100",
                    borderRed10: "hover:border-red-10 dark:hover:border-dark-red-10",
                    borderRed20: "hover:border-red-20 dark:hover:border-dark-red-20",
                    borderRed40: "hover:border-red-40 dark:hover:border-dark-red-40",
                    borderRed60: "hover:border-red-60 dark:hover:border-dark-red-60",
                    borderRed80: "hover:border-red-80 dark:hover:border-dark-red-80",
                    borderRed100: "hover:border-red-100 dark:hover:border-dark-red-100",
                    borderFixedWhite: "hover:border-fixed-white dark:hover:border-dark-fixed-white",
                    borderFixedBlack: "hover:border-fixed-black dark:hover:border-dark-fixed-black",
                    borderBrandBlack: "hover:border-brand-black dark:hover:border-dark-brand-black",
                    borderBrandOrange: "hover:border-brand-orange dark:hover:border-dark-brand-orange",
                    borderBrandGray: "hover:border-brand-gray dark:hover:border-dark-brand-gray",
                    borderBrandWhite: "hover:border-brand-white dark:hover:border-dark-brand-white",
                    borderLayerPure: "hover:border-layer-pure dark:hover:border-dark-layer-pure",
                    borderLayerBackground: "hover:border-layer-background dark:hover:border-dark-layer-background",
                    borderLayer01: "hover:border-layer-01 dark:hover:border-dark-layer-01",
                    borderLayer02: "hover:border-layer-02 dark:hover:border-dark-layer-02",
                    borderLayer03: "hover:border-layer-03 dark:hover:border-dark-layer-03",
                    borderFillQuaternary: "hover:border-fill-quaternary dark:hover:border-dark-fill-quaternary",
                    borderFillTertiary: "hover:border-fill-tertiary dark:hover:border-dark-fill-tertiary",
                    borderFillPrimary: "hover:border-fill-primary dark:hover:border-dark-fill-primary",
                    borderFillSecondary: "hover:border-fill-secondary dark:hover:border-dark-fill-secondary",
                    borderFillPure: "hover:border-fill-pure dark:hover:border-dark-fill-pure",
                    borderDifficultyHard: "hover:border-difficulty-hard dark:hover:border-dark-difficulty-hard",
                    borderDifficultyMedium: "hover:border-difficulty-medium dark:hover:border-dark-difficulty-medium",
                    borderDifficultyEasy: "hover:border-difficulty-easy dark:hover:border-dark-difficulty-easy",
                    borderBorderSecondary: "hover:border-border-secondary dark:hover:border-dark-border-secondary",
                    borderBorderQuaternary: "hover:border-border-quaternary dark:hover:border-dark-border-quaternary",
                    borderBorderPrimary: "hover:border-border-primary dark:hover:border-dark-border-primary",
                    borderBorderTertiary: "hover:border-border-tertiary dark:hover:border-dark-border-tertiary",
                    borderSpecialRose: "hover:border-special-rose dark:hover:border-dark-special-rose",
                    borderSpecialSunny: "hover:border-special-sunny dark:hover:border-dark-special-sunny",
                    borderSpecialKiwi: "hover:border-special-kiwi dark:hover:border-dark-special-kiwi",
                    borderSpecialSkyler: "hover:border-special-skyler dark:hover:border-dark-special-skyler",
                    borderSpecialLavender: "hover:border-special-lavender dark:hover:border-dark-special-lavender",
                    borderTextQuaternary: "hover:border-text-quaternary dark:hover:border-dark-text-quaternary",
                    borderTextTertiary: "hover:border-text-tertiary dark:hover:border-dark-text-tertiary",
                    borderTextSecondary: "hover:border-text-secondary dark:hover:border-dark-text-secondary",
                    borderTextPrimary: "hover:border-text-primary dark:hover:border-dark-text-primary",
                    borderTextReverse: "hover:border-text-reverse dark:hover:border-dark-text-reverse",
                    borderMessageWarning: "hover:border-message-warning dark:hover:border-dark-message-warning",
                    borderMessageDanger: "hover:border-message-danger dark:hover:border-dark-message-danger",
                    borderMessageSuccess: "hover:border-message-success dark:hover:border-dark-message-success",
                    borderMessagePrimary: "hover:border-message-primary dark:hover:border-dark-message-primary"
                },
                U = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M15.392 7.765l5.695.832a.942.942 0 01.521 1.607l-4.12 4.014.972 5.67a.942.942 0 01-1.367.993L12 18.203 6.907 20.88a.942.942 0 01-1.367-.993l.972-5.67-4.12-4.014a.942.942 0 01.52-1.607l5.696-.832 2.547-5.16a.942.942 0 011.69 0l2.547 5.16z",
                        clipRule: "evenodd"
                    }))
                })),
                Q = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 12a5 5 0 110-10 5 5 0 010 10zm-9 9v-2a5 5 0 015-5h8a5 5 0 015 5v2a1 1 0 01-1 1H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    }))
                })),
                Y = {
                    navItem: "flex items-center text-base leading-[22px] cursor-pointer",
                    navItemPrimary: `${O.label2}`,
                    navItemBrandOrange: "!text-brand-orange border-brand-orange",
                    navItemHover: O.label1Hover,
                    navItemActive: "border-opacity-1 dark:border-opacity-1",
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95"
                    },
                    menuItems: `flex flex-col absolute top-[36px] z-dropdown rounded-lg p-2 overflow-auto focus:outline-none text-sm ${j.commandBar}`,
                    menuItemsBg: O.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 px-2 whitespace-nowrap",
                    menuItemText: O.label1,
                    menuItemHover: `${O.fill4Hover} rounded`,
                    navIcon: "rounded w-8 h-8 relative flex items-center justify-center",
                    menuButton: "flex items-center focus:outline-none",
                    popoverTransition: {
                        enter: "transition ease-in duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    drawerTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "transform translate-y-0",
                        enterTo: "transform translate-y-1",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform translate-y-1",
                        leaveTo: "transform translate-y-0"
                    }
                },
                I = () => t.createElement("div", {
                    className: "absolute left-0 top-0 h-[296px] w-full overflow-hidden rounded-[13px]"
                }, t.createElement("div", {
                    className: "h-42 from-fixed-orange absolute left-0 top-0 w-full bg-gradient-to-b opacity-20 dark:opacity-50"
                }), t.createElement("div", {
                    className: `h-42 absolute w-full opacity-20 ${c}`
                }), t.createElement("div", {
                    className: `h-42 absolute w-full opacity-50 dark:opacity-20  ${u}`
                })),
                _ = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707z",
                        clipRule: "evenodd"
                    }))
                }));
            const V = e => {
                    let r = "";
                    if (0 === e) return r;
                    const a = Date.now();
                    if (e && e > a) {
                        r = (e => {
                            const r = Math.floor(e / 86400);
                            return r < 1 ? "Plus \u4f1a\u5458\u4e0d\u8db3 1 \u5929 " : `Plus \u4f1a\u5458\u5269\u4f59 ${r} \u5929 `
                        })(Math.round((e - a) / 1e3))
                    }
                    return r
                },
                W = ({
                    noPremiumLink: e,
                    noPremiumClick: r,
                    isEN: a,
                    userData: {
                        isPremium: l,
                        username: o,
                        name: n,
                        userSlug: b,
                        avatar: i,
                        premiumExpiredAt: s,
                        pendant: g
                    }
                }) => {
                    const k = n || o,
                        c = a ? o : b,
                        u = a ? "Access all features with our Premium subscription!" : "\u5347\u7ea7 Plus \u4f1a\u5458\u4eab\u4e13\u5c5e\u7279\u6743",
                        h = (0, t.useMemo)((() => e ? t.createElement("a", {
                            href: e,
                            className: d()("wrap hover:text-brand-orange text-brand-orange cursor-pointer overflow-auto whitespace-normal")
                        }, u) : t.createElement("a", {
                            onClick: r || void 0,
                            className: d()("hover:text-brand-orange cursor-pointer")
                        }, u)), []);
                    return t.createElement("div", {
                        className: d()("flex shrink-0 items-center  px-4 pb-4  pt-1 md:px-[1px]")
                    }, t.createElement("a", {
                        href: `/u/${c||""}`,
                        className: d()("relative flex h-14 w-14 shrink-0 cursor-pointer")
                    }, t.createElement("img", {
                        src: i || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACgAKADASIAAhEBAxEB/8QAHAABAQADAAMBAAAAAAAAAAAAAAECBgcDBQgE/8QANRAAAgEDAgUCBAQFBQEAAAAAAAECAwQRBSEGBxIxUUFhIzJxgSKhsdETFBVy0kJSgpGS4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD64yG8DAAJ5AGQJkZ8FAEz5GUUYAfYAAAAAyBgAR5KAAIslAAjyUAAAAAAAAAAAAB+vT9IvdVn02drVuGu/RFtL6s2G35Ya9Xim6FOl7VKiyBqYNsr8r9eoxyqFOr7QqrJr+o6Lf6TPpvLWrb+HOOz+/YD8YAAAAAAAAAAAZAAAAAA99gMqdOVapGEIynOTwoxWW/ZHUOEuVlOnCF1q/xKj3jbJ/hX9z9Ty8seDo2ttDVruClXqr4MWvkj5+rOhJ4WAPHbUKVrTjSo04Uqce0YLCR5jFLDK3gBnB461Cnc03CpTjUhLvGayn9jPuXONgOdcV8rKVzCdzpKVCst5W7+WX08HLatGpQqzpVYOnUg8SjJYafg+lm8rBofMzg6OpWctTtopXVGOaiS+ePn6oDkQyRMuAIl2LnBM+zHf0Aucgnb0GfZgUBkWPQCgACZ3Pa8MaT/AFvXbS0fyTlmf9q3Z6p+pvvKC2VXXLus1n+FQ2+rYHXKcI04KEUoxjskuyRk1kFAxTyytZIu5kBj2GRLuVLYBjG5i8TTT7MyfYiWQOAcY6OtD4hu7aKxS6uuC8Re56U6FzktVT1PT662dWlKD/4tf5HPQD2InkoAAAAAAAAAdzoXJqso6pqFN7OVGMl9n/8ATnmNzZOX+qrSuJ7WU3inVf8ACln37fngDvBi1uWPYZApGsjOSgY4Ywyt4JuwGGMMr2I5Act5zVFK50ql6xhUk/u4/wCLOcLsbTzJ1VanxPWUJZhbx/gpryu/55NWzkAAAAwABNygAAAAIpSi01s14KTAHduBeKo8SaRHrkv5yilGtHz4l9GbI2fOuia1c6Bf07u1n0zjs4vtNeGdr4Y4wsuJ6OaU1SuUvx0JPdfTygPfrYqeTEqAS7jOAypbARv3Nf4z4mhwzpM6qkndVMwow9/P0R5eJeLbLhm2c69RTrtfgoxf4pfsjiWv69dcRahO6unu9owXaC8ID105yqTlOT6pSeW36sAAAPuAAAAAAAAAAyH+Z0bgbluriEL/AFWD6HiVO2e2V5l+wGt8NcC6jxK1UpxVC19a1VbP6L1On8P8vNL0GUKyg7m5juq1T0flL0NmpxjSgoRSjFLCSWEjLOwBFzkxKngBLuVPYncdIGscQ8vtM1+U6zjK3upbutTfd+69Tl/EvAuo8NN1KkVcWvpXprb7r0O7pe5KlNVYShJKUZLDTWU0B8zL1KdH465bq2jUv9Kg3TWZVLZb9PvH9jnHt6gRlAAD7AAAAAAPb8KaBPiPWaNpFtU89VWSXyxXcDauWnBUdQmtUvoZt4P4NOS2m/L9kdXx09jC3t6dpQhRoxUKdNKMYpdkjyLd7gEsl6RnAzsBit2ZdJiti9QDsMsMJ4AuMbkyxnKYTwwGOrucn5l8FR0+b1Sxhi3m/jU4raD8r2Z1jODx3NvSvKFSjVgp06kXGUWu6YHzUD2/FegT4c1mtaSy6eeqlJ/6ovseoAAAAAAB2LlZoX9O0SV7OPxrt5T9VBdl+rOS6dZT1LULe1htKtUjBNemWfRtrbwtbWlRprFOnFRivZIDy5EiJYZWsgYmS7E6SrZAYlXcdJUsMBkZRJdxjIGRMoPdGPcDLIyFsRrLA0jmnoS1DRFewj8a0fU3jdwfdfozjp9K3VtC7t6tGrHqp1IuMl5T2PnLUbKWnX9xaz+ajNwb84fcD84AAETyUYwBtfLKyV5xZQk1mNGEqn5YX6nb+yOUcm6HVqWo1cfJSjHP1b/Y6uuwBkyZEl2AnUM5IZLsBOoZC7lxgBjIwRvDGWA9slxgPsTLAyBFuRtpgU4hzNsf5PiutJLEa8I1F/1h/oduycp5x0OjUdOrf76Uof8Alr/IDngAA//Z",
                        alt: "Avatar",
                        className: "h-14 w-14 rounded-full object-cover"
                    })), t.createElement("div", {
                        className: d()("pl-3")
                    }, t.createElement("a", {
                        href: `/u/${c||""}`,
                        className: d()(`flex items-center text-xl font-semibold ${O.label1Hover}`, O.label1),
                        translate: "no"
                    }, k, g && t.createElement("span", {
                        className: d()("ml-2 inline")
                    }, t.createElement("img", {
                        alt: g,
                        src: g,
                        className: "h-[20px]"
                    }))), t.createElement("div", {
                        className: "text-brand-orange mt-1 flex items-center text-xs"
                    }, l ? t.createElement("div", {
                        className: d()("flex items-center")
                    }, t.createElement("div", {
                        className: d()(O.label3, "whitespace-nowrap")
                    }, a ? t.createElement("span", {
                        className: "text-brand-orange"
                    }, "Premium user") : V(s || 0)), !a && t.createElement("a", {
                        onClick: r || void 0,
                        className: d()("hover:text-brand-orange ml-1 whitespace-nowrap")
                    }, "\u7eed\u8ba2")) : h, !a && t.createElement("div", {
                        className: d()("flex items-center space-x-1")
                    }, t.createElement(_, {
                        className: "h-4 w-4"
                    }), t.createElement("a", {
                        href: "/coupons"
                    }, t.createElement("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF8SURBVHgB3VM7TsNAEH3j+AC+ABKcIEkXKTVCUEFBh5ScAJyGnpYm4QQkEgUSRQQNBQUNRUo4AUH0KFS2kniH8f78EblANop3PZ/33syOga1d5A48uxyCqY8AkTFYr9lZflQYfNaIOtcDD8Rv5z0QjXWCYpLzBl5mm0IFeHBM3eFjqP2rdE+UuIAqaaHbJpZt8mBqy8ECIWVkPoBtPV/C1garV7E1DQh7VE/IStMaoHQ5Qajy3vRFfWRj57T/sOCX04VPc4o0GX7lMEYYTDwQHd7PZRvw89EH0LitlLdOqwrcW0AxHTxNnCFEeamVBC/dLZmVJabBXLuErHohGoinnV3pR4xV0kPBbxUlOQD/06MRT7stQbyhk9ncKFLrHOCiMjxMEU9bEbJUSJwU69dTQNJTjuWf9/AqtH0QVuaamiYUfmQ2yJdJjgTlIaWiR1ny7gF0LAP1qaTyHDm/7I3ws8wOvtuRT0TFcMLIIdbKcopACwTBmM6+B9ju9QdQGJwycipw/wAAAABJRU5ErkJggg==",
                        alt: "coupon",
                        className: "h-4 w-4"
                    }))))))
                },
                q = ({
                    children: e,
                    category: r
                }) => {
                    const a = (0, t.useCallback)((() => r.track && r.track()), [r.track]);
                    return t.createElement("a", {
                        href: r.url,
                        onClick: a,
                        target: "__blank",
                        className: d()(S, H, "flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-[13px]")
                    }, e)
                },
                Z = ({
                    categories: e
                }) => t.createElement("div", {
                    className: d()("flex shrink-0 justify-between space-x-2 overflow-x-auto px-4 pb-3 md:grid md:grid-cols-3 md:gap-3 md:space-x-0 md:px-0 md:pb-0")
                }, e.map(((e, r) => t.createElement(q, {
                    key: r,
                    category: e
                }, t.createElement("div", {
                    className: d()("relative mb-2 mt-3 h-9 w-10")
                }, t.createElement("img", {
                    alt: e.key,
                    src: e.img,
                    className: "w-full object-cover"
                })), t.createElement("div", {
                    className: d()(B, "mb-2 text-xs")
                }, e.name))))),
                z = ({
                    icon: e,
                    content: r,
                    useDangerous: a
                }) => t.createElement(t.Fragment, null, e && t.createElement("div", {
                    className: d()("leading-none", a ? O.labelMessageDanger : B)
                }, e), t.createElement("div", {
                    className: "grow text-left"
                }, r)),
                K = e => {
                    const {
                        href: r,
                        icon: a,
                        content: l,
                        onClick: o,
                        hideHover: n,
                        useDangerous: b,
                        className: i,
                        useFragmentWarp: s,
                        rightChild: g
                    } = e, k = d()(b ? O.labelMessageDanger : B, b ? D.labelMessageDanger : M, !n && !s && O.fill4Hover, "rounded cursor-pointer flex items-center py-3 space-x-6 px-2 md:space-x-3 md:py-[10px]"), c = s ? "div" : "li";
                    return t.createElement(t.Fragment, null, r ? ((e, r, a, l, d) => {
                        const {
                            target: o,
                            icon: n,
                            content: b,
                            onClick: i
                        } = e, s = l ? t.Fragment : "li";
                        return t.createElement(s, null, t.createElement("a", {
                            href: r,
                            onClick: i,
                            target: o,
                            className: a
                        }, t.createElement(z, {
                            icon: n,
                            content: b,
                            useDangerous: d
                        })))
                    })(e, r, k, s, b) : t.createElement(c, {
                        onClick: o,
                        className: d()(k, i)
                    }, t.createElement(z, {
                        icon: a,
                        content: l,
                        useDangerous: b
                    }), g))
                },
                $ = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z",
                        clipRule: "evenodd"
                    }))
                })),
                J = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 18 18",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z",
                        clipRule: "evenodd"
                    }))
                })),
                X = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("g", {
                        filter: "url(#hot-filled_svg__filter0_i_289_12318)"
                    }, t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9.588 2.085a1 1 0 01.97.092c2.85 1.966 4.498 4.744 5.31 6.67l.854-.885a1 1 0 011.56.154c2.177 3.38 2.211 7.383.521 10.3C17.039 21.459 13.583 22 11.977 22c-1.569 0-4.905-.27-6.825-3.584-.832-1.435-1.27-3.053-1.125-4.704.146-1.66.876-3.284 2.264-4.721.86-.891 1.505-2.122 1.957-3.322.449-1.193.68-2.278.752-2.806a1 1 0 01.588-.778z",
                        clipRule: "evenodd",
                        fill: "url(#hot-filled_svg__paint0_linear_289_12318)"
                    })), t.createElement("defs", null, t.createElement("linearGradient", {
                        id: "hot-filled_svg__paint0_linear_289_12318",
                        x1: 12,
                        x2: 12,
                        y1: 2,
                        y2: 22,
                        gradientUnits: "userSpaceOnUse"
                    }, t.createElement("stop", {
                        stopColor: "#FFA116"
                    }), t.createElement("stop", {
                        offset: 1,
                        stopColor: "#F9772E"
                    })), t.createElement("filter", {
                        id: "hot-filled_svg__filter0_i_289_12318",
                        width: 17.2,
                        height: 21.2,
                        x: 4,
                        y: 2,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse"
                    }, t.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix"
                    }), t.createElement("feBlend", { in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                    }), t.createElement("feColorMatrix", { in: "SourceAlpha",
                        result: "hardAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    }), t.createElement("feOffset", {
                        dx: 1.2,
                        dy: 1.2
                    }), t.createElement("feGaussianBlur", {
                        stdDeviation: .6
                    }), t.createElement("feComposite", {
                        in2: "hardAlpha",
                        k2: -1,
                        k3: 1,
                        operator: "arithmetic"
                    }), t.createElement("feColorMatrix", {
                        values: "0 0 0 0 0.970833 0 0 0 0 0.05825 0 0 0 0 0 0 0 0 0.16 0"
                    }), t.createElement("feBlend", {
                        in2: "shape",
                        result: "effect1_innerShadow_289_12318"
                    }))))
                })),
                ee = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.20374 15.8174C6.18177 15.8563 6.15975 15.8945 6.13771 15.9322H17.8623C17.8403 15.8945 17.8182 15.8563 17.7963 15.8174C16.8756 14.1898 16.3333 12.0111 16.3333 9.21793C16.3333 6.93819 14.4012 5.07507 12 5.07507C9.5988 5.07507 7.66667 6.93819 7.66667 9.21793C7.66667 12.0111 7.12442 14.1898 6.20374 15.8174ZM20 17.9322H4.00001C3.00196 17.9322 2.61971 16.6307 3.45925 16.091C3.66114 15.9612 4.0464 15.5691 4.46294 14.8327C5.20893 13.5139 5.66667 11.6748 5.66667 9.21793C5.66667 5.81702 8.51018 3.07507 12 3.07507C15.4898 3.07507 18.3333 5.81702 18.3333 9.21793C18.3333 11.6748 18.7911 13.5139 19.5371 14.8327C19.9536 15.5691 20.3389 15.9612 20.5408 16.091C21.3803 16.6307 20.9981 17.9322 20 17.9322ZM12.9372 19.2783C13.2219 18.805 13.8363 18.6521 14.3096 18.9368C14.7828 19.2215 14.9357 19.836 14.651 20.3092C14.0976 21.2292 13.0875 21.7902 12 21.7902C10.9125 21.7902 9.90245 21.2292 9.34903 20.3092C9.06434 19.836 9.2172 19.2215 9.69045 18.9368C10.1637 18.6521 10.7781 18.805 11.0628 19.2783C11.2515 19.5919 11.6085 19.7902 12 19.7902C12.3915 19.7902 12.7485 19.5919 12.9372 19.2783Z"
                    }))
                })),
                re = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.403 10.891C16.5768 12.8986 17.0682 14.5303 17.7963 15.8174C17.8182 15.8563 17.8403 15.8945 17.8623 15.9322H6.13771C6.15975 15.8945 6.18177 15.8563 6.20374 15.8174C7.12442 14.1898 7.66667 12.0111 7.66667 9.21794C7.66667 7.21279 9.16139 5.52994 11.1553 5.15365C11.2695 4.39084 11.556 3.68438 11.9739 3.07513C8.496 3.08878 5.66667 5.82552 5.66667 9.21794C5.66667 11.6748 5.20893 13.5139 4.46294 14.8327C4.0464 15.5691 3.66114 15.9613 3.45925 16.091C2.61971 16.6307 3.00196 17.9322 4.00001 17.9322H20C20.9981 17.9322 21.3803 16.6307 20.5408 16.091C20.3389 15.9613 19.9536 15.5691 19.5371 14.8327C18.9112 13.7263 18.4882 12.2536 18.3682 10.3571C17.7723 10.661 17.1073 10.8489 16.403 10.891ZM14.3096 18.9368C13.8363 18.6522 13.2219 18.805 12.9372 19.2783C12.7485 19.5919 12.3915 19.7902 12 19.7902C11.6085 19.7902 11.2515 19.5919 11.0628 19.2783C10.7781 18.805 10.1637 18.6522 9.69045 18.9368C9.2172 19.2215 9.06434 19.836 9.34903 20.3092C9.90245 21.2292 10.9125 21.7902 12 21.7902C13.0875 21.7902 14.0976 21.2292 14.651 20.3092C14.9357 19.836 14.7828 19.2215 14.3096 18.9368Z"
                    }), t.createElement("circle", {
                        cx: "16.1",
                        cy: "5.89999",
                        r: "3",
                        fill: "#F63636"
                    }))
                })),
                ae = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z",
                        clipRule: "evenodd"
                    }))
                })),
                te = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 18 18",
                        width: "1em",
                        height: "1em",
                        stroke: "currentColor",
                        fill: "none",
                        ref: r
                    }, e), t.createElement("g", null, t.createElement("g", null, t.createElement("path", {
                        d: "M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z",
                        strokeWidth: "1.5"
                    }), t.createElement("path", {
                        d: "M12.4839 6.69728C12.9641 7.58846 12.7542 8.63364 12.0152 9.03176C11.2763 9.42988 10.288 9.03019 9.80787 8.13902C9.32775 7.24785 9.5376 6.20267 10.2766 5.80454C11.0156 5.40642 12.0038 5.80611 12.4839 6.69728Z",
                        strokeWidth: "1.5"
                    }))))
                })),
                le = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 18 18",
                        width: "1em",
                        height: "1em",
                        stroke: "currentColor",
                        fill: "none",
                        ref: r
                    }, e), t.createElement("g", null, t.createElement("path", {
                        d: "M1.5 8.99955C1.5 13.1417 4.85786 16.4995 9 16.4995C12.5757 16.4995 15.567 13.9972 16.3182 10.6482C16.3182 10.6482 12.4248 10.939 9.59473 8.10893C6.7647 5.2789 7.51531 1.64648 7.51531 1.64648C4.08432 2.33546 1.5 5.3657 1.5 8.99955Z",
                        strokeWidth: "1.5"
                    })))
                })),
                de = e => {
                    const [r, a] = (0, t.useState)(null), [l, o] = (0, t.useState)(!1), [n, b] = (0, t.useState)(null), s = () => {
                        if (!r || !n) return;
                        const e = r.getBoundingClientRect();
                        n.style.top = e.top + "px", n.style.left = e.left - 280 + "px", n.style.zIndex = "60", o(!0)
                    }, g = () => {
                        o(!1)
                    };
                    return e.child ? t.createElement(t.Fragment, null, t.createElement("div", {
                        ref: a,
                        onMouseEnter: s,
                        onMouseLeave: g
                    }, t.createElement(K, Object.assign({}, e, {
                        useFragmentWarp: !0,
                        className: d()(O.fill4Hover),
                        rightChild: t.createElement(_, {
                            className: "h-[14px] w-[14px]"
                        })
                    }))), (0, i.createPortal)(t.createElement("div", {
                        ref: b,
                        className: d()(" absolute w-[280px] pr-4", {
                            "display-none": !l
                        }),
                        onMouseEnter: s,
                        onMouseLeave: g,
                        onTouchStart: e => {
                            e.stopPropagation()
                        }
                    }, t.createElement("div", {
                        className: d()("w-[264px] rounded-[13px] p-4", T, j.dropdown)
                    }, e.child.map(((r, a) => {
                        const l = r.href ? "a" : "div";
                        return t.createElement(l, {
                            key: a,
                            className: d()("flex cursor-pointer items-center space-x-3 rounded px-2 py-[10px]", O.fill4Hover, r.useDangerous ? O.labelMessageDanger : B, r.className),
                            href: r.href,
                            onClick: r.onClick,
                            onTouchStart: r.onClick
                        }, e.useChildActive && t.createElement(ae, {
                            className: d()(N, "h-[18px] w-[18px] opacity-0", {
                                "opacity-100": r.isActive
                            })
                        }), r.icon && t.createElement("div", {
                            className: d()("leading-none", r.useDangerous ? O.labelMessageDanger : B)
                        }, r.icon), t.createElement("div", {
                            className: "grow text-left"
                        }, r.content))
                    })))), document.body)) : null
                },
                oe = {
                    enter: "transition ease-out duration-150",
                    enterFrom: "transform opacity-0",
                    enterTo: "transform opacity-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100",
                    leaveTo: "transform opacity-0"
                },
                ne = e => {
                    const [r, a] = (0, t.useState)(!1);
                    return e.child ? t.createElement(t.Fragment, null, t.createElement("div", {
                        className: d()("flex w-full items-center justify-between rounded-[13px] pr-2"),
                        onClick: () => a(!r)
                    }, t.createElement(K, Object.assign({}, e, {
                        useFragmentWarp: !0,
                        className: d()(O.fill4Hover, "w-full"),
                        rightChild: t.createElement($, {
                            className: d()("ml-0.5 h-[14px] w-[14px] transition-[transform]", B, {
                                "rotate-180": r
                            }),
                            "aria-hidden": "true"
                        })
                    }))), t.createElement(o.u, Object.assign({
                        show: r,
                        as: t.Fragment
                    }, oe), t.createElement("ul", {
                        className: d()("m-0 ml-4 mt-1 p-0 outline-none"),
                        onClick: e => e.stopPropagation()
                    }, e.child.map(((r, a) => t.createElement(K, Object.assign({
                        key: a
                    }, r, {
                        rightChild: e.useChildActive ? t.createElement(ae, {
                            className: d()(N, "h-[18px] w-[18px] opacity-0", {
                                "opacity-100": r.isActive
                            })
                        }) : null
                    }))))))) : null
                },
                be = e => t.createElement(t.Fragment, null, t.createElement("li", {
                    className: "display-none group relative md:block"
                }, t.createElement(de, Object.assign({}, e))), t.createElement("li", {
                    className: "md:display-none block"
                }, t.createElement(ne, Object.assign({}, e)))),
                ie = ({
                    actions: e
                }) => t.createElement("ul", {
                    className: "m-0  p-0 px-4 md:mt-4 md:border-none md:px-0"
                }, e.map(((e, r) => e.child ? t.createElement(be, Object.assign({
                    key: r
                }, e)) : t.createElement(K, Object.assign({
                    key: r
                }, e)))));
            (() => {
                if ("undefined" === typeof window || "undefined" === typeof history) return;
                const e = history.pushState,
                    r = history.replaceState;
                history.pushState = function(...r) {
                    e.apply(history, r), window.dispatchEvent(new Event("pushstate")), window.dispatchEvent(new Event("locationchange"))
                }, history.replaceState = function(...e) {
                    r.apply(history, e), window.dispatchEvent(new Event("replacestate")), window.dispatchEvent(new Event("locationchange"))
                }, window.addEventListener("popstate", (function() {
                    window.dispatchEvent(new Event("locationchange"))
                }))
            })();
            const se = ({
                    className: e,
                    userData: r,
                    IS_LCUS: a,
                    userCategories: l,
                    menuActions: b,
                    avatarMenuClick: i,
                    useFullWidthMd: s,
                    noPremiumClick: g,
                    noPremiumLink: k
                }) => {
                    const {
                        avatar: c,
                        isPremium: u
                    } = r;
                    return t.createElement("div", {
                        className: "relative"
                    }, t.createElement(n.v, null, t.createElement(n.v.Button, {
                        className: d()(Y.menuButton)
                    }, t.createElement("span", {
                        id: "navbar_user_avatar",
                        className: d()("relative ml-1 h-6 w-6", e),
                        onClick: i
                    }, c ? t.createElement("img", {
                        src: c,
                        alt: "avatar",
                        className: "h-full w-full rounded-full object-cover"
                    }) : t.createElement(Q, {
                        className: "bg-gray-5 text-paper h-full w-full rounded-xl p-1"
                    }), u && t.createElement(U, {
                        className: "bg-brand-orange text-paper absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-xl p-0.5"
                    }))), t.createElement(o.u, Object.assign({
                        as: t.Fragment
                    }, Y.popoverTransition), t.createElement(n.v.Items, {
                        id: "web-user-menu",
                        className: d()(`z-nav absolute top-9 mt-1 flex  rounded-[13px]  focus:outline-none ${j.modal}`, Y.menuItemsBg, {
                            "-right-2": s,
                            "left-0 md:-left-64 ": !s
                        }),
                        as: "div"
                    }, t.createElement("div", null, t.createElement("div", {
                        className: "max-h-[calc(100vh-100px)] w-full  min-w-[296px] overflow-y-auto"
                    }, t.createElement("div", {
                        className: " z-base absolute left-0 top-0 h-full w-full overflow-hidden"
                    }, u && t.createElement(I, null)), t.createElement("div", {
                        className: d()(" z-base-1 relative flex h-full w-full flex-col items-end p-4"),
                        onTouchEnd: e => e.stopPropagation()
                    }, t.createElement("div", {
                        className: "h-full"
                    }, t.createElement(W, {
                        userData: r,
                        isEN: a,
                        noPremiumLink: k,
                        noPremiumClick: g
                    }), t.createElement(Z, {
                        categories: l
                    }), t.createElement(ie, {
                        actions: b
                    })))))))))
                },
                ge = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        width: "59",
                        height: "22",
                        viewBox: "0 0 59 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M27.8226 17.4752C28.3202 16.1443 28.7218 14.5458 28.9859 12.6607C29.1277 11.6491 29.2845 10.1658 29.4568 8.20813H35.2561C35.2637 8.20813 35.2713 8.20828 35.2789 8.20857C35.6071 8.22119 35.8628 8.49743 35.8502 8.82558L35.4996 17.9427C35.4873 18.262 35.2249 18.5144 34.9054 18.5144H33.2974C32.8595 18.5144 32.5046 18.8694 32.5046 19.3072C32.5046 19.7451 32.8595 20.1 33.2974 20.1H35.4776C36.3533 20.1 37.0631 19.3901 37.0631 18.5144L37.4595 8.20813C37.4595 7.33244 36.7497 6.62254 35.874 6.62254H29.5913C29.671 5.65054 29.7537 4.58575 29.8394 3.42794C29.8718 2.99129 29.544 2.61109 29.1074 2.57874C28.6707 2.54639 28.2905 2.87414 28.2582 3.3108C28.1689 4.51669 28.0829 5.62069 28.0004 6.62254H25.3695C24.9316 6.62254 24.5767 6.97749 24.5767 7.41534C24.5767 7.85318 24.9316 8.20813 25.3695 8.20813H27.8651C27.7 10.07 27.5501 11.4816 27.4157 12.4407C27.1674 14.2124 26.7941 15.6986 26.3374 16.9199C26.0981 17.5599 25.8527 18.0822 25.6163 18.4944C25.5366 18.6333 25.4649 18.7474 25.4029 18.8378C25.3703 18.8853 25.3512 18.9109 25.3475 18.9155C25.0722 19.256 25.1252 19.7552 25.4657 20.0305C25.8062 20.3057 26.3054 20.2528 26.5806 19.9123C26.6737 19.7971 26.8159 19.5898 26.9917 19.2833C27.271 18.7963 27.5531 18.1959 27.8226 17.4752ZM48.5586 17.3184V7.72969H55.6831C56.3474 7.72969 56.883 8.26047 56.883 8.9117V16.4576C56.883 17.1088 56.3474 17.6396 55.6831 17.6396H53.3916C52.7274 17.6396 52.1918 17.1088 52.1918 16.4576V10.1081C52.1918 9.67022 51.8369 9.31528 51.399 9.31528C50.9612 9.31528 50.6062 9.67022 50.6062 10.1081V16.4576C50.6062 17.9877 51.8548 19.2252 53.3916 19.2252H55.6831C57.2199 19.2252 58.4686 17.9877 58.4686 16.4576V8.9117C58.4686 7.38157 57.2199 6.14411 55.6831 6.14411H48.5586V3.76573C48.5586 3.32788 48.2037 2.97294 47.7658 2.97294C47.328 2.97294 46.9731 3.32788 46.9731 3.76573V6.14411H44.1983C43.7604 6.14411 43.4055 6.49905 43.4055 6.9369C43.4055 7.37475 43.7604 7.72969 44.1983 7.72969H46.9731V12.465L44.3002 13.5341C43.8937 13.6968 43.696 14.1581 43.8586 14.5647C44.0212 14.9712 44.4826 15.1689 44.8891 15.0063L46.9731 14.1727V17.3184C46.9731 18.3666 46.0906 19.2252 44.9911 19.2252C44.5532 19.2252 44.1983 19.5801 44.1983 20.018C44.1983 20.4558 44.5532 20.8108 44.9911 20.8108C46.9567 20.8108 48.5586 19.2522 48.5586 17.3184Z",
                        fill: "white"
                    }), t.createElement("path", {
                        d: "M13.3797 16.4636C13.874 15.9701 14.674 15.9714 15.1667 16.4665C15.6593 16.9616 15.6581 17.7631 15.1638 18.2566L12.9691 20.4481C10.9443 22.4699 7.64261 22.4992 5.58369 20.5162C5.57179 20.5048 4.655 19.6058 1.63058 16.6402C-0.381491 14.6673 -0.581941 11.5104 1.31147 9.4831L4.84172 5.7031C6.7209 3.69085 10.1849 3.47093 12.3335 5.20847L15.5398 7.80152C16.0828 8.24065 16.1676 9.03757 15.7292 9.58151C15.2909 10.1254 14.4953 10.2104 13.9523 9.77127L10.746 7.17824C9.62238 6.26954 7.65677 6.39434 6.68718 7.43259L3.15688 11.2126C2.23512 12.1996 2.33607 13.7895 3.39833 14.8311C5.61922 17.0088 7.33084 18.6871 7.33282 18.689C8.40324 19.72 10.134 19.7046 11.185 18.6551L13.3797 16.4636Z",
                        fill: "#FFA116"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.04824 14.2706C7.35039 14.2706 6.78467 13.7039 6.78467 13.0048C6.78467 12.3057 7.35039 11.739 8.04824 11.739H17.3671C18.0649 11.739 18.6306 12.3057 18.6306 13.0048C18.6306 13.7039 18.0649 14.2706 17.3671 14.2706H8.04824Z",
                        fill: "#B3B3B3"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.79343 0.401024C10.2702 -0.109469 11.0698 -0.136141 11.5794 0.34145C12.089 0.819042 12.1156 1.62004 11.6389 2.13054L3.15692 11.2126C2.23513 12.1995 2.33608 13.7894 3.39827 14.831L7.31536 18.6721C7.81405 19.1611 7.82258 19.9625 7.33442 20.4621C6.84626 20.9616 6.04626 20.9702 5.54757 20.4812L1.63046 16.6401C-0.381492 14.6671 -0.581942 11.5102 1.31155 9.48305L9.79343 0.401024Z",
                        fill: "white"
                    }))
                })),
                ke = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        width: "95",
                        height: "111",
                        viewBox: "0 0 95 111",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), t.createElement("path", {
                        d: "M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z",
                        fill: "#FFA116"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z",
                        fill: "#B3B3B3"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z",
                        fill: "white"
                    }))
                })),
                ce = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        width: "273",
                        height: "101",
                        viewBox: "0 0 273 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), t.createElement("path", {
                        d: "M68.4876 75.8086C70.7358 73.5637 74.375 73.5696 76.616 75.8217C78.857 78.0738 78.8511 81.7194 76.6029 83.9642L66.6199 93.9326C57.4098 103.129 42.3911 103.263 33.0256 94.2424C32.9715 94.1905 28.8012 90.1015 15.044 76.6115C5.89166 67.6374 4.97987 53.2774 13.5925 44.0559L29.6506 26.8617C38.1985 17.7086 53.9552 16.7082 63.7285 24.6118L78.3131 36.4069C80.783 38.4043 81.1688 42.0294 79.1748 44.5036C77.1808 46.9778 73.5621 47.3642 71.0922 45.3667L56.5077 33.5717C51.3965 29.4383 42.4555 30.006 38.0451 34.7287L21.9867 51.9232C17.7939 56.4124 18.2531 63.6445 23.085 68.3823C33.1872 78.2883 40.9729 85.9224 40.9819 85.931C45.8509 90.6207 53.7239 90.5508 58.5045 85.777L68.4876 75.8086Z",
                        fill: "#FFA116"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M44.2359 65.8329C41.0616 65.8329 38.4883 63.2551 38.4883 60.0752C38.4883 56.8954 41.0616 54.3176 44.2359 54.3176H86.6247C89.799 54.3176 92.3723 56.8954 92.3723 60.0752C92.3723 63.2551 89.799 65.8329 86.6247 65.8329H44.2359Z",
                        fill: "#B3B3B3"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M52.1745 2.74414C54.3432 0.422038 57.9804 0.300713 60.2984 2.47315C62.6165 4.64558 62.7376 8.28912 60.5689 10.6112L21.9869 51.9233C17.7939 56.4122 18.2531 63.6443 23.0847 68.3823L40.9025 85.8543C43.1709 88.0787 43.2097 91.724 40.9892 93.9964C38.7687 96.2688 35.1297 96.3077 32.8613 94.0833L15.0435 76.6112C5.89165 67.6366 4.97986 53.2768 13.5929 44.0559L52.1745 2.74414Z",
                        fill: "black"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M134.597 76.9199C136.835 70.9349 138.641 63.746 139.829 55.2689C140.466 50.7197 141.171 44.0491 141.946 35.2455H168.026C168.045 35.2455 168.065 35.2457 168.085 35.2461C168.099 35.2464 168.114 35.2469 168.128 35.2474C169.604 35.3042 170.754 36.5465 170.698 38.0221L169.121 79.0221C169.065 80.4579 167.885 81.5933 166.449 81.5933H159.217C157.248 81.5933 155.652 83.1895 155.652 85.1585C155.652 87.1275 157.248 88.7237 159.217 88.7237H169.022C172.96 88.7237 176.152 85.5313 176.152 81.5933L177.935 35.2455C177.935 31.3074 174.742 28.115 170.804 28.115H142.551C142.909 23.7439 143.281 18.9555 143.667 13.7488C143.812 11.7851 142.338 10.0754 140.375 9.92989C138.411 9.78442 136.701 11.2583 136.556 13.222C136.154 18.6449 135.768 23.6097 135.397 28.115H123.565C121.596 28.115 120 29.7112 120 31.6802C120 33.6493 121.596 35.2455 123.565 35.2455H134.788C134.046 43.6184 133.372 49.9666 132.767 54.2793C131.651 62.247 129.972 68.9303 127.918 74.4227C126.842 77.3007 125.739 79.6494 124.675 81.5033C124.317 82.1278 123.994 82.6411 123.716 83.0475C123.569 83.2613 123.483 83.3764 123.466 83.397C122.229 84.9283 122.467 87.1731 123.998 88.4109C125.529 89.6487 127.774 89.4107 129.012 87.8794C129.43 87.3615 130.07 86.4292 130.861 85.0509C132.117 82.8608 133.385 80.1607 134.597 76.9199ZM227.847 76.2146V33.0939H259.887C262.874 33.0939 265.282 35.4808 265.282 38.4095V72.3436C265.282 75.2722 262.874 77.6591 259.887 77.6591H249.582C246.594 77.6591 244.186 75.2722 244.186 72.3436V43.7896C244.186 41.8205 242.59 40.2243 240.621 40.2243C238.652 40.2243 237.055 41.8205 237.055 43.7896V72.3436C237.055 79.2246 242.671 84.7896 249.582 84.7896H259.887C266.798 84.7896 272.413 79.2246 272.413 72.3436V38.4095C272.413 31.5284 266.798 25.9635 259.887 25.9635H227.847V15.2678C227.847 13.2988 226.251 11.7026 224.282 11.7026C222.313 11.7026 220.717 13.2988 220.717 15.2678V25.9635H208.239C206.27 25.9635 204.674 27.5597 204.674 29.5287C204.674 31.4977 206.27 33.0939 208.239 33.0939H220.717V54.3888L208.697 59.1967C206.869 59.928 205.98 62.0028 206.711 63.831C207.442 65.6592 209.517 66.5484 211.345 65.8172L220.717 62.0685V76.2146C220.717 80.9286 216.749 84.7896 211.804 84.7896C209.835 84.7896 208.239 86.3858 208.239 88.3548C208.239 90.3238 209.835 91.92 211.804 91.92C220.643 91.92 227.847 84.9111 227.847 76.2146Z",
                        fill: "black"
                    }))
                })),
                ue = t.forwardRef((function(e, r) {
                    return t.createElement("svg", Object.assign({
                        width: "95",
                        height: "111",
                        viewBox: "0 0 95 111",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), t.createElement("path", {
                        d: "M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z",
                        fill: "#FFA116"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z",
                        fill: "#B3B3B3"
                    }), t.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z",
                        fill: "black"
                    }))
                })),
                he = ({
                    className: e,
                    IS_LCUS: r,
                    onClick: a
                }) => {
                    const l = r ? ke : ge,
                        o = r ? ue : ce;
                    return t.createElement("a", {
                        href: "/",
                        onClick: a,
                        className: d()("mb-0.5 flex items-center", e)
                    }, t.createElement("span", {
                        className: d()("display-none h-[22px] dark:flex")
                    }, t.createElement(l, {
                        className: "h-full w-auto max-w-none"
                    })), t.createElement("span", {
                        className: d()("dark:display-none flex h-[22px]")
                    }, t.createElement(o, {
                        className: "h-full w-auto max-w-none"
                    })))
                },
                me = ({
                    children: e,
                    className: r,
                    isActive: a,
                    onClick: l
                }) => t.createElement("li", {
                    className: d()("relative flex h-full items-center text-sm ", {
                        "nav-li-after": a,
                        [F]: a
                    }, r),
                    onClick: l
                }, e),
                ve = ({
                    basePath: e,
                    href: r,
                    activeStateDisabled: a,
                    useBrandOrange: l,
                    className: o,
                    children: n,
                    rootClassName: b,
                    onClick: i,
                    linkClick: s,
                    currentPath: g
                }) => {
                    const [k, c] = (0, t.useState)(!1);
                    (0, t.useEffect)((() => {
                        c((() => {
                            let t = g || "";
                            return t || (t = "undefined" === typeof window ? "" : window.location.pathname), !a && (!(!r || !t.startsWith(r)) || !!e && (Array.isArray(e) ? e.some((e => t.startsWith(e))) : t.startsWith(e)))
                        })())
                    }), [g]);
                    const u = (0, t.useCallback)((e => {
                            e.preventDefault();
                            const a = "string" === typeof r ? r : "";
                            s ? s(a) : window.location.href = a
                        }), []),
                        h = d()(Y.navItem, P, {
                            [`font-medium ${N}`]: k,
                            [B]: !k
                        }),
                        m = d()(Y.navItem, Y.navItemBrandOrange),
                        v = d()(o, "relative whitespace-nowrap", P, {
                            [m]: l,
                            [h]: !l
                        });
                    return t.createElement(me, {
                        className: d()("", b),
                        onClick: i,
                        isActive: !!r && k
                    }, r ? t.createElement("a", {
                        className: v,
                        href: r,
                        onClick: u
                    }, n) : t.createElement("div", {
                        className: v
                    }, n))
                },
                pe = d()(""),
                ye = ({
                    childMenus: e,
                    parentName: r,
                    useBrandOrange: a
                }) => {
                    const l = a ? d()(Y.menuItem, Y.menuItemHover, Y.navItemBrandOrange, "flex items-center") : d()(Y.menuItem, Y.menuItemHover, B, P, "flex items-center");
                    return t.createElement(n.v, null, t.createElement("span", {
                        className: d()(Y.menuButton, a ? Y.navItemBrandOrange : "")
                    }, t.createElement(n.v.Button, {
                        as: "button",
                        className: "contents"
                    }, r, " ", t.createElement($, {
                        className: d()("ml-1 h-[14px] w-[14px]"),
                        "aria-hidden": "true"
                    }))), t.createElement(o.u, Object.assign({
                        as: t.Fragment
                    }, Y.dropdownTransition), t.createElement(n.v.Items, {
                        as: "ul",
                        className: d()(Y.menuItems, Y.menuItemsBg)
                    }, e.map(((e, r) => {
                        const a = e.href ? "a" : "span";
                        return t.createElement(n.v.Item, {
                            key: r,
                            as: "li"
                        }, t.createElement(a, {
                            href: e.href,
                            onClick: e.onClick,
                            className: d()(l),
                            target: "_blank"
                        }, e.iconUrl && t.createElement("img", {
                            src: e.iconUrl,
                            alt: "Online Interview",
                            height: 21,
                            width: 18,
                            className: "mr-2 max-w-[18px]"
                        }), t.createElement("span", {
                            className: pe
                        }, e.name)))
                    })))))
                },
                xe = ({
                    onChange: e
                }) => {
                    const [r, a] = (0, t.useState)(!1);
                    return t.createElement("button", {
                        className: "group relative"
                    }, t.createElement("div", {
                        className: "relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full ring-0 ring-opacity-30 transition-all duration-200"
                    }, t.createElement("div", {
                        className: "flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden py-[2px] transition-all duration-300",
                        onClick: () => {
                            e(!r), a(!r)
                        }
                    }, t.createElement("div", {
                        className: d()("h-[2px] w-7 origin-left scale-y-75 transform rounded-[1px] transition-all duration-300", L, {
                            "translate-x-10": r
                        })
                    }), t.createElement("div", {
                        className: d()("h-[2px] w-7 scale-y-75 transform rounded-[1px] transition-all delay-75 duration-300", L, {
                            "translate-x-10": r
                        })
                    }), t.createElement("div", {
                        className: d()("h-[2px] w-7 origin-left scale-y-75 transform rounded-[1px] transition-all delay-150 duration-300", L, {
                            "translate-x-10": r
                        })
                    }), t.createElement("div", {
                        className: d()("absolute top-2.5 flex  transform items-center justify-between transition-all duration-300 ", {
                            "w-0 -translate-x-10": !r
                        })
                    }, t.createElement("div", {
                        className: d()("absolute h-[2px] w-5 rotate-0 transform rounded-[1px] transition-all delay-100 duration-300", L, {
                            "rotate-45": r
                        })
                    }), t.createElement("div", {
                        className: d()("absolute h-[2px] w-5 -rotate-0 transform rounded-[1px] transition-all delay-100 duration-300", L, {
                            "-rotate-45": r
                        })
                    })))))
                },
                fe = ({
                    children: e
                }) => {
                    const [r, a] = (0, t.useState)(!1);
                    return t.createElement(t.Fragment, null, t.createElement("div", {
                        className: "z-overlay-1 flex h-full items-center"
                    }, t.createElement(xe, {
                        onChange: a
                    })), t.createElement(o.u, {
                        show: r,
                        as: t.Fragment,
                        enter: "transform-gpu ease-in-out duration-300",
                        enterFrom: "-translate-y-[1%]  opacity-0  transform",
                        enterTo: "translate-y-0 opacity-100  transform",
                        leave: "transition ease-in-out duration-300",
                        leaveFrom: "transform translate-y-0  opacity-100",
                        leaveTo: "transform-gpu -translate-y-[1%]  opacity-0"
                    }, t.createElement("div", {
                        className: d()("z-overlay fixed left-0 right-0 top-0 h-full min-h-[300px] w-full overflow-y-auto", R)
                    }, e)))
                },
                we = ({
                    visible: e,
                    isFull: r,
                    onClick: a
                }) => e ? t.createElement("div", {
                    className: d()("z-base-1 relative bg-[#FFFCE6] py-2")
                }, t.createElement("div", {
                    className: d()("mx-auto flex w-full items-center px-4 md:px-6", {
                        "px-4": r,
                        "max-w-[1200px]": !r
                    })
                }, t.createElement("svg", {
                    width: "18",
                    height: "14",
                    viewBox: "0 0 18 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("path", {
                    d: "M9 0C9.4375 0 9.84375 0.25 10.0625 0.625L16.8125 12.125C17.0312 12.5312 17.0312 13 16.8125 13.375C16.5938 13.7812 16.1875 14 15.75 14H2.25C1.78125 14 1.375 13.7812 1.15625 13.375C0.9375 13 0.9375 12.5312 1.15625 12.125L7.90625 0.625C8.125 0.25 8.53125 0 9 0ZM9 4C8.5625 4 8.25 4.34375 8.25 4.75V8.25C8.25 8.6875 8.5625 9 9 9C9.40625 9 9.75 8.6875 9.75 8.25V4.75C9.75 4.34375 9.40625 4 9 4ZM10 11C10 10.4688 9.53125 10 9 10C8.4375 10 8 10.4688 8 11C8 11.5625 8.4375 12 9 12C9.53125 12 10 11.5625 10 11Z",
                    fill: "#FFB700"
                })), t.createElement("p", {
                    className: "m-0 ml-2 p-0 text-sm text-[#1A1A1A]"
                }, "Please", " ", t.createElement("a", {
                    href: "/profile/account/",
                    className: "text-[#007AFF]",
                    onClick: a
                }, "verify your email"), " ", "to unlock all features and services on LeetCode."))) : null,
                Ce = "cnRedirectExpiredAt_20230206",
                Ee = "regionSwitcherLastClosedAt_20230206",
                Ae = ["/", /^\/problemset/, /^\/problems/, /^\/contest/];
            let Be;

            function Ne(e) {
                const r = e + "=",
                    a = document.cookie.split(";");
                for (let t = 0; t < a.length; t++) {
                    let e = a[t];
                    for (;
                        " " == e.charAt(0);) e = e.substring(1, e.length);
                    if (0 == e.indexOf(r)) return e.substring(r.length, e.length)
                }
                return null
            }
            const Se = "ip_check",
                Le = async () => {
                    if (Be) return Be;
                    if (Ne(Se)) return Ne(Se);
                    try {
                        const e = await fetch("https://leetcode.com/api/is_china_ip/", {
                            method: "get"
                        });
                        if (!e.ok) throw new Error(`HTTP error! Status: ${e.status}`);
                        const r = await e.text();
                        return Be = r,
                            function(e, r, a, t) {
                                let l = "";
                                if (a) {
                                    const e = new Date;
                                    e.setTime(e.getTime() + 24 * a * 60 * 60 * 1e3), l = "; expires=" + e.toUTCString()
                                }
                                let d = e + "=" + (r || "") + l;
                                d += t ? "; path=" + t : "", document.cookie = d
                            }(Se, Be, 1, "/"), r
                    } catch (e) {
                        return ""
                    }
                },
                Te = () => {
                    window.location.href = `https://leetcode.cn${(e=>{const r=e||window.location.pathname;for(let a=0;a<Ae.length;a++){const e=Ae[a];if("string"===typeof e&&r===e)return r;if(e.test&&e.test(r))return r}return"/"})()}?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china`
                },
                Re = async () => {
                    if ("undefined" === typeof window) {
                        if ("true" === new URLSearchParams(location.search).get("mockChinaIp")) return !0
                    }
                    const e = await Le();
                    return e && e.startsWith("(true")
                };
            let Ge;
            const Fe = "?utm_source=LCUS&utm_medium=new_banner_click&utm_campaign=transfer2china",
                Me = "hover:opacity-70",
                Pe = () => t.createElement("span", {
                    className: "mx-1.5 mt-[-1px] opacity-50"
                }, "|"),
                He = ({
                    warpStyle: e,
                    warpClassName: r
                }) => {
                    const [a, l] = (0, t.useState)(!1), o = async () => {
                        const e = await (async e => {
                            if (!(await Re())) return !1;
                            const r = localStorage.getItem(Ee);
                            return r ? Date.now() > new Date(r).valueOf() + 864e5 : (e && !Ge && (Ge = e), !0)
                        })();
                        l(e)
                    };
                    (0, t.useEffect)((() => {
                        o()
                    }), []);
                    return a ? t.createElement("div", {
                        className: d()("border-border-tertiary dark:border-border-tertiary  items-center justify-center border-b-[1px] border-solid ", r),
                        style: e
                    }, t.createElement("div", {
                        className: "relative mx-auto flex w-full max-w-[1200px] items-start justify-between px-[15px]"
                    }, t.createElement("div", {
                        className: "flex items-start"
                    }, t.createElement("a", {
                        className: "inherit mr-2.5 shrink-0",
                        href: `https://leetcode.cn/problemset/${Fe}&utm_content=img`
                    }, t.createElement("img", {
                        className: "h-[70px]",
                        src: "https://pic.leetcode.cn/1704255026-flZKNp-cn_hero_image.png",
                        alt: ""
                    })), t.createElement("div", {
                        className: "flex min-h-[70px] flex-col justify-between py-3"
                    }, t.createElement("div", {
                        className: "text-sm"
                    }, t.createElement("a", {
                        href: `https://leetcode.cn/problemset/${Fe}&utm_content=title_main`,
                        className: d()("font-bold ", Me)
                    }, "\u529b\u6263 LeetCode"), " ", t.createElement("span", {
                        className: "opacity-70"
                    }, "\u4e2d\u6587\u7248\uff0c\u7801\u4e0d\u505c\u9898 - "), t.createElement("a", {
                        href: `https://leetcode.cn/problemset/${Fe}&utm_content=title_go`,
                        className: d()("font-bold ", Me)
                    }, "\u5168\u7403\u6781\u5ba2\u7f16\u7a0b\u804c\u4e1a\u6210\u957f\u793e\u533a")), t.createElement("div", {
                        className: "text-caption mt-[5px]"
                    }, t.createElement("div", {
                        className: "flex flex-wrap items-center text-xs"
                    }, t.createElement("a", {
                        href: `https://leetcode.cn/problemset/${Fe}&utm_content=sub_challenge`,
                        className: d()(Me, "text-[orange]")
                    }, "\ud83c\udf81 \u6bcf\u65e5\u4efb\u52a1"), t.createElement(Pe, null), t.createElement("a", {
                        href: `https://leetcode.cn/app/${Fe}&utm_content=sub_app`,
                        className: d()(Me, "flex items-center text-[#5bc04c]")
                    }, t.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "12",
                        width: "8",
                        viewBox: "0 0 384 512"
                    }, t.createElement("path", {
                        opacity: "1",
                        fill: "#5bc04c",
                        d: "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
                    })), t.createElement("span", {
                        className: "ml-1"
                    }, "\u529b\u6263 App")), t.createElement(Pe, null), t.createElement("a", {
                        href: `https://support.leetcode.cn/hc/kb/article/1277893/${Fe}&utm_content=sub_solution`,
                        className: d()(Me)
                    }, "\u767e\u4e07\u9898\u89e3"), t.createElement(Pe, null), t.createElement("a", {
                        href: `https://support.leetcode.cn/hc/kb/article/1278078/${Fe}&utm_content=sub_company`,
                        className: d()(Me)
                    }, "\u4f01\u4e1a\u9898\u5e93"), t.createElement(Pe, null), t.createElement("a", {
                        href: `https://leetcode.cn/contest/${Fe}&utm_content=sub_contest`,
                        className: d()(Me)
                    }, "\u5168\u7403\u5468\u8d5b"), t.createElement(Pe, null), t.createElement("a", {
                        href: `https://support.leetcode.cn/hc/kb/article/1252597/${Fe}&utm_content=sub_sync`,
                        className: d()(Me, "text-[orange]")
                    }, "\u8f7b\u677e\u540c\u6b65\uff0c\u4f7f\u7528\u5df2\u6709\u79ef\u5206\u6362\u793c"))))), t.createElement("div", {
                        className: " duration-600 mt-2.5 h-6 w-6 shrink-0 cursor-pointer rounded-[50px] bg-[rgba(0,0,0,0.2)] text-center font-bold leading-5 text-white hover:bg-[rgba(0,0,0,0.7)] dark:bg-[rgba(255,255,255,0.18)]",
                        onClick: () => {
                            localStorage.setItem(Ee, (new Date).toISOString()), l(!1), Ge && Ge(!1)
                        }
                    }, "\xd7"))) : null
                },
                Oe = ({
                    isSignedIn: e
                }) => ((0, t.useEffect)((() => {
                    "undefined" !== typeof e && (async (e = !1) => {
                        const r = localStorage.getItem(Ce);
                        if (r && +new Date < +r) return;
                        if (e) return;
                        if (window.location.pathname.startsWith("/playground/")) return;
                        if (window.location.pathname.startsWith("/subscribe") && window.location.search.includes("ref")) return;
                        await Re() && (localStorage.setItem(Ce, "" + +new Date(Date.now() + 36e5)), Te())
                    })(e)
                }), [e]), null),
                je = ({
                    isSignedIn: e,
                    warpStyle: r,
                    warpClassName: a
                }) => t.createElement(t.Fragment, null, t.createElement(Oe, {
                    isSignedIn: e
                }), t.createElement(He, {
                    warpStyle: r,
                    warpClassName: a
                })),
                De = ({
                    rightChild: e,
                    navLinkList: r,
                    className: a,
                    warpClassName: l,
                    US_EN_LOGO: o,
                    mobileMenuChildren: n,
                    useMobilePaddingTop: b,
                    isFull: i,
                    routLinks: s,
                    onNavLinkClick: g,
                    routerPathname: k,
                    notVerifiedAlert: c,
                    hiddenNavbar: u,
                    checkCnUser: h
                }) => {
                    const [m, v] = (0, t.useState)(), [p, y] = (0, t.useState)(0), x = (0, t.useRef)(null), f = (0, t.useCallback)((e => {
                        g && g(e);
                        const r = !!s && s.routers.some((r => e.startsWith(r)));
                        s && r ? s.routerAction(e) : window.location.href = e
                    }), [s]), w = (0, t.useCallback)((e => {
                        g && g(e + "_logo_home")
                    }), [s]);
                    return (0, t.useEffect)((() => v(k)), [k]), (0, t.useEffect)((() => {
                        if (!b) return;
                        const e = () => {
                            if (!x.current) return;
                            const e = x.current.offsetHeight;
                            y(e)
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }), [b, x.current]), (0, t.useEffect)((() => {
                        if (k) return;
                        const e = () => v("undefined" === typeof window ? "" : window.location.pathname);
                        return window.addEventListener("load", e), window.addEventListener("locationchange", e), () => {
                            window.removeEventListener("load", e), window.removeEventListener("locationchange", e)
                        }
                    }), []), t.createElement(t.Fragment, null, t.createElement("div", {
                        className: d()("z-base-2 fixed left-0 right-0 top-0  md:relative", l),
                        ref: x,
                        id: "navbar-container"
                    }, h && t.createElement(je, Object.assign({}, h)), !u && t.createElement("nav", {
                        id: "leetcode-navbar",
                        className: d()("flex h-[50px] w-full items-center border-b-[1px] border-solid", G, a, "nav-bar-container")
                    }, t.createElement("div", {
                        className: d()("display-none m-auto h-[50px] w-full items-center justify-center px-6 md:flex", {
                            "max-w-[1200px]": !i
                        })
                    }, t.createElement(he, {
                        IS_LCUS: o,
                        onClick: () => w("web"),
                        className: "mr-8"
                    }), t.createElement("ul", {
                        className: d()("relative m-0 flex h-full grow items-center gap-6 self-end p-0")
                    }, r.map(((e, r) => e.parentName ? t.createElement(ve, {
                        key: r,
                        rootClassName: d()({
                            "!ml-6": 0 === r
                        })
                    }, t.createElement(ye, {
                        parentName: e.parentName,
                        useBrandOrange: e.useBrandOrange,
                        childMenus: e.childMenus || []
                    })) : t.createElement(ve, Object.assign({}, e, {
                        linkClick: f,
                        key: r,
                        currentPath: m
                    }))))), t.createElement("div", {
                        className: "relative flex h-full items-center"
                    }, e)), t.createElement("div", {
                        className: d()("md:display-none flex h-[50px] w-full items-center justify-between pl-3 pr-[5px]")
                    }, t.createElement(he, {
                        IS_LCUS: o,
                        onClick: () => w("mobile")
                    }), t.createElement(fe, null, n))), c && t.createElement(we, Object.assign({}, c))), b && t.createElement("div", {
                        className: "md:!h-0",
                        style: {
                            height: `${p}px`
                        }
                    }))
                };
            "undefined" !== typeof window && window.localStorage;
            const Ue = ({
                    orientation: e = "horizontal",
                    className: r,
                    ...a
                }) => "vertical" !== e ? t.createElement("hr", Object.assign({
                    className: d()("border-divider-2 dark:border-dark-divider-2", r)
                }, a)) : t.createElement("div", Object.assign({
                    className: d()("bg-divider-2 dark:bg-dark-divider-2 h-full w-px", r)
                }, a)),
                Qe = () => location.pathname + location.search + location.hash,
                Ye = (e = "") => `/accounts/signup/?${(0,s.stringify)({next:e||Qe()})}`,
                Ie = (e = "") => `/accounts/login/?${(0,s.stringify)({next:e||Qe()})}`,
                _e = ({
                    isEN: e
                }) => t.createElement("div", {
                    className: d()(O.label1, "border-divider-2 dark:border-gray-7 border-b pb-4 pl-4")
                }, t.createElement("a", {
                    href: Ye()
                }, t.createElement("a", {
                    className: d()(B)
                }, e ? "Register" : "\u6ce8\u518c")), t.createElement("span", {
                    className: d()("border-r pl-3")
                }), t.createElement("a", {
                    href: Ie()
                }, t.createElement("a", {
                    className: d()("pl-3", B)
                }, e ? "Sign in" : "\u767b\u5f55"))),
                Ve = ({
                    trigger: e,
                    children: r
                }) => {
                    const [a, l] = (0, t.useState)(!1);
                    return t.createElement("li", {
                        className: d()("w-full rounded focus:outline-none"),
                        onClick: () => l(!a)
                    }, t.createElement("div", {
                        className: d()("flex w-full items-center justify-between rounded pr-2", O.fill4Hover)
                    }, e, t.createElement($, {
                        className: d()(`ml-0.5 h-[14px] w-[14px]  transition-[transform] ${a&&"rotate-180"}`, B),
                        "aria-hidden": "true"
                    })), t.createElement(o.u, Object.assign({
                        show: a,
                        as: t.Fragment
                    }, oe), t.createElement("ul", {
                        className: d()("m-0 ml-4 mt-1 p-0 outline-none"),
                        onClick: e => e.stopPropagation()
                    }, r)))
                },
                We = e => {
                    const {
                        childMenus: r
                    } = e, a = r || [];
                    return t.createElement(Ve, {
                        trigger: t.createElement(K, Object.assign({}, e, {
                            useFragmentWarp: !0
                        }))
                    }, a.map(((e, r) => t.createElement(K, Object.assign({
                        key: r
                    }, e)))))
                },
                qe = ({
                    navLinkList: e
                }) => t.createElement("ul", {
                    className: d()("m-0 p-0 px-4 pt-4 md:px-0"),
                    id: "mobile-nav-links"
                }, e.map(((e, r) => e.childMenus && e.childMenus.length > 0 ? t.createElement(We, Object.assign({
                    key: r
                }, e)) : t.createElement(K, Object.assign({}, e, {
                    key: r
                }))))),
                Ze = () => t.createElement("div", {
                    className: "absolute left-0 top-0 h-[296px] w-full overflow-hidden"
                }, t.createElement("div", {
                    className: "h-42 from-fixed-orange absolute left-0 top-0 w-full bg-gradient-to-b opacity-20 dark:opacity-50"
                }), t.createElement("div", {
                    className: `h-42 ${c} absolute w-full opacity-20`
                }), t.createElement("div", {
                    className: `h-42 ${u} absolute w-full opacity-50 dark:opacity-20`
                })),
                ze = ({
                    userData: e,
                    IS_LCUS: r,
                    userCategories: a,
                    menuActions: l,
                    navLinkList: o,
                    noPremiumClick: n,
                    noPremiumLink: b
                }) => {
                    const {
                        isPremium: i,
                        isSignedIn: s
                    } = e;
                    return t.createElement(t.Fragment, null, i && t.createElement(Ze, null), t.createElement("div", {
                        className: d()(`max-h-[calc(100vh - theme('spacing.12'))] relative flex w-full flex-col overflow-y-auto py-4 ${j.dropdown}`)
                    }, s ? t.createElement(W, {
                        userData: e,
                        isEN: r,
                        noPremiumLink: b,
                        noPremiumClick: n
                    }) : t.createElement(_e, {
                        isEN: r
                    }), s && t.createElement(Z, {
                        categories: a
                    }), t.createElement(qe, {
                        navLinkList: o
                    }), s && t.createElement(t.Fragment, null, t.createElement(Ue, {
                        className: d()(A, "mx-4 mt-2")
                    }), t.createElement(ie, {
                        actions: l
                    }))))
                };
            var Ke;
            ! function(e) {
                e.TopLeft = "top_left", e.TopCenter = "top_center", e.TopRight = "top_right", e.Left = "left", e.Center = "center", e.Right = "right", e.BottomLeft = "bottom_left", e.BottomCenter = "bottom_center", e.BottomRight = "bottom_right"
            }(Ke || (Ke = {}));
            const $e = ({
                    open: e,
                    onVisibilityChange: r
                }) => {
                    const a = (0, t.useRef)(e);
                    return (0, t.useEffect)((() => {
                        e !== a.current && (a.current = e, r && r(e))
                    }), [e, r]), null
                },
                Je = ({
                    className: e,
                    buttonClassName: r,
                    panelClassName: a,
                    disabled: l,
                    mobileEnable: n,
                    useHover: i = !0,
                    content: s,
                    children: k,
                    placement: c,
                    timeoutDuration: u = 200,
                    inset: h = 10,
                    onVisibilityChange: m,
                    canCloseContent: v = !1
                }) => {
                    const [p, y] = (0, t.useState)({
                        panelStyle: {
                            top: 0,
                            left: 0
                        }
                    }), x = (0, t.useRef)(), f = (0, t.useRef)(null), w = (0, t.useCallback)((e => {
                        if (f.current) {
                            const {
                                x: r,
                                y: a,
                                width: t,
                                height: l
                            } = f.current.getBoundingClientRect();
                            switch (e) {
                                case "bottom":
                                    y({
                                        panelStyle: {
                                            left: r + t / 2,
                                            top: a + l + h,
                                            transform: "translateX(-50%)"
                                        }
                                    });
                                    break;
                                case "bottomLeft":
                                    y({
                                        panelStyle: {
                                            left: r,
                                            top: a + l + h
                                        }
                                    });
                                    break;
                                case "bottomRight":
                                    y({
                                        panelStyle: {
                                            left: r + t,
                                            top: a + l + h,
                                            transform: "translateX(-100%)"
                                        }
                                    });
                                    break;
                                case "left":
                                    y({
                                        panelStyle: {
                                            left: r - h,
                                            top: a + l / 2,
                                            transform: "translate(-100%, -50%)"
                                        }
                                    });
                                    break;
                                case "leftBottom":
                                    y({
                                        panelStyle: {
                                            left: r - h,
                                            top: a + l,
                                            transform: "translate(-100%, -100%)"
                                        }
                                    });
                                    break;
                                case "leftTop":
                                    y({
                                        panelStyle: {
                                            left: r - h,
                                            top: a,
                                            transform: "translateX(-100%)"
                                        }
                                    });
                                    break;
                                case "right":
                                    y({
                                        panelStyle: {
                                            left: r + t + h,
                                            top: a + l / 2,
                                            transform: "translateY(-50%)"
                                        }
                                    });
                                    break;
                                case "rightBottom":
                                    y({
                                        panelStyle: {
                                            left: r + t + h,
                                            top: a + l,
                                            transform: "translateY(-100%)"
                                        }
                                    });
                                    break;
                                case "rightTop":
                                    y({
                                        panelStyle: {
                                            left: r + t + h,
                                            top: a
                                        }
                                    });
                                    break;
                                case "top":
                                    y({
                                        panelStyle: {
                                            left: r + t / 2,
                                            top: a - h,
                                            transform: "translate(-50%, -100%)"
                                        }
                                    });
                                    break;
                                case "topLeft":
                                    y({
                                        panelStyle: {
                                            left: r,
                                            top: a - h,
                                            transform: "translateY(-100%)"
                                        }
                                    });
                                    break;
                                case "topRight":
                                    y({
                                        panelStyle: {
                                            left: r + t,
                                            top: a - h,
                                            transform: "translate(-100%, -100%)"
                                        }
                                    })
                            }
                        }
                    }), [h]), C = (0, t.useCallback)((() => {
                        if (f.current) {
                            const {
                                x: e,
                                y: r,
                                width: a,
                                height: t
                            } = f.current.getBoundingClientRect(), [l] = function(e, r) {
                                const {
                                    x: a,
                                    y: t,
                                    width: l,
                                    height: d
                                } = e, {
                                    width: o,
                                    height: n
                                } = r, b = {
                                    x: a + l / 2,
                                    y: t + d / 2
                                }, {
                                    x: i,
                                    y: s
                                } = b;
                                return i < o / 3 ? s < n / 3 ? [Ke.TopLeft, b] : s > 2 * n / 3 ? [Ke.BottomLeft, b] : [Ke.Left, b] : i > 2 * o / 3 ? s < n / 3 ? [Ke.TopRight, b] : s > 2 * n / 3 ? [Ke.BottomRight, b] : [Ke.Right, b] : s < n / 3 ? [Ke.TopCenter, b] : s > 2 * n / 3 ? [Ke.BottomCenter, b] : [Ke.Center, b]
                            }({
                                x: e,
                                y: r,
                                width: a,
                                height: t
                            }, {
                                width: document.body.clientWidth,
                                height: document.body.clientHeight
                            });
                            switch (l) {
                                case Ke.TopLeft:
                                    w("rightTop");
                                    break;
                                case Ke.TopCenter:
                                    w("bottom");
                                    break;
                                case Ke.TopRight:
                                    w("leftTop");
                                    break;
                                case Ke.Left:
                                    w("right");
                                    break;
                                case Ke.Right:
                                    w("left");
                                    break;
                                case Ke.BottomLeft:
                                    w("rightBottom");
                                    break;
                                case Ke.BottomRight:
                                    w("leftBottom");
                                    break;
                                case Ke.BottomCenter:
                                    w("top");
                                    break;
                                case Ke.Center:
                                    const e = r + t / 2 < document.body.clientHeight / 2;
                                    w(e ? "bottom" : "top")
                            }
                        }
                    }), [w]), E = (0, t.useCallback)((() => {
                        c ? w(c) : C()
                    }), [c, w, C]), A = (0, t.useCallback)((() => {
                        E()
                    }), [E]), B = (0, t.useRef)(!1), N = (0, t.useCallback)((e => {
                        B.current = e, E(), m && m(e)
                    }), [B, E, m]), S = (0, t.useRef)(!1), L = (0, t.useCallback)((() => {
                        f.current && f.current.click()
                    }), []), T = (0, t.useCallback)(((e, r) => {
                        i && (x.current && clearTimeout(x.current), e !== r && (x.current = setTimeout((() => {
                            e === B.current && (S.current = !0, L())
                        }), u)))
                    }), [u, L, i, B]), R = (0, t.useCallback)((() => {
                        i && (S.current || L(), S.current = !1)
                    }), [L, i]);
                    return (0, t.useEffect)((() => (window.addEventListener("scroll", (() => A())), () => {
                        window.removeEventListener("scroll", (() => A()))
                    })), [A]), l ? t.createElement(t.Fragment, null, k) : t.createElement(b.J, {
                        className: d()("popover-wrapper inline-block", e)
                    }, (({
                        open: e,
                        close: l
                    }) => t.createElement(t.Fragment, null, t.createElement($e, {
                        open: e,
                        onVisibilityChange: N
                    }), t.createElement("div", {
                        onMouseEnter: () => T(e, !0),
                        onMouseLeave: () => T(e, !1)
                    }, t.createElement(b.J.Button, {
                        ref: f,
                        as: "div",
                        className: r,
                        onClick: R
                    }, k), t.createElement(o.u, {
                        show: e,
                        as: t.Fragment,
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    }, t.createElement(b.J.Panel, {
                        as: "div",
                        className: d()("fixed w-max rounded z-modal md:block", O.bgPaper, j.dropdown, {
                            "display-none": !n
                        }, a),
                        style: p.panelStyle,
                        onClick: v ? l : g.Z
                    }, s))))))
                },
                Xe = ({
                    className: e
                }) => t.createElement("svg", {
                    className: e,
                    width: "34",
                    height: "34",
                    viewBox: "0 0 34 34",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("path", {
                    d: "M18.6154 1.05416L29.8866 7.56159C30.9338 8.16619 31.5789 9.28355 31.5789 10.4928V23.5076C31.5789 24.7168 30.9338 25.8342 29.8866 26.4388L18.6154 32.9462C17.5682 33.5508 16.278 33.5508 15.2308 32.9462L3.95958 26.4388C2.91238 25.8342 2.26727 24.7168 2.26727 23.5076V10.4928C2.26727 9.28355 2.91238 8.16619 3.95958 7.56159L15.2308 1.05416C16.278 0.449557 17.5682 0.449557 18.6154 1.05416Z",
                    fill: "black",
                    fillOpacity: "0.08"
                })),
                er = t.memo((function() {
                    return t.createElement("div", {
                        className: "flex h-full w-full animate-pulse items-center space-x-4"
                    }, t.createElement(Xe, {
                        className: "h-9 w-9"
                    }), t.createElement("div", {
                        className: "flex flex-1 flex-col py-[5px]"
                    }, t.createElement("div", {
                        className: `mb-2 h-2 w-1/2 rounded-[2px] ${O.fill3}`
                    }), t.createElement("div", {
                        className: `h-2 w-full rounded-[2px] ${O.fill3}`
                    })))
                })),
                rr = {
                    finished: "Well done! Come back for tomorrow's challenge!",
                    unfinished: "Solve today's Daily Challenge to refresh your streak!",
                    buyTimeTravelTicket: "Buy Time Travel Ticket",
                    missedOneDayThisMonth: "You missed 1 day this month. ",
                    missedDaysThisMonth: "You missed {{count}} days this month. "
                },
                ar = ({
                    currentDayCompleted: e,
                    isLoading: r,
                    streakCount: a,
                    daysSkipped: l,
                    dailyQuestionLink: o,
                    storePath: n,
                    dailyQuestionMedal: b,
                    customText: i = rr,
                    iconClassName: s,
                    panelClassName: g,
                    onTttClick: k,
                    onVisibilityChange: c,
                    onStreakCounterClick: u
                }) => {
                    const h = (0, t.useMemo)((() => {
                        let a = "";
                        return e ? l <= 0 ? a = i.finished : l > 0 && (a = t.createElement("div", null, t.createElement("span", null, l > 1 ? i.missedDaysThisMonth.replace("{{count}}", `${l}`) : i.missedOneDayThisMonth), t.createElement("a", {
                            href: n,
                            className: d()("cursor-pointer whitespace-nowrap", O.labelBlueStandard),
                            onClick: k
                        }, i.buyTimeTravelTicket, " >"))) : a = i.unfinished, t.createElement("div", {
                            className: d()("dark:bg-dark-fill-2 rounded text-sm")
                        }, t.createElement("div", {
                            className: d()("h-[54px] w-[276px] py-2.5 pl-4 pr-2.5", {
                                "display-none": !r,
                                block: r
                            })
                        }, t.createElement(er, null)), t.createElement("div", {
                            className: d()("flex items-center px-[10px] py-[5px]", {
                                "display-none": r,
                                block: !r
                            })
                        }, b && t.createElement("img", {
                            src: b,
                            alt: "DCC Badge",
                            className: d()("mr-4 h-8 w-8 object-cover", {
                                "opacity-60 mix-blend-luminosity": !e
                            })
                        }), t.createElement("span", {
                            className: O.label1
                        }, a)))
                    }), [l, b, e, r, k, n, i]);
                    return t.createElement(Je, {
                        showArrow: !1,
                        placement: "bottomRight",
                        panelClassName: d()("max-w-[276px] px-0 py-0", g),
                        inset: 12,
                        content: h,
                        onVisibilityChange: c
                    }, t.createElement("a", {
                        onClick: u,
                        className: d()("group relative flex h-8 items-center justify-center rounded p-1", O.fill3Hover, {
                            "cursor-default": e
                        }),
                        href: e ? void 0 : o
                    }, e ? t.createElement(X, {
                        className: d()("h-[20px] w-[20px]", s)
                    }) : t.createElement(J, {
                        className: d()("h-[20px] w-[20px]", `${P} ${B}`, s)
                    }), t.createElement("span", {
                        className: d()("mx-1 text-sm font-medium", {
                            [`${P} ${B}`]: !e,
                            [O.labelBrandOrange]: e
                        })
                    }, r ? "-" : a)))
                },
                tr = ({
                    Component: e,
                    className: r,
                    ...a
                }) => t.createElement("div", {
                    className: d()(B, O.fill3Hover, Y.navIcon, "group cursor-pointer focus:outline-none", r)
                }, t.createElement(e, Object.assign({
                    height: 20,
                    width: 20
                }, a, {
                    className: `${P} `
                }))),
                lr = ({
                    hasUnread: e
                }) => t.createElement(tr, {
                    Component: e ? re : ee
                })
        }
    }
]);