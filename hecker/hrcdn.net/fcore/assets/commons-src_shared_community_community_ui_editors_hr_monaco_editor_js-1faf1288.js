"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_community_ui_editors_hr_monaco_editor_js"], {
        c277: (e, t, o) => {
            o.d(t, {
                ZP: () => ee,
                mb: () => q
            }), o("ioFf");
            var a = o("PRvr"),
                n = o("L5+t"),
                r = (o("yt8O"), o("rGqo"), o("Z2Ku"), o("B2u/")),
                s = o("DTvD"),
                i = o.n(s),
                l = o("TSYQ"),
                c = o.n(l),
                d = (o("ls82"), o("0ier")),
                h = o("ANjH"),
                u = o("wd/R"),
                g = o.n(u),
                m = o("DzJC"),
                p = o.n(m),
                _ = o("BkRI"),
                v = o.n(_),
                C = o("vN+2"),
                b = o.n(C),
                f = o("xQqG"),
                k = o("0Mpb"),
                S = o("rpVu"),
                L = o("6GtL"),
                w = o("5F93"),
                T = o("6zQX"),
                U = o("N4dn"),
                Z = o("+Fuw"),
                M = o("WRu8"),
                y = o("uAgT"),
                E = o("qANn"),
                O = o("LNbi"),
                P = o("GS3/"),
                N = o("CmRW"),
                D = o("UwUt"),
                j = o("PClM"),
                B = o("Pb0E"),
                A = o("2HnP"),
                I = o("ILz0"),
                x = o("iN+d"),
                F = {
                    chrome: ">=94",
                    firefox: ">=93",
                    safari: ">=16.4",
                    edge: ">=94"
                },
                V = o("YAkj"),
                H = o("u6Nk"),
                z = ["averageTimeTaken", "timeTaken"];

            function R(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(o), !0).forEach((function(t) {
                        (0, n.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var K = (0, y.Z)(),
                G = {
                    control: function() {
                        return W(W({}, K.control(...arguments)), {}, {
                            backgroundColor: "var(--color-bg)",
                            borderColor: "var(--select-border-color)",
                            color: "var(--color-text-dark)"
                        })
                    },
                    singleValue: () => ({
                        color: "var(--color-text-dark-faded)"
                    }),
                    input: function() {
                        return W(W({}, K.input(...arguments)), {}, {
                            color: "var(--color-text-dark-faded)"
                        })
                    },
                    menuList: function() {
                        return W(W({}, K.menuList(...arguments)), {}, {
                            backgroundColor: "var(--color-bg)",
                            borderColor: "var(--select-border-color)",
                            boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.2)",
                            color: "var(--color-text-dark)"
                        })
                    },
                    option: (e, t) => {
                        var {
                            isSelected: o,
                            isFocused: a
                        } = t, n = o || a;
                        return W(W({}, K.option(e, t)), {}, {
                            backgroundColor: n ? "var(--color-shade-medium)" : "var(--color-bg)",
                            color: n ? "var(--color-text-dark-faded)" : "var(--color-text-dark)"
                        })
                    }
                },
                J = W(W({}, K), G),
                q = {
                    load: () => new Promise(((e, t) => {
                        var a;
                        a = t, Promise.all([o.e("modules-node_modules_ui-kit_es_components_popover_tooltip_tooltip_js"), o.e("modules-node_modules_ui-kit_es_components_forms_input_input_scss-node_modules_ui-kit_es_compo-540a98"), o.e("modules-node_modules_app-server_es_ui_component_editors_hr_monaco_editor_utils_js-node_module-d266c7"), o.e("defaultVendors-node_modules_vscode_vscode_src_vs_base_common_charCode_js-node_modules_vscode_-cb7d75"), o.e("defaultVendors-node_modules_vscode_vscode_src_vs_base_common_diff_diffChange_js-node_modules_-0535b1"), o.e("defaultVendors-node_modules_react-click-outside_build_index_js-node_modules_react-selectv3_as-0b7f30"), o.e("defaultVendors-node_modules_vscode__virtual_semver_js-node_modules_vscode_vscode_src_vs_base_-a8fea6"), o.e("defaultVendors-node_modules_monaco-editor_esm_vs_editor_editor_api_js-node_modules_vscode_vsc-877062"), o.e("defaultVendors-node_modules_vscode_vscode_src_vs_workbench_api_common_extHost_common_services-6032ab"), o.e("hackerrank_r_krackjack")]).then((t => {
                            var a = o("lTh7"),
                                {
                                    default: n,
                                    LSP_LANGUAGES: r
                                } = o("mTBN");
                            n.bash.lsp = "bash", n.kotlin.lsp = "kotlin", r.push("bash", "kotlin");
                            var s = o("Jrsf");
                            e({
                                hrMonaco: a,
                                hrMonacoUtil: s,
                                langOptions: n
                            })
                        }).bind(null, o)).catch(a)
                    }))
                };
            (0, w.zC)(["krackjack/dist/.*"]);
            var Q = ["java21", "php"],
                Y = !1;

            function $() {
                return i().createElement(B.Z, {
                    className: "settings-icon"
                })
            }
            class X extends s.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, (0, n.Z)(this, "props", void 0), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "hrMonacoUtil", void 0), (0, n.Z)(this, "hrMonaco", void 0), (0, n.Z)(this, "editor", void 0), (0, n.Z)(this, "uuid", void 0), (0, n.Z)(this, "submissionData", void 0), (0, n.Z)(this, "throttledSaveLanguageCode", void 0), (0, n.Z)(this, "renderThemeChanger", (() => {
                        var {
                            theme: e,
                            darkModeTourData: t
                        } = this.props, {
                            showThemeChangeHelperPopup: o
                        } = this.state, {
                            isChangeThemeBtnHighlighted: a
                        } = t;
                        return i().createElement("div", {
                            className: "theme-change-wrapper"
                        }, i().createElement(E.ZP, {
                            onOpen: () => this.setState({
                                showThemeChangeHelperPopup: !1
                            })
                        }, i().createElement(O.Z, {
                            className: c()("theme-change-handle", {
                                "theme-change-highlight": a
                            }),
                            onClick: this.handleOpenThemeChanger
                        }, i().createElement("span", {
                            className: "text-link"
                        }, "Change Theme")), i().createElement(P.Z, {
                            className: "align-center"
                        }, i().createElement("div", {
                            className: "arrow"
                        }), i().createElement("div", {
                            className: "btn-group change-theme-btn-group"
                        }, Object.entries({
                            light: "Light",
                            dark: "Dark",
                            contrast: "High Contrast"
                        }).map((t => {
                            var [o, a] = t;
                            return i().createElement(N.bd, {
                                key: o,
                                className: c()({
                                    active: o === e
                                }),
                                onClick: () => this.changeTheme(o),
                                "data-automation": "btn-".concat(o)
                            }, a)
                        }))))), o && a && i().createElement(E.ZP, {
                            open: !0,
                            className: "theme-change-helper"
                        }, i().createElement(P.Z, {
                            className: "align-left"
                        }, i().createElement("div", {
                            className: "arrow theme-change-helper-arrow"
                        }), i().createElement("p", {
                            className: "theme-change-helper-content"
                        }, "You can always go back to the ", i().createElement("br", null), i().createElement("strong", null, "Light Theme"), " by clicking here."))))
                    })), (0, n.Z)(this, "resetCode", (() => {
                        var {
                            languageTemplate: e
                        } = this.props, {
                            currentLanguage: t,
                            languageOptions: o
                        } = this.state, a = v()(o);
                        a.lang_template[t] = e.lang_template[t], this.setState({
                            languageOptions: a
                        })
                    })), (0, n.Z)(this, "createLanguageOptions", (e => {
                        var {
                            editorConfig: t,
                            languageTemplate: o,
                            isFullScreen: a
                        } = e, n = v()(o);
                        return W(W(W({}, t), n), {}, {
                            customToolBar: [{
                                type: i().createElement(I.Z, {
                                    resetCode: this.resetCode
                                })
                            }, {
                                type: i().createElement(M.Z, {
                                    key: "fullscreen-btn",
                                    isFullScreen: a,
                                    onToggleFullscreen: e.toggleFullScreen,
                                    onRestoreFullScreen: this.onRestoreFullScreen
                                })
                            }]
                        })
                    })), (0, n.Z)(this, "updateWindowDimensions", (() => {
                        this.setState({
                            windowHeight: window.innerHeight
                        })
                    })), (0, n.Z)(this, "loadModules", (() => {
                        (() => {
                            if ((0, w.sk)()) return !1;
                            var {
                                isBrowserSupported: e
                            } = (0, x.L)(F);
                            return !1 !== e
                        })() && q.load().then((e => {
                            this.hrMonaco = e.hrMonaco, this.hrMonacoUtil = e.hrMonacoUtil, Y || (this.hrMonaco.registerAllAvailableLanguages(), Y = !0), this.setUpSettings(), this.updateLanguageOptions(), this.afterLoadTimestamp = g()().valueOf();
                            var t = this.afterLoadTimestamp - this.beforeLoadTimestamp,
                                o = this.getCurrentLanguage();
                            L.Z.track("EditorLoadTime", "", {
                                attribute1: t,
                                attribute2: "monaco",
                                attribute3: o
                            }), "cpp" === o && window.auryc && auryc.track("language-cpp"), this.setState({
                                loaded: !0
                            }), this.hrMonacoUtil.setUserPreference("userPreferredLang", o)
                        }))
                    })), (0, n.Z)(this, "onLanguageChange", ((e, t) => {
                        var {
                            onLangChange: o
                        } = this.props;
                        t !== e && (o(e, t), this.updateLanguageOptions(e, !0), this.hrMonacoUtil.setUserPreference("userPreferredLang", e), "cpp" === e && window.auryc && auryc.track("language-cpp"))
                    })), (0, n.Z)(this, "onCodeChange", (() => {
                        var {
                            currentLanguage: e
                        } = this.state;
                        this.throttledSaveLanguageCode(e)
                    })), (0, n.Z)(this, "editorDidMount", (e => {
                        this.editor = e;
                        var {
                            onEditorLoad: t
                        } = this.props;
                        t(e);
                        var o = this.getCurrentLanguage(),
                            a = "\n      ".concat(this.editor.getValue(), "\n      \nLanguage: ").concat(o, "\n    ");
                        this.props.onCodeChangeCallback(a)
                    })), (0, n.Z)(this, "getCurrentLanguage", (() => {
                        var {
                            submission: e,
                            editorConfig: t,
                            defaultLanguage: o
                        } = this.props, a = this.hrMonacoUtil.fetchUserPreference("userPreferredLang");
                        return e ? e.language : a && t.languages.includes(a) ? a : t.languages.includes(o) ? o : t.languages[0]
                    })), (0, n.Z)(this, "saveLanguageCode", (e => {
                        if (this.editor) {
                            var t, {
                                    languageTemplate: o
                                } = this.props,
                                a = o.lang_head_template[e] || "",
                                n = o.lang_tail_template[e] || "",
                                r = this.getcurrentAutoSaveKey(e);
                            t = this.editor.getValue();
                            var s = this.hrMonacoUtil.getCodeBody(t, a, n);
                            this.hrMonacoUtil.setLocalStorageValue(r, s);
                            var i = "\n      ".concat(this.editor.getValue(), "\n      \nLanguage: ").concat(e, "\n    ");
                            this.props.onCodeChangeCallback(i)
                        }
                    })), (0, n.Z)(this, "saveSettings", ((e, t) => {
                        this.hrMonacoUtil.setUserPreference(e, t)
                    })), (0, n.Z)(this, "onChangeSettings", ((e, t) => {
                        var {
                            onSettingsChange: o
                        } = this.props;
                        o(e, t), this.saveSettings(e, t)
                    })), (0, n.Z)(this, "onCompileTest", ((e, t) => {
                        var {
                            theme: o,
                            isFullScreen: a,
                            contestId: n,
                            challengeId: r
                        } = this.props, {
                            language: s
                        } = e;
                        L.Z.batch_track("Click", "CompileTest", W(W({
                            attribute6: s,
                            attribute1: a ? "full_screen" : "no_full_screen",
                            attribute2: o
                        }, n && {
                            attribute3: n
                        }), r && {
                            attribute4: r
                        }));
                        var i = this.getParsedEditorData(e);
                        this.props.onCompileTest(i, t)
                    })), (0, n.Z)(this, "onSubmitCode", ((e, t) => {
                        var {
                            theme: o,
                            isFullScreen: a,
                            confirmSubmitCode: n,
                            contestId: r,
                            challengeId: s
                        } = this.props, {
                            language: i
                        } = e;
                        L.Z.batch_track("Click", "SubmitCode", W(W({
                            attribute6: i,
                            attribute1: a ? "full_screen" : "no_full_screen",
                            attribute2: o
                        }, r && {
                            attribute3: r
                        }), s && {
                            attribute4: s
                        }));
                        var l = T.wS.get("confirm_submit_code"),
                            c = this.getParsedEditorData(e);
                        n && !0 !== l ? (this.submissionData = c, this.setState({
                            renderConfirmSubmit: !0
                        })) : this.props.onSubmitCode(c, t)
                    })), (0, n.Z)(this, "updateLanguageOptions", (function() {
                        var e, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = v()(t.state.languageOptions);
                        a ? (e = a, o = t.getCurrentCode(a)) : (e = t.getCurrentLanguage(), o = t.getCurrentCode(e, !0)), r.lang_template[e] = o;
                        var s = {
                            languageOptions: r,
                            currentLanguage: e
                        };
                        n && (s.modelUri = "file:///lsp-".concat((0, f.Z)())), t.setState(s)
                    })), (0, n.Z)(this, "onAnalytics", ((e, t) => {
                        var {
                            currentLanguage: o
                        } = this.state, {
                            profile: {
                                id: n = ""
                            },
                            challengeId: r,
                            isMockInterviews: s
                        } = this.props, {
                            event_type: i,
                            event_name: l,
                            event_value: c,
                            integer_event_value: d,
                            metadata: h
                        } = e, u = {
                            attribute1: c || void 0
                        };
                        if (null !== d && (u.attribute7 = d), h) {
                            var {
                                averageTimeTaken: g,
                                timeTaken: m
                            } = h, p = (0, a.Z)(h, z);
                            "KrackJackCompletionReceive" !== l && "KrackJackCodeAction" !== l || (u.averageTimeTaken = g), "LspClientInitialize" === l && (u.timeTaken = m), u.attribute2 = JSON.stringify(p)
                        }
                        t && (u.eventData = JSON.stringify(t)), (0, V.tn)("KrackjackLsp", W(W({}, u), {}, {
                            methodName: l,
                            editorEventType: i,
                            productName: s ? "mock-interviews" : "prepare",
                            language: o,
                            upgradedEditor: !0,
                            profileId: n,
                            challengeId: r
                        })), L.Z.batch_track(i, l, u)
                    })), (0, n.Z)(this, "onUploadClick", (() => {
                        this.setState({
                            renderUploadModal: !0
                        })
                    })), (0, n.Z)(this, "onUploadCode", ((e, t) => {
                        var o = v()(this.state.languageOptions),
                            a = this.getcurrentAutoSaveKey(e);
                        o.lang_template[e] = t, this.hrMonacoUtil.setUserPreference("userPreferredLang", e), this.hrMonacoUtil.setLocalStorageValue(a, t), this.setState({
                            languageOptions: o,
                            currentLanguage: e
                        })
                    })), (0, n.Z)(this, "onUploadModalClose", (() => {
                        this.setState({
                            renderUploadModal: !1
                        })
                    })), (0, n.Z)(this, "onSubmissionConfirm", (() => {
                        this.setState({
                            renderConfirmSubmit: !1
                        }), this.props.onSubmitCode(this.submissionData)
                    })), (0, n.Z)(this, "onSubmissionDialogClose", (() => {
                        this.setState({
                            renderConfirmSubmit: !1
                        })
                    })), (0, n.Z)(this, "saveSubmissionChoice", (e => {
                        var t = e.target.checked;
                        T.wS.set("confirm_submit_code", t)
                    })), (0, n.Z)(this, "handleOpenThemeChanger", (() => {
                        var {
                            isFullScreen: e
                        } = this.props;
                        L.Z.batch_track("Click", "ChangeThemeShowPreferences", {
                            attribute1: e ? "full_screen" : "no_full_screen"
                        })
                    })), (0, n.Z)(this, "renderUploadCodeModal", (() => {
                        var {
                            currentLanguage: e
                        } = this.state, {
                            editorConfig: {
                                languages: t
                            }
                        } = this.props;
                        return i().createElement(A.Z, {
                            currentLanguage: e,
                            onUploadModalClose: this.onUploadModalClose,
                            supportedLanguages: t,
                            onUploadCode: this.onUploadCode
                        })
                    })), this.state = {
                        showThemeChangeHelperPopup: !0,
                        currentLanguage: null,
                        currentCode: null,
                        settings: {
                            tabSize: 4,
                            enableAutoComplete: !0,
                            mode: "normal"
                        },
                        languageOptions: this.createLanguageOptions(e),
                        windowHeight: 0,
                        renderUploadModal: !1,
                        renderConfirmSubmit: !1,
                        loaded: !1,
                        modelUri: "file:///lsp-".concat((0, f.Z)())
                    }, this.hrMonaco = {}, this.uuid = (0, f.Z)(), this.throttledSaveLanguageCode = p()(this.saveLanguageCode, 3e3)
                }
                componentDidMount() {
                    this.updateWindowDimensions(), window.addEventListener("resize", this.updateWindowDimensions), this.beforeLoadTimestamp = g()().valueOf(), this.loadModules()
                }
                componentDidUpdate(e) {
                    var {
                        theme: t
                    } = this.props, {
                        loaded: o
                    } = this.state;
                    o && e.theme !== t && this.saveSettings("theme", t)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.updateWindowDimensions)
                }
                changeTheme(e) {
                    var {
                        isFullScreen: t,
                        changeTheme: o
                    } = this.props;
                    o(e), this.onChangeSettings("theme", e), L.Z.batch_track("Click", "ChangeTheme", {
                        attribute1: t ? "full_screen" : "no_full_screen",
                        attribute2: e
                    })
                }
                onRestoreFullScreen() {
                    setTimeout((() => {
                        var e = document.querySelector(".hr-monaco-editor-parent");
                        window.scrollTo({
                            top: (0, U.pW)(e).top - 70,
                            behavior: "smooth"
                        })
                    }), 0)
                }
                getCurrentCode(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        {
                            submission: o,
                            languageTemplate: a
                        } = this.props,
                        n = this.getcurrentAutoSaveKey(e),
                        r = this.hrMonacoUtil.getLocalStorageValue(n),
                        s = "";
                    if (t && o) {
                        var {
                            languageTemplate: i
                        } = this.props, l = i.lang_head_template[o.language], c = i.lang_tail_template[o.language];
                        s = this.hrMonacoUtil.getCodeBody(o.code, l, c)
                    } else s = r || a.lang_template[e];
                    return s
                }
                getcurrentAutoSaveKey(e) {
                    var {
                        editorConfig: {
                            autoSaveNamespace: t
                        }
                    } = this.props, o = "";
                    return t && (o = "".concat(t, "-").concat(e)), o
                }
                setUpSettings() {
                    var {
                        theme: e,
                        changeTheme: t
                    } = this.props, o = W({}, this.state.settings), a = this.hrMonacoUtil.fetchUserPreference("theme");
                    o.tabSize = this.hrMonacoUtil.fetchUserPreference("tabSize"), o.enableAutoComplete = this.hrMonacoUtil.fetchUserPreference("intellisense"), o.mode = this.hrMonacoUtil.fetchUserPreference("mode"), this.setState({
                        settings: o
                    }), e !== a && t(a)
                }
                getParsedEditorData(e) {
                    var {
                        code: t,
                        language: o,
                        custominput: a
                    } = e, {
                        languageTemplate: n
                    } = this.props, r = n.lang_head_template[o], s = n.lang_tail_template[o];
                    return {
                        code: this.hrMonacoUtil.getCodeBody(t, r, s),
                        language: o,
                        custominput: a
                    }
                }
                renderEditor() {
                    var {
                        theme: e,
                        toggleFullScreen: t,
                        options: o,
                        height: a,
                        compileTestBlocked: n,
                        submitBlocked: r,
                        isFullScreen: s,
                        showIntellisense: l,
                        showCustomInput: c,
                        showUploadCode: d,
                        showCompileTest: h,
                        submitButtonText: u
                    } = this.props, {
                        Editor: g
                    } = this.hrMonaco, {
                        settings: {
                            tabSize: m,
                            enableAutoComplete: p,
                            mode: _
                        },
                        languageOptions: v,
                        currentLanguage: C,
                        windowHeight: b,
                        modelUri: f
                    } = this.state;
                    return i().createElement(g, {
                        height: a || (s ? b - 230 : b - 180),
                        modelUri: f,
                        languageSelectStyles: J,
                        fileName: "Solution",
                        lspBaseUrl: H.LSP_BASE_URL,
                        defaultLanguage: C,
                        languageOptions: v,
                        tabSize: m,
                        theme: e,
                        enableAutoComplete: p,
                        mode: _,
                        customToolBar: v.customToolBar,
                        itemsBeforeLanguageSelector: [{
                            type: this.renderThemeChanger()
                        }],
                        onCompileTest: this.onCompileTest,
                        onSubmitCode: this.onSubmitCode,
                        onLanguageChange: this.onLanguageChange,
                        onChangeSettings: this.onChangeSettings,
                        onChange: this.onCodeChange,
                        toggleFullScreen: t,
                        editorDidMount: this.editorDidMount,
                        options: o,
                        onUploadClick: this.onUploadClick,
                        compileTestBlocked: n,
                        submitBlocked: r,
                        onAnalytics: this.onAnalytics,
                        enableHeadTailFolding: !0,
                        loaderComponent: D.Z,
                        lspDisabledLanguages: Q,
                        showIntellisense: l,
                        showTheme: !1,
                        showCustomInput: c,
                        showUploadCode: d,
                        showCompileTest: h,
                        submitButtonText: u,
                        SettingsIcon: $
                    })
                }
                renderSubmissionDialog() {
                    return i().createElement(j.Z, {
                        theme: "theme-m",
                        title: "Confirm Submission",
                        className: "codeeditor-modal",
                        open: !0,
                        onConfirm: this.onSubmissionConfirm,
                        onCancel: this.onSubmissionDialogClose,
                        onClose: this.onSubmissionDialogClose
                    }, i().createElement("p", null, "Are you sure you want to submit this code?"), i().createElement("form", {
                        className: "confirm-upload-form"
                    }, i().createElement("label", {
                        className: "confirm-upload-label"
                    }, i().createElement("input", {
                        id: "confirm-submit-checkbox",
                        type: "checkbox",
                        className: "confirm-upload",
                        onChange: this.saveSubmissionChoice
                    }), "Don't ask me again")))
                }
                render() {
                    var {
                        loaded: e,
                        renderUploadModal: t,
                        renderConfirmSubmit: o
                    } = this.state, {
                        profile: {
                            id: a = ""
                        },
                        challengeId: n,
                        isMockInterviews: r
                    } = this.props;
                    return i().createElement("div", {
                        className: "hr-monaco-editor-wrapper"
                    }, i().createElement(k.sU, {
                        ide: "monaco-editor",
                        supportedBrowsersVersions: F,
                        supportPageUrl: "https://candidatesupport.hackerrank.com/hc/en-us/articles/4402913886739-Browser-Recommendations-for-HackerRank-Tests",
                        trackToNewRelic: (0, V.m$)({
                            profileId: a,
                            challengeId: n,
                            productName: r ? "mock-interviews" : "prepare"
                        })
                    }, e ? this.renderEditor() : i().createElement("div", {
                        className: "loading-editor text-center"
                    }, i().createElement(D.Z, null))), t && this.renderUploadCodeModal(), o && this.renderSubmissionDialog())
                }
            }(0, n.Z)(X, "defaultProps", {
                theme: "light",
                changeTheme: b(),
                onCompileTest: b(),
                onSubmitCode: b(),
                confirmSubmitCode: !1,
                onCodeChange: b(),
                onCodeChangeCallback: b(),
                onEditorLoad: b(),
                onLangChange: b(),
                onSettingsChange: b(),
                options: {
                    fontFamily: "monospace",
                    fontSize: 15,
                    wordWrap: "on"
                },
                compileTestBlocked: !1,
                submitBlocked: !1,
                isMobile: !1,
                defaultLanguage: "cpp"
            });
            const ee = (0, h.qC)(Z.If, S.Z, (0, d.$j)((e => ({
                profile: e.community.profile
            }))))(X);
            (0, r.dQ)("hackerrank_r_krackjack.js")
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_community_ui_editors_hr_monaco_editor_js-1faf1288.js.map