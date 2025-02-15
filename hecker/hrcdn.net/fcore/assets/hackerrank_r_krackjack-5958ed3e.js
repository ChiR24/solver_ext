/*! For license information please see hackerrank_r_krackjack-5958ed3e.js.LICENSE.txt */
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["hackerrank_r_krackjack"], {
        VAZs: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DocCommentHighlightRules = void 0;
            var r = n("9Myc"),
                a = n("1PE6").TextHighlightRules,
                i = function e() {
                    this.$rules = {
                        start: [{
                            token: "comment.doc.tag",
                            regex: "@[\\w\\d_]+"
                        }, e.getTagRule(), {
                            defaultToken: "comment.doc",
                            caseInsensitive: !0
                        }]
                    }
                };
            t.DocCommentHighlightRules = i, r.inherits(i, a), i.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                }
            }, i.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                }
            }, i.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                }
            }
        },
        "9Myc": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.inherits = void 0, t.inherits = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
        },
        "1PE6": (e, t) => {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            function r(e) {
                if ("object" !== n(e) || !e) return e;
                var t;
                if (Array.isArray(e)) {
                    t = [];
                    for (var a = 0; a < e.length; a++) t[a] = r(e[a]);
                    return t
                }
                if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
                for (var a in t = {}, e) t[a] = r(e[a]);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextHighlightRules = void 0;
            var a = function() {
                this.$rules = {
                    start: [{
                        token: "empty_line",
                        regex: "^$"
                    }, {
                        defaultToken: "text"
                    }]
                }
            };
            t.TextHighlightRules = a,
                function() {
                    this.addRules = function(e, t) {
                        if (t)
                            for (var n in e) {
                                for (var r = e[n], a = 0; a < r.length; a++) {
                                    var i = r[a];
                                    (i.next || i.onMatch) && ("string" == typeof i.next && 0 !== i.next.indexOf(t) && (i.next = t + i.next), i.nextState && 0 !== i.nextState.indexOf(t) && (i.nextState = t + i.nextState))
                                }
                                this.$rules[t + n] = r
                            } else
                                for (var n in e) this.$rules[n] = e[n]
                    }, this.getRules = function() {
                        return this.$rules
                    }, this.embedRules = function(e, t, n, a, i) {
                        var o = "function" == typeof e ? (new e).getRules() : e;
                        if (a)
                            for (var s = 0; s < a.length; s++) a[s] = t + a[s];
                        else
                            for (var l in a = [], o) a.push(t + l);
                        if (this.addRules(o, t), n) {
                            var c = Array.prototype[i ? "push" : "unshift"];
                            for (s = 0; s < a.length; s++) c.apply(this.$rules[a[s]], r(n))
                        }
                        this.$embeds || (this.$embeds = []), this.$embeds.push(t)
                    }, this.getEmbeds = function() {
                        return this.$embeds
                    };
                    var e = function(e, t) {
                            return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
                        },
                        t = function(e, t) {
                            return t.shift(), t.shift() || "start"
                        };
                    this.normalizeRules = function() {
                        var n = 0,
                            r = this.$rules;
                        Object.keys(r).forEach((function a(i) {
                            var o = r[i];
                            o.processed = !0;
                            for (var s = 0; s < o.length; s++) {
                                var l = o[s],
                                    c = null;
                                Array.isArray(l) && (c = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({
                                    defaultToken: l.token
                                }, {
                                    token: l.token + ".end",
                                    regex: l.end || l.start,
                                    next: "pop"
                                }), l.token = l.token + ".start", l.push = !0);
                                var d = l.next || l.push;
                                if (d && Array.isArray(d)) {
                                    var u = l.stateName;
                                    u || ("string" != typeof(u = l.token) && (u = u[0] || ""), r[u] && (u += n++)), r[u] = d, l.next = u, a(u)
                                } else "pop" == d && (l.next = t);
                                if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules)
                                    for (var g in l.rules) r[g] ? r[g].push && r[g].push.apply(r[g], l.rules[g]) : r[g] = l.rules[g];
                                var p = "string" == typeof l ? l : l.include;
                                if (p && (c = Array.isArray(p) ? p.map((function(e) {
                                        return r[e]
                                    })) : r[p]), c) {
                                    var m = [s, 1].concat(c);
                                    l.noEscape && (m = m.filter((function(e) {
                                        return !e.next
                                    }))), o.splice.apply(o, m), s--
                                }
                                l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                            }
                        }), this)
                    }, this.createKeywordMapper = function(e, t, n, r) {
                        var a = Object.create(null);
                        return Object.keys(e).forEach((function(t) {
                            var i = e[t];
                            n && (i = i.toLowerCase());
                            for (var o = i.split(r || "|"), s = o.length; s--;) a[o[s]] = t
                        })), Object.getPrototypeOf(a) && (a.__proto__ = null), this.$keywordList = Object.keys(a), e = null, n ? function(e) {
                            return a[e.toLowerCase()] || t
                        } : function(e) {
                            return a[e] || t
                        }
                    }, this.getKeywords = function() {
                        return this.$keywords
                    }
                }.call(a.prototype)
        },
        c0gp: (e, t, n) => {
            "use strict";
            var r = n("ziTh");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = 2e3,
                i = function(e) {
                    for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                        for (var n = this.states[t], r = [], a = 0, i = this.matchMappings[t] = {
                                defaultToken: "text"
                            }, o = "g", s = [], l = 0; l < n.length; l++) {
                            var c = n[l];
                            if (c.defaultToken && (i.defaultToken = c.defaultToken), c.caseInsensitive && (o = "gi"), null != c.regex) {
                                c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                                var d = c.regex,
                                    u = new RegExp("(?:(" + d + ")|(.))").exec("a").length - 2;
                                Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                    rule: c,
                                    groupCount: u - 1
                                }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c.token), u > 1 && (/\\\d/.test(c.regex) ? d = c.regex.replace(/\\([0-9]+)/g, (function(e, t) {
                                    return "\\" + (parseInt(t, 10) + a + 1)
                                })) : (u = 1, d = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || s.push(c)), i[a] = l, a += u, r.push(d), c.onMatch || (c.onMatch = null)
                            }
                        }
                        r.length || (i[0] = 0, r.push("$")), s.forEach((function(e) {
                            e.splitRegex = this.createSplitterRegexp(e.regex, o)
                        }), this), this.regExps[t] = new RegExp("(" + r.join(")|(") + ")|($)", o)
                    }
                };
            (function() {
                this.$setMaxTokenCount = function(e) {
                    a = 0 | e
                }, this.$applyToken = function(e) {
                    var t = this.splitRegex.exec(e).slice(1),
                        n = this.token.apply(this, t);
                    if ("string" == typeof n) return [{
                        type: n,
                        value: e
                    }];
                    for (var r = [], a = 0, i = n.length; a < i; a++) t[a] && (r[r.length] = {
                        type: n[a],
                        value: t[a]
                    });
                    return r
                }, this.$arrayTokens = function(e) {
                    if (!e) return [];
                    var t = this.splitRegex.exec(e);
                    if (!t) return "text";
                    for (var n = [], r = this.tokenArray, a = 0, i = r.length; a < i; a++) t[a + 1] && (n[n.length] = {
                        type: r[a],
                        value: t[a + 1]
                    });
                    return n
                }, this.removeCapturingGroups = function(e) {
                    return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, (function(e, t) {
                        return t ? "(?:" : e
                    }))
                }, this.createSplitterRegexp = function(e, t) {
                    if (-1 != e.indexOf("(?=")) {
                        var n = 0,
                            r = !1,
                            a = {};
                        e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function(e, t, i, o, s, l) {
                            return r ? r = "]" != s : s ? r = !0 : o ? (n == a.stack && (a.end = l + 1, a.stack = -1), n--) : i && (n++, 1 != i.length && (a.stack = n, a.start = l)), e
                        })), null != a.end && /^\)*$/.test(e.substr(a.end)) && (e = e.substring(0, a.start) + e.substr(a.end))
                    }
                    return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
                }, this.getLineTokens = function(e, t) {
                    if (t && "string" != typeof t) {
                        var n = t.slice(0);
                        "#tmp" === (t = n[0]) && (n.shift(), t = n.shift())
                    } else n = [];
                    var r = t || "start",
                        i = this.states[r];
                    i || (r = "start", i = this.states[r]);
                    var o = this.matchMappings[r],
                        s = this.regExps[r];
                    s.lastIndex = 0;
                    for (var l, c = [], d = 0, u = 0, g = {
                            type: null,
                            value: ""
                        }; l = s.exec(e);) {
                        var p = o.defaultToken,
                            m = null,
                            f = l[0],
                            h = s.lastIndex;
                        if (h - f.length > d) {
                            var _ = e.substring(d, h - f.length);
                            g.type == p ? g.value += _ : (g.type && c.push(g), g = {
                                type: p,
                                value: _
                            })
                        }
                        for (var x = 0; x < l.length - 2; x++)
                            if (void 0 !== l[x + 1]) {
                                p = (m = i[o[x]]).onMatch ? m.onMatch(f, r, n, e) : m.token, m.next && (r = "string" == typeof m.next ? m.next : m.next(r, n), (i = this.states[r]) || (this.reportError("state doesn't exist", r), r = "start", i = this.states[r]), o = this.matchMappings[r], d = h, (s = this.regExps[r]).lastIndex = h), m.consumeLineEnd && (d = h);
                                break
                            }
                        if (f)
                            if ("string" == typeof p) m && !1 === m.merge || g.type !== p ? (g.type && c.push(g), g = {
                                type: p,
                                value: f
                            }) : g.value += f;
                            else if (p)
                            for (g.type && c.push(g), g = {
                                    type: null,
                                    value: ""
                                }, x = 0; x < p.length; x++) c.push(p[x]);
                        if (d == e.length) break;
                        if (d = h, u++ > a) {
                            for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                                    startState: t,
                                    line: e
                                }); d < e.length;) g.type && c.push(g), g = {
                                value: e.substring(d, d += 2e3),
                                type: "overflow"
                            };
                            r = "start", n = [];
                            break
                        }
                    }
                    return g.type && c.push(g), n.length > 1 && n[0] !== r && n.unshift("#tmp", r), {
                        tokens: c,
                        state: n.length ? n : r
                    }
                }, this.reportError = function() {
                    r.log(arguments)
                }
            }).call(i.prototype);
            var o = i;
            t.default = o
        },
        OyKl: (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Tokenizer", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "TextHighlightRules", {
                enumerable: !0,
                get: function() {
                    return o.TextHighlightRules
                }
            }), Object.defineProperty(t, "DocCommentHighlightRules", {
                enumerable: !0,
                get: function() {
                    return s.DocCommentHighlightRules
                }
            }), Object.defineProperty(t, "AVAILABLE_LANGUAGES", {
                enumerable: !0,
                get: function() {
                    return l.AVAILABLE_LANGUAGES
                }
            }), Object.defineProperty(t, "registerRulesForLanguage", {
                enumerable: !0,
                get: function() {
                    return l.registerRulesForLanguage
                }
            }), t.oop = void 0;
            var a, i = (a = n("c0gp")) && a.__esModule ? a : {
                    default: a
                },
                o = n("1PE6"),
                s = n("VAZs"),
                l = n("f+SX"),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = d();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    return n.default = e, t && t.set(e, n), n
                }(n("9Myc"));

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function() {
                    return e
                }, e
            }
            t.oop = c
        },
        "f+SX": (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.registerRulesForLanguage = function(e, t) {
                var n = new o.default(t.getRules());
                return i.languages.setTokensProvider(e, {
                    getInitialState: function() {
                        return new c("")
                    },
                    tokenize: function(e, t) {
                        var r = n.getLineTokens(e, t.state),
                            a = r.tokens,
                            i = r.state,
                            o = 0,
                            s = a.map((function(e) {
                                var t = {
                                    startIndex: o,
                                    scopes: e.type
                                };
                                return o += e.value.length, t
                            }));
                        return {
                            endState: new c(i),
                            tokens: s
                        }
                    }
                })
            }, t.AVAILABLE_LANGUAGES = t.State = void 0;
            var a, i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    return n.default = e, t && t.set(e, n), n
                }(n("4Jew")),
                o = (a = n("c0gp")) && a.__esModule ? a : {
                    default: a
                };

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var c = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.state = t
                }
                var t, n;
                return t = e, (n = [{
                    key: "equals",
                    value: function(e) {
                        return e === this || e.state === this.state
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e(this.state)
                    }
                }]) && l(t.prototype, n), e
            }();
            t.State = c, t.AVAILABLE_LANGUAGES = ["ada", "cobol", "d", "dart", "elixir", "erlang", "fortran", "groovy", "haskell", "julia", "ocaml", "octave", "racket", "sbcl", "scala"]
        },
        "4xtG": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                        "support.function": "count|min|max|avg|sum|rank|now|coalesce|main",
                        keyword: "abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor",
                        "constant.language": "true|false|null"
                    }, "identifier", !0);
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "--.*$"
                        }, {
                            token: "string",
                            regex: '".*?"'
                        }, {
                            token: "string",
                            regex: "'.'"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                        }, {
                            token: "paren.lparen",
                            regex: "[\\(]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\)]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        vPHJ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                        "support.function": "count|min|max|avg|sum|rank|now|coalesce|main",
                        keyword: "ACCEPT|MERGE|SUM|ADD||MESSAGE|TABLE|ADVANCING|MODE|TAPE|AFTER|MULTIPLY|TEST|ALL|NEGATIVE|TEXT|ALPHABET|NEXT|THAN|ALSO|NO|THEN|ALTERNATE|NOT|THROUGH|AND|NUMBER|THRU|ANY|OCCURS|TIME|ARE|OF|TO|AREA|OFF|TOP||ASCENDING|OMITTED|TRUE|ASSIGN|ON|TYPE|AT|OPEN|UNIT|AUTHOR|OR|UNTIL|BEFORE|OTHER|UP|BLANK|OUTPUT|USE|BLOCK|PAGE|USING|BOTTOM|PERFORM|VALUE|BY|PIC|VALUES|CALL|PICTURE|WHEN|CANCEL|PLUS|WITH|CD|POINTER|WRITE|CHARACTER|POSITION||ZERO|CLOSE|POSITIVE|ZEROS|COLUMN|PROCEDURE|ZEROES|COMMA|PROGRAM|COMMON|PROGRAM-ID|COMMUNICATION|QUOTE|COMP|RANDOM|COMPUTE|READ|CONTAINS|RECEIVE|CONFIGURATION|RECORD|CONTINUE|REDEFINES|CONTROL|REFERENCE|COPY|REMAINDER|COUNT|REPLACE|DATA|REPORT|DATE|RESERVE|DAY|RESET|DELETE|RETURN|DESTINATION|REWIND|DISABLE|REWRITE|DISPLAY|RIGHT|DIVIDE|RUN|DOWN|SAME|ELSE|SEARCH|ENABLE|SECTION|END|SELECT|ENVIRONMENT|SENTENCE|EQUAL|SET|ERROR|SIGN|EXIT|SEQUENTIAL|EXTERNAL|SIZE|FLASE|SORT|FILE|SOURCE|LENGTH|SPACE|LESS|STANDARD|LIMIT|START|LINE|STOP|LOCK|STRING|LOW-VALUE|SUBTRACT",
                        "constant.language": "true|false|null"
                    }, "identifier", !0);
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "\\*.*$"
                        }, {
                            token: "string",
                            regex: '".*?"'
                        }, {
                            token: "string",
                            regex: "'.*?'"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                        }, {
                            token: "paren.lparen",
                            regex: "[\\(]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\)]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        "oO+C": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = r.DocCommentHighlightRules,
                s = function() {
                    var e = "class|struct|union|template|interface|enum|macro",
                        t = {
                            token: "constant.language.escape",
                            regex: "\\\\(?:(?:x[0-9A-F]{2})|(?:[0-7]{1,3})|(?:['\"\\?0abfnrtv\\\\])|(?:u[0-9a-fA-F]{4})|(?:U[0-9a-fA-F]{8}))"
                        },
                        n = "/|/\\=|&|&\\=|&&|\\|\\|\\=|\\|\\||\\-|\\-\\=|\\-\\-|\\+|\\+\\=|\\+\\+|\\<|\\<\\=|\\<\\<|\\<\\<\\=|\\<\\>|\\<\\>\\=|\\>|\\>\\=|\\>\\>\\=|\\>\\>\\>\\=|\\>\\>|\\>\\>\\>|\\!|\\!\\=|\\!\\<\\>|\\!\\<\\>\\=|\\!\\<|\\!\\<\\=|\\!\\>|\\!\\>\\=|\\?|\\$|\\=|\\=\\=|\\*|\\*\\=|%|%\\=|\\^|\\^\\=|\\^\\^|\\^\\^\\=|~|~\\=|\\=\\>|#",
                        r = this.$keywords = this.createKeywordMapper({
                            "keyword.modifier": "abstract|align|debug|deprecated|export|extern|const|final|in|inout|out|ref|immutable|lazy|nothrow|override|package|pragma|private|protected|public|pure|scope|shared|__gshared|synchronized|static|volatile",
                            "keyword.control": "break|case|continue|default|do|else|for|foreach|foreach_reverse|goto|if|return|switch|while|catch|try|throw|finally|version|assert|unittest|with",
                            "keyword.type": "auto|bool|char|dchar|wchar|byte|ubyte|float|double|real|cfloat|creal|cdouble|cent|ifloat|ireal|idouble|int|long|short|void|uint|ulong|ushort|ucent|function|delegate|string|wstring|dstring|size_t|ptrdiff_t|hash_t|Object",
                            keyword: "this|super|import|module|body|mixin|__traits|invariant|alias|asm|delete|typeof|typeid|sizeof|cast|new|in|is|typedef|__vector|__parameters",
                            "keyword.storage": e,
                            punctation: "\\.|\\,|;|\\.\\.|\\.\\.\\.",
                            "keyword.operator": n,
                            "constant.language": "null|true|false|__DATE__|__EOF__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__"
                        }, "identifier"),
                        a = "[a-zA-Z_¡-￿][a-zA-Z\\d_¡-￿]*\\b";
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "\\/\\/.*$"
                        }, o.getStartRule("doc-start"), {
                            token: "comment",
                            regex: "\\/\\*",
                            next: "star-comment"
                        }, {
                            token: "comment.shebang",
                            regex: "^\\s*#!.*"
                        }, {
                            token: "comment",
                            regex: "\\/\\+",
                            next: "plus-comment"
                        }, {
                            onMatch: function(e, t, n) {
                                return n.unshift(this.next, e.substr(2)), "string"
                            },
                            regex: 'q"(?:[\\[\\(\\{\\<]+)',
                            next: "operator-heredoc-string"
                        }, {
                            onMatch: function(e, t, n) {
                                return n.unshift(this.next, e.substr(2)), "string"
                            },
                            regex: 'q"(?:[a-zA-Z_]+)$',
                            next: "identifier-heredoc-string"
                        }, {
                            token: "string",
                            regex: '[xr]?"',
                            next: "quote-string"
                        }, {
                            token: "string",
                            regex: "[xr]?`",
                            next: "backtick-string"
                        }, {
                            token: "string",
                            regex: "[xr]?['](?:(?:\\\\.)|(?:[^'\\\\]))*?['][cdw]?"
                        }, {
                            token: ["keyword", "text", "paren.lparen"],
                            regex: /(asm)(\s*)({)/,
                            next: "d-asm"
                        }, {
                            token: ["keyword", "text", "paren.lparen", "constant.language"],
                            regex: "(__traits)(\\s*)(\\()(" + a + ")"
                        }, {
                            token: ["keyword", "text", "variable.module"],
                            regex: "(import|module)(\\s+)((?:" + a + "\\.?)*)"
                        }, {
                            token: ["keyword.storage", "text", "entity.name.type"],
                            regex: "(" + e + ")(\\s*)(" + a + ")"
                        }, {
                            token: ["keyword", "text", "variable.storage", "text"],
                            regex: "(alias|typedef)(\\s*)(" + a + ")(\\s*)"
                        }, {
                            token: "constant.numeric",
                            regex: "0[xX][0-9a-fA-F_]+(l|ul|u|f|F|L|U|UL)?\\b"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d[\\d_]*(?:(?:\\.[\\d_]*)?(?:[eE][+-]?[\\d_]+)?)?(l|ul|u|f|F|L|U|UL)?\\b"
                        }, {
                            token: "entity.other.attribute-name",
                            regex: "@" + a
                        }, {
                            token: r,
                            regex: "[a-zA-Z_][a-zA-Z0-9_]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: n
                        }, {
                            token: "punctuation.operator",
                            regex: "\\?|\\:|\\,|\\;|\\.|\\:"
                        }, {
                            token: "paren.lparen",
                            regex: "[[({]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\])}]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        "star-comment": [{
                            token: "comment",
                            regex: "\\*\\/",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        "plus-comment": [{
                            token: "comment",
                            regex: "\\+\\/",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        "quote-string": [t, {
                            token: "string",
                            regex: '"[cdw]?',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }],
                        "backtick-string": [t, {
                            token: "string",
                            regex: "`[cdw]?",
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }],
                        "operator-heredoc-string": [{
                            onMatch: function(e, t, n) {
                                e = e.substring(e.length - 2, e.length - 1);
                                var r = {
                                    ">": "<",
                                    "]": "[",
                                    ")": "(",
                                    "}": "{"
                                };
                                return -1 != Object.keys(r).indexOf(e) && (e = r[e]), e != n[1] || (n.shift(), n.shift()), "string"
                            },
                            regex: '(?:[\\]\\)}>]+)"',
                            next: "start"
                        }, {
                            token: "string",
                            regex: "[^\\]\\)}>]+"
                        }],
                        "identifier-heredoc-string": [{
                            onMatch: function(e, t, n) {
                                return (e = e.substring(0, e.length - 1)) != n[1] || (n.shift(), n.shift()), "string"
                            },
                            regex: '^(?:[A-Za-z_][a-zA-Z0-9]+)"',
                            next: "start"
                        }, {
                            token: "string",
                            regex: "[^\\]\\)}>]+"
                        }],
                        "d-asm": [{
                            token: "paren.rparen",
                            regex: "\\}",
                            next: "start"
                        }, {
                            token: "keyword.instruction",
                            regex: "[a-zA-Z]+",
                            next: "d-asm-instruction"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        "d-asm-instruction": [{
                            token: "constant.language",
                            regex: /AL|AH|AX|EAX|BL|BH|BX|EBX|CL|CH|CX|ECX|DL|DH|DX|EDX|BP|EBP|SP|ESP|DI|EDI|SI|ESI/i
                        }, {
                            token: "identifier",
                            regex: "[a-zA-Z]+"
                        }, {
                            token: "string",
                            regex: '".*"'
                        }, {
                            token: "comment",
                            regex: "//.*$"
                        }, {
                            token: "constant.numeric",
                            regex: "[0-9.xA-F]+"
                        }, {
                            token: "punctuation.operator",
                            regex: "\\,"
                        }, {
                            token: "punctuation.operator",
                            regex: ";",
                            next: "d-asm"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }]
                    }, this.embedRules(o, "doc-", [o.getEndRule("start")])
                };
            s.metaData = {
                comment: "D language",
                fileTypes: ["d", "di"],
                firstLineMatch: "^#!.*\\b[glr]?dmd\\b.",
                foldingStartMarker: "(?x)/\\*\\*(?!\\*)|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))",
                foldingStopMarker: "(?<!\\*)\\*\\*/|^\\s*\\}",
                keyEquivalent: "^~D",
                name: "D",
                scopeName: "source.d"
            }, a.inherits(s, i);
            var l = s;
            t.default = l
        },
        "4C9p": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = r.DocCommentHighlightRules,
                s = function() {
                    var e = this.createKeywordMapper({
                            "constant.language.dart": "true|false|null",
                            "variable.language.dart": "this|super",
                            "keyword.control.dart": "try|catch|finally|throw|rethrow|assert|break|case|continue|default|do|else|for|if|in|return|switch|while|new|deferred|async|await",
                            "keyword.declaration.dart": "abstract|class|extends|external|factory|implements|get|native|operator|set|typedef|with|enum",
                            "storage.modifier.dart": "static|final|const",
                            "storage.type.primitive.dart": "void|bool|num|int|double|dynamic|var|String"
                        }, "identifier"),
                        t = [{
                            token: "constant.language.escape",
                            regex: /\\./
                        }, {
                            token: "text",
                            regex: /\$(?:\w+|{[^"'}]+})?/
                        }, {
                            defaultToken: "string"
                        }];
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: /\/\/.*$/
                        }, o.getStartRule("doc-start"), {
                            token: "comment",
                            regex: /\/\*/,
                            next: "comment"
                        }, {
                            token: ["meta.preprocessor.script.dart"],
                            regex: "^(#!.*)$"
                        }, {
                            token: "keyword.other.import.dart",
                            regex: "(?:\\b)(?:library|import|export|part|of|show|hide)(?:\\b)"
                        }, {
                            token: ["keyword.other.import.dart", "text"],
                            regex: "(?:\\b)(prefix)(\\s*:)"
                        }, {
                            regex: "\\bas\\b",
                            token: "keyword.cast.dart"
                        }, {
                            regex: "\\?|:",
                            token: "keyword.control.ternary.dart"
                        }, {
                            regex: "(?:\\b)(is\\!?)(?:\\b)",
                            token: ["keyword.operator.dart"]
                        }, {
                            regex: "(<<|>>>?|~|\\^|\\||&)",
                            token: ["keyword.operator.bitwise.dart"]
                        }, {
                            regex: "((?:&|\\^|\\||<<|>>>?)=)",
                            token: ["keyword.operator.assignment.bitwise.dart"]
                        }, {
                            regex: "(===?|!==?|<=?|>=?)",
                            token: ["keyword.operator.comparison.dart"]
                        }, {
                            regex: "((?:[+*/%-]|\\~)=)",
                            token: ["keyword.operator.assignment.arithmetic.dart"]
                        }, {
                            regex: "=",
                            token: "keyword.operator.assignment.dart"
                        }, {
                            token: "string",
                            regex: "'''",
                            next: "qdoc"
                        }, {
                            token: "string",
                            regex: '"""',
                            next: "qqdoc"
                        }, {
                            token: "string",
                            regex: "'",
                            next: "qstring"
                        }, {
                            token: "string",
                            regex: '"',
                            next: "qqstring"
                        }, {
                            regex: "(\\-\\-|\\+\\+)",
                            token: ["keyword.operator.increment-decrement.dart"]
                        }, {
                            regex: "(\\-|\\+|\\*|\\/|\\~\\/|%)",
                            token: ["keyword.operator.arithmetic.dart"]
                        }, {
                            regex: "(!|&&|\\|\\|)",
                            token: ["keyword.operator.logical.dart"]
                        }, {
                            token: "constant.numeric",
                            regex: "0[xX][0-9a-fA-F]+\\b"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }],
                        comment: [{
                            token: "comment",
                            regex: "\\*\\/",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        qdoc: [{
                            token: "string",
                            regex: "'''",
                            next: "start"
                        }].concat(t),
                        qqdoc: [{
                            token: "string",
                            regex: '"""',
                            next: "start"
                        }].concat(t),
                        qstring: [{
                            token: "string",
                            regex: "'|$",
                            next: "start"
                        }].concat(t),
                        qqstring: [{
                            token: "string",
                            regex: '"|$',
                            next: "start"
                        }].concat(t)
                    }, this.embedRules(o, "doc-", [o.getEndRule("start")])
                };
            a.inherits(s, i);
            var l = s;
            t.default = l
        },
        jYSa: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    this.$rules = {
                        start: [{
                            token: ["meta.module.elixir", "keyword.control.module.elixir", "meta.module.elixir", "entity.name.type.module.elixir"],
                            regex: "^(\\s*)(defmodule)(\\s+)((?:[A-Z]\\w*\\s*\\.\\s*)*[A-Z]\\w*)"
                        }, {
                            token: "comment.documentation.heredoc",
                            regex: '@(?:module|type)?doc (?:~[a-z])?"""',
                            push: [{
                                token: "comment.documentation.heredoc",
                                regex: '\\s*"""',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "comment.documentation.heredoc"
                            }],
                            comment: "@doc with heredocs is treated as documentation"
                        }, {
                            token: "comment.documentation.heredoc",
                            regex: '@(?:module|type)?doc ~[A-Z]"""',
                            push: [{
                                token: "comment.documentation.heredoc",
                                regex: '\\s*"""',
                                next: "pop"
                            }, {
                                defaultToken: "comment.documentation.heredoc"
                            }],
                            comment: "@doc with heredocs is treated as documentation"
                        }, {
                            token: "comment.documentation.heredoc",
                            regex: "@(?:module|type)?doc (?:~[a-z])?'''",
                            push: [{
                                token: "comment.documentation.heredoc",
                                regex: "\\s*'''",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "comment.documentation.heredoc"
                            }],
                            comment: "@doc with heredocs is treated as documentation"
                        }, {
                            token: "comment.documentation.heredoc",
                            regex: "@(?:module|type)?doc ~[A-Z]'''",
                            push: [{
                                token: "comment.documentation.heredoc",
                                regex: "\\s*'''",
                                next: "pop"
                            }, {
                                defaultToken: "comment.documentation.heredoc"
                            }],
                            comment: "@doc with heredocs is treated as documentation"
                        }, {
                            token: "comment.documentation.false",
                            regex: "@(?:module|type)?doc false",
                            comment: "@doc false is treated as documentation"
                        }, {
                            token: "comment.documentation.string",
                            regex: '@(?:module|type)?doc "',
                            push: [{
                                token: "comment.documentation.string",
                                regex: '"',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "comment.documentation.string"
                            }],
                            comment: "@doc with string is treated as documentation"
                        }, {
                            token: "keyword.control.elixir",
                            regex: "\\b(?:do|end|case|bc|lc|for|if|cond|unless|try|receive|fn|defmodule|defp?|defprotocol|defimpl|defrecord|defstruct|defmacrop?|defdelegate|defcallback|defmacrocallback|defexception|defoverridable|exit|after|rescue|catch|else|raise|throw|import|require|alias|use|quote|unquote|super)\\b(?![?!])",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?<!\\.)\\b(do|end|case|bc|lc|for|if|cond|unless|try|receive|fn|defmodule|defp?|defprotocol|defimpl|defrecord|defstruct|defmacrop?|defdelegate|defcallback|defmacrocallback|defexception|defoverridable|exit|after|rescue|catch|else|raise|throw|import|require|alias|use|quote|unquote|super)\\b(?![?!])"
                        }, {
                            token: "keyword.operator.elixir",
                            regex: "\\b(?:and|not|or|when|xor|in|inlist|inbits)\\b",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?<!\\.)\\b(and|not|or|when|xor|in|inlist|inbits)\\b",
                            comment: " as above, just doesn't need a 'end' and does a logic operation"
                        }, {
                            token: "constant.language.elixir",
                            regex: "\\b(?:nil|true|false)\\b(?![?!])"
                        }, {
                            token: "variable.language.elixir",
                            regex: "\\b__(?:CALLER|ENV|MODULE|DIR)__\\b(?![?!])"
                        }, {
                            token: ["punctuation.definition.variable.elixir", "variable.other.readwrite.module.elixir"],
                            regex: "(@)([a-zA-Z_]\\w*)"
                        }, {
                            token: ["punctuation.definition.variable.elixir", "variable.other.anonymous.elixir"],
                            regex: "(&)(\\d*)"
                        }, {
                            token: "variable.other.constant.elixir",
                            regex: "\\b[A-Z]\\w*\\b"
                        }, {
                            token: "constant.numeric.elixir",
                            regex: "\\b(?:0x[\\da-fA-F](?:_?[\\da-fA-F])*|\\d(?:_?\\d)*(?:\\.(?![^[:space:][:digit:]])(?:_?\\d)*)?(?:[eE][-+]?\\d(?:_?\\d)*)?|0b[01]+|0o[0-7]+)\\b",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "\\b(0x\\h(?>_?\\h)*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0b[01]+|0o[0-7]+)\\b"
                        }, {
                            token: "punctuation.definition.constant.elixir",
                            regex: ":'",
                            push: [{
                                token: "punctuation.definition.constant.elixir",
                                regex: "'",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "constant.other.symbol.single-quoted.elixir"
                            }]
                        }, {
                            token: "punctuation.definition.constant.elixir",
                            regex: ':"',
                            push: [{
                                token: "punctuation.definition.constant.elixir",
                                regex: '"',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "constant.other.symbol.double-quoted.elixir"
                            }]
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "(?:''')",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?>''')",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "^\\s*'''",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "support.function.variable.quoted.single.heredoc.elixir"
                            }],
                            comment: "Single-quoted heredocs"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "'",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "'",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "support.function.variable.quoted.single.elixir"
                            }],
                            comment: "single quoted string (allows for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: '(?:""")',
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: '(?>""")',
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: '^\\s*"""',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.quoted.double.heredoc.elixir"
                            }],
                            comment: "Double-quoted heredocs"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: '"',
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: '"',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.quoted.double.elixir"
                            }],
                            comment: "double quoted string (allows for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: '~[a-z](?:""")',
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: '~[a-z](?>""")',
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: '^\\s*"""',
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.quoted.double.heredoc.elixir"
                            }],
                            comment: "Double-quoted heredocs sigils"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[a-z]\\{",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\}[a-z]*",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.interpolated.elixir"
                            }],
                            comment: "sigil (allow for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[a-z]\\[",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\][a-z]*",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.interpolated.elixir"
                            }],
                            comment: "sigil (allow for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[a-z]\\<",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\>[a-z]*",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.interpolated.elixir"
                            }],
                            comment: "sigil (allow for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[a-z]\\(",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\)[a-z]*",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.interpolated.elixir"
                            }],
                            comment: "sigil (allow for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[a-z][^\\w]",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "[^\\w][a-z]*",
                                next: "pop"
                            }, {
                                include: "#interpolated_elixir"
                            }, {
                                include: "#escaped_char"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.interpolated.elixir"
                            }],
                            comment: "sigil (allow for interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: '~[A-Z](?:""")',
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: '~[A-Z](?>""")',
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: '^\\s*"""',
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "Double-quoted heredocs sigils"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[A-Z]\\{",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\}[a-z]*",
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "sigil (without interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[A-Z]\\[",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\][a-z]*",
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "sigil (without interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[A-Z]\\<",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\>[a-z]*",
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "sigil (without interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[A-Z]\\(",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "\\)[a-z]*",
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "sigil (without interpolation)"
                        }, {
                            token: "punctuation.definition.string.begin.elixir",
                            regex: "~[A-Z][^\\w]",
                            push: [{
                                token: "punctuation.definition.string.end.elixir",
                                regex: "[^\\w][a-z]*",
                                next: "pop"
                            }, {
                                defaultToken: "string.quoted.other.literal.upper.elixir"
                            }],
                            comment: "sigil (without interpolation)"
                        }, {
                            token: ["punctuation.definition.constant.elixir", "constant.other.symbol.elixir"],
                            regex: "(:)([a-zA-Z_][\\w@]*(?:[?!]|=(?![>=]))?|\\<\\>|===?|!==?|<<>>|<<<|>>>|~~~|::|<\\-|\\|>|=>|~|~=|=|/|\\\\\\\\|\\*\\*?|\\.\\.?\\.?|>=?|<=?|&&?&?|\\+\\+?|\\-\\-?|\\|\\|?\\|?|\\!|@|\\%?\\{\\}|%|\\[\\]|\\^(?:\\^\\^)?)",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?<!:)(:)(?>[a-zA-Z_][\\w@]*(?>[?!]|=(?![>=]))?|\\<\\>|===?|!==?|<<>>|<<<|>>>|~~~|::|<\\-|\\|>|=>|~|~=|=|/|\\\\\\\\|\\*\\*?|\\.\\.?\\.?|>=?|<=?|&&?&?|\\+\\+?|\\-\\-?|\\|\\|?\\|?|\\!|@|\\%?\\{\\}|%|\\[\\]|\\^(\\^\\^)?)",
                            comment: "symbols"
                        }, {
                            token: "punctuation.definition.constant.elixir",
                            regex: "(?:[a-zA-Z_][\\w@]*(?:[?!])?):(?!:)",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?>[a-zA-Z_][\\w@]*(?>[?!])?)(:)(?!:)",
                            comment: "symbols"
                        }, {
                            token: ["punctuation.definition.comment.elixir", "comment.line.number-sign.elixir"],
                            regex: "(#)(.*)"
                        }, {
                            token: "constant.numeric.elixir",
                            regex: "\\?(?:\\\\(?:x[\\da-fA-F]{1,2}(?![\\da-fA-F])\\b|[^xMC])|[^\\s\\\\])",
                            TODO: "FIXME: regexp doesn't have js equivalent",
                            originalRegex: "(?<!\\w)\\?(\\\\(x\\h{1,2}(?!\\h)\\b|[^xMC])|[^\\s\\\\])",
                            comment: '\n\t\t\tmatches questionmark-letters.\n\n\t\t\texamples (1st alternation = hex):\n\t\t\t?\\x1     ?\\x61\n\n\t\t\texamples (2rd alternation = escaped):\n\t\t\t?\\n      ?\\b\n\n\t\t\texamples (3rd alternation = normal):\n\t\t\t?a       ?A       ?0 \n\t\t\t?*       ?"       ?( \n\t\t\t?.       ?#\n\t\t\t\n\t\t\tthe negative lookbehind prevents against matching\n\t\t\tp(42.tainted?)\n\t\t\t'
                        }, {
                            token: "keyword.operator.assignment.augmented.elixir",
                            regex: "\\+=|\\-=|\\|\\|=|~=|&&="
                        }, {
                            token: "keyword.operator.comparison.elixir",
                            regex: "===?|!==?|<=?|>=?"
                        }, {
                            token: "keyword.operator.bitwise.elixir",
                            regex: "\\|{3}|&{3}|\\^{3}|<{3}|>{3}|~{3}"
                        }, {
                            token: "keyword.operator.logical.elixir",
                            regex: "!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\bxor\\b",
                            originalRegex: "(?<=[ \\t])!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\bxor\\b"
                        }, {
                            token: "keyword.operator.arithmetic.elixir",
                            regex: "\\*|\\+|\\-|/"
                        }, {
                            token: "keyword.operator.other.elixir",
                            regex: "\\||\\+\\+|\\-\\-|\\*\\*|\\\\\\\\|\\<\\-|\\<\\>|\\<\\<|\\>\\>|\\:\\:|\\.\\.|\\|>|~|=>"
                        }, {
                            token: "keyword.operator.assignment.elixir",
                            regex: "="
                        }, {
                            token: "punctuation.separator.other.elixir",
                            regex: ":"
                        }, {
                            token: "punctuation.separator.statement.elixir",
                            regex: "\\;"
                        }, {
                            token: "punctuation.separator.object.elixir",
                            regex: ","
                        }, {
                            token: "punctuation.separator.method.elixir",
                            regex: "\\."
                        }, {
                            token: "punctuation.section.scope.elixir",
                            regex: "\\{|\\}"
                        }, {
                            token: "punctuation.section.array.elixir",
                            regex: "\\[|\\]"
                        }, {
                            token: "punctuation.section.function.elixir",
                            regex: "\\(|\\)"
                        }],
                        "#escaped_char": [{
                            token: "constant.character.escape.elixir",
                            regex: "\\\\(?:x[\\da-fA-F]{1,2}|.)"
                        }],
                        "#interpolated_elixir": [{
                            token: ["source.elixir.embedded.source", "source.elixir.embedded.source.empty"],
                            regex: "(#\\{)(\\})"
                        }, {
                            todo: {
                                token: "punctuation.section.embedded.elixir",
                                regex: "#\\{",
                                push: [{
                                    token: "punctuation.section.embedded.elixir",
                                    regex: "\\}",
                                    next: "pop"
                                }, {
                                    include: "#nest_curly_and_self"
                                }, {
                                    include: "$self"
                                }, {
                                    defaultToken: "source.elixir.embedded.source"
                                }]
                            }
                        }],
                        "#nest_curly_and_self": [{
                            token: "punctuation.section.scope.elixir",
                            regex: "\\{",
                            push: [{
                                token: "punctuation.section.scope.elixir",
                                regex: "\\}",
                                next: "pop"
                            }, {
                                include: "#nest_curly_and_self"
                            }]
                        }, {
                            include: "$self"
                        }],
                        "#regex_sub": [{
                            include: "#interpolated_elixir"
                        }, {
                            include: "#escaped_char"
                        }, {
                            token: ["punctuation.definition.arbitrary-repitition.elixir", "string.regexp.arbitrary-repitition.elixir", "string.regexp.arbitrary-repitition.elixir", "punctuation.definition.arbitrary-repitition.elixir"],
                            regex: "(\\{)(\\d+)((?:,\\d+)?)(\\})"
                        }, {
                            token: "punctuation.definition.character-class.elixir",
                            regex: "\\[(?:\\^?\\])?",
                            push: [{
                                token: "punctuation.definition.character-class.elixir",
                                regex: "\\]",
                                next: "pop"
                            }, {
                                include: "#escaped_char"
                            }, {
                                defaultToken: "string.regexp.character-class.elixir"
                            }]
                        }, {
                            token: "punctuation.definition.group.elixir",
                            regex: "\\(",
                            push: [{
                                token: "punctuation.definition.group.elixir",
                                regex: "\\)",
                                next: "pop"
                            }, {
                                include: "#regex_sub"
                            }, {
                                defaultToken: "string.regexp.group.elixir"
                            }]
                        }, {
                            token: ["punctuation.definition.comment.elixir", "comment.line.number-sign.elixir"],
                            regex: "(?:^|\\s)(#)(\\s[[a-zA-Z0-9,. \\t?!-][^\\x00-\\x7F]]*$)",
                            originalRegex: "(?<=^|\\s)(#)\\s[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$",
                            comment: "We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags."
                        }]
                    }, this.normalizeRules()
                };
            o.metaData = {
                comment: "Textmate bundle for Elixir Programming Language.",
                fileTypes: ["ex", "exs"],
                firstLineMatch: "^#!/.*\\belixir",
                foldingStartMarker: "(after|else|catch|rescue|\\-\\>|\\{|\\[|do)\\s*$",
                foldingStopMarker: "^\\s*((\\}|\\]|after|else|catch|rescue)\\s*$|end\\b)",
                keyEquivalent: "^~E",
                name: "Elixir",
                scopeName: "source.elixir"
            }, a.inherits(o, i);
            var s = o;
            t.default = s
        },
        cDZF: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    this.$rules = {
                        start: [{
                            include: "#module-directive"
                        }, {
                            include: "#import-export-directive"
                        }, {
                            include: "#behaviour-directive"
                        }, {
                            include: "#record-directive"
                        }, {
                            include: "#define-directive"
                        }, {
                            include: "#macro-directive"
                        }, {
                            include: "#directive"
                        }, {
                            include: "#function"
                        }, {
                            include: "#everything-else"
                        }],
                        "#atom": [{
                            token: "punctuation.definition.symbol.begin.erlang",
                            regex: "'",
                            push: [{
                                token: "punctuation.definition.symbol.end.erlang",
                                regex: "'",
                                next: "pop"
                            }, {
                                token: ["punctuation.definition.escape.erlang", "constant.other.symbol.escape.erlang", "punctuation.definition.escape.erlang", "constant.other.symbol.escape.erlang", "constant.other.symbol.escape.erlang"],
                                regex: "(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"
                            }, {
                                token: "invalid.illegal.atom.erlang",
                                regex: "\\\\\\^?.?"
                            }, {
                                defaultToken: "constant.other.symbol.quoted.single.erlang"
                            }]
                        }, {
                            token: "constant.other.symbol.unquoted.erlang",
                            regex: "[a-z][a-zA-Z\\d@_]*"
                        }],
                        "#behaviour-directive": [{
                            token: ["meta.directive.behaviour.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.behaviour.erlang", "keyword.control.directive.behaviour.erlang", "meta.directive.behaviour.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.behaviour.erlang", "entity.name.type.class.behaviour.definition.erlang", "meta.directive.behaviour.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.behaviour.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(behaviour)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\))(\\s*)(\\.)"
                        }],
                        "#binary": [{
                            token: "punctuation.definition.binary.begin.erlang",
                            regex: "<<",
                            push: [{
                                token: "punctuation.definition.binary.end.erlang",
                                regex: ">>",
                                next: "pop"
                            }, {
                                token: ["punctuation.separator.binary.erlang", "punctuation.separator.value-size.erlang"],
                                regex: "(,)|(:)"
                            }, {
                                include: "#internal-type-specifiers"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.structure.binary.erlang"
                            }]
                        }],
                        "#character": [{
                            token: ["punctuation.definition.character.erlang", "punctuation.definition.escape.erlang", "constant.character.escape.erlang", "punctuation.definition.escape.erlang", "constant.character.escape.erlang", "constant.character.escape.erlang"],
                            regex: "(\\$)(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"
                        }, {
                            token: "invalid.illegal.character.erlang",
                            regex: "\\$\\\\\\^?.?"
                        }, {
                            token: ["punctuation.definition.character.erlang", "constant.character.erlang"],
                            regex: "(\\$)(\\S)"
                        }, {
                            token: "invalid.illegal.character.erlang",
                            regex: "\\$.?"
                        }],
                        "#comment": [{
                            token: "punctuation.definition.comment.erlang",
                            regex: "%.*$",
                            push_: [{
                                token: "comment.line.percentage.erlang",
                                regex: "$",
                                next: "pop"
                            }, {
                                defaultToken: "comment.line.percentage.erlang"
                            }]
                        }],
                        "#define-directive": [{
                            token: ["meta.directive.define.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.define.erlang", "keyword.control.directive.define.erlang", "meta.directive.define.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.define.erlang", "entity.name.function.macro.definition.erlang", "meta.directive.define.erlang", "punctuation.separator.parameters.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(define)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(,)",
                            push: [{
                                token: ["punctuation.definition.parameters.end.erlang", "meta.directive.define.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\))(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.directive.define.erlang"
                            }]
                        }, {
                            token: "meta.directive.define.erlang",
                            regex: "(?=^\\s*-\\s*define\\s*\\(\\s*[a-zA-Z\\d@_]+\\s*\\()",
                            push: [{
                                token: ["punctuation.definition.parameters.end.erlang", "meta.directive.define.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\))(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                token: ["text", "punctuation.section.directive.begin.erlang", "text", "keyword.control.directive.define.erlang", "text", "punctuation.definition.parameters.begin.erlang", "text", "entity.name.function.macro.definition.erlang", "text", "punctuation.definition.parameters.begin.erlang"],
                                regex: "^(\\s*)(-)(\\s*)(define)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\()",
                                push: [{
                                    token: ["punctuation.definition.parameters.end.erlang", "text", "punctuation.separator.parameters.erlang"],
                                    regex: "(\\))(\\s*)(,)",
                                    next: "pop"
                                }, {
                                    token: "punctuation.separator.parameters.erlang",
                                    regex: ","
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                token: "punctuation.separator.define.erlang",
                                regex: "\\|\\||\\||:|;|,|\\.|->"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.directive.define.erlang"
                            }]
                        }],
                        "#directive": [{
                            token: ["meta.directive.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.erlang", "keyword.control.directive.erlang", "meta.directive.erlang", "punctuation.definition.parameters.begin.erlang"],
                            regex: "^(\\s*)(-)(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\(?)",
                            push: [{
                                token: ["punctuation.definition.parameters.end.erlang", "meta.directive.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\)?)(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.directive.erlang"
                            }]
                        }, {
                            token: ["meta.directive.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.erlang", "keyword.control.directive.erlang", "meta.directive.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\.)"
                        }],
                        "#everything-else": [{
                            include: "#comment"
                        }, {
                            include: "#record-usage"
                        }, {
                            include: "#macro-usage"
                        }, {
                            include: "#expression"
                        }, {
                            include: "#keyword"
                        }, {
                            include: "#textual-operator"
                        }, {
                            include: "#function-call"
                        }, {
                            include: "#tuple"
                        }, {
                            include: "#list"
                        }, {
                            include: "#binary"
                        }, {
                            include: "#parenthesized-expression"
                        }, {
                            include: "#character"
                        }, {
                            include: "#number"
                        }, {
                            include: "#atom"
                        }, {
                            include: "#string"
                        }, {
                            include: "#symbolic-operator"
                        }, {
                            include: "#variable"
                        }],
                        "#expression": [{
                            token: "keyword.control.if.erlang",
                            regex: "\\bif\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#internal-expression-punctuation"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.if.erlang"
                            }]
                        }, {
                            token: "keyword.control.case.erlang",
                            regex: "\\bcase\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#internal-expression-punctuation"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.case.erlang"
                            }]
                        }, {
                            token: "keyword.control.receive.erlang",
                            regex: "\\breceive\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#internal-expression-punctuation"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.receive.erlang"
                            }]
                        }, {
                            token: ["keyword.control.fun.erlang", "text", "entity.name.type.class.module.erlang", "text", "punctuation.separator.module-function.erlang", "text", "entity.name.function.erlang", "text", "punctuation.separator.function-arity.erlang"],
                            regex: "\\b(fun)(\\s*)(?:([a-z][a-zA-Z\\d@_]*)(\\s*)(:)(\\s*))?([a-z][a-zA-Z\\d@_]*)(\\s*)(/)"
                        }, {
                            token: "keyword.control.fun.erlang",
                            regex: "\\bfun\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                token: "text",
                                regex: "(?=\\()",
                                push: [{
                                    token: "punctuation.separator.clauses.erlang",
                                    regex: ";|(?=\\bend\\b)",
                                    next: "pop"
                                }, {
                                    include: "#internal-function-parts"
                                }]
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.fun.erlang"
                            }]
                        }, {
                            token: "keyword.control.try.erlang",
                            regex: "\\btry\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#internal-expression-punctuation"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.try.erlang"
                            }]
                        }, {
                            token: "keyword.control.begin.erlang",
                            regex: "\\bbegin\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#internal-expression-punctuation"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.begin.erlang"
                            }]
                        }, {
                            token: "keyword.control.query.erlang",
                            regex: "\\bquery\\b",
                            push: [{
                                token: "keyword.control.end.erlang",
                                regex: "\\bend\\b",
                                next: "pop"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.query.erlang"
                            }]
                        }],
                        "#function": [{
                            token: ["meta.function.erlang", "entity.name.function.definition.erlang", "meta.function.erlang"],
                            regex: "^(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(?=\\()",
                            push: [{
                                token: "punctuation.terminator.function.erlang",
                                regex: "\\.",
                                next: "pop"
                            }, {
                                token: ["text", "entity.name.function.erlang", "text"],
                                regex: "^(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(?=\\()"
                            }, {
                                token: "text",
                                regex: "(?=\\()",
                                push: [{
                                    token: "punctuation.separator.clauses.erlang",
                                    regex: ";|(?=\\.)",
                                    next: "pop"
                                }, {
                                    include: "#parenthesized-expression"
                                }, {
                                    include: "#internal-function-parts"
                                }]
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.function.erlang"
                            }]
                        }],
                        "#function-call": [{
                            token: "meta.function-call.erlang",
                            regex: "(?=(?:[a-z][a-zA-Z\\d@_]*|'[^']*')\\s*(?:\\(|:\\s*(?:[a-z][a-zA-Z\\d@_]*|'[^']*')\\s*\\())",
                            push: [{
                                token: "punctuation.definition.parameters.end.erlang",
                                regex: "\\)",
                                next: "pop"
                            }, {
                                token: ["entity.name.type.class.module.erlang", "text", "punctuation.separator.module-function.erlang", "text", "entity.name.function.guard.erlang", "text", "punctuation.definition.parameters.begin.erlang"],
                                regex: "(?:(erlang)(\\s*)(:)(\\s*))?(is_atom|is_binary|is_constant|is_float|is_function|is_integer|is_list|is_number|is_pid|is_port|is_reference|is_tuple|is_record|abs|element|hd|length|node|round|self|size|tl|trunc)(\\s*)(\\()",
                                push: [{
                                    token: "text",
                                    regex: "(?=\\))",
                                    next: "pop"
                                }, {
                                    token: "punctuation.separator.parameters.erlang",
                                    regex: ","
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                token: ["entity.name.type.class.module.erlang", "text", "punctuation.separator.module-function.erlang", "text", "entity.name.function.erlang", "text", "punctuation.definition.parameters.begin.erlang"],
                                regex: "(?:([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(:)(\\s*))?([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(\\()",
                                push: [{
                                    token: "text",
                                    regex: "(?=\\))",
                                    next: "pop"
                                }, {
                                    token: "punctuation.separator.parameters.erlang",
                                    regex: ","
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                defaultToken: "meta.function-call.erlang"
                            }]
                        }],
                        "#import-export-directive": [{
                            token: ["meta.directive.import.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.import.erlang", "keyword.control.directive.import.erlang", "meta.directive.import.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.import.erlang", "entity.name.type.class.module.erlang", "meta.directive.import.erlang", "punctuation.separator.parameters.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(import)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(,)",
                            push: [{
                                token: ["punctuation.definition.parameters.end.erlang", "meta.directive.import.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\))(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                include: "#internal-function-list"
                            }, {
                                defaultToken: "meta.directive.import.erlang"
                            }]
                        }, {
                            token: ["meta.directive.export.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.export.erlang", "keyword.control.directive.export.erlang", "meta.directive.export.erlang", "punctuation.definition.parameters.begin.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(export)(\\s*)(\\()",
                            push: [{
                                token: ["punctuation.definition.parameters.end.erlang", "meta.directive.export.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\))(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                include: "#internal-function-list"
                            }, {
                                defaultToken: "meta.directive.export.erlang"
                            }]
                        }],
                        "#internal-expression-punctuation": [{
                            token: ["punctuation.separator.clause-head-body.erlang", "punctuation.separator.clauses.erlang", "punctuation.separator.expressions.erlang"],
                            regex: "(->)|(;)|(,)"
                        }],
                        "#internal-function-list": [{
                            token: "punctuation.definition.list.begin.erlang",
                            regex: "\\[",
                            push: [{
                                token: "punctuation.definition.list.end.erlang",
                                regex: "\\]",
                                next: "pop"
                            }, {
                                token: ["entity.name.function.erlang", "text", "punctuation.separator.function-arity.erlang"],
                                regex: "([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(/)",
                                push: [{
                                    token: "punctuation.separator.list.erlang",
                                    regex: ",|(?=\\])",
                                    next: "pop"
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.structure.list.function.erlang"
                            }]
                        }],
                        "#internal-function-parts": [{
                            token: "text",
                            regex: "(?=\\()",
                            push: [{
                                token: "punctuation.separator.clause-head-body.erlang",
                                regex: "->",
                                next: "pop"
                            }, {
                                token: "punctuation.definition.parameters.begin.erlang",
                                regex: "\\(",
                                push: [{
                                    token: "punctuation.definition.parameters.end.erlang",
                                    regex: "\\)",
                                    next: "pop"
                                }, {
                                    token: "punctuation.separator.parameters.erlang",
                                    regex: ","
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                token: "punctuation.separator.guards.erlang",
                                regex: ",|;"
                            }, {
                                include: "#everything-else"
                            }]
                        }, {
                            token: "punctuation.separator.expressions.erlang",
                            regex: ","
                        }, {
                            include: "#everything-else"
                        }],
                        "#internal-record-body": [{
                            token: "punctuation.definition.class.record.begin.erlang",
                            regex: "\\{",
                            push: [{
                                token: "meta.structure.record.erlang",
                                regex: "(?=\\})",
                                next: "pop"
                            }, {
                                token: ["variable.other.field.erlang", "variable.language.omitted.field.erlang", "text", "keyword.operator.assignment.erlang"],
                                regex: "(?:([a-z][a-zA-Z\\d@_]*|'[^']*')|(_))(\\s*)(=|::)",
                                push: [{
                                    token: "punctuation.separator.class.record.erlang",
                                    regex: ",|(?=\\})",
                                    next: "pop"
                                }, {
                                    include: "#everything-else"
                                }]
                            }, {
                                token: ["variable.other.field.erlang", "text", "punctuation.separator.class.record.erlang"],
                                regex: "([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)((?:,)?)"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.structure.record.erlang"
                            }]
                        }],
                        "#internal-type-specifiers": [{
                            token: "punctuation.separator.value-type.erlang",
                            regex: "/",
                            push: [{
                                token: "text",
                                regex: "(?=,|:|>>)",
                                next: "pop"
                            }, {
                                token: ["storage.type.erlang", "storage.modifier.signedness.erlang", "storage.modifier.endianness.erlang", "storage.modifier.unit.erlang", "punctuation.separator.type-specifiers.erlang"],
                                regex: "(integer|float|binary|bytes|bitstring|bits)|(signed|unsigned)|(big|little|native)|(unit)|(-)"
                            }]
                        }],
                        "#keyword": [{
                            token: "keyword.control.erlang",
                            regex: "\\b(?:after|begin|case|catch|cond|end|fun|if|let|of|query|try|receive|when)\\b"
                        }],
                        "#list": [{
                            token: "punctuation.definition.list.begin.erlang",
                            regex: "\\[",
                            push: [{
                                token: "punctuation.definition.list.end.erlang",
                                regex: "\\]",
                                next: "pop"
                            }, {
                                token: "punctuation.separator.list.erlang",
                                regex: "\\||\\|\\||,"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.structure.list.erlang"
                            }]
                        }],
                        "#macro-directive": [{
                            token: ["meta.directive.ifdef.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.ifdef.erlang", "keyword.control.directive.ifdef.erlang", "meta.directive.ifdef.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.ifdef.erlang", "entity.name.function.macro.erlang", "meta.directive.ifdef.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.ifdef.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(ifdef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"
                        }, {
                            token: ["meta.directive.ifndef.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.ifndef.erlang", "keyword.control.directive.ifndef.erlang", "meta.directive.ifndef.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.ifndef.erlang", "entity.name.function.macro.erlang", "meta.directive.ifndef.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.ifndef.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(ifndef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"
                        }, {
                            token: ["meta.directive.undef.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.undef.erlang", "keyword.control.directive.undef.erlang", "meta.directive.undef.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.undef.erlang", "entity.name.function.macro.erlang", "meta.directive.undef.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.undef.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(undef)(\\s*)(\\()(\\s*)([a-zA-Z\\d@_]+)(\\s*)(\\))(\\s*)(\\.)"
                        }],
                        "#macro-usage": [{
                            token: ["keyword.operator.macro.erlang", "meta.macro-usage.erlang", "entity.name.function.macro.erlang"],
                            regex: "(\\?\\??)(\\s*)([a-zA-Z\\d@_]+)"
                        }],
                        "#module-directive": [{
                            token: ["meta.directive.module.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.module.erlang", "keyword.control.directive.module.erlang", "meta.directive.module.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.module.erlang", "entity.name.type.class.module.definition.erlang", "meta.directive.module.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.module.erlang", "punctuation.section.directive.end.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(module)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*)(\\s*)(\\))(\\s*)(\\.)"
                        }],
                        "#number": [{
                            token: "text",
                            regex: "(?=\\d)",
                            push: [{
                                token: "text",
                                regex: "(?!\\d)",
                                next: "pop"
                            }, {
                                token: ["constant.numeric.float.erlang", "punctuation.separator.integer-float.erlang", "constant.numeric.float.erlang", "punctuation.separator.float-exponent.erlang"],
                                regex: "(\\d+)(\\.)(\\d+)((?:[eE][\\+\\-]?\\d+)?)"
                            }, {
                                token: ["constant.numeric.integer.binary.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.binary.erlang"],
                                regex: "(2)(#)([0-1]+)"
                            }, {
                                token: ["constant.numeric.integer.base-3.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-3.erlang"],
                                regex: "(3)(#)([0-2]+)"
                            }, {
                                token: ["constant.numeric.integer.base-4.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-4.erlang"],
                                regex: "(4)(#)([0-3]+)"
                            }, {
                                token: ["constant.numeric.integer.base-5.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-5.erlang"],
                                regex: "(5)(#)([0-4]+)"
                            }, {
                                token: ["constant.numeric.integer.base-6.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-6.erlang"],
                                regex: "(6)(#)([0-5]+)"
                            }, {
                                token: ["constant.numeric.integer.base-7.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-7.erlang"],
                                regex: "(7)(#)([0-6]+)"
                            }, {
                                token: ["constant.numeric.integer.octal.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.octal.erlang"],
                                regex: "(8)(#)([0-7]+)"
                            }, {
                                token: ["constant.numeric.integer.base-9.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-9.erlang"],
                                regex: "(9)(#)([0-8]+)"
                            }, {
                                token: ["constant.numeric.integer.decimal.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.decimal.erlang"],
                                regex: "(10)(#)(\\d+)"
                            }, {
                                token: ["constant.numeric.integer.base-11.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-11.erlang"],
                                regex: "(11)(#)([\\daA]+)"
                            }, {
                                token: ["constant.numeric.integer.base-12.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-12.erlang"],
                                regex: "(12)(#)([\\da-bA-B]+)"
                            }, {
                                token: ["constant.numeric.integer.base-13.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-13.erlang"],
                                regex: "(13)(#)([\\da-cA-C]+)"
                            }, {
                                token: ["constant.numeric.integer.base-14.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-14.erlang"],
                                regex: "(14)(#)([\\da-dA-D]+)"
                            }, {
                                token: ["constant.numeric.integer.base-15.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-15.erlang"],
                                regex: "(15)(#)([\\da-eA-E]+)"
                            }, {
                                token: ["constant.numeric.integer.hexadecimal.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.hexadecimal.erlang"],
                                regex: "(16)(#)([\\da-fA-F]+)"
                            }, {
                                token: ["constant.numeric.integer.base-17.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-17.erlang"],
                                regex: "(17)(#)([\\da-gA-G]+)"
                            }, {
                                token: ["constant.numeric.integer.base-18.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-18.erlang"],
                                regex: "(18)(#)([\\da-hA-H]+)"
                            }, {
                                token: ["constant.numeric.integer.base-19.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-19.erlang"],
                                regex: "(19)(#)([\\da-iA-I]+)"
                            }, {
                                token: ["constant.numeric.integer.base-20.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-20.erlang"],
                                regex: "(20)(#)([\\da-jA-J]+)"
                            }, {
                                token: ["constant.numeric.integer.base-21.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-21.erlang"],
                                regex: "(21)(#)([\\da-kA-K]+)"
                            }, {
                                token: ["constant.numeric.integer.base-22.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-22.erlang"],
                                regex: "(22)(#)([\\da-lA-L]+)"
                            }, {
                                token: ["constant.numeric.integer.base-23.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-23.erlang"],
                                regex: "(23)(#)([\\da-mA-M]+)"
                            }, {
                                token: ["constant.numeric.integer.base-24.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-24.erlang"],
                                regex: "(24)(#)([\\da-nA-N]+)"
                            }, {
                                token: ["constant.numeric.integer.base-25.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-25.erlang"],
                                regex: "(25)(#)([\\da-oA-O]+)"
                            }, {
                                token: ["constant.numeric.integer.base-26.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-26.erlang"],
                                regex: "(26)(#)([\\da-pA-P]+)"
                            }, {
                                token: ["constant.numeric.integer.base-27.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-27.erlang"],
                                regex: "(27)(#)([\\da-qA-Q]+)"
                            }, {
                                token: ["constant.numeric.integer.base-28.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-28.erlang"],
                                regex: "(28)(#)([\\da-rA-R]+)"
                            }, {
                                token: ["constant.numeric.integer.base-29.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-29.erlang"],
                                regex: "(29)(#)([\\da-sA-S]+)"
                            }, {
                                token: ["constant.numeric.integer.base-30.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-30.erlang"],
                                regex: "(30)(#)([\\da-tA-T]+)"
                            }, {
                                token: ["constant.numeric.integer.base-31.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-31.erlang"],
                                regex: "(31)(#)([\\da-uA-U]+)"
                            }, {
                                token: ["constant.numeric.integer.base-32.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-32.erlang"],
                                regex: "(32)(#)([\\da-vA-V]+)"
                            }, {
                                token: ["constant.numeric.integer.base-33.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-33.erlang"],
                                regex: "(33)(#)([\\da-wA-W]+)"
                            }, {
                                token: ["constant.numeric.integer.base-34.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-34.erlang"],
                                regex: "(34)(#)([\\da-xA-X]+)"
                            }, {
                                token: ["constant.numeric.integer.base-35.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-35.erlang"],
                                regex: "(35)(#)([\\da-yA-Y]+)"
                            }, {
                                token: ["constant.numeric.integer.base-36.erlang", "punctuation.separator.base-integer.erlang", "constant.numeric.integer.base-36.erlang"],
                                regex: "(36)(#)([\\da-zA-Z]+)"
                            }, {
                                token: "invalid.illegal.integer.erlang",
                                regex: "\\d+#[\\da-zA-Z]+"
                            }, {
                                token: "constant.numeric.integer.decimal.erlang",
                                regex: "\\d+"
                            }]
                        }],
                        "#parenthesized-expression": [{
                            token: "punctuation.section.expression.begin.erlang",
                            regex: "\\(",
                            push: [{
                                token: "punctuation.section.expression.end.erlang",
                                regex: "\\)",
                                next: "pop"
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.expression.parenthesized"
                            }]
                        }],
                        "#record-directive": [{
                            token: ["meta.directive.record.erlang", "punctuation.section.directive.begin.erlang", "meta.directive.record.erlang", "keyword.control.directive.import.erlang", "meta.directive.record.erlang", "punctuation.definition.parameters.begin.erlang", "meta.directive.record.erlang", "entity.name.type.class.record.definition.erlang", "meta.directive.record.erlang", "punctuation.separator.parameters.erlang"],
                            regex: "^(\\s*)(-)(\\s*)(record)(\\s*)(\\()(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(,)",
                            push: [{
                                token: ["punctuation.definition.class.record.end.erlang", "meta.directive.record.erlang", "punctuation.definition.parameters.end.erlang", "meta.directive.record.erlang", "punctuation.section.directive.end.erlang"],
                                regex: "(\\})(\\s*)(\\))(\\s*)(\\.)",
                                next: "pop"
                            }, {
                                include: "#internal-record-body"
                            }, {
                                defaultToken: "meta.directive.record.erlang"
                            }]
                        }],
                        "#record-usage": [{
                            token: ["keyword.operator.record.erlang", "meta.record-usage.erlang", "entity.name.type.class.record.erlang", "meta.record-usage.erlang", "punctuation.separator.record-field.erlang", "meta.record-usage.erlang", "variable.other.field.erlang"],
                            regex: "(#)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')(\\s*)(\\.)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')"
                        }, {
                            token: ["keyword.operator.record.erlang", "meta.record-usage.erlang", "entity.name.type.class.record.erlang"],
                            regex: "(#)(\\s*)([a-z][a-zA-Z\\d@_]*|'[^']*')",
                            push: [{
                                token: "punctuation.definition.class.record.end.erlang",
                                regex: "\\}",
                                next: "pop"
                            }, {
                                include: "#internal-record-body"
                            }, {
                                defaultToken: "meta.record-usage.erlang"
                            }]
                        }],
                        "#string": [{
                            token: "punctuation.definition.string.begin.erlang",
                            regex: '"',
                            push: [{
                                token: "punctuation.definition.string.end.erlang",
                                regex: '"',
                                next: "pop"
                            }, {
                                token: ["punctuation.definition.escape.erlang", "constant.character.escape.erlang", "punctuation.definition.escape.erlang", "constant.character.escape.erlang", "constant.character.escape.erlang"],
                                regex: "(\\\\)(?:([bdefnrstv\\\\'\"])|(\\^)([@-_])|([0-7]{1,3}))"
                            }, {
                                token: "invalid.illegal.string.erlang",
                                regex: "\\\\\\^?.?"
                            }, {
                                token: ["punctuation.definition.placeholder.erlang", "punctuation.separator.placeholder-parts.erlang", "constant.other.placeholder.erlang", "punctuation.separator.placeholder-parts.erlang", "punctuation.separator.placeholder-parts.erlang", "constant.other.placeholder.erlang", "punctuation.separator.placeholder-parts.erlang", "punctuation.separator.placeholder-parts.erlang", "punctuation.separator.placeholder-parts.erlang", "constant.other.placeholder.erlang", "constant.other.placeholder.erlang"],
                                regex: "(~)(?:((?:\\-)?)(\\d+)|(\\*))?(?:(\\.)(?:(\\d+)|(\\*)))?(?:(\\.)(?:(\\*)|(.)))?([~cfegswpWPBX#bx\\+ni])"
                            }, {
                                token: ["punctuation.definition.placeholder.erlang", "punctuation.separator.placeholder-parts.erlang", "constant.other.placeholder.erlang", "constant.other.placeholder.erlang"],
                                regex: "(~)((?:\\*)?)((?:\\d+)?)([~du\\-#fsacl])"
                            }, {
                                token: "invalid.illegal.string.erlang",
                                regex: "~.?"
                            }, {
                                defaultToken: "string.quoted.double.erlang"
                            }]
                        }],
                        "#symbolic-operator": [{
                            token: "keyword.operator.symbolic.erlang",
                            regex: "\\+\\+|\\+|--|-|\\*|/=|/|=/=|=:=|==|=<|=|<-|<|>=|>|!|::"
                        }],
                        "#textual-operator": [{
                            token: "keyword.operator.textual.erlang",
                            regex: "\\b(?:andalso|band|and|bxor|xor|bor|orelse|or|bnot|not|bsl|bsr|div|rem)\\b"
                        }],
                        "#tuple": [{
                            token: "punctuation.definition.tuple.begin.erlang",
                            regex: "\\{",
                            push: [{
                                token: "punctuation.definition.tuple.end.erlang",
                                regex: "\\}",
                                next: "pop"
                            }, {
                                token: "punctuation.separator.tuple.erlang",
                                regex: ","
                            }, {
                                include: "#everything-else"
                            }, {
                                defaultToken: "meta.structure.tuple.erlang"
                            }]
                        }],
                        "#variable": [{
                            token: ["variable.other.erlang", "variable.language.omitted.erlang"],
                            regex: "(_[a-zA-Z\\d@_]+|[A-Z][a-zA-Z\\d@_]*)|(_)"
                        }]
                    }, this.normalizeRules()
                };
            o.metaData = {
                comment: "The recognition of function definitions and compiler directives (such as module, record and macro definitions) requires that each of the aforementioned constructs must be the first string inside a line (except for whitespace).  Also, the function/module/record/macro names must be given unquoted.  -- desp",
                fileTypes: ["erl", "hrl"],
                keyEquivalent: "^~E",
                name: "Erlang",
                scopeName: "source.erlang"
            }, a.inherits(o, i);
            var s = o;
            t.default = s
        },
        "+d94": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                            "invalid.deprecated": "debugger",
                            "support.function": "abs|achar|acos|acosh|adjustl|adjustr|aimag|aint|all|allocate|anint|any|asin|asinh|associated|atan|atan2|atanh|bessel_j0|bessel_j1|bessel_jn|bessel_y0|bessel_y1|bessel_yn|bge|bgt|bit_size|ble|blt|btest|ceiling|char|cmplx|conjg|cos|cosh|count|cpu_time|cshift|date_and_time|dble|deallocate|digits|dim|dot_product|dprod|dshiftl|dshiftr|dsqrt|eoshift|epsilon|erf|erfc|erfc_scaled|exp|float|floor|format|fraction|gamma|input|len|lge|lgt|lle|llt|log|log10|maskl|maskr|matmul|max|maxloc|maxval|merge|min|minloc|minval|mod|modulo|nint|not|norm2|null|nullify|pack|parity|popcnt|poppar|precision|present|product|radix|random_number|random_seed|range|repeat|reshape|round|rrspacing|same_type_as|scale|scan|selected_char_kind|selected_int_kind|selected_real_kind|set_exponent|shape|shifta|shiftl|shiftr|sign|sin|sinh|size|sngl|spacing|spread|sqrt|sum|system_clock|tan|tanh|tiny|trailz|transfer|transpose|trim|ubound|unpack|verify|ABS|ACHAR|ACOS|ACOSH|ADJUSTL|ADJUSTR|AIMAG|AINT|ALL|ALLOCATE|ANINT|ANY|ASIN|ASINH|ASSOCIATED|ATAN|ATAN2|ATANH|BESSEL_J0|BESSEL_J1|BESSEL_JN|BESSEL_Y0|BESSEL_Y1|BESSEL_YN|BGE|BGT|BIT_SIZE|BLE|BLT|BTEST|CEILING|CHAR|CMPLX|CONJG|COS|COSH|COUNT|CPU_TIME|CSHIFT|DATE_AND_TIME|DBLE|DEALLOCATE|DIGITS|DIM|DOT_PRODUCT|DPROD|DSHIFTL|DSHIFTR|DSQRT|EOSHIFT|EPSILON|ERF|ERFC|ERFC_SCALED|EXP|FLOAT|FLOOR|FORMAT|FRACTION|GAMMA|INPUT|LEN|LGE|LGT|LLE|LLT|LOG|LOG10|MASKL|MASKR|MATMUL|MAX|MAXLOC|MAXVAL|MERGE|MIN|MINLOC|MINVAL|MOD|MODULO|NINT|NOT|NORM2|NULL|NULLIFY|PACK|PARITY|POPCNT|POPPAR|PRECISION|PRESENT|PRODUCT|RADIX|RANDOM_NUMBER|RANDOM_SEED|RANGE|REPEAT|RESHAPE|ROUND|RRSPACING|SAME_TYPE_AS|SCALE|SCAN|SELECTED_CHAR_KIND|SELECTED_INT_KIND|SELECTED_REAL_KIND|SET_EXPONENT|SHAPE|SHIFTA|SHIFTL|SHIFTR|SIGN|SIN|SINH|SIZE|SNGL|SPACING|SPREAD|SQRT|SUM|SYSTEM_CLOCK|TAN|TANH|TINY|TRAILZ|TRANSFER|TRANSPOSE|TRIM|UBOUND|UNPACK|VERIFY",
                            "constant.language": "true|false|TRUE|FALSE",
                            keyword: "call|case|contains|continue|cycle|do|else|elseif|end|enddo|endif|function|if|implicit|in|include|inout|intent|module|none|only|out|print|program|return|select|status|stop|subroutine|return|then|use|while|write|CALL|CASE|CONTAINS|CONTINUE|CYCLE|DO|ELSE|ELSEIF|END|ENDDO|ENDIF|FUNCTION|IF|IMPLICIT|IN|INCLUDE|INOUT|INTENT|MODULE|NONE|ONLY|OUT|PRINT|PROGRAM|RETURN|SELECT|STATUS|STOP|SUBROUTINE|RETURN|THEN|USE|WHILE|WRITE",
                            "keyword.operator": "and|or|not|eq|ne|gt|ge|lt|le|AND|OR|NOT|EQ|NE|GT|GE|LT|LE",
                            "storage.type": "logical|character|integer|real|type|LOGICAL|CHARACTER|INTEGER|REAL|TYPE",
                            "storage.modifier": "allocatable|dimension|intent|parameter|pointer|target|private|public|ALLOCATABLE|DIMENSION|INTENT|PARAMETER|POINTER|TARGET|PRIVATE|PUBLIC"
                        }, "identifier"),
                        t = "(?:r|u|ur|R|U|UR|Ur|uR)?",
                        n = "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))",
                        r = "(?:\\d+)",
                        a = "(?:(?:" + r + "?(?:\\.\\d+))|(?:" + r + "\\.))",
                        i = "(?:(?:(?:" + a + "|" + r + ")(?:[eE][+-]?\\d+))|" + a + ")",
                        o = "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "!.*$"
                        }, {
                            token: "string",
                            regex: t + '"{3}',
                            next: "qqstring3"
                        }, {
                            token: "string",
                            regex: t + '"(?=.)',
                            next: "qqstring"
                        }, {
                            token: "string",
                            regex: t + "'{3}",
                            next: "qstring3"
                        }, {
                            token: "string",
                            regex: t + "'(?=.)",
                            next: "qstring"
                        }, {
                            token: "constant.numeric",
                            regex: "(?:" + i + "|\\d+)[jJ]\\b"
                        }, {
                            token: "constant.numeric",
                            regex: i
                        }, {
                            token: "constant.numeric",
                            regex: n + "[lL]\\b"
                        }, {
                            token: "constant.numeric",
                            regex: n + "\\b"
                        }, {
                            token: "keyword",
                            regex: "#\\s*(?:include|import|define|undef|INCLUDE|IMPORT|DEFINE|UNDEF)\\b"
                        }, {
                            token: "keyword",
                            regex: "#\\s*(?:endif|ifdef|else|elseif|ifndef|ENDIF|IFDEF|ELSE|ELSEIF|IFNDEF)\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
                        }, {
                            token: "paren.lparen",
                            regex: "[\\[\\(\\{]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\]\\)\\}]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        qqstring3: [{
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            token: "string",
                            regex: '"{3}',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }],
                        qstring3: [{
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            token: "string",
                            regex: '"{3}',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }],
                        qqstring: [{
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            token: "string",
                            regex: "\\\\$",
                            next: "qqstring"
                        }, {
                            token: "string",
                            regex: '"|$',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }],
                        qstring: [{
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            token: "string",
                            regex: "\\\\$",
                            next: "qstring"
                        }, {
                            token: "string",
                            regex: "'|$",
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        "+/AF": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = r.DocCommentHighlightRules,
                s = function() {
                    var e = this.createKeywordMapper({
                        "variable.language": "this",
                        keyword: "assert|with|abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|def|float|native|super|while",
                        "support.function": "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object",
                        "constant.language": "null|Infinity|NaN|undefined"
                    }, "identifier");
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "\\/\\/.*$"
                        }, o.getStartRule("doc-start"), {
                            token: "comment",
                            regex: "\\/\\*",
                            next: "comment"
                        }, {
                            token: "string.regexp",
                            regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
                        }, {
                            token: "string",
                            regex: '"""',
                            next: "qqstring"
                        }, {
                            token: "string",
                            regex: "'''",
                            next: "qstring"
                        }, {
                            token: "string",
                            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                        }, {
                            token: "string",
                            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                        }, {
                            token: "constant.numeric",
                            regex: "0[xX][0-9a-fA-F]+\\b"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: "constant.language.boolean",
                            regex: "(?:true|false)\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
                        }, {
                            token: "lparen",
                            regex: "[[({]"
                        }, {
                            token: "rparen",
                            regex: "[\\])}]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        comment: [{
                            token: "comment",
                            regex: "\\*\\/",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        qqstring: [{
                            token: "constant.language.escape",
                            regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
                        }, {
                            token: "constant.language.escape",
                            regex: /\$[\w\d]+/
                        }, {
                            token: "constant.language.escape",
                            regex: /\$\{[^"\}]+\}?/
                        }, {
                            token: "string",
                            regex: '"{3,5}',
                            next: "start"
                        }, {
                            token: "string",
                            regex: ".+?"
                        }],
                        qstring: [{
                            token: "constant.language.escape",
                            regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
                        }, {
                            token: "string",
                            regex: "'{3,5}",
                            next: "start"
                        }, {
                            token: "string",
                            regex: ".+?"
                        }]
                    }, this.embedRules(o, "doc-", [o.getEndRule("start")])
                };
            a.inherits(s, i);
            var l = s;
            t.default = l
        },
        vCTa: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    this.$rules = {
                        start: [{
                            token: ["punctuation.definition.entity.haskell", "keyword.operator.function.infix.haskell", "punctuation.definition.entity.haskell"],
                            regex: /(`)([a-zA-Z_']*?)(`)/,
                            comment: "In case this regex seems unusual for an infix operator, note that Haskell allows any ordinary function application (elem 4 [1..10]) to be rewritten as an infix expression (4 `elem` [1..10])."
                        }, {
                            token: "constant.language.unit.haskell",
                            regex: /\(\)/
                        }, {
                            token: "constant.language.empty-list.haskell",
                            regex: /\[\]/
                        }, {
                            token: "keyword.other.haskell",
                            regex: /module/,
                            push: [{
                                token: "keyword.other.haskell",
                                regex: /where/,
                                next: "pop"
                            }, {
                                include: "#module_name"
                            }, {
                                include: "#module_exports"
                            }, {
                                token: "invalid",
                                regex: /[a-z]+/
                            }, {
                                defaultToken: "meta.declaration.module.haskell"
                            }]
                        }, {
                            token: "keyword.other.haskell",
                            regex: /\bclass\b/,
                            push: [{
                                token: "keyword.other.haskell",
                                regex: /\bwhere\b/,
                                next: "pop"
                            }, {
                                token: "support.class.prelude.haskell",
                                regex: /\b(?:Monad|Functor|Eq|Ord|Read|Show|Num|(?:Frac|Ra)tional|Enum|Bounded|Real(?:Frac|Float)?|Integral|Floating)\b/
                            }, {
                                token: "entity.other.inherited-class.haskell",
                                regex: /[A-Z][A-Za-z_']*/
                            }, {
                                token: "variable.other.generic-type.haskell",
                                regex: /\b[a-z][a-zA-Z0-9_']*\b/
                            }, {
                                defaultToken: "meta.declaration.class.haskell"
                            }]
                        }, {
                            token: "keyword.other.haskell",
                            regex: /\binstance\b/,
                            push: [{
                                token: "keyword.other.haskell",
                                regex: /\bwhere\b|$/,
                                next: "pop"
                            }, {
                                include: "#type_signature"
                            }, {
                                defaultToken: "meta.declaration.instance.haskell"
                            }]
                        }, {
                            token: "keyword.other.haskell",
                            regex: /import/,
                            push: [{
                                token: "meta.import.haskell",
                                regex: /$|;/,
                                next: "pop"
                            }, {
                                token: "keyword.other.haskell",
                                regex: /qualified|as|hiding/
                            }, {
                                include: "#module_name"
                            }, {
                                include: "#module_exports"
                            }, {
                                defaultToken: "meta.import.haskell"
                            }]
                        }, {
                            token: ["keyword.other.haskell", "meta.deriving.haskell"],
                            regex: /(deriving)(\s*\()/,
                            push: [{
                                token: "meta.deriving.haskell",
                                regex: /\)/,
                                next: "pop"
                            }, {
                                token: "entity.other.inherited-class.haskell",
                                regex: /\b[A-Z][a-zA-Z_']*/
                            }, {
                                defaultToken: "meta.deriving.haskell"
                            }]
                        }, {
                            token: "keyword.other.haskell",
                            regex: /\b(?:deriving|where|data|type|case|of|let|in|newtype|default)\b/
                        }, {
                            token: "keyword.operator.haskell",
                            regex: /\binfix[lr]?\b/
                        }, {
                            token: "keyword.control.haskell",
                            regex: /\b(?:do|if|then|else)\b/
                        }, {
                            token: "constant.numeric.float.haskell",
                            regex: /\b(?:[0-9]+\.[0-9]+(?:[eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\b/,
                            comment: "Floats are always decimal"
                        }, {
                            token: "constant.numeric.haskell",
                            regex: /\b(?:[0-9]+|0(?:[xX][0-9a-fA-F]+|[oO][0-7]+))\b/
                        }, {
                            token: ["meta.preprocessor.c", "punctuation.definition.preprocessor.c", "meta.preprocessor.c"],
                            regex: /^(\s*)(#)(\s*\w+)/,
                            comment: 'In addition to Haskell\'s "native" syntax, GHC permits the C preprocessor to be run on a source file.'
                        }, {
                            include: "#pragma"
                        }, {
                            token: "punctuation.definition.string.begin.haskell",
                            regex: /"/,
                            push: [{
                                token: "punctuation.definition.string.end.haskell",
                                regex: /"/,
                                next: "pop"
                            }, {
                                token: "constant.character.escape.haskell",
                                regex: /\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&])/
                            }, {
                                token: "constant.character.escape.octal.haskell",
                                regex: /\\o[0-7]+|\\x[0-9A-Fa-f]+|\\[0-9]+/
                            }, {
                                token: "constant.character.escape.control.haskell",
                                regex: /\^[A-Z@\[\]\\\^_]/
                            }, {
                                defaultToken: "string.quoted.double.haskell"
                            }]
                        }, {
                            token: ["punctuation.definition.string.begin.haskell", "string.quoted.single.haskell", "constant.character.escape.haskell", "constant.character.escape.octal.haskell", "constant.character.escape.hexadecimal.haskell", "constant.character.escape.control.haskell", "punctuation.definition.string.end.haskell"],
                            regex: /(')(?:([\ -\[\]-~])|(\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&]))|(\\o[0-7]+)|(\\x[0-9A-Fa-f]+)|(\^[A-Z@\[\]\\\^_]))(')/
                        }, {
                            token: ["meta.function.type-declaration.haskell", "entity.name.function.haskell", "meta.function.type-declaration.haskell", "keyword.other.double-colon.haskell"],
                            regex: /^(\s*)([a-z_][a-zA-Z0-9_']*|\([|!%$+\-.,=<\/>]+\))(\s*)(::)/,
                            push: [{
                                token: "meta.function.type-declaration.haskell",
                                regex: /$/,
                                next: "pop"
                            }, {
                                include: "#type_signature"
                            }, {
                                defaultToken: "meta.function.type-declaration.haskell"
                            }]
                        }, {
                            token: "support.constant.haskell",
                            regex: /\b(?:Just|Nothing|Left|Right|True|False|LT|EQ|GT|\(\)|\[\])\b/
                        }, {
                            token: "constant.other.haskell",
                            regex: /\b[A-Z]\w*\b/
                        }, {
                            include: "#comments"
                        }, {
                            token: "support.function.prelude.haskell",
                            regex: /\b(?:abs|acos|acosh|all|and|any|appendFile|applyM|asTypeOf|asin|asinh|atan|atan2|atanh|break|catch|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|div|divMod|drop|dropWhile|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromEnum|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|head|id|init|interact|ioError|isDenormalized|isIEEE|isInfinite|isNaN|isNegativeZero|iterate|last|lcm|length|lex|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|odd|or|otherwise|pi|pred|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|read|readFile|readIO|readList|readLn|readParen|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showList|showParen|showString|shows|showsPrec|significand|signum|sin|sinh|snd|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|toEnum|toInteger|toRational|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/
                        }, {
                            include: "#infix_op"
                        }, {
                            token: "keyword.operator.haskell",
                            regex: /[|!%$?~+:\-.=<\/>\\]+/,
                            comment: "In case this regex seems overly general, note that Haskell permits the definition of new operators which can be nearly any string of punctuation characters, such as $%^&*."
                        }, {
                            token: "punctuation.separator.comma.haskell",
                            regex: /,/
                        }],
                        "#block_comment": [{
                            token: "punctuation.definition.comment.haskell",
                            regex: /\{-(?!#)/,
                            push: [{
                                include: "#block_comment"
                            }, {
                                token: "punctuation.definition.comment.haskell",
                                regex: /-\}/,
                                next: "pop"
                            }, {
                                defaultToken: "comment.block.haskell"
                            }]
                        }],
                        "#comments": [{
                            token: ["punctuation.definition.comment.haskell", "comment.line.double-dash.haskell"],
                            regex: /(--)(.*$)/
                        }, {
                            include: "#block_comment"
                        }],
                        "#infix_op": [{
                            token: "entity.name.function.infix.haskell",
                            regex: /\([|!%$+:\-.=<\/>]+\)|\(,+\)/
                        }],
                        "#module_exports": [{
                            token: "meta.declaration.exports.haskell",
                            regex: /\(/,
                            push: [{
                                token: "meta.declaration.exports.haskell",
                                regex: /\)/,
                                next: "pop"
                            }, {
                                token: "entity.name.function.haskell",
                                regex: /\b[a-z][a-zA-Z_'0-9]*/
                            }, {
                                token: "storage.type.haskell",
                                regex: /\b[A-Z][A-Za-z_'0-9]*/
                            }, {
                                token: "punctuation.separator.comma.haskell",
                                regex: /,/
                            }, {
                                include: "#infix_op"
                            }, {
                                token: "meta.other.unknown.haskell",
                                regex: /\(.*?\)/,
                                comment: "So named because I don't know what to call this."
                            }, {
                                defaultToken: "meta.declaration.exports.haskell"
                            }]
                        }],
                        "#module_name": [{
                            token: "support.other.module.haskell",
                            regex: /[A-Z][A-Za-z._']*/
                        }],
                        "#pragma": [{
                            token: "meta.preprocessor.haskell",
                            regex: /\{-#/,
                            push: [{
                                token: "meta.preprocessor.haskell",
                                regex: /#-\}/,
                                next: "pop"
                            }, {
                                token: "keyword.other.preprocessor.haskell",
                                regex: /\b(?:LANGUAGE|UNPACK|INLINE)\b/
                            }, {
                                defaultToken: "meta.preprocessor.haskell"
                            }]
                        }],
                        "#type_signature": [{
                            token: ["meta.class-constraint.haskell", "entity.other.inherited-class.haskell", "meta.class-constraint.haskell", "variable.other.generic-type.haskell", "meta.class-constraint.haskell", "keyword.other.big-arrow.haskell"],
                            regex: /(\(\s*)([A-Z][A-Za-z]*)(\s+)([a-z][A-Za-z_']*)(\)\s*)(=>)/
                        }, {
                            include: "#pragma"
                        }, {
                            token: "keyword.other.arrow.haskell",
                            regex: /->/
                        }, {
                            token: "keyword.other.big-arrow.haskell",
                            regex: /=>/
                        }, {
                            token: "support.type.prelude.haskell",
                            regex: /\b(?:Int(?:eger)?|Maybe|Either|Bool|Float|Double|Char|String|Ordering|ShowS|ReadS|FilePath|IO(?:Error)?)\b/
                        }, {
                            token: "variable.other.generic-type.haskell",
                            regex: /\b[a-z][a-zA-Z0-9_']*\b/
                        }, {
                            token: "storage.type.haskell",
                            regex: /\b[A-Z][a-zA-Z0-9_']*\b/
                        }, {
                            token: "support.constant.unit.haskell",
                            regex: /\(\)/
                        }, {
                            include: "#comments"
                        }]
                    }, this.normalizeRules()
                };
            o.metaData = {
                fileTypes: ["hs"],
                keyEquivalent: "^~H",
                name: "Haskell",
                scopeName: "source.haskell"
            }, a.inherits(o, i);
            var s = o;
            t.default = s
        },
        "+UX2": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    this.$rules = {
                        start: [{
                            include: "#function_decl"
                        }, {
                            include: "#function_call"
                        }, {
                            include: "#type_decl"
                        }, {
                            include: "#keyword"
                        }, {
                            include: "#operator"
                        }, {
                            include: "#number"
                        }, {
                            include: "#string"
                        }, {
                            include: "#comment"
                        }],
                        "#bracket": [{
                            token: "keyword.bracket.julia",
                            regex: "\\(|\\)|\\[|\\]|\\{|\\}|,"
                        }],
                        "#comment": [{
                            token: ["punctuation.definition.comment.julia", "comment.line.number-sign.julia"],
                            regex: "(#)(?!\\{)(.*$)"
                        }],
                        "#function_call": [{
                            token: ["support.function.julia", "text"],
                            regex: "([a-zA-Z0-9_]+!?)([\\w\\xff-\\u218e\\u2455-\\uffff]*\\()"
                        }],
                        "#function_decl": [{
                            token: ["keyword.other.julia", "meta.function.julia", "entity.name.function.julia", "meta.function.julia", "text"],
                            regex: "(function|macro)(\\s*)([a-zA-Z0-9_\\{]+!?)([\\w\\xff-\\u218e\\u2455-\\uffff]*)([(\\\\{])"
                        }],
                        "#keyword": [{
                            token: "keyword.other.julia",
                            regex: "\\b(?:function|type|immutable|macro|quote|abstract|bitstype|typealias|module|baremodule|new)\\b"
                        }, {
                            token: "keyword.control.julia",
                            regex: "\\b(?:if|else|elseif|while|for|in|begin|let|end|do|try|catch|finally|return|break|continue)\\b"
                        }, {
                            token: "storage.modifier.variable.julia",
                            regex: "\\b(?:global|local|const|export|import|importall|using)\\b"
                        }, {
                            token: "variable.macro.julia",
                            regex: "@[\\w\\xff-\\u218e\\u2455-\\uffff]+\\b"
                        }],
                        "#number": [{
                            token: "constant.numeric.julia",
                            regex: "\\b0(?:x|X)[0-9a-fA-F]*|(?:\\b[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]*)?(?:im)?|\\bInf(?:32)?\\b|\\bNaN(?:32)?\\b|\\btrue\\b|\\bfalse\\b"
                        }],
                        "#operator": [{
                            token: "keyword.operator.update.julia",
                            regex: "=|:=|\\+=|-=|\\*=|/=|//=|\\.//=|\\.\\*=|\\\\=|\\.\\\\=|^=|\\.^=|%=|\\|=|&=|\\$=|<<=|>>="
                        }, {
                            token: "keyword.operator.ternary.julia",
                            regex: "\\?|:"
                        }, {
                            token: "keyword.operator.boolean.julia",
                            regex: "\\|\\||&&|!"
                        }, {
                            token: "keyword.operator.arrow.julia",
                            regex: "->|<-|--\x3e"
                        }, {
                            token: "keyword.operator.relation.julia",
                            regex: ">|<|>=|<=|==|!=|\\.>|\\.<|\\.>=|\\.>=|\\.==|\\.!=|\\.=|\\.!|<:|:>"
                        }, {
                            token: "keyword.operator.range.julia",
                            regex: ":"
                        }, {
                            token: "keyword.operator.shift.julia",
                            regex: "<<|>>"
                        }, {
                            token: "keyword.operator.bitwise.julia",
                            regex: "\\||\\&|~"
                        }, {
                            token: "keyword.operator.arithmetic.julia",
                            regex: "\\+|-|\\*|\\.\\*|/|\\./|//|\\.//|%|\\.%|\\\\|\\.\\\\|\\^|\\.\\^"
                        }, {
                            token: "keyword.operator.isa.julia",
                            regex: "::"
                        }, {
                            token: "keyword.operator.dots.julia",
                            regex: "\\.(?=[a-zA-Z])|\\.\\.+"
                        }, {
                            token: "keyword.operator.interpolation.julia",
                            regex: "\\$#?(?=.)"
                        }, {
                            token: ["variable", "keyword.operator.transposed-variable.julia"],
                            regex: "([\\w\\xff-\\u218e\\u2455-\\uffff]+)((?:'|\\.')*\\.?')"
                        }, {
                            token: "text",
                            regex: "\\[|\\("
                        }, {
                            token: ["text", "keyword.operator.transposed-matrix.julia"],
                            regex: "([\\]\\)])((?:'|\\.')*\\.?')"
                        }],
                        "#string": [{
                            token: "punctuation.definition.string.begin.julia",
                            regex: "'",
                            push: [{
                                token: "punctuation.definition.string.end.julia",
                                regex: "'",
                                next: "pop"
                            }, {
                                include: "#string_escaped_char"
                            }, {
                                defaultToken: "string.quoted.single.julia"
                            }]
                        }, {
                            token: "punctuation.definition.string.begin.julia",
                            regex: '"',
                            push: [{
                                token: "punctuation.definition.string.end.julia",
                                regex: '"',
                                next: "pop"
                            }, {
                                include: "#string_escaped_char"
                            }, {
                                defaultToken: "string.quoted.double.julia"
                            }]
                        }, {
                            token: "punctuation.definition.string.begin.julia",
                            regex: '\\b[\\w\\xff-\\u218e\\u2455-\\uffff]+"',
                            push: [{
                                token: "punctuation.definition.string.end.julia",
                                regex: '"[\\w\\xff-\\u218e\\u2455-\\uffff]*',
                                next: "pop"
                            }, {
                                include: "#string_custom_escaped_char"
                            }, {
                                defaultToken: "string.quoted.custom-double.julia"
                            }]
                        }, {
                            token: "punctuation.definition.string.begin.julia",
                            regex: "`",
                            push: [{
                                token: "punctuation.definition.string.end.julia",
                                regex: "`",
                                next: "pop"
                            }, {
                                include: "#string_escaped_char"
                            }, {
                                defaultToken: "string.quoted.backtick.julia"
                            }]
                        }],
                        "#string_custom_escaped_char": [{
                            token: "constant.character.escape.julia",
                            regex: '\\\\"'
                        }],
                        "#string_escaped_char": [{
                            token: "constant.character.escape.julia",
                            regex: "\\\\(?:\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)"
                        }],
                        "#type_decl": [{
                            token: ["keyword.control.type.julia", "meta.type.julia", "entity.name.type.julia", "entity.other.inherited-class.julia", "punctuation.separator.inheritance.julia", "entity.other.inherited-class.julia"],
                            regex: "(type|immutable)(\\s+)([a-zA-Z0-9_]+)(?:(\\s*)(<:)(\\s*[.a-zA-Z0-9_:]+))?"
                        }, {
                            token: ["other.typed-variable.julia", "support.type.julia"],
                            regex: "([a-zA-Z0-9_]+)(::[a-zA-Z0-9_{}]+)"
                        }]
                    }, this.normalizeRules()
                };
            o.metaData = {
                fileTypes: ["jl"],
                firstLineMatch: "^#!.*\\bjulia\\s*$",
                foldingStartMarker: "^\\s*(?:if|while|for|begin|function|macro|module|baremodule|type|immutable|let)\\b(?!.*\\bend\\b).*$",
                foldingStopMarker: "^\\s*(?:end)\\b.*$",
                name: "Julia",
                scopeName: "source.julia"
            }, a.inherits(o, i);
            var s = o;
            t.default = s
        },
        p0wm: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                            "variable.language": "this",
                            keyword: "and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|or|private|rec|sig|struct|then|to|try|type|val|virtual|when|while|with",
                            "constant.language": "true|false",
                            "support.function": "abs|abs_big_int|abs_float|abs_num|abstract_tag|accept|access|acos|add|add_available_units|add_big_int|add_buffer|add_channel|add_char|add_initializer|add_int_big_int|add_interfaces|add_num|add_string|add_substitute|add_substring|alarm|allocated_bytes|allow_only|allow_unsafe_modules|always|append|appname_get|appname_set|approx_num_exp|approx_num_fix|arg|argv|arith_status|array|array1_of_genarray|array2_of_genarray|array3_of_genarray|asin|asr|assoc|assq|at_exit|atan|atan2|auto_synchronize|background|basename|beginning_of_input|big_int_of_int|big_int_of_num|big_int_of_string|bind|bind_class|bind_tag|bits|bits_of_float|black|blit|blit_image|blue|bool|bool_of_string|bounded_full_split|bounded_split|bounded_split_delim|bprintf|break|broadcast|bscanf|button_down|c_layout|capitalize|cardinal|cardinal|catch|catch_break|ceil|ceiling_num|channel|char|char_of_int|chdir|check|check_suffix|chmod|choose|chop_extension|chop_suffix|chown|chown|chr|chroot|classify_float|clear|clear_available_units|clear_close_on_exec|clear_graph|clear_nonblock|clear_parser|close|close|closeTk|close_box|close_graph|close_in|close_in_noerr|close_out|close_out_noerr|close_process|close_process|close_process_full|close_process_in|close_process_out|close_subwindow|close_tag|close_tbox|closedir|closedir|closure_tag|code|combine|combine|combine|command|compact|compare|compare_big_int|compare_num|complex32|complex64|concat|conj|connect|contains|contains_from|contents|copy|cos|cosh|count|count|counters|create|create_alarm|create_image|create_matrix|create_matrix|create_matrix|create_object|create_object_and_run_initializers|create_object_opt|create_process|create_process|create_process_env|create_process_env|create_table|current|current_dir_name|current_point|current_x|current_y|curveto|custom_tag|cyan|data_size|decr|decr_num|default_available_units|delay|delete_alarm|descr_of_in_channel|descr_of_out_channel|destroy|diff|dim|dim1|dim2|dim3|dims|dirname|display_mode|div|div_big_int|div_num|double_array_tag|double_tag|draw_arc|draw_char|draw_circle|draw_ellipse|draw_image|draw_poly|draw_poly_line|draw_rect|draw_segments|draw_string|dummy_pos|dummy_table|dump_image|dup|dup2|elements|empty|end_of_input|environment|eprintf|epsilon_float|eq_big_int|eq_num|equal|err_formatter|error_message|escaped|establish_server|executable_name|execv|execve|execvp|execvpe|exists|exists2|exit|exp|failwith|fast_sort|fchmod|fchown|field|file|file_exists|fill|fill_arc|fill_circle|fill_ellipse|fill_poly|fill_rect|filter|final_tag|finalise|find|find_all|first_chars|firstkey|flatten|float|float32|float64|float_of_big_int|float_of_bits|float_of_int|float_of_num|float_of_string|floor|floor_num|flush|flush_all|flush_input|flush_str_formatter|fold|fold_left|fold_left2|fold_right|fold_right2|for_all|for_all2|force|force_newline|force_val|foreground|fork|format_of_string|formatter_of_buffer|formatter_of_out_channel|fortran_layout|forward_tag|fprintf|frexp|from|from_channel|from_file|from_file_bin|from_function|from_string|fscanf|fst|fstat|ftruncate|full_init|full_major|full_split|gcd_big_int|ge_big_int|ge_num|genarray_of_array1|genarray_of_array2|genarray_of_array3|get|get_all_formatter_output_functions|get_approx_printing|get_copy|get_ellipsis_text|get_error_when_null_denominator|get_floating_precision|get_formatter_output_functions|get_formatter_tag_functions|get_image|get_margin|get_mark_tags|get_max_boxes|get_max_indent|get_method|get_method_label|get_normalize_ratio|get_normalize_ratio_when_printing|get_print_tags|get_state|get_variable|getcwd|getegid|getegid|getenv|getenv|getenv|geteuid|geteuid|getgid|getgid|getgrgid|getgrgid|getgrnam|getgrnam|getgroups|gethostbyaddr|gethostbyname|gethostname|getitimer|getlogin|getpeername|getpid|getppid|getprotobyname|getprotobynumber|getpwnam|getpwuid|getservbyname|getservbyport|getsockname|getsockopt|getsockopt_float|getsockopt_int|getsockopt_optint|gettimeofday|getuid|global_replace|global_substitute|gmtime|green|grid|group_beginning|group_end|gt_big_int|gt_num|guard|handle_unix_error|hash|hash_param|hd|header_size|i|id|ignore|in_channel_length|in_channel_of_descr|incr|incr_num|index|index_from|inet_addr_any|inet_addr_of_string|infinity|infix_tag|init|init_class|input|input_binary_int|input_byte|input_char|input_line|input_value|int|int16_signed|int16_unsigned|int32|int64|int8_signed|int8_unsigned|int_of_big_int|int_of_char|int_of_float|int_of_num|int_of_string|integer_num|inter|interactive|inv|invalid_arg|is_block|is_empty|is_implicit|is_int|is_int_big_int|is_integer_num|is_relative|iter|iter2|iteri|join|junk|key_pressed|kill|kind|kprintf|kscanf|land|last_chars|layout|lazy_from_fun|lazy_from_val|lazy_is_val|lazy_tag|ldexp|le_big_int|le_num|length|lexeme|lexeme_char|lexeme_end|lexeme_end_p|lexeme_start|lexeme_start_p|lineto|link|list|listen|lnot|loadfile|loadfile_private|localtime|lock|lockf|log|log10|logand|lognot|logor|logxor|lor|lower_window|lowercase|lseek|lsl|lsr|lstat|lt_big_int|lt_num|lxor|magenta|magic|mainLoop|major|major_slice|make|make_formatter|make_image|make_lexer|make_matrix|make_self_init|map|map2|map_file|mapi|marshal|match_beginning|match_end|matched_group|matched_string|max|max_array_length|max_big_int|max_elt|max_float|max_int|max_num|max_string_length|mem|mem_assoc|mem_assq|memq|merge|min|min_big_int|min_elt|min_float|min_int|min_num|minor|minus_big_int|minus_num|minus_one|mkdir|mkfifo|mktime|mod|mod_big_int|mod_float|mod_num|modf|mouse_pos|moveto|mul|mult_big_int|mult_int_big_int|mult_num|nan|narrow|nat_of_num|nativeint|neg|neg_infinity|new_block|new_channel|new_method|new_variable|next|nextkey|nice|nice|no_scan_tag|norm|norm2|not|npeek|nth|nth_dim|num_digits_big_int|num_dims|num_of_big_int|num_of_int|num_of_nat|num_of_ratio|num_of_string|O|obj|object_tag|ocaml_version|of_array|of_channel|of_float|of_int|of_int32|of_list|of_nativeint|of_string|one|openTk|open_box|open_connection|open_graph|open_hbox|open_hovbox|open_hvbox|open_in|open_in_bin|open_in_gen|open_out|open_out_bin|open_out_gen|open_process|open_process_full|open_process_in|open_process_out|open_subwindow|open_tag|open_tbox|open_temp_file|open_vbox|opendbm|opendir|openfile|or|os_type|out_channel_length|out_channel_of_descr|output|output_binary_int|output_buffer|output_byte|output_char|output_string|output_value|over_max_boxes|pack|params|parent_dir_name|parse|parse_argv|partition|pause|peek|pipe|pixels|place|plot|plots|point_color|polar|poll|pop|pos_in|pos_out|pow|power_big_int_positive_big_int|power_big_int_positive_int|power_int_positive_big_int|power_int_positive_int|power_num|pp_close_box|pp_close_tag|pp_close_tbox|pp_force_newline|pp_get_all_formatter_output_functions|pp_get_ellipsis_text|pp_get_formatter_output_functions|pp_get_formatter_tag_functions|pp_get_margin|pp_get_mark_tags|pp_get_max_boxes|pp_get_max_indent|pp_get_print_tags|pp_open_box|pp_open_hbox|pp_open_hovbox|pp_open_hvbox|pp_open_tag|pp_open_tbox|pp_open_vbox|pp_over_max_boxes|pp_print_as|pp_print_bool|pp_print_break|pp_print_char|pp_print_cut|pp_print_float|pp_print_flush|pp_print_if_newline|pp_print_int|pp_print_newline|pp_print_space|pp_print_string|pp_print_tab|pp_print_tbreak|pp_set_all_formatter_output_functions|pp_set_ellipsis_text|pp_set_formatter_out_channel|pp_set_formatter_output_functions|pp_set_formatter_tag_functions|pp_set_margin|pp_set_mark_tags|pp_set_max_boxes|pp_set_max_indent|pp_set_print_tags|pp_set_tab|pp_set_tags|pred|pred_big_int|pred_num|prerr_char|prerr_endline|prerr_float|prerr_int|prerr_newline|prerr_string|print|print_as|print_bool|print_break|print_char|print_cut|print_endline|print_float|print_flush|print_if_newline|print_int|print_newline|print_space|print_stat|print_string|print_tab|print_tbreak|printf|prohibit|public_method_label|push|putenv|quo_num|quomod_big_int|quote|raise|raise_window|ratio_of_num|rcontains_from|read|read_float|read_int|read_key|read_line|readdir|readdir|readlink|really_input|receive|recv|recvfrom|red|ref|regexp|regexp_case_fold|regexp_string|regexp_string_case_fold|register|register_exception|rem|remember_mode|remove|remove_assoc|remove_assq|rename|replace|replace_first|replace_matched|repr|reset|reshape|reshape_1|reshape_2|reshape_3|rev|rev_append|rev_map|rev_map2|rewinddir|rgb|rhs_end|rhs_end_pos|rhs_start|rhs_start_pos|rindex|rindex_from|rlineto|rmdir|rmoveto|round_num|run_initializers|run_initializers_opt|scanf|search_backward|search_forward|seek_in|seek_out|select|self|self_init|send|sendto|set|set_all_formatter_output_functions|set_approx_printing|set_binary_mode_in|set_binary_mode_out|set_close_on_exec|set_close_on_exec|set_color|set_ellipsis_text|set_error_when_null_denominator|set_field|set_floating_precision|set_font|set_formatter_out_channel|set_formatter_output_functions|set_formatter_tag_functions|set_line_width|set_margin|set_mark_tags|set_max_boxes|set_max_indent|set_method|set_nonblock|set_nonblock|set_normalize_ratio|set_normalize_ratio_when_printing|set_print_tags|set_signal|set_state|set_tab|set_tag|set_tags|set_text_size|set_window_title|setgid|setgid|setitimer|setitimer|setsid|setsid|setsockopt|setsockopt|setsockopt_float|setsockopt_float|setsockopt_int|setsockopt_int|setsockopt_optint|setsockopt_optint|setuid|setuid|shift_left|shift_left|shift_left|shift_right|shift_right|shift_right|shift_right_logical|shift_right_logical|shift_right_logical|show_buckets|shutdown|shutdown|shutdown_connection|shutdown_connection|sigabrt|sigalrm|sigchld|sigcont|sigfpe|sighup|sigill|sigint|sigkill|sign_big_int|sign_num|signal|signal|sigpending|sigpending|sigpipe|sigprocmask|sigprocmask|sigprof|sigquit|sigsegv|sigstop|sigsuspend|sigsuspend|sigterm|sigtstp|sigttin|sigttou|sigusr1|sigusr2|sigvtalrm|sin|singleton|sinh|size|size|size_x|size_y|sleep|sleep|sleep|slice_left|slice_left|slice_left_1|slice_left_2|slice_right|slice_right|slice_right_1|slice_right_2|snd|socket|socket|socket|socketpair|socketpair|sort|sound|split|split_delim|sprintf|sprintf|sqrt|sqrt|sqrt_big_int|square_big_int|square_num|sscanf|stable_sort|stable_sort|stable_sort|stable_sort|stable_sort|stable_sort|stat|stat|stat|stat|stat|stats|stats|std_formatter|stdbuf|stderr|stderr|stderr|stdib|stdin|stdin|stdin|stdout|stdout|stdout|str_formatter|string|string_after|string_before|string_match|string_of_big_int|string_of_bool|string_of_float|string_of_format|string_of_inet_addr|string_of_inet_addr|string_of_int|string_of_num|string_partial_match|string_tag|sub|sub|sub_big_int|sub_left|sub_num|sub_right|subset|subset|substitute_first|substring|succ|succ|succ|succ|succ_big_int|succ_num|symbol_end|symbol_end_pos|symbol_start|symbol_start_pos|symlink|symlink|sync|synchronize|system|system|system|tag|take|tan|tanh|tcdrain|tcdrain|tcflow|tcflow|tcflush|tcflush|tcgetattr|tcgetattr|tcsendbreak|tcsendbreak|tcsetattr|tcsetattr|temp_file|text_size|time|time|time|timed_read|timed_write|times|times|tl|tl|tl|to_buffer|to_channel|to_float|to_hex|to_int|to_int32|to_list|to_list|to_list|to_nativeint|to_string|to_string|to_string|to_string|to_string|top|top|total_size|transfer|transp|truncate|truncate|truncate|truncate|truncate|truncate|try_lock|umask|umask|uncapitalize|uncapitalize|uncapitalize|union|union|unit_big_int|unlink|unlink|unlock|unmarshal|unsafe_blit|unsafe_fill|unsafe_get|unsafe_get|unsafe_set|unsafe_set|update|uppercase|uppercase|uppercase|uppercase|usage|utimes|utimes|wait|wait|wait|wait|wait_next_event|wait_pid|wait_read|wait_signal|wait_timed_read|wait_timed_write|wait_write|waitpid|white|widen|window_id|word_size|wrap|wrap_abort|write|yellow|yield|zero|zero_big_int|Arg|Arith_status|Array|Array1|Array2|Array3|ArrayLabels|Big_int|Bigarray|Buffer|Callback|CamlinternalOO|Char|Complex|Condition|Dbm|Digest|Dynlink|Event|Filename|Format|Gc|Genarray|Genlex|Graphics|GraphicsX11|Hashtbl|Int32|Int64|LargeFile|Lazy|Lexing|List|ListLabels|Make|Map|Marshal|MoreLabels|Mutex|Nativeint|Num|Obj|Oo|Parsing|Pervasives|Printexc|Printf|Queue|Random|Scanf|Scanning|Set|Sort|Stack|State|StdLabels|Str|Stream|String|StringLabels|Sys|Thread|ThreadUnix|Tk|Unix|UnixLabels|Weak"
                        }, "identifier"),
                        t = "(?:\\d+)",
                        n = "(?:(?:" + t + "?(?:\\.\\d+))|(?:" + t + "\\.))",
                        r = "(?:(?:(?:" + n + "|" + t + ")(?:[eE][+-]?\\d+))|" + n + ")";
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "\\(\\*.*?\\*\\)\\s*?$"
                        }, {
                            token: "comment",
                            regex: "\\(\\*.*",
                            next: "comment"
                        }, {
                            token: "string",
                            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                        }, {
                            token: "string",
                            regex: "'.'"
                        }, {
                            token: "string",
                            regex: '"',
                            next: "qstring"
                        }, {
                            token: "constant.numeric",
                            regex: "(?:" + r + "|\\d+)[jJ]\\b"
                        }, {
                            token: "constant.numeric",
                            regex: r
                        }, {
                            token: "constant.numeric",
                            regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+\\.|\\-\\.|\\*\\.|\\/\\.|#|;;|\\+|\\-|\\*|\\*\\*\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|<-|="
                        }, {
                            token: "paren.lparen",
                            regex: "[[({]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\])}]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        comment: [{
                            token: "comment",
                            regex: "\\*\\)",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        qstring: [{
                            token: "string",
                            regex: '"',
                            next: "start"
                        }, {
                            token: "string",
                            regex: ".+"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        rvnw: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                        "storage.type": "cell|struct|char|double|single|logical|u?int(?:8|16|32|64)|sparse",
                        "support.function": "abs|accumarray|acos(?:d|h)?|acot(?:d|h)?|acsc(?:d|h)?|actxcontrol(?:list|select)?|actxGetRunningServer|actxserver|addlistener|addpath|addpref|addtodate|airy|align|alim|all|allchild|alpha|alphamap|amd|ancestor|and|angle|annotation|any|area|arrayfun|asec(?:d|h)?|asin(?:d|h)?|assert|assignin|atan(?:2|d|h)?|audiodevinfo|audioplayer|audiorecorder|aufinfo|auread|autumn|auwrite|avifile|aviinfo|aviread|axes|axis|balance|bar(?:3|3h|h)?|base2dec|beep|BeginInvoke|bench|bessel(?:h|i|j|k|y)|beta|betainc|betaincinv|betaln|bicg|bicgstab|bicgstabl|bin2dec|bitand|bitcmp|bitget|bitmax|bitnot|bitor|bitset|bitshift|bitxor|blanks|blkdiag|bone|box|brighten|brush|bsxfun|builddocsearchdb|builtin|bvp4c|bvp5c|bvpget|bvpinit|bvpset|bvpxtend|calendar|calllib|callSoapService|camdolly|cameratoolbar|camlight|camlookat|camorbit|campan|campos|camproj|camroll|camtarget|camup|camva|camzoom|cart2pol|cart2sph|cast|cat|caxis|cd|cdf2rdf|cdfepoch|cdfinfo|cdflib(?:.(?:close|closeVar|computeEpoch|computeEpoch16|create|createAttr|createVar|delete|deleteAttr|deleteAttrEntry|deleteAttrgEntry|deleteVar|deleteVarRecords|epoch16Breakdown|epochBreakdown|getAttrEntry|getAttrgEntry|getAttrMaxEntry|getAttrMaxgEntry|getAttrName|getAttrNum|getAttrScope|getCacheSize|getChecksum|getCompression|getCompressionCacheSize|getConstantNames|getConstantValue|getCopyright|getFileBackward|getFormat|getLibraryCopyright|getLibraryVersion|getMajority|getName|getNumAttrEntries|getNumAttrgEntries|getNumAttributes|getNumgAttributes|getReadOnlyMode|getStageCacheSize|getValidate|getVarAllocRecords|getVarBlockingFactor|getVarCacheSize|getVarCompression|getVarData|getVarMaxAllocRecNum|getVarMaxWrittenRecNum|getVarName|getVarNum|getVarNumRecsWritten|getVarPadValue|getVarRecordData|getVarReservePercent|getVarsMaxWrittenRecNum|getVarSparseRecords|getVersion|hyperGetVarData|hyperPutVarData|inquire|inquireAttr|inquireAttrEntry|inquireAttrgEntry|inquireVar|open|putAttrEntry|putAttrgEntry|putVarData|putVarRecordData|renameAttr|renameVar|setCacheSize|setChecksum|setCompression|setCompressionCacheSize|setFileBackward|setFormat|setMajority|setReadOnlyMode|setStageCacheSize|setValidate|setVarAllocBlockRecords|setVarBlockingFactor|setVarCacheSize|setVarCompression|setVarInitialRecs|setVarPadValue|SetVarReservePercent|setVarsCacheSize|setVarSparseRecords))?|cdfread|cdfwrite|ceil|cell2mat|cell2struct|celldisp|cellfun|cellplot|cellstr|cgs|checkcode|checkin|checkout|chol|cholinc|cholupdate|circshift|cla|clabel|class|clc|clear|clearvars|clf|clipboard|clock|close|closereq|cmopts|cmpermute|cmunique|colamd|colon|colorbar|colordef|colormap|colormapeditor|colperm|Combine|comet|comet3|commandhistory|commandwindow|compan|compass|complex|computer|cond|condeig|condest|coneplot|conj|containers.Map|contour(?:3|c|f|slice)?|contrast|conv|conv2|convhull|convhulln|convn|cool|copper|copyfile|copyobj|corrcoef|cos(?:d|h)?|cot(?:d|h)?|cov|cplxpair|cputime|createClassFromWsdl|createSoapMessage|cross|csc(?:d|h)?|csvread|csvwrite|ctranspose|cumprod|cumsum|cumtrapz|curl|customverctrl|cylinder|daqread|daspect|datacursormode|datatipinfo|date|datenum|datestr|datetick|datevec|dbclear|dbcont|dbdown|dblquad|dbmex|dbquit|dbstack|dbstatus|dbstep|dbstop|dbtype|dbup|dde23|ddeget|ddesd|ddeset|deal|deblank|dec2base|dec2bin|dec2hex|decic|deconv|del2|delaunay|delaunay3|delaunayn|DelaunayTri|delete|demo|depdir|depfun|det|detrend|deval|diag|dialog|diary|diff|diffuse|dir|disp|display|dither|divergence|dlmread|dlmwrite|dmperm|doc|docsearch|dos|dot|dragrect|drawnow|dsearch|dsearchn|dynamicprops|echo|echodemo|edit|eig|eigs|ellipj|ellipke|ellipsoid|empty|enableNETfromNetworkDrive|enableservice|EndInvoke|enumeration|eomday|eq|erf|erfc|erfcinv|erfcx|erfinv|error|errorbar|errordlg|etime|etree|etreeplot|eval|evalc|evalin|event.(?:EventData|listener|PropertyEvent|proplistener)|exifread|exist|exit|exp|expint|expm|expm1|export2wsdlg|eye|ezcontour|ezcontourf|ezmesh|ezmeshc|ezplot|ezplot3|ezpolar|ezsurf|ezsurfc|factor|factorial|fclose|feather|feature|feof|ferror|feval|fft|fft2|fftn|fftshift|fftw|fgetl|fgets|fieldnames|figure|figurepalette|fileattrib|filebrowser|filemarker|fileparts|fileread|filesep|fill|fill3|filter|filter2|find|findall|findfigs|findobj|findstr|finish|fitsdisp|fitsinfo|fitsread|fitswrite|fix|flag|flipdim|fliplr|flipud|floor|flow|fminbnd|fminsearch|fopen|format|fplot|fprintf|frame2im|fread|freqspace|frewind|fscanf|fseek|ftell|FTP|full|fullfile|func2str|functions|funm|fwrite|fzero|gallery|gamma|gammainc|gammaincinv|gammaln|gca|gcbf|gcbo|gcd|gcf|gco|ge|genpath|genvarname|get|getappdata|getenv|getfield|getframe|getpixelposition|getpref|ginput|gmres|gplot|grabcode|gradient|gray|graymon|grid|griddata(?:3|n)?|griddedInterpolant|gsvd|gt|gtext|guidata|guide|guihandles|gunzip|gzip|h5create|h5disp|h5info|h5read|h5readatt|h5write|h5writeatt|hadamard|handle|hankel|hdf|hdf5|hdf5info|hdf5read|hdf5write|hdfinfo|hdfread|hdftool|help|helpbrowser|helpdesk|helpdlg|helpwin|hess|hex2dec|hex2num|hgexport|hggroup|hgload|hgsave|hgsetget|hgtransform|hidden|hilb|hist|histc|hold|home|horzcat|hostid|hot|hsv|hsv2rgb|hypot|ichol|idivide|ifft|ifft2|ifftn|ifftshift|ilu|im2frame|im2java|imag|image|imagesc|imapprox|imfinfo|imformats|import|importdata|imread|imwrite|ind2rgb|ind2sub|inferiorto|info|inline|inmem|inpolygon|input|inputdlg|inputname|inputParser|inspect|instrcallback|instrfind|instrfindall|int2str|integral(?:2|3)?|interp(?:1|1q|2|3|ft|n)|interpstreamspeed|intersect|intmax|intmin|inv|invhilb|ipermute|isa|isappdata|iscell|iscellstr|ischar|iscolumn|isdir|isempty|isequal|isequaln|isequalwithequalnans|isfield|isfinite|isfloat|isglobal|ishandle|ishghandle|ishold|isinf|isinteger|isjava|iskeyword|isletter|islogical|ismac|ismatrix|ismember|ismethod|isnan|isnumeric|isobject|isocaps|isocolors|isonormals|isosurface|ispc|ispref|isprime|isprop|isreal|isrow|isscalar|issorted|isspace|issparse|isstr|isstrprop|isstruct|isstudent|isunix|isvarname|isvector|javaaddpath|javaArray|javachk|javaclasspath|javacomponent|javaMethod|javaMethodEDT|javaObject|javaObjectEDT|javarmpath|jet|keyboard|kron|lasterr|lasterror|lastwarn|lcm|ldivide|ldl|le|legend|legendre|length|libfunctions|libfunctionsview|libisloaded|libpointer|libstruct|license|light|lightangle|lighting|lin2mu|line|lines|linkaxes|linkdata|linkprop|linsolve|linspace|listdlg|listfonts|load|loadlibrary|loadobj|log|log10|log1p|log2|loglog|logm|logspace|lookfor|lower|ls|lscov|lsqnonneg|lsqr|lt|lu|luinc|magic|makehgtform|mat2cell|mat2str|material|matfile|matlab.io.MatFile|matlab.mixin.(?:Copyable|Heterogeneous(?:.getDefaultScalarElement)?)|matlabrc|matlabroot|max|maxNumCompThreads|mean|median|membrane|memmapfile|memory|menu|mesh|meshc|meshgrid|meshz|meta.(?:class(?:.fromName)?|DynamicProperty|EnumeratedValue|event|MetaData|method|package(?:.(?:fromName|getAllPackages))?|property)|metaclass|methods|methodsview|mex(?:.getCompilerConfigurations)?|MException|mexext|mfilename|min|minres|minus|mislocked|mkdir|mkpp|mldivide|mlint|mlintrpt|mlock|mmfileinfo|mmreader|mod|mode|more|move|movefile|movegui|movie|movie2avi|mpower|mrdivide|msgbox|mtimes|mu2lin|multibandread|multibandwrite|munlock|namelengthmax|nargchk|narginchk|nargoutchk|native2unicode|nccreate|ncdisp|nchoosek|ncinfo|ncread|ncreadatt|ncwrite|ncwriteatt|ncwriteschema|ndgrid|ndims|ne|NET(?:.(?:addAssembly|Assembly|convertArray|createArray|createGeneric|disableAutoRelease|enableAutoRelease|GenericClass|invokeGenericMethod|NetException|setStaticProperty))?|netcdf.(?:abort|close|copyAtt|create|defDim|defGrp|defVar|defVarChunking|defVarDeflate|defVarFill|defVarFletcher32|delAtt|endDef|getAtt|getChunkCache|getConstant|getConstantNames|getVar|inq|inqAtt|inqAttID|inqAttName|inqDim|inqDimID|inqDimIDs|inqFormat|inqGrpName|inqGrpNameFull|inqGrpParent|inqGrps|inqLibVers|inqNcid|inqUnlimDims|inqVar|inqVarChunking|inqVarDeflate|inqVarFill|inqVarFletcher32|inqVarID|inqVarIDs|open|putAtt|putVar|reDef|renameAtt|renameDim|renameVar|setChunkCache|setDefaultFormat|setFill|sync)|newplot|nextpow2|nnz|noanimate|nonzeros|norm|normest|not|notebook|now|nthroot|null|num2cell|num2hex|num2str|numel|nzmax|ode(?:113|15i|15s|23|23s|23t|23tb|45)|odeget|odeset|odextend|onCleanup|ones|open|openfig|opengl|openvar|optimget|optimset|or|ordeig|orderfields|ordqz|ordschur|orient|orth|pack|padecoef|pagesetupdlg|pan|pareto|parseSoapResponse|pascal|patch|path|path2rc|pathsep|pathtool|pause|pbaspect|pcg|pchip|pcode|pcolor|pdepe|pdeval|peaks|perl|perms|permute|pie|pink|pinv|planerot|playshow|plot|plot3|plotbrowser|plotedit|plotmatrix|plottools|plotyy|plus|pol2cart|polar|poly|polyarea|polyder|polyeig|polyfit|polyint|polyval|polyvalm|pow2|power|ppval|prefdir|preferences|primes|print|printdlg|printopt|printpreview|prod|profile|profsave|propedit|propertyeditor|psi|publish|PutCharArray|PutFullMatrix|PutWorkspaceData|pwd|qhull|qmr|qr|qrdelete|qrinsert|qrupdate|quad|quad2d|quadgk|quadl|quadv|questdlg|quit|quiver|quiver3|qz|rand|randi|randn|randperm|RandStream(?:.(?:create|getDefaultStream|getGlobalStream|list|setDefaultStream|setGlobalStream))?|rank|rat|rats|rbbox|rcond|rdivide|readasync|real|reallog|realmax|realmin|realpow|realsqrt|record|rectangle|rectint|recycle|reducepatch|reducevolume|refresh|refreshdata|regexp|regexpi|regexprep|regexptranslate|rehash|rem|Remove|RemoveAll|repmat|reset|reshape|residue|restoredefaultpath|rethrow|rgb2hsv|rgb2ind|rgbplot|ribbon|rmappdata|rmdir|rmfield|rmpath|rmpref|rng|roots|rose|rosser|rot90|rotate|rotate3d|round|rref|rsf2csf|run|save|saveas|saveobj|savepath|scatter|scatter3|schur|sec|secd|sech|selectmoveresize|semilogx|semilogy|sendmail|serial|set|setappdata|setdiff|setenv|setfield|setpixelposition|setpref|setstr|setxor|shading|shg|shiftdim|showplottool|shrinkfaces|sign|sin(?:d|h)?|size|slice|smooth3|snapnow|sort|sortrows|sound|soundsc|spalloc|spaugment|spconvert|spdiags|specular|speye|spfun|sph2cart|sphere|spinmap|spline|spones|spparms|sprand|sprandn|sprandsym|sprank|spring|sprintf|spy|sqrt|sqrtm|squeeze|ss2tf|sscanf|stairs|startup|std|stem|stem3|stopasync|str2double|str2func|str2mat|str2num|strcat|strcmp|strcmpi|stream2|stream3|streamline|streamparticles|streamribbon|streamslice|streamtube|strfind|strjust|strmatch|strncmp|strncmpi|strread|strrep|strtok|strtrim|struct2cell|structfun|strvcat|sub2ind|subplot|subsasgn|subsindex|subspace|subsref|substruct|subvolume|sum|summer|superclasses|superiorto|support|surf|surf2patch|surface|surfc|surfl|surfnorm|svd|svds|swapbytes|symamd|symbfact|symmlq|symrcm|symvar|system|tan(?:d|h)?|tar|tempdir|tempname|tetramesh|texlabel|text|textread|textscan|textwrap|tfqmr|throw|tic|Tiff(?:.(?:getTagNames|getVersion))?|timer|timerfind|timerfindall|times|timeseries|title|toc|todatenum|toeplitz|toolboxdir|trace|transpose|trapz|treelayout|treeplot|tril|trimesh|triplequad|triplot|TriRep|TriScatteredInterp|trisurf|triu|tscollection|tsearch|tsearchn|tstool|type|typecast|uibuttongroup|uicontextmenu|uicontrol|uigetdir|uigetfile|uigetpref|uiimport|uimenu|uiopen|uipanel|uipushtool|uiputfile|uiresume|uisave|uisetcolor|uisetfont|uisetpref|uistack|uitable|uitoggletool|uitoolbar|uiwait|uminus|undocheckout|unicode2native|union|unique|unix|unloadlibrary|unmesh|unmkpp|untar|unwrap|unzip|uplus|upper|urlread|urlwrite|usejava|userpath|validateattributes|validatestring|vander|var|vectorize|ver|verctrl|verLessThan|version|vertcat|VideoReader(?:.isPlatformSupported)?|VideoWriter(?:.getProfiles)?|view|viewmtx|visdiff|volumebounds|voronoi|voronoin|wait|waitbar|waitfor|waitforbuttonpress|warndlg|warning|waterfall|wavfinfo|wavplay|wavread|wavrecord|wavwrite|web|weekday|what|whatsnew|which|whitebg|who|whos|wilkinson|winopen|winqueryreg|winter|wk1finfo|wk1read|wk1write|workspace|xlabel|xlim|xlsfinfo|xlsread|xlswrite|xmlread|xmlwrite|xor|xslt|ylabel|ylim|zeros|zip|zlabel|zlim|zoom|addedvarplot|andrewsplot|anova(?:1|2|n)|ansaribradley|aoctool|barttest|bbdesign|beta(?:cdf|fit|inv|like|pdf|rnd|stat)|bino(?:cdf|fit|inv|pdf|rnd|stat)|biplot|bootci|bootstrp|boxplot|candexch|candgen|canoncorr|capability|capaplot|caseread|casewrite|categorical|ccdesign|cdfplot|chi2(?:cdf|gof|inv|pdf|rnd|stat)|cholcov|Classification(?:BaggedEnsemble|Discriminant(?:.(?:fit|make|template))?|Ensemble|KNN(?:.(?:fit|template))?|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|classify|classregtree|cluster|clusterdata|cmdscale|combnk|Compact(?:Classification(?:Discriminant|Ensemble|Tree)|Regression(?:Ensemble|Tree)|TreeBagger)|confusionmat|controlchart|controlrules|cophenet|copula(?:cdf|fit|param|pdf|rnd|stat)|cordexch|corr|corrcov|coxphfit|createns|crosstab|crossval|cvpartition|datasample|dataset|daugment|dcovary|dendrogram|dfittool|disttool|dummyvar|dwtest|ecdf|ecdfhist|ev(?:cdf|fit|inv|like|pdf|rnd|stat)|ExhaustiveSearcher|exp(?:cdf|fit|inv|like|pdf|rnd|stat)|factoran|fcdf|ff2n|finv|fitdist|fitensemble|fpdf|fracfact|fracfactgen|friedman|frnd|fstat|fsurfht|fullfact|gagerr|gam(?:cdf|fit|inv|like|pdf|rnd|stat)|GeneralizedLinearModel(?:.fit)?|geo(?:cdf|inv|mean|pdf|rnd|stat)|gev(?:cdf|fit|inv|like|pdf|rnd|stat)|gline|glmfit|glmval|glyphplot|gmdistribution(?:.fit)?|gname|gp(?:cdf|fit|inv|like|pdf|rnd|stat)|gplotmatrix|grp2idx|grpstats|gscatter|haltonset|harmmean|hist3|histfit|hmm(?:decode|estimate|generate|train|viterbi)|hougen|hyge(?:cdf|inv|pdf|rnd|stat)|icdf|inconsistent|interactionplot|invpred|iqr|iwishrnd|jackknife|jbtest|johnsrnd|KDTreeSearcher|kmeans|knnsearch|kruskalwallis|ksdensity|kstest|kstest2|kurtosis|lasso|lassoglm|lassoPlot|leverage|lhsdesign|lhsnorm|lillietest|LinearModel(?:.fit)?|linhyptest|linkage|logn(?:cdf|fit|inv|like|pdf|rnd|stat)|lsline|mad|mahal|maineffectsplot|manova1|manovacluster|mdscale|mhsample|mle|mlecov|mnpdf|mnrfit|mnrnd|mnrval|moment|multcompare|multivarichart|mvn(?:cdf|pdf|rnd)|mvregress|mvregresslike|mvt(?:cdf|pdf|rnd)|NaiveBayes(?:.fit)?|nan(?:cov|max|mean|median|min|std|sum|var)|nbin(?:cdf|fit|inv|pdf|rnd|stat)|ncf(?:cdf|inv|pdf|rnd|stat)|nct(?:cdf|inv|pdf|rnd|stat)|ncx2(?:cdf|inv|pdf|rnd|stat)|NeighborSearcher|nlinfit|nlintool|nlmefit|nlmefitsa|nlparci|nlpredci|nnmf|nominal|NonLinearModel(?:.fit)?|norm(?:cdf|fit|inv|like|pdf|rnd|stat)|normplot|normspec|ordinal|outlierMeasure|parallelcoords|paretotails|partialcorr|pcacov|pcares|pdf|pdist|pdist2|pearsrnd|perfcurve|perms|piecewisedistribution|plsregress|poiss(?:cdf|fit|inv|pdf|rnd|tat)|polyconf|polytool|prctile|princomp|ProbDist(?:Kernel|Parametric|UnivKernel|UnivParam)?|probplot|procrustes|qqplot|qrandset|qrandstream|quantile|randg|random|randsample|randtool|range|rangesearch|ranksum|rayl(?:cdf|fit|inv|pdf|rnd|stat)|rcoplot|refcurve|refline|regress|Regression(?:BaggedEnsemble|Ensemble|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|regstats|relieff|ridge|robustdemo|robustfit|rotatefactors|rowexch|rsmdemo|rstool|runstest|sampsizepwr|scatterhist|sequentialfs|signrank|signtest|silhouette|skewness|slicesample|sobolset|squareform|statget|statset|stepwise|stepwisefit|surfht|tabulate|tblread|tblwrite|tcdf|tdfread|tiedrank|tinv|tpdf|TreeBagger|treedisp|treefit|treeprune|treetest|treeval|trimmean|trnd|tstat|ttest|ttest2|unid(?:cdf|inv|pdf|rnd|stat)|unif(?:cdf|inv|it|pdf|rnd|stat)|vartest(?:2|n)?|wbl(?:cdf|fit|inv|like|pdf|rnd|stat)|wblplot|wishrnd|x2fx|xptread|zscore|ztestadapthisteq|analyze75info|analyze75read|applycform|applylut|axes2pix|bestblk|blockproc|bwarea|bwareaopen|bwboundaries|bwconncomp|bwconvhull|bwdist|bwdistgeodesic|bweuler|bwhitmiss|bwlabel|bwlabeln|bwmorph|bwpack|bwperim|bwselect|bwtraceboundary|bwulterode|bwunpack|checkerboard|col2im|colfilt|conndef|convmtx2|corner|cornermetric|corr2|cp2tform|cpcorr|cpselect|cpstruct2pairs|dct2|dctmtx|deconvblind|deconvlucy|deconvreg|deconvwnr|decorrstretch|demosaic|dicom(?:anon|dict|info|lookup|read|uid|write)|edge|edgetaper|entropy|entropyfilt|fan2para|fanbeam|findbounds|fliptform|freqz2|fsamp2|fspecial|ftrans2|fwind1|fwind2|getheight|getimage|getimagemodel|getline|getneighbors|getnhood|getpts|getrangefromclass|getrect|getsequence|gray2ind|graycomatrix|graycoprops|graydist|grayslice|graythresh|hdrread|hdrwrite|histeq|hough|houghlines|houghpeaks|iccfind|iccread|iccroot|iccwrite|idct2|ifanbeam|im2bw|im2col|im2double|im2int16|im2java2d|im2single|im2uint16|im2uint8|imabsdiff|imadd|imadjust|ImageAdapter|imageinfo|imagemodel|imapplymatrix|imattributes|imbothat|imclearborder|imclose|imcolormaptool|imcomplement|imcontour|imcontrast|imcrop|imdilate|imdisplayrange|imdistline|imdivide|imellipse|imerode|imextendedmax|imextendedmin|imfill|imfilter|imfindcircles|imfreehand|imfuse|imgca|imgcf|imgetfile|imhandles|imhist|imhmax|imhmin|imimposemin|imlincomb|imline|immagbox|immovie|immultiply|imnoise|imopen|imoverview|imoverviewpanel|impixel|impixelinfo|impixelinfoval|impixelregion|impixelregionpanel|implay|impoint|impoly|impositionrect|improfile|imputfile|impyramid|imreconstruct|imrect|imregconfig|imregionalmax|imregionalmin|imregister|imresize|imroi|imrotate|imsave|imscrollpanel|imshow|imshowpair|imsubtract|imtool|imtophat|imtransform|imview|ind2gray|ind2rgb|interfileinfo|interfileread|intlut|ippl|iptaddcallback|iptcheckconn|iptcheckhandle|iptcheckinput|iptcheckmap|iptchecknargin|iptcheckstrs|iptdemos|iptgetapi|iptGetPointerBehavior|iptgetpref|ipticondir|iptnum2ordinal|iptPointerManager|iptprefs|iptremovecallback|iptSetPointerBehavior|iptsetpref|iptwindowalign|iradon|isbw|isflat|isgray|isicc|isind|isnitf|isrgb|isrset|lab2double|lab2uint16|lab2uint8|label2rgb|labelmatrix|makecform|makeConstrainToRectFcn|makehdr|makelut|makeresampler|maketform|mat2gray|mean2|medfilt2|montage|nitfinfo|nitfread|nlfilter|normxcorr2|ntsc2rgb|openrset|ordfilt2|otf2psf|padarray|para2fan|phantom|poly2mask|psf2otf|qtdecomp|qtgetblk|qtsetblk|radon|rangefilt|reflect|regionprops|registration.metric.(?:MattesMutualInformation|MeanSquares)|registration.optimizer.(?:OnePlusOneEvolutionary|RegularStepGradientDescent)|rgb2gray|rgb2ntsc|rgb2ycbcr|roicolor|roifill|roifilt2|roipoly|rsetwrite|std2|stdfilt|strel|stretchlim|subimage|tformarray|tformfwd|tforminv|tonemap|translate|truesize|uintlut|viscircles|warp|watershed|whitepoint|wiener2|xyz2double|xyz2uint16|ycbcr2rgb|bintprog|color|fgoalattain|fminbnd|fmincon|fminimax|fminsearch|fminunc|fseminf|fsolve|fzero|fzmult|gangstr|ktrlink|linprog|lsqcurvefit|lsqlin|lsqnonlin|lsqnonneg|optimget|optimset|optimtool|quadprog",
                        keyword: "break|case|catch|classdef|continue|else|elseif|end|for|function|global|if|otherwise|parfor|persistent|return|spmd|switch|try|while",
                        "constant.language": "true|false|inf|Inf|nan|NaN|eps|pi|ans|nargin|nargout|varargin|varargout"
                    }, "identifier", !0);
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "#.*$"
                        }, {
                            token: "string",
                            regex: '".*?"'
                        }, {
                            token: "string",
                            regex: "'.'"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                        }, {
                            token: "paren.lparen",
                            regex: "[\\(]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\)]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        yNjO: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    this.$rules = {
                        start: [{
                            token: ["text", "string.quoted.double.source.racket"],
                            regex: /([^\\])(\"[^\"]*\")/
                        }, {
                            token: ["meta.variable.source.racket", "keyword.source.racket", "meta.variable.source.racket", "entity.name.variable.source.racket", "meta.variable.source.racket"],
                            regex: /(\()(define)(\s+)([a-zA-Z0-9_\-?\+^]+)(\s*)/
                        }, {
                            token: ["meta.function.source.racket", "keyword.source.racket", "meta.function.source.racket", "entity.name.function", "meta.function.source.racket"],
                            regex: /(\()(define)(\s+\()([a-zA-Z0-9_\-?\+^]+)(\s*)/
                        }, {
                            token: ["meta.struct.source.racket", "keyword.source.racket", "meta.struct.source.racket", "entity.name.type", "meta.struct.source.racket"],
                            regex: /(\()(struct)(\s+)([a-zA-Z0-9_\-?\+^]+)(\s+)/
                        }, {
                            token: ["meta.keywords.source.racket", "keyword.source.racket", "meta.keywords.source.racket"],
                            regex: /([\s\(])(if|lambda|cond|define|type-case|let|letrec|let!|\#lang|require|test|else|first|rest|define-type|define-type-alias|define-struct|not|local|error|lang)([\s\)])/
                        }, {
                            token: ["text", "constant.language.source.racket", "text"],
                            regex: /([\s\(])(true|false|empty|null)([\s\)])/
                        }, {
                            token: ["text", "constant.language.source.racket", "text"],
                            regex: /([\s\(])(#t|#f)([\s\)])/
                        }, {
                            token: "constant.language.source.racket",
                            regex: /#\\[a-zA-Z0-9_\-?\+\.\!\"]+/
                        }, {
                            token: "constant.numeric.integer.source.racket",
                            regex: /\b(?:0|[1-9][0-9_]*)\b/
                        }, {
                            token: "comment.line.documentation.source.racket",
                            regex: /;/,
                            push: [{
                                token: "comment.line.documentation.source.racket",
                                regex: /$/,
                                next: "pop"
                            }, {
                                defaultToken: "comment.line.documentation.source.racket"
                            }]
                        }, {
                            token: "comment.block.source.racket",
                            regex: /#\|/,
                            push: [{
                                token: "comment.block.source.racket",
                                regex: /\|#/,
                                next: "pop"
                            }, {
                                defaultToken: "comment.block.source.racket"
                            }]
                        }]
                    }, this.normalizeRules()
                };
            o.metaData = {
                fileTypes: ["rkt"],
                name: "Racket",
                scopeName: "source.racket"
            }, a.inherits(o, i);
            var s = o;
            t.default = s
        },
        "t/af": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                        "keyword.control": "case|do|let|loop|if|else|when",
                        "keyword.operator": "eq|neq|and|or",
                        "constant.language": "null|nil",
                        "support.function": "cons|car|cdr|cond|lambda|format|setq|setf|quote|eval|append|list|listp|memberp|t|load|progn"
                    }, "identifier", !0);
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: ";.*$"
                        }, {
                            token: ["storage.type.function-type.lisp", "text", "entity.name.function.lisp"],
                            regex: "(?:\\b(?:(defun|defmethod|defmacro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
                        }, {
                            token: ["punctuation.definition.constant.character.lisp", "constant.character.lisp"],
                            regex: "(#)((?:\\w|[\\\\+-=<>'\"&#])+)"
                        }, {
                            token: ["punctuation.definition.variable.lisp", "variable.other.global.lisp", "punctuation.definition.variable.lisp"],
                            regex: "(\\*)(\\S*)(\\*)"
                        }, {
                            token: "constant.numeric",
                            regex: "0[xX][0-9a-fA-F]+(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "string",
                            regex: '"(?=.)',
                            next: "qqstring"
                        }],
                        qqstring: [{
                            token: "constant.character.escape.lisp",
                            regex: "\\\\."
                        }, {
                            token: "string",
                            regex: '[^"\\\\]+'
                        }, {
                            token: "string",
                            regex: "\\\\$",
                            next: "qqstring"
                        }, {
                            token: "string",
                            regex: '"|$',
                            next: "start"
                        }]
                    }
                };
            a.inherits(o, i);
            var s = o;
            t.default = s
        },
        hR2n: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("OyKl"),
                a = r.oop,
                i = r.TextHighlightRules,
                o = r.DocCommentHighlightRules,
                s = function() {
                    var e = this.createKeywordMapper({
                        "variable.language": "this",
                        keyword: "case|default|do|else|for|if|match|while|throw|return|try|trye|catch|finally|yield|abstract|class|def|extends|final|forSome|implicit|implicits|import|lazy|new|object|null|override|package|private|protected|sealed|super|this|trait|type|val|var|with|assert|assume|require|print|println|printf|readLine|readBoolean|readByte|readShort|readChar|readInt|readLong|readFloat|readDouble",
                        "support.function": "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object|Unit|Any|AnyVal|AnyRef|Null|ScalaObject|Singleton|Seq|Iterable|List|Option|Array|Char|Byte|Int|Long|Nothing|App|Application|BufferedIterator|BigDecimal|BigInt|Console|Either|Enumeration|Equiv|Fractional|Function|IndexedSeq|Integral|Iterator|Map|Numeric|Nil|NotNull|Ordered|Ordering|PartialFunction|PartialOrdering|Product|Proxy|Range|Responder|Seq|Serializable|Set|Specializable|Stream|StringContext|Symbol|Traversable|TraversableOnce|Tuple|Vector|Pair|Triple",
                        "constant.language": "true|false"
                    }, "identifier");
                    this.$rules = {
                        start: [{
                            token: "comment",
                            regex: "\\/\\/.*$"
                        }, o.getStartRule("doc-start"), {
                            token: "comment",
                            regex: "\\/\\*",
                            next: "comment"
                        }, {
                            token: "string.regexp",
                            regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
                        }, {
                            token: "string",
                            regex: '"""',
                            next: "tstring"
                        }, {
                            token: "string",
                            regex: '"(?=.)',
                            next: "string"
                        }, {
                            token: "symbol.constant",
                            regex: "'[\\w\\d_]+"
                        }, {
                            token: "constant.numeric",
                            regex: "0[xX][0-9a-fA-F]+\\b"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {
                            token: "constant.language.boolean",
                            regex: "(?:true|false)\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
                        }, {
                            token: "paren.lparen",
                            regex: "[[({]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\])}]"
                        }, {
                            token: "text",
                            regex: "\\s+"
                        }],
                        comment: [{
                            token: "comment",
                            regex: "\\*\\/",
                            next: "start"
                        }, {
                            defaultToken: "comment"
                        }],
                        string: [{
                            token: "escape",
                            regex: '\\\\"'
                        }, {
                            token: "string",
                            regex: '"',
                            next: "start"
                        }, {
                            token: "string.invalid",
                            regex: '[^"\\\\]*$',
                            next: "start"
                        }, {
                            token: "string",
                            regex: '[^"\\\\]+'
                        }],
                        tstring: [{
                            token: "string",
                            regex: '"{3,5}',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        }]
                    }, this.embedRules(o, "doc-", [o.getEndRule("start")])
                };
            a.inherits(s, i);
            var l = s;
            t.default = l
        },
        CVJP: (e, t, n) => {
            var r = {
                "./ada": "4xtG",
                "./ada.js": "4xtG",
                "./cobol": "vPHJ",
                "./cobol.js": "vPHJ",
                "./d": "oO+C",
                "./d.js": "oO+C",
                "./dart": "4C9p",
                "./dart.js": "4C9p",
                "./elixir": "jYSa",
                "./elixir.js": "jYSa",
                "./erlang": "cDZF",
                "./erlang.js": "cDZF",
                "./fortran": "+d94",
                "./fortran.js": "+d94",
                "./groovy": "+/AF",
                "./groovy.js": "+/AF",
                "./haskell": "vCTa",
                "./haskell.js": "vCTa",
                "./julia": "+UX2",
                "./julia.js": "+UX2",
                "./ocaml": "p0wm",
                "./ocaml.js": "p0wm",
                "./octave": "rvnw",
                "./octave.js": "rvnw",
                "./racket": "yNjO",
                "./racket.js": "yNjO",
                "./sbcl": "t/af",
                "./sbcl.js": "t/af",
                "./scala": "hR2n",
                "./scala.js": "hR2n"
            };

            function a(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = i, e.exports = a, a.id = "CVJP"
        },
        Jgq1: (e, t, n) => {
            "use strict";
            var r = n("ziTh");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = 2e3,
                i = function(e) {
                    for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                        for (var n = this.states[t], r = [], a = 0, i = this.matchMappings[t] = {
                                defaultToken: "text"
                            }, o = "g", s = [], l = 0; l < n.length; l++) {
                            var c = n[l];
                            if (c.defaultToken && (i.defaultToken = c.defaultToken), c.caseInsensitive && (o = "gi"), null != c.regex) {
                                c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                                var d = c.regex,
                                    u = new RegExp("(?:(" + d + ")|(.))").exec("a").length - 2;
                                Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                    rule: c,
                                    groupCount: u - 1
                                }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c.token), u > 1 && (/\\\d/.test(c.regex) ? d = c.regex.replace(/\\([0-9]+)/g, (function(e, t) {
                                    return "\\" + (parseInt(t, 10) + a + 1)
                                })) : (u = 1, d = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || s.push(c)), i[a] = l, a += u, r.push(d), c.onMatch || (c.onMatch = null)
                            }
                        }
                        r.length || (i[0] = 0, r.push("$")), s.forEach((function(e) {
                            e.splitRegex = this.createSplitterRegexp(e.regex, o)
                        }), this), this.regExps[t] = new RegExp("(" + r.join(")|(") + ")|($)", o)
                    }
                };
            (function() {
                this.$setMaxTokenCount = function(e) {
                    a = 0 | e
                }, this.$applyToken = function(e) {
                    var t = this.splitRegex.exec(e).slice(1),
                        n = this.token.apply(this, t);
                    if ("string" == typeof n) return [{
                        type: n,
                        value: e
                    }];
                    for (var r = [], a = 0, i = n.length; a < i; a++) t[a] && (r[r.length] = {
                        type: n[a],
                        value: t[a]
                    });
                    return r
                }, this.$arrayTokens = function(e) {
                    if (!e) return [];
                    var t = this.splitRegex.exec(e);
                    if (!t) return "text";
                    for (var n = [], r = this.tokenArray, a = 0, i = r.length; a < i; a++) t[a + 1] && (n[n.length] = {
                        type: r[a],
                        value: t[a + 1]
                    });
                    return n
                }, this.removeCapturingGroups = function(e) {
                    return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, (function(e, t) {
                        return t ? "(?:" : e
                    }))
                }, this.createSplitterRegexp = function(e, t) {
                    if (-1 != e.indexOf("(?=")) {
                        var n = 0,
                            r = !1,
                            a = {};
                        e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function(e, t, i, o, s, l) {
                            return r ? r = "]" != s : s ? r = !0 : o ? (n == a.stack && (a.end = l + 1, a.stack = -1), n--) : i && (n++, 1 != i.length && (a.stack = n, a.start = l)), e
                        })), null != a.end && /^\)*$/.test(e.substr(a.end)) && (e = e.substring(0, a.start) + e.substr(a.end))
                    }
                    return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
                }, this.getLineTokens = function(e, t) {
                    if (t && "string" != typeof t) {
                        var n = t.slice(0);
                        "#tmp" === (t = n[0]) && (n.shift(), t = n.shift())
                    } else n = [];
                    var r = t || "start",
                        i = this.states[r];
                    i || (r = "start", i = this.states[r]);
                    var o = this.matchMappings[r],
                        s = this.regExps[r];
                    s.lastIndex = 0;
                    for (var l, c = [], d = 0, u = 0, g = {
                            type: null,
                            value: ""
                        }; l = s.exec(e);) {
                        var p = o.defaultToken,
                            m = null,
                            f = l[0],
                            h = s.lastIndex;
                        if (h - f.length > d) {
                            var _ = e.substring(d, h - f.length);
                            g.type == p ? g.value += _ : (g.type && c.push(g), g = {
                                type: p,
                                value: _
                            })
                        }
                        for (var x = 0; x < l.length - 2; x++)
                            if (void 0 !== l[x + 1]) {
                                p = (m = i[o[x]]).onMatch ? m.onMatch(f, r, n, e) : m.token, m.next && (r = "string" == typeof m.next ? m.next : m.next(r, n), (i = this.states[r]) || (this.reportError("state doesn't exist", r), r = "start", i = this.states[r]), o = this.matchMappings[r], d = h, (s = this.regExps[r]).lastIndex = h), m.consumeLineEnd && (d = h);
                                break
                            }
                        if (f)
                            if ("string" == typeof p) m && !1 === m.merge || g.type !== p ? (g.type && c.push(g), g = {
                                type: p,
                                value: f
                            }) : g.value += f;
                            else if (p)
                            for (g.type && c.push(g), g = {
                                    type: null,
                                    value: ""
                                }, x = 0; x < p.length; x++) c.push(p[x]);
                        if (d == e.length) break;
                        if (d = h, u++ > a) {
                            for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                                    startState: t,
                                    line: e
                                }); d < e.length;) g.type && c.push(g), g = {
                                value: e.substring(d, d += 2e3),
                                type: "overflow"
                            };
                            r = "start", n = [];
                            break
                        }
                    }
                    return g.type && c.push(g), n.length > 1 && n[0] !== r && n.unshift("#tmp", r), {
                        tokens: c,
                        state: n.length ? n : r
                    }
                }, this.reportError = function() {
                    r.log(arguments)
                }
            }).call(i.prototype);
            var o = i;
            t.default = o
        },
        N9BW: (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.registerRulesForLanguage = function(e, t) {
                var n = new o.default(t.getRules());
                return i.languages.setTokensProvider(e, {
                    getInitialState: function() {
                        return new c("")
                    },
                    tokenize: function(e, t) {
                        var r = n.getLineTokens(e, t.state),
                            a = r.tokens,
                            i = r.state,
                            o = 0,
                            s = a.map((function(e) {
                                var t = {
                                    startIndex: o,
                                    scopes: e.type
                                };
                                return o += e.value.length, t
                            }));
                        return {
                            endState: new c(i),
                            tokens: s
                        }
                    }
                })
            }, t.AVAILABLE_LANGUAGES = t.State = void 0;
            var a, i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    return n.default = e, t && t.set(e, n), n
                }(n("4Jew")),
                o = (a = n("Jgq1")) && a.__esModule ? a : {
                    default: a
                };

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var c = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.state = t
                }
                var t, n;
                return t = e, (n = [{
                    key: "equals",
                    value: function(e) {
                        return e === this || e.state === this.state
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e(this.state)
                    }
                }]) && l(t.prototype, n), e
            }();
            t.State = c, t.AVAILABLE_LANGUAGES = ["ada", "cobol", "d", "dart", "elixir", "erlang", "fortran", "groovy", "haskell", "julia", "ocaml", "octave", "racket", "sbcl", "scala"]
        },
        kGKp: (e, t, n) => {
            "use strict";
            t.hc = function() {
                a.AVAILABLE_LANGUAGES.forEach((function(e) {
                    return t = e, r.languages.register({
                        id: t
                    }), void r.languages.onLanguage(t, (function() {
                        ! function(e) {
                            l[e] ? l[e] : Promise.resolve().then((function() {
                                return s(n("CVJP")("./".concat(e)))
                            })).then((function(t) {
                                var n = new(0, t.default);
                                return (0, a.registerRulesForLanguage)(e, n)
                            }))
                        }(t)
                    }));
                    var t
                }))
            };
            var r = s(n("4Jew")),
                a = n("N9BW");

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function s(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" != typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                    }
                return n.default = e, t && t.set(e, n), n
            }
            var l = {}
        },
        sEfC: (e, t, n) => {
            var r = n("GoyQ"),
                a = n("QIyF"),
                i = n("tLB3"),
                o = Math.max,
                s = Math.min;
            e.exports = function(e, t, n) {
                var l, c, d, u, g, p, m = 0,
                    f = !1,
                    h = !1,
                    _ = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function x(t) {
                    var n = l,
                        r = c;
                    return l = c = void 0, m = t, u = e.apply(r, n)
                }

                function b(e) {
                    var n = e - p;
                    return void 0 === p || n >= t || n < 0 || h && e - m >= d
                }

                function k() {
                    var e = a();
                    if (b(e)) return v(e);
                    g = setTimeout(k, function(e) {
                        var n = t - (e - p);
                        return h ? s(n, d - (e - m)) : n
                    }(e))
                }

                function v(e) {
                    return g = void 0, _ && l ? x(e) : (l = c = void 0, u)
                }

                function y() {
                    var e = a(),
                        n = b(e);
                    if (l = arguments, c = this, p = e, n) {
                        if (void 0 === g) return function(e) {
                            return m = e, g = setTimeout(k, t), f ? x(e) : u
                        }(p);
                        if (h) return clearTimeout(g), g = setTimeout(k, t), x(p)
                    }
                    return void 0 === g && (g = setTimeout(k, t)), u
                }
                return t = i(t) || 0, r(n) && (f = !!n.leading, d = (h = "maxWait" in n) ? o(i(n.maxWait) || 0, t) : d, _ = "trailing" in n ? !!n.trailing : _), y.cancel = function() {
                    void 0 !== g && clearTimeout(g), m = 0, l = p = c = g = void 0
                }, y.flush = function() {
                    return void 0 === g ? u : v(a())
                }, y
            }
        },
        QIyF: (e, t, n) => {
            var r = n("Kz5y");
            e.exports = function() {
                return r.Date.now()
            }
        },
        "50DI": (e, t, n) => {
            var r = n("sgoq"),
                a = n("gQMU"),
                i = r((function(e, t, n) {
                    return e + (n ? " " : "") + a(t)
                }));
            e.exports = i
        },
        DzJC: (e, t, n) => {
            var r = n("sEfC"),
                a = n("GoyQ");
            e.exports = function(e, t, n) {
                var i = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return a(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        zWQs: (e, t, n) => {
            "use strict";
            var r = n("4Jew"),
                a = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t, n, r) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of o(t)) s.call(e, n) || "default" === n || a(e, n, {
                        get: () => t[n],
                        enumerable: !(r = i(t, n)) || r.enumerable
                    })
            })(l, r);
            var c = class {
                    constructor(e, t, n) {
                        this._onDidChange = new l.Emitter, this._languageId = e, this.setOptions(t), this.setModeConfiguration(n)
                    }
                    get onDidChange() {
                        return this._onDidChange.event
                    }
                    get languageId() {
                        return this._languageId
                    }
                    get modeConfiguration() {
                        return this._modeConfiguration
                    }
                    get diagnosticsOptions() {
                        return this.options
                    }
                    get options() {
                        return this._options
                    }
                    setOptions(e) {
                        this._options = e || Object.create(null), this._onDidChange.fire(this)
                    }
                    setDiagnosticsOptions(e) {
                        this.setOptions(e)
                    }
                    setModeConfiguration(e) {
                        this._modeConfiguration = e || Object.create(null), this._onDidChange.fire(this)
                    }
                },
                d = {
                    validate: !0,
                    lint: {
                        compatibleVendorPrefixes: "ignore",
                        vendorPrefix: "warning",
                        duplicateProperties: "warning",
                        emptyRules: "warning",
                        importStatement: "ignore",
                        boxModel: "ignore",
                        universalSelector: "ignore",
                        zeroUnits: "ignore",
                        fontFaceProperties: "warning",
                        hexColorLength: "error",
                        argumentsInColorFunction: "error",
                        unknownProperties: "warning",
                        ieHack: "ignore",
                        unknownVendorSpecificProperties: "ignore",
                        propertyIgnoredDueToDisplay: "warning",
                        important: "ignore",
                        float: "ignore",
                        idSelector: "ignore"
                    },
                    data: {
                        useDefaultDataProvider: !0
                    },
                    format: {
                        newlineBetweenSelectors: !0,
                        newlineBetweenRules: !0,
                        spaceAroundSelectorSeparator: !1,
                        braceStyle: "collapse",
                        maxPreserveNewLines: void 0,
                        preserveNewLines: !0
                    }
                },
                u = {
                    completionItems: !0,
                    hovers: !0,
                    documentSymbols: !0,
                    definitions: !0,
                    references: !0,
                    documentHighlights: !0,
                    rename: !0,
                    colors: !0,
                    foldingRanges: !0,
                    diagnostics: !0,
                    selectionRanges: !0,
                    documentFormattingEdits: !0,
                    documentRangeFormattingEdits: !0
                },
                g = new c("css", d, u),
                p = new c("scss", d, u),
                m = new c("less", d, u);

            function f() {
                return n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-css-language-features_cssMode_js").then(n.bind(n, "mN08"))
            }
            l.languages.css = {
                cssDefaults: g,
                lessDefaults: m,
                scssDefaults: p
            }, l.languages.onLanguage("less", (() => {
                f().then((e => e.setupMode(m)))
            })), l.languages.onLanguage("scss", (() => {
                f().then((e => e.setupMode(p)))
            })), l.languages.onLanguage("css", (() => {
                f().then((e => e.setupMode(g)))
            }))
        },
        MNvU: (e, t, n) => {
            "use strict";
            var r = n("4Jew"),
                a = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t, n, r) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of o(t)) s.call(e, n) || "default" === n || a(e, n, {
                        get: () => t[n],
                        enumerable: !(r = i(t, n)) || r.enumerable
                    })
            })(l, r);
            var c = {
                format: {
                    tabSize: 4,
                    insertSpaces: !1,
                    wrapLineLength: 120,
                    unformatted: 'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',
                    contentUnformatted: "pre",
                    indentInnerHtml: !1,
                    preserveNewLines: !0,
                    maxPreserveNewLines: void 0,
                    indentHandlebars: !1,
                    endWithNewline: !1,
                    extraLiners: "head, body, /html",
                    wrapAttributes: "auto"
                },
                suggest: {},
                data: {
                    useDefaultDataProvider: !0
                }
            };

            function d(e) {
                return {
                    completionItems: !0,
                    hovers: !0,
                    documentSymbols: !0,
                    links: !0,
                    documentHighlights: !0,
                    rename: !0,
                    colors: !0,
                    foldingRanges: !0,
                    selectionRanges: !0,
                    diagnostics: e === u,
                    documentFormattingEdits: e === u,
                    documentRangeFormattingEdits: e === u
                }
            }
            var u = "html",
                g = "handlebars",
                p = "razor",
                m = k(u, c, d(u)),
                f = m.defaults,
                h = k(g, c, d(g)),
                _ = h.defaults,
                x = k(p, c, d(p)),
                b = x.defaults;

            function k(e, t = c, r = d(e)) {
                const a = new class {
                    constructor(e, t, n) {
                        this._onDidChange = new l.Emitter, this._languageId = e, this.setOptions(t), this.setModeConfiguration(n)
                    }
                    get onDidChange() {
                        return this._onDidChange.event
                    }
                    get languageId() {
                        return this._languageId
                    }
                    get options() {
                        return this._options
                    }
                    get modeConfiguration() {
                        return this._modeConfiguration
                    }
                    setOptions(e) {
                        this._options = e || Object.create(null), this._onDidChange.fire(this)
                    }
                    setModeConfiguration(e) {
                        this._modeConfiguration = e || Object.create(null), this._onDidChange.fire(this)
                    }
                }(e, t, r);
                let i;
                const o = l.languages.onLanguage(e, (async () => {
                    i = (await n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-html-language-features_htmlMode_js").then(n.bind(n, "gf3v"))).setupMode(a)
                }));
                return {
                    defaults: a,
                    dispose() {
                        o.dispose(), i ? .dispose(), i = void 0
                    }
                }
            }
            l.languages.html = {
                htmlDefaults: f,
                razorDefaults: b,
                handlebarDefaults: _,
                htmlLanguageService: m,
                handlebarLanguageService: h,
                razorLanguageService: x,
                registerHTMLLanguageService: k
            }
        },
        mUEn: (e, t, n) => {
            "use strict";
            var r = n("4Jew"),
                a = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t, n, r) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of o(t)) s.call(e, n) || "default" === n || a(e, n, {
                        get: () => t[n],
                        enumerable: !(r = i(t, n)) || r.enumerable
                    })
            })(l, r);
            var c = {},
                d = {},
                u = class e {
                    static getOrCreate(t) {
                        return d[t] || (d[t] = new e(t)), d[t]
                    }
                    constructor(e) {
                        this._languageId = e, this._loadingTriggered = !1, this._lazyLoadPromise = new Promise(((e, t) => {
                            this._lazyLoadPromiseResolve = e, this._lazyLoadPromiseReject = t
                        }))
                    }
                    load() {
                        return this._loadingTriggered || (this._loadingTriggered = !0, c[this._languageId].loader().then((e => this._lazyLoadPromiseResolve(e)), (e => this._lazyLoadPromiseReject(e)))), this._lazyLoadPromise
                    }
                };

            function g(e) {
                const t = e.id;
                c[t] = e, l.languages.register(e);
                const n = u.getOrCreate(t);
                l.languages.registerTokensProviderFactory(t, {
                    create: async () => (await n.load()).language
                }), l.languages.onLanguageEncountered(t, (async () => {
                    const e = await n.load();
                    l.languages.setLanguageConfiguration(t, e.conf)
                }))
            }
            g({
                id: "abap",
                extensions: [".abap"],
                aliases: ["abap", "ABAP"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_abap_abap_js").then(n.bind(n, "fxEZ"))
            }), g({
                id: "apex",
                extensions: [".cls"],
                aliases: ["Apex", "apex"],
                mimetypes: ["text/x-apex-source", "text/x-apex"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_apex_apex_js").then(n.bind(n, "QBrJ"))
            }), g({
                id: "azcli",
                extensions: [".azcli"],
                aliases: ["Azure CLI", "azcli"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_azcli_azcli_js").then(n.bind(n, "CHvo"))
            }), g({
                id: "bat",
                extensions: [".bat", ".cmd"],
                aliases: ["Batch", "bat"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_bat_bat_js").then(n.bind(n, "AmM8"))
            }), g({
                id: "bicep",
                extensions: [".bicep"],
                aliases: ["Bicep"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_bicep_bicep_js").then(n.bind(n, "aE9g"))
            }), g({
                id: "cameligo",
                extensions: [".mligo"],
                aliases: ["Cameligo"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_cameligo_cameligo_js").then(n.bind(n, "NiqO"))
            }), g({
                id: "clojure",
                extensions: [".clj", ".cljs", ".cljc", ".edn"],
                aliases: ["clojure", "Clojure"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_clojure_clojure_js").then(n.bind(n, "aceC"))
            }), g({
                id: "coffeescript",
                extensions: [".coffee"],
                aliases: ["CoffeeScript", "coffeescript", "coffee"],
                mimetypes: ["text/x-coffeescript", "text/coffeescript"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_coffee_coffee_js").then(n.bind(n, "QYX7"))
            }), g({
                id: "c",
                extensions: [".c", ".h"],
                aliases: ["C", "c"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_cpp_cpp_js").then(n.bind(n, "GIU6"))
            }), g({
                id: "cpp",
                extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
                aliases: ["C++", "Cpp", "cpp"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_cpp_cpp_js").then(n.bind(n, "GIU6"))
            }), g({
                id: "csharp",
                extensions: [".cs", ".csx", ".cake"],
                aliases: ["C#", "csharp"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_csharp_csharp_js").then(n.bind(n, "Xqqc"))
            }), g({
                id: "csp",
                extensions: [".csp"],
                aliases: ["CSP", "csp"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_csp_csp_js").then(n.bind(n, "WWSQ"))
            }), g({
                id: "css",
                extensions: [".css"],
                aliases: ["CSS", "css"],
                mimetypes: ["text/css"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_css_css_js").then(n.bind(n, "6m69"))
            }), g({
                id: "cypher",
                extensions: [".cypher", ".cyp"],
                aliases: ["Cypher", "OpenCypher"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_cypher_cypher_js").then(n.bind(n, "ileU"))
            }), g({
                id: "dart",
                extensions: [".dart"],
                aliases: ["Dart", "dart"],
                mimetypes: ["text/x-dart-source", "text/x-dart"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_dart_dart_js").then(n.bind(n, "MkwF"))
            }), g({
                id: "dockerfile",
                extensions: [".dockerfile"],
                filenames: ["Dockerfile"],
                aliases: ["Dockerfile"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_dockerfile_dockerfile_js").then(n.bind(n, "kZwK"))
            }), g({
                id: "ecl",
                extensions: [".ecl"],
                aliases: ["ECL", "Ecl", "ecl"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_ecl_ecl_js").then(n.bind(n, "drL7"))
            }), g({
                id: "elixir",
                extensions: [".ex", ".exs"],
                aliases: ["Elixir", "elixir", "ex"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_elixir_elixir_js").then(n.bind(n, "t2wQ"))
            }), g({
                id: "flow9",
                extensions: [".flow"],
                aliases: ["Flow9", "Flow", "flow9", "flow"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_flow9_flow9_js").then(n.bind(n, "Yt1C"))
            }), g({
                id: "fsharp",
                extensions: [".fs", ".fsi", ".ml", ".mli", ".fsx", ".fsscript"],
                aliases: ["F#", "FSharp", "fsharp"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_fsharp_fsharp_js").then(n.bind(n, "N6CK"))
            }), g({
                id: "freemarker2",
                extensions: [".ftl", ".ftlh", ".ftlx"],
                aliases: ["FreeMarker2", "Apache FreeMarker2"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagAutoInterpolationDollar))
            }), g({
                id: "freemarker2.tag-angle.interpolation-dollar",
                aliases: ["FreeMarker2 (Angle/Dollar)", "Apache FreeMarker2 (Angle/Dollar)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagAngleInterpolationDollar))
            }), g({
                id: "freemarker2.tag-bracket.interpolation-dollar",
                aliases: ["FreeMarker2 (Bracket/Dollar)", "Apache FreeMarker2 (Bracket/Dollar)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagBracketInterpolationDollar))
            }), g({
                id: "freemarker2.tag-angle.interpolation-bracket",
                aliases: ["FreeMarker2 (Angle/Bracket)", "Apache FreeMarker2 (Angle/Bracket)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagAngleInterpolationBracket))
            }), g({
                id: "freemarker2.tag-bracket.interpolation-bracket",
                aliases: ["FreeMarker2 (Bracket/Bracket)", "Apache FreeMarker2 (Bracket/Bracket)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagBracketInterpolationBracket))
            }), g({
                id: "freemarker2.tag-auto.interpolation-dollar",
                aliases: ["FreeMarker2 (Auto/Dollar)", "Apache FreeMarker2 (Auto/Dollar)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagAutoInterpolationDollar))
            }), g({
                id: "freemarker2.tag-auto.interpolation-bracket",
                aliases: ["FreeMarker2 (Auto/Bracket)", "Apache FreeMarker2 (Auto/Bracket)"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_freemarker2_freemarker2_js").then(n.bind(n, "hNiN")).then((e => e.TagAutoInterpolationBracket))
            }), g({
                id: "go",
                extensions: [".go"],
                aliases: ["Go"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_go_go_js").then(n.bind(n, "S/nu"))
            }), g({
                id: "graphql",
                extensions: [".graphql", ".gql"],
                aliases: ["GraphQL", "graphql", "gql"],
                mimetypes: ["application/graphql"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_graphql_graphql_js").then(n.bind(n, "ZnbY"))
            }), g({
                id: "handlebars",
                extensions: [".handlebars", ".hbs"],
                aliases: ["Handlebars", "handlebars", "hbs"],
                mimetypes: ["text/x-handlebars-template"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_handlebars_handlebars_js").then(n.bind(n, "GdgF"))
            }), g({
                id: "hcl",
                extensions: [".tf", ".tfvars", ".hcl"],
                aliases: ["Terraform", "tf", "HCL", "hcl"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_hcl_hcl_js").then(n.bind(n, "3/Lw"))
            }), g({
                id: "html",
                extensions: [".html", ".htm", ".shtml", ".xhtml", ".mdoc", ".jsp", ".asp", ".aspx", ".jshtm"],
                aliases: ["HTML", "htm", "html", "xhtml"],
                mimetypes: ["text/html", "text/x-jshtm", "text/template", "text/ng-template"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_html_html_js").then(n.bind(n, "isvs"))
            }), g({
                id: "ini",
                extensions: [".ini", ".properties", ".gitconfig"],
                filenames: ["config", ".gitattributes", ".gitconfig", ".editorconfig"],
                aliases: ["Ini", "ini"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_ini_ini_js").then(n.bind(n, "GiUp"))
            }), g({
                id: "java",
                extensions: [".java", ".jav"],
                aliases: ["Java", "java"],
                mimetypes: ["text/x-java-source", "text/x-java"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_java_java_js").then(n.bind(n, "6Fmn"))
            }), g({
                id: "javascript",
                extensions: [".js", ".es6", ".jsx", ".mjs", ".cjs"],
                firstLine: "^#!.*\\bnode",
                filenames: ["jakefile"],
                aliases: ["JavaScript", "javascript", "js"],
                mimetypes: ["text/javascript"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_javascript_javascript_js").then(n.bind(n, "0N08"))
            }), g({
                id: "julia",
                extensions: [".jl"],
                aliases: ["julia", "Julia"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_julia_julia_js").then(n.bind(n, "zfTV"))
            }), g({
                id: "kotlin",
                extensions: [".kt", ".kts"],
                aliases: ["Kotlin", "kotlin"],
                mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_kotlin_kotlin_js").then(n.bind(n, "o8C4"))
            }), g({
                id: "less",
                extensions: [".less"],
                aliases: ["Less", "less"],
                mimetypes: ["text/x-less", "text/less"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_less_less_js").then(n.bind(n, "pXzR"))
            }), g({
                id: "lexon",
                extensions: [".lex"],
                aliases: ["Lexon"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_lexon_lexon_js").then(n.bind(n, "PqPn"))
            }), g({
                id: "lua",
                extensions: [".lua"],
                aliases: ["Lua", "lua"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_lua_lua_js").then(n.bind(n, "evf+"))
            }), g({
                id: "liquid",
                extensions: [".liquid", ".html.liquid"],
                aliases: ["Liquid", "liquid"],
                mimetypes: ["application/liquid"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_liquid_liquid_js").then(n.bind(n, "c6uC"))
            }), g({
                id: "m3",
                extensions: [".m3", ".i3", ".mg", ".ig"],
                aliases: ["Modula-3", "Modula3", "modula3", "m3"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_m3_m3_js").then(n.bind(n, "xutU"))
            }), g({
                id: "markdown",
                extensions: [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mdtxt", ".mdtext"],
                aliases: ["Markdown", "markdown"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_markdown_markdown_js").then(n.bind(n, "9vGw"))
            }), g({
                id: "mdx",
                extensions: [".mdx"],
                aliases: ["MDX", "mdx"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_mdx_mdx_js").then(n.bind(n, "Q2Kj"))
            }), g({
                id: "mips",
                extensions: [".s"],
                aliases: ["MIPS", "MIPS-V"],
                mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_mips_mips_js").then(n.bind(n, "5uXW"))
            }), g({
                id: "msdax",
                extensions: [".dax", ".msdax"],
                aliases: ["DAX", "MSDAX"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_msdax_msdax_js").then(n.bind(n, "Jnz8"))
            }), g({
                id: "mysql",
                extensions: [],
                aliases: ["MySQL", "mysql"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_mysql_mysql_js").then(n.bind(n, "QetK"))
            }), g({
                id: "objective-c",
                extensions: [".m"],
                aliases: ["Objective-C"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_objective-c_objective-c_js").then(n.bind(n, "98cN"))
            }), g({
                id: "pascal",
                extensions: [".pas", ".p", ".pp"],
                aliases: ["Pascal", "pas"],
                mimetypes: ["text/x-pascal-source", "text/x-pascal"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_pascal_pascal_js").then(n.bind(n, "PqFc"))
            }), g({
                id: "pascaligo",
                extensions: [".ligo"],
                aliases: ["Pascaligo", "ligo"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_pascaligo_pascaligo_js").then(n.bind(n, "m4Us"))
            }), g({
                id: "perl",
                extensions: [".pl", ".pm"],
                aliases: ["Perl", "pl"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_perl_perl_js").then(n.bind(n, "jbeS"))
            }), g({
                id: "pgsql",
                extensions: [],
                aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_pgsql_pgsql_js").then(n.bind(n, "69Si"))
            }), g({
                id: "php",
                extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
                aliases: ["PHP", "php"],
                mimetypes: ["application/x-php"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_php_php_js").then(n.bind(n, "tV6h"))
            }), g({
                id: "pla",
                extensions: [".pla"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_pla_pla_js").then(n.bind(n, "kuHZ"))
            }), g({
                id: "postiats",
                extensions: [".dats", ".sats", ".hats"],
                aliases: ["ATS", "ATS/Postiats"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_postiats_postiats_js").then(n.bind(n, "tGtJ"))
            }), g({
                id: "powerquery",
                extensions: [".pq", ".pqm"],
                aliases: ["PQ", "M", "Power Query", "Power Query M"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_powerquery_powerquery_js").then(n.bind(n, "5I1X"))
            }), g({
                id: "powershell",
                extensions: [".ps1", ".psm1", ".psd1"],
                aliases: ["PowerShell", "powershell", "ps", "ps1"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_powershell_powershell_js").then(n.bind(n, "1Qo5"))
            }), g({
                id: "proto",
                extensions: [".proto"],
                aliases: ["protobuf", "Protocol Buffers"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_protobuf_protobuf_js").then(n.bind(n, "Gnye"))
            }), g({
                id: "pug",
                extensions: [".jade", ".pug"],
                aliases: ["Pug", "Jade", "jade"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_pug_pug_js").then(n.bind(n, "ObSk"))
            }), g({
                id: "python",
                extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
                aliases: ["Python", "py"],
                firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_python_python_js").then(n.bind(n, "6k9h"))
            }), g({
                id: "qsharp",
                extensions: [".qs"],
                aliases: ["Q#", "qsharp"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_qsharp_qsharp_js").then(n.bind(n, "rDvc"))
            }), g({
                id: "r",
                extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
                aliases: ["R", "r"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_r_r_js").then(n.bind(n, "xckm"))
            }), g({
                id: "razor",
                extensions: [".cshtml"],
                aliases: ["Razor", "razor"],
                mimetypes: ["text/x-cshtml"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_razor_razor_js").then(n.bind(n, "ISUC"))
            }), g({
                id: "redis",
                extensions: [".redis"],
                aliases: ["redis"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_redis_redis_js").then(n.bind(n, "Iji2"))
            }), g({
                id: "redshift",
                extensions: [],
                aliases: ["Redshift", "redshift"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_redshift_redshift_js").then(n.bind(n, "DrAn"))
            }), g({
                id: "restructuredtext",
                extensions: [".rst"],
                aliases: ["reStructuredText", "restructuredtext"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_restructuredtext_restructuredtext_js").then(n.bind(n, "QEfc"))
            }), g({
                id: "ruby",
                extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
                filenames: ["rakefile", "Gemfile"],
                aliases: ["Ruby", "rb"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_ruby_ruby_js").then(n.bind(n, "3zpf"))
            }), g({
                id: "rust",
                extensions: [".rs", ".rlib"],
                aliases: ["Rust", "rust"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_rust_rust_js").then(n.bind(n, "Alrz"))
            }), g({
                id: "sb",
                extensions: [".sb"],
                aliases: ["Small Basic", "sb"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_sb_sb_js").then(n.bind(n, "PDy2"))
            }), g({
                id: "scala",
                extensions: [".scala", ".sc", ".sbt"],
                aliases: ["Scala", "scala", "SBT", "Sbt", "sbt", "Dotty", "dotty"],
                mimetypes: ["text/x-scala-source", "text/x-scala", "text/x-sbt", "text/x-dotty"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_scala_scala_js").then(n.bind(n, "LzzT"))
            }), g({
                id: "scheme",
                extensions: [".scm", ".ss", ".sch", ".rkt"],
                aliases: ["scheme", "Scheme"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_scheme_scheme_js").then(n.bind(n, "Hi9d"))
            }), g({
                id: "scss",
                extensions: [".scss"],
                aliases: ["Sass", "sass", "scss"],
                mimetypes: ["text/x-scss", "text/scss"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_scss_scss_js").then(n.bind(n, "8utN"))
            }), g({
                id: "shell",
                extensions: [".sh", ".bash"],
                aliases: ["Shell", "sh"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_shell_shell_js").then(n.bind(n, "vHmX"))
            }), g({
                id: "sol",
                extensions: [".sol"],
                aliases: ["sol", "solidity", "Solidity"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_solidity_solidity_js").then(n.bind(n, "5ScZ"))
            }), g({
                id: "aes",
                extensions: [".aes"],
                aliases: ["aes", "sophia", "Sophia"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_sophia_sophia_js").then(n.bind(n, "wuhp"))
            }), g({
                id: "sparql",
                extensions: [".rq"],
                aliases: ["sparql", "SPARQL"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_sparql_sparql_js").then(n.bind(n, "Lcy7"))
            }), g({
                id: "sql",
                extensions: [".sql"],
                aliases: ["SQL"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_sql_sql_js").then(n.bind(n, "fq0Q"))
            }), g({
                id: "st",
                extensions: [".st", ".iecst", ".iecplc", ".lc3lib", ".TcPOU", ".TcDUT", ".TcGVL", ".TcIO"],
                aliases: ["StructuredText", "scl", "stl"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_st_st_js").then(n.bind(n, "xrT6"))
            }), g({
                id: "swift",
                aliases: ["Swift", "swift"],
                extensions: [".swift"],
                mimetypes: ["text/swift"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_swift_swift_js").then(n.bind(n, "/vTF"))
            }), g({
                id: "systemverilog",
                extensions: [".sv", ".svh"],
                aliases: ["SV", "sv", "SystemVerilog", "systemverilog"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_systemverilog_system-59a754").then(n.bind(n, "fMzT"))
            }), g({
                id: "verilog",
                extensions: [".v", ".vh"],
                aliases: ["V", "v", "Verilog", "verilog"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_systemverilog_system-59a754").then(n.bind(n, "fMzT"))
            }), g({
                id: "tcl",
                extensions: [".tcl"],
                aliases: ["tcl", "Tcl", "tcltk", "TclTk", "tcl/tk", "Tcl/Tk"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_tcl_tcl_js").then(n.bind(n, "iHIj"))
            }), g({
                id: "twig",
                extensions: [".twig"],
                aliases: ["Twig", "twig"],
                mimetypes: ["text/x-twig"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_twig_twig_js").then(n.bind(n, "dAvT"))
            }), g({
                id: "typescript",
                extensions: [".ts", ".tsx", ".cts", ".mts"],
                aliases: ["TypeScript", "ts", "typescript"],
                mimetypes: ["text/typescript"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_typescript_typescript_js").then(n.bind(n, "4DN9"))
            }), g({
                id: "typespec",
                extensions: [".tsp"],
                aliases: ["TypeSpec"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_typespec_typespec_js").then(n.bind(n, "XCLm"))
            }), g({
                id: "vb",
                extensions: [".vb"],
                aliases: ["Visual Basic", "vb"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_vb_vb_js").then(n.bind(n, "dwmO"))
            }), g({
                id: "wgsl",
                extensions: [".wgsl"],
                aliases: ["WebGPU Shading Language", "WGSL", "wgsl"],
                loader: () => n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-languages_wgsl_wgsl_js").then(n.bind(n, "n3uP"))
            }), g({
                id: "xml",
                extensions: [".xml", ".xsd", ".dtd", ".ascx", ".csproj", ".config", ".props", ".targets", ".wxi", ".wxl", ".wxs", ".xaml", ".svg", ".svgz", ".opf", ".xslt", ".xsl"],
                firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
                aliases: ["XML", "xml"],
                mimetypes: ["text/xml", "application/xml", "application/xaml+xml", "application/xml-dtd"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_xml_xml_js").then(n.bind(n, "RoTF"))
            }), g({
                id: "yaml",
                extensions: [".yaml", ".yml"],
                aliases: ["YAML", "yaml", "YML", "yml"],
                mimetypes: ["application/x-yaml", "text/x-yaml"],
                loader: () => n.e("node_modules_codingame_monaco-vscode-standalone-languages_yaml_yaml_js").then(n.bind(n, "JzHK"))
            })
        },
        "098V": (e, t, n) => {
            "use strict";
            n.d(t, {
                TG: () => h
            });
            var r = n("4Jew"),
                a = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t, n, r) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of o(t)) s.call(e, n) || "default" === n || a(e, n, {
                        get: () => t[n],
                        enumerable: !(r = i(t, n)) || r.enumerable
                    })
            })(l, r);
            var c = (e => (e[e.None = 0] = "None", e[e.CommonJS = 1] = "CommonJS", e[e.false = 2] = "false", e[e.UMD = 3] = "UMD", e[e.System = 4] = "System", e[e.ES2015 = 5] = "ES2015", e[e.ESNext = 99] = "ESNext", e))(c || {}),
                d = (e => (e[e.None = 0] = "None", e[e.Preserve = 1] = "Preserve", e[e.React = 2] = "React", e[e.ReactNative = 3] = "ReactNative", e[e.ReactJSX = 4] = "ReactJSX", e[e.ReactJSXDev = 5] = "ReactJSXDev", e))(d || {}),
                u = (e => (e[e.CarriageReturnLineFeed = 0] = "CarriageReturnLineFeed", e[e.LineFeed = 1] = "LineFeed", e))(u || {}),
                g = (e => (e[e.ES3 = 0] = "ES3", e[e.ES5 = 1] = "ES5", e[e.ES2015 = 2] = "ES2015", e[e.ES2016 = 3] = "ES2016", e[e.ES2017 = 4] = "ES2017", e[e.ES2018 = 5] = "ES2018", e[e.ES2019 = 6] = "ES2019", e[e.ES2020 = 7] = "ES2020", e[e.ESNext = 99] = "ESNext", e[e.JSON = 100] = "JSON", e[e.Latest = 99] = "Latest", e))(g || {}),
                p = (e => (e[e.Classic = 1] = "Classic", e[e.NodeJs = 2] = "NodeJs", e))(p || {}),
                m = class {
                    constructor(e, t, n, r, a) {
                        this._onDidChange = new l.Emitter, this._onDidExtraLibsChange = new l.Emitter, this._extraLibs = Object.create(null), this._removedExtraLibs = Object.create(null), this._eagerModelSync = !1, this.setCompilerOptions(e), this.setDiagnosticsOptions(t), this.setWorkerOptions(n), this.setInlayHintsOptions(r), this.setModeConfiguration(a), this._onDidExtraLibsChangeTimeout = -1
                    }
                    get onDidChange() {
                        return this._onDidChange.event
                    }
                    get onDidExtraLibsChange() {
                        return this._onDidExtraLibsChange.event
                    }
                    get modeConfiguration() {
                        return this._modeConfiguration
                    }
                    get workerOptions() {
                        return this._workerOptions
                    }
                    get inlayHintsOptions() {
                        return this._inlayHintsOptions
                    }
                    getExtraLibs() {
                        return this._extraLibs
                    }
                    addExtraLib(e, t) {
                        let n;
                        if (n = void 0 === t ? `ts:extralib-${Math.random().toString(36).substring(2,15)}` : t, this._extraLibs[n] && this._extraLibs[n].content === e) return {
                            dispose: () => {}
                        };
                        let r = 1;
                        return this._removedExtraLibs[n] && (r = this._removedExtraLibs[n] + 1), this._extraLibs[n] && (r = this._extraLibs[n].version + 1), this._extraLibs[n] = {
                            content: e,
                            version: r
                        }, this._fireOnDidExtraLibsChangeSoon(), {
                            dispose: () => {
                                let e = this._extraLibs[n];
                                e && e.version === r && (delete this._extraLibs[n], this._removedExtraLibs[n] = r, this._fireOnDidExtraLibsChangeSoon())
                            }
                        }
                    }
                    setExtraLibs(e) {
                        for (const e in this._extraLibs) this._removedExtraLibs[e] = this._extraLibs[e].version;
                        if (this._extraLibs = Object.create(null), e && e.length > 0)
                            for (const t of e) {
                                const e = t.filePath || `ts:extralib-${Math.random().toString(36).substring(2,15)}`,
                                    n = t.content;
                                let r = 1;
                                this._removedExtraLibs[e] && (r = this._removedExtraLibs[e] + 1), this._extraLibs[e] = {
                                    content: n,
                                    version: r
                                }
                            }
                        this._fireOnDidExtraLibsChangeSoon()
                    }
                    _fireOnDidExtraLibsChangeSoon() {
                        -1 === this._onDidExtraLibsChangeTimeout && (this._onDidExtraLibsChangeTimeout = window.setTimeout((() => {
                            this._onDidExtraLibsChangeTimeout = -1, this._onDidExtraLibsChange.fire(void 0)
                        }), 0))
                    }
                    getCompilerOptions() {
                        return this._compilerOptions
                    }
                    setCompilerOptions(e) {
                        this._compilerOptions = e || Object.create(null), this._onDidChange.fire(void 0)
                    }
                    getDiagnosticsOptions() {
                        return this._diagnosticsOptions
                    }
                    setDiagnosticsOptions(e) {
                        this._diagnosticsOptions = e || Object.create(null), this._onDidChange.fire(void 0)
                    }
                    setWorkerOptions(e) {
                        this._workerOptions = e || Object.create(null), this._onDidChange.fire(void 0)
                    }
                    setInlayHintsOptions(e) {
                        this._inlayHintsOptions = e || Object.create(null), this._onDidChange.fire(void 0)
                    }
                    setMaximumWorkerIdleTime(e) {}
                    setEagerModelSync(e) {
                        this._eagerModelSync = e
                    }
                    getEagerModelSync() {
                        return this._eagerModelSync
                    }
                    setModeConfiguration(e) {
                        this._modeConfiguration = e || Object.create(null), this._onDidChange.fire(void 0)
                    }
                },
                f = {
                    completionItems: !0,
                    hovers: !0,
                    documentSymbols: !0,
                    definitions: !0,
                    references: !0,
                    documentHighlights: !0,
                    rename: !0,
                    diagnostics: !0,
                    documentRangeFormattingEdits: !0,
                    signatureHelp: !0,
                    onTypeFormattingEdits: !0,
                    codeActions: !0,
                    inlayHints: !0
                },
                h = new m({
                    allowNonTsExtensions: !0,
                    target: 99
                }, {
                    noSemanticValidation: !1,
                    noSyntaxValidation: !1,
                    onlyVisible: !1
                }, {}, {}, f),
                _ = new m({
                    allowNonTsExtensions: !0,
                    allowJs: !0,
                    target: 99
                }, {
                    noSemanticValidation: !0,
                    noSyntaxValidation: !1,
                    onlyVisible: !1
                }, {}, {}, f);

            function x() {
                return n.e("defaultVendors-node_modules_codingame_monaco-vscode-standalone-typescript-language-features_t-43e10c").then(n.bind(n, "FCH9"))
            }
            l.languages.typescript = {
                ModuleKind: c,
                JsxEmit: d,
                NewLineKind: u,
                ScriptTarget: g,
                ModuleResolutionKind: p,
                typescriptVersion: "5.4.5",
                typescriptDefaults: h,
                javascriptDefaults: _,
                getTypeScriptWorker: () => x().then((e => e.getTypeScriptWorker())),
                getJavaScriptWorker: () => x().then((e => e.getJavaScriptWorker()))
            }, l.languages.onLanguage("typescript", (() => x().then((e => e.setupTypeScript(h))))), l.languages.onLanguage("javascript", (() => x().then((e => e.setupJavaScript(_)))))
        },
        LWRp: (e, t, n) => {
            "use strict";
            n.d(t, {
                fG: () => Le
            });
            var r = n("t5wJ"),
                a = (n("eptZ"), n("D7Te"), n("j/1u")),
                i = n("ZqYs"),
                o = n("hL8p"),
                s = n("oVnE"),
                l = n("MQtx"),
                c = n("pLPy"),
                d = n("spPY"),
                u = n("LE1I"),
                g = n("0P4T"),
                p = n("Ex4m"),
                m = n("G9TL"),
                f = n("qovG"),
                h = n("Vvlp"),
                _ = n("3EbT"),
                x = n("eOE0"),
                b = n("Ahbz"),
                k = n("naIR"),
                v = n("7icl"),
                y = n("yJ/l"),
                w = n("PZtK"),
                E = n("DF9R"),
                S = n("6zxw"),
                T = n("opu4"),
                A = n("YVM4"),
                C = n("z7id"),
                j = n("msgI"),
                R = n("Ja5U"),
                O = n("wVq3");
            const L = new T.CR;
            class I extends E.x {
                constructor() {
                    super(...arguments), this._extApiImpl = new S.C1
                }
                async getApi(e) {
                    const [t, n] = await Promise.all([this.getExtensionRegistry(), this._extHostConfiguration.getConfigProvider()]), r = {
                        mine: t,
                        all: this._globalRegistry
                    };
                    if (null == e) return null == this._defaultApiImpl && (this._defaultApiImpl = this._apiFactory(u.nF, r, n)), this._defaultApiImpl;
                    const a = t.getExtensionDescription(e);
                    if (null == a) throw new Error(`Extension ${e} does not exist or is disabled`);
                    let i = this._extApiImpl.get(a.identifier);
                    return null == i && (i = this._apiFactory(a, r, n), this._extApiImpl.set(a.identifier, i)), i
                }
            }(0, y.zr)(d.k2, I, 0), (0, y.zr)(w.L, w.j, 0);
            const P = new class {
                constructor() {
                    this.pid = void 0, this.exit = C.Jc
                }
                async exists(e) {
                    return !0
                }
                async realpath(e) {
                    return e
                }
            };
            let M = class {
                constructor(e, t, n, r, a, i, o, l, c, d, u) {
                    this.runningLocation = e, this.startup = t, this._initDataProvider = n, this._telemetryService = r, this._contextService = a, this._labelService = i, this._logService = o, this._loggerService = l, this._environmentService = c, this._productService = d, this._userDataProfilesService = u, this.remoteAuthority = null, this.extensions = null, this.pid = null, this.onExit = v.ju.None, this._protocolPromise = null, this._extensionHostLogsLocation = (0, s.Vo)(this._environmentService.extHostLogsPath, "local")
                }
                async start() {
                    return null == this._protocolPromise && (this._protocolPromise = this._start()), this._protocolPromise
                }
                async _start() {
                    const [e, t] = function() {
                        const e = new i.Uy,
                            t = new i.Uy;
                        class n {
                            constructor(e, t) {
                                this.emitterIn = e, this.emitterOut = t, this.onMessage = this.emitterIn.event
                            }
                            send(e) {
                                this.emitterOut.fire(e)
                            }
                        }
                        return [new n(e, t), new n(t, e)]
                    }(), n = await this._createExtHostInitData(), r = new a.m(t, n, P, null).getExtHostExtensionService();
                    return await L.complete((e => r.getApi(e))), e
                }
                async _createExtHostInitData() {
                    const e = await this._initDataProvider.getInitData();
                    this.extensions = e.extensions;
                    const t = this._contextService.getWorkspace(),
                        n = this._productService.extensionsGallery ? .nlsBaseUrl;
                    let r;
                    return null == n || null == this._productService.commit || c.SQ.isDefaultVariant() || (r = k.ov.joinPath(k.ov.parse(n), this._productService.commit, this._productService.version, c.SQ.value())), {
                        commit: this._productService.commit,
                        version: this._productService.version,
                        quality: this._productService.quality,
                        parentPid: 0,
                        environment: {
                            isExtensionDevelopmentDebug: this._environmentService.debugRenderer,
                            appName: this._productService.nameLong,
                            appHost: this._productService.embedderIdentifier ? ? (c.$L ? "web" : "desktop"),
                            appUriScheme: this._productService.urlProtocol,
                            appLanguage: c.dK,
                            extensionTelemetryLogResource: this._environmentService.extHostTelemetryLogFile,
                            isExtensionTelemetryLoggingOnly: (0, o.jn)(this._productService, this._environmentService),
                            extensionDevelopmentLocationURI: this._environmentService.extensionDevelopmentLocationURI,
                            extensionTestsLocationURI: this._environmentService.extensionTestsLocationURI,
                            globalStorageHome: this._userDataProfilesService.defaultProfile.globalStorageHome,
                            workspaceStorageHome: this._environmentService.workspaceStorageHome,
                            extensionLogLevel: this._environmentService.extensionLogLevel
                        },
                        workspace: 1 === this._contextService.getWorkbenchState() ? void 0 : {
                            configuration: t.configuration ? ? void 0,
                            id: t.id,
                            name: this._labelService.getWorkspaceLabel(t),
                            transient: t.transient
                        },
                        consoleForward: {
                            includeStack: !1,
                            logNative: this._environmentService.debugRenderer
                        },
                        extensions: e.extensions.toSnapshot(),
                        nlsBaseUrl: r,
                        telemetryInfo: {
                            sessionId: this._telemetryService.sessionId,
                            machineId: this._telemetryService.machineId,
                            firstSessionDate: this._telemetryService.firstSessionDate,
                            msftInternal: this._telemetryService.msftInternal,
                            sqmId: this._telemetryService.sqmId,
                            devDeviceId: this._telemetryService.devDeviceId
                        },
                        logLevel: this._logService.getLevel(),
                        loggers: [...this._loggerService.getRegisteredLoggers()],
                        logsLocation: this._extensionHostLogsLocation,
                        autoStart: 1 === this.startup,
                        remote: {
                            authority: this._environmentService.remoteAuthority,
                            connectionData: null,
                            isRemote: !1
                        },
                        uiKind: c.$L ? l.D$.Web : l.D$.Desktop
                    }
                }
                getInspectPort() {}
                enableInspectPort() {
                    return Promise.resolve(!1)
                }
                dispose() {}
            };
            async function D(e) {
                return (await L.p)(e)
            }
            M = (0, r.g)([(0, r.f)(3, p.b), (0, r.f)(4, m.e), (0, r.f)(5, f.e), (0, r.f)(6, h.V), (0, r.f)(7, h.y), (0, r.f)(8, _.y), (0, r.f)(9, x.a), (0, r.f)(10, b.l)], M), (0, A.Wu)(M), (0, j.s4)(D), (0, O.zV)((async e => {
                e.get(g.Q), (0, R.setDefaultApi)(await D())
            }));
            var N = n("Sfzi"),
                z = n("9r3b"),
                q = n("KAWp"),
                $ = n("cEp3"),
                F = n("p044"),
                V = n("GYhP"),
                U = n("OYZR");
            class B {
                constructor() {
                    this._provider = new V.c, this.onDidChange = this._provider.onDidChange
                }
                addStatus(e) {
                    return this._provider.register(e.selector, e)
                }
                getLanguageStatus(e) {
                    return this._provider.ordered(e).sort(((e, t) => {
                        let n = t.severity - e.severity;
                        return 0 === n && (n = (0, F.qu)(e.source, t.source)), 0 === n && (n = (0, F.qu)(e.id, t.id)), n
                    }))
                }
            }
            var Z, H = n("0jfT"),
                G = n("tXhF"),
                K = n("yFKF"),
                X = n("oaey"),
                W = n("K30K"),
                J = n("9pA0"),
                Q = n("KgBx"),
                Y = n("sttp"),
                ee = n("gQuC"),
                te = n("/+VE"),
                ne = n("BL4i"),
                re = n("6tPK"),
                ae = n("RVdl"),
                ie = n("ZZ+O"),
                oe = n("ziTh");
            const se = "vs/workbench/contrib/codeEditor/common/languageConfigurationExtensionPoint";

            function le(e) {
                if (!Array.isArray(e)) return !1;
                for (let t = 0, n = e.length; t < n; t++)
                    if ("string" != typeof e[t]) return !1;
                return !0
            }

            function ce(e) {
                return le(e) && 2 === e.length
            }
            let de = Z = class extends ae.JT {
                constructor(e, t, n, r) {
                    super(), this._languageService = e, this._extensionResourceLoaderService = t, this._extensionService = n, this._languageConfigurationService = r, this._done = new Map, this._register(this._languageService.onDidRequestBasicLanguageFeatures((async e => {
                        this._extensionService.whenInstalledExtensionsRegistered().then((() => {
                            this._loadConfigurationsForMode(e)
                        }))
                    }))), this._register(this._languageService.onDidChange((() => {
                        for (const [e] of this._done) this._loadConfigurationsForMode(e)
                    })))
                }
                async _loadConfigurationsForMode(e) {
                    const t = this._languageService.getConfigurationFiles(e),
                        n = (0, re.vp)(t.map((e => e.toString())));
                    if (this._done.get(e) === n) return;
                    this._done.set(e, n);
                    const r = await Promise.all(t.map((e => this._readConfigFile(e))));
                    for (const t of r) this._handleConfig(e, t)
                }
                async _readConfigFile(e) {
                    try {
                        const t = await this._extensionResourceLoaderService.readExtensionResource(e),
                            n = [];
                        let r = (0, X.Qc)(t, n);
                        return n.length && oe.error((0, K.C$)(se, 0, "Errors parsing {0}: {1}", e.toString(), n.map((e => `[${e.offset}, ${e.length}] ${(0,te.i)(e.error)}`)).join("\n"))), "object" !== (0, X.jo)(r) && (oe.error((0, K.C$)(se, 1, "{0}: Invalid format, JSON object expected.", e.toString())), r = {}), r
                    } catch (e) {
                        return oe.error(e), {}
                    }
                }
                static _extractValidCommentRule(e, t) {
                    const n = t.comments;
                    if (void 0 === n) return;
                    if (!(0, W.Kn)(n)) return void oe.warn(`[${e}]: language configuration: expected \`comments\` to be an object.`);
                    let r;
                    return void 0 !== n.lineComment && ("string" != typeof n.lineComment ? oe.warn(`[${e}]: language configuration: expected \`comments.lineComment\` to be a string.`) : (r = r || {}, r.lineComment = n.lineComment)), void 0 !== n.blockComment && (ce(n.blockComment) ? (r = r || {}, r.blockComment = n.blockComment) : oe.warn(`[${e}]: language configuration: expected \`comments.blockComment\` to be an array of two strings.`)), r
                }
                static _extractValidBrackets(e, t) {
                    const n = t.brackets;
                    if (void 0 === n) return;
                    if (!Array.isArray(n)) return void oe.warn(`[${e}]: language configuration: expected \`brackets\` to be an array.`);
                    let r;
                    for (let t = 0, a = n.length; t < a; t++) {
                        const a = n[t];
                        ce(a) ? (r = r || [], r.push(a)) : oe.warn(`[${e}]: language configuration: expected \`brackets[${t}]\` to be an array of two strings.`)
                    }
                    return r
                }
                static _extractValidAutoClosingPairs(e, t) {
                    const n = t.autoClosingPairs;
                    if (void 0 === n) return;
                    if (!Array.isArray(n)) return void oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs\` to be an array.`);
                    let r;
                    for (let t = 0, a = n.length; t < a; t++) {
                        const a = n[t];
                        if (Array.isArray(a)) {
                            if (!ce(a)) {
                                oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${t}]\` to be an array of two strings or an object.`);
                                continue
                            }
                            r = r || [], r.push({
                                open: a[0],
                                close: a[1]
                            })
                        } else {
                            if (!(0, W.Kn)(a)) {
                                oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${t}]\` to be an array of two strings or an object.`);
                                continue
                            }
                            if ("string" != typeof a.open) {
                                oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${t}].open\` to be a string.`);
                                continue
                            }
                            if ("string" != typeof a.close) {
                                oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${t}].close\` to be a string.`);
                                continue
                            }
                            if (void 0 !== a.notIn && !le(a.notIn)) {
                                oe.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${t}].notIn\` to be a string array.`);
                                continue
                            }
                            r = r || [], r.push({
                                open: a.open,
                                close: a.close,
                                notIn: a.notIn
                            })
                        }
                    }
                    return r
                }
                static _extractValidSurroundingPairs(e, t) {
                    const n = t.surroundingPairs;
                    if (void 0 === n) return;
                    if (!Array.isArray(n)) return void oe.warn(`[${e}]: language configuration: expected \`surroundingPairs\` to be an array.`);
                    let r;
                    for (let t = 0, a = n.length; t < a; t++) {
                        const a = n[t];
                        if (Array.isArray(a)) {
                            if (!ce(a)) {
                                oe.warn(`[${e}]: language configuration: expected \`surroundingPairs[${t}]\` to be an array of two strings or an object.`);
                                continue
                            }
                            r = r || [], r.push({
                                open: a[0],
                                close: a[1]
                            })
                        } else {
                            if (!(0, W.Kn)(a)) {
                                oe.warn(`[${e}]: language configuration: expected \`surroundingPairs[${t}]\` to be an array of two strings or an object.`);
                                continue
                            }
                            if ("string" != typeof a.open) {
                                oe.warn(`[${e}]: language configuration: expected \`surroundingPairs[${t}].open\` to be a string.`);
                                continue
                            }
                            if ("string" != typeof a.close) {
                                oe.warn(`[${e}]: language configuration: expected \`surroundingPairs[${t}].close\` to be a string.`);
                                continue
                            }
                            r = r || [], r.push({
                                open: a.open,
                                close: a.close
                            })
                        }
                    }
                    return r
                }
                static _extractValidColorizedBracketPairs(e, t) {
                    const n = t.colorizedBracketPairs;
                    if (void 0 === n) return;
                    if (!Array.isArray(n)) return void oe.warn(`[${e}]: language configuration: expected \`colorizedBracketPairs\` to be an array.`);
                    const r = [];
                    for (let t = 0, a = n.length; t < a; t++) {
                        const a = n[t];
                        ce(a) ? r.push([a[0], a[1]]) : oe.warn(`[${e}]: language configuration: expected \`colorizedBracketPairs[${t}]\` to be an array of two strings.`)
                    }
                    return r
                }
                static _extractValidOnEnterRules(e, t) {
                    const n = t.onEnterRules;
                    if (void 0 === n) return;
                    if (!Array.isArray(n)) return void oe.warn(`[${e}]: language configuration: expected \`onEnterRules\` to be an array.`);
                    let r;
                    for (let t = 0, a = n.length; t < a; t++) {
                        const a = n[t];
                        if (!(0, W.Kn)(a)) {
                            oe.warn(`[${e}]: language configuration: expected \`onEnterRules[${t}]\` to be an object.`);
                            continue
                        }
                        if (!(0, W.Kn)(a.action)) {
                            oe.warn(`[${e}]: language configuration: expected \`onEnterRules[${t}].action\` to be an object.`);
                            continue
                        }
                        let i;
                        if ("none" === a.action.indent) i = J.wU.None;
                        else if ("indent" === a.action.indent) i = J.wU.Indent;
                        else if ("indentOutdent" === a.action.indent) i = J.wU.IndentOutdent;
                        else {
                            if ("outdent" !== a.action.indent) {
                                oe.warn(`[${e}]: language configuration: expected \`onEnterRules[${t}].action.indent\` to be 'none', 'indent', 'indentOutdent' or 'outdent'.`);
                                continue
                            }
                            i = J.wU.Outdent
                        }
                        const o = {
                            indentAction: i
                        };
                        a.action.appendText && ("string" == typeof a.action.appendText ? o.appendText = a.action.appendText : oe.warn(`[${e}]: language configuration: expected \`onEnterRules[${t}].action.appendText\` to be undefined or a string.`)), a.action.removeText && ("number" == typeof a.action.removeText ? o.removeText = a.action.removeText : oe.warn(`[${e}]: language configuration: expected \`onEnterRules[${t}].action.removeText\` to be undefined or a number.`));
                        const s = this._parseRegex(e, `onEnterRules[${t}].beforeText`, a.beforeText);
                        if (!s) continue;
                        const l = {
                            beforeText: s,
                            action: o
                        };
                        if (a.afterText) {
                            const n = this._parseRegex(e, `onEnterRules[${t}].afterText`, a.afterText);
                            n && (l.afterText = n)
                        }
                        if (a.previousLineText) {
                            const n = this._parseRegex(e, `onEnterRules[${t}].previousLineText`, a.previousLineText);
                            n && (l.previousLineText = n)
                        }
                        r = r || [], r.push(l)
                    }
                    return r
                }
                static extractValidConfig(e, t) {
                    const n = this._extractValidCommentRule(e, t),
                        r = this._extractValidBrackets(e, t),
                        a = this._extractValidAutoClosingPairs(e, t),
                        i = this._extractValidSurroundingPairs(e, t),
                        o = this._extractValidColorizedBracketPairs(e, t),
                        s = "string" == typeof t.autoCloseBefore ? t.autoCloseBefore : void 0,
                        l = t.wordPattern ? this._parseRegex(e, "wordPattern", t.wordPattern) : void 0,
                        c = t.indentationRules ? this._mapIndentationRules(e, t.indentationRules) : void 0;
                    let d;
                    if (t.folding) {
                        const n = t.folding.markers,
                            r = n && n.start ? this._parseRegex(e, "folding.markers.start", n.start) : void 0,
                            a = n && n.end ? this._parseRegex(e, "folding.markers.end", n.end) : void 0,
                            i = r && a ? {
                                start: r,
                                end: a
                            } : void 0;
                        d = {
                            offSide: t.folding.offSide,
                            markers: i
                        }
                    }
                    return {
                        comments: n,
                        brackets: r,
                        wordPattern: l,
                        indentationRules: c,
                        onEnterRules: this._extractValidOnEnterRules(e, t),
                        autoClosingPairs: a,
                        surroundingPairs: i,
                        colorizedBracketPairs: o,
                        autoCloseBefore: s,
                        folding: d,
                        __electricCharacterSupport: void 0
                    }
                }
                _handleConfig(e, t) {
                    const n = Z.extractValidConfig(e, t);
                    this._languageConfigurationService.register(e, n, 50)
                }
                static _parseRegex(e, t, n) {
                    if ("string" == typeof n) try {
                        return new RegExp(n, "")
                    } catch (n) {
                        return void oe.warn(`[${e}]: Invalid regular expression in \`${t}\`: `, n)
                    }
                    if ((0, W.Kn)(n)) {
                        if ("string" != typeof n.pattern) return void oe.warn(`[${e}]: language configuration: expected \`${t}.pattern\` to be a string.`);
                        if (void 0 !== n.flags && "string" != typeof n.flags) return void oe.warn(`[${e}]: language configuration: expected \`${t}.flags\` to be a string.`);
                        try {
                            return new RegExp(n.pattern, n.flags)
                        } catch (n) {
                            return void oe.warn(`[${e}]: Invalid regular expression in \`${t}\`: `, n)
                        }
                    }
                    oe.warn(`[${e}]: language configuration: expected \`${t}\` to be a string or an object.`)
                }
                static _mapIndentationRules(e, t) {
                    const n = this._parseRegex(e, "indentationRules.increaseIndentPattern", t.increaseIndentPattern);
                    if (!n) return;
                    const r = this._parseRegex(e, "indentationRules.decreaseIndentPattern", t.decreaseIndentPattern);
                    if (!r) return;
                    const a = {
                        increaseIndentPattern: n,
                        decreaseIndentPattern: r
                    };
                    return t.indentNextLinePattern && (a.indentNextLinePattern = this._parseRegex(e, "indentationRules.indentNextLinePattern", t.indentNextLinePattern)), t.unIndentedLinePattern && (a.unIndentedLinePattern = this._parseRegex(e, "indentationRules.unIndentedLinePattern", t.unIndentedLinePattern)), a
                }
            };
            de = Z = (0, r.g)([(0, r.f)(0, $.O), (0, r.f)(1, ne.S), (0, r.f)(2, g.Q), (0, r.f)(3, Q.c_)], de);
            const ue = {
                allowComments: !0,
                allowTrailingCommas: !0,
                default: {
                    comments: {
                        blockComment: ["/*", "*/"],
                        lineComment: "//"
                    },
                    brackets: [
                        ["(", ")"],
                        ["[", "]"],
                        ["{", "}"]
                    ],
                    autoClosingPairs: [
                        ["(", ")"],
                        ["[", "]"],
                        ["{", "}"]
                    ],
                    surroundingPairs: [
                        ["(", ")"],
                        ["[", "]"],
                        ["{", "}"]
                    ]
                },
                definitions: {
                    openBracket: {
                        type: "string",
                        description: (0, K.C$)(se, 2, "The opening bracket character or string sequence.")
                    },
                    closeBracket: {
                        type: "string",
                        description: (0, K.C$)(se, 3, "The closing bracket character or string sequence.")
                    },
                    bracketPair: {
                        type: "array",
                        items: [{
                            $ref: "#/definitions/openBracket"
                        }, {
                            $ref: "#/definitions/closeBracket"
                        }]
                    }
                },
                properties: {
                    comments: {
                        default: {
                            blockComment: ["/*", "*/"],
                            lineComment: "//"
                        },
                        description: (0, K.C$)(se, 4, "Defines the comment symbols"),
                        type: "object",
                        properties: {
                            blockComment: {
                                type: "array",
                                description: (0, K.C$)(se, 5, "Defines how block comments are marked."),
                                items: [{
                                    type: "string",
                                    description: (0, K.C$)(se, 6, "The character sequence that starts a block comment.")
                                }, {
                                    type: "string",
                                    description: (0, K.C$)(se, 7, "The character sequence that ends a block comment.")
                                }]
                            },
                            lineComment: {
                                type: "string",
                                description: (0, K.C$)(se, 8, "The character sequence that starts a line comment.")
                            }
                        }
                    },
                    brackets: {
                        default: [
                            ["(", ")"],
                            ["[", "]"],
                            ["{", "}"]
                        ],
                        markdownDescription: (0, K.C$)(se, 9, "Defines the bracket symbols that increase or decrease the indentation. When bracket pair colorization is enabled and {0} is not defined, this also defines the bracket pairs that are colorized by their nesting level.", "`colorizedBracketPairs`"),
                        type: "array",
                        items: {
                            $ref: "#/definitions/bracketPair"
                        }
                    },
                    colorizedBracketPairs: {
                        default: [
                            ["(", ")"],
                            ["[", "]"],
                            ["{", "}"]
                        ],
                        markdownDescription: (0, K.C$)(se, 10, "Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled. Any brackets included here that are not included in {0} will be automatically included in {0}.", "`brackets`"),
                        type: "array",
                        items: {
                            $ref: "#/definitions/bracketPair"
                        }
                    },
                    autoClosingPairs: {
                        default: [
                            ["(", ")"],
                            ["[", "]"],
                            ["{", "}"]
                        ],
                        description: (0, K.C$)(se, 11, "Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically."),
                        type: "array",
                        items: {
                            oneOf: [{
                                $ref: "#/definitions/bracketPair"
                            }, {
                                type: "object",
                                properties: {
                                    open: {
                                        $ref: "#/definitions/openBracket"
                                    },
                                    close: {
                                        $ref: "#/definitions/closeBracket"
                                    },
                                    notIn: {
                                        type: "array",
                                        description: (0, K.C$)(se, 12, "Defines a list of scopes where the auto pairs are disabled."),
                                        items: {
                                            enum: ["string", "comment"]
                                        }
                                    }
                                }
                            }]
                        }
                    },
                    autoCloseBefore: {
                        default: ";:.,=}])> \n\t",
                        description: (0, K.C$)(se, 13, "Defines what characters must be after the cursor in order for bracket or quote autoclosing to occur when using the 'languageDefined' autoclosing setting. This is typically the set of characters which can not start an expression."),
                        type: "string"
                    },
                    surroundingPairs: {
                        default: [
                            ["(", ")"],
                            ["[", "]"],
                            ["{", "}"]
                        ],
                        description: (0, K.C$)(se, 14, "Defines the bracket pairs that can be used to surround a selected string."),
                        type: "array",
                        items: {
                            oneOf: [{
                                $ref: "#/definitions/bracketPair"
                            }, {
                                type: "object",
                                properties: {
                                    open: {
                                        $ref: "#/definitions/openBracket"
                                    },
                                    close: {
                                        $ref: "#/definitions/closeBracket"
                                    }
                                }
                            }]
                        }
                    },
                    wordPattern: {
                        default: "",
                        description: (0, K.C$)(se, 15, "Defines what is considered to be a word in the programming language."),
                        type: ["string", "object"],
                        properties: {
                            pattern: {
                                type: "string",
                                description: (0, K.C$)(se, 16, "The RegExp pattern used to match words."),
                                default: ""
                            },
                            flags: {
                                type: "string",
                                description: (0, K.C$)(se, 17, "The RegExp flags used to match words."),
                                default: "g",
                                pattern: "^([gimuy]+)$",
                                patternErrorMessage: (0, K.C$)(se, 18, "Must match the pattern `/^([gimuy]+)$/`.")
                            }
                        }
                    },
                    indentationRules: {
                        default: {
                            increaseIndentPattern: "",
                            decreaseIndentPattern: ""
                        },
                        description: (0, K.C$)(se, 19, "The language's indentation settings."),
                        type: "object",
                        properties: {
                            increaseIndentPattern: {
                                type: ["string", "object"],
                                description: (0, K.C$)(se, 20, "If a line matches this pattern, then all the lines after it should be indented once (until another rule matches)."),
                                properties: {
                                    pattern: {
                                        type: "string",
                                        description: (0, K.C$)(se, 21, "The RegExp pattern for increaseIndentPattern."),
                                        default: ""
                                    },
                                    flags: {
                                        type: "string",
                                        description: (0, K.C$)(se, 22, "The RegExp flags for increaseIndentPattern."),
                                        default: "",
                                        pattern: "^([gimuy]+)$",
                                        patternErrorMessage: (0, K.C$)(se, 23, "Must match the pattern `/^([gimuy]+)$/`.")
                                    }
                                }
                            },
                            decreaseIndentPattern: {
                                type: ["string", "object"],
                                description: (0, K.C$)(se, 24, "If a line matches this pattern, then all the lines after it should be unindented once (until another rule matches)."),
                                properties: {
                                    pattern: {
                                        type: "string",
                                        description: (0, K.C$)(se, 25, "The RegExp pattern for decreaseIndentPattern."),
                                        default: ""
                                    },
                                    flags: {
                                        type: "string",
                                        description: (0, K.C$)(se, 26, "The RegExp flags for decreaseIndentPattern."),
                                        default: "",
                                        pattern: "^([gimuy]+)$",
                                        patternErrorMessage: (0, K.C$)(se, 27, "Must match the pattern `/^([gimuy]+)$/`.")
                                    }
                                }
                            },
                            indentNextLinePattern: {
                                type: ["string", "object"],
                                description: (0, K.C$)(se, 28, "If a line matches this pattern, then **only the next line** after it should be indented once."),
                                properties: {
                                    pattern: {
                                        type: "string",
                                        description: (0, K.C$)(se, 29, "The RegExp pattern for indentNextLinePattern."),
                                        default: ""
                                    },
                                    flags: {
                                        type: "string",
                                        description: (0, K.C$)(se, 30, "The RegExp flags for indentNextLinePattern."),
                                        default: "",
                                        pattern: "^([gimuy]+)$",
                                        patternErrorMessage: (0, K.C$)(se, 31, "Must match the pattern `/^([gimuy]+)$/`.")
                                    }
                                }
                            },
                            unIndentedLinePattern: {
                                type: ["string", "object"],
                                description: (0, K.C$)(se, 32, "If a line matches this pattern, then its indentation should not be changed and it should not be evaluated against the other rules."),
                                properties: {
                                    pattern: {
                                        type: "string",
                                        description: (0, K.C$)(se, 33, "The RegExp pattern for unIndentedLinePattern."),
                                        default: ""
                                    },
                                    flags: {
                                        type: "string",
                                        description: (0, K.C$)(se, 34, "The RegExp flags for unIndentedLinePattern."),
                                        default: "",
                                        pattern: "^([gimuy]+)$",
                                        patternErrorMessage: (0, K.C$)(se, 35, "Must match the pattern `/^([gimuy]+)$/`.")
                                    }
                                }
                            }
                        }
                    },
                    folding: {
                        type: "object",
                        description: (0, K.C$)(se, 36, "The language's folding settings."),
                        properties: {
                            offSide: {
                                type: "boolean",
                                description: (0, K.C$)(se, 37, "A language adheres to the off-side rule if blocks in that language are expressed by their indentation. If set, empty lines belong to the subsequent block.")
                            },
                            markers: {
                                type: "object",
                                description: (0, K.C$)(se, 38, "Language specific folding markers such as '#region' and '#endregion'. The start and end regexes will be tested against the contents of all lines and must be designed efficiently"),
                                properties: {
                                    start: {
                                        type: "string",
                                        description: (0, K.C$)(se, 39, "The RegExp pattern for the start marker. The regexp must start with '^'.")
                                    },
                                    end: {
                                        type: "string",
                                        description: (0, K.C$)(se, 40, "The RegExp pattern for the end marker. The regexp must start with '^'.")
                                    }
                                }
                            }
                        }
                    },
                    onEnterRules: {
                        type: "array",
                        description: (0, K.C$)(se, 41, "The language's rules to be evaluated when pressing Enter."),
                        items: {
                            type: "object",
                            description: (0, K.C$)(se, 41, "The language's rules to be evaluated when pressing Enter."),
                            required: ["beforeText", "action"],
                            properties: {
                                beforeText: {
                                    type: ["string", "object"],
                                    description: (0, K.C$)(se, 42, "This rule will only execute if the text before the cursor matches this regular expression."),
                                    properties: {
                                        pattern: {
                                            type: "string",
                                            description: (0, K.C$)(se, 43, "The RegExp pattern for beforeText."),
                                            default: ""
                                        },
                                        flags: {
                                            type: "string",
                                            description: (0, K.C$)(se, 44, "The RegExp flags for beforeText."),
                                            default: "",
                                            pattern: "^([gimuy]+)$",
                                            patternErrorMessage: (0, K.C$)(se, 45, "Must match the pattern `/^([gimuy]+)$/`.")
                                        }
                                    }
                                },
                                afterText: {
                                    type: ["string", "object"],
                                    description: (0, K.C$)(se, 46, "This rule will only execute if the text after the cursor matches this regular expression."),
                                    properties: {
                                        pattern: {
                                            type: "string",
                                            description: (0, K.C$)(se, 47, "The RegExp pattern for afterText."),
                                            default: ""
                                        },
                                        flags: {
                                            type: "string",
                                            description: (0, K.C$)(se, 48, "The RegExp flags for afterText."),
                                            default: "",
                                            pattern: "^([gimuy]+)$",
                                            patternErrorMessage: (0, K.C$)(se, 49, "Must match the pattern `/^([gimuy]+)$/`.")
                                        }
                                    }
                                },
                                previousLineText: {
                                    type: ["string", "object"],
                                    description: (0, K.C$)(se, 50, "This rule will only execute if the text above the line matches this regular expression."),
                                    properties: {
                                        pattern: {
                                            type: "string",
                                            description: (0, K.C$)(se, 51, "The RegExp pattern for previousLineText."),
                                            default: ""
                                        },
                                        flags: {
                                            type: "string",
                                            description: (0, K.C$)(se, 52, "The RegExp flags for previousLineText."),
                                            default: "",
                                            pattern: "^([gimuy]+)$",
                                            patternErrorMessage: (0, K.C$)(se, 53, "Must match the pattern `/^([gimuy]+)$/`.")
                                        }
                                    }
                                },
                                action: {
                                    type: ["string", "object"],
                                    description: (0, K.C$)(se, 54, "The action to execute."),
                                    required: ["indent"],
                                    default: {
                                        indent: "indent"
                                    },
                                    properties: {
                                        indent: {
                                            type: "string",
                                            description: (0, K.C$)(se, 55, "Describe what to do with the indentation"),
                                            default: "indent",
                                            enum: ["none", "indent", "indentOutdent", "outdent"],
                                            markdownEnumDescriptions: [(0, K.C$)(se, 56, "Insert new line and copy the previous line's indentation."), (0, K.C$)(se, 57, "Insert new line and indent once (relative to the previous line's indentation)."), (0, K.C$)(se, 58, "Insert two new lines:\n - the first one indented which will hold the cursor\n - the second one at the same indentation level"), (0, K.C$)(se, 59, "Insert new line and outdent once (relative to the previous line's indentation).")]
                                        },
                                        appendText: {
                                            type: "string",
                                            description: (0, K.C$)(se, 60, "Describes text to be appended after the new line and after the indentation."),
                                            default: ""
                                        },
                                        removeText: {
                                            type: "number",
                                            description: (0, K.C$)(se, 61, "Describes the number of characters to remove from the new line's indentation."),
                                            default: 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            ee.B.as(Y.I.JSONContribution).registerSchema("vscode://schemas/language-configuration", ue);
            let ge = class {
                static {
                    this.ID = "workbench.contrib.languageConfigurationExtensionPoint"
                }
                constructor(e) {
                    this.instantiationService = e, this.instantiationService.createInstance(de)
                }
            };
            ge = (0, r.g)([(0, r.f)(0, U.TG)], ge), (0, ie.dz)(ge.ID, ge, ie.U9.BlockStartup);
            var pe = n("hS7u"),
                me = n("VMFB"),
                fe = n("IqZY"),
                he = n("QzVU"),
                _e = n("muWB"),
                xe = n("PTqS"),
                be = n("fHhA"),
                ke = n("bjzV"),
                ve = n("nt9+"),
                ye = n("7pI6");
            let we = class extends ae.JT {
                constructor(e, t, n) {
                    super(), this._modelService = e, this._textModelService = t, this._undoRedoService = n, this._register(this._modelService.onModelRemoved((e => {
                        const t = this._undoRedoService.getElements(e.uri);
                        if (0 !== t.past.length || 0 !== t.future.length) {
                            for (const e of t.past) e instanceof ye.z5 && e.setDelegate(this);
                            for (const e of t.future) e instanceof ye.z5 && e.setDelegate(this)
                        }
                    })))
                }
                prepareUndoRedo(e) {
                    const t = e.getMissingModels();
                    if (0 === t.length) return ae.JT.None;
                    const n = t.map((async e => {
                        try {
                            return await this._textModelService.createModelReference(e)
                        } catch (e) {
                            return ae.JT.None
                        }
                    }));
                    return Promise.all(n).then((e => ({
                        dispose: () => (0, ae.B9)(e)
                    })))
                }
            };
            we = (0, r.g)([(0, r.f)(0, me.q), (0, r.f)(1, pe.S), (0, r.f)(2, ve.t)], we);
            var Ee = n("K5dS"),
                Se = n("LExn");
            let Te = class extends ae.os {
                constructor(e, t, n, r) {
                    super(), this.instantiationService = e, this.textFileService = t, this.fileService = n, this.modelService = r, this.providers = new Map, this.modelsToDispose = new Set
                }
                createReferencedObject(e) {
                    return this.doCreateReferencedObject(e)
                }
                async doCreateReferencedObject(e, t) {
                    this.modelsToDispose.delete(e);
                    const n = k.ov.parse(e);
                    if (n.scheme === xe.lg.inMemory) {
                        if (!this.modelService.getModel(n)) throw new Error(`Unable to resolve inMemory resource ${e}`);
                        const t = this.instantiationService.createInstance(fe.D, n);
                        if (this.ensureResolvedModel(t, e)) return t
                    }
                    if (n.scheme === xe.lg.untitled) {
                        const t = await this.textFileService.untitled.resolve({
                            untitledResource: n
                        });
                        if (this.ensureResolvedModel(t, e)) return t
                    }
                    if (this.fileService.hasProvider(n)) {
                        const t = await this.textFileService.files.resolve(n, {
                            reason: he.yE.REFERENCE
                        });
                        if (this.ensureResolvedModel(t, e)) return t
                    }
                    if (this.providers.has(n.scheme)) {
                        await this.resolveTextModelContent(e);
                        const t = this.instantiationService.createInstance(fe.D, n);
                        if (this.ensureResolvedModel(t, e)) return t
                    }
                    if (!t) return await this.fileService.activateProvider(n.scheme), this.doCreateReferencedObject(e, !0);
                    throw new Error(`Unable to resolve resource ${e}`)
                }
                ensureResolvedModel(e, t) {
                    if ((0, pe.B)(e)) return !0;
                    throw new Error(`Unable to resolve resource ${t}`)
                }
                destroyReferencedObject(e, t) {
                    k.ov.parse(e).scheme !== xe.lg.inMemory && (this.modelsToDispose.add(e), (async () => {
                        try {
                            const n = await t;
                            if (!this.modelsToDispose.has(e)) return;
                            if (n instanceof be.O ? await this.textFileService.files.canDispose(n) : n instanceof Se.g && await this.textFileService.untitled.canDispose(n), !this.modelsToDispose.has(e)) return;
                            n.dispose()
                        } catch (e) {} finally {
                            this.modelsToDispose.delete(e)
                        }
                    })())
                }
                registerTextModelContentProvider(e, t) {
                    let n = this.providers.get(e);
                    return n || (n = [], this.providers.set(e, n)), n.unshift(t), (0, ae.OF)((() => {
                        const n = this.providers.get(e);
                        if (!n) return;
                        const r = n.indexOf(t); - 1 !== r && (n.splice(r, 1), 0 === n.length && this.providers.delete(e))
                    }))
                }
                hasTextModelContentProvider(e) {
                    return void 0 !== this.providers.get(e)
                }
                async resolveTextModelContent(e) {
                    const t = k.ov.parse(e),
                        n = this.providers.get(t.scheme) || [];
                    for (const e of n) {
                        const n = await e.provideTextContent(t);
                        if (n) return n
                    }
                    throw new Error(`Unable to resolve text model content for resource ${e}`)
                }
            };
            Te = (0, r.g)([(0, r.f)(0, U.TG), (0, r.f)(1, _e.M), (0, r.f)(2, ke.s), (0, r.f)(3, me.q)], Te);
            let Ae = class extends ae.JT {
                get resourceModelCollection() {
                    return this._resourceModelCollection || (this._resourceModelCollection = this.instantiationService.createInstance(Te)), this._resourceModelCollection
                }
                get asyncModelCollection() {
                    return this._asyncModelCollection || (this._asyncModelCollection = new ae.kR(this.resourceModelCollection)), this._asyncModelCollection
                }
                constructor(e, t, n, r, a) {
                    super(), this.instantiationService = e, this.fileService = t, this.undoRedoService = n, this.modelService = r, this.uriIdentityService = a, this._resourceModelCollection = void 0, this._asyncModelCollection = void 0, this._register(new we(this.modelService, this, this.undoRedoService))
                }
                async createModelReference(e) {
                    return e = this.uriIdentityService.asCanonicalUri(e), await this.asyncModelCollection.acquire(e.toString())
                }
                registerTextModelContentProvider(e, t) {
                    return this.resourceModelCollection.registerTextModelContentProvider(e, t)
                }
                canHandleResource(e) {
                    return !(!this.fileService.hasProvider(e) && e.scheme !== xe.lg.untitled && e.scheme !== xe.lg.inMemory) || this.resourceModelCollection.hasTextModelContentProvider(e.scheme)
                }
            };
            Ae = (0, r.g)([(0, r.f)(0, U.TG), (0, r.f)(1, ke.s), (0, r.f)(2, ve.t), (0, r.f)(3, me.q), (0, r.f)(4, Ee.v)], Ae);
            class Ce {
                url;
                options;
                constructor(e, t) {
                    this.url = e, this.options = t
                }
            }
            var je = n("ziTh");
            class Re {
                enabled;
                debugEnabled;
                constructor(e) {
                    this.updateConfig(e)
                }
                updateConfig(e) {
                    this.enabled = !e || !0 === e.enabled, this.debugEnabled = this.enabled && !0 === e ? .debugEnabled
                }
                isEnabled() {
                    return this.enabled
                }
                isDebugEnabled() {
                    return this.debugEnabled
                }
                info(e) {
                    this.enabled && je.log(e)
                }
                debug(e, t) {
                    this.enabled && (this.debugEnabled || !0 === t) && je.debug(e)
                }
            }
            const Oe = (e, t) => {
                    for (const [n, r] of Object.entries(e)) t[n] = r
                },
                Le = async e => {
                    const t = (() => {
                        const e = self;
                        e.MonacoEnvironment || (e.MonacoEnvironment = {});
                        const t = e.MonacoEnvironment;
                        return void 0 === t.vscodeApiInitialised && (t.vscodeApiInitialised = !1), void 0 === t.vscodeInitialising && (t.vscodeInitialising = !1), t
                    })();
                    !0 !== e.serviceConfig ? .debugLogging || e.logger || (e.logger = new Re({
                        enabled: !0,
                        debugEnabled: !0
                    })), t.vscodeInitialising || (t.vscodeApiInitialised ? e.logger ? .debug("Initialization of vscode services can only performed once!") : (t.vscodeInitialising = !0, e.logger ? .debug(`Initializing vscode services. Caller: ${e.caller??"unknown"}`), await Ie(e), e.logger ? .debug("Initialization of vscode services completed successfully."), t.vscodeApiInitialised = !0))
                },
                Ie = async e => {
                    const t = e.serviceConfig ? ? {},
                        n = t.userServices ? ? {},
                        r = await (async () => ({ ...{ ...(0, G.ZP)(),
                                [$.O.toString()]: new z.M(q.t, [], !1),
                                [H.X.toString()]: new z.M(B, [], !0)
                            },
                            [pe.S.toString()]: new z.M(Ae, [], !0)
                        }))();
                    if (Oe(r, n), await Pe(!0 === e.serviceConfig ? .enableExtHostWorker, n), ((e, t) => {
                            for (const n of Object.keys(e)) t ? .debug(`Loading service: ${n}`)
                        })(n, e.logger), void 0 === e.performChecks || e.performChecks()) {
                        await (0, N.j2)(n);
                        const e = t.workspaceConfig ? .developmentOptions ? .logLevel ? ? N.in.Info;
                        N.IO.get(N.VZ).setLevel(e)
                    }
                },
                Pe = async (e, t) => {
                    if (e) {
                        const e = new Ce(new URL(n.p + n.u("defaultVendors-node_modules_vscode_vscode_src_vs_base_common_comparers_js-node_modules_vscode-8c45f0"), n.b), {
                                type: void 0
                            }),
                            r = {
                                url: e.url.toString(),
                                options: e.options
                            },
                            a = { ...(0, A.ZP)(r)
                            };
                        Oe(a, t)
                    }
                }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_krackjack-5958ed3e.js.map