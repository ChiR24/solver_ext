(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4948], {
        9669: function(e, t, n) {
            e.exports = n(51609)
        },
        55448: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = n(36026),
                i = n(4372),
                s = n(15327),
                a = n(94097),
                u = n(84109),
                c = n(67985),
                f = n(85061);
            e.exports = function(e) {
                return new Promise((function(t, n) {
                    var l = e.data,
                        d = e.headers,
                        p = e.responseType;
                    r.isFormData(l) && delete d["Content-Type"];
                    var h = new XMLHttpRequest;
                    if (e.auth) {
                        var m = e.auth.username || "",
                            v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        d.Authorization = "Basic " + btoa(m + ":" + v)
                    }
                    var g = a(e.baseURL, e.url);

                    function y() {
                        if (h) {
                            var r = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null,
                                i = {
                                    data: p && "text" !== p && "json" !== p ? h.response : h.responseText,
                                    status: h.status,
                                    statusText: h.statusText,
                                    headers: r,
                                    config: e,
                                    request: h
                                };
                            o(t, n, i), h = null
                        }
                    }
                    if (h.open(e.method.toUpperCase(), s(g, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, "onloadend" in h ? h.onloadend = y : h.onreadystatechange = function() {
                            h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:")) && setTimeout(y)
                        }, h.onabort = function() {
                            h && (n(f("Request aborted", e, "ECONNABORTED", h)), h = null)
                        }, h.onerror = function() {
                            n(f("Network Error", e, null, h)), h = null
                        }, h.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", h)), h = null
                        }, r.isStandardBrowserEnv()) {
                        var b = (e.withCredentials || c(g)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                        b && (d[e.xsrfHeaderName] = b)
                    }
                    "setRequestHeader" in h && r.forEach(d, (function(e, t) {
                        "undefined" === typeof l && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e)
                    })), r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), p && "json" !== p && (h.responseType = e.responseType), "function" === typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        h && (h.abort(), n(e), h = null)
                    })), l || (l = null), h.send(l)
                }))
            }
        },
        51609: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = n(91849),
                i = n(30321),
                s = n(47185);

            function a(e) {
                var t = new i(e),
                    n = o(i.prototype.request, t);
                return r.extend(n, i.prototype, t), r.extend(n, t), n
            }
            var u = a(n(45655));
            u.Axios = i, u.create = function(e) {
                return a(s(u.defaults, e))
            }, u.Cancel = n(65263), u.CancelToken = n(14972), u.isCancel = n(26502), u.all = function(e) {
                return Promise.all(e)
            }, u.spread = n(8713), u.isAxiosError = n(16268), e.exports = u, e.exports.default = u
        },
        65263: function(e) {
            "use strict";

            function t(e) {
                this.message = e
            }
            t.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, t.prototype.__CANCEL__ = !0, e.exports = t
        },
        14972: function(e, t, n) {
            "use strict";
            var r = n(65263);

            function o(e) {
                if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var n = this;
                e((function(e) {
                    n.reason || (n.reason = new r(e), t(n.reason))
                }))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.source = function() {
                var e;
                return {
                    token: new o((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = o
        },
        26502: function(e) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        30321: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = n(15327),
                i = n(80782),
                s = n(13572),
                a = n(47185),
                u = n(54875),
                c = u.validators;

            function f(e) {
                this.defaults = e, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            f.prototype.request = function(e) {
                "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = e.transitional;
                void 0 !== t && u.assertOptions(t, {
                    silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                    forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                    clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
                }, !1);
                var n = [],
                    r = !0;
                this.interceptors.request.forEach((function(t) {
                    "function" === typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                }));
                var o, i = [];
                if (this.interceptors.response.forEach((function(e) {
                        i.push(e.fulfilled, e.rejected)
                    })), !r) {
                    var f = [s, void 0];
                    for (Array.prototype.unshift.apply(f, n), f = f.concat(i), o = Promise.resolve(e); f.length;) o = o.then(f.shift(), f.shift());
                    return o
                }
                for (var l = e; n.length;) {
                    var d = n.shift(),
                        p = n.shift();
                    try {
                        l = d(l)
                    } catch (h) {
                        p(h);
                        break
                    }
                }
                try {
                    o = s(l)
                } catch (h) {
                    return Promise.reject(h)
                }
                for (; i.length;) o = o.then(i.shift(), i.shift());
                return o
            }, f.prototype.getUri = function(e) {
                return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                f.prototype[e] = function(t, n) {
                    return this.request(a(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(e) {
                f.prototype[e] = function(t, n, r) {
                    return this.request(a(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            })), e.exports = f
        },
        80782: function(e, t, n) {
            "use strict";
            var r = n(64867);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }, o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, o.prototype.forEach = function(e) {
                r.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = o
        },
        94097: function(e, t, n) {
            "use strict";
            var r = n(91793),
                o = n(7303);
            e.exports = function(e, t) {
                return e && !r(t) ? o(e, t) : t
            }
        },
        85061: function(e, t, n) {
            "use strict";
            var r = n(80481);
            e.exports = function(e, t, n, o, i) {
                var s = new Error(e);
                return r(s, t, n, o, i)
            }
        },
        13572: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = n(18527),
                i = n(26502),
                s = n(45655);

            function a(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return a(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || s.adapter)(e).then((function(t) {
                    return a(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return i(t) || (a(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        80481: function(e) {
            "use strict";
            e.exports = function(e, t, n, r, o) {
                return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        47185: function(e, t, n) {
            "use strict";
            var r = n(64867);
            e.exports = function(e, t) {
                t = t || {};
                var n = {},
                    o = ["url", "method", "data"],
                    i = ["headers", "auth", "proxy", "params"],
                    s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    a = ["validateStatus"];

                function u(e, t) {
                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                }

                function c(o) {
                    r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(e[o], t[o])
                }
                r.forEach(o, (function(e) {
                    r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
                })), r.forEach(i, c), r.forEach(s, (function(o) {
                    r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(void 0, t[o])
                })), r.forEach(a, (function(r) {
                    r in t ? n[r] = u(e[r], t[r]) : r in e && (n[r] = u(void 0, e[r]))
                }));
                var f = o.concat(i).concat(s).concat(a),
                    l = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                        return -1 === f.indexOf(e)
                    }));
                return r.forEach(l, c), n
            }
        },
        36026: function(e, t, n) {
            "use strict";
            var r = n(85061);
            e.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        },
        18527: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = n(45655);
            e.exports = function(e, t, n) {
                var i = this || o;
                return r.forEach(n, (function(n) {
                    e = n.call(i, e, t)
                })), e
            }
        },
        45655: function(e, t, n) {
            "use strict";
            var r = n(34155),
                o = n(64867),
                i = n(16016),
                s = n(80481),
                a = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function u(e, t) {
                !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: function() {
                    var e;
                    return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof r && "[object process]" === Object.prototype.toString.call(r)) && (e = n(55448)), e
                }(),
                transformRequest: [function(e, t) {
                    return i(t, "Accept"), i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) || t && "application/json" === t["Content-Type"] ? (u(t, "application/json"), function(e, t, n) {
                        if (o.isString(e)) try {
                            return (t || JSON.parse)(e), o.trim(e)
                        } catch (r) {
                            if ("SyntaxError" !== r.name) throw r
                        }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    var t = this.transitional,
                        n = t && t.silentJSONParsing,
                        r = t && t.forcedJSONParsing,
                        i = !n && "json" === this.responseType;
                    if (i || r && o.isString(e) && e.length) try {
                        return JSON.parse(e)
                    } catch (a) {
                        if (i) {
                            if ("SyntaxError" === a.name) throw s(a, this, "E_JSON_PARSE");
                            throw a
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            o.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            })), o.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = o.merge(a)
            })), e.exports = c
        },
        91849: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
        },
        15327: function(e, t, n) {
            "use strict";
            var r = n(64867);

            function o(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var i;
                if (n) i = n(t);
                else if (r.isURLSearchParams(t)) i = t.toString();
                else {
                    var s = [];
                    r.forEach(t, (function(e, t) {
                        null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                        })))
                    })), i = s.join("&")
                }
                if (i) {
                    var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                }
                return e
            }
        },
        7303: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        4372: function(e, t, n) {
            "use strict";
            var r = n(64867);
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, i, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        91793: function(e) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        16268: function(e) {
            "use strict";
            e.exports = function(e) {
                return "object" === typeof e && !0 === e.isAxiosError
            }
        },
        67985: function(e, t, n) {
            "use strict";
            var r = n(64867);
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(e) {
                    var r = e;
                    return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = o(window.location.href),
                    function(t) {
                        var n = r.isString(t) ? o(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        16016: function(e, t, n) {
            "use strict";
            var r = n(64867);
            e.exports = function(e, t) {
                r.forEach(e, (function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                }))
            }
        },
        84109: function(e, t, n) {
            "use strict";
            var r = n(64867),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, i, s = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                    }
                })), s) : s
            }
        },
        8713: function(e) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        54875: function(e, t, n) {
            "use strict";
            var r = n(88593),
                o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                o[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }));
            var i = {},
                s = r.version.split(".");

            function a(e, t) {
                for (var n = t ? t.split(".") : s, r = e.split("."), o = 0; o < 3; o++) {
                    if (n[o] > r[o]) return !0;
                    if (n[o] < r[o]) return !1
                }
                return !1
            }
            o.transitional = function(e, t, n) {
                var o = t && a(t);

                function s(e, t) {
                    return "[Axios v" + r.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return function(n, r, a) {
                    if (!1 === e) throw new Error(s(r, " has been removed in " + t));
                    return o && !i[r] && (i[r] = !0, console.warn(s(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, a)
                }
            }, e.exports = {
                isOlderVersion: a,
                assertOptions: function(e, t, n) {
                    if ("object" !== typeof e) throw new TypeError("options must be an object");
                    for (var r = Object.keys(e), o = r.length; o-- > 0;) {
                        var i = r[o],
                            s = t[i];
                        if (s) {
                            var a = e[i],
                                u = void 0 === a || s(a, i, e);
                            if (!0 !== u) throw new TypeError("option " + i + " must be " + u)
                        } else if (!0 !== n) throw Error("Unknown option " + i)
                    }
                },
                validators: o
            }
        },
        64867: function(e, t, n) {
            "use strict";
            var r = n(91849),
                o = Object.prototype.toString;

            function i(e) {
                return "[object Array]" === o.call(e)
            }

            function s(e) {
                return "undefined" === typeof e
            }

            function a(e) {
                return null !== e && "object" === typeof e
            }

            function u(e) {
                if ("[object Object]" !== o.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function c(e) {
                return "[object Function]" === o.call(e)
            }

            function f(e, t) {
                if (null !== e && "undefined" !== typeof e)
                    if ("object" !== typeof e && (e = [e]), i(e))
                        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === o.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" !== typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" === typeof e
                },
                isNumber: function(e) {
                    return "number" === typeof e
                },
                isObject: a,
                isPlainObject: u,
                isUndefined: s,
                isDate: function(e) {
                    return "[object Date]" === o.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === o.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === o.call(e)
                },
                isFunction: c,
                isStream: function(e) {
                    return a(e) && c(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                },
                forEach: f,
                merge: function e() {
                    var t = {};

                    function n(n, r) {
                        u(t[r]) && u(n) ? t[r] = e(t[r], n) : u(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
                    }
                    for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) {
                    return f(t, (function(t, o) {
                        e[o] = n && "function" === typeof t ? r(t, n) : t
                    })), e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                }
            }
        },
        84539: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return F
                }
            });
            var r = n(67294),
                o = n(35748),
                i = n(16567),
                s = n(32984),
                a = n(14879),
                u = n(16723),
                c = n(3855),
                f = n(82180),
                l = n(23784);
            var d = n(9362);

            function p(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function h(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }

            function m(e, t, n, r) {
                let o = n ? "enter" : "leave",
                    i = (0, d.k)(),
                    a = void 0 !== r ? function(e) {
                        let t = {
                            called: !1
                        };
                        return (...n) => {
                            if (!t.called) return t.called = !0, e(...n)
                        }
                    }(r) : () => {};
                "enter" === o && (e.removeAttribute("hidden"), e.style.display = "");
                let u = (0, s.E)(o, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    c = (0, s.E)(o, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    f = (0, s.E)(o, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return h(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), p(e, ...u, ...f), i.nextFrame((() => {
                    h(e, ...f), p(e, ...c),
                        function(e, t) {
                            let n = (0, d.k)();
                            if (!e) return n.dispose;
                            let {
                                transitionDuration: r,
                                transitionDelay: o
                            } = getComputedStyle(e), [i, s] = [r, o].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            }));
                            if (i + s !== 0) {
                                let r = n.addEventListener(e, "transitionend", (e => {
                                    e.target === e.currentTarget && (t(), r())
                                }))
                            } else t();
                            n.add((() => t())), n.dispose
                        }(e, (() => (h(e, ...u), p(e, ...t.entered), a())))
                })), i.dispose
            }
            var v = n(94192);
            var g = n(73781);

            function y(...e) {
                return e.filter(Boolean).join(" ")
            }

            function b(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let E = (0, r.createContext)(null);
            E.displayName = "TransitionContext";
            var w, x = ((w = x || {}).Visible = "visible", w.Hidden = "hidden", w);
            let j = (0, r.createContext)(null);

            function O(e) {
                return "children" in e ? O(e.children) : e.current.filter((({
                    el: e
                }) => null !== e.current)).filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function S(e, t) {
                let n = (0, c.E)(e),
                    i = (0, r.useRef)([]),
                    u = (0, a.t)(),
                    f = (0, v.G)(),
                    l = (0, g.z)(((e, t = o.l4.Hidden) => {
                        let r = i.current.findIndex((({
                            el: t
                        }) => t === e)); - 1 !== r && ((0, s.E)(t, {
                            [o.l4.Unmount]() {
                                i.current.splice(r, 1)
                            },
                            [o.l4.Hidden]() {
                                i.current[r].state = "hidden"
                            }
                        }), f.microTask((() => {
                            var e;
                            !O(i) && u.current && (null == (e = n.current) || e.call(n))
                        })))
                    })),
                    d = (0, g.z)((e => {
                        let t = i.current.find((({
                            el: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : i.current.push({
                            el: e,
                            state: "visible"
                        }), () => l(e, o.l4.Unmount)
                    })),
                    p = (0, r.useRef)([]),
                    h = (0, r.useRef)(Promise.resolve()),
                    m = (0, r.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    y = (0, g.z)(((e, n, r) => {
                        p.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
                            p.current.push(e)
                        }))]), null == t || t.chains.current[n].push([e, new Promise((e => {
                            Promise.all(m.current[n].map((([e, t]) => t))).then((() => e()))
                        }))]), "enter" === n ? h.current = h.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
                    })),
                    b = (0, g.z)(((e, t, n) => {
                        Promise.all(m.current[t].splice(0).map((([e, t]) => t))).then((() => {
                            var e;
                            null == (e = p.current.shift()) || e()
                        })).then((() => n(t)))
                    }));
                return (0, r.useMemo)((() => ({
                    children: i,
                    register: d,
                    unregister: l,
                    onStart: y,
                    onStop: b,
                    wait: h,
                    chains: m
                })), [d, l, i, y, b, m, h])
            }

            function T() {}
            j.displayName = "NestingContext";
            let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function k(e) {
                var t;
                let n = {};
                for (let r of C) n[r] = null != (t = e[r]) ? t : T;
                return n
            }
            let N = o.AN.RenderStrategy,
                R = (0, o.yV)((function(e, t) {
                    let {
                        beforeEnter: n,
                        afterEnter: p,
                        beforeLeave: h,
                        afterLeave: w,
                        enter: x,
                        enterFrom: T,
                        enterTo: C,
                        entered: R,
                        leave: A,
                        leaveFrom: P,
                        leaveTo: F,
                        ...L
                    } = e, U = (0, r.useRef)(null), B = (0, l.T)(U, t), q = L.unmount ? o.l4.Unmount : o.l4.Hidden, {
                        show: H,
                        appear: D,
                        initial: M
                    } = function() {
                        let e = (0, r.useContext)(E);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [z, J] = (0, r.useState)(H ? "visible" : "hidden"), _ = function() {
                        let e = (0, r.useContext)(j);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: V,
                        unregister: I
                    } = _, $ = (0, r.useRef)(null);
                    (0, r.useEffect)((() => V(U)), [V, U]), (0, r.useEffect)((() => {
                        if (q === o.l4.Hidden && U.current) return H && "visible" !== z ? void J("visible") : (0, s.E)(z, {
                            hidden: () => I(U),
                            visible: () => V(U)
                        })
                    }), [z, U, V, I, H, q]);
                    let Z = (0, c.E)({
                            enter: b(x),
                            enterFrom: b(T),
                            enterTo: b(C),
                            entered: b(R),
                            leave: b(A),
                            leaveFrom: b(P),
                            leaveTo: b(F)
                        }),
                        G = function(e) {
                            let t = (0, r.useRef)(k(e));
                            return (0, r.useEffect)((() => {
                                t.current = k(e)
                            }), [e]), t
                        }({
                            beforeEnter: n,
                            afterEnter: p,
                            beforeLeave: h,
                            afterLeave: w
                        }),
                        Y = (0, f.H)();
                    (0, r.useEffect)((() => {
                        if (Y && "visible" === z && null === U.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [U, z, Y]);
                    let W = M && !D,
                        X = !Y || W || $.current === H ? "idle" : H ? "enter" : "leave",
                        K = (0, g.z)((e => (0, s.E)(e, {
                            enter: () => G.current.beforeEnter(),
                            leave: () => G.current.beforeLeave(),
                            idle: () => {}
                        }))),
                        Q = (0, g.z)((e => (0, s.E)(e, {
                            enter: () => G.current.afterEnter(),
                            leave: () => G.current.afterLeave(),
                            idle: () => {}
                        }))),
                        ee = S((() => {
                            J("hidden"), I(U)
                        }), _);
                    (function({
                        container: e,
                        direction: t,
                        classes: n,
                        onStart: r,
                        onStop: o
                    }) {
                        let i = (0, a.t)(),
                            s = (0, v.G)(),
                            f = (0, c.E)(t);
                        (0, u.e)((() => {
                            let t = (0, d.k)();
                            s.add(t.dispose);
                            let a = e.current;
                            if (a && "idle" !== f.current && i.current) return t.dispose(), r.current(f.current), t.add(m(a, n.current, "enter" === f.current, (() => {
                                t.dispose(), o.current(f.current)
                            }))), t.dispose
                        }), [t])
                    })({
                        container: U,
                        classes: Z,
                        direction: X,
                        onStart: (0, c.E)((e => {
                            ee.onStart(U, e, K)
                        })),
                        onStop: (0, c.E)((e => {
                            ee.onStop(U, e, Q), "leave" === e && !O(ee) && (J("hidden"), I(U))
                        }))
                    }), (0, r.useEffect)((() => {
                        !W || (q === o.l4.Hidden ? $.current = null : $.current = H)
                    }), [H, W, z]);
                    let te = L,
                        ne = {
                            ref: B
                        };
                    return D && H && ("undefined" == typeof window || "undefined" == typeof document) && (te = { ...te,
                        className: y(L.className, ...Z.current.enter, ...Z.current.enterFrom)
                    }), r.createElement(j.Provider, {
                        value: ee
                    }, r.createElement(i.up, {
                        value: (0, s.E)(z, {
                            visible: i.ZM.Open,
                            hidden: i.ZM.Closed
                        })
                    }, (0, o.sY)({
                        ourProps: ne,
                        theirProps: te,
                        defaultTag: "div",
                        features: N,
                        visible: "visible" === z,
                        name: "Transition.Child"
                    })))
                })),
                A = (0, o.yV)((function(e, t) {
                    let {
                        show: n,
                        appear: a = !1,
                        unmount: c,
                        ...d
                    } = e, p = (0, r.useRef)(null), h = (0, l.T)(p, t);
                    (0, f.H)();
                    let m = (0, i.oJ)();
                    if (void 0 === n && null !== m && (n = (0, s.E)(m, {
                            [i.ZM.Open]: !0,
                            [i.ZM.Closed]: !1
                        })), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [v, g] = (0, r.useState)(n ? "visible" : "hidden"), y = S((() => {
                        g("hidden")
                    })), [b, w] = (0, r.useState)(!0), x = (0, r.useRef)([n]);
                    (0, u.e)((() => {
                        !1 !== b && x.current[x.current.length - 1] !== n && (x.current.push(n), w(!1))
                    }), [x, n]);
                    let T = (0, r.useMemo)((() => ({
                        show: n,
                        appear: a,
                        initial: b
                    })), [n, a, b]);
                    (0, r.useEffect)((() => {
                        if (n) g("visible");
                        else if (O(y)) {
                            let e = p.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                        } else g("hidden")
                    }), [n, y]);
                    let C = {
                        unmount: c
                    };
                    return r.createElement(j.Provider, {
                        value: y
                    }, r.createElement(E.Provider, {
                        value: T
                    }, (0, o.sY)({
                        ourProps: { ...C,
                            as: r.Fragment,
                            children: r.createElement(R, {
                                ref: h,
                                ...C,
                                ...d
                            })
                        },
                        theirProps: {},
                        defaultTag: r.Fragment,
                        features: N,
                        visible: "visible" === v,
                        name: "Transition"
                    })))
                })),
                P = (0, o.yV)((function(e, t) {
                    let n = null !== (0, r.useContext)(E),
                        o = null !== (0, i.oJ)();
                    return r.createElement(r.Fragment, null, !n && o ? r.createElement(A, {
                        ref: t,
                        ...e
                    }) : r.createElement(R, {
                        ref: t,
                        ...e
                    }))
                })),
                F = Object.assign(A, {
                    Child: P,
                    Root: A
                })
        },
        94192: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(9362);

            function i() {
                let [e] = (0, r.useState)(o.k);
                return (0, r.useEffect)((() => () => e.dispose()), [e]), e
            }
        },
        73781: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(3855);
            let i = function(e) {
                let t = (0, o.E)(e);
                return r.useCallback(((...e) => t.current(...e)), [t])
            }
        },
        14879: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(16723);

            function i() {
                let e = (0, r.useRef)(!1);
                return (0, o.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        16723: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(67294);
            let o = n(43393).s ? r.useEffect : r.useLayoutEffect
        },
        3855: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(16723);

            function i(e) {
                let t = (0, r.useRef)(e);
                return (0, o.e)((() => {
                    t.current = e
                }), [e]), t
            }
        },
        82180: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return i
                }
            });
            var r = n(67294);
            let o = {
                serverHandoffComplete: !1
            };

            function i() {
                let [e, t] = (0, r.useState)(o.serverHandoffComplete);
                return (0, r.useEffect)((() => {
                    !0 !== e && t(!0)
                }), [e]), (0, r.useEffect)((() => {
                    !1 === o.serverHandoffComplete && (o.serverHandoffComplete = !0)
                }), []), e
            }
        },
        23784: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return a
                },
                h: function() {
                    return s
                }
            });
            var r = n(67294),
                o = n(73781);
            let i = Symbol();

            function s(e, t = !0) {
                return Object.assign(e, {
                    [i]: t
                })
            }

            function a(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = (0, o.z)((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }));
                return e.every((e => null == e || (null == e ? void 0 : e[i]))) ? void 0 : n
            }
        },
        16567: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZM: function() {
                    return s
                },
                oJ: function() {
                    return a
                },
                up: function() {
                    return u
                }
            });
            var r = n(67294);
            let o = (0, r.createContext)(null);
            o.displayName = "OpenClosedContext";
            var i, s = ((i = s || {})[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i);

            function a() {
                return (0, r.useContext)(o)
            }

            function u({
                value: e,
                children: t
            }) {
                return r.createElement(o.Provider, {
                    value: e
                }, t)
            }
        },
        9362: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(81021);

            function o() {
                let e = [],
                    t = [],
                    n = {
                        enqueue(e) {
                            t.push(e)
                        },
                        addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o), n.add((() => e.removeEventListener(t, r, o)))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return n.add((() => cancelAnimationFrame(t)))
                        },
                        nextFrame: (...e) => n.requestAnimationFrame((() => n.requestAnimationFrame(...e))),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return n.add((() => clearTimeout(t)))
                        },
                        microTask(...e) {
                            let t = {
                                current: !0
                            };
                            return (0, r.Y)((() => {
                                t.current && e[0]()
                            })), n.add((() => {
                                t.current = !1
                            }))
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0) {
                                let [t] = e.splice(n, 1);
                                t()
                            }
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        },
                        async workQueue() {
                            for (let e of t.splice(0)) await e()
                        }
                    };
                return n
            }
        },
        32984: function(e, t, n) {
            "use strict";

            function r(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(o, r), o
            }
            n.d(t, {
                E: function() {
                    return r
                }
            })
        },
        81021: function(e, t, n) {
            "use strict";

            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            n.d(t, {
                Y: function() {
                    return r
                }
            })
        },
        35748: function(e, t, n) {
            "use strict";
            n.d(t, {
                AN: function() {
                    return a
                },
                l4: function() {
                    return u
                },
                oA: function() {
                    return p
                },
                sY: function() {
                    return c
                },
                yV: function() {
                    return d
                }
            });
            var r, o, i = n(67294),
                s = n(32984),
                a = ((o = a || {})[o.None = 0] = "None", o[o.RenderStrategy = 1] = "RenderStrategy", o[o.Static = 2] = "Static", o),
                u = ((r = u || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: o,
                visible: i = !0,
                name: a
            }) {
                let u = l(t, e);
                if (i) return f(u, n, r, a);
                let c = null != o ? o : 0;
                if (2 & c) {
                    let {
                        static: e = !1,
                        ...t
                    } = u;
                    if (e) return f(t, n, r, a)
                }
                if (1 & c) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = u;
                    return (0, s.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => f({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, a)
                    })
                }
                return f(u, n, r, a)
            }

            function f(e, t = {}, n, r) {
                let {
                    as: o = n,
                    children: s,
                    refName: a = "ref",
                    ...u
                } = h(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [a]: e.ref
                } : {}, f = "function" == typeof s ? s(t) : s;
                u.className && "function" == typeof u.className && (u.className = u.className(t));
                let d = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
                    e && (d["data-headlessui-state"] = n.join(" "))
                }
                if (o === i.Fragment && Object.keys(p(u)).length > 0) {
                    if (!(0, i.isValidElement)(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    return (0, i.cloneElement)(f, Object.assign({}, l(f.props, p(h(u, ["ref"]))), d, c, function(...e) {
                        return {
                            ref: e.every((e => null == e)) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(f.ref, c.ref)))
                }
                return (0, i.createElement)(o, Object.assign({}, h(u, ["ref"]), o !== i.Fragment && c, o !== i.Fragment && d), f)
            }

            function l(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let r in n) Object.assign(t, {
                    [r](e, ...t) {
                        let o = n[r];
                        for (let n of o) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                            n(e, ...t)
                        }
                    }
                });
                return t
            }

            function d(e) {
                var t;
                return Object.assign((0, i.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function p(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function h(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
        },
        43393: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return r
                }
            });
            const r = "undefined" == typeof window || "undefined" == typeof document
        },
        52951: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        },
        88593: function(e) {
            "use strict";
            e.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
        }
    }
]);