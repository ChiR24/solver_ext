(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4869], {
        58070: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "videoInfo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "uuid"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UUID"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "videosVideoInfo"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "uuid"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "uuid"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "fetchType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "PLAY_AUTH"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "playAuth"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videoInfo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "videoId"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "coverUrl"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videoSize"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "articleChargeType"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "canSee"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 308
                }
            };
            n.loc.source = {
                body: "query videoInfo($uuid: UUID!) {\n    videosVideoInfo(uuid: $uuid, fetchType: PLAY_AUTH) {\n        playAuth\n        status\n        videoInfo {\n            videoId\n            coverUrl\n        }\n        videoSize {\n            width\n            height\n        }\n        articleChargeType\n        canSee\n    }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var i = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var i = e.definitions[t];
                    if (i.name && i.name.value == n) return i
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), i[e.name.value] = n
                }
            })), e.exports = n, e.exports.videoInfo = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var a = i[n] || new Set,
                    o = new Set,
                    u = new Set;
                for (a.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var s = u;
                    u = new Set, s.forEach((function(e) {
                        o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return o.forEach((function(n) {
                    var i = r(e, n);
                    i && t.definitions.push(i)
                })), t
            }(n, "videoInfo")
        },
        45007: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "problemsetQuestions"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "in"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ProblemsetQuestionsInput"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "problemsetQuestions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "in"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "in"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasMore"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "questions"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "titleCn"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "titleSlug"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "frontendId"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "acRate"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "solutionNum"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "difficulty"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "userQuestionStatus"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 264
                }
            };
            n.loc.source = {
                body: "query problemsetQuestions($in: ProblemsetQuestionsInput!) {\n  problemsetQuestions(in: $in) {\n    hasMore\n    questions {\n      titleCn\n      titleSlug\n      title\n      frontendId\n      acRate\n      solutionNum\n      difficulty\n      userQuestionStatus\n    }\n  }\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var i = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var i = e.definitions[t];
                    if (i.name && i.name.value == n) return i
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), i[e.name.value] = n
                }
            })), e.exports = n, e.exports.problemsetQuestions = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var a = i[n] || new Set,
                    o = new Set,
                    u = new Set;
                for (a.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var s = u;
                    u = new Set, s.forEach((function(e) {
                        o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return o.forEach((function(n) {
                    var i = r(e, n);
                    i && t.definitions.push(i)
                })), t
            }(n, "problemsetQuestions")
        },
        33475: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "users"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "data"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UsersInput"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "users"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "in"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "data"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasMore"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "nodes"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "avatar"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "siteRanking"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "userSlug"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "realName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "aboutMe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "reputationLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "followedByMe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "followerNumber"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "followingNumber"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 247
                }
            };
            n.loc.source = {
                body: "query users($data:UsersInput!) {\n  users(in:$data) {\n    hasMore\n    nodes {\n      avatar\n      siteRanking\n      userSlug\n      realName\n      aboutMe\n      reputationLevel\n      followedByMe\n      followerNumber\n      followingNumber\n    }\n  }\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var i = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var i = e.definitions[t];
                    if (i.name && i.name.value == n) return i
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), i[e.name.value] = n
                }
            })), e.exports = n, e.exports.users = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var a = i[n] || new Set,
                    o = new Set,
                    u = new Set;
                for (a.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var s = u;
                    u = new Set, s.forEach((function(e) {
                        o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return o.forEach((function(n) {
                    var i = r(e, n);
                    i && t.definitions.push(i)
                })), t
            }(n, "users")
        },
        18471: function(e, n, t) {
            "use strict";
            t.d(n, {
                o: function() {
                    return s
                }
            });
            var i = t(26042),
                r = t(9669),
                a = t.n(r),
                o = t(31955),
                u = t(32180);

            function s(e, n) {
                var t = o.Z.get("__appToken__");
                return a()(e, (0, i.Z)({
                    headers: (0, i.Z)({
                        "content-type": "application/json"
                    }, t ? {
                        Authorization: "Bearer ".concat(t)
                    } : {}, n && n.headers),
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: "X-CSRFToken"
                }, n && (0, u.Z)(n, "headers")))
            }
        },
        36806: function(e, n, t) {
            "use strict";
            t.d(n, {
                C: function() {
                    return o
                }
            });
            var i = t(26042),
                r = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, r.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        66684: function(e, n, t) {
            "use strict";
            t.d(n, {
                KA: function() {
                    return d
                },
                M8: function() {
                    return s
                },
                WV: function() {
                    return l
                }
            });
            var i = t(85893),
                r = t(42054),
                a = t(67294),
                o = (0, a.createContext)({
                    editor: null,
                    value: ""
                }),
                u = (0, a.createContext)({
                    setEditor: r.Z,
                    setValue: r.Z
                }),
                s = function() {
                    return (0, a.useContext)(o)
                },
                l = function() {
                    return (0, a.useContext)(u)
                },
                d = function(e) {
                    var n = e.children,
                        t = (0, a.useState)(null),
                        r = t[0],
                        s = t[1],
                        l = (0, a.useState)(""),
                        d = l[0],
                        c = l[1];
                    return (0, i.jsx)(u.Provider, {
                        value: {
                            setEditor: s,
                            setValue: c
                        },
                        children: (0, i.jsx)(o.Provider, {
                            value: {
                                editor: r,
                                value: d
                            },
                            children: n
                        })
                    })
                }
        },
        45734: function(e, n, t) {
            "use strict";
            t.d(n, {
                Y: function() {
                    return c
                },
                s: function() {
                    return d
                }
            });
            var i = t(47568),
                r = t(70655),
                a = t(83857),
                o = t(19579),
                u = t(80441),
                s = t(85707),
                l = t(66684),
                d = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/bmp", "image/webp"],
                c = function(e) {
                    var n = (0, l.M8)().editor,
                        t = (0, u.Ik)(),
                        c = (0, a.V)({
                            accepts: d,
                            maxFileSize: 20971520,
                            onError: function(e) {
                                if (e.error) {
                                    if (console.error({
                                            cause: e.error.cause,
                                            message: e.error.message,
                                            name: e.error.name,
                                            stack: e.error.stack
                                        }), "string" === typeof e.error) return o.y.error(e.error);
                                    if (e.error.message) return "429 Too Many Requests" === e.error.message ? o.y.error("Too Many Requests") : o.y.error(e.error.message)
                                }
                                return o.y.error("Upload failure")
                            },
                            onSuccess: function() {
                                var a = (0, i.Z)((function(i) {
                                    var a, u, l, d;
                                    return (0, r.__generator)(this, (function(r) {
                                        return a = i.url, u = i.file, l = u.name.replace(/([[\]])/g, "\\$1"), d = encodeURI(a).replace(/([()])/g, "\\$1"), a && !(null === e || void 0 === e ? void 0 : e.isNewEditor) && o.y.success("Upload successfully"), n && t && (0, s.J4)({
                                            editor: n,
                                            content: "![".concat(l, "](").concat(d, ")"),
                                            monaco: t
                                        }), [2]
                                    }))
                                }));
                                return function(e) {
                                    return a.apply(this, arguments)
                                }
                            }()
                        });
                    return {
                        doSelect: c.doSelect,
                        uploadFiles: c.uploadFiles
                    }
                }
        },
        85707: function(e, n, t) {
            "use strict";
            t.d(n, {
                HI: function() {
                    return s
                },
                J4: function() {
                    return l
                },
                PH: function() {
                    return a
                },
                PX: function() {
                    return u
                },
                Th: function() {
                    return r
                },
                pn: function() {
                    return o
                }
            });
            var i = t(26042);

            function r(e) {
                return (0, i.Z)({
                    contextMenuGroupId: "markdown"
                }, e)
            }

            function a(e, n) {
                var t = e.getSelection(),
                    i = e.getModel();
                return t && i ? new n.Selection(t.startLineNumber, 0, t.startLineNumber, i.getLineMaxColumn(t.startLineNumber)) : null
            }

            function o(e) {
                var n = e.convertedText.split("\n").pop().length - e.selectedText.split("\n").pop().length;
                return e.selectedRange.setEndPosition(e.selectedRange.endLineNumber, e.selectedRange.endColumn + n)
            }

            function u(e) {
                try {
                    return new URL(e).origin.startsWith("http")
                } catch (n) {
                    return !1
                }
            }

            function s(e, n) {
                var t = e.getSelection(),
                    i = e.getModel();
                return t && i ? new n.Selection(t.startLineNumber, 0, t.endLineNumber, i ? i.getLineMaxColumn(t.endLineNumber) : 0) : null
            }

            function l(e) {
                var n = e.editor,
                    t = e.content,
                    i = e.getUserSelection,
                    r = e.monaco,
                    a = n.getModel(),
                    o = s(n, r);
                if (o && a) {
                    var u = t.replace(/([^\n])$/, "$1\n"),
                        l = function(e) {
                            if (!e.model.getValueInRange(e.currentLineSelection)) return e.currentLineSelection;
                            var n = e.currentLineSelection.endLineNumber + 1;
                            return new r.Selection(n, 0, n, 0)
                        }({
                            model: a,
                            currentLineSelection: o
                        }),
                        d = function(e) {
                            var n = e.insertedText.trim().split("\n"),
                                t = e.editSelection.startLineNumber + n.length - 1,
                                i = n[n.length - 1].length + 1;
                            return new r.Selection(e.editSelection.startLineNumber, 0, t, i)
                        }({
                            insertedText: u,
                            editSelection: l
                        }),
                        c = i ? i(d) : d;
                    n.pushUndoStop(), n.executeEdits("", [{
                        range: l,
                        text: u
                    }], [c]), n.pushUndoStop()
                }
            }
        },
        18501: function(e, n, t) {
            "use strict";
            t.d(n, {
                e: function() {
                    return H
                }
            });
            var i = t(47568),
                r = t(26042),
                a = t(69396),
                o = t(10253),
                u = t(70655),
                s = t(85893),
                l = t(19457),
                d = t(4298),
                c = t.n(d),
                f = t(67294),
                v = (t(3125), t(91106)),
                m = t(45007),
                p = t.n(m),
                k = t(33475),
                h = t.n(k),
                g = t(63808),
                Z = t(58070),
                y = t.n(Z),
                S = t(85206),
                b = t(13936),
                N = t(42054),
                w = "https://static.leetcode-cn.com/packages/aliyun-sdk/aliyun-oss-sdk-5.3.1.min.js",
                x = "https://static.leetcode-cn.com/packages/aliyun-sdk/aliyun-upload-sdk-1.5.0.min.js",
                F = (0, b.Z)((0, i.Z)((function() {
                    return (0, u.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, C(w, N.Z)];
                            case 1:
                                return e.sent(), [2, C(x, (function() {
                                    return window.AliyunUpload
                                }))]
                        }
                    }))
                })));

            function C(e, n) {
                return new Promise((function(t, i) {
                    var r = document.createElement("script");
                    r.type = "text/javascript", r.src = e, r.onload = function() {
                        return t(n())
                    }, r.onerror = i, document.head.appendChild(r)
                }))
            }
            var E = t(80441),
                I = t(23874),
                j = t(85707),
                T = t(66684),
                L = ["video/mp4", "video/webm", "video/quicktime", "video/mpeg", "video/3gpp", "video/x-m4v", "video/x-flv", "video/x-msvideo", "video/x-ms-asf", "video/x-ms-wmv", "video/x-matroska", "video/vnd.dlna.mpeg-tts"],
                M = function() {
                    var e = (0, T.M8)().editor,
                        n = (0, E.Ik)(),
                        t = (0, I.zAx)(g.f6).mutateAsync,
                        r = (0, I.OSo)(g.f6).mutateAsync,
                        a = (0, I.A3)(g.f6).mutateAsync,
                        s = (0, f.useState)(""),
                        l = s[0],
                        d = s[1],
                        c = (0, f.useState)(""),
                        v = c[0],
                        m = c[1],
                        p = (0, f.useState)(0),
                        k = p[0],
                        h = p[1],
                        Z = (0, o.Z)((0, S.F)(), 2),
                        y = Z[0],
                        b = Z[1],
                        N = (0, f.useCallback)(function() {
                            var o = (0, i.Z)((function(i) {
                                var o;
                                return (0, u.__generator)(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return [4, F()];
                                        case 1:
                                            return o = u.sent(), [2, new Promise((function(u) {
                                                var s = new o.Vod({
                                                    userId: "255395823566389293",
                                                    onUploadstarted: function(e) {
                                                        t({
                                                            data: {
                                                                fileName: i.name,
                                                                title: i.name,
                                                                description: ""
                                                            }
                                                        }).then((function(n) {
                                                            var t, i = null === (t = n.videosGetUploadCredential) || void 0 === t ? void 0 : t.credential;
                                                            i && s.setUploadAuthAndAddress(e, i.uploadAuth, i.uploadAddress, i.videoId)
                                                        }))
                                                    },
                                                    onUploadSucceed: function(t) {
                                                        var a = t.videoId;
                                                        a && r({
                                                            videoId: a
                                                        }).then((function(t) {
                                                            var r, a = null === (r = t.videosSaveUrl) || void 0 === r ? void 0 : r.video.uuid;
                                                            a && (d(a), u(a), e && n && (0, j.J4)({
                                                                editor: e,
                                                                monaco: n,
                                                                content: "![".concat(i.name, "](").concat(a, ")")
                                                            }))
                                                        }))
                                                    },
                                                    onUploadFailed: function(e, n, t) {
                                                        m("".concat(n, ": ").concat(t))
                                                    },
                                                    onUploadProgress: function(e, n, t) {
                                                        h(t)
                                                    },
                                                    onUploadTokenExpired: function(e) {
                                                        var n = e.videoId;
                                                        n && a({
                                                            videoId: n
                                                        }).then((function(e) {
                                                            var n, t = null === (n = e.videosRefreshUploadCredential) || void 0 === n ? void 0 : n.credential.uploadAuth;
                                                            t && s.resumeUploadWithAuth(t)
                                                        }))
                                                    }
                                                });
                                                s.addFile(i, null, null, null, ""), s.startUpload()
                                            }))]
                                    }
                                }))
                            }));
                            return function(e) {
                                return o.apply(this, arguments)
                            }
                        }(), [e, t, n, a, r]);
                    return {
                        doSelect: (0, f.useCallback)((function() {
                            b({
                                accept: L,
                                multiple: !1
                            }, (function(e) {
                                var n = Array.isArray(e) ? e[0].file : e.file;
                                n && N(n)
                            }))
                        }), [b, N]),
                        uploadFile: N,
                        url: l,
                        error: v,
                        progress: k,
                        previewFile: y
                    }
                },
                V = t(45734),
                _ = t(19579),
                U = t(40832),
                D = t(66247),
                A = t(82521),
                P = t(29297),
                O = t(49105),
                q = t(4563),
                R = t(68708),
                z = function() {
                    var e = (0, i.Z)((function(e) {
                        var n, t, i;
                        return (0, u.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, v.K.request(p(), { in: {
                                            query: e.toLowerCase(),
                                            offset: 0,
                                            limit: 10
                                        }
                                    })];
                                case 1:
                                    return n = r.sent(), t = (null === n || void 0 === n ? void 0 : n.problemsetQuestions) || {
                                        questions: []
                                    }, i = t.questions, [2, (void 0 === i ? [] : i).map((function(e) {
                                        return {
                                            id: e.titleSlug,
                                            type: l.ue.question,
                                            name: e.titleCn || e.title,
                                            href: "".concat(q.C5 && location.origin, "/problems/").concat(e.titleSlug),
                                            frontendId: e.frontendId,
                                            difficulty: e.difficulty
                                        }
                                    }))]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Q = function() {
                    var e = (0, i.Z)((function(e) {
                        var n, t, i;
                        return (0, u.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, v.K.request(h(), {
                                        data: {
                                            keyWords: e.toLowerCase(),
                                            offset: 0,
                                            limit: 10
                                        }
                                    })];
                                case 1:
                                    return n = r.sent(), t = (null === n || void 0 === n ? void 0 : n.users) || {
                                        nodes: []
                                    }, i = t.nodes, [2, (void 0 === i ? [] : i).map((function(e) {
                                        return {
                                            id: e.userSlug,
                                            type: l.ue.user,
                                            name: e.realName,
                                            href: "".concat(q.C5 && location.origin, "/u/").concat(e.userSlug),
                                            avatar: e.avatar
                                        }
                                    }))]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                $ = function() {
                    var e = (0, i.Z)((function(e) {
                        var n;
                        return (0, u.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, g.f6.request(y(), {
                                        uuid: e
                                    })];
                                case 1:
                                    return [2, null === (n = t.sent()) || void 0 === n ? void 0 : n.videosVideoInfo]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = function(e) {
                    var n = (0, U.G)(),
                        t = M().uploadFile,
                        d = (0, V.Y)({
                            isNewEditor: !0
                        }).uploadFiles,
                        v = (0, o.Z)((0, D._)("DEBUG_MODE", !1), 2),
                        m = v[0],
                        p = v[1];
                    (0, O.P)("Alt+d", (function() {
                        R.QR || p(!m)
                    }), {
                        preventDefault: !0,
                        enableOnFormTags: !0,
                        enableOnContentEditable: !0
                    });
                    var k = (0, f.useState)(),
                        h = k[0],
                        g = k[1];
                    if ((0, f.useEffect)((function() {
                            h && e.initValue && e.readOnly && (h.children = e.initValue)
                        }), [h, e.initValue, e.readOnly]), (0, f.useEffect)((function() {
                            e.readOnly || P.d.qdNewEditorExposure()
                        }), [e.readOnly]), !(0, A.E)()) return null;
                    var Z = function() {
                            var e = (0, i.Z)((function(e) {
                                return (0, u.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, d([e])[0]];
                                        case 1:
                                            return [2, n.sent().url]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        y = function() {
                            var e = (0, i.Z)((function(e, n) {
                                return (0, u.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, ("video/*" === n ? t : Z)(e)];
                                        case 1:
                                            return [2, i.sent()]
                                    }
                                }))
                            }));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c(), {
                            src: "https://g.alicdn.com/apsara-media-box/imp-web-player/2.20.1/aliplayer-min.js"
                        }), (0, s.jsx)(c(), {
                            src: "https://static.leetcode-cn.com/packages/aliyun-sdk/aliyun-oss-sdk-5.3.1.min.js"
                        }), (0, s.jsx)(c(), {
                            src: "https://static.leetcode-cn.com/packages/aliyun-sdk/aliyun-upload-sdk-1.5.0.min.js"
                        }), (0, s.jsx)(l.LD, (0, a.Z)((0, r.Z)({}, e), {
                            isDarkMode: n,
                            isDebugMode: m,
                            style: (0, a.Z)((0, r.Z)({}, e.style), {
                                background: "transparent"
                            }),
                            toast: {
                                success: _.y.success,
                                error: _.y.error,
                                info: _.y.info
                            },
                            onCreate: function(e) {
                                g(e)
                            },
                            onUploadFile: y,
                            onSearchUser: Q,
                            onSearchQuestion: z,
                            onFetchVideoInfo: $,
                            onReport: function(e) {
                                P.d.qdNewEditorMenuClick({
                                    qd_new_editor_menu_node: e
                                })
                            }
                        }))]
                    })
                }
        },
        11095: function(e, n, t) {
            "use strict";
            t.d(n, {
                u: function() {
                    return f
                }
            });
            var i = t(14924),
                r = t(85893),
                a = t(84539),
                o = t(67294),
                u = t(11163),
                s = t.n(u),
                l = t(12922),
                d = t(15371),
                c = t(385);

            function f(e) {
                var n = e.visible,
                    t = e.onCancel,
                    u = e.title,
                    f = e.children,
                    v = e.afterClose,
                    m = e.className,
                    p = e.modalClassName,
                    k = e.closeIconClassName,
                    h = e.closeBtnClassName,
                    g = e.titleRowClass,
                    Z = e.titleClassName,
                    y = e.maskClassName,
                    S = e.closable,
                    b = void 0 === S || S,
                    N = e.showCloseIcon,
                    w = void 0 === N || N,
                    x = e.maskClosable,
                    F = void 0 !== x && x,
                    C = e.stopMouseDownPropagation,
                    E = e.shouldCloseOnEsc,
                    I = void 0 === E || E,
                    j = e.renderPrefixChildren,
                    T = e.noShadow,
                    L = void 0 !== T && T,
                    M = e.beforeHistoryChangeEnable,
                    V = void 0 === M || M,
                    _ = e.customRef,
                    U = e.customTransition,
                    D = void 0 === U ? {} : U,
                    A = e.customStyle,
                    P = e.beforeLeave,
                    O = e.isOutsideScrollable,
                    q = void 0 === O || O;
                (0, o.useEffect)((function() {
                    return s().events.on("beforeHistoryChange", (function() {
                            V && t()
                        })),
                        function() {
                            return s().events.off("beforeHistoryChange", (function() {
                                return V && t()
                            }))
                        }
                }), [V, t]), (0, o.useEffect)((function() {
                    if (I) {
                        var e = function(e) {
                            "Escape" === e.key && t()
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                return window.removeEventListener("keyup", e)
                            }
                    }
                }), [t, I]), (0, o.useEffect)((function() {
                    return document.body.style.overflow = !q && n ? "hidden" : "",
                        function() {
                            document.body.style.overflow = ""
                        }
                }), [q, n]);
                var R = (0, o.useCallback)((function(e) {
                    return e.stopPropagation()
                }), []);
                return (0, r.jsx)(a.u, {
                    appear: !0,
                    show: n,
                    afterLeave: v,
                    children: (0, r.jsx)("div", {
                        "aria-modal": "true",
                        role: "dialog",
                        className: (0, l.yI)("z-modal fixed inset-0 overflow-y-auto", p),
                        onMouseDown: null !== C && void 0 !== C ? C : R,
                        children: (0, r.jsxs)("div", {
                            className: "flex min-h-screen items-center justify-center px-4",
                            children: [(0, r.jsx)(a.u.Child, {
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    onClick: F ? t : void 0,
                                    className: (0, l.yI)("bg-gray-8 fixed inset-0 opacity-60", y)
                                })
                            }), null === j || void 0 === j ? void 0 : j.map((function(e, n) {
                                return e ? (0, r.jsx)(a.u.Child, {
                                    as: o.Fragment,
                                    enter: (0, l.yI)("ease-out duration-300", D.enter),
                                    enterFrom: (0, l.yI)("opacity-0 scale-95", D.enterFrom),
                                    enterTo: (0, l.yI)("opacity-100 scale-100", D.enterTo),
                                    leave: (0, l.yI)("ease-in duration-200", D.leave),
                                    leaveFrom: (0, l.yI)("opacity-100 scale-100", D.leaveFrom),
                                    leaveTo: (0, l.yI)("opacity-0 scale-95", D.leaveTo),
                                    children: e
                                }, "prefix-child-".concat(n)) : null
                            })), (0, r.jsx)(a.u.Child, {
                                as: o.Fragment,
                                enter: (0, l.yI)("ease-out duration-300", D.enter),
                                enterFrom: (0, l.yI)("opacity-0 scale-95", D.enterFrom),
                                enterTo: (0, l.yI)("opacity-100 scale-100", D.enterTo),
                                leave: (0, l.yI)("ease-in duration-200", D.leave),
                                leaveFrom: (0, l.yI)("opacity-100 scale-100", D.leaveFrom),
                                leaveTo: (0, l.yI)("opacity-0 scale-95", D.leaveTo),
                                beforeLeave: P,
                                children: (0, r.jsxs)("div", {
                                    className: (0, l.yI)("my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] p-5 text-left transition-all", d.Cj.bgOverlay3, (0, i.Z)({
                                        "md:min-w-[420px]": !(null === m || void 0 === m ? void 0 : m.includes("md:min-w-"))
                                    }, d.eq.modal, !L), m),
                                    ref: _,
                                    style: A,
                                    children: [u ? (0, r.jsxs)("div", {
                                        className: (0, l.yI)("flex items-center justify-between", g),
                                        children: [(0, r.jsx)("h3", {
                                            className: (0, l.yI)("text-lg font-medium", Z),
                                            children: u
                                        }), b && w && (0, r.jsx)("button", {
                                            onClick: t,
                                            className: (0, l.yI)("cursor-pointer rounded transition-all", d.Cj.fill3Hover, h),
                                            children: (0, r.jsx)(c.F, {
                                                className: (0, l.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", k)
                                            })
                                        })]
                                    }) : (0, r.jsx)(r.Fragment, {
                                        children: b && (0, r.jsx)("button", {
                                            onClick: t,
                                            className: (0, l.yI)("cursor-pointer rounded transition-all", "z-modal absolute right-0 top-0 m-5", h),
                                            children: (0, r.jsx)(c.F, {
                                                className: (0, l.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", k)
                                            })
                                        })
                                    }), f]
                                })
                            })]
                        })
                    })
                })
            }
        },
        46398: function(e, n, t) {
            "use strict";
            t.d(n, {
                O: function() {
                    return o
                }
            });
            var i = t(85893),
                r = (t(67294), t(94184)),
                a = t.n(r),
                o = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, i.jsx)("div", {
                        className: a()("animate-pulse", n),
                        children: t
                    })
                }
        },
        27415: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return o
                }
            });
            var i = t(85893),
                r = (t(67294), t(12922)),
                a = t(15371),
                o = function(e) {
                    var n = e.className,
                        t = e.style;
                    return (0, i.jsx)("div", {
                        className: (0, r.yI)("h-3 rounded-[5px]", a.Cj.fill3, n),
                        style: t
                    })
                }
        },
        49105: function(e, n, t) {
            "use strict";
            t.d(n, {
                P: function() {
                    return b
                }
            });
            var i, r, a = t(14924),
                o = t(26042),
                u = t(69396),
                s = t(67294),
                l = t(82670),
                d = (i = {}, (0, a.Z)(i, "\xa1", "1"), (0, a.Z)(i, "\u2122", "2"), (0, a.Z)(i, "\xa3", "3"), (0, a.Z)(i, "\xa2", "4"), (0, a.Z)(i, "\u221e", "5"), (0, a.Z)(i, "\xa7", "6"), (0, a.Z)(i, "\xb6", "7"), (0, a.Z)(i, "\u2022", "8"), (0, a.Z)(i, "\xaa", "9"), (0, a.Z)(i, "\xba", "0"), (0, a.Z)(i, "\u2013", "-"), (0, a.Z)(i, "\u2260", "="), (0, a.Z)(i, "\u2044", "!"), (0, a.Z)(i, "\u20ac", "@"), (0, a.Z)(i, "\u2039", "#"), (0, a.Z)(i, "\u203a", "$"), (0, a.Z)(i, "\ufb01", "%"), (0, a.Z)(i, "\ufb02", "^"), (0, a.Z)(i, "\u2021", "&"), (0, a.Z)(i, "\xb0", "*"), (0, a.Z)(i, "\xb7", "("), (0, a.Z)(i, "\u201a", ")"), (0, a.Z)(i, "\u2014", "-"), (0, a.Z)(i, "\xb1", "+"), (0, a.Z)(i, "\u0153", "q"), (0, a.Z)(i, "\u2211", "w"), (0, a.Z)(i, "\xae", "r"), (0, a.Z)(i, "\u2020", "t"), (0, a.Z)(i, "\xa5", "y"), (0, a.Z)(i, "\xf8", "o"), (0, a.Z)(i, "\u03c0", "p"), (0, a.Z)(i, "\u201c", "["), (0, a.Z)(i, "\u2018", "]"), (0, a.Z)(i, "\xab", "\\"), (0, a.Z)(i, "\u0152", "Q"), (0, a.Z)(i, "\u201e", "W"), (0, a.Z)(i, "\xb4", "E"), (0, a.Z)(i, "\u2030", "R"), (0, a.Z)(i, "\u02c7", "T"), (0, a.Z)(i, "\xc1", "Y"), (0, a.Z)(i, "\xa8", "U"), (0, a.Z)(i, "\u02c6", "I"), (0, a.Z)(i, "\xd8", "O"), (0, a.Z)(i, "\u220f", "P"), (0, a.Z)(i, "\u201d", "{"), (0, a.Z)(i, "\u2019", "}"), (0, a.Z)(i, "\xbb", "|"), (0, a.Z)(i, "\xe5", "a"), (0, a.Z)(i, "\xdf", "s"), (0, a.Z)(i, "\u2202", "d"), (0, a.Z)(i, "\u0192", "f"), (0, a.Z)(i, "\xa9", "g"), (0, a.Z)(i, "\u02d9", "h"), (0, a.Z)(i, "\u2206", "j"), (0, a.Z)(i, "\u02da", "k"), (0, a.Z)(i, "\xac", "l"), (0, a.Z)(i, "\u2026", ";"), (0, a.Z)(i, "\xe6", "'"), (0, a.Z)(i, "\xc5", "A"), (0, a.Z)(i, "\xcd", "S"), (0, a.Z)(i, "\xce", "D"), (0, a.Z)(i, "\xcf", "F"), (0, a.Z)(i, "\u02dd", "G"), (0, a.Z)(i, "\xd3", "H"), (0, a.Z)(i, "\xd4", "J"), (0, a.Z)(i, "\uf8ff", "K"), (0, a.Z)(i, "\xd2", "L"), (0, a.Z)(i, "\xda", ":"), (0, a.Z)(i, "\xc6", '"'), (0, a.Z)(i, "\u03a9", "z"), (0, a.Z)(i, "\u2248", "x"), (0, a.Z)(i, "\xe7", "c"), (0, a.Z)(i, "\u221a", "v"), (0, a.Z)(i, "\u222b", "b"), (0, a.Z)(i, "\xb5", "m"), (0, a.Z)(i, "\u2264", ","), (0, a.Z)(i, "\u2265", "."), (0, a.Z)(i, "\xf7", "/"), (0, a.Z)(i, "\xb8", "Z"), (0, a.Z)(i, "\u02db", "X"), (0, a.Z)(i, "\xc7", "C"), (0, a.Z)(i, "\u25ca", "V"), (0, a.Z)(i, "\u0131", "B"), (0, a.Z)(i, "\u02dc", "N"), (0, a.Z)(i, "\xc2", "M"), (0, a.Z)(i, "\xaf", "<"), (0, a.Z)(i, "\u02d8", ">"), (0, a.Z)(i, "\xbf", "?"), i),
                c = (r = {}, (0, a.Z)(r, "`", "~"), (0, a.Z)(r, "1", "!"), (0, a.Z)(r, "2", "@"), (0, a.Z)(r, "3", "#"), (0, a.Z)(r, "4", "$"), (0, a.Z)(r, "5", "%"), (0, a.Z)(r, "6", "^"), (0, a.Z)(r, "7", "&"), (0, a.Z)(r, "8", "*"), (0, a.Z)(r, "9", "("), (0, a.Z)(r, "0", ")"), (0, a.Z)(r, "-", "_"), (0, a.Z)(r, "=", "+"), (0, a.Z)(r, "[", "{"), (0, a.Z)(r, "]", "}"), (0, a.Z)(r, "\\", "|"), (0, a.Z)(r, ";", ":"), (0, a.Z)(r, "'", '"'), (0, a.Z)(r, ",", "<"), (0, a.Z)(r, ".", ">"), (0, a.Z)(r, "/", "?"), (0, a.Z)(r, "q", "Q"), (0, a.Z)(r, "w", "W"), (0, a.Z)(r, "e", "E"), (0, a.Z)(r, "r", "R"), (0, a.Z)(r, "t", "T"), (0, a.Z)(r, "y", "Y"), (0, a.Z)(r, "u", "U"), (0, a.Z)(r, "i", "I"), (0, a.Z)(r, "o", "O"), (0, a.Z)(r, "p", "P"), (0, a.Z)(r, "a", "A"), (0, a.Z)(r, "s", "S"), (0, a.Z)(r, "d", "D"), (0, a.Z)(r, "f", "F"), (0, a.Z)(r, "g", "G"), (0, a.Z)(r, "h", "H"), (0, a.Z)(r, "j", "J"), (0, a.Z)(r, "k", "K"), (0, a.Z)(r, "l", "L"), (0, a.Z)(r, "z", "Z"), (0, a.Z)(r, "x", "X"), (0, a.Z)(r, "c", "C"), (0, a.Z)(r, "v", "V"), (0, a.Z)(r, "b", "B"), (0, a.Z)(r, "n", "N"), (0, a.Z)(r, "m", "M"), r),
                f = ["Shift", "Meta", "Alt", "Control"],
                v = "keydown",
                m = "object" === typeof navigator ? navigator.platform : "",
                p = /Mac|iPod|iPhone|iPad/.test(m),
                k = p ? "Meta" : "Control",
                h = "Win32" === m ? ["Control", "Alt"] : p ? ["Alt"] : [];

            function g(e, n) {
                return "function" === typeof e.getModifierState && (e.getModifierState(n) || h.includes(n) && e.getModifierState("AltGraph"))
            }

            function Z(e) {
                return e.trim().split(" ").map((function(e) {
                    var n = e.split(/\b\+/),
                        t = n.pop();
                    return [n = n.map((function(e) {
                        return "$mod" === e ? k : e
                    })), t]
                }))
            }

            function y(e, n) {
                var t, i, r = e.key;
                return r = p && n[0].includes("Alt") && null !== (t = d[r]) && void 0 !== t ? t : r, r = p && n[0].includes("Shift") && null !== (i = c[r]) && void 0 !== i ? i : r, !(n[1].toUpperCase() !== r.toUpperCase() && n[1] !== e.code || n[0].find((function(n) {
                    return !g(e, n)
                })) || f.find((function(t) {
                    return !n[0].includes(t) && n[1] !== t && g(e, t)
                })))
            }

            function S(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null !== (n = t.timeout) && void 0 !== n ? n : 1e3,
                    r = Object.keys(e).map((function(n) {
                        return [Z(n), e[n]]
                    })),
                    a = new Map,
                    o = null;
                return function(e) {
                    (0, l.Z)(e, KeyboardEvent) && (r.forEach((function(n) {
                        var t = n[0],
                            i = n[1],
                            r = a.get(t),
                            o = r || t,
                            u = o[0];
                        y(e, u) ? o.length > 1 ? a.set(t, o.slice(1)) : (a.delete(t), i(e)) : g(e, e.key) || a.delete(t)
                    })), o && clearTimeout(o), o = setTimeout(a.clear.bind(a), i))
                }
            }
            var b = function(e, n, t) {
                (0, s.useEffect)((function() {
                    var i = e.split(",").map((function(e) {
                            return e.trim()
                        })).reduce((function(e, i) {
                            return (0, u.Z)((0, o.Z)({}, e), (0, a.Z)({}, i, (function(e) {
                                var i;
                                (function(e) {
                                    var n = e.target && e.target.tagName;
                                    return ["input", "textarea", "select"].some((function(e) {
                                        return e.toLowerCase() === (null === n || void 0 === n ? void 0 : n.toLowerCase())
                                    }))
                                })(e) && !(null === t || void 0 === t ? void 0 : t.enableOnFormTags) || function(e) {
                                    var n = e.target && e.target;
                                    return null === n || void 0 === n ? void 0 : n.isContentEditable
                                }(e) && !(null === t || void 0 === t ? void 0 : t.enableOnContentEditable) || (null === t || void 0 === t || null === (i = t.ignoreEventWhen) || void 0 === i ? void 0 : i.call(t, e)) || ((null === t || void 0 === t ? void 0 : t.preventDefault) && e.preventDefault(), n())
                            })))
                        }), {}),
                        r = function(e, n) {
                            var t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = null !== (t = i.event) && void 0 !== t ? t : v,
                                a = S(n, i);
                            return e.addEventListener(r, a),
                                function() {
                                    e.removeEventListener(r, a)
                                }
                        }(window, i);
                    return function() {
                        r()
                    }
                }), [n, e, t])
            }
        },
        82521: function(e, n, t) {
            "use strict";
            t.d(n, {
                E: function() {
                    return r
                }
            });
            var i = t(67294),
                r = function() {
                    var e = (0, i.useState)(!1),
                        n = e[0],
                        t = e[1];
                    return (0, i.useEffect)((function() {
                        return t(true)
                    }), [true]), n
                }
        },
        57002: function(e, n, t) {
            "use strict";
            t.d(n, {
                r: function() {
                    return r
                }
            });
            var i = t(50632),
                r = function() {
                    var e, n, t, r = (0, i.U5)({
                            notifyOnChangeProps: ["data"]
                        }),
                        a = r.data,
                        o = r.isLoading,
                        u = null === a || void 0 === a ? void 0 : a.userStatus,
                        s = null !== (e = null === u || void 0 === u ? void 0 : u.isPhoneVerified) && void 0 !== e && e,
                        l = null !== (n = null === u || void 0 === u ? void 0 : u.isVerified) && void 0 !== n && n,
                        d = {
                            isPhoneVerified: s,
                            isVerified: l
                        };
                    return {
                        isLoading: o,
                        isSignedIn: null !== (t = null === u || void 0 === u ? void 0 : u.isSignedIn) && void 0 !== t && t,
                        isPhoneVerified: s,
                        isVerified: l,
                        isPrimaryVerified: d.isVerified
                    }
                }
        },
        8965: function(e, n, t) {
            "use strict";
            t.d(n, {
                g: function() {
                    return i
                }
            });
            var i = function(e) {
                return new Promise((function(n) {
                    var t = new Image;
                    t.src = e, t.onload = function() {
                        n(!0)
                    }, t.onerror = function() {
                        n(!1)
                    }
                }))
            }
        },
        67575: function(e, n, t) {
            "use strict";
            t.d(n, {
                h: function() {
                    return l
                }
            });
            var i = t(67294),
                r = t(19579);
            var a = t(24193),
                o = t.n(a),
                u = t(80983);

            function s(e) {
                e && r.y.error(e)
            }

            function l(e) {
                var n = (0, i.useRef)(0);
                return [(0, i.useCallback)((function(t) {
                    return window.navigator.onLine ? function(e, n) {
                        return "number" !== typeof n || e.size <= n
                    }(t, e.maxFileSize) ? function(e, n) {
                        if (n) {
                            var t = e.type || (0, u.lookup)(e.name);
                            return !!t && n.some((function(e) {
                                return o()(t, e)
                            }))
                        }
                        return !0
                    }(t, e.accepts) ? !(n.current >= e.maxFileCount) || (s(e.maxFileCountErrorMsg), !1) : (s(e.acceptsErrorMsg), !1) : (s(e.maxFileSizeErrorMsg), !1) : (s(e.networkErrorMsg), !1)
                }), [e, n]), (0, i.useCallback)((function(t) {
                    var i = n.current + t;
                    return i <= e.maxFileCount && i >= 0 && (n.current = i, !0)
                }), [e.maxFileCount])]
            }
        },
        83857: function(e, n, t) {
            "use strict";
            t.d(n, {
                V: function() {
                    return p
                }
            });
            var i = t(47568),
                r = t(10253),
                a = t(70655),
                o = t(42054),
                u = t(27771),
                s = t(67294),
                l = t(85206),
                d = t(70341),
                c = t(18471),
                f = t(8965),
                v = function(e) {
                    var n = e.file,
                        t = new FormData;
                    t.append("image", n);
                    var r = n.type.startsWith("image/");
                    return (0, c.o)(d.Hb.uploadImage(), {
                        method: "POST",
                        data: t,
                        withCredentials: !0
                    }).then(function() {
                        var e = (0, i.Z)((function(e) {
                            var t, i, o, u;
                            return (0, a.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = e.data, r ? [4, (0, f.g)(t.url)] : [3, 2];
                                    case 1:
                                        return o = a.sent(), [3, 3];
                                    case 2:
                                        o = !1, a.label = 3;
                                    case 3:
                                        return i = o, [2, {
                                            url: t.url,
                                            error: null !== (u = t.error) && void 0 !== u ? u : null,
                                            file: n,
                                            isImage: r,
                                            isValidImage: i
                                        }]
                                }
                            }))
                        }));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()).catch((function(e) {
                        return Promise.resolve({
                            url: "",
                            file: n,
                            error: new Error(e),
                            isImage: r,
                            isValidImage: !1
                        })
                    }))
                },
                m = t(67575);

            function p(e) {
                var n = e.bucket,
                    t = e.prefix,
                    d = e.accepts,
                    c = e.maxFileSize,
                    f = void 0 === c ? 1 / 0 : c,
                    p = e.maxFileCount,
                    k = void 0 === p ? 1 / 0 : p,
                    h = e.multiple,
                    g = void 0 !== h && h,
                    Z = e.onSuccess,
                    y = void 0 === Z ? o.Z : Z,
                    S = e.onError,
                    b = void 0 === S ? o.Z : S,
                    N = (0, s.useState)(!1),
                    w = N[0],
                    x = N[1],
                    F = (0, r.Z)((0, l.F)(), 2),
                    C = F[0],
                    E = F[1],
                    I = (0, r.Z)((0, m.h)({
                        accepts: d,
                        maxFileSize: f,
                        maxFileCount: k,
                        maxFileSizeErrorMsg: "Image is too large"
                    }), 2),
                    j = I[0],
                    T = I[1],
                    L = (0, s.useCallback)((function(e) {
                        return e.filter((function(e) {
                            return !!e && (j(e) && T(1))
                        })).map((function(e) {
                            return x(!0), v({
                                file: e,
                                bucket: n,
                                prefix: t
                            }).then(function() {
                                var e = (0, i.Z)((function(e) {
                                    return (0, a.__generator)(this, (function(n) {
                                        return e.error || !e.url || e.isImage && !e.isValidImage ? b(e) : y(e), [2, e]
                                    }))
                                }));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()).finally((function() {
                                return x(!1)
                            }))
                        }))
                    }), [n, j, b, y, t, T]),
                    M = (0, s.useCallback)((function() {
                        function e() {
                            return (e = (0, i.Z)((function() {
                                return (0, a.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, E({
                                                accept: d,
                                                multiple: g
                                            }, (function(e) {
                                                return (0, u.Z)(e) || (e = [e]), L(e.map((function(e) {
                                                    return e.file
                                                })))
                                            }))];
                                        case 1:
                                            return e.sent(), x(!1), [2]
                                    }
                                }))
                            }))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [E, d, g, L]);
                return {
                    doSelect: M,
                    uploadFiles: L,
                    previewFile: C,
                    loading: w
                }
            }
        }
    }
]);