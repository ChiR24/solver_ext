"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_full_screen_view_header_scss-src_shared_styles_split_scss-src_sh-7851a0"], {
        GjFC: () => {},
        CnOq: () => {},
        piGc: () => {},
        i3qf: () => {},
        TLuM: (e, t, s) => {
            s.d(t, {
                Z: () => d
            });
            var a = s("L5+t"),
                r = (s("Z2Ku"), s("DTvD")),
                o = s.n(r),
                n = s("17x9"),
                i = s.n(n),
                l = s("TSYQ"),
                c = s.n(l),
                u = s("6wV0"),
                m = s("915B");
            s("GjFC"), s("CnOq");
            class p extends o().Component {
                getTestCaseData() {
                    var {
                        compileData: e
                    } = this.props, {
                        testcase_status: t,
                        customtestcase: s,
                        hide_stdstream: a,
                        kind: r,
                        stdin: o,
                        stdout: n,
                        expected_output: i,
                        testcase_message: l,
                        customchecker_message: c,
                        stdout_debug: u,
                        stderr: m,
                        lexical_penalty: p,
                        lexical_penalty_keywords: d,
                        sample_test_cases_index: h,
                        signal: g
                    } = e, b = e.trimmed_fields || [];
                    return t.map(((e, v) => {
                        var f, E, C, k, _, y, S, N, P, w = g[v];
                        return s || (a || b.includes("expected_output") || (f = i[v]), l[v] && "Success" !== l[v] && (E = l[v]), c && (C = c), p && (k = d.join(",")), l[v] && (P = h[v])), a || ("database" === r || b.includes("stdin") || (_ = o[v]), b.includes("stdout") || (y = n[v]), !b.includes("stdout_debug") && u && u[v] && (S = u[v]), !b.includes("stderr") && m && m[v] && (N = m[v])), {
                            isSample: !0,
                            expectedOutput: f,
                            compilerMessage: E,
                            customCheckerMessage: C,
                            lexicalPenalty: k,
                            stdIn: _,
                            stdOut: y,
                            stdOutDebug: S,
                            stdErr: N,
                            status: t[v],
                            id: P,
                            signal: w
                        }
                    }))
                }
                getStatusInfo() {
                    var {
                        compileData: e
                    } = this.props, {
                        customtestcase: t,
                        signal: s,
                        testcase_status: a,
                        lexical_penalty: r
                    } = e, o = "", n = "", i = "", l = a.filter((e => 0 === e)).length, c = a.length;
                    return t ? (s && s[0] ? (o = "Runtime error :(", i = "error") : (o = "Compilation Successful :)", i = "success"), n = "Click the Submit Code button to run your code against all the test cases.") : s && s[0] ? (o = "Runtime Error :(", i = "error") : l > 0 && s && !s[0] ? (o = "Wrong Answer :(", n = "".concat(l, "/").concat(c, " test ").concat(1 === c ? "case" : "cases", " failed"), i = "error") : (o = r ? "Congratulations, you passed the sample test case, but you had a penalty of ".concat(100 * r, "%") : "Congratulations!", n = "You have passed the sample test cases. Click the submit button to run your code against all the test cases.", i = "success"), {
                        statusText: o,
                        statusClass: i,
                        subText: n
                    }
                }
                renderErrors() {
                    var {
                        errors: e = []
                    } = this.props.compileData;
                    return e && e.length ? o().createElement(u.Z, {
                        layer: 2,
                        className: "compilation-errors-card"
                    }, o().createElement("div", {
                        className: "compilation-error-heading"
                    }, "Codechecker Error "), e.map(((e, t) => o().createElement("pre", {
                        key: t,
                        className: "compilation-errors"
                    }, e)))) : null
                }
                renderCompileMessage() {
                    var {
                        compileData: e
                    } = this.props, {
                        compilemessage: t,
                        result: s,
                        hide_stdstream: a,
                        kind: r
                    } = e, n = e.trimmed_fields || [];
                    if (s && !a && !n.includes("compilemessage") && "database" !== r) return o().createElement(u.Z, {
                        layer: 2,
                        className: c()("compile-time-response")
                    }, o().createElement("div", {
                        className: "compile-time full-width"
                    }, o().createElement("div", {
                        className: "compile-message"
                    }, o().createElement("p", {
                        className: "compile-field-label"
                    }, "Compile Message"), o().createElement("pre", {
                        className: c()("compile-output-message compile-message", {
                            "no-response": !t
                        })
                    }, o().createElement("code", {
                        className: "bold"
                    }, t || "~ no response on stderr ~"))), o().createElement("div", {
                        className: "exit-status"
                    }, o().createElement("p", {
                        className: "compile-field-label"
                    }, "Exit Status"), o().createElement("pre", {
                        className: "compile-output-message compile-message"
                    }, o().createElement("code", {
                        className: "bold"
                    }, s)))))
                }
                renderCompileTimeError() {
                    var {
                        result: e
                    } = this.props.compileData;
                    if (e) return o().createElement("div", {
                        className: "compile-error-wrapper"
                    }, o().createElement("p", {
                        className: "status compile-error"
                    }, "Compilation error :("), o().createElement("p", {
                        className: "compile-advice"
                    }, "Check the compiler output, fix the error and try again."))
                }
                renderCompilationResultHeading() {
                    var {
                        compileData: e
                    } = this.props, {
                        result: t,
                        testcase_status: s
                    } = e;
                    if (!t && 0 !== s.length) {
                        var a = this.getStatusInfo();
                        return o().createElement("div", {
                            className: "compile-error-wrapper"
                        }, o().createElement("p", {
                            className: c()("status compile-".concat(a.statusClass))
                        }, a.statusText), o().createElement("p", {
                            className: "compile-advice"
                        }, a.subText))
                    }
                }
                renderNoSampleTestCases() {
                    return o().createElement(u.Z, {
                        layer: 2,
                        className: "no-sample-testcases"
                    }, o().createElement("div", {
                        className: "bold"
                    }, "No sample test-cases for this question. Please test your code against custom input."))
                }
                renderTestCaseResult() {
                    var {
                        compileData: e,
                        bingChallenge: t,
                        challenge: s
                    } = this.props, {
                        result: a,
                        customtestcase: r,
                        compilemessage: n,
                        compile_command: i
                    } = e, l = this.getTestCaseData();
                    if (!a) return l.length ? o().createElement(m.Z, {
                        testCaseData: l,
                        type: "compile",
                        bingChallenge: t,
                        customtestcase: r,
                        challenge: s,
                        statusCode: 1,
                        result: a,
                        compileMessage: n,
                        compileCommand: i
                    }) : this.renderNoSampleTestCases()
                }
                render() {
                    var {
                        compileData: e
                    } = this.props, {
                        status: t
                    } = e;
                    return t ? o().createElement("div", {
                        className: "code-compile-test-view theme-m-content"
                    }, this.renderErrors(), this.renderCompileTimeError(), this.renderCompilationResultHeading(), this.renderCompileMessage(), this.renderTestCaseResult()) : null
                }
            }(0, a.Z)(p, "propTypes", {
                compileData: i().object,
                bingChallenge: i().bool,
                challenge: i().object.isRequired
            });
            const d = p
        },
        "Vnb/": (e, t, s) => {
            s.d(t, {
                ZP: () => T
            }), s("ioFf");
            var a = s("L5+t"),
                r = s("DTvD"),
                o = s.n(r),
                n = s("vN+2"),
                i = s.n(n),
                l = s("17x9"),
                c = s.n(l),
                u = s("kU9v"),
                m = s("3wkN"),
                p = s("RmCZ"),
                d = s("6wV0"),
                h = s("CmRW"),
                g = s("RSe9"),
                b = s("UwUt"),
                v = s("TBNV"),
                f = s("sLmT"),
                E = s("rpVu"),
                C = s("6GtL"),
                k = s("XBRQ"),
                _ = s("c277"),
                y = s("VD8A"),
                S = s("OYaA");

            function N(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            var w = o().lazy((() => Promise.all([s.e("defaultVendors-node_modules_jquery_dist_jquery_js"), s.e("src_shared_community_community_ui_editors_codeshell_editor_js")]).then(s.bind(s, "LF4l"))));
            class D extends o().Component {
                constructor() {
                    super(), (0, a.Z)(this, "state", void 0), (0, a.Z)(this, "compileTest", (e => {
                        var {
                            onChallengeTestRun: t,
                            appUtil: s,
                            profile: a
                        } = this.props;
                        a.username ? t(e) : s.isAuthRequired({
                            type: "info",
                            data: "Please signup or login to perform this action."
                        })
                    })), (0, a.Z)(this, "submitChallenge", (e => {
                        var {
                            profile: t,
                            challenge: s,
                            company: a,
                            onChallengeSubmission: r,
                            appUtil: o
                        } = this.props, {
                            submit_disabled: n
                        } = s;
                        t.username ? n ? this.setState({
                            submissionDisabledModal: !0
                        }) : (a.id && !a.following && this.followCompany(), a.slug && (e.companyName = a.name, e.companySlug = a.slug, e.challengeSlug = s.slug), r(e)) : o.isAuthRequired({
                            type: "info",
                            data: "Please signup or login to perform this action."
                        })
                    })), (0, a.Z)(this, "toggleOverlay", (() => {
                        var {
                            challenge: e
                        } = this.props, t = {
                            attribute1: "EditorOverlay",
                            attribute2: e.id,
                            attribute3: e.slug,
                            attribute4: e.contest_slug
                        };
                        C.Z.track("Click", "HrEditorOverlayClickOnMobile", t), this.setState({
                            overlayActive: !1
                        })
                    })), this.state = {
                        overlayActive: !0
                    }
                }
                checkNonEditableHead() {
                    var {
                        challenge: e
                    } = this.props, t = (0, y.O7)(e), {
                        hasHiddenSkeletonPresent: s
                    } = t;
                    return !!s
                }
                getRestUrl() {
                    var {
                        contest_slug: e,
                        slug: t
                    } = this.props.challenge;
                    return "/rest/contests/".concat(e, "/challenges/").concat(t)
                }
                followCompany() {
                    var {
                        company: e
                    } = this.props;
                    (0, u.ajaxPostWithToken)({
                        url: (0, f.kG)("follow"),
                        data: {
                            followable_type: "Company",
                            followable_id: e.id
                        }
                    })
                }
                getEditorConfig() {
                    var {
                        challenge: e,
                        zenMode: t,
                        contest: s
                    } = this.props;
                    return {
                        showCustomInput: e.compile_and_test && e.custom_case && !t,
                        showCompileTest: e.compile_and_test,
                        showSubmit: !0,
                        showUploadCode: !t,
                        showFullScreen: !t,
                        foldCode: !0,
                        enableTrackTyping: !0,
                        compile_button_text: "Run Code",
                        enableIntellisense: !0,
                        enableLiveAutocomplete: !0,
                        enableLiveAutocompleteLinting: !1,
                        inReact: !0,
                        enableVersioning: !1,
                        versionIds: e.versionIds || [],
                        versioningRestUrl: "".concat(this.getRestUrl(), "/versions"),
                        dynamicMode: !0,
                        languages: e.languages,
                        defaultLanguage: e.default_language,
                        autoSaveNamespace: "hr-cedit-contest:".concat(s.id, "-challenge:").concat(e.id)
                    }
                }
                canRenderMonacoEditor() {
                    return !!this.checkNonEditableHead()
                }
                renderHrMonacoEditor(e) {
                    var {
                        profile: t,
                        challenge: s,
                        contest: a,
                        metadata: n,
                        isFullScreen: i,
                        showDarkModePanel: l,
                        onEditorLoad: c,
                        isMockInterviews: u
                    } = this.props, {
                        isMobile: m
                    } = n, p = P(P({}, e), {}, {
                        isMobile: m,
                        options: {
                            fontFamily: "SourceCodePro, monospace",
                            fontSize: 15,
                            wordWrap: "on",
                            scrollbar: {
                                alwaysConsumeMouseWheel: !1
                            }
                        },
                        challengeId: s.id,
                        contestId: a.id,
                        onEditorLoad: c,
                        isMockInterviews: u
                    });
                    return o().createElement(r.Fragment, null, !i && t.dark_mode_seen && o().createElement(S.Z, {
                        featureId: 9,
                        align: "left",
                        className: "feature-feedback-bottom-right-fixed",
                        popoverClassName: "popover-bottom-right-fixed",
                        coordinate: {
                            right: "83px",
                            bottom: "20px"
                        },
                        theme: "theme-m"
                    }), !i && l && this.renderDarkModePanel(), o().createElement(_.ZP, p))
                }
                renderOverlay() {
                    return o().createElement("div", {
                        className: "editor-mobile-overlay",
                        onClick: this.toggleOverlay
                    }, o().createElement("div", {
                        className: "align-absolute-center text-center"
                    }, o().createElement("i", {
                        className: "ui-icon-monitor ui-icon-mobile-overlay"
                    }), o().createElement("p", {
                        className: "ide-mobile-msg"
                    }, "Tap to enable the editor. We recommend coding on the desktop for the best experience.")))
                }
                renderDarkModePanel() {
                    var {
                        onDarkModeIntroUse: e
                    } = this.props;
                    return o().createElement(k.Hi, null, o().createElement("section", {
                        className: "dark-mode-panel monospace"
                    }, o().createElement(d.Z, null, o().createElement("article", {
                        className: "dark-mode-intro"
                    }, o().createElement("div", {
                        className: "dark-mode-intro-content"
                    }, o().createElement("h2", {
                        className: "dark-mode-intro-title"
                    }, "Welcome to the dark side!"), o().createElement("p", {
                        className: "dark-mode-intro-description"
                    }, "We've introduced a new Dark Mode for a better coding experience.")), o().createElement(h.kq, {
                        className: "dark-mode-intro-start-btn",
                        onClick: () => e("start_intro")
                    }, "Try Dark Mode"), o().createElement(g.Z, {
                        Icon: p.Z,
                        tooltip: !1,
                        btnText: "Dismiss the introduction",
                        className: "dark-mode-intro-dismiss-btn",
                        onClick: () => e("dismiss_intro")
                    })))))
                }
                render() {
                    var {
                        challenge: e,
                        zenMode: t,
                        submission: s,
                        onCodeChange: a,
                        onCodeChangeCallback: n,
                        errorMarkers: i,
                        toggleFullScreen: l,
                        compileTestBlocked: c,
                        submitBlocked: u,
                        metadata: p,
                        isFullScreen: d
                    } = this.props, {
                        submissionDisabledModal: h,
                        overlayActive: g
                    } = this.state, {
                        submit_disabled_message: f
                    } = e, {
                        isMobile: E
                    } = p, C = (0, y.O7)(e), k = this.getEditorConfig(), _ = {
                        key: e.id,
                        editorConfig: k,
                        languageTemplate: C,
                        submission: s,
                        onCompileTest: this.compileTest,
                        onSubmitCode: this.submitChallenge,
                        onCodeChangeCallback: n,
                        toggleFullScreen: l,
                        compileTestBlocked: c,
                        submitBlocked: u,
                        isFullScreen: d
                    }, S = P(P({}, _), {}, {
                        editorConfig: P(P({}, _.editorConfig), {}, {
                            enableIntellisense: !1
                        }),
                        onCodeChange: a,
                        errorMarkers: i,
                        confirmSubmitCode: "master" !== e.contest_slug,
                        disableLineWrapping: t,
                        theme: "theme-m"
                    }), N = this.canRenderMonacoEditor();
                    return o().createElement("div", null, o().createElement("div", null, g && E && this.renderOverlay()), N ? this.renderHrMonacoEditor(_) : o().createElement(m.Z, null, o().createElement(r.Suspense, {
                        fallback: o().createElement(b.Z, null)
                    }, o().createElement(w, S))), h && o().createElement(v.Z, {
                        title: "Submission Disabled",
                        className: "submission-disabled-modal",
                        open: !0,
                        onClose: () => this.setState({
                            submissionDisabledModal: !1
                        }),
                        size: "small"
                    }, o().createElement("div", null, f || o().createElement("span", null, "This challenge is disabled now. ", o().createElement("br", null), "Please try this challenge after some time."))))
                }
            }(0, a.Z)(D, "propTypes", {
                profile: c().object,
                submission: c().object,
                company: c().shape({
                    id: c().string,
                    name: c().string,
                    slug: c().string,
                    following: c().bool
                }),
                challenge: c().object,
                onEditorLoad: c().func,
                toggleFullScreen: c().func,
                zenMode: c().bool,
                contest: c().object,
                appUtil: c().object.isRequired,
                onCodeChange: c().func,
                onCodeChangeCallback: c().func,
                onChallengeSubmission: c().func.isRequired,
                onChallengeTestRun: c().func,
                onDarkModeIntroUse: c().func,
                showDarkModePanel: c().bool,
                compileTestBlocked: c().bool,
                submitBlocked: c().bool,
                errorMarkers: c().object,
                isFullScreen: c().bool,
                isMockInterviews: c().bool
            }), (0, a.Z)(D, "defaultProps", {
                forkable: !1,
                clipboardnotset: !0,
                showDarkModePanel: !1,
                zenMode: !1,
                profile: {},
                company: {},
                onChallengeTestRun: i(),
                onDarkModeIntroUse: i(),
                isMockInterviews: !1
            });
            const T = D = (0, E.Z)(D)
        },
        "1ZGV": (e, t, s) => {
            s.d(t, {
                I: () => a,
                d: () => r
            }), s("pIFo"), s("a1Th");
            var a = e => {
                    var {
                        customtestcase: t,
                        result: s,
                        signal: a,
                        testcase_status: r
                    } = e, o = "", n = "", i = r.filter((e => 0 === e)).length;
                    return t ? a && a[0] ? (o = "Runtime Error", n = "error") : (o = "Compilation Successful", n = "success") : s ? (n = "error", o = "Compilation Error") : a && a[0] ? (o = "Runtime Error", n = "error") : i > 0 && a && !a[0] ? (o = "Wrong Answer", n = "error") : (o = "Compilation Successful", n = "success"), {
                        statusText: o,
                        statusClass: n
                    }
                },
                r = e => {
                    var t = e.replace(/(\..+? \{[^}]+\};?)/g, ""),
                        s = document.createElement("span");
                    return s.innerHTML = t, [s.textContent || s.innerText].toString().replace(/ +/g, " ")
                }
        },
        "8Oi2": (e, t, s) => {
            s.d(t, {
                ZP: () => ce
            });
            var a = s("+9dH"),
                r = s("L5+t"),
                o = (s("Z2Ku"), s("ioFf"), s("DTvD")),
                n = s.n(o),
                i = s("TSYQ"),
                l = s.n(i),
                c = s("f0Wu"),
                u = s.n(c),
                m = s("0ier"),
                p = s("ANjH"),
                d = s("rpVu"),
                h = s("5F93"),
                g = s("6wV0"),
                b = s("CmRW"),
                v = s("QeER"),
                f = s("JlLr"),
                E = s("uiB3"),
                C = s("17x9"),
                k = s.n(C),
                _ = s("LJb6"),
                y = s("bVDs");
            class S extends o.Component {
                render() {
                    var {
                        open: e,
                        title: t,
                        shareTrigger: s,
                        icon: a,
                        shareMeta: r,
                        appUtil: o,
                        onClose: i
                    } = this.props;
                    return e ? n().createElement(_.Z, {
                        theme: "theme-m",
                        open: e,
                        onClose: i
                    }, n().createElement("div", {
                        className: "notify-modal"
                    }, n().createElement("div", {
                        className: "text-center inline-block plA"
                    }, n().createElement("div", {
                        className: "notify-wrapper"
                    }, a && n().createElement("img", {
                        src: o.assetPath(a)
                    }), n().createElement("h3", {
                        className: "title"
                    }, t), n().createElement("div", null, n().createElement("p", {
                        className: "bold share-message"
                    }, "Share with your friends:"), n().createElement("div", {
                        className: "social-share-wrap inline-block"
                    }, n().createElement(y.ZP, {
                        page: s,
                        name: "trigger",
                        slug: "default",
                        meta: r
                    }))))))) : null
                }
            }(0, r.Z)(S, "propTypes", {
                open: k().bool,
                title: k().string,
                shareTrigger: k().string,
                icon: k().string,
                shareMeta: k().object,
                appUtil: k().object,
                onClose: k().func
            }), (0, r.Z)(S, "defaultProps", {
                open: !1,
                onClose: function() {}
            });
            const N = S = (0, d.Z)(S);
            var P = s("vN+2"),
                w = s.n(P);

            function D(e) {
                var {
                    promoMeta: {
                        heading: t,
                        subtitle: s,
                        cta_link: a,
                        cta_text: r
                    },
                    onClick: o
                } = e;
                return n().createElement(g.Z, {
                    className: "promo-skills"
                }, n().createElement("h6", {
                    className: "promo-skills-heading"
                }, t), n().createElement("div", {
                    className: "card-row"
                }, n().createElement("p", {
                    className: "promo-skills-subtitle"
                }, s), n().createElement(b.kS, {
                    role: "link",
                    className: "promo-skills-cta",
                    to: a,
                    onClick: o,
                    "data-event-category": "HRC Skills",
                    "data-event-label": "".concat(r, " ").concat(a)
                }, r)))
            }
            D.defaultProps = {
                onClick: w()
            };
            const T = D;
            var Z = s("6GtL"),
                x = s("jPKr"),
                R = s("TBNV"),
                O = s("VQj3"),
                M = s("x+Gs"),
                j = s("6zQX");
            class I extends n().Component {
                constructor() {
                    super(...arguments), (0, r.Z)(this, "shareOnFb", (() => {
                        var {
                            shareMessage: e,
                            url: t
                        } = this.props, s = "https://www.facebook.com/sharer.php?s=100&p".concat(encodeURIComponent("[url]"), "=").concat(encodeURIComponent(t), "&p").concat(encodeURIComponent("[title]"), "=").concat(window.document.title, "&p").concat(encodeURIComponent("[summary]"), "=").concat(e);
                        this.shareOnPopup(s)
                    })), (0, r.Z)(this, "shareOnTwitter", (() => {
                        var {
                            shareMessage: e
                        } = this.props, t = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e));
                        this.shareOnPopup(t)
                    })), (0, r.Z)(this, "disableShareNotification", (() => {
                        var {
                            type: e
                        } = this.props;
                        j.wS.set("socialshare-".concat(e), "disabled")
                    }))
                }
                shareOnPopup(e) {
                    var t = screen.width / 2 - 300,
                        s = screen.height / 2 - 175;
                    window.open(e, "_blank", "height=".concat(350, ",width=").concat(600, ",top=").concat(s, ",left=").concat(t)), window.focus()
                }
                renderShareDialog() {
                    var {
                        open: e,
                        title: t,
                        message: s,
                        appUtil: a,
                        onClose: r
                    } = this.props;
                    return n().createElement(R.Z, {
                        open: e,
                        title: t,
                        onClose: r,
                        size: "small"
                    }, n().createElement("center", null, n().createElement("p", null, s), n().createElement("p", null, "Share your success with your friends"), n().createElement("p", {
                        className: "block-center mjT"
                    }, n().createElement("a", {
                        className: "fb-share msR",
                        onClick: this.shareOnFb
                    }, n().createElement("img", {
                        src: a.assetPath("fb-share.png")
                    })), n().createElement("a", {
                        className: "tweet",
                        onClick: this.shareOnTwitter
                    }, n().createElement("img", {
                        src: a.assetPath("tweet-filler.png")
                    }))), n().createElement("p", null, n().createElement("small", null, n().createElement("a", {
                        className: "js-disable-notifications",
                        onClick: this.disableShareNotification
                    }, "Don't show these notifications anymore")))))
                }
                render() {
                    var {
                        open: e,
                        type: t
                    } = this.props;
                    return e ? n().createElement(M.k8, {
                        fallback: n().createElement(O.Z, {
                            diameter: 80
                        })
                    }, "disabled" !== j.wS.get("socialshare-".concat(t)) && this.renderShareDialog()) : null
                }
            }(0, r.Z)(I, "propTypes", {
                open: k().bool,
                title: k().string.isRequired,
                message: k().string.isRequired,
                shareMessage: k().string.isRequired,
                url: k().string.isRequired,
                type: k().string.isRequired,
                appUtil: k().object.isRequired,
                onClose: k().func
            });
            const A = I = (0, d.Z)(I);
            var L = s("zE4Q"),
                U = s("XBRQ"),
                W = s("hz+Z"),
                F = s("OGsD");
            class q extends o.PureComponent {
                isPlaylist() {
                    var {
                        h_l: e
                    } = this.props;
                    return (0, F.QJ)(e)
                }
                renderBadge() {
                    var {
                        badge: e
                    } = this.props;
                    return n().createElement("div", {
                        className: "submission-badge-wrapper"
                    }, n().createElement(L.Z, {
                        badge: e,
                        shadow: !0
                    }))
                }
                renderProgressText() {
                    var {
                        badge: e,
                        score: t
                    } = this.props, s = (0, h._6)("point", t), a = "You have earned ".concat(t, " ").concat(s, "!"), r = (0, W.EA)(e, this.isPlaylist() ? "playlist" : "submission");
                    return n().createElement("div", {
                        className: "wrap-progress-text"
                    }, n().createElement("div", {
                        className: "earned-points"
                    }, a), n().createElement("div", {
                        className: "points-left"
                    }, r))
                }
                renderProgressBar() {
                    var {
                        badge: e
                    } = this.props, {
                        total_points: t,
                        current_points: s
                    } = e, a = (0, W._3)(e, this.isPlaylist());
                    return n().createElement("div", {
                        className: "wrap-progress-bar"
                    }, n().createElement(v.Z, {
                        value: a,
                        theme: "theme-m"
                    }), n().createElement("div", {
                        className: "progress-count text-content"
                    }, n().createElement("span", {
                        className: "percentage"
                    }, a, "%"), !!t && n().createElement("span", {
                        className: "points-remaining"
                    }, s, "/", t)))
                }
                render() {
                    return n().createElement("div", null, n().createElement(U.Hi, null, n().createElement("div", {
                        className: "submission-progress-bar justify-content-between align-items-center"
                    }, this.renderBadge(), this.renderProgressText(), this.renderProgressBar())), n().createElement(U.ij, null, n().createElement("div", {
                        className: "submission-progress-bar justify-content-between align-items-center"
                    }, n().createElement("div", {
                        className: "mobile-text-container"
                    }, n().createElement("div", {
                        className: "mobile-text-progressbar-wrapper"
                    }, this.renderProgressText(), this.renderProgressBar()), this.renderBadge()))))
                }
            }(0, r.Z)(q, "propTypes", {
                badge: k().object,
                score: k().oneOfType([k().string, k().number]),
                h_l: k().string
            });
            const H = q;
            var G = s("915B"),
                B = s("7gKi"),
                V = s.n(B),
                Q = s("kU9v"),
                z = s("sLmT");
            class Y extends n().PureComponent {
                constructor(e) {
                    super(e), (0, r.Z)(this, "logRef", void 0), (0, r.Z)(this, "logWrapperRef", void 0), (0, r.Z)(this, "pollId", void 0), (0, r.Z)(this, "pollXhr", void 0), (0, r.Z)(this, "pollLogs", (() => {
                        var {
                            submissionData: e,
                            isProcessing: t
                        } = this.props;
                        this.state.shouldPollLogs ? (this.pollXhr = function(e) {
                            var {
                                id: t,
                                contest_slug: s,
                                challenge_slug: a
                            } = e;
                            return (0, Q.ajaxGetWithToken)({
                                url: (0, z.kG)("challengeGitSubmissionLiveLog", {
                                    submissionId: t,
                                    contestSlug: s,
                                    challengeSlug: a
                                }),
                                headers: {
                                    Accept: "text/html"
                                }
                            })
                        }(e), this.pollXhr.then((e => {
                            !e || (this.setState({
                                logs: e
                            }), t) ? this.startPoll() : this.stopPoll()
                        }))) : this.stopPoll()
                    })), this.state = {
                        logs: "",
                        shouldPollLogs: "" === e.pubSubLogs
                    }, this.logRef = n().createRef(), this.logWrapperRef = n().createRef()
                }
                componentDidMount() {
                    this.state.shouldPollLogs && this.pollLogs()
                }
                componentDidUpdate(e, t) {
                    var {
                        pubSubLogs: s
                    } = e, {
                        logs: a
                    } = t, {
                        pubSubLogs: r,
                        isSubmissionPage: o
                    } = this.props, {
                        logs: n
                    } = this.state;
                    r && this.stopPoll(), s === r && a === n || o || (this.logRef.current.scrollIntoView({
                        behaviour: "smooth",
                        block: "end"
                    }), this.logWrapperRef.current.scrollIntoView({
                        behaviour: "smooth",
                        block: "start"
                    }))
                }
                componentWillUnmount() {
                    this.stopPoll()
                }
                stopPoll() {
                    this.pollId && clearTimeout(this.pollId), this.pollXhr && this.pollXhr.abort(), this.setState({
                        shouldPollLogs: !1
                    })
                }
                startPoll() {
                    this.pollId && clearTimeout(this.pollId), this.pollId = setTimeout(this.pollLogs, 1e3)
                }
                render() {
                    var {
                        pubSubLogs: e,
                        isProcessing: t,
                        isSubmissionPage: s
                    } = this.props, {
                        logs: a
                    } = this.state;
                    return n().createElement("div", {
                        className: l()("git-ux-logs-wrapper", {
                            "git-ux-logs-wrapper-submission": s
                        })
                    }, n().createElement("h4", {
                        className: "git-ux-logs-heading"
                    }, t ? "Running tests..." : "Test Results"), n().createElement("div", {
                        className: "git-ux-logs",
                        ref: this.logWrapperRef
                    }, n().createElement("pre", {
                        className: "git-ux-logs-output",
                        ref: this.logRef
                    }, n().createElement(V(), null, a || e || "Setting up environment..."))))
                }
            }
            const K = Y;
            var X = s("4Qk4"),
                J = s("5j/b");
            const $ = {
                buyTestCase: e => t => {
                    var {
                        challengeId: s,
                        contestSlug: a,
                        submissionId: r,
                        testCaseId: o
                    } = e;
                    return (0, Q.ajaxPostWithToken)({
                        url: (0, z.kG)("buyTestCase", {
                            challengeId: s,
                            contestSlug: a,
                            testCaseId: o
                        }),
                        data: {
                            submission_id: r
                        },
                        success(e) {
                            t({
                                type: J.Z.PROFILE.UPDATE_PROFILE,
                                data: {
                                    profile: e
                                }
                            })
                        }
                    })
                }
            };
            var ee = s("cUsN"),
                te = s("04gq"),
                se = s("vlxI"),
                ae = s("RMPL"),
                re = s("ZxB4"),
                oe = (s("GjFC"), s("CnOq"), s("Py6l"));

            function ne(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(s), !0).forEach((function(t) {
                        (0, r.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : ne(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            class le extends n().Component {
                constructor(e) {
                    super(e), (0, r.Z)(this, "stopPoll", void 0), (0, r.Z)(this, "hasSolvedChallenge", void 0), (0, r.Z)(this, "pubsubChannelName", void 0), (0, r.Z)(this, "debounceSubmissionPoll", void 0), (0, r.Z)(this, "pubsub", void 0), (0, r.Z)(this, "pubsubEventCallback", ((e, t) => {
                        try {
                            var s = "" === t ? {} : JSON.parse(t);
                            t && this.setState({
                                liveStatus: s
                            }), s && ("log" === e && null != s.log_message && this.setState({
                                pubSubLogs: "".concat(this.state.pubSubLogs).concat(s.log_message, "\n")
                            }), 5 === s.live_message_code && (this.debounceSubmissionPoll.destroy(), this.startSubmissionPoll(), this.pubsub.unsubscribe(this.pubsubChannelName))), this.debounceSubmissionPoll()
                        } catch (e) {
                            this.startSubmissionPoll(), this.pubsub.unsubscribe(this.pubsubChannelName)
                        }
                    })), (0, r.Z)(this, "handleSubmissionComplete", (e => {
                        var {
                            completeCallback: t
                        } = this.props;
                        null != t && this.props.completeCallback(e), this.updateNux()
                    })), (0, r.Z)(this, "updateNux", (() => {
                        var {
                            profileActions: e,
                            submissionData: t
                        } = this.props;
                        "Accepted" === t.status && this.isPartOfNux() && (e.updateProfile("me", {
                            status_solve_me_first: "solved"
                        }), Z.Z.batch_track("ProceedSuccess", "Proceed"))
                    })), (0, r.Z)(this, "submissionDataHandler", (e => {
                        e = e || this.props;
                        var {
                            submissionData: t
                        } = e, {
                            social_share_type: s,
                            track: a
                        } = t;
                        s && this.showSocialDialog(s, a || {})
                    })), (0, r.Z)(this, "getLiveStatus", (() => {
                        var {
                            live_status: e,
                            is_sample_testcase: t
                        } = this.props.submissionData, {
                            liveStatus: s
                        } = this.state, a = t.length, r = s || e || {};
                        return {
                            progress: r.progress,
                            maxLimit: r.progress_states,
                            testcaseStatus: r.diff_status || r.testcase_status,
                            liveMessage: r.live_message || "Started",
                            totalCount: a,
                            signal: r.signal_status || r.codechecker_signal
                        }
                    })), (0, r.Z)(this, "shouldRenderTestcaseUI", (e => {
                        var {
                            submissionData: t
                        } = this.props;
                        return !(0, te.uc)(t) || e && e.length
                    })), (0, r.Z)(this, "sendAdMetrics", ((e, t) => {
                        var {
                            promoSlot: s
                        } = this.props, {
                            heading: a,
                            subtitle: r,
                            cta_text: o,
                            cta_link: n,
                            ad_unit_type: i
                        } = t, l = {
                            attribute1: s,
                            attribute2: a,
                            attribute3: r,
                            attribute5: o,
                            attribute6: i
                        };
                        Z.Z.batch_track(e, "AdUnitSubmission", l), "View" === e && window && "function" == typeof window.jsTrackGoogleAnalytics && window.jsTrackGoogleAnalytics({
                            eventCategory: "HRC Skills",
                            eventAction: "View",
                            eventLabel: "".concat(o, " ").concat(n)
                        })
                    })), this.state = {
                        pubSubLogs: ""
                    }, e.profile.show_pubsub_socketio ? this.pubsub = ae.Z : this.pubsub = se.Z, this.hasSolvedChallenge = e.profile.has_solved_a_challenge, this.pubsubChannelName = "".concat(e.submissionData.codechecker_hash, "-v2"), this.startSubmissionPoll = this.startSubmissionPoll.bind(this), this.debounceSubmissionPoll = (0, h.Ds)(this.startSubmissionPoll, 15e3)
                }
                componentDidMount() {
                    var {
                        submissionData: e
                    } = this.props;
                    e && (this.submissionDataHandler(), this.updateNux(), this.subscribeSubmission())
                }
                UNSAFE_componentWillReceiveProps(e) {
                    e.submissionData !== this.props.submissionData && this.submissionDataHandler(e)
                }
                componentWillUnmount() {
                    this.stopPoll && this.stopPoll(), this.debounceSubmissionPoll && this.debounceSubmissionPoll.destroy(), this.pubsub.unsubscribe(this.pubsubChannelName, this.pubsubEventCallback)
                }
                subscribeSubmission() {
                    this.pubsub.getConnection() || this.pubsub.createConnection(this.props.pubSubV2Host);
                    var {
                        submissionData: {
                            language: e
                        }
                    } = this.props;
                    ["objectivec", "swift"].includes(e) ? this.startSubmissionPoll() : (this.pubsub.subscribe(this.pubsubChannelName, this.pubsubEventCallback, this.startSubmissionPoll), this.pubsub.alreadySubscribed(this.pubsubChannelName) ? this.debounceSubmissionPoll() : this.startSubmissionPoll())
                }
                startSubmissionPoll() {
                    var {
                        submissionId: e,
                        submissionData: t,
                        challenge: s,
                        submissionActions: a,
                        profileActions: r,
                        currentPlaylist: o,
                        profile: n
                    } = this.props, {
                        contest_slug: i,
                        slug: l
                    } = s;
                    this.pubsub.alreadySubscribed(this.pubsubChannelName) && this.pubsub.unsubscribe(this.pubsubChannelName), (0, te.xk)(t) && (this.stopPoll = (0, te.k3)({
                        contestSlug: i,
                        challengeSlug: l,
                        submissionId: e,
                        submissionActions: a,
                        profileActions: r,
                        onComplete: this.handleSubmissionComplete,
                        postCompleteActions: !0,
                        playlistSlug: o.slug,
                        profile: n
                    }))
                }
                isPartOfNux() {
                    var {
                        profile: e,
                        challenge: t
                    } = this.props;
                    return "solve-me-first" === t.slug && !1 === this.hasSolvedChallenge && ("reached_challenge_page" === e.status_solve_me_first || "solved" === e.status_solve_me_first)
                }
                getStatusHeadingMessage(e, t) {
                    return "".concat(e, "/").concat(t, " test ").concat(1 === t ? "case" : "cases", " failed :(")
                }
                getStatusInfo() {
                    var {
                        submissionData: e
                    } = this.props, {
                        status: t,
                        testcase_status: s
                    } = e, a = t.startsWith("Accepted"), r = "", o = "", i = "", l = s.filter((e => 0 === e)).length;
                    if (a) i = "success", r = "Congrats, you solved this challenge!";
                    else {
                        i = "error", o = n().createElement("div", {
                            className: "submission-ask-help"
                        }, "Ask your friends for help:", n().createElement(y.ZP, {
                            className: "inline-block msL",
                            align: "center",
                            name: e.name,
                            page: "challenge_attempt_share",
                            slug: e.slug,
                            quote: "Can you help me solve this challenge?",
                            hashtag: "#hackerrank"
                        }));
                        var c = s.length;
                        t.startsWith("Wrong") ? r = this.getStatusHeadingMessage(l, c) : (t.startsWith("Compilation") || t.startsWith("Terminated") || t.startsWith("Runtime")) && (r = "".concat(t, " :("))
                    }
                    return {
                        statusClass: i,
                        statusHeading: r,
                        subText: o
                    }
                }
                getSubmissionData() {
                    var {
                        submissionData: e
                    } = this.props, {
                        testcase_status: t,
                        is_sample_testcase: s,
                        language: a,
                        compile_status: r,
                        status: o
                    } = e, n = (0, te.vc)(e);
                    if (t && t.length && ("Queued" === o || 255 !== r) && "test" !== a && n.length) return s.map(((e, t) => ({
                        loadData: !0,
                        compilerMessage: n[t].message,
                        status: n[t].status,
                        isSample: n[t].isSample,
                        signal: n[t].signal
                    })))
                }
                showSocialDialog(e, t) {
                    var s, {
                            profile: a
                        } = this.props,
                        r = {
                            social_type: e
                        },
                        o = a.personal_first_name || a.username;
                    switch (e) {
                        case "30-days-of-code":
                            s = {
                                title: "Congrats ".concat(o, "! You’ve made great progress on 30 Days of Code. Keep it up!"),
                                shareTrigger: "30daysofcode",
                                icon: "icons/party.png"
                            };
                            break;
                        case "social-share-master":
                            s = {
                                title: "Congrats ".concat(o, "! You’ve successfully solved your 5th code challenge. Keep it up!"),
                                shareTrigger: "domains",
                                icon: "icons/party.png"
                            };
                            break;
                        case "chapter-completion":
                            var n = t.track_name && t.name ? "".concat(t.name, " challenges in ").concat(t.track_name, "!") : "challenges in current sub domain!";
                            s = {
                                title: "Congrats ".concat(o, "! You just solved all the ").concat(n),
                                shareTrigger: "chapter_completed",
                                icon: "icons/party.png",
                                shareMeta: {
                                    track: t.track_name,
                                    chapter: t.name,
                                    track_slug: t.track_slug,
                                    chapter_slug: t.slug
                                }
                            }
                    }
                    s && this.setState({
                        notifyData: s
                    }, (() => {
                        x.Z.externalService("track", "SocialDialogShown", r)
                    }))
                }
                renderUnlockedChallengesModal() {
                    var {
                        submissionData: e
                    } = this.props, {
                        hideShareModal: t
                    } = this.state, {
                        unlocked_challenges: s
                    } = e, {
                        appUtil: a,
                        challenge: r
                    } = this.props, {
                        location: o
                    } = a, i = "".concat(o.protocol, "//").concat(o.host, "/").concat("master" === r.contest_slug ? "" : r.contest_slug);
                    return s ? n().createElement(A, {
                        open: !!s && !t,
                        title: "Challenge Unlock",
                        message: "Congratulations you have unlocked ".concat(s, "!"),
                        tweet: "I have unlocked ".concat(s, " on hackerrank ").concat(i),
                        url: i,
                        type: "unlock",
                        onClose: () => this.setState({
                            hideShareModal: !1
                        })
                    }) : null
                }
                renderGameStatus() {
                    var {
                        submissionData: e
                    } = this.props, {
                        game_played: t,
                        game_total: s
                    } = e, a = t / s * 100;
                    return n().createElement("div", {
                        className: "game-progress-bar"
                    }, n().createElement("div", {
                        className: "gutter"
                    }, n().createElement("div", {
                        className: "progress-bar-status",
                        style: {
                            width: "".concat(a, "%")
                        }
                    }, " ")), n().createElement("p", {
                        className: "play-count"
                    }, "(".concat(t, "/").concat(s, ") games played")))
                }
                renderGameSubmission() {
                    var {
                        singlePlayer: e,
                        submissionData: t
                    } = this.props, {
                        created_at_epoch: s,
                        startLock: a,
                        game_played: r,
                        score: o
                    } = t;
                    return t ? n().createElement(g.Z, {
                        layer: 2,
                        className: "game-card"
                    }, n().createElement("div", {
                        className: "game-stats"
                    }, "Submitted ", u()(1e3 * s).fromNow(), n().createElement("strong", {
                        className: "submission-stat"
                    }, " ", "• ", (o || 0).toFixed(2), " points scored"), a && !e && n().createElement("div", null, "• ", n().createElement("strong", {
                        className: "submission-stat game-played"
                    }, r), " games played •")), this.renderGameStatus()) : null
                }
                renderScore() {
                    var {
                        hideScore: e,
                        submissionData: t
                    } = this.props, {
                        created_at_epoch: s,
                        status: a,
                        language: r,
                        display_score: o
                    } = t;
                    if (!e) return n().createElement(g.Z, {
                        layer: 2
                    }, n().createElement("span", null, "Submitted ", u()(1e3 * s).fromNow(), " "), ["Queued", "Processing", "Codechecker Error"].includes(a) && "text" !== r && n().createElement("span", null, n().createElement("strong", null, " Score:"), " ", parseFloat(o || 0).toFixed(2)))
                }
                renderCodeCheckerError() {
                    return n().createElement(g.Z, {
                        layer: 2,
                        className: "compilation-errors-card"
                    }, n().createElement("div", {
                        className: "compilation-error-heading"
                    }, "Codechecker Error "), n().createElement("div", {
                        className: "compilation-errors"
                    }, "An error occurred on our side, we are looking into it, kindly try after some time."))
                }
                renderCompileMessage() {
                    var {
                        submissionData: e
                    } = this.props, {
                        compile_status: t,
                        compile_message: s,
                        status: a
                    } = e;
                    if ("Queued" !== a && t > 0) return n().createElement(g.Z, {
                        layer: 2,
                        className: l()("compile-time-response")
                    }, n().createElement("div", {
                        className: l()("compile-time")
                    }, n().createElement("div", {
                        className: "compile-message"
                    }, n().createElement("p", {
                        className: "compile-field-label"
                    }, "Compile Message"), n().createElement("pre", {
                        className: "compile-output-message compile-message"
                    }, n().createElement("code", {
                        className: "bold"
                    }, s || "~ no response on stderr ~"))), n().createElement("div", {
                        className: "exit-status"
                    }, n().createElement("p", {
                        className: "compile-field-label"
                    }, "Exit Status"), n().createElement("pre", {
                        className: "compile-output-message compile-message"
                    }, n().createElement("code", {
                        className: "bold"
                    }, t)))))
                }
                renderTestResults() {
                    var {
                        submissionData: {
                            id: e,
                            status_code: t,
                            compile_status: s,
                            compile_message: a
                        },
                        challenge: r
                    } = this.props, o = this.getSubmissionData(), i = this.getLiveStatus(), l = this.shouldRenderTestcaseUI(o), c = (0, te.iK)(t) ? 1 : 0;
                    return l && n().createElement("div", {
                        className: "testcase-results"
                    }, n().createElement(G.Z, {
                        testCaseData: o,
                        type: "submit",
                        challenge: r,
                        submissionId: e,
                        liveStatus: i,
                        statusCode: c,
                        result: s,
                        compileMessage: a
                    }))
                }
                renderChallengeSubmission() {
                    var {
                        submissionData: e,
                        pageType: t
                    } = this.props, {
                        kind: s
                    } = e, a = e.status || "", r = e.kind === re.NM.FULLSTACK;
                    return s === re.NM.FRONTEND ? null : r ? n().createElement("div", {
                        className: "challenge-submission-wrapper"
                    }, "submission" !== t && this.renderSubmissionHeaderMessage(), this.renderFullStackLogs()) : n().createElement("div", {
                        className: "challenge-submission-wrapper"
                    }, "submission" !== t && this.renderSubmissionHeaderMessage(), this.renderCompileMessage(), n().createElement("div", {
                        className: "testcase-header"
                    }, "Codechecker Error" === a ? this.renderCodeCheckerError() : this.renderTestResults(), this.renderScore()))
                }
                renderSubmissionBadge() {
                    var {
                        submissionData: e,
                        appUtil: t
                    } = this.props, {
                        track_has_badge: s,
                        badges: a = [],
                        display_score: r
                    } = e, {
                        location: {
                            query: {
                                h_l: o
                            }
                        }
                    } = t;
                    if (s) {
                        var i = a[0];
                        return i = ie(ie({}, i), {}, {
                            type: "badge"
                        }), n().createElement(H, {
                            badge: i,
                            score: parseFloat(r).toFixed(2),
                            h_l: o
                        })
                    }
                }
                renderCongratulationsBanner() {
                    var {
                        submissionData: e,
                        challenge: t,
                        promoSlot: s,
                        promoAd: a,
                        isHomePageV2Enabled: r
                    } = this.props, {
                        status: o,
                        track_has_badge: i,
                        language: l
                    } = e;
                    if ("Accepted" === o && this.isPartOfNux()) return r ? n().createElement(b.ZP, {
                        role: "link",
                        to: "/home",
                        className: "ui-btn ui-btn-primary js-proceed-dashboard"
                    }, "Proceed to Home") : n().createElement(b.ZP, {
                        role: "link",
                        to: "/dashboard",
                        className: "ui-btn ui-btn-primary js-proceed-dashboard"
                    }, "Proceed to Dashboard");
                    var c = (0, te.Vt)(e),
                        u = !!a,
                        m = u ? "small" : "normal";
                    return n().createElement("div", {
                        className: "congrats-wrapper"
                    }, "Accepted" === o && "text" !== l && c && i && !t.solved && this.renderSubmissionBadge(), n().createElement("div", {
                        className: "congrats-cards-wrapper"
                    }, this.renderCongratulationsCard(m), u && n().createElement("div", {
                        className: "skills-ad-card"
                    }, n().createElement(E.Z, {
                        component: T,
                        slot: s,
                        sendMetrics: this.sendAdMetrics
                    }))))
                }
                renderCongratulationsCard() {
                    var e, t, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "normal",
                        {
                            submissionData: a,
                            appUtil: {
                                location: r,
                                params: o
                            },
                            currentPlaylist: i,
                            isHomePageV2Enabled: c
                        } = this.props,
                        {
                            timerCompleted: u
                        } = this.state,
                        {
                            next_challenge: m
                        } = a,
                        p = m && m.status,
                        d = m && m.epoch_starttime,
                        h = "locked" === p && !u,
                        v = (0, te.bu)(a, r),
                        {
                            parent: E
                        } = i;
                    v ? (e = "Next Challenge", t = v) : E && E.slug === re.Ts.INTERVIEW_PREPARATION_KIT && (e = "Proceed", t = "/interview/".concat(re.Ts.INTERVIEW_PREPARATION_KIT)), h && (e = "Try a Random Challenge", t = v);
                    var C = n().createElement("h6", {
                            className: "congrats-heading"
                        }, "Congratulations"),
                        k = n().createElement("span", {
                            className: "congrats-text"
                        }, "You solved this challenge. Would you like to challenge your friends?"),
                        _ = n().createElement(y.ZP, {
                            className: "social-links",
                            align: "noop",
                            name: a.name,
                            page: "challenges",
                            slug: a.slug,
                            quote: "I just solved this challenge. Can you?",
                            hashtag: "#hackerrank"
                        }),
                        S = n().createElement(b.ZP, {
                            role: "link",
                            to: t,
                            className: "ui-btn-secondary submission-wrapper-next-entity-btn"
                        }, e),
                        N = h && n().createElement("div", {
                            className: "congrats-sub-section"
                        }, n().createElement("div", {
                            className: "congrats-subtext locked-status"
                        }, "The next challenge in this tutorial will unlock in ", n().createElement(f.Z, {
                            finishTimeMs: 1e3 * d,
                            onTimerEnd: () => {
                                this.setState({
                                    timerCompleted: !0
                                })
                            }
                        })), n().createElement("div", {
                            className: "congrats-action-btns"
                        }, c ? n().createElement(b.ZP, {
                            role: "link",
                            to: "/home",
                            className: "ui-btn-line-primary congrats-action-link"
                        }, "Go to Home") : n().createElement(b.ZP, {
                            role: "link",
                            to: "/dashboard",
                            className: "ui-btn-line-primary congrats-action-link"
                        }, "Go to Dashboard"), n().createElement(b.ZP, {
                            role: "link",
                            to: t,
                            className: "ui-btn-secondary"
                        }, e)));
                    return "software-engineer" === (null == o ? void 0 : o.roleSlug) ? n().createElement(g.Z, {
                        className: l()("submission-congratulations")
                    }, n().createElement("div", {
                        className: "submission-wrapper"
                    }, n().createElement("div", {
                        className: "submission-message"
                    }, C), !h && t && S), N) : "small" === s ? n().createElement(g.Z, {
                        className: l()("submission-congratulations card--small")
                    }, n().createElement("div", null, n().createElement("div", {
                        className: "congrats-row congrats-row--first"
                    }, C, _), n().createElement("div", {
                        className: "congrats-row congrats-row--second"
                    }, n().createElement("div", {
                        className: "congrats-subtext"
                    }, k), !h && t && n().createElement("div", {
                        className: "congrats-card-actions"
                    }, S)), N)) : n().createElement(g.Z, {
                        className: l()("submission-congratulations")
                    }, n().createElement("div", {
                        className: "submission-wrapper"
                    }, n().createElement("div", {
                        className: "submission-message"
                    }, C, n().createElement("div", {
                        className: "congrats-subtext"
                    }, k, _)), !h && t && S), N)
                }
                renderCompilationProgress() {
                    var {
                        submissionData: e
                    } = this.props, {
                        status_code: t,
                        status: s,
                        display_status: a
                    } = e, r = (0, te.OB)(e);
                    if (100 !== r) return n().createElement("div", {
                        className: "submission-progress"
                    }, n().createElement("div", {
                        className: "submission-current-status"
                    }, "Status: ", s || a), [0, 1, 2, 3].includes(t) && r && n().createElement(v.Z, {
                        value: r,
                        shine: !0
                    }))
                }
                renderSubmissionHeaderMessage() {
                    var {
                        submissionData: e
                    } = this.props, t = this.getStatusInfo(), s = (0, te.uc)(e), a = (0, te.Vt)(e), r = (e.status || "").startsWith("Accepted");
                    return a ? r ? this.renderCongratulationsBanner() : n().createElement("div", {
                        className: "submission-error-wrapper"
                    }, n().createElement("p", {
                        className: l()("status compile-".concat(t.statusClass))
                    }, t.statusHeading), s && n().createElement("div", {
                        className: "compile-advice"
                    }, t.subText)) : null
                }
                renderFullStackLogs() {
                    var {
                        pageType: e,
                        submissionData: t,
                        appUtil: {
                            location: {
                                query: {
                                    isFullScreen: s
                                }
                            }
                        }
                    } = this.props, {
                        pubSubLogs: a
                    } = this.state, r = "submission" === e, o = "true" === s, i = (0, te.xk)(t), l = r || o, c = !r && !o && i;
                    return n().createElement(n().Fragment, null, l && n().createElement(K, {
                        submissionData: t,
                        isProcessing: i,
                        isSubmissionPage: r,
                        pubSubLogs: a
                    }), c && n().createElement("div", {
                        role: "alert",
                        className: "submission-progress-banner"
                    }, n().createElement("p", null, "A submission is already in progress...")))
                }
                render() {
                    var {
                        pageType: e,
                        submissionData: t
                    } = this.props, {
                        notifyData: s
                    } = this.state, {
                        kind: r
                    } = t;
                    return n().createElement("div", {
                        className: l()("submission-status theme-m-content", {
                            "in-submission": "submission" === e
                        })
                    }, "game" === r ? this.renderGameSubmission() : this.renderChallengeSubmission(), n().createElement(N, (0, a.Z)({
                        open: !!s
                    }, s || {}, {
                        onClose: () => {
                            this.setState({
                                notifyData: null
                            })
                        }
                    })), this.renderUnlockedChallengesModal())
                }
            }(0, r.Z)(le, "defaultProps", {
                pageType: "problem",
                hideScore: !0
            }), le = (0, m.$j)(((e, t) => {
                var {
                    submissionId: s,
                    challenge: a
                } = t, r = e.community.submissions.allSubmissions[s], o = e.community.profile, {
                    location: n
                } = t.appUtil, i = (0, F.t1)(n), l = e.community.playlist[i] || {}, {
                    pubsubv2_host: c
                } = e.metadata, {
                    promoSlot: u,
                    promoAd: m
                } = function(e, t) {
                    var s, a = null === (s = e.track) || void 0 === s ? void 0 : s.track_slug;
                    if (!a) return {
                        promoSlot: null,
                        promoAd: null
                    };
                    var r = "skills-".concat(a);
                    return {
                        promoSlot: r,
                        promoAd: t[r]
                    }
                }(a, e.community.nativeAds);
                return {
                    submissionData: r,
                    profile: o,
                    currentPlaylist: l,
                    pubSubV2Host: c,
                    promoSlot: u,
                    promoAd: m,
                    isHomePagev2Enabled: (0, oe.YO)(e)
                }
            }), (e => ({
                profileActions: (0, p.DE)(ee.Z, e),
                testCaseActions: (0, p.DE)($, e),
                submissionActions: (0, p.DE)(X.Z, e)
            })))(le);
            const ce = le = (0, d.Z)(le)
        },
        "04gq": (e, t, s) => {
            s.d(t, {
                L0: () => c,
                OB: () => p,
                Vt: () => l,
                YN: () => n,
                bu: () => d,
                iK: () => g,
                k3: () => h,
                uc: () => i,
                vc: () => m,
                xk: () => u
            }), s("OG14");
            var a, r = s("qxc9"),
                o = s("YAkj");

            function n(e, t) {
                var s = (0, r.M2)(t.challengeSlug);
                return e.gitData[s].git_browse_url
            }

            function i(e) {
                var {
                    status_code: t
                } = e;
                return !(0 === t || 3 === t)
            }

            function l(e) {
                var {
                    score_processed: t
                } = e;
                return 3 === t
            }

            function c(e, t, s) {
                if (function(e) {
                        var t = e.status || "";
                        return t.startsWith("Wrong") || t.startsWith("Terminated") || t.startsWith("Compilation") || t.startsWith("Runtime")
                    }(e)) return "failed";
                var a = t.track && "tutorials" === t.track.track_slug;
                return !s.is_admin && !a && t.is_solution_unlocked || t.solved ? "solutionUnlocked" : "passed"
            }

            function u(e) {
                return !e || !l(e)
            }

            function m(e) {
                var {
                    codechecker_time: t,
                    is_additional_testcase: s,
                    is_sample_testcase: a,
                    individual_test_case_score: r,
                    codechecker_signal: o
                } = e, {
                    testcase_message: n,
                    testcase_status: l
                } = e, c = e.live_status || {};

                function u(e, t) {
                    return Array.isArray(e) ? e[t] : null
                }
                return !i(e) && c.testcase_status && c.testcase_status.length > 0 && (l = c.testcase_status, n = c.testcase_message), a.map(((e, a) => ({
                    id: a,
                    message: u(n, a),
                    codeCheckerTime: u(t, a),
                    isAdditional: u(s, a),
                    isSample: e,
                    status: u(l, a),
                    testCaseScore: u(r, a),
                    signal: u(o, a)
                })))
            }

            function p(e) {
                var {
                    is_sample_testcase: t,
                    status_code: s,
                    progress: a,
                    progress_states: r,
                    contest_slug: o
                } = e, n = l(e), i = 2 + t.length, c = 0;
                3 === s ? "number" == typeof a && "number" == typeof r ? (c = a, i = r) : c = 2 : 1 !== s && 2 !== s || (c = i);
                var u = "master" === o ? 95 : 100,
                    m = Math.max(Math.round(c * u / i), 2);
                return n && 95 === u && (m += 5), m
            }

            function d(e, t) {
                var {
                    next_challenge: s,
                    contest_slug: a,
                    random_challenge_slug: o
                } = e, n = s && s.status, {
                    search: i = ""
                } = t, c = l(e), u = "", m = "";
                return s && s.url && ("locked" === n ? m = (0, r.cu)({
                    slug: o,
                    contest_slug: a
                }) : s.url && (m = s.url), u = "".concat(m).concat(i)), c ? u : ""
            }

            function h(e) {
                var t = 0,
                    s = 3e3,
                    r = (0, o.Bk)("We are processing your submission but it is taking longer than usual", {
                        type: "warning",
                        icon: "ui-icon-time"
                    }),
                    n = {
                        type: "error_strong",
                        message: "We couldn't process your submission. Please submit your code again!",
                        icon: "ui-icon-alert-triangle"
                    },
                    {
                        challengeSlug: i,
                        contestSlug: l,
                        submissionId: c,
                        submissionActions: m,
                        profileActions: p,
                        onComplete: d,
                        postCompleteActions: h,
                        playlistSlug: g,
                        profile: b = {}
                    } = e,
                    {
                        show_recommended_prep_kit: v
                    } = b,
                    f = Date.now(),
                    E = !0,
                    C = () => {
                        var e = Date.now() - f;
                        e > 3e4 && E && (r.show(), E = !1), e > 5e4 ? r.update(n) : m.getSubmissionDetail({
                            challengeSlug: i,
                            contestSlug: l,
                            submissionId: c,
                            playlistSlug: g
                        }).then((e => {
                            var r = e.model;
                            u(r) ? ((t += 1) > 10 && s < 2e4 && (s *= 1.05), a && clearTimeout(a), a = setTimeout(C, s)) : (d(r), h && (m.setGlobalSubmissionStatus(r), p.invalidateProgress(), v && p.invalidateProfile()))
                        })).catch((e => {
                            429 === e.originalResponse.statusCode && r.update(n)
                        }))
                    };
                return C(),
                    function() {
                        a && clearTimeout(a)
                    }
            }

            function g(e) {
                return 1 === e || 2 === e
            }
        },
        "915B": (e, t, s) => {
            s.d(t, {
                Z: () => v
            }), s("ioFf");
            var a = s("L5+t"),
                r = s("DTvD"),
                o = s.n(r),
                n = s("17x9"),
                i = s.n(n),
                l = s("Wwog"),
                c = s("RXSW"),
                u = s("kU9v"),
                m = s("sLmT"),
                p = s("znFd");

            function d(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(s), !0).forEach((function(t) {
                        (0, a.Z)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }
            var g = (0, l.Z)((e => e.map((e => h(h({}, e), {}, {
                purchased: !0 === e.isSample
            })))));
            class b extends o().Component {
                constructor(e) {
                    super(e), (0, a.Z)(this, "state", void 0), (0, a.Z)(this, "getUnlockedTestCases", (() => {
                        var {
                            type: e,
                            challenge: t
                        } = this.props, {
                            id: s,
                            contest_slug: a
                        } = t, {
                            testCaseData: r
                        } = this.state;
                        "submit" === e && (0, u.ajaxGetWithToken)({
                            url: (0, m.kG)("getUnlockedTestCases", {
                                challengeId: s,
                                contestSlug: a
                            }),
                            success: e => {
                                e.forEach((e => {
                                    r[e] = h(h({}, r[e]), {}, {
                                        purchased: !0
                                    })
                                })), this.setState({
                                    testCaseData: [...r]
                                })
                            }
                        })
                    })), (0, a.Z)(this, "buyTestCase", (e => {
                        var {
                            submissionId: t,
                            challenge: s
                        } = this.props, {
                            id: a,
                            contest_slug: r
                        } = s, o = e, n = "";
                        this.updateTestCase(o, {
                            unlockingTestCase: !0,
                            unlockError: ""
                        }), (0, u.ajaxGetWithToken)({
                            url: (0, m.kG)("buyTestCase", {
                                challengeId: a,
                                contestSlug: r,
                                testCaseId: o
                            }),
                            data: {
                                submission_id: t
                            },
                            success: () => {
                                this.updateTestCase(o, {
                                    purchased: !0,
                                    unlockingTestCase: !1,
                                    unlockError: ""
                                }), this.getDataForTestCase(o)
                            },
                            error: e => {
                                n = 402 === e.resStatus ? "You don't have enough hackos to purchase this testcase!" : "We couldn't perform the transaction now, try again later!", this.updateTestCase(o, {
                                    unlockingTestCase: !1,
                                    unlockError: n
                                })
                            }
                        })
                    })), (0, a.Z)(this, "getDataForTestCase", (e => {
                        var {
                            type: t,
                            challenge: s
                        } = this.props, {
                            id: a,
                            contest_slug: r
                        } = s;
                        if ("submit" === t) {
                            var {
                                testCaseData: o
                            } = this.state, n = o[e];
                            if (n.loadData || n.purchased) {
                                var i = "/rest/contests/".concat(r, "/testcases/").concat(a, "/").concat(e, "/testcase_data");
                                (0, u.ajaxGetWithToken)({
                                    url: i,
                                    success: t => {
                                        this.updateTestCase(e, {
                                            loadData: !1,
                                            stdIn: t.stdin,
                                            expectedOutput: t.expected_output
                                        })
                                    },
                                    error: () => {
                                        this.updateTestCase(e, {
                                            loadData: !1
                                        })
                                    }
                                })
                            }
                        }
                    })), (0, a.Z)(this, "downloadTestcaseLink", ((e, t) => {
                        var {
                            challenge: s
                        } = this.props, {
                            id: a,
                            contest_slug: r
                        } = s, o = "stdin" === e ? "input" : "output";
                        window.open("/rest/contests/".concat(r, "/testcases/").concat(a, "/").concat(t, "/testcase").concat(o), "_blank")
                    })), this.state = {
                        testCaseData: g(e.testCaseData)
                    }, this.testcaseRef = o().createRef()
                }
                static getDerivedStateFromProps(e, t) {
                    return 0 === t.testCaseData.length ? {
                        testCaseData: g(e.testCaseData)
                    } : null
                }
                componentDidMount() {
                    this.testcaseRef.current.scrollIntoView()
                }
                updateTestCase(e, t) {
                    var {
                        testCaseData: s
                    } = this.state;
                    s[e] = h(h({}, s[e]), t), this.setState({
                        testCaseData: [...s]
                    })
                }
                render() {
                    var {
                        type: e,
                        challenge: {
                            contest_slug: t,
                            slug: s
                        },
                        bingChallenge: a,
                        customtestcase: r,
                        liveStatus: n,
                        statusCode: i,
                        compileMessage: l,
                        compileCommand: u,
                        result: m
                    } = this.props, {
                        testCaseData: d
                    } = this.state, h = {
                        "data-attr2": t,
                        "data-attr3": s
                    };
                    return o().createElement("div", {
                        className: "tc-container",
                        ref: this.testcaseRef
                    }, o().createElement(c.Z, {
                        testcases: d,
                        type: e,
                        getHiddenTestcases: this.getUnlockedTestCases,
                        shouldUnlockHiddenTestcase: (0, p.Oz)(t),
                        handleUnlock: this.buyTestCase,
                        unlockTestcaseMessage: "Unlock this testcase for 5 hackos.",
                        analyticsAttributes: h,
                        fetchTestcase: this.getDataForTestCase,
                        handleDownload: this.downloadTestcaseLink,
                        bingChallenge: a,
                        isCustomTestcase: r,
                        statusCode: i,
                        liveStatus: n,
                        showLineNumbers: !0,
                        result: m,
                        compileMessage: l,
                        compileCommand: u
                    }))
                }
            }(0, a.Z)(b, "propTypes", {
                testCaseData: i().array.isRequired,
                type: i().string.isRequired,
                bingChallenge: i().bool,
                submissionId: i().number,
                customtestcase: i().bool,
                challenge: i().object.isRequired,
                liveStatus: {
                    progress: i().number.isRequired,
                    maxLimit: i().number.isRequired,
                    testcaseStatus: i().array.isRequired,
                    signal: i().array.isRequired,
                    liveMessage: i().string.isRequired,
                    totalCount: i().number.isRequired
                },
                statusCode: i().number.isRequired,
                result: i().number.isRequired,
                compileMessage: i().string.isRequired,
                compileCommand: i().string
            }), (0, a.Z)(b, "defaultProps", {
                testCaseData: []
            });
            const v = b
        },
        "3Ama": (e, t, s) => {
            s.d(t, {
                Z: () => m
            });
            var a = s("DTvD"),
                r = s.n(a),
                o = s("TSYQ"),
                n = s.n(o),
                i = s("GNxy"),
                l = s("kPpE"),
                c = s("Xh0i"),
                u = s("z47X");
            const m = (0, s("mbQF").ZP)((e => {
                var {
                    className: t,
                    variant: s = "secondary",
                    profile: a,
                    profileActions: o
                } = e, m = (0, i.Fg)(), p = m.theme === c.g.dark, d = p ? "Switch to light mode" : "Switch to dark mode";
                return a.username ? r().createElement(i.P6, {
                    content: d
                }, r().createElement(i.j_, {
                    variant: s,
                    className: n()("theme-toggle-btn", t),
                    onClick: () => {
                        var e = m.setTheme,
                            t = p ? c.g.light : c.g.dark;
                        (0, u.G)(t, e, o.updateProfile)
                    }
                }, p ? r().createElement(l.ong, null) : r().createElement(l.dMx, null))) : null
            }))
        },
        RMPL: (e, t, s) => {
            s.d(t, {
                Z: () => o
            });
            var a, r = s("C7/A");
            const o = {
                createConnection: function(e) {
                    a = (0, r.io)(e, {
                        transports: ["websocket"]
                    })
                },
                getConnection: function() {
                    return a && a.connected
                },
                subscribe(e, t, s) {
                    (a || a.connected) && (a.emit("subscribe", {
                        hash: e
                    }), a.hasListeners(e) || a.on("update", (e => t("update", e))), a.on("fallback", (() => s())))
                },
                alreadySubscribed: function(e) {
                    if (a) {
                        var t = !0;
                        return a.emit("alreadySubscribed", {
                            hash: e
                        }, (e => {
                            t = e.isPresent
                        })), t
                    }
                },
                unsubscribe(e, t) {
                    a && this.alreadySubscribed(e) && a.emit("unsubscribe", {
                        hash: e
                    })
                },
                disconnect() {
                    a && a.connected && a.disconnect()
                }
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_full_screen_view_header_scss-src_shared_styles_split_scss-src_sh-7851a0-1ac89eab.js.map