/*! For license information please see lsp_client-3cf663bd.js.LICENSE.txt */
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["lsp_client"], {
        kbA8: e => {
            "use strict";

            function t(e, t, r) {
                e instanceof RegExp && (e = n(e, r)), t instanceof RegExp && (t = n(t, r));
                var o = i(e, t, r);
                return o && {
                    start: o[0],
                    end: o[1],
                    pre: r.slice(0, o[0]),
                    body: r.slice(o[0] + e.length, o[1]),
                    post: r.slice(o[1] + t.length)
                }
            }

            function n(e, t) {
                var n = t.match(e);
                return n ? n[0] : null
            }

            function i(e, t, n) {
                var i, r, o, s, a, c = n.indexOf(e),
                    u = n.indexOf(t, c + 1),
                    l = c;
                if (c >= 0 && u > 0) {
                    for (i = [], o = n.length; l >= 0 && !a;) l == c ? (i.push(l), c = n.indexOf(e, l + 1)) : 1 == i.length ? a = [i.pop(), u] : ((r = i.pop()) < o && (o = r, s = u), u = n.indexOf(t, l + 1)), l = c < u && c >= 0 ? c : u;
                    i.length && (a = [o, s])
                }
                return a
            }
            e.exports = t, t.range = i
        },
        "0JYD": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var i = n("ziTh"),
                r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, r(e, t)
                };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }

            function s(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, r, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = o.next()).done;) s.push(i.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            }
            var a = function(e, t) {
                    this.target = t, this.type = e
                },
                c = function(e) {
                    function t(t, n) {
                        var i = e.call(this, "error", n) || this;
                        return i.message = t.message, i.error = t, i
                    }
                    return o(t, e), t
                }(a),
                u = function(e) {
                    function t(t, n, i) {
                        void 0 === t && (t = 1e3), void 0 === n && (n = "");
                        var r = e.call(this, "close", i) || this;
                        return r.wasClean = !0, r.code = t, r.reason = n, r
                    }
                    return o(t, e), t
                }(a),
                l = function() {
                    if ("undefined" != typeof WebSocket) return WebSocket
                },
                d = {
                    maxReconnectionDelay: 1e4,
                    minReconnectionDelay: 1e3 + 4e3 * Math.random(),
                    minUptime: 5e3,
                    reconnectionDelayGrowFactor: 1.3,
                    connectionTimeout: 4e3,
                    maxRetries: 1 / 0,
                    maxEnqueuedMessages: 1 / 0,
                    startClosed: !1,
                    debug: !1
                };
            const h = function() {
                function e(e, t, n) {
                    var i = this;
                    void 0 === n && (n = {}), this._listeners = {
                        error: [],
                        message: [],
                        open: [],
                        close: []
                    }, this._retryCount = -1, this._shouldReconnect = !0, this._connectLock = !1, this._binaryType = "blob", this._closeCalled = !1, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(e) {
                        i._debug("open event");
                        var t = i._options.minUptime,
                            n = void 0 === t ? d.minUptime : t;
                        clearTimeout(i._connectTimeout), i._uptimeTimeout = setTimeout((function() {
                            return i._acceptOpen()
                        }), n), i._ws.binaryType = i._binaryType, i._messageQueue.forEach((function(e) {
                            return i._ws.send(e)
                        })), i._messageQueue = [], i.onopen && i.onopen(e), i._listeners.open.forEach((function(t) {
                            return i._callEventListener(e, t)
                        }))
                    }, this._handleMessage = function(e) {
                        i._debug("message event"), i.onmessage && i.onmessage(e), i._listeners.message.forEach((function(t) {
                            return i._callEventListener(e, t)
                        }))
                    }, this._handleError = function(e) {
                        i._debug("error event", e.message), i._disconnect(void 0, "TIMEOUT" === e.message ? "timeout" : void 0), i.onerror && i.onerror(e), i._debug("exec error listeners"), i._listeners.error.forEach((function(t) {
                            return i._callEventListener(e, t)
                        })), i._connect()
                    }, this._handleClose = function(e) {
                        i._debug("close event"), i._clearTimeouts(), i._shouldReconnect && i._connect(), i.onclose && i.onclose(e), i._listeners.close.forEach((function(t) {
                            return i._callEventListener(e, t)
                        }))
                    }, this._url = e, this._protocols = t, this._options = n, this._options.startClosed && (this._shouldReconnect = !1), this._connect()
                }
                return Object.defineProperty(e, "CONNECTING", {
                    get: function() {
                        return 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "OPEN", {
                    get: function() {
                        return 1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "CLOSING", {
                    get: function() {
                        return 2
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "CLOSED", {
                    get: function() {
                        return 3
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CONNECTING", {
                    get: function() {
                        return e.CONNECTING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "OPEN", {
                    get: function() {
                        return e.OPEN
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CLOSING", {
                    get: function() {
                        return e.CLOSING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CLOSED", {
                    get: function() {
                        return e.CLOSED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "binaryType", {
                    get: function() {
                        return this._ws ? this._ws.binaryType : this._binaryType
                    },
                    set: function(e) {
                        this._binaryType = e, this._ws && (this._ws.binaryType = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "retryCount", {
                    get: function() {
                        return Math.max(this._retryCount, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "bufferedAmount", {
                    get: function() {
                        return this._messageQueue.reduce((function(e, t) {
                            return "string" == typeof t ? e += t.length : t instanceof Blob ? e += t.size : e += t.byteLength, e
                        }), 0) + (this._ws ? this._ws.bufferedAmount : 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "extensions", {
                    get: function() {
                        return this._ws ? this._ws.extensions : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "protocol", {
                    get: function() {
                        return this._ws ? this._ws.protocol : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "readyState", {
                    get: function() {
                        return this._ws ? this._ws.readyState : this._options.startClosed ? e.CLOSED : e.CONNECTING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "url", {
                    get: function() {
                        return this._ws ? this._ws.url : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.close = function(e, t) {
                    void 0 === e && (e = 1e3), this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), this._ws ? this._ws.readyState !== this.CLOSED ? this._ws.close(e, t) : this._debug("close: already closed") : this._debug("close enqueued: no ws instance")
                }, e.prototype.reconnect = function(e, t) {
                    this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, this._ws && this._ws.readyState !== this.CLOSED ? (this._disconnect(e, t), this._connect()) : this._connect()
                }, e.prototype.send = function(e) {
                    if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", e), this._ws.send(e);
                    else {
                        var t = this._options.maxEnqueuedMessages,
                            n = void 0 === t ? d.maxEnqueuedMessages : t;
                        this._messageQueue.length < n && (this._debug("enqueue", e), this._messageQueue.push(e))
                    }
                }, e.prototype.addEventListener = function(e, t) {
                    this._listeners[e] && this._listeners[e].push(t)
                }, e.prototype.dispatchEvent = function(e) {
                    var t, n, i = this._listeners[e.type];
                    if (i) try {
                        for (var r = function(e) {
                                var t = "function" == typeof Symbol && e[Symbol.iterator],
                                    n = 0;
                                return t ? t.call(e) : {
                                    next: function() {
                                        return e && n >= e.length && (e = void 0), {
                                            value: e && e[n++],
                                            done: !e
                                        }
                                    }
                                }
                            }(i), o = r.next(); !o.done; o = r.next()) {
                            var s = o.value;
                            this._callEventListener(e, s)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, e.prototype.removeEventListener = function(e, t) {
                    this._listeners[e] && (this._listeners[e] = this._listeners[e].filter((function(e) {
                        return e !== t
                    })))
                }, e.prototype._debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._options.debug && i.log.apply(i, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
                        return e
                    }(["RWS>"], e))
                }, e.prototype._getNextDelay = function() {
                    var e = this._options,
                        t = e.reconnectionDelayGrowFactor,
                        n = void 0 === t ? d.reconnectionDelayGrowFactor : t,
                        i = e.minReconnectionDelay,
                        r = void 0 === i ? d.minReconnectionDelay : i,
                        o = e.maxReconnectionDelay,
                        s = void 0 === o ? d.maxReconnectionDelay : o,
                        a = 0;
                    return this._retryCount > 0 && (a = r * Math.pow(n, this._retryCount - 1)) > s && (a = s), this._debug("next delay", a), a
                }, e.prototype._wait = function() {
                    var e = this;
                    return new Promise((function(t) {
                        setTimeout(t, e._getNextDelay())
                    }))
                }, e.prototype._getNextUrl = function(e) {
                    if ("string" == typeof e) return Promise.resolve(e);
                    if ("function" == typeof e) {
                        var t = e();
                        if ("string" == typeof t) return Promise.resolve(t);
                        if (t.then) return t
                    }
                    throw Error("Invalid URL")
                }, e.prototype._connect = function() {
                    var e = this;
                    if (!this._connectLock && this._shouldReconnect) {
                        this._connectLock = !0;
                        var t = this._options,
                            n = t.maxRetries,
                            i = void 0 === n ? d.maxRetries : n,
                            r = t.connectionTimeout,
                            o = void 0 === r ? d.connectionTimeout : r,
                            s = t.WebSocket,
                            a = void 0 === s ? l() : s;
                        if (this._retryCount >= i) this._debug("max retries reached", this._retryCount, ">=", i);
                        else {
                            if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), void 0 === (c = a) || !c || 2 !== c.CLOSING) throw Error("No valid WebSocket class provided");
                            var c;
                            this._wait().then((function() {
                                return e._getNextUrl(e._url)
                            })).then((function(t) {
                                e._closeCalled || (e._debug("connect", {
                                    url: t,
                                    protocols: e._protocols
                                }), e._ws = e._protocols ? new a(t, e._protocols) : new a(t), e._ws.binaryType = e._binaryType, e._connectLock = !1, e._addListeners(), e._connectTimeout = setTimeout((function() {
                                    return e._handleTimeout()
                                }), o))
                            }))
                        }
                    }
                }, e.prototype._handleTimeout = function() {
                    this._debug("timeout event"), this._handleError(new c(Error("TIMEOUT"), this))
                }, e.prototype._disconnect = function(e, t) {
                    if (void 0 === e && (e = 1e3), this._clearTimeouts(), this._ws) {
                        this._removeListeners();
                        try {
                            this._ws.close(e, t), this._handleClose(new u(e, t, this))
                        } catch (e) {}
                    }
                }, e.prototype._acceptOpen = function() {
                    this._debug("accept open"), this._retryCount = 0
                }, e.prototype._callEventListener = function(e, t) {
                    "handleEvent" in t ? t.handleEvent(e) : t(e)
                }, e.prototype._removeListeners = function() {
                    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError))
                }, e.prototype._addListeners = function() {
                    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError))
                }, e.prototype._clearTimeouts = function() {
                    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout)
                }, e
            }()
        },
        Uf1e: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMessageConnection = t.BrowserMessageWriter = t.BrowserMessageReader = void 0, n("6LsX").default.install();
            const o = n("3Ajj");
            r(n("3Ajj"), t);
            class s extends o.AbstractMessageReader {
                constructor(e) {
                    super(), this._onData = new o.Emitter, this._messageListener = e => {
                        this._onData.fire(e.data)
                    }, e.addEventListener("error", (e => this.fireError(e))), e.onmessage = this._messageListener
                }
                listen(e) {
                    return this._onData.event(e)
                }
            }
            t.BrowserMessageReader = s;
            class a extends o.AbstractMessageWriter {
                constructor(e) {
                    super(), this.port = e, this.errorCount = 0, e.addEventListener("error", (e => this.fireError(e)))
                }
                write(e) {
                    try {
                        return this.port.postMessage(e), Promise.resolve()
                    } catch (t) {
                        return this.handleError(t, e), Promise.reject(t)
                    }
                }
                handleError(e, t) {
                    this.errorCount++, this.fireError(e, t, this.errorCount)
                }
                end() {}
            }
            t.BrowserMessageWriter = a, t.createMessageConnection = function(e, t, n, i) {
                return void 0 === n && (n = o.NullLogger), o.ConnectionStrategy.is(i) && (i = {
                    connectionStrategy: i
                }), (0, o.createMessageConnection)(e, t, n, i)
            }
        },
        "6LsX": (e, t, n) => {
            "use strict";
            var i = n("ziTh");
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n("3Ajj");
            class o extends r.AbstractMessageBuffer {
                constructor(e = "utf-8") {
                    super(e), this.asciiDecoder = new TextDecoder("ascii")
                }
                emptyBuffer() {
                    return o.emptyBuffer
                }
                fromString(e, t) {
                    return (new TextEncoder).encode(e)
                }
                toString(e, t) {
                    return "ascii" === t ? this.asciiDecoder.decode(e) : new TextDecoder(t).decode(e)
                }
                asNative(e, t) {
                    return void 0 === t ? e : e.slice(0, t)
                }
                allocNative(e) {
                    return new Uint8Array(e)
                }
            }
            o.emptyBuffer = new Uint8Array(0);
            class s {
                constructor(e) {
                    this.socket = e, this._onData = new r.Emitter, this._messageListener = e => {
                        e.data.arrayBuffer().then((e => {
                            this._onData.fire(new Uint8Array(e))
                        }), (() => {
                            (0, r.RAL)().console.error("Converting blob to array buffer failed.")
                        }))
                    }, this.socket.addEventListener("message", this._messageListener)
                }
                onClose(e) {
                    return this.socket.addEventListener("close", e), r.Disposable.create((() => this.socket.removeEventListener("close", e)))
                }
                onError(e) {
                    return this.socket.addEventListener("error", e), r.Disposable.create((() => this.socket.removeEventListener("error", e)))
                }
                onEnd(e) {
                    return this.socket.addEventListener("end", e), r.Disposable.create((() => this.socket.removeEventListener("end", e)))
                }
                onData(e) {
                    return this._onData.event(e)
                }
            }
            class a {
                constructor(e) {
                    this.socket = e
                }
                onClose(e) {
                    return this.socket.addEventListener("close", e), r.Disposable.create((() => this.socket.removeEventListener("close", e)))
                }
                onError(e) {
                    return this.socket.addEventListener("error", e), r.Disposable.create((() => this.socket.removeEventListener("error", e)))
                }
                onEnd(e) {
                    return this.socket.addEventListener("end", e), r.Disposable.create((() => this.socket.removeEventListener("end", e)))
                }
                write(e, t) {
                    if ("string" == typeof e) {
                        if (void 0 !== t && "utf-8" !== t) throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t}`);
                        this.socket.send(e)
                    } else this.socket.send(e);
                    return Promise.resolve()
                }
                end() {
                    this.socket.close()
                }
            }
            const c = new TextEncoder,
                u = Object.freeze({
                    messageBuffer: Object.freeze({
                        create: e => new o(e)
                    }),
                    applicationJson: Object.freeze({
                        encoder: Object.freeze({
                            name: "application/json",
                            encode: (e, t) => {
                                if ("utf-8" !== t.charset) throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);
                                return Promise.resolve(c.encode(JSON.stringify(e, void 0, 0)))
                            }
                        }),
                        decoder: Object.freeze({
                            name: "application/json",
                            decode: (e, t) => {
                                if (!(e instanceof Uint8Array)) throw new Error("In a Browser environments only Uint8Arrays are supported.");
                                return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)))
                            }
                        })
                    }),
                    stream: Object.freeze({
                        asReadableStream: e => new s(e),
                        asWritableStream: e => new a(e)
                    }),
                    console: i,
                    timer: Object.freeze({
                        setTimeout(e, t, ...n) {
                            const i = setTimeout(e, t, ...n);
                            return {
                                dispose: () => clearTimeout(i)
                            }
                        },
                        setImmediate(e, ...t) {
                            const n = setTimeout(e, 0, ...t);
                            return {
                                dispose: () => clearTimeout(n)
                            }
                        },
                        setInterval(e, t, ...n) {
                            const i = setInterval(e, t, ...n);
                            return {
                                dispose: () => clearInterval(i)
                            }
                        }
                    })
                });

            function l() {
                return u
            }! function(e) {
                e.install = function() {
                    r.RAL.install(u)
                }
            }(l || (l = {})), t.default = l
        },
        "3Ajj": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProgressType = t.ProgressToken = t.createMessageConnection = t.NullLogger = t.ConnectionOptions = t.ConnectionStrategy = t.AbstractMessageBuffer = t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = t.CancellationToken = t.CancellationTokenSource = t.Emitter = t.Event = t.Disposable = t.LRUCache = t.Touch = t.LinkedMap = t.ParameterStructures = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.ErrorCodes = t.ResponseError = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType0 = t.RequestType = t.Message = t.RAL = void 0, t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = void 0;
            const i = n("nfmn");
            Object.defineProperty(t, "Message", {
                enumerable: !0,
                get: function() {
                    return i.Message
                }
            }), Object.defineProperty(t, "RequestType", {
                enumerable: !0,
                get: function() {
                    return i.RequestType
                }
            }), Object.defineProperty(t, "RequestType0", {
                enumerable: !0,
                get: function() {
                    return i.RequestType0
                }
            }), Object.defineProperty(t, "RequestType1", {
                enumerable: !0,
                get: function() {
                    return i.RequestType1
                }
            }), Object.defineProperty(t, "RequestType2", {
                enumerable: !0,
                get: function() {
                    return i.RequestType2
                }
            }), Object.defineProperty(t, "RequestType3", {
                enumerable: !0,
                get: function() {
                    return i.RequestType3
                }
            }), Object.defineProperty(t, "RequestType4", {
                enumerable: !0,
                get: function() {
                    return i.RequestType4
                }
            }), Object.defineProperty(t, "RequestType5", {
                enumerable: !0,
                get: function() {
                    return i.RequestType5
                }
            }), Object.defineProperty(t, "RequestType6", {
                enumerable: !0,
                get: function() {
                    return i.RequestType6
                }
            }), Object.defineProperty(t, "RequestType7", {
                enumerable: !0,
                get: function() {
                    return i.RequestType7
                }
            }), Object.defineProperty(t, "RequestType8", {
                enumerable: !0,
                get: function() {
                    return i.RequestType8
                }
            }), Object.defineProperty(t, "RequestType9", {
                enumerable: !0,
                get: function() {
                    return i.RequestType9
                }
            }), Object.defineProperty(t, "ResponseError", {
                enumerable: !0,
                get: function() {
                    return i.ResponseError
                }
            }), Object.defineProperty(t, "ErrorCodes", {
                enumerable: !0,
                get: function() {
                    return i.ErrorCodes
                }
            }), Object.defineProperty(t, "NotificationType", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType
                }
            }), Object.defineProperty(t, "NotificationType0", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType0
                }
            }), Object.defineProperty(t, "NotificationType1", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType1
                }
            }), Object.defineProperty(t, "NotificationType2", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType2
                }
            }), Object.defineProperty(t, "NotificationType3", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType3
                }
            }), Object.defineProperty(t, "NotificationType4", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType4
                }
            }), Object.defineProperty(t, "NotificationType5", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType5
                }
            }), Object.defineProperty(t, "NotificationType6", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType6
                }
            }), Object.defineProperty(t, "NotificationType7", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType7
                }
            }), Object.defineProperty(t, "NotificationType8", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType8
                }
            }), Object.defineProperty(t, "NotificationType9", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType9
                }
            }), Object.defineProperty(t, "ParameterStructures", {
                enumerable: !0,
                get: function() {
                    return i.ParameterStructures
                }
            });
            const r = n("vT6i");
            Object.defineProperty(t, "LinkedMap", {
                enumerable: !0,
                get: function() {
                    return r.LinkedMap
                }
            }), Object.defineProperty(t, "LRUCache", {
                enumerable: !0,
                get: function() {
                    return r.LRUCache
                }
            }), Object.defineProperty(t, "Touch", {
                enumerable: !0,
                get: function() {
                    return r.Touch
                }
            });
            const o = n("vVKH");
            Object.defineProperty(t, "Disposable", {
                enumerable: !0,
                get: function() {
                    return o.Disposable
                }
            });
            const s = n("OWWC");
            Object.defineProperty(t, "Event", {
                enumerable: !0,
                get: function() {
                    return s.Event
                }
            }), Object.defineProperty(t, "Emitter", {
                enumerable: !0,
                get: function() {
                    return s.Emitter
                }
            });
            const a = n("FSGG");
            Object.defineProperty(t, "CancellationTokenSource", {
                enumerable: !0,
                get: function() {
                    return a.CancellationTokenSource
                }
            }), Object.defineProperty(t, "CancellationToken", {
                enumerable: !0,
                get: function() {
                    return a.CancellationToken
                }
            });
            const c = n("BJFx");
            Object.defineProperty(t, "SharedArraySenderStrategy", {
                enumerable: !0,
                get: function() {
                    return c.SharedArraySenderStrategy
                }
            }), Object.defineProperty(t, "SharedArrayReceiverStrategy", {
                enumerable: !0,
                get: function() {
                    return c.SharedArrayReceiverStrategy
                }
            });
            const u = n("HJml");
            Object.defineProperty(t, "MessageReader", {
                enumerable: !0,
                get: function() {
                    return u.MessageReader
                }
            }), Object.defineProperty(t, "AbstractMessageReader", {
                enumerable: !0,
                get: function() {
                    return u.AbstractMessageReader
                }
            }), Object.defineProperty(t, "ReadableStreamMessageReader", {
                enumerable: !0,
                get: function() {
                    return u.ReadableStreamMessageReader
                }
            });
            const l = n("YXUh");
            Object.defineProperty(t, "MessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.MessageWriter
                }
            }), Object.defineProperty(t, "AbstractMessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.AbstractMessageWriter
                }
            }), Object.defineProperty(t, "WriteableStreamMessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.WriteableStreamMessageWriter
                }
            });
            const d = n("ekKo");
            Object.defineProperty(t, "AbstractMessageBuffer", {
                enumerable: !0,
                get: function() {
                    return d.AbstractMessageBuffer
                }
            });
            const h = n("wFnw");
            Object.defineProperty(t, "ConnectionStrategy", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionStrategy
                }
            }), Object.defineProperty(t, "ConnectionOptions", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionOptions
                }
            }), Object.defineProperty(t, "NullLogger", {
                enumerable: !0,
                get: function() {
                    return h.NullLogger
                }
            }), Object.defineProperty(t, "createMessageConnection", {
                enumerable: !0,
                get: function() {
                    return h.createMessageConnection
                }
            }), Object.defineProperty(t, "ProgressToken", {
                enumerable: !0,
                get: function() {
                    return h.ProgressToken
                }
            }), Object.defineProperty(t, "ProgressType", {
                enumerable: !0,
                get: function() {
                    return h.ProgressType
                }
            }), Object.defineProperty(t, "Trace", {
                enumerable: !0,
                get: function() {
                    return h.Trace
                }
            }), Object.defineProperty(t, "TraceValues", {
                enumerable: !0,
                get: function() {
                    return h.TraceValues
                }
            }), Object.defineProperty(t, "TraceFormat", {
                enumerable: !0,
                get: function() {
                    return h.TraceFormat
                }
            }), Object.defineProperty(t, "SetTraceNotification", {
                enumerable: !0,
                get: function() {
                    return h.SetTraceNotification
                }
            }), Object.defineProperty(t, "LogTraceNotification", {
                enumerable: !0,
                get: function() {
                    return h.LogTraceNotification
                }
            }), Object.defineProperty(t, "ConnectionErrors", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionErrors
                }
            }), Object.defineProperty(t, "ConnectionError", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionError
                }
            }), Object.defineProperty(t, "CancellationReceiverStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationReceiverStrategy
                }
            }), Object.defineProperty(t, "CancellationSenderStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationSenderStrategy
                }
            }), Object.defineProperty(t, "CancellationStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationStrategy
                }
            }), Object.defineProperty(t, "MessageStrategy", {
                enumerable: !0,
                get: function() {
                    return h.MessageStrategy
                }
            });
            const p = n("q94H");
            t.RAL = p.default
        },
        FSGG: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CancellationTokenSource = t.CancellationToken = void 0;
            const i = n("q94H"),
                r = n("Dvax"),
                o = n("OWWC");
            var s;
            ! function(e) {
                e.None = Object.freeze({
                    isCancellationRequested: !1,
                    onCancellationRequested: o.Event.None
                }), e.Cancelled = Object.freeze({
                    isCancellationRequested: !0,
                    onCancellationRequested: o.Event.None
                }), e.is = function(t) {
                    const n = t;
                    return n && (n === e.None || n === e.Cancelled || r.boolean(n.isCancellationRequested) && !!n.onCancellationRequested)
                }
            }(s || (t.CancellationToken = s = {}));
            const a = Object.freeze((function(e, t) {
                const n = (0, i.default)().timer.setTimeout(e.bind(t), 0);
                return {
                    dispose() {
                        n.dispose()
                    }
                }
            }));
            class c {
                constructor() {
                    this._isCancelled = !1
                }
                cancel() {
                    this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()))
                }
                get isCancellationRequested() {
                    return this._isCancelled
                }
                get onCancellationRequested() {
                    return this._isCancelled ? a : (this._emitter || (this._emitter = new o.Emitter), this._emitter.event)
                }
                dispose() {
                    this._emitter && (this._emitter.dispose(), this._emitter = void 0)
                }
            }
            t.CancellationTokenSource = class {
                get token() {
                    return this._token || (this._token = new c), this._token
                }
                cancel() {
                    this._token ? this._token.cancel() : this._token = s.Cancelled
                }
                dispose() {
                    this._token ? this._token instanceof c && this._token.dispose() : this._token = s.None
                }
            }
        },
        wFnw: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMessageConnection = t.ConnectionOptions = t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.RequestCancellationReceiverStrategy = t.IdCancellationReceiverStrategy = t.ConnectionStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = t.NullLogger = t.ProgressType = t.ProgressToken = void 0;
            const i = n("q94H"),
                r = n("Dvax"),
                o = n("nfmn"),
                s = n("vT6i"),
                a = n("OWWC"),
                c = n("FSGG");
            var u, l, d, h, p, g, m, f, y, v, C, b, D, R, _, w, T, S, k;
            ! function(e) {
                e.type = new o.NotificationType("$/cancelRequest")
            }(u || (u = {})),
            function(e) {
                e.is = function(e) {
                    return "string" == typeof e || "number" == typeof e
                }
            }(l || (t.ProgressToken = l = {})),
            function(e) {
                e.type = new o.NotificationType("$/progress")
            }(d || (d = {})), t.ProgressType = class {
                    constructor() {}
                },
                function(e) {
                    e.is = function(e) {
                        return r.func(e)
                    }
                }(h || (h = {})), t.NullLogger = Object.freeze({
                    error: () => {},
                    warn: () => {},
                    info: () => {},
                    log: () => {}
                }),
                function(e) {
                    e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", e[e.Verbose = 3] = "Verbose"
                }(p || (t.Trace = p = {})),
                function(e) {
                    e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose"
                }(g || (t.TraceValues = g = {})),
                function(e) {
                    e.fromString = function(t) {
                        if (!r.string(t)) return e.Off;
                        switch (t = t.toLowerCase()) {
                            case "off":
                            default:
                                return e.Off;
                            case "messages":
                                return e.Messages;
                            case "compact":
                                return e.Compact;
                            case "verbose":
                                return e.Verbose
                        }
                    }, e.toString = function(t) {
                        switch (t) {
                            case e.Off:
                                return "off";
                            case e.Messages:
                                return "messages";
                            case e.Compact:
                                return "compact";
                            case e.Verbose:
                                return "verbose";
                            default:
                                return "off"
                        }
                    }
                }(p || (t.Trace = p = {})),
                function(e) {
                    e.Text = "text", e.JSON = "json"
                }(m || (t.TraceFormat = m = {})),
                function(e) {
                    e.fromString = function(t) {
                        return r.string(t) && "json" === (t = t.toLowerCase()) ? e.JSON : e.Text
                    }
                }(m || (t.TraceFormat = m = {})),
                function(e) {
                    e.type = new o.NotificationType("$/setTrace")
                }(f || (t.SetTraceNotification = f = {})),
                function(e) {
                    e.type = new o.NotificationType("$/logTrace")
                }(y || (t.LogTraceNotification = y = {})),
                function(e) {
                    e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening"
                }(v || (t.ConnectionErrors = v = {}));
            class P extends Error {
                constructor(e, t) {
                    super(t), this.code = e, Object.setPrototypeOf(this, P.prototype)
                }
            }
            t.ConnectionError = P,
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && r.func(t.cancelUndispatched)
                    }
                }(C || (t.ConnectionStrategy = C = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && (void 0 === t.kind || "id" === t.kind) && r.func(t.createCancellationTokenSource) && (void 0 === t.dispose || r.func(t.dispose))
                    }
                }(b || (t.IdCancellationReceiverStrategy = b = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && "request" === t.kind && r.func(t.createCancellationTokenSource) && (void 0 === t.dispose || r.func(t.dispose))
                    }
                }(D || (t.RequestCancellationReceiverStrategy = D = {})),
                function(e) {
                    e.Message = Object.freeze({
                        createCancellationTokenSource: e => new c.CancellationTokenSource
                    }), e.is = function(e) {
                        return b.is(e) || D.is(e)
                    }
                }(R || (t.CancellationReceiverStrategy = R = {})),
                function(e) {
                    e.Message = Object.freeze({
                        sendCancellation: (e, t) => e.sendNotification(u.type, {
                            id: t
                        }),
                        cleanup(e) {}
                    }), e.is = function(e) {
                        const t = e;
                        return t && r.func(t.sendCancellation) && r.func(t.cleanup)
                    }
                }(_ || (t.CancellationSenderStrategy = _ = {})),
                function(e) {
                    e.Message = Object.freeze({
                        receiver: R.Message,
                        sender: _.Message
                    }), e.is = function(e) {
                        const t = e;
                        return t && R.is(t.receiver) && _.is(t.sender)
                    }
                }(w || (t.CancellationStrategy = w = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && r.func(t.handleMessage)
                    }
                }(T || (t.MessageStrategy = T = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && (w.is(t.cancellationStrategy) || C.is(t.connectionStrategy) || T.is(t.messageStrategy))
                    }
                }(S || (t.ConnectionOptions = S = {})),
                function(e) {
                    e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", e[e.Disposed = 4] = "Disposed"
                }(k || (k = {})), t.createMessageConnection = function(e, n, g, C) {
                    const D = void 0 !== g ? g : t.NullLogger;
                    let R = 0,
                        _ = 0,
                        S = 0;
                    const x = "2.0";
                    let E;
                    const O = new Map;
                    let q;
                    const M = new Map,
                        F = new Map;
                    let N, I, L = new s.LinkedMap,
                        j = new Map,
                        A = new Set,
                        H = new Map,
                        W = p.Off,
                        K = m.Text,
                        U = k.New;
                    const z = new a.Emitter,
                        $ = new a.Emitter,
                        V = new a.Emitter,
                        J = new a.Emitter,
                        B = new a.Emitter,
                        Q = C && C.cancellationStrategy ? C.cancellationStrategy : w.Message;

                    function G(e) {
                        if (null === e) throw new Error("Can't send requests with id null since the response can't be correlated.");
                        return "req-" + e.toString()
                    }

                    function Z(e) {}

                    function X() {
                        return U === k.Listening
                    }

                    function Y() {
                        return U === k.Closed
                    }

                    function ee() {
                        return U === k.Disposed
                    }

                    function te() {
                        U !== k.New && U !== k.Listening || (U = k.Closed, $.fire(void 0))
                    }

                    function ne() {
                        N || 0 === L.size || (N = (0, i.default)().timer.setImmediate((() => {
                            N = void 0,
                                function() {
                                    if (0 === L.size) return;
                                    const e = L.shift();
                                    try {
                                        const t = C ? .messageStrategy;
                                        T.is(t) ? t.handleMessage(e, ie) : ie(e)
                                    } finally {
                                        ne()
                                    }
                                }()
                        })))
                    }

                    function ie(e) {
                        o.Message.isRequest(e) ? function(e) {
                            if (ee()) return;

                            function t(t, i, r) {
                                const s = {
                                    jsonrpc: x,
                                    id: e.id
                                };
                                t instanceof o.ResponseError ? s.error = t.toJson() : s.result = void 0 === t ? null : t, se(s, i, r), n.write(s).catch((() => D.error("Sending response failed.")))
                            }

                            function i(t, i, r) {
                                const o = {
                                    jsonrpc: x,
                                    id: e.id,
                                    error: t.toJson()
                                };
                                se(o, i, r), n.write(o).catch((() => D.error("Sending response failed.")))
                            }! function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || !e.params || (t = `Params: ${oe(e.params)}\n\n`), I.log(`Received request '${e.method} - (${e.id})'.`, t)
                                    } else ce("receive-request", e)
                            }(e);
                            const s = O.get(e.method);
                            let a, c;
                            s && (a = s.type, c = s.handler);
                            const u = Date.now();
                            if (c || E) {
                                const s = e.id ? ? String(Date.now()),
                                    l = b.is(Q.receiver) ? Q.receiver.createCancellationTokenSource(s) : Q.receiver.createCancellationTokenSource(e);
                                null !== e.id && A.has(e.id) && l.cancel(), null !== e.id && H.set(s, l);
                                try {
                                    let d;
                                    if (c)
                                        if (void 0 === e.params) {
                                            if (void 0 !== a && 0 !== a.numberOfParams) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines ${a.numberOfParams} params but received none.`), e.method, u);
                                            d = c(l.token)
                                        } else if (Array.isArray(e.params)) {
                                        if (void 0 !== a && a.parameterStructures === o.ParameterStructures.byName) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by name but received parameters by position`), e.method, u);
                                        d = c(...e.params, l.token)
                                    } else {
                                        if (void 0 !== a && a.parameterStructures === o.ParameterStructures.byPosition) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by position but received parameters by name`), e.method, u);
                                        d = c(e.params, l.token)
                                    } else E && (d = E(e.method, e.params, l.token));
                                    const h = d;
                                    d ? h.then ? h.then((n => {
                                        H.delete(s), t(n, e.method, u)
                                    }), (t => {
                                        H.delete(s), t instanceof o.ResponseError ? i(t, e.method, u) : t && r.string(t.message) ? i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${t.message}`), e.method, u) : i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u)
                                    })) : (H.delete(s), t(d, e.method, u)) : (H.delete(s), function(t, i, r) {
                                        void 0 === t && (t = null);
                                        const o = {
                                            jsonrpc: x,
                                            id: e.id,
                                            result: t
                                        };
                                        se(o, i, r), n.write(o).catch((() => D.error("Sending response failed.")))
                                    }(d, e.method, u))
                                } catch (n) {
                                    H.delete(s), n instanceof o.ResponseError ? t(n, e.method, u) : n && r.string(n.message) ? i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${n.message}`), e.method, u) : i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u)
                                }
                            } else i(new o.ResponseError(o.ErrorCodes.MethodNotFound, `Unhandled method ${e.method}`), e.method, u)
                        }(e) : o.Message.isNotification(e) ? function(e) {
                            if (ee()) return;
                            let t, n;
                            if (e.method === u.type.method) {
                                const t = e.params.id;
                                return A.delete(t), void ae(e)
                            } {
                                const i = M.get(e.method);
                                i && (n = i.handler, t = i.type)
                            }
                            if (n || q) try {
                                if (ae(e), n)
                                    if (void 0 === e.params) void 0 !== t && 0 !== t.numberOfParams && t.parameterStructures !== o.ParameterStructures.byName && D.error(`Notification ${e.method} defines ${t.numberOfParams} params but received none.`), n();
                                    else if (Array.isArray(e.params)) {
                                    const i = e.params;
                                    e.method === d.type.method && 2 === i.length && l.is(i[0]) ? n({
                                        token: i[0],
                                        value: i[1]
                                    }) : (void 0 !== t && (t.parameterStructures === o.ParameterStructures.byName && D.error(`Notification ${e.method} defines parameters by name but received parameters by position`), t.numberOfParams !== e.params.length && D.error(`Notification ${e.method} defines ${t.numberOfParams} params but received ${i.length} arguments`)), n(...i))
                                } else void 0 !== t && t.parameterStructures === o.ParameterStructures.byPosition && D.error(`Notification ${e.method} defines parameters by position but received parameters by name`), n(e.params);
                                else q && q(e.method, e.params)
                            } catch (t) {
                                t.message ? D.error(`Notification handler '${e.method}' failed with message: ${t.message}`) : D.error(`Notification handler '${e.method}' failed unexpectedly.`)
                            } else V.fire(e)
                        }(e) : o.Message.isResponse(e) ? function(e) {
                            if (!ee())
                                if (null === e.id) e.error ? D.error(`Received response message without id: Error is: \n${JSON.stringify(e.error,void 0,4)}`) : D.error("Received response message without id. No further error information provided.");
                                else {
                                    const t = e.id,
                                        n = j.get(t);
                                    if (function(e, t) {
                                            if (W !== p.Off && I)
                                                if (K === m.Text) {
                                                    let n;
                                                    if (W !== p.Verbose && W !== p.Compact || (e.error && e.error.data ? n = `Error data: ${oe(e.error.data)}\n\n` : e.result ? n = `Result: ${oe(e.result)}\n\n` : void 0 === e.error && (n = "No result returned.\n\n")), t) {
                                                        const i = e.error ? ` Request failed: ${e.error.message} (${e.error.code}).` : "";
                                                        I.log(`Received response '${t.method} - (${e.id})' in ${Date.now()-t.timerStart}ms.${i}`, n)
                                                    } else I.log(`Received response ${e.id} without active response promise.`, n)
                                                } else ce("receive-response", e)
                                        }(e, n), void 0 !== n) {
                                        j.delete(t);
                                        try {
                                            if (e.error) {
                                                const t = e.error;
                                                n.reject(new o.ResponseError(t.code, t.message, t.data))
                                            } else {
                                                if (void 0 === e.result) throw new Error("Should never happen.");
                                                n.resolve(e.result)
                                            }
                                        } catch (e) {
                                            e.message ? D.error(`Response handler '${n.method}' failed with message: ${e.message}`) : D.error(`Response handler '${n.method}' failed unexpectedly.`)
                                        }
                                    }
                                }
                        }(e) : function(e) {
                            if (!e) return void D.error("Received empty message.");
                            D.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(e,null,4)}`);
                            const t = e;
                            if (r.string(t.id) || r.number(t.id)) {
                                const e = t.id,
                                    n = j.get(e);
                                n && n.reject(new Error("The received response has neither a result nor an error property."))
                            }
                        }(e)
                    }
                    e.onClose(te), e.onError((function(e) {
                        z.fire([e, void 0, void 0])
                    })), n.onClose(te), n.onError((function(e) {
                        z.fire(e)
                    }));
                    const re = e => {
                        try {
                            if (o.Message.isNotification(e) && e.method === u.type.method) {
                                const t = e.params.id,
                                    i = G(t),
                                    r = L.get(i);
                                if (o.Message.isRequest(r)) {
                                    const o = C ? .connectionStrategy,
                                        s = o && o.cancelUndispatched ? o.cancelUndispatched(r, Z) : void 0;
                                    if (s && (void 0 !== s.error || void 0 !== s.result)) return L.delete(i), H.delete(t), s.id = r.id, se(s, e.method, Date.now()), void n.write(s).catch((() => D.error("Sending response for canceled message failed.")))
                                }
                                const s = H.get(t);
                                if (void 0 !== s) return s.cancel(), void ae(e);
                                A.add(t)
                            }! function(e, t) {
                                var n;
                                o.Message.isRequest(t) ? e.set(G(t.id), t) : o.Message.isResponse(t) ? e.set(null === (n = t.id) ? "res-unknown-" + (++S).toString() : "res-" + n.toString(), t) : e.set("not-" + (++_).toString(), t)
                            }(L, e)
                        } finally {
                            ne()
                        }
                    };

                    function oe(e) {
                        if (null != e) switch (W) {
                            case p.Verbose:
                                return JSON.stringify(e, null, 4);
                            case p.Compact:
                                return JSON.stringify(e);
                            default:
                                return
                        }
                    }

                    function se(e, t, n) {
                        if (W !== p.Off && I)
                            if (K === m.Text) {
                                let i;
                                W !== p.Verbose && W !== p.Compact || (e.error && e.error.data ? i = `Error data: ${oe(e.error.data)}\n\n` : e.result ? i = `Result: ${oe(e.result)}\n\n` : void 0 === e.error && (i = "No result returned.\n\n")), I.log(`Sending response '${t} - (${e.id})'. Processing request took ${Date.now()-n}ms`, i)
                            } else ce("send-response", e)
                    }

                    function ae(e) {
                        if (W !== p.Off && I && e.method !== y.type.method)
                            if (K === m.Text) {
                                let t;
                                W !== p.Verbose && W !== p.Compact || (t = e.params ? `Params: ${oe(e.params)}\n\n` : "No parameters provided.\n\n"), I.log(`Received notification '${e.method}'.`, t)
                            } else ce("receive-notification", e)
                    }

                    function ce(e, t) {
                        if (!I || W === p.Off) return;
                        const n = {
                            isLSPMessage: !0,
                            type: e,
                            message: t,
                            timestamp: Date.now()
                        };
                        I.log(n)
                    }

                    function ue() {
                        if (Y()) throw new P(v.Closed, "Connection is closed.");
                        if (ee()) throw new P(v.Disposed, "Connection is disposed.")
                    }

                    function le(e) {
                        return void 0 === e ? null : e
                    }

                    function de(e) {
                        return null === e ? void 0 : e
                    }

                    function he(e) {
                        return null != e && !Array.isArray(e) && "object" == typeof e
                    }

                    function pe(e, t) {
                        switch (e) {
                            case o.ParameterStructures.auto:
                                return he(t) ? de(t) : [le(t)];
                            case o.ParameterStructures.byName:
                                if (!he(t)) throw new Error("Received parameters by name but param is not an object literal.");
                                return de(t);
                            case o.ParameterStructures.byPosition:
                                return [le(t)];
                            default:
                                throw new Error(`Unknown parameter structure ${e.toString()}`)
                        }
                    }

                    function ge(e, t) {
                        let n;
                        const i = e.numberOfParams;
                        switch (i) {
                            case 0:
                                n = void 0;
                                break;
                            case 1:
                                n = pe(e.parameterStructures, t[0]);
                                break;
                            default:
                                n = [];
                                for (let e = 0; e < t.length && e < i; e++) n.push(le(t[e]));
                                if (t.length < i)
                                    for (let e = t.length; e < i; e++) n.push(null)
                        }
                        return n
                    }
                    const me = {
                        sendNotification: (e, ...t) => {
                            let i, s;
                            if (ue(), r.string(e)) {
                                i = e;
                                const n = t[0];
                                let r = 0,
                                    a = o.ParameterStructures.auto;
                                o.ParameterStructures.is(n) && (r = 1, a = n);
                                let c = t.length;
                                const u = c - r;
                                switch (u) {
                                    case 0:
                                        s = void 0;
                                        break;
                                    case 1:
                                        s = pe(a, t[r]);
                                        break;
                                    default:
                                        if (a === o.ParameterStructures.byName) throw new Error(`Received ${u} parameters for 'by Name' notification parameter structure.`);
                                        s = t.slice(r, c).map((e => le(e)))
                                }
                            } else {
                                const n = t;
                                i = e.method, s = ge(e, n)
                            }
                            const a = {
                                jsonrpc: x,
                                method: i,
                                params: s
                            };
                            return function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || (t = e.params ? `Params: ${oe(e.params)}\n\n` : "No parameters provided.\n\n"), I.log(`Sending notification '${e.method}'.`, t)
                                    } else ce("send-notification", e)
                            }(a), n.write(a).catch((e => {
                                throw D.error("Sending notification failed."), e
                            }))
                        },
                        onNotification: (e, t) => {
                            let n;
                            return ue(), r.func(e) ? q = e : t && (r.string(e) ? (n = e, M.set(e, {
                                type: void 0,
                                handler: t
                            })) : (n = e.method, M.set(e.method, {
                                type: e,
                                handler: t
                            }))), {
                                dispose: () => {
                                    void 0 !== n ? M.delete(n) : q = void 0
                                }
                            }
                        },
                        onProgress: (e, t, n) => {
                            if (F.has(t)) throw new Error(`Progress handler for token ${t} already registered`);
                            return F.set(t, n), {
                                dispose: () => {
                                    F.delete(t)
                                }
                            }
                        },
                        sendProgress: (e, t, n) => me.sendNotification(d.type, {
                            token: t,
                            value: n
                        }),
                        onUnhandledProgress: J.event,
                        sendRequest: (e, ...t) => {
                            let i, s, a;
                            if (ue(), function() {
                                    if (!X()) throw new Error("Call listen() first.")
                                }(), r.string(e)) {
                                i = e;
                                const n = t[0],
                                    r = t[t.length - 1];
                                let u = 0,
                                    l = o.ParameterStructures.auto;
                                o.ParameterStructures.is(n) && (u = 1, l = n);
                                let d = t.length;
                                c.CancellationToken.is(r) && (d -= 1, a = r);
                                const h = d - u;
                                switch (h) {
                                    case 0:
                                        s = void 0;
                                        break;
                                    case 1:
                                        s = pe(l, t[u]);
                                        break;
                                    default:
                                        if (l === o.ParameterStructures.byName) throw new Error(`Received ${h} parameters for 'by Name' request parameter structure.`);
                                        s = t.slice(u, d).map((e => le(e)))
                                }
                            } else {
                                const n = t;
                                i = e.method, s = ge(e, n);
                                const r = e.numberOfParams;
                                a = c.CancellationToken.is(n[r]) ? n[r] : void 0
                            }
                            const u = R++;
                            let l;
                            a && (l = a.onCancellationRequested((() => {
                                const e = Q.sender.sendCancellation(me, u);
                                return void 0 === e ? (D.log(`Received no promise from cancellation strategy when cancelling id ${u}`), Promise.resolve()) : e.catch((() => {
                                    D.log(`Sending cancellation messages for id ${u} failed`)
                                }))
                            })));
                            const d = {
                                jsonrpc: x,
                                id: u,
                                method: i,
                                params: s
                            };
                            return function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || !e.params || (t = `Params: ${oe(e.params)}\n\n`), I.log(`Sending request '${e.method} - (${e.id})'.`, t)
                                    } else ce("send-request", e)
                            }(d), "function" == typeof Q.sender.enableCancellation && Q.sender.enableCancellation(d), new Promise((async (e, t) => {
                                const r = {
                                    method: i,
                                    timerStart: Date.now(),
                                    resolve: t => {
                                        e(t), Q.sender.cleanup(u), l ? .dispose()
                                    },
                                    reject: e => {
                                        t(e), Q.sender.cleanup(u), l ? .dispose()
                                    }
                                };
                                try {
                                    j.set(u, r), await n.write(d)
                                } catch (e) {
                                    throw j.delete(u), r.reject(new o.ResponseError(o.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason")), D.error("Sending request failed."), e
                                }
                            }))
                        },
                        onRequest: (e, t) => {
                            ue();
                            let n = null;
                            return h.is(e) ? (n = void 0, E = e) : r.string(e) ? (n = null, void 0 !== t && (n = e, O.set(e, {
                                handler: t,
                                type: void 0
                            }))) : void 0 !== t && (n = e.method, O.set(e.method, {
                                type: e,
                                handler: t
                            })), {
                                dispose: () => {
                                    null !== n && (void 0 !== n ? O.delete(n) : E = void 0)
                                }
                            }
                        },
                        hasPendingResponse: () => j.size > 0,
                        trace: async (e, t, n) => {
                            let i = !1,
                                o = m.Text;
                            void 0 !== n && (r.boolean(n) ? i = n : (i = n.sendNotification || !1, o = n.traceFormat || m.Text)), W = e, K = o, I = W === p.Off ? void 0 : t, !i || Y() || ee() || await me.sendNotification(f.type, {
                                value: p.toString(e)
                            })
                        },
                        onError: z.event,
                        onClose: $.event,
                        onUnhandledNotification: V.event,
                        onDispose: B.event,
                        end: () => {
                            n.end()
                        },
                        dispose: () => {
                            if (ee()) return;
                            U = k.Disposed, B.fire(void 0);
                            const t = new o.ResponseError(o.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
                            for (const e of j.values()) e.reject(t);
                            j = new Map, H = new Map, A = new Set, L = new s.LinkedMap, r.func(n.dispose) && n.dispose(), r.func(e.dispose) && e.dispose()
                        },
                        listen: () => {
                            ue(),
                                function() {
                                    if (X()) throw new P(v.AlreadyListening, "Connection is already listening")
                                }(), U = k.Listening, e.listen(re)
                        },
                        inspect: () => {
                            (0, i.default)().console.log("inspect")
                        }
                    };
                    return me.onNotification(y.type, (e => {
                        if (W === p.Off || !I) return;
                        const t = W === p.Verbose || W === p.Compact;
                        I.log(e.message, t ? e.verbose : void 0)
                    })), me.onNotification(d.type, (e => {
                        const t = F.get(e.token);
                        t ? t(e.value) : J.fire(e)
                    })), me
                }
        },
        vVKH: (e, t) => {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Disposable = void 0,
                function(e) {
                    e.create = function(e) {
                        return {
                            dispose: e
                        }
                    }
                }(n || (t.Disposable = n = {}))
        },
        OWWC: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Emitter = t.Event = void 0;
            const i = n("q94H");
            var r;
            ! function(e) {
                const t = {
                    dispose() {}
                };
                e.None = function() {
                    return t
                }
            }(r || (t.Event = r = {}));
            class o {
                add(e, t = null, n) {
                    this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({
                        dispose: () => this.remove(e, t)
                    })
                }
                remove(e, t = null) {
                    if (!this._callbacks) return;
                    let n = !1;
                    for (let i = 0, r = this._callbacks.length; i < r; i++)
                        if (this._callbacks[i] === e) {
                            if (this._contexts[i] === t) return this._callbacks.splice(i, 1), void this._contexts.splice(i, 1);
                            n = !0
                        }
                    if (n) throw new Error("When adding a listener with a context, you should remove it with the same context")
                }
                invoke(...e) {
                    if (!this._callbacks) return [];
                    const t = [],
                        n = this._callbacks.slice(0),
                        r = this._contexts.slice(0);
                    for (let o = 0, s = n.length; o < s; o++) try {
                        t.push(n[o].apply(r[o], e))
                    } catch (e) {
                        (0, i.default)().console.error(e)
                    }
                    return t
                }
                isEmpty() {
                    return !this._callbacks || 0 === this._callbacks.length
                }
                dispose() {
                    this._callbacks = void 0, this._contexts = void 0
                }
            }
            class s {
                constructor(e) {
                    this._options = e
                }
                get event() {
                    return this._event || (this._event = (e, t, n) => {
                        this._callbacks || (this._callbacks = new o), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
                        const i = {
                            dispose: () => {
                                this._callbacks && (this._callbacks.remove(e, t), i.dispose = s._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this))
                            }
                        };
                        return Array.isArray(n) && n.push(i), i
                    }), this._event
                }
                fire(e) {
                    this._callbacks && this._callbacks.invoke.call(this._callbacks, e)
                }
                dispose() {
                    this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0)
                }
            }
            t.Emitter = s, s._noop = function() {}
        },
        Dvax: (e, t) => {
            "use strict";

            function n(e) {
                return "string" == typeof e || e instanceof String
            }

            function i(e) {
                return Array.isArray(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0, t.boolean = function(e) {
                return !0 === e || !1 === e
            }, t.string = n, t.number = function(e) {
                return "number" == typeof e || e instanceof Number
            }, t.error = function(e) {
                return e instanceof Error
            }, t.func = function(e) {
                return "function" == typeof e
            }, t.array = i, t.stringArray = function(e) {
                return i(e) && e.every((e => n(e)))
            }
        },
        vT6i: (e, t) => {
            "use strict";
            var n, i;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LRUCache = t.LinkedMap = t.Touch = void 0,
                function(e) {
                    e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last
                }(i || (t.Touch = i = {}));
            class r {
                constructor() {
                    this[n] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
                }
                clear() {
                    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++
                }
                isEmpty() {
                    return !this._head && !this._tail
                }
                get size() {
                    return this._size
                }
                get first() {
                    return this._head ? .value
                }
                get last() {
                    return this._tail ? .value
                }
                has(e) {
                    return this._map.has(e)
                }
                get(e, t = i.None) {
                    const n = this._map.get(e);
                    if (n) return t !== i.None && this.touch(n, t), n.value
                }
                set(e, t, n = i.None) {
                    let r = this._map.get(e);
                    if (r) r.value = t, n !== i.None && this.touch(r, n);
                    else {
                        switch (r = {
                            key: e,
                            value: t,
                            next: void 0,
                            previous: void 0
                        }, n) {
                            case i.None:
                                this.addItemLast(r);
                                break;
                            case i.First:
                                this.addItemFirst(r);
                                break;
                            case i.Last:
                            default:
                                this.addItemLast(r)
                        }
                        this._map.set(e, r), this._size++
                    }
                    return this
                }
                delete(e) {
                    return !!this.remove(e)
                }
                remove(e) {
                    const t = this._map.get(e);
                    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value
                }
                shift() {
                    if (!this._head && !this._tail) return;
                    if (!this._head || !this._tail) throw new Error("Invalid list");
                    const e = this._head;
                    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value
                }
                forEach(e, t) {
                    const n = this._state;
                    let i = this._head;
                    for (; i;) {
                        if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
                        i = i.next
                    }
                }
                keys() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: t.key,
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }
                values() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: t.value,
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }
                entries() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: [t.key, t.value],
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }[(n = Symbol.toStringTag, Symbol.iterator)]() {
                    return this.entries()
                }
                trimOld(e) {
                    if (e >= this.size) return;
                    if (0 === e) return void this.clear();
                    let t = this._head,
                        n = this.size;
                    for (; t && n > e;) this._map.delete(t.key), t = t.next, n--;
                    this._head = t, this._size = n, t && (t.previous = void 0), this._state++
                }
                addItemFirst(e) {
                    if (this._head || this._tail) {
                        if (!this._head) throw new Error("Invalid list");
                        e.next = this._head, this._head.previous = e
                    } else this._tail = e;
                    this._head = e, this._state++
                }
                addItemLast(e) {
                    if (this._head || this._tail) {
                        if (!this._tail) throw new Error("Invalid list");
                        e.previous = this._tail, this._tail.next = e
                    } else this._head = e;
                    this._tail = e, this._state++
                }
                removeItem(e) {
                    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
                    else if (e === this._head) {
                        if (!e.next) throw new Error("Invalid list");
                        e.next.previous = void 0, this._head = e.next
                    } else if (e === this._tail) {
                        if (!e.previous) throw new Error("Invalid list");
                        e.previous.next = void 0, this._tail = e.previous
                    } else {
                        const t = e.next,
                            n = e.previous;
                        if (!t || !n) throw new Error("Invalid list");
                        t.previous = n, n.next = t
                    }
                    e.next = void 0, e.previous = void 0, this._state++
                }
                touch(e, t) {
                    if (!this._head || !this._tail) throw new Error("Invalid list");
                    if (t === i.First || t === i.Last)
                        if (t === i.First) {
                            if (e === this._head) return;
                            const t = e.next,
                                n = e.previous;
                            e === this._tail ? (n.next = void 0, this._tail = n) : (t.previous = n, n.next = t), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++
                        } else if (t === i.Last) {
                        if (e === this._tail) return;
                        const t = e.next,
                            n = e.previous;
                        e === this._head ? (t.previous = void 0, this._head = t) : (t.previous = n, n.next = t), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++
                    }
                }
                toJSON() {
                    const e = [];
                    return this.forEach(((t, n) => {
                        e.push([n, t])
                    })), e
                }
                fromJSON(e) {
                    this.clear();
                    for (const [t, n] of e) this.set(t, n)
                }
            }
            t.LinkedMap = r, t.LRUCache = class extends r {
                constructor(e, t = 1) {
                    super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1)
                }
                get limit() {
                    return this._limit
                }
                set limit(e) {
                    this._limit = e, this.checkTrim()
                }
                get ratio() {
                    return this._ratio
                }
                set ratio(e) {
                    this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim()
                }
                get(e, t = i.AsNew) {
                    return super.get(e, t)
                }
                peek(e) {
                    return super.get(e, i.None)
                }
                set(e, t) {
                    return super.set(e, t, i.Last), this.checkTrim(), this
                }
                checkTrim() {
                    this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
                }
            }
        },
        ekKo: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AbstractMessageBuffer = void 0, t.AbstractMessageBuffer = class {
                constructor(e = "utf-8") {
                    this._encoding = e, this._chunks = [], this._totalLength = 0
                }
                get encoding() {
                    return this._encoding
                }
                append(e) {
                    const t = "string" == typeof e ? this.fromString(e, this._encoding) : e;
                    this._chunks.push(t), this._totalLength += t.byteLength
                }
                tryReadHeaders(e = !1) {
                    if (0 === this._chunks.length) return;
                    let t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    e: for (; n < this._chunks.length;) {
                        const e = this._chunks[n];
                        for (i = 0; i < e.length;) {
                            switch (e[i]) {
                                case 13:
                                    switch (t) {
                                        case 0:
                                            t = 1;
                                            break;
                                        case 2:
                                            t = 3;
                                            break;
                                        default:
                                            t = 0
                                    }
                                    break;
                                case 10:
                                    switch (t) {
                                        case 1:
                                            t = 2;
                                            break;
                                        case 3:
                                            t = 4, i++;
                                            break e;
                                        default:
                                            t = 0
                                    }
                                    break;
                                default:
                                    t = 0
                            }
                            i++
                        }
                        r += e.byteLength, n++
                    }
                    if (4 !== t) return;
                    const o = this._read(r + i),
                        s = new Map,
                        a = this.toString(o, "ascii").split("\r\n");
                    if (a.length < 2) return s;
                    for (let t = 0; t < a.length - 2; t++) {
                        const n = a[t],
                            i = n.indexOf(":");
                        if (-1 === i) throw new Error(`Message header must separate key and value using ':'\n${n}`);
                        const r = n.substr(0, i),
                            o = n.substr(i + 1).trim();
                        s.set(e ? r.toLowerCase() : r, o)
                    }
                    return s
                }
                tryReadBody(e) {
                    if (!(this._totalLength < e)) return this._read(e)
                }
                get numberOfBytes() {
                    return this._totalLength
                }
                _read(e) {
                    if (0 === e) return this.emptyBuffer();
                    if (e > this._totalLength) throw new Error("Cannot read so many bytes!");
                    if (this._chunks[0].byteLength === e) {
                        const t = this._chunks[0];
                        return this._chunks.shift(), this._totalLength -= e, this.asNative(t)
                    }
                    if (this._chunks[0].byteLength > e) {
                        const t = this._chunks[0],
                            n = this.asNative(t, e);
                        return this._chunks[0] = t.slice(e), this._totalLength -= e, n
                    }
                    const t = this.allocNative(e);
                    let n = 0;
                    for (; e > 0;) {
                        const i = this._chunks[0];
                        if (i.byteLength > e) {
                            const r = i.slice(0, e);
                            t.set(r, n), n += e, this._chunks[0] = i.slice(e), this._totalLength -= e, e -= e
                        } else t.set(i, n), n += i.byteLength, this._chunks.shift(), this._totalLength -= i.byteLength, e -= i.byteLength
                    }
                    return t
                }
            }
        },
        HJml: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = void 0;
            const i = n("q94H"),
                r = n("Dvax"),
                o = n("OWWC"),
                s = n("Hzyc");
            var a, c;
            ! function(e) {
                e.is = function(e) {
                    let t = e;
                    return t && r.func(t.listen) && r.func(t.dispose) && r.func(t.onError) && r.func(t.onClose) && r.func(t.onPartialMessage)
                }
            }(a || (t.MessageReader = a = {}));
            class u {
                constructor() {
                    this.errorEmitter = new o.Emitter, this.closeEmitter = new o.Emitter, this.partialMessageEmitter = new o.Emitter
                }
                dispose() {
                    this.errorEmitter.dispose(), this.closeEmitter.dispose()
                }
                get onError() {
                    return this.errorEmitter.event
                }
                fireError(e) {
                    this.errorEmitter.fire(this.asError(e))
                }
                get onClose() {
                    return this.closeEmitter.event
                }
                fireClose() {
                    this.closeEmitter.fire(void 0)
                }
                get onPartialMessage() {
                    return this.partialMessageEmitter.event
                }
                firePartialMessage(e) {
                    this.partialMessageEmitter.fire(e)
                }
                asError(e) {
                    return e instanceof Error ? e : new Error(`Reader received error. Reason: ${r.string(e.message)?e.message:"unknown"}`)
                }
            }
            t.AbstractMessageReader = u,
                function(e) {
                    e.fromOptions = function(e) {
                        let t, n;
                        const r = new Map;
                        let o;
                        const s = new Map;
                        if (void 0 === e || "string" == typeof e) t = e ? ? "utf-8";
                        else {
                            if (t = e.charset ? ? "utf-8", void 0 !== e.contentDecoder && (n = e.contentDecoder, r.set(n.name, n)), void 0 !== e.contentDecoders)
                                for (const t of e.contentDecoders) r.set(t.name, t);
                            if (void 0 !== e.contentTypeDecoder && (o = e.contentTypeDecoder, s.set(o.name, o)), void 0 !== e.contentTypeDecoders)
                                for (const t of e.contentTypeDecoders) s.set(t.name, t)
                        }
                        return void 0 === o && (o = (0, i.default)().applicationJson.decoder, s.set(o.name, o)), {
                            charset: t,
                            contentDecoder: n,
                            contentDecoders: r,
                            contentTypeDecoder: o,
                            contentTypeDecoders: s
                        }
                    }
                }(c || (c = {})), t.ReadableStreamMessageReader = class extends u {
                    constructor(e, t) {
                        super(), this.readable = e, this.options = c.fromOptions(t), this.buffer = (0, i.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new s.Semaphore(1)
                    }
                    set partialMessageTimeout(e) {
                        this._partialMessageTimeout = e
                    }
                    get partialMessageTimeout() {
                        return this._partialMessageTimeout
                    }
                    listen(e) {
                        this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
                        const t = this.readable.onData((e => {
                            this.onData(e)
                        }));
                        return this.readable.onError((e => this.fireError(e))), this.readable.onClose((() => this.fireClose())), t
                    }
                    onData(e) {
                        try {
                            for (this.buffer.append(e);;) {
                                if (-1 === this.nextMessageLength) {
                                    const e = this.buffer.tryReadHeaders(!0);
                                    if (!e) return;
                                    const t = e.get("content-length");
                                    if (!t) return void this.fireError(new Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(e))}`));
                                    const n = parseInt(t);
                                    if (isNaN(n)) return void this.fireError(new Error(`Content-Length value must be a number. Got ${t}`));
                                    this.nextMessageLength = n
                                }
                                const e = this.buffer.tryReadBody(this.nextMessageLength);
                                if (void 0 === e) return void this.setPartialMessageTimer();
                                this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock((async () => {
                                    const t = void 0 !== this.options.contentDecoder ? await this.options.contentDecoder.decode(e) : e,
                                        n = await this.options.contentTypeDecoder.decode(t, this.options);
                                    this.callback(n)
                                })).catch((e => {
                                    this.fireError(e)
                                }))
                            }
                        } catch (e) {
                            this.fireError(e)
                        }
                    }
                    clearPartialMessageTimer() {
                        this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0)
                    }
                    setPartialMessageTimer() {
                        this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0 || (this.partialMessageTimer = (0, i.default)().timer.setTimeout(((e, t) => {
                            this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({
                                messageToken: e,
                                waitingTime: t
                            }), this.setPartialMessageTimer())
                        }), this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout))
                    }
                }
        },
        YXUh: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = void 0;
            const i = n("q94H"),
                r = n("Dvax"),
                o = n("Hzyc"),
                s = n("OWWC");
            var a, c;
            ! function(e) {
                e.is = function(e) {
                    let t = e;
                    return t && r.func(t.dispose) && r.func(t.onClose) && r.func(t.onError) && r.func(t.write)
                }
            }(a || (t.MessageWriter = a = {}));
            class u {
                constructor() {
                    this.errorEmitter = new s.Emitter, this.closeEmitter = new s.Emitter
                }
                dispose() {
                    this.errorEmitter.dispose(), this.closeEmitter.dispose()
                }
                get onError() {
                    return this.errorEmitter.event
                }
                fireError(e, t, n) {
                    this.errorEmitter.fire([this.asError(e), t, n])
                }
                get onClose() {
                    return this.closeEmitter.event
                }
                fireClose() {
                    this.closeEmitter.fire(void 0)
                }
                asError(e) {
                    return e instanceof Error ? e : new Error(`Writer received error. Reason: ${r.string(e.message)?e.message:"unknown"}`)
                }
            }
            t.AbstractMessageWriter = u,
                function(e) {
                    e.fromOptions = function(e) {
                        return void 0 === e || "string" == typeof e ? {
                            charset: e ? ? "utf-8",
                            contentTypeEncoder: (0, i.default)().applicationJson.encoder
                        } : {
                            charset: e.charset ? ? "utf-8",
                            contentEncoder: e.contentEncoder,
                            contentTypeEncoder: e.contentTypeEncoder ? ? (0, i.default)().applicationJson.encoder
                        }
                    }
                }(c || (c = {})), t.WriteableStreamMessageWriter = class extends u {
                    constructor(e, t) {
                        super(), this.writable = e, this.options = c.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new o.Semaphore(1), this.writable.onError((e => this.fireError(e))), this.writable.onClose((() => this.fireClose()))
                    }
                    async write(e) {
                        return this.writeSemaphore.lock((async () => this.options.contentTypeEncoder.encode(e, this.options).then((e => void 0 !== this.options.contentEncoder ? this.options.contentEncoder.encode(e) : e)).then((t => {
                            const n = [];
                            return n.push("Content-Length: ", t.byteLength.toString(), "\r\n"), n.push("\r\n"), this.doWrite(e, n, t)
                        }), (e => {
                            throw this.fireError(e), e
                        }))))
                    }
                    async doWrite(e, t, n) {
                        try {
                            return await this.writable.write(t.join(""), "ascii"), this.writable.write(n)
                        } catch (t) {
                            return this.handleError(t, e), Promise.reject(t)
                        }
                    }
                    handleError(e, t) {
                        this.errorCount++, this.fireError(e, t, this.errorCount)
                    }
                    end() {
                        this.writable.end()
                    }
                }
        },
        nfmn: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Message = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType = t.RequestType0 = t.AbstractMessageSignature = t.ParameterStructures = t.ResponseError = t.ErrorCodes = void 0;
            const i = n("Dvax");
            var r, o;
            ! function(e) {
                e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3
            }(r || (t.ErrorCodes = r = {}));
            class s extends Error {
                constructor(e, t, n) {
                    super(t), this.code = i.number(e) ? e : r.UnknownErrorCode, this.data = n, Object.setPrototypeOf(this, s.prototype)
                }
                toJson() {
                    const e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), e
                }
            }
            t.ResponseError = s;
            class a {
                constructor(e) {
                    this.kind = e
                }
                static is(e) {
                    return e === a.auto || e === a.byName || e === a.byPosition
                }
                toString() {
                    return this.kind
                }
            }
            t.ParameterStructures = a, a.auto = new a("auto"), a.byPosition = new a("byPosition"), a.byName = new a("byName");
            class c {
                constructor(e, t) {
                    this.method = e, this.numberOfParams = t
                }
                get parameterStructures() {
                    return a.auto
                }
            }
            t.AbstractMessageSignature = c, t.RequestType0 = class extends c {
                    constructor(e) {
                        super(e, 0)
                    }
                }, t.RequestType = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.RequestType1 = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.RequestType2 = class extends c {
                    constructor(e) {
                        super(e, 2)
                    }
                }, t.RequestType3 = class extends c {
                    constructor(e) {
                        super(e, 3)
                    }
                }, t.RequestType4 = class extends c {
                    constructor(e) {
                        super(e, 4)
                    }
                }, t.RequestType5 = class extends c {
                    constructor(e) {
                        super(e, 5)
                    }
                }, t.RequestType6 = class extends c {
                    constructor(e) {
                        super(e, 6)
                    }
                }, t.RequestType7 = class extends c {
                    constructor(e) {
                        super(e, 7)
                    }
                }, t.RequestType8 = class extends c {
                    constructor(e) {
                        super(e, 8)
                    }
                }, t.RequestType9 = class extends c {
                    constructor(e) {
                        super(e, 9)
                    }
                }, t.NotificationType = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.NotificationType0 = class extends c {
                    constructor(e) {
                        super(e, 0)
                    }
                }, t.NotificationType1 = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.NotificationType2 = class extends c {
                    constructor(e) {
                        super(e, 2)
                    }
                }, t.NotificationType3 = class extends c {
                    constructor(e) {
                        super(e, 3)
                    }
                }, t.NotificationType4 = class extends c {
                    constructor(e) {
                        super(e, 4)
                    }
                }, t.NotificationType5 = class extends c {
                    constructor(e) {
                        super(e, 5)
                    }
                }, t.NotificationType6 = class extends c {
                    constructor(e) {
                        super(e, 6)
                    }
                }, t.NotificationType7 = class extends c {
                    constructor(e) {
                        super(e, 7)
                    }
                }, t.NotificationType8 = class extends c {
                    constructor(e) {
                        super(e, 8)
                    }
                }, t.NotificationType9 = class extends c {
                    constructor(e) {
                        super(e, 9)
                    }
                },
                function(e) {
                    e.isRequest = function(e) {
                        const t = e;
                        return t && i.string(t.method) && (i.string(t.id) || i.number(t.id))
                    }, e.isNotification = function(e) {
                        const t = e;
                        return t && i.string(t.method) && void 0 === e.id
                    }, e.isResponse = function(e) {
                        const t = e;
                        return t && (void 0 !== t.result || !!t.error) && (i.string(t.id) || i.number(t.id) || null === t.id)
                    }
                }(o || (t.Message = o = {}))
        },
        q94H: (e, t) => {
            "use strict";
            let n;

            function i() {
                if (void 0 === n) throw new Error("No runtime abstraction layer installed");
                return n
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.install = function(e) {
                        if (void 0 === e) throw new Error("No runtime abstraction layer provided");
                        n = e
                    }
                }(i || (i = {})), t.default = i
        },
        Hzyc: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Semaphore = void 0;
            const i = n("q94H");
            t.Semaphore = class {
                constructor(e = 1) {
                    if (e <= 0) throw new Error("Capacity must be greater than 0");
                    this._capacity = e, this._active = 0, this._waiting = []
                }
                lock(e) {
                    return new Promise(((t, n) => {
                        this._waiting.push({
                            thunk: e,
                            resolve: t,
                            reject: n
                        }), this.runNext()
                    }))
                }
                get active() {
                    return this._active
                }
                runNext() {
                    0 !== this._waiting.length && this._active !== this._capacity && (0, i.default)().timer.setImmediate((() => this.doRunNext()))
                }
                doRunNext() {
                    if (0 === this._waiting.length || this._active === this._capacity) return;
                    const e = this._waiting.shift();
                    if (this._active++, this._active > this._capacity) throw new Error("To many thunks active");
                    try {
                        const t = e.thunk();
                        t instanceof Promise ? t.then((t => {
                            this._active--, e.resolve(t), this.runNext()
                        }), (t => {
                            this._active--, e.reject(t), this.runNext()
                        })) : (this._active--, e.resolve(t), this.runNext())
                    } catch (t) {
                        this._active--, e.reject(t), this.runNext()
                    }
                }
            }
        },
        BJFx: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = void 0;
            const i = n("FSGG");
            var r;
            ! function(e) {
                e.Continue = 0, e.Cancelled = 1
            }(r || (r = {})), t.SharedArraySenderStrategy = class {
                constructor() {
                    this.buffers = new Map
                }
                enableCancellation(e) {
                    if (null === e.id) return;
                    const t = new SharedArrayBuffer(4);
                    new Int32Array(t, 0, 1)[0] = r.Continue, this.buffers.set(e.id, t), e.$cancellationData = t
                }
                async sendCancellation(e, t) {
                    const n = this.buffers.get(t);
                    if (void 0 === n) return;
                    const i = new Int32Array(n, 0, 1);
                    Atomics.store(i, 0, r.Cancelled)
                }
                cleanup(e) {
                    this.buffers.delete(e)
                }
                dispose() {
                    this.buffers.clear()
                }
            };
            class o {
                constructor(e) {
                    this.data = new Int32Array(e, 0, 1)
                }
                get isCancellationRequested() {
                    return Atomics.load(this.data, 0) === r.Cancelled
                }
                get onCancellationRequested() {
                    throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")
                }
            }
            class s {
                constructor(e) {
                    this.token = new o(e)
                }
                cancel() {}
                dispose() {}
            }
            t.SharedArrayReceiverStrategy = class {
                constructor() {
                    this.kind = "request"
                }
                createCancellationTokenSource(e) {
                    const t = e.$cancellationData;
                    return void 0 === t ? new i.CancellationTokenSource : new s(t)
                }
            }
        },
        wOjf: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LanguageClient = void 0;
            const o = n("ui4o"),
                s = n("+Cbi");
            r(n("+Cbi"), t), r(n("ui4o"), t);
            class a extends o.BaseLanguageClient {
                constructor(e, t, n, i) {
                    super(e, t, n), this.worker = i
                }
                createMessageTransports(e) {
                    const t = new s.BrowserMessageReader(this.worker),
                        n = new s.BrowserMessageWriter(this.worker);
                    return Promise.resolve({
                        reader: t,
                        writer: n
                    })
                }
            }
            t.LanguageClient = a
        },
        ui4o: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DiagnosticPullMode = t.vsdiag = void 0, r(n("fozD"), t), r(n("MFH3"), t);
            var o = n("6wjD");
            Object.defineProperty(t, "vsdiag", {
                enumerable: !0,
                get: function() {
                    return o.vsdiag
                }
            }), Object.defineProperty(t, "DiagnosticPullMode", {
                enumerable: !0,
                get: function() {
                    return o.DiagnosticPullMode
                }
            }), r(n("0Qos"), t)
        },
        "+c5A": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CallHierarchyFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s {
                constructor(e) {
                    this.client = e, this.middleware = e.middleware
                }
                prepareCallHierarchy(e, t, n) {
                    const i = this.client,
                        o = this.middleware,
                        s = (e, t, n) => {
                            const o = i.code2ProtocolConverter.asTextDocumentPositionParams(e, t);
                            return i.sendRequest(r.CallHierarchyPrepareRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asCallHierarchyItems(e, n)), (e => i.handleFailedRequest(r.CallHierarchyPrepareRequest.type, n, e, null)))
                        };
                    return o.prepareCallHierarchy ? o.prepareCallHierarchy(e, t, n, s) : s(e, t, n)
                }
                provideCallHierarchyIncomingCalls(e, t) {
                    const n = this.client,
                        i = this.middleware,
                        o = (e, t) => {
                            const i = {
                                item: n.code2ProtocolConverter.asCallHierarchyItem(e)
                            };
                            return n.sendRequest(r.CallHierarchyIncomingCallsRequest.type, i, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asCallHierarchyIncomingCalls(e, t)), (e => n.handleFailedRequest(r.CallHierarchyIncomingCallsRequest.type, t, e, null)))
                        };
                    return i.provideCallHierarchyIncomingCalls ? i.provideCallHierarchyIncomingCalls(e, t, o) : o(e, t)
                }
                provideCallHierarchyOutgoingCalls(e, t) {
                    const n = this.client,
                        i = this.middleware,
                        o = (e, t) => {
                            const i = {
                                item: n.code2ProtocolConverter.asCallHierarchyItem(e)
                            };
                            return n.sendRequest(r.CallHierarchyOutgoingCallsRequest.type, i, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asCallHierarchyOutgoingCalls(e, t)), (e => n.handleFailedRequest(r.CallHierarchyOutgoingCallsRequest.type, t, e, null)))
                        };
                    return i.provideCallHierarchyOutgoingCalls ? i.provideCallHierarchyOutgoingCalls(e, t, o) : o(e, t)
                }
            }
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.CallHierarchyPrepareRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = e;
                    (0, o.ensure)((0, o.ensure)(t, "textDocument"), "callHierarchy").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const [n, i] = this.getRegistration(t, e.callHierarchyProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = this._client,
                        n = new s(t);
                    return [i.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector), n), n]
                }
            }
            t.CallHierarchyFeature = a
        },
        "0Qos": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProposedFeatures = t.BaseLanguageClient = t.MessageTransports = t.SuspendMode = t.State = t.CloseAction = t.ErrorAction = t.RevealOutputChannelOn = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("fc7G"),
                s = n("QD5j"),
                a = n("wjb4"),
                c = n("F4kK"),
                u = n("l2C0"),
                l = n("I9Hb"),
                d = n("MFH3"),
                h = n("6wjD"),
                p = n("hb8V"),
                g = n("7HNo"),
                m = n("XlVN"),
                f = n("rbcg"),
                y = n("JZSJ"),
                v = n("bQdO"),
                C = n("FDo1"),
                b = n("08tp"),
                D = n("WDb7"),
                R = n("BZAB"),
                _ = n("HZS4"),
                w = n("8BKz"),
                T = n("gWAr"),
                S = n("aUnd"),
                k = n("l4+b"),
                P = n("tLdd"),
                x = n("iNUr"),
                E = n("MCh5"),
                O = n("xtgN"),
                q = n("oHS/"),
                M = n("t5Ol"),
                F = n("Z30C"),
                N = n("RWSK"),
                I = n("/KO7"),
                L = n("qLfr"),
                j = n("yTjP"),
                A = n("+c5A"),
                H = n("fyZm"),
                W = n("3rpL"),
                K = n("wQwv"),
                U = n("N72P"),
                z = n("qH05"),
                $ = n("OQvZ"),
                V = n("p1f7");
            var J, B, Q, G, Z, X, Y, ee, te;
            ! function(e) {
                e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Never = 4] = "Never"
            }(J || (t.RevealOutputChannelOn = J = {})),
            function(e) {
                e[e.Continue = 1] = "Continue", e[e.Shutdown = 2] = "Shutdown"
            }(B || (t.ErrorAction = B = {})),
            function(e) {
                e[e.DoNotRestart = 1] = "DoNotRestart", e[e.Restart = 2] = "Restart"
            }(Q || (t.CloseAction = Q = {})),
            function(e) {
                e[e.Stopped = 1] = "Stopped", e[e.Starting = 3] = "Starting", e[e.Running = 2] = "Running"
            }(G || (t.State = G = {})),
            function(e) {
                e.off = "off", e.on = "on"
            }(Z || (t.SuspendMode = Z = {})),
            function(e) {
                e.sanitizeIsTrusted = function(e) {
                    return null != e && !!("boolean" == typeof e || "object" == typeof e && null !== e && a.stringArray(e.enabledCommands)) && e
                }
            }(X || (X = {}));
            class ne {
                constructor(e, t) {
                    this.client = e, this.maxRestartCount = t, this.restarts = []
                }
                error(e, t, n) {
                    return n && n <= 3 ? {
                        action: B.Continue
                    } : {
                        action: B.Shutdown
                    }
                }
                closed() {
                    return this.restarts.push(Date.now()), this.restarts.length <= this.maxRestartCount ? {
                        action: Q.Restart
                    } : this.restarts[this.restarts.length - 1] - this.restarts[0] <= 18e4 ? {
                        action: Q.DoNotRestart,
                        message: `The ${this.client.name} server crashed ${this.maxRestartCount+1} times in the last 3 minutes. The server will not be restarted. See the output for more information.`
                    } : (this.restarts.shift(), {
                        action: Q.Restart
                    })
                }
            }! function(e) {
                e.Initial = "initial", e.Starting = "starting", e.StartFailed = "startFailed", e.Running = "running", e.Stopping = "stopping", e.Stopped = "stopped"
            }(Y || (Y = {})),
            function(e) {
                e.is = function(e) {
                    return e && r.MessageReader.is(e.reader) && r.MessageWriter.is(e.writer)
                }
            }(ee || (t.MessageTransports = ee = {}));
            class ie {
                constructor(e, t, n) {
                    this._traceFormat = r.TraceFormat.Text, this._diagnosticQueue = new Map, this._diagnosticQueueState = {
                        state: "idle"
                    }, this._features = [], this._dynamicFeatures = new Map, this.workspaceEditLock = new c.Semaphore(1), this._id = e, this._name = t;
                    const i = {
                        isTrusted: !1,
                        supportHtml: !1
                    };
                    void 0 !== (n = n || {}).markdown && (i.isTrusted = X.sanitizeIsTrusted(n.markdown.isTrusted), i.supportHtml = !0 === n.markdown.supportHtml), this._clientOptions = {
                        documentSelector: n.documentSelector ? ? [],
                        synchronize: n.synchronize ? ? {},
                        diagnosticCollectionName: n.diagnosticCollectionName,
                        outputChannelName: n.outputChannelName ? ? this._name,
                        revealOutputChannelOn: n.revealOutputChannelOn ? ? J.Error,
                        stdioEncoding: n.stdioEncoding ? ? "utf8",
                        initializationOptions: n.initializationOptions,
                        initializationFailedHandler: n.initializationFailedHandler,
                        progressOnInitialization: !!n.progressOnInitialization,
                        errorHandler: n.errorHandler ? ? this.createDefaultErrorHandler(n.connectionOptions ? .maxRestartCount),
                        middleware: n.middleware ? ? {},
                        uriConverters: n.uriConverters,
                        workspaceFolder: n.workspaceFolder,
                        connectionOptions: n.connectionOptions,
                        markdown: i,
                        diagnosticPullOptions: n.diagnosticPullOptions ? ? {
                            onChange: !0,
                            onSave: !1
                        },
                        notebookDocumentOptions: n.notebookDocumentOptions ? ? {}
                    }, this._clientOptions.synchronize = this._clientOptions.synchronize || {}, this._state = Y.Initial, this._ignoredRegistrations = new Set, this._listeners = [], this._notificationHandlers = new Map, this._pendingNotificationHandlers = new Map, this._notificationDisposables = new Map, this._requestHandlers = new Map, this._pendingRequestHandlers = new Map, this._requestDisposables = new Map, this._progressHandlers = new Map, this._pendingProgressHandlers = new Map, this._progressDisposables = new Map, this._connection = void 0, this._initializeResult = void 0, n.outputChannel ? (this._outputChannel = n.outputChannel, this._disposeOutputChannel = !1) : (this._outputChannel = void 0, this._disposeOutputChannel = !0), this._traceOutputChannel = n.traceOutputChannel, this._diagnostics = void 0, this._pendingOpenNotifications = new Set, this._pendingChangeSemaphore = new c.Semaphore(1), this._pendingChangeDelayer = new c.Delayer(250), this._fileEvents = [], this._fileEventDelayer = new c.Delayer(250), this._onStop = void 0, this._telemetryEmitter = new r.Emitter, this._stateChangeEmitter = new r.Emitter, this._trace = r.Trace.Off, this._tracer = {
                        log: (e, t) => {
                            a.string(e) ? this.logTrace(e, t) : this.logObjectTrace(e)
                        }
                    }, this._c2p = o.createConverter(n.uriConverters ? n.uriConverters.code2Protocol : void 0), this._p2c = s.createConverter(n.uriConverters ? n.uriConverters.protocol2Code : void 0, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml), this._syncedDocuments = new Map, this.registerBuiltinFeatures()
                }
                get name() {
                    return this._name
                }
                get middleware() {
                    return this._clientOptions.middleware ? ? Object.create(null)
                }
                get clientOptions() {
                    return this._clientOptions
                }
                get protocol2CodeConverter() {
                    return this._p2c
                }
                get code2ProtocolConverter() {
                    return this._c2p
                }
                get onTelemetry() {
                    return this._telemetryEmitter.event
                }
                get onDidChangeState() {
                    return this._stateChangeEmitter.event
                }
                get outputChannel() {
                    return this._outputChannel || (this._outputChannel = i.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name)), this._outputChannel
                }
                get traceOutputChannel() {
                    return this._traceOutputChannel ? this._traceOutputChannel : this.outputChannel
                }
                get diagnostics() {
                    return this._diagnostics
                }
                get state() {
                    return this.getPublicState()
                }
                get $state() {
                    return this._state
                }
                set $state(e) {
                    let t = this.getPublicState();
                    this._state = e;
                    let n = this.getPublicState();
                    n !== t && this._stateChangeEmitter.fire({
                        oldState: t,
                        newState: n
                    })
                }
                getPublicState() {
                    switch (this.$state) {
                        case Y.Starting:
                            return G.Starting;
                        case Y.Running:
                            return G.Running;
                        default:
                            return G.Stopped
                    }
                }
                get initializeResult() {
                    return this._initializeResult
                }
                async sendRequest(e, ...t) {
                    if (this.$state === Y.StartFailed || this.$state === Y.Stopping || this.$state === Y.Stopped) return Promise.reject(new r.ResponseError(r.ErrorCodes.ConnectionInactive, "Client is not running"));
                    const n = await this.$start();
                    this._didChangeTextDocumentFeature.syncKind === r.TextDocumentSyncKind.Full && await this.sendPendingFullTextDocumentChanges(n);
                    const i = this._clientOptions.middleware ? .sendRequest;
                    if (void 0 !== i) {
                        let o, s;
                        return 1 === t.length ? r.CancellationToken.is(t[0]) ? s = t[0] : o = t[0] : 2 === t.length && (o = t[0], s = t[1]), i(e, o, s, ((e, t, i) => {
                            const r = [];
                            return void 0 !== t && r.push(t), void 0 !== i && r.push(i), n.sendRequest(e, ...r)
                        }))
                    }
                    return n.sendRequest(e, ...t)
                }
                onRequest(e, t) {
                    const n = "string" == typeof e ? e : e.method;
                    this._requestHandlers.set(n, t);
                    const i = this.activeConnection();
                    let r;
                    return void 0 !== i ? (this._requestDisposables.set(n, i.onRequest(e, t)), r = {
                        dispose: () => {
                            const e = this._requestDisposables.get(n);
                            void 0 !== e && (e.dispose(), this._requestDisposables.delete(n))
                        }
                    }) : (this._pendingRequestHandlers.set(n, t), r = {
                        dispose: () => {
                            this._pendingRequestHandlers.delete(n);
                            const e = this._requestDisposables.get(n);
                            void 0 !== e && (e.dispose(), this._requestDisposables.delete(n))
                        }
                    }), {
                        dispose: () => {
                            this._requestHandlers.delete(n), r.dispose()
                        }
                    }
                }
                async sendNotification(e, t) {
                    if (this.$state === Y.StartFailed || this.$state === Y.Stopping || this.$state === Y.Stopped) return Promise.reject(new r.ResponseError(r.ErrorCodes.ConnectionInactive, "Client is not running"));
                    const n = this._didChangeTextDocumentFeature.syncKind === r.TextDocumentSyncKind.Full;
                    let i;
                    n && "string" != typeof e && e.method === r.DidOpenTextDocumentNotification.method && (i = t ? .textDocument.uri, this._pendingOpenNotifications.add(i));
                    const o = await this.$start();
                    n && await this.sendPendingFullTextDocumentChanges(o), void 0 !== i && this._pendingOpenNotifications.delete(i);
                    const s = this._clientOptions.middleware ? .sendNotification;
                    return s ? s(e, o.sendNotification.bind(o), t) : o.sendNotification(e, t)
                }
                onNotification(e, t) {
                    const n = "string" == typeof e ? e : e.method;
                    this._notificationHandlers.set(n, t);
                    const i = this.activeConnection();
                    let r;
                    return void 0 !== i ? (this._notificationDisposables.set(n, i.onNotification(e, t)), r = {
                        dispose: () => {
                            const e = this._notificationDisposables.get(n);
                            void 0 !== e && (e.dispose(), this._notificationDisposables.delete(n))
                        }
                    }) : (this._pendingNotificationHandlers.set(n, t), r = {
                        dispose: () => {
                            this._pendingNotificationHandlers.delete(n);
                            const e = this._notificationDisposables.get(n);
                            void 0 !== e && (e.dispose(), this._notificationDisposables.delete(n))
                        }
                    }), {
                        dispose: () => {
                            this._notificationHandlers.delete(n), r.dispose()
                        }
                    }
                }
                async sendProgress(e, t, n) {
                    if (this.$state === Y.StartFailed || this.$state === Y.Stopping || this.$state === Y.Stopped) return Promise.reject(new r.ResponseError(r.ErrorCodes.ConnectionInactive, "Client is not running"));
                    try {
                        return (await this.$start()).sendProgress(e, t, n)
                    } catch (e) {
                        throw this.error(`Sending progress for token ${t} failed.`, e), e
                    }
                }
                onProgress(e, t, n) {
                    this._progressHandlers.set(t, {
                        type: e,
                        handler: n
                    });
                    const i = this.activeConnection();
                    let o;
                    const s = this._clientOptions.middleware ? .handleWorkDoneProgress,
                        a = r.WorkDoneProgress.is(e) && void 0 !== s ? e => {
                            s(t, e, (() => n(e)))
                        } : n;
                    return void 0 !== i ? (this._progressDisposables.set(t, i.onProgress(e, t, a)), o = {
                        dispose: () => {
                            const e = this._progressDisposables.get(t);
                            void 0 !== e && (e.dispose(), this._progressDisposables.delete(t))
                        }
                    }) : (this._pendingProgressHandlers.set(t, {
                        type: e,
                        handler: n
                    }), o = {
                        dispose: () => {
                            this._pendingProgressHandlers.delete(t);
                            const e = this._progressDisposables.get(t);
                            void 0 !== e && (e.dispose(), this._progressDisposables.delete(t))
                        }
                    }), {
                        dispose: () => {
                            this._progressHandlers.delete(t), o.dispose()
                        }
                    }
                }
                createDefaultErrorHandler(e) {
                    if (void 0 !== e && e < 0) throw new Error(`Invalid maxRestartCount: ${e}`);
                    return new ne(this, e ? ? 4)
                }
                async setTrace(e) {
                    this._trace = e;
                    const t = this.activeConnection();
                    void 0 !== t && await t.trace(this._trace, this._tracer, {
                        sendNotification: !1,
                        traceFormat: this._traceFormat
                    })
                }
                data2String(e) {
                    if (e instanceof r.ResponseError) {
                        const t = e;
                        return `  Message: ${t.message}\n  Code: ${t.code} ${t.data?"\n"+t.data.toString():""}`
                    }
                    return e instanceof Error ? a.string(e.stack) ? e.stack : e.message : a.string(e) ? e : e.toString()
                }
                debug(e, t, n = !0) {
                    this.logOutputMessage(r.MessageType.Debug, J.Debug, "Debug", e, t, n)
                }
                info(e, t, n = !0) {
                    this.logOutputMessage(r.MessageType.Info, J.Info, "Info", e, t, n)
                }
                warn(e, t, n = !0) {
                    this.logOutputMessage(r.MessageType.Warning, J.Warn, "Warn", e, t, n)
                }
                error(e, t, n = !0) {
                    this.logOutputMessage(r.MessageType.Error, J.Error, "Error", e, t, n)
                }
                logOutputMessage(e, t, n, i, r, o) {
                    this.outputChannel.appendLine(`[${n.padEnd(5)} - ${(new Date).toLocaleTimeString()}] ${i}`), null != r && this.outputChannel.appendLine(this.data2String(r)), ("force" === o || o && this._clientOptions.revealOutputChannelOn <= t) && this.showNotificationMessage(e, i)
                }
                showNotificationMessage(e, t) {
                    t = t ? ? "A request has failed. See the output for more information.", (e === r.MessageType.Error ? i.window.showErrorMessage : e === r.MessageType.Warning ? i.window.showWarningMessage : i.window.showInformationMessage)(t, "Go to output").then((e => {
                        void 0 !== e && this.outputChannel.show(!0)
                    }))
                }
                logTrace(e, t) {
                    this.traceOutputChannel.appendLine(`[Trace - ${(new Date).toLocaleTimeString()}] ${e}`), t && this.traceOutputChannel.appendLine(this.data2String(t))
                }
                logObjectTrace(e) {
                    e.isLSPMessage && e.type ? this.traceOutputChannel.append(`[LSP   - ${(new Date).toLocaleTimeString()}] `) : this.traceOutputChannel.append(`[Trace - ${(new Date).toLocaleTimeString()}] `), e && this.traceOutputChannel.appendLine(`${JSON.stringify(e)}`)
                }
                needsStart() {
                    return this.$state === Y.Initial || this.$state === Y.Stopping || this.$state === Y.Stopped
                }
                needsStop() {
                    return this.$state === Y.Starting || this.$state === Y.Running
                }
                activeConnection() {
                    return this.$state === Y.Running && void 0 !== this._connection ? this._connection : void 0
                }
                isRunning() {
                    return this.$state === Y.Running
                }
                async start() {
                    if ("disposing" === this._disposed || "disposed" === this._disposed) throw new Error("Client got disposed and can't be restarted.");
                    if (this.$state === Y.Stopping) throw new Error("Client is currently stopping. Can only restart a full stopped client");
                    if (void 0 !== this._onStart) return this._onStart;
                    const [e, t, n] = this.createOnStartPromise();
                    this._onStart = e, void 0 === this._diagnostics && (this._diagnostics = this._clientOptions.diagnosticCollectionName ? i.languages.createDiagnosticCollection(this._clientOptions.diagnosticCollectionName) : i.languages.createDiagnosticCollection());
                    for (const [e, t] of this._notificationHandlers) this._pendingNotificationHandlers.has(e) || this._pendingNotificationHandlers.set(e, t);
                    for (const [e, t] of this._requestHandlers) this._pendingRequestHandlers.has(e) || this._pendingRequestHandlers.set(e, t);
                    for (const [e, t] of this._progressHandlers) this._pendingProgressHandlers.has(e) || this._pendingProgressHandlers.set(e, t);
                    this.$state = Y.Starting;
                    try {
                        const e = await this.createConnection();
                        e.onNotification(r.LogMessageNotification.type, (e => {
                            switch (e.type) {
                                case r.MessageType.Error:
                                    this.error(e.message, void 0, !1);
                                    break;
                                case r.MessageType.Warning:
                                    this.warn(e.message, void 0, !1);
                                    break;
                                case r.MessageType.Info:
                                    this.info(e.message, void 0, !1);
                                    break;
                                case r.MessageType.Debug:
                                    this.debug(e.message, void 0, !1);
                                    break;
                                default:
                                    this.outputChannel.appendLine(e.message)
                            }
                        })), e.onNotification(r.ShowMessageNotification.type, (e => {
                            switch (e.type) {
                                case r.MessageType.Error:
                                    i.window.showErrorMessage(e.message);
                                    break;
                                case r.MessageType.Warning:
                                    i.window.showWarningMessage(e.message);
                                    break;
                                case r.MessageType.Info:
                                default:
                                    i.window.showInformationMessage(e.message)
                            }
                        })), e.onRequest(r.ShowMessageRequest.type, (e => {
                            let t;
                            switch (e.type) {
                                case r.MessageType.Error:
                                    t = i.window.showErrorMessage;
                                    break;
                                case r.MessageType.Warning:
                                    t = i.window.showWarningMessage;
                                    break;
                                case r.MessageType.Info:
                                default:
                                    t = i.window.showInformationMessage
                            }
                            let n = e.actions || [];
                            return t(e.message, ...n)
                        })), e.onNotification(r.TelemetryEventNotification.type, (e => {
                            this._telemetryEmitter.fire(e)
                        })), e.onRequest(r.ShowDocumentRequest.type, (async e => {
                            const t = async e => {
                                    const t = this.protocol2CodeConverter.asUri(e.uri);
                                    try {
                                        if (!0 === e.external) return {
                                            success: await i.env.openExternal(t)
                                        }; {
                                            const n = {};
                                            return void 0 !== e.selection && (n.selection = this.protocol2CodeConverter.asRange(e.selection)), void 0 === e.takeFocus || !1 === e.takeFocus ? n.preserveFocus = !0 : !0 === e.takeFocus && (n.preserveFocus = !1), await i.window.showTextDocument(t, n), {
                                                success: !0
                                            }
                                        }
                                    } catch (e) {
                                        return {
                                            success: !1
                                        }
                                    }
                                },
                                n = this._clientOptions.middleware.window ? .showDocument;
                            return void 0 !== n ? n(e, t) : t(e)
                        })), e.listen(), await this.initialize(e), t()
                    } catch (e) {
                        this.$state = Y.StartFailed, this.error(`${this._name} client: couldn't create connection to server.`, e, "force"), n(e)
                    }
                    return this._onStart
                }
                createOnStartPromise() {
                    let e, t;
                    return [new Promise(((n, i) => {
                        e = n, t = i
                    })), e, t]
                }
                async initialize(e) {
                    this.refreshTrace(e, !1);
                    const t = this._clientOptions.initializationOptions,
                        [n, o] = void 0 !== this._clientOptions.workspaceFolder ? [this._clientOptions.workspaceFolder.uri.fsPath, [{
                            uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri),
                            name: this._clientOptions.workspaceFolder.name
                        }]] : [this._clientGetRootPath(), null],
                        s = {
                            processId: null,
                            clientInfo: {
                                name: i.env.appName,
                                version: i.version
                            },
                            locale: this.getLocale(),
                            rootPath: n || null,
                            rootUri: n ? this._c2p.asUri(i.Uri.file(n)) : null,
                            capabilities: this.computeClientCapabilities(),
                            initializationOptions: a.func(t) ? t() : t,
                            trace: r.Trace.toString(this._trace),
                            workspaceFolders: o
                        };
                    if (this.fillInitializeParams(s), !this._clientOptions.progressOnInitialization) return this.doInitialize(e, s); {
                        const t = u.generateUuid(),
                            n = new l.ProgressPart(e, t);
                        s.workDoneToken = t;
                        try {
                            const t = await this.doInitialize(e, s);
                            return n.done(), t
                        } catch (e) {
                            throw n.cancel(), e
                        }
                    }
                }
                async doInitialize(e, t) {
                    try {
                        const n = await e.initialize(t);
                        if (void 0 !== n.capabilities.positionEncoding && n.capabilities.positionEncoding !== r.PositionEncodingKind.UTF16) throw new Error(`Unsupported position encoding (${n.capabilities.positionEncoding}) received from server ${this.name}`);
                        let i;
                        this._initializeResult = n, this.$state = Y.Running, a.number(n.capabilities.textDocumentSync) ? i = n.capabilities.textDocumentSync === r.TextDocumentSyncKind.None ? {
                            openClose: !1,
                            change: r.TextDocumentSyncKind.None,
                            save: void 0
                        } : {
                            openClose: !0,
                            change: n.capabilities.textDocumentSync,
                            save: {
                                includeText: !1
                            }
                        } : void 0 !== n.capabilities.textDocumentSync && null !== n.capabilities.textDocumentSync && (i = n.capabilities.textDocumentSync), this._capabilities = Object.assign({}, n.capabilities, {
                            resolvedTextDocumentSync: i
                        }), e.onNotification(r.PublishDiagnosticsNotification.type, (e => this.handleDiagnostics(e))), e.onRequest(r.RegistrationRequest.type, (e => this.handleRegistrationRequest(e))), e.onRequest("client/registerFeature", (e => this.handleRegistrationRequest(e))), e.onRequest(r.UnregistrationRequest.type, (e => this.handleUnregistrationRequest(e))), e.onRequest("client/unregisterFeature", (e => this.handleUnregistrationRequest(e))), e.onRequest(r.ApplyWorkspaceEditRequest.type, (e => this.handleApplyWorkspaceEdit(e)));
                        for (const [t, n] of this._pendingNotificationHandlers) this._notificationDisposables.set(t, e.onNotification(t, n));
                        this._pendingNotificationHandlers.clear();
                        for (const [t, n] of this._pendingRequestHandlers) this._requestDisposables.set(t, e.onRequest(t, n));
                        this._pendingRequestHandlers.clear();
                        for (const [t, n] of this._pendingProgressHandlers) this._progressDisposables.set(t, e.onProgress(n.type, t, n.handler));
                        return this._pendingProgressHandlers.clear(), await e.sendNotification(r.InitializedNotification.type, {}), this.hookFileEvents(e), this.hookConfigurationChanged(e), this.initializeFeatures(e), n
                    } catch (t) {
                        throw this._clientOptions.initializationFailedHandler ? this._clientOptions.initializationFailedHandler(t) ? this.initialize(e) : this.stop() : t instanceof r.ResponseError && t.data && t.data.retry ? i.window.showErrorMessage(t.message, {
                            title: "Retry",
                            id: "retry"
                        }).then((t => {
                            t && "retry" === t.id ? this.initialize(e) : this.stop()
                        })) : (t && t.message && i.window.showErrorMessage(t.message), this.error("Server initialization failed.", t), this.stop()), t
                    }
                }
                _clientGetRootPath() {
                    let e = i.workspace.workspaceFolders;
                    if (!e || 0 === e.length) return;
                    let t = e[0];
                    return "file" === t.uri.scheme ? t.uri.fsPath : void 0
                }
                stop(e = 2e3) {
                    return this.shutdown("stop", e)
                }
                dispose(e = 2e3) {
                    try {
                        return this._disposed = "disposing", this.stop(e)
                    } finally {
                        this._disposed = "disposed"
                    }
                }
                async shutdown(e, t) {
                    if (this.$state === Y.Stopped || this.$state === Y.Initial) return;
                    if (this.$state === Y.Stopping) {
                        if (void 0 !== this._onStop) return this._onStop;
                        throw new Error("Client is stopping but no stop promise available.")
                    }
                    const n = this.activeConnection();
                    if (void 0 === n || this.$state !== Y.Running) throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
                    this._initializeResult = void 0, this.$state = Y.Stopping, this.cleanUp(e);
                    const i = new Promise((e => {
                            (0, r.RAL)().timer.setTimeout(e, t)
                        })),
                        o = (async e => (await e.shutdown(), await e.exit(), e))(n);
                    return this._onStop = Promise.race([i, o]).then((e => {
                        if (void 0 === e) throw this.error("Stopping server timed out", void 0, !1), new Error("Stopping the server timed out");
                        e.end(), e.dispose()
                    }), (e => {
                        throw this.error("Stopping server failed", e, !1), e
                    })).finally((() => {
                        this.$state = Y.Stopped, "stop" === e && this.cleanUpChannel(), this._onStart = void 0, this._onStop = void 0, this._connection = void 0, this._ignoredRegistrations.clear()
                    }))
                }
                cleanUp(e) {
                    this._fileEvents = [], this._fileEventDelayer.cancel();
                    const t = this._listeners.splice(0, this._listeners.length);
                    for (const e of t) e.dispose();
                    this._syncedDocuments && this._syncedDocuments.clear();
                    for (const e of Array.from(this._features.entries()).map((e => e[1])).reverse()) e.clear();
                    "stop" === e && void 0 !== this._diagnostics && (this._diagnostics.dispose(), this._diagnostics = void 0), void 0 !== this._idleInterval && (this._idleInterval.dispose(), this._idleInterval = void 0)
                }
                cleanUpChannel() {
                    void 0 !== this._outputChannel && this._disposeOutputChannel && (this._outputChannel.dispose(), this._outputChannel = void 0)
                }
                notifyFileEvent(e) {
                    const t = this;
                    async function n(e) {
                        return t._fileEvents.push(e), t._fileEventDelayer.trigger((async () => {
                            await t.sendNotification(r.DidChangeWatchedFilesNotification.type, {
                                changes: t._fileEvents
                            }), t._fileEvents = []
                        }))
                    }
                    const i = this.clientOptions.middleware ? .workspace;
                    (i ? .didChangeWatchedFile ? i.didChangeWatchedFile(e, n) : n(e)).catch((e => {
                        t.error("Notify file events failed.", e)
                    }))
                }
                async sendPendingFullTextDocumentChanges(e) {
                    return this._pendingChangeSemaphore.lock((async () => {
                        try {
                            const t = this._didChangeTextDocumentFeature.getPendingDocumentChanges(this._pendingOpenNotifications);
                            if (0 === t.length) return;
                            for (const n of t) {
                                const t = this.code2ProtocolConverter.asChangeTextDocumentParams(n);
                                await e.sendNotification(r.DidChangeTextDocumentNotification.type, t), this._didChangeTextDocumentFeature.notificationSent(n, r.DidChangeTextDocumentNotification.type, t)
                            }
                        } catch (e) {
                            throw this.error("Sending pending changes failed", e, !1), e
                        }
                    }))
                }
                triggerPendingChangeDelivery() {
                    this._pendingChangeDelayer.trigger((async () => {
                        const e = this.activeConnection();
                        void 0 !== e ? await this.sendPendingFullTextDocumentChanges(e) : this.triggerPendingChangeDelivery()
                    })).catch((e => this.error("Delivering pending changes failed", e, !1)))
                }
                handleDiagnostics(e) {
                    if (!this._diagnostics) return;
                    const t = e.uri;
                    "busy" === this._diagnosticQueueState.state && this._diagnosticQueueState.document === t && this._diagnosticQueueState.tokenSource.cancel(), this._diagnosticQueue.set(e.uri, e.diagnostics), this.triggerDiagnosticQueue()
                }
                triggerDiagnosticQueue() {
                    (0, r.RAL)().timer.setImmediate((() => {
                        this.workDiagnosticQueue()
                    }))
                }
                workDiagnosticQueue() {
                    if ("busy" === this._diagnosticQueueState.state) return;
                    const e = this._diagnosticQueue.entries().next();
                    if (!0 === e.done) return;
                    const [t, n] = e.value;
                    this._diagnosticQueue.delete(t);
                    const r = new i.CancellationTokenSource;
                    this._diagnosticQueueState = {
                        state: "busy",
                        document: t,
                        tokenSource: r
                    }, this._p2c.asDiagnostics(n, r.token).then((e => {
                        if (!r.token.isCancellationRequested) {
                            const n = this._p2c.asUri(t),
                                i = this.clientOptions.middleware;
                            i.handleDiagnostics ? i.handleDiagnostics(n, e, ((e, t) => this.setDiagnostics(e, t))) : this.setDiagnostics(n, e)
                        }
                    })).finally((() => {
                        this._diagnosticQueueState = {
                            state: "idle"
                        }, this.triggerDiagnosticQueue()
                    }))
                }
                setDiagnostics(e, t) {
                    this._diagnostics && this._diagnostics.set(e, t)
                }
                getLocale() {
                    return i.env.language
                }
                async $start() {
                    if (this.$state === Y.StartFailed) throw new Error("Previous start failed. Can't restart server.");
                    await this.start();
                    const e = this.activeConnection();
                    if (void 0 === e) throw new Error("Starting server failed");
                    return e
                }
                async createConnection() {
                    const e = await this.createMessageTransports(this._clientOptions.stdioEncoding || "utf8");
                    return this._connection = function(e, t, n, i, o) {
                        const s = new re,
                            c = (0, r.createProtocolConnection)(e, t, s, o);
                        return c.onError((e => {
                            n(e[0], e[1], e[2])
                        })), c.onClose(i), {
                            listen: () => c.listen(),
                            sendRequest: c.sendRequest,
                            onRequest: c.onRequest,
                            hasPendingResponse: c.hasPendingResponse,
                            sendNotification: c.sendNotification,
                            onNotification: c.onNotification,
                            onProgress: c.onProgress,
                            sendProgress: c.sendProgress,
                            trace: (e, t, n) => {
                                const i = {
                                    sendNotification: !1,
                                    traceFormat: r.TraceFormat.Text
                                };
                                return void 0 === n ? c.trace(e, t, i) : (a.boolean(n), c.trace(e, t, n))
                            },
                            initialize: e => c.sendRequest(r.InitializeRequest.type, e),
                            shutdown: () => c.sendRequest(r.ShutdownRequest.type, void 0),
                            exit: () => c.sendNotification(r.ExitNotification.type),
                            end: () => c.end(),
                            dispose: () => c.dispose()
                        }
                    }(e.reader, e.writer, ((e, t, n) => {
                        this.handleConnectionError(e, t, n).catch((e => this.error("Handling connection error failed", e)))
                    }), (() => {
                        this.handleConnectionClosed().catch((e => this.error("Handling connection close failed", e)))
                    }), this._clientOptions.connectionOptions), this._connection
                }
                async handleConnectionClosed() {
                    if (this.$state === Y.Stopped) return;
                    try {
                        void 0 !== this._connection && this._connection.dispose()
                    } catch (e) {}
                    let e = {
                        action: Q.DoNotRestart
                    };
                    if (this.$state !== Y.Stopping) try {
                        e = await this._clientOptions.errorHandler.closed()
                    } catch (e) {}
                    this._connection = void 0, e.action === Q.DoNotRestart ? (this.error(e.message ? ? "Connection to server got closed. Server will not be restarted.", void 0, !0 !== e.handled && "force"), this.cleanUp("stop"), this.$state === Y.Starting ? this.$state = Y.StartFailed : this.$state = Y.Stopped, this._onStop = Promise.resolve(), this._onStart = void 0) : e.action === Q.Restart && (this.info(e.message ? ? "Connection to server got closed. Server will restart.", !e.handled), this.cleanUp("restart"), this.$state = Y.Initial, this._onStop = Promise.resolve(), this._onStart = void 0, this.start().catch((e => this.error("Restarting server failed", e, "force"))))
                }
                async handleConnectionError(e, t, n) {
                    const i = await this._clientOptions.errorHandler.error(e, t, n);
                    i.action === B.Shutdown ? (this.error(i.message ? ? `Client ${this._name}: connection to server is erroring.\n${e.message}\nShutting down server.`, void 0, !0 !== i.handled && "force"), this.stop().catch((e => {
                        this.error("Stopping server failed", e, !1)
                    }))) : this.error(i.message ? ? `Client ${this._name}: connection to server is erroring.\n${e.message}`, void 0, !0 !== i.handled && "force")
                }
                hookConfigurationChanged(e) {
                    this._listeners.push(i.workspace.onDidChangeConfiguration((() => {
                        this.refreshTrace(e, !0)
                    })))
                }
                refreshTrace(e, t = !1) {
                    const n = i.workspace.getConfiguration(this._id);
                    let o = r.Trace.Off,
                        s = r.TraceFormat.Text;
                    if (n) {
                        const e = n.get("trace.server", "off");
                        "string" == typeof e ? o = r.Trace.fromString(e) : (o = r.Trace.fromString(n.get("trace.server.verbosity", "off")), s = r.TraceFormat.fromString(n.get("trace.server.format", "text")))
                    }
                    this._trace = o, this._traceFormat = s, e.trace(this._trace, this._tracer, {
                        sendNotification: t,
                        traceFormat: this._traceFormat
                    }).catch((e => {
                        this.error("Updating trace failed with error", e, !1)
                    }))
                }
                hookFileEvents(e) {
                    let t, n = this._clientOptions.synchronize.fileEvents;
                    n && (t = a.array(n) ? n : [n], t && this._dynamicFeatures.get(r.DidChangeWatchedFilesNotification.type.method).registerRaw(u.generateUuid(), t))
                }
                registerFeatures(e) {
                    for (let t of e) this.registerFeature(t)
                }
                registerFeature(e) {
                    if (this._features.push(e), d.DynamicFeature.is(e)) {
                        const t = e.registrationType;
                        this._dynamicFeatures.set(t.method, e)
                    }
                }
                getFeature(e) {
                    return this._dynamicFeatures.get(e)
                }
                hasDedicatedTextSynchronizationFeature(e) {
                    const t = this.getFeature(r.NotebookDocumentSyncRegistrationType.method);
                    return void 0 !== t && t instanceof p.NotebookDocumentSyncFeature && t.handles(e)
                }
                registerBuiltinFeatures() {
                    const e = new Map;
                    this.registerFeature(new g.ConfigurationFeature(this)), this.registerFeature(new m.DidOpenTextDocumentFeature(this, this._syncedDocuments)), this._didChangeTextDocumentFeature = new m.DidChangeTextDocumentFeature(this, e), this._didChangeTextDocumentFeature.onPendingChangeAdded((() => {
                        this.triggerPendingChangeDelivery()
                    })), this.registerFeature(this._didChangeTextDocumentFeature), this.registerFeature(new m.WillSaveFeature(this)), this.registerFeature(new m.WillSaveWaitUntilFeature(this)), this.registerFeature(new m.DidSaveTextDocumentFeature(this)), this.registerFeature(new m.DidCloseTextDocumentFeature(this, this._syncedDocuments, e)), this.registerFeature(new E.FileSystemWatcherFeature(this, (e => this.notifyFileEvent(e)))), this.registerFeature(new f.CompletionItemFeature(this)), this.registerFeature(new y.HoverFeature(this)), this.registerFeature(new C.SignatureHelpFeature(this)), this.registerFeature(new v.DefinitionFeature(this)), this.registerFeature(new _.ReferencesFeature(this)), this.registerFeature(new b.DocumentHighlightFeature(this)), this.registerFeature(new D.DocumentSymbolFeature(this)), this.registerFeature(new R.WorkspaceSymbolFeature(this)), this.registerFeature(new w.CodeActionFeature(this)), this.registerFeature(new T.CodeLensFeature(this)), this.registerFeature(new S.DocumentFormattingFeature(this)), this.registerFeature(new S.DocumentRangeFormattingFeature(this)), this.registerFeature(new S.DocumentOnTypeFormattingFeature(this)), this.registerFeature(new k.RenameFeature(this)), this.registerFeature(new P.DocumentLinkFeature(this)), this.registerFeature(new x.ExecuteCommandFeature(this)), this.registerFeature(new g.SyncConfigurationFeature(this)), this.registerFeature(new M.TypeDefinitionFeature(this)), this.registerFeature(new q.ImplementationFeature(this)), this.registerFeature(new O.ColorProviderFeature(this)), void 0 === this.clientOptions.workspaceFolder && this.registerFeature(new F.WorkspaceFoldersFeature(this)), this.registerFeature(new N.FoldingRangeFeature(this)), this.registerFeature(new I.DeclarationFeature(this)), this.registerFeature(new L.SelectionRangeFeature(this)), this.registerFeature(new j.ProgressFeature(this)), this.registerFeature(new A.CallHierarchyFeature(this)), this.registerFeature(new H.SemanticTokensFeature(this)), this.registerFeature(new K.LinkedEditingFeature(this)), this.registerFeature(new W.DidCreateFilesFeature(this)), this.registerFeature(new W.DidRenameFilesFeature(this)), this.registerFeature(new W.DidDeleteFilesFeature(this)), this.registerFeature(new W.WillCreateFilesFeature(this)), this.registerFeature(new W.WillRenameFilesFeature(this)), this.registerFeature(new W.WillDeleteFilesFeature(this)), this.registerFeature(new U.TypeHierarchyFeature(this)), this.registerFeature(new z.InlineValueFeature(this)), this.registerFeature(new $.InlayHintsFeature(this)), this.registerFeature(new h.DiagnosticFeature(this)), this.registerFeature(new p.NotebookDocumentSyncFeature(this))
                }
                registerProposedFeatures() {
                    this.registerFeatures(te.createAll(this))
                }
                fillInitializeParams(e) {
                    for (let t of this._features) a.func(t.fillInitializeParams) && t.fillInitializeParams(e)
                }
                computeClientCapabilities() {
                    const e = {};
                    (0, d.ensure)(e, "workspace").applyEdit = !0;
                    const t = (0, d.ensure)((0, d.ensure)(e, "workspace"), "workspaceEdit");
                    t.documentChanges = !0, t.resourceOperations = [r.ResourceOperationKind.Create, r.ResourceOperationKind.Rename, r.ResourceOperationKind.Delete], t.failureHandling = r.FailureHandlingKind.TextOnlyTransactional, t.normalizesLineEndings = !0, t.changeAnnotationSupport = {
                        groupsOnLabel: !0
                    };
                    const n = (0, d.ensure)((0, d.ensure)(e, "textDocument"), "publishDiagnostics");
                    n.relatedInformation = !0, n.versionSupport = !1, n.tagSupport = {
                        valueSet: [r.DiagnosticTag.Unnecessary, r.DiagnosticTag.Deprecated]
                    }, n.codeDescriptionSupport = !0, n.dataSupport = !0;
                    const i = (0, d.ensure)(e, "window");
                    (0, d.ensure)(i, "showMessage").messageActionItem = {
                        additionalPropertiesSupport: !0
                    }, (0, d.ensure)(i, "showDocument").support = !0;
                    const o = (0, d.ensure)(e, "general");
                    o.staleRequestSupport = {
                        cancel: !0,
                        retryOnContentModified: Array.from(ie.RequestsToCancelOnContentModified)
                    }, o.regularExpressions = {
                        engine: "ECMAScript",
                        version: "ES2020"
                    }, o.markdown = {
                        parser: "marked",
                        version: "1.1.0"
                    }, o.positionEncodings = ["utf-16"], this._clientOptions.markdown.supportHtml && (o.markdown.allowedTags = ["ul", "li", "p", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"]);
                    for (let t of this._features) t.fillClientCapabilities(e);
                    return e
                }
                initializeFeatures(e) {
                    const t = this._clientOptions.documentSelector;
                    for (const e of this._features) a.func(e.preInitialize) && e.preInitialize(this._capabilities, t);
                    for (const e of this._features) e.initialize(this._capabilities, t)
                }
                async handleRegistrationRequest(e) {
                    const t = this.clientOptions.middleware ? .handleRegisterCapability;
                    return t ? t(e, (e => this.doRegisterCapability(e))) : this.doRegisterCapability(e)
                }
                async doRegisterCapability(e) {
                    if (this.isRunning())
                        for (const t of e.registrations) {
                            const e = this._dynamicFeatures.get(t.method);
                            if (void 0 === e) return Promise.reject(new Error(`No feature implementation for ${t.method} found. Registration failed.`));
                            const n = t.registerOptions ? ? {};
                            n.documentSelector = n.documentSelector ? ? this._clientOptions.documentSelector;
                            const i = {
                                id: t.id,
                                registerOptions: n
                            };
                            try {
                                e.register(i)
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        } else
                            for (const t of e.registrations) this._ignoredRegistrations.add(t.id)
                }
                async handleUnregistrationRequest(e) {
                    const t = this.clientOptions.middleware ? .handleUnregisterCapability;
                    return t ? t(e, (e => this.doUnregisterCapability(e))) : this.doUnregisterCapability(e)
                }
                async doUnregisterCapability(e) {
                    for (const t of e.unregisterations) {
                        if (this._ignoredRegistrations.has(t.id)) continue;
                        const e = this._dynamicFeatures.get(t.method);
                        if (!e) return Promise.reject(new Error(`No feature implementation for ${t.method} found. Unregistration failed.`));
                        e.unregister(t.id)
                    }
                }
                async handleApplyWorkspaceEdit(e) {
                    const t = e.edit,
                        n = await this.workspaceEditLock.lock((() => this._p2c.asWorkspaceEdit(t))),
                        o = new Map;
                    i.workspace.textDocuments.forEach((e => o.set(e.uri.toString(), e)));
                    let s = !1;
                    if (t.documentChanges)
                        for (const e of t.documentChanges)
                            if (r.TextDocumentEdit.is(e) && e.textDocument.version && e.textDocument.version >= 0) {
                                const t = this._p2c.asUri(e.textDocument.uri).toString(),
                                    n = o.get(t);
                                if (n && n.version !== e.textDocument.version) {
                                    s = !0;
                                    break
                                }
                            }
                    return s ? Promise.resolve({
                        applied: !1
                    }) : a.asPromise(i.workspace.applyEdit(n).then((e => ({
                        applied: e
                    }))))
                }
                handleFailedRequest(e, t, n, o, s = !0) {
                    if (n instanceof r.ResponseError) {
                        if (n.code === r.ErrorCodes.PendingResponseRejected || n.code === r.ErrorCodes.ConnectionInactive) return o;
                        if (n.code === r.LSPErrorCodes.RequestCancelled || n.code === r.LSPErrorCodes.ServerCancelled) {
                            if (void 0 !== t && t.isCancellationRequested) return o;
                            throw void 0 !== n.data ? new d.LSPCancellationError(n.data) : new i.CancellationError
                        }
                        if (n.code === r.LSPErrorCodes.ContentModified) {
                            if (ie.RequestsToCancelOnContentModified.has(e.method) || ie.CancellableResolveCalls.has(e.method)) throw new i.CancellationError;
                            return o
                        }
                    }
                    throw this.error(`Request ${e.method} failed.`, n, s), n
                }
            }
            t.BaseLanguageClient = ie, ie.RequestsToCancelOnContentModified = new Set([r.SemanticTokensRequest.method, r.SemanticTokensRangeRequest.method, r.SemanticTokensDeltaRequest.method]), ie.CancellableResolveCalls = new Set([r.CompletionResolveRequest.method, r.CodeLensResolveRequest.method, r.CodeActionResolveRequest.method, r.InlayHintResolveRequest.method, r.DocumentLinkResolveRequest.method, r.WorkspaceSymbolResolveRequest.method]);
            class re {
                error(e) {
                    (0, r.RAL)().console.error(e)
                }
                warn(e) {
                    (0, r.RAL)().console.warn(e)
                }
                info(e) {
                    (0, r.RAL)().console.info(e)
                }
                log(e) {
                    (0, r.RAL)().console.log(e)
                }
            }! function(e) {
                e.createAll = function(e) {
                    return [new V.InlineCompletionItemFeature(e)]
                }
            }(te || (t.ProposedFeatures = te = {}))
        },
        "8BKz": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeActionFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("l2C0"),
                s = n("MFH3");
            class a extends s.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.CodeActionRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, s.ensure)((0, s.ensure)(e, "textDocument"), "codeAction");
                    t.dynamicRegistration = !0, t.isPreferredSupport = !0, t.disabledSupport = !0, t.dataSupport = !0, t.resolveSupport = {
                        properties: ["edit"]
                    }, t.codeActionLiteralSupport = {
                        codeActionKind: {
                            valueSet: [r.CodeActionKind.Empty, r.CodeActionKind.QuickFix, r.CodeActionKind.Refactor, r.CodeActionKind.RefactorExtract, r.CodeActionKind.RefactorInline, r.CodeActionKind.RefactorRewrite, r.CodeActionKind.Source, r.CodeActionKind.SourceOrganizeImports]
                        }
                    }, t.honorsChangeAnnotations = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.codeActionProvider);
                    n && this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideCodeActions: (e, t, n, i) => {
                                const o = this._client,
                                    s = async (e, t, n, i) => {
                                        const s = {
                                            textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            range: o.code2ProtocolConverter.asRange(t),
                                            context: o.code2ProtocolConverter.asCodeActionContextSync(n)
                                        };
                                        return o.sendRequest(r.CodeActionRequest.type, s, i).then((e => i.isCancellationRequested || null == e ? null : o.protocol2CodeConverter.asCodeActionResult(e, i)), (e => o.handleFailedRequest(r.CodeActionRequest.type, i, e, null)))
                                    },
                                    a = o.middleware;
                                return a.provideCodeActions ? a.provideCodeActions(e, t, n, i, s) : s(e, t, n, i)
                            },
                            resolveCodeAction: e.resolveProvider ? (e, t) => {
                                const n = this._client,
                                    i = this._client.middleware,
                                    o = async (e, t) => n.sendRequest(r.CodeActionResolveRequest.type, n.code2ProtocolConverter.asCodeActionSync(e), t).then((i => t.isCancellationRequested ? e : n.protocol2CodeConverter.asCodeAction(i, t)), (i => n.handleFailedRequest(r.CodeActionResolveRequest.type, t, i, e)));
                                return i.resolveCodeAction ? i.resolveCodeAction(e, t, o) : o(e, t)
                            } : void 0
                        };
                    return [i.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n, e.codeActionKinds ? {
                        providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(e.codeActionKinds)
                    } : void 0), n]
                }
            }
            t.CodeActionFeature = a
        },
        fc7G: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createConverter = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("wjb4"),
                s = n("F4kK"),
                a = n("+T0I"),
                c = n("2afT"),
                u = n("VtvQ"),
                l = n("jDNm"),
                d = n("h6Cg"),
                h = n("SJgK"),
                p = n("tMnT"),
                g = n("5M8Z"),
                m = n("9ANT");
            var f;
            ! function(e) {
                e.is = function(e) {
                    const t = e;
                    return t && !!t.inserting && !!t.replacing
                }
            }(f || (f = {})), t.createConverter = function(e) {
                const t = e || (e => e.toString());

                function n(e) {
                    return t(e)
                }

                function y(e) {
                    return {
                        uri: t(e.uri)
                    }
                }

                function v(e) {
                    return {
                        uri: t(e.uri),
                        languageId: e.languageId,
                        version: e.version,
                        text: e.getText()
                    }
                }

                function C(e) {
                    switch (e) {
                        case i.TextDocumentSaveReason.Manual:
                            return r.TextDocumentSaveReason.Manual;
                        case i.TextDocumentSaveReason.AfterDelay:
                            return r.TextDocumentSaveReason.AfterDelay;
                        case i.TextDocumentSaveReason.FocusOut:
                            return r.TextDocumentSaveReason.FocusOut
                    }
                    return r.TextDocumentSaveReason.Manual
                }

                function b(e) {
                    switch (e) {
                        case i.CompletionTriggerKind.TriggerCharacter:
                            return r.CompletionTriggerKind.TriggerCharacter;
                        case i.CompletionTriggerKind.TriggerForIncompleteCompletions:
                            return r.CompletionTriggerKind.TriggerForIncompleteCompletions;
                        default:
                            return r.CompletionTriggerKind.Invoked
                    }
                }

                function D(e) {
                    switch (e) {
                        case i.SignatureHelpTriggerKind.Invoke:
                            return r.SignatureHelpTriggerKind.Invoked;
                        case i.SignatureHelpTriggerKind.TriggerCharacter:
                            return r.SignatureHelpTriggerKind.TriggerCharacter;
                        case i.SignatureHelpTriggerKind.ContentChange:
                            return r.SignatureHelpTriggerKind.ContentChange
                    }
                }

                function R(e) {
                    return {
                        label: e.label
                    }
                }

                function _(e) {
                    return {
                        label: e.label,
                        parameters: (t = e.parameters, t.map(R))
                    };
                    var t
                }

                function w(e) {
                    return {
                        line: e.line,
                        character: e.character
                    }
                }

                function T(e) {
                    return null == e ? e : {
                        line: e.line > r.uinteger.MAX_VALUE ? r.uinteger.MAX_VALUE : e.line,
                        character: e.character > r.uinteger.MAX_VALUE ? r.uinteger.MAX_VALUE : e.character
                    }
                }

                function S(e) {
                    return null == e ? e : {
                        start: T(e.start),
                        end: T(e.end)
                    }
                }

                function k(e) {
                    return null == e ? e : r.Location.create(n(e.uri), S(e.range))
                }

                function P(e) {
                    switch (e) {
                        case i.DiagnosticSeverity.Error:
                            return r.DiagnosticSeverity.Error;
                        case i.DiagnosticSeverity.Warning:
                            return r.DiagnosticSeverity.Warning;
                        case i.DiagnosticSeverity.Information:
                            return r.DiagnosticSeverity.Information;
                        case i.DiagnosticSeverity.Hint:
                            return r.DiagnosticSeverity.Hint
                    }
                }

                function x(e) {
                    switch (e) {
                        case i.DiagnosticTag.Unnecessary:
                            return r.DiagnosticTag.Unnecessary;
                        case i.DiagnosticTag.Deprecated:
                            return r.DiagnosticTag.Deprecated;
                        default:
                            return
                    }
                }

                function E(e) {
                    return {
                        message: e.message,
                        location: k(e.location)
                    }
                }

                function O(e) {
                    const t = r.Diagnostic.create(S(e.range), e.message),
                        i = e instanceof d.ProtocolDiagnostic ? e : void 0;
                    void 0 !== i && void 0 !== i.data && (t.data = i.data);
                    const s = function(e) {
                        if (null != e) return o.number(e) || o.string(e) ? e : {
                            value: e.value,
                            target: n(e.target)
                        }
                    }(e.code);
                    return d.DiagnosticCode.is(s) ? void 0 !== i && i.hasDiagnosticCode ? t.code = s : (t.code = s.value, t.codeDescription = {
                        href: s.target
                    }) : t.code = s, o.number(e.severity) && (t.severity = P(e.severity)), Array.isArray(e.tags) && (t.tags = function(e) {
                        if (!e) return;
                        let t = [];
                        for (let n of e) {
                            let e = x(n);
                            void 0 !== e && t.push(e)
                        }
                        return t.length > 0 ? t : void 0
                    }(e.tags)), e.relatedInformation && (t.relatedInformation = e.relatedInformation.map(E)), e.source && (t.source = e.source), t
                }

                function q(e, t) {
                    return null == e ? e : s.map(e, O, t)
                }

                function M(e) {
                    return null == e ? e : e.map(O)
                }

                function F(e) {
                    if (e === i.CompletionItemTag.Deprecated) return r.CompletionItemTag.Deprecated
                }

                function N(e) {
                    return {
                        range: S(e.range),
                        newText: e.newText
                    }
                }

                function I(e) {
                    return null == e ? e : e.map(N)
                }

                function L(e) {
                    return e <= i.SymbolKind.TypeParameter ? e + 1 : r.SymbolKind.Property
                }

                function j(e) {
                    return e
                }

                function A(e) {
                    return e.map(j)
                }

                function H(e) {
                    switch (e) {
                        case i.CodeActionTriggerKind.Invoke:
                            return r.CodeActionTriggerKind.Invoked;
                        case i.CodeActionTriggerKind.Automatic:
                            return r.CodeActionTriggerKind.Automatic;
                        default:
                            return
                    }
                }

                function W(e) {
                    if (null != e) return e.value
                }

                function K(e) {
                    let t = r.Command.create(e.title, e.command);
                    return e.arguments && (t.arguments = e.arguments), t
                }

                function U(e) {
                    const t = r.InlayHintLabelPart.create(e.value);
                    return void 0 !== e.location && (t.location = k(e.location)), void 0 !== e.command && (t.command = K(e.command)), void 0 !== e.tooltip && (t.tooltip = z(e.tooltip)), t
                }

                function z(e) {
                    return "string" == typeof e ? e : {
                        kind: r.MarkupKind.Markdown,
                        value: e.value
                    }
                }
                return {
                    asUri: n,
                    asTextDocumentIdentifier: y,
                    asTextDocumentItem: v,
                    asVersionedTextDocumentIdentifier: function(e) {
                        return {
                            uri: t(e.uri),
                            version: e.version
                        }
                    },
                    asOpenTextDocumentParams: function(e) {
                        return {
                            textDocument: v(e)
                        }
                    },
                    asChangeTextDocumentParams: function(e, n, i) {
                        if (function(e) {
                                const t = e;
                                return !!t.uri && !!t.version
                            }(e)) return {
                            textDocument: {
                                uri: t(e.uri),
                                version: e.version
                            },
                            contentChanges: [{
                                text: e.getText()
                            }]
                        };
                        if (function(e) {
                                const t = e;
                                return !!t.document && !!t.contentChanges
                            }(e)) {
                            const r = i;
                            return {
                                textDocument: {
                                    uri: t(n),
                                    version: r
                                },
                                contentChanges: e.contentChanges.map((e => {
                                    const t = e.range;
                                    return {
                                        range: {
                                            start: {
                                                line: t.start.line,
                                                character: t.start.character
                                            },
                                            end: {
                                                line: t.end.line,
                                                character: t.end.character
                                            }
                                        },
                                        rangeLength: e.rangeLength,
                                        text: e.text
                                    }
                                }))
                            }
                        }
                        throw Error("Unsupported text document change parameter")
                    },
                    asCloseTextDocumentParams: function(e) {
                        return {
                            textDocument: y(e)
                        }
                    },
                    asSaveTextDocumentParams: function(e, t = !1) {
                        let n = {
                            textDocument: y(e)
                        };
                        return t && (n.text = e.getText()), n
                    },
                    asWillSaveTextDocumentParams: function(e) {
                        return {
                            textDocument: y(e.document),
                            reason: C(e.reason)
                        }
                    },
                    asDidCreateFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                uri: t(e)
                            })))
                        }
                    },
                    asDidRenameFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                oldUri: t(e.oldUri),
                                newUri: t(e.newUri)
                            })))
                        }
                    },
                    asDidDeleteFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                uri: t(e)
                            })))
                        }
                    },
                    asWillCreateFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                uri: t(e)
                            })))
                        }
                    },
                    asWillRenameFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                oldUri: t(e.oldUri),
                                newUri: t(e.newUri)
                            })))
                        }
                    },
                    asWillDeleteFilesParams: function(e) {
                        return {
                            files: e.files.map((e => ({
                                uri: t(e)
                            })))
                        }
                    },
                    asTextDocumentPositionParams: function(e, t) {
                        return {
                            textDocument: y(e),
                            position: w(t)
                        }
                    },
                    asCompletionParams: function(e, t, n) {
                        return {
                            textDocument: y(e),
                            position: w(t),
                            context: {
                                triggerKind: b(n.triggerKind),
                                triggerCharacter: n.triggerCharacter
                            }
                        }
                    },
                    asSignatureHelpParams: function(e, t, n) {
                        return {
                            textDocument: y(e),
                            position: w(t),
                            context: {
                                isRetrigger: n.isRetrigger,
                                triggerCharacter: n.triggerCharacter,
                                triggerKind: D(n.triggerKind),
                                activeSignatureHelp: (i = n.activeSignatureHelp, void 0 === i ? i : {
                                    signatures: (r = i.signatures, r.map(_)),
                                    activeSignature: i.activeSignature,
                                    activeParameter: i.activeParameter
                                })
                            }
                        };
                        var i, r
                    },
                    asWorkerPosition: w,
                    asRange: S,
                    asRanges: function(e) {
                        return e.map(S)
                    },
                    asPosition: T,
                    asPositions: function(e, t) {
                        return s.map(e, T, t)
                    },
                    asPositionsSync: function(e) {
                        return e.map(T)
                    },
                    asLocation: k,
                    asDiagnosticSeverity: P,
                    asDiagnosticTag: x,
                    asDiagnostic: O,
                    asDiagnostics: q,
                    asDiagnosticsSync: M,
                    asCompletionItem: function(e, t = !1) {
                        let n, s;
                        o.string(e.label) ? n = e.label : (n = e.label.label, !t || void 0 === e.label.detail && void 0 === e.label.description || (s = {
                            detail: e.label.detail,
                            description: e.label.description
                        }));
                        let c = {
                            label: n
                        };
                        void 0 !== s && (c.labelDetails = s);
                        let u = e instanceof a.default ? e : void 0;
                        var l, d;
                        e.detail && (c.detail = e.detail), e.documentation && (u && "$string" !== u.documentationFormat ? c.documentation = function(e, t) {
                                switch (e) {
                                    case "$string":
                                        return t;
                                    case r.MarkupKind.PlainText:
                                        return {
                                            kind: e,
                                            value: t
                                        };
                                    case r.MarkupKind.Markdown:
                                        return {
                                            kind: e,
                                            value: t.value
                                        };
                                    default:
                                        return `Unsupported Markup content received. Kind is: ${e}`
                                }
                            }(u.documentationFormat, e.documentation) : c.documentation = e.documentation), e.filterText && (c.filterText = e.filterText),
                            function(e, t) {
                                let n, o, s = r.InsertTextFormat.PlainText;
                                t.textEdit ? (n = t.textEdit.newText, o = t.textEdit.range) : t.insertText instanceof i.SnippetString ? (s = r.InsertTextFormat.Snippet, n = t.insertText.value) : n = t.insertText, t.range && (o = t.range), e.insertTextFormat = s, t.fromEdit && void 0 !== n && void 0 !== o ? e.textEdit = function(e, t) {
                                    return f.is(t) ? r.InsertReplaceEdit.create(e, S(t.inserting), S(t.replacing)) : {
                                        newText: e,
                                        range: S(t)
                                    }
                                }(n, o) : e.insertText = n
                            }(c, e), o.number(e.kind) && (c.kind = (l = e.kind, void 0 !== (d = u && u.originalItemKind) ? d : l + 1)), e.sortText && (c.sortText = e.sortText), e.additionalTextEdits && (c.additionalTextEdits = I(e.additionalTextEdits)), e.commitCharacters && (c.commitCharacters = e.commitCharacters.slice()), e.command && (c.command = K(e.command)), !0 !== e.preselect && !1 !== e.preselect || (c.preselect = e.preselect);
                        const h = function(e) {
                            if (void 0 === e) return e;
                            const t = [];
                            for (let n of e) {
                                const e = F(n);
                                void 0 !== e && t.push(e)
                            }
                            return t
                        }(e.tags);
                        if (u) {
                            if (void 0 !== u.data && (c.data = u.data), !0 === u.deprecated || !1 === u.deprecated) {
                                if (!0 === u.deprecated && void 0 !== h && h.length > 0) {
                                    const e = h.indexOf(i.CompletionItemTag.Deprecated); - 1 !== e && h.splice(e, 1)
                                }
                                c.deprecated = u.deprecated
                            }
                            void 0 !== u.insertTextMode && (c.insertTextMode = u.insertTextMode)
                        }
                        return void 0 !== h && h.length > 0 && (c.tags = h), void 0 === c.insertTextMode && !0 === e.keepWhitespace && (c.insertTextMode = r.InsertTextMode.adjustIndentation), c
                    },
                    asTextEdit: N,
                    asSymbolKind: L,
                    asSymbolTag: j,
                    asSymbolTags: A,
                    asReferenceParams: function(e, t, n) {
                        return {
                            textDocument: y(e),
                            position: w(t),
                            context: {
                                includeDeclaration: n.includeDeclaration
                            }
                        }
                    },
                    asCodeAction: async function(e, t) {
                        let n = r.CodeAction.create(e.title);
                        if (e instanceof l.default && void 0 !== e.data && (n.data = e.data), void 0 !== e.kind && (n.kind = W(e.kind)), void 0 !== e.diagnostics && (n.diagnostics = await q(e.diagnostics, t)), void 0 !== e.edit) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
                        return void 0 !== e.command && (n.command = K(e.command)), void 0 !== e.isPreferred && (n.isPreferred = e.isPreferred), void 0 !== e.disabled && (n.disabled = {
                            reason: e.disabled.reason
                        }), n
                    },
                    asCodeActionSync: function(e) {
                        let t = r.CodeAction.create(e.title);
                        if (e instanceof l.default && void 0 !== e.data && (t.data = e.data), void 0 !== e.kind && (t.kind = W(e.kind)), void 0 !== e.diagnostics && (t.diagnostics = M(e.diagnostics)), void 0 !== e.edit) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
                        return void 0 !== e.command && (t.command = K(e.command)), void 0 !== e.isPreferred && (t.isPreferred = e.isPreferred), void 0 !== e.disabled && (t.disabled = {
                            reason: e.disabled.reason
                        }), t
                    },
                    asCodeActionContext: async function(e, t) {
                        if (null == e) return e;
                        let n;
                        return e.only && o.string(e.only.value) && (n = [e.only.value]), r.CodeActionContext.create(await q(e.diagnostics, t), n, H(e.triggerKind))
                    },
                    asCodeActionContextSync: function(e) {
                        if (null == e) return e;
                        let t;
                        return e.only && o.string(e.only.value) && (t = [e.only.value]), r.CodeActionContext.create(M(e.diagnostics), t, H(e.triggerKind))
                    },
                    asInlineValueContext: function(e) {
                        return null == e ? e : r.InlineValueContext.create(e.frameId, S(e.stoppedLocation))
                    },
                    asCommand: K,
                    asCodeLens: function(e) {
                        let t = r.CodeLens.create(S(e.range));
                        return e.command && (t.command = K(e.command)), e instanceof c.default && e.data && (t.data = e.data), t
                    },
                    asFormattingOptions: function(e, t) {
                        const n = {
                            tabSize: e.tabSize,
                            insertSpaces: e.insertSpaces
                        };
                        return t.trimTrailingWhitespace && (n.trimTrailingWhitespace = !0), t.trimFinalNewlines && (n.trimFinalNewlines = !0), t.insertFinalNewline && (n.insertFinalNewline = !0), n
                    },
                    asDocumentSymbolParams: function(e) {
                        return {
                            textDocument: y(e)
                        }
                    },
                    asCodeLensParams: function(e) {
                        return {
                            textDocument: y(e)
                        }
                    },
                    asDocumentLink: function(e) {
                        let t = r.DocumentLink.create(S(e.range));
                        e.target && (t.target = n(e.target)), void 0 !== e.tooltip && (t.tooltip = e.tooltip);
                        let i = e instanceof u.default ? e : void 0;
                        return i && i.data && (t.data = i.data), t
                    },
                    asDocumentLinkParams: function(e) {
                        return {
                            textDocument: y(e)
                        }
                    },
                    asCallHierarchyItem: function(e) {
                        const t = {
                            name: e.name,
                            kind: L(e.kind),
                            uri: n(e.uri),
                            range: S(e.range),
                            selectionRange: S(e.selectionRange)
                        };
                        return void 0 !== e.detail && e.detail.length > 0 && (t.detail = e.detail), void 0 !== e.tags && (t.tags = A(e.tags)), e instanceof h.default && void 0 !== e.data && (t.data = e.data), t
                    },
                    asTypeHierarchyItem: function(e) {
                        const t = {
                            name: e.name,
                            kind: L(e.kind),
                            uri: n(e.uri),
                            range: S(e.range),
                            selectionRange: S(e.selectionRange)
                        };
                        return void 0 !== e.detail && e.detail.length > 0 && (t.detail = e.detail), void 0 !== e.tags && (t.tags = A(e.tags)), e instanceof p.default && void 0 !== e.data && (t.data = e.data), t
                    },
                    asInlayHint: function(e) {
                        const t = "string" == typeof e.label ? e.label : e.label.map(U),
                            n = r.InlayHint.create(T(e.position), t);
                        return void 0 !== e.kind && (n.kind = e.kind), void 0 !== e.textEdits && (n.textEdits = I(e.textEdits)), void 0 !== e.tooltip && (n.tooltip = z(e.tooltip)), void 0 !== e.paddingLeft && (n.paddingLeft = e.paddingLeft), void 0 !== e.paddingRight && (n.paddingRight = e.paddingRight), e instanceof m.default && void 0 !== e.data && (n.data = e.data), n
                    },
                    asWorkspaceSymbol: function(e) {
                        const n = e instanceof g.default ? {
                            name: e.name,
                            kind: L(e.kind),
                            location: e.hasRange ? k(e.location) : {
                                uri: t(e.location.uri)
                            },
                            data: e.data
                        } : {
                            name: e.name,
                            kind: L(e.kind),
                            location: k(e.location)
                        };
                        return void 0 !== e.tags && (n.tags = A(e.tags)), "" !== e.containerName && (n.containerName = e.containerName), n
                    },
                    asInlineCompletionParams: function(e, t, n) {
                        return {
                            context: r.InlineCompletionContext.create(n.triggerKind, n.selectedCompletionInfo),
                            textDocument: y(e),
                            position: T(t)
                        }
                    }
                }
            }
        },
        gWAr: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeLensFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("l2C0"),
                s = n("MFH3");
            class a extends s.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.CodeLensRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, s.ensure)((0, s.ensure)(e, "textDocument"), "codeLens").dynamicRegistration = !0, (0, s.ensure)((0, s.ensure)(e, "workspace"), "codeLens").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(r.CodeLensRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeCodeLensEmitter.fire()
                    }));
                    const n = this.getRegistrationOptions(t, e.codeLensProvider);
                    n && this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = new i.EventEmitter,
                        o = {
                            onDidChangeCodeLenses: n.event,
                            provideCodeLenses: (e, t) => {
                                const n = this._client,
                                    i = (e, t) => n.sendRequest(r.CodeLensRequest.type, n.code2ProtocolConverter.asCodeLensParams(e), t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asCodeLenses(e, t)), (e => n.handleFailedRequest(r.CodeLensRequest.type, t, e, null))),
                                    o = n.middleware;
                                return o.provideCodeLenses ? o.provideCodeLenses(e, t, i) : i(e, t)
                            },
                            resolveCodeLens: e.resolveProvider ? (e, t) => {
                                const n = this._client,
                                    i = (e, t) => n.sendRequest(r.CodeLensResolveRequest.type, n.code2ProtocolConverter.asCodeLens(e), t).then((i => t.isCancellationRequested ? e : n.protocol2CodeConverter.asCodeLens(i)), (i => n.handleFailedRequest(r.CodeLensResolveRequest.type, t, i, e))),
                                    o = n.middleware;
                                return o.resolveCodeLens ? o.resolveCodeLens(e, t, i) : i(e, t)
                            } : void 0
                        };
                    return [i.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), o), {
                        provider: o,
                        onDidChangeCodeLensEmitter: n
                    }]
                }
            }
            t.CodeLensFeature = a
        },
        xtgN: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ColorProviderFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentColorRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "colorProvider").dynamicRegistration = !0
                }
                initialize(e, t) {
                    let [n, i] = this.getRegistration(t, e.colorProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideColorPresentations: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => {
                                        const o = {
                                            color: e,
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(t.document),
                                            range: i.code2ProtocolConverter.asRange(t.range)
                                        };
                                        return i.sendRequest(r.ColorPresentationRequest.type, o, n).then((e => n.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorPresentations(e, n)), (e => i.handleFailedRequest(r.ColorPresentationRequest.type, n, e, null)))
                                    },
                                    s = i.middleware;
                                return s.provideColorPresentations ? s.provideColorPresentations(e, t, n, o) : o(e, t, n)
                            },
                            provideDocumentColors: (e, t) => {
                                const n = this._client,
                                    i = (e, t) => {
                                        const i = {
                                            textDocument: n.code2ProtocolConverter.asTextDocumentIdentifier(e)
                                        };
                                        return n.sendRequest(r.DocumentColorRequest.type, i, t).then((e => t.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorInformations(e, t)), (e => n.handleFailedRequest(r.DocumentColorRequest.type, t, e, null)))
                                    },
                                    o = n.middleware;
                                return o.provideDocumentColors ? o.provideDocumentColors(e, t, i) : i(e, t)
                            }
                        };
                    return [i.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.ColorProviderFeature = s
        },
        rbcg: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompletionItemFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0"),
                a = [r.CompletionItemKind.Text, r.CompletionItemKind.Method, r.CompletionItemKind.Function, r.CompletionItemKind.Constructor, r.CompletionItemKind.Field, r.CompletionItemKind.Variable, r.CompletionItemKind.Class, r.CompletionItemKind.Interface, r.CompletionItemKind.Module, r.CompletionItemKind.Property, r.CompletionItemKind.Unit, r.CompletionItemKind.Value, r.CompletionItemKind.Enum, r.CompletionItemKind.Keyword, r.CompletionItemKind.Snippet, r.CompletionItemKind.Color, r.CompletionItemKind.File, r.CompletionItemKind.Reference, r.CompletionItemKind.Folder, r.CompletionItemKind.EnumMember, r.CompletionItemKind.Constant, r.CompletionItemKind.Struct, r.CompletionItemKind.Event, r.CompletionItemKind.Operator, r.CompletionItemKind.TypeParameter];
            class c extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.CompletionRequest.type), this.labelDetailsSupport = new Map
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "completion");
                    t.dynamicRegistration = !0, t.contextSupport = !0, t.completionItem = {
                        snippetSupport: !0,
                        commitCharactersSupport: !0,
                        documentationFormat: [r.MarkupKind.Markdown, r.MarkupKind.PlainText],
                        deprecatedSupport: !0,
                        preselectSupport: !0,
                        tagSupport: {
                            valueSet: [r.CompletionItemTag.Deprecated]
                        },
                        insertReplaceSupport: !0,
                        resolveSupport: {
                            properties: ["documentation", "detail", "additionalTextEdits"]
                        },
                        insertTextModeSupport: {
                            valueSet: [r.InsertTextMode.asIs, r.InsertTextMode.adjustIndentation]
                        },
                        labelDetailsSupport: !0
                    }, t.insertTextMode = r.InsertTextMode.adjustIndentation, t.completionItemKind = {
                        valueSet: a
                    }, t.completionList = {
                        itemDefaults: ["commitCharacters", "editRange", "insertTextFormat", "insertTextMode", "data"]
                    }
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.completionProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e, t) {
                    this.labelDetailsSupport.set(t, !!e.completionItem ? .labelDetailsSupport);
                    const n = e.triggerCharacters ? ? [],
                        o = e.allCommitCharacters,
                        s = e.documentSelector,
                        a = {
                            provideCompletionItems: (e, t, n, i) => {
                                const s = this._client,
                                    a = this._client.middleware,
                                    c = (e, t, n, i) => s.sendRequest(r.CompletionRequest.type, s.code2ProtocolConverter.asCompletionParams(e, t, n), i).then((e => i.isCancellationRequested ? null : s.protocol2CodeConverter.asCompletionResult(e, o, i)), (e => s.handleFailedRequest(r.CompletionRequest.type, i, e, null)));
                                return a.provideCompletionItem ? a.provideCompletionItem(e, t, i, n, c) : c(e, t, i, n)
                            },
                            resolveCompletionItem: e.resolveProvider ? (e, n) => {
                                const i = this._client,
                                    o = this._client.middleware,
                                    s = (e, n) => i.sendRequest(r.CompletionResolveRequest.type, i.code2ProtocolConverter.asCompletionItem(e, !!this.labelDetailsSupport.get(t)), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asCompletionItem(e)), (t => i.handleFailedRequest(r.CompletionResolveRequest.type, n, t, e)));
                                return o.resolveCompletionItem ? o.resolveCompletionItem(e, n, s) : s(e, n)
                            } : void 0
                        };
                    return [i.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(s), a, ...n), a]
                }
            }
            t.CompletionItemFeature = c
        },
        "7HNo": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SyncConfigurationFeature = t.toJSONObject = t.ConfigurationFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("wjb4"),
                s = n("l2C0"),
                a = n("MFH3");

            function c(e) {
                if (e) {
                    if (Array.isArray(e)) return e.map(c);
                    if ("object" == typeof e) {
                        const t = Object.create(null);
                        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = c(e[n]));
                        return t
                    }
                }
                return e
            }
            t.ConfigurationFeature = class {
                constructor(e) {
                    this._client = e
                }
                getState() {
                    return {
                        kind: "static"
                    }
                }
                fillClientCapabilities(e) {
                    e.workspace = e.workspace || {}, e.workspace.configuration = !0
                }
                initialize() {
                    let e = this._client;
                    e.onRequest(r.ConfigurationRequest.type, ((t, n) => {
                        let i = e => {
                                let t = [];
                                for (let n of e.items) {
                                    let e = void 0 !== n.scopeUri && null !== n.scopeUri ? this._client.protocol2CodeConverter.asUri(n.scopeUri) : void 0;
                                    t.push(this.getConfiguration(e, null !== n.section ? n.section : void 0))
                                }
                                return t
                            },
                            r = e.middleware.workspace;
                        return r && r.configuration ? r.configuration(t, n, i) : i(t)
                    }))
                }
                getConfiguration(e, t) {
                    let n = null;
                    if (t) {
                        let r = t.lastIndexOf(".");
                        if (-1 === r) n = c(i.workspace.getConfiguration(void 0, e).get(t));
                        else {
                            let o = i.workspace.getConfiguration(t.substr(0, r), e);
                            o && (n = c(o.get(t.substr(r + 1))))
                        }
                    } else {
                        let t = i.workspace.getConfiguration(void 0, e);
                        n = {};
                        for (let e of Object.keys(t)) t.has(e) && (n[e] = c(t.get(e)))
                    }
                    return void 0 === n && (n = null), n
                }
                clear() {}
            }, t.toJSONObject = c, t.SyncConfigurationFeature = class {
                constructor(e) {
                    this._client = e, this.isCleared = !1, this._listeners = new Map
                }
                getState() {
                    return {
                        kind: "workspace",
                        id: this.registrationType.method,
                        registrations: this._listeners.size > 0
                    }
                }
                get registrationType() {
                    return r.DidChangeConfigurationNotification.type
                }
                fillClientCapabilities(e) {
                    (0, a.ensure)((0, a.ensure)(e, "workspace"), "didChangeConfiguration").dynamicRegistration = !0
                }
                initialize() {
                    this.isCleared = !1;
                    let e = this._client.clientOptions.synchronize ? .configurationSection;
                    void 0 !== e && this.register({
                        id: s.generateUuid(),
                        registerOptions: {
                            section: e
                        }
                    })
                }
                register(e) {
                    let t = i.workspace.onDidChangeConfiguration((t => {
                        this.onDidChangeConfiguration(e.registerOptions.section, t)
                    }));
                    this._listeners.set(e.id, t), void 0 !== e.registerOptions.section && this.onDidChangeConfiguration(e.registerOptions.section, void 0)
                }
                unregister(e) {
                    let t = this._listeners.get(e);
                    t && (this._listeners.delete(e), t.dispose())
                }
                clear() {
                    for (const e of this._listeners.values()) e.dispose();
                    this._listeners.clear(), this.isCleared = !0
                }
                onDidChangeConfiguration(e, t) {
                    if (this.isCleared) return;
                    let n;
                    if (n = o.string(e) ? [e] : e, void 0 !== n && void 0 !== t && !n.some((e => t.affectsConfiguration(e)))) return;
                    const i = async e => void 0 === e ? this._client.sendNotification(r.DidChangeConfigurationNotification.type, {
                        settings: null
                    }) : this._client.sendNotification(r.DidChangeConfigurationNotification.type, {
                        settings: this.extractSettingsInformation(e)
                    });
                    let s = this._client.middleware.workspace ? .didChangeConfiguration;
                    (s ? s(n, i) : i(n)).catch((e => {
                        this._client.error(`Sending notification ${r.DidChangeConfigurationNotification.type.method} failed`, e)
                    }))
                }
                extractSettingsInformation(e) {
                    function t(e, t) {
                        let n = e;
                        for (let e = 0; e < t.length - 1; e++) {
                            let i = n[t[e]];
                            i || (i = Object.create(null), n[t[e]] = i), n = i
                        }
                        return n
                    }
                    let n = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : void 0,
                        r = Object.create(null);
                    for (let o = 0; o < e.length; o++) {
                        let s = e[o],
                            a = s.indexOf("."),
                            u = null;
                        if (u = a >= 0 ? i.workspace.getConfiguration(s.substr(0, a), n).get(s.substr(a + 1)) : i.workspace.getConfiguration(void 0, n).get(s), u) {
                            let n = e[o].split(".");
                            t(r, n)[n[n.length - 1]] = c(u)
                        }
                    }
                    return r
                }
            }
        },
        "/KO7": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DeclarationFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DeclarationRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "declaration");
                    t.dynamicRegistration = !0, t.linkSupport = !0
                }
                initialize(e, t) {
                    const [n, i] = this.getRegistration(t, e.declarationProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDeclaration: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.DeclarationRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asDeclarationResult(e, n)), (e => i.handleFailedRequest(r.DeclarationRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideDeclaration ? s.provideDeclaration(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.DeclarationFeature = s
        },
        bQdO: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DefinitionFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DefinitionRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "definition");
                    t.dynamicRegistration = !0, t.linkSupport = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.definitionProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDefinition: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.DefinitionRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asDefinitionResult(e, n)), (e => i.handleFailedRequest(r.DefinitionRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideDefinition ? s.provideDefinition(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.DefinitionFeature = a
        },
        "6wjD": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DiagnosticFeature = t.DiagnosticPullMode = t.vsdiag = void 0;
            const i = n("7khD"),
                r = n("Ja5U"),
                o = n("fozD"),
                s = n("l2C0"),
                a = n("MFH3");

            function c(e, t) {
                return void 0 === e[t] && (e[t] = {}), e[t]
            }
            var u, l, d, h, p;
            ! function(e) {
                let t;
                ! function(e) {
                    e.full = "full", e.unChanged = "unChanged"
                }(t = e.DocumentDiagnosticReportKind || (e.DocumentDiagnosticReportKind = {}))
            }(u || (t.vsdiag = u = {})),
            function(e) {
                e.onType = "onType", e.onSave = "onSave"
            }(l || (t.DiagnosticPullMode = l = {})),
            function(e) {
                e.active = "open", e.reschedule = "reschedule", e.outDated = "drop"
            }(d || (d = {}));
            class g {
                constructor() {
                    this.open = new Set, this._onOpen = new r.EventEmitter, this._onClose = new r.EventEmitter, g.fillTabResources(this.open);
                    void 0 !== r.window.tabGroups.onDidChangeTabs ? this.disposable = r.window.tabGroups.onDidChangeTabs((e => {
                        if (0 === e.closed.length && 0 === e.opened.length) return;
                        const t = this.open,
                            n = new Set;
                        g.fillTabResources(n);
                        const i = new Set,
                            o = new Set(n);
                        for (const e of t.values()) n.has(e) ? o.delete(e) : i.add(e);
                        if (this.open = n, i.size > 0) {
                            const e = new Set;
                            for (const t of i) e.add(r.Uri.parse(t));
                            this._onClose.fire(e)
                        }
                        if (o.size > 0) {
                            const e = new Set;
                            for (const t of o) e.add(r.Uri.parse(t));
                            this._onOpen.fire(e)
                        }
                    })) : this.disposable = {
                        dispose: () => {}
                    }
                }
                get onClose() {
                    return this._onClose.event
                }
                get onOpen() {
                    return this._onOpen.event
                }
                dispose() {
                    this.disposable.dispose()
                }
                isActive(e) {
                    return e instanceof r.Uri ? r.window.activeTextEditor ? .document.uri === e : r.window.activeTextEditor ? .document === e
                }
                isVisible(e) {
                    const t = e instanceof r.Uri ? e : e.uri;
                    return this.open.has(t.toString())
                }
                getTabResources() {
                    const e = new Set;
                    return g.fillTabResources(new Set, e), e
                }
                static fillTabResources(e, t) {
                    const n = e ? ? new Set;
                    for (const e of r.window.tabGroups.all)
                        for (const i of e.tabs) {
                            const e = i.input;
                            let o;
                            e instanceof r.TabInputText ? o = e.uri : e instanceof r.TabInputTextDiff ? o = e.modified : e instanceof r.TabInputCustom && (o = e.uri), void 0 === o || n.has(o.toString()) || (n.add(o.toString()), void 0 !== t && t.add(o))
                        }
                }
            }! function(e) {
                e[e.document = 1] = "document", e[e.workspace = 2] = "workspace"
            }(h || (h = {})),
            function(e) {
                e.asKey = function(e) {
                    return e instanceof r.Uri ? e.toString() : e.uri.toString()
                }
            }(p || (p = {}));
            class m {
                constructor() {
                    this.documentPullStates = new Map, this.workspacePullStates = new Map
                }
                track(e, t, n) {
                    const i = e === h.document ? this.documentPullStates : this.workspacePullStates,
                        [o, s, a] = t instanceof r.Uri ? [t.toString(), t, n] : [t.uri.toString(), t.uri, t.version];
                    let c = i.get(o);
                    return void 0 === c && (c = {
                        document: s,
                        pulledVersion: a,
                        resultId: void 0
                    }, i.set(o, c)), c
                }
                update(e, t, n, i) {
                    const o = e === h.document ? this.documentPullStates : this.workspacePullStates,
                        [s, a, c, u] = t instanceof r.Uri ? [t.toString(), t, n, i] : [t.uri.toString(), t.uri, t.version, n];
                    let l = o.get(s);
                    void 0 === l ? (l = {
                        document: a,
                        pulledVersion: c,
                        resultId: u
                    }, o.set(s, l)) : (l.pulledVersion = c, l.resultId = u)
                }
                unTrack(e, t) {
                    const n = p.asKey(t);
                    (e === h.document ? this.documentPullStates : this.workspacePullStates).delete(n)
                }
                tracks(e, t) {
                    const n = p.asKey(t);
                    return (e === h.document ? this.documentPullStates : this.workspacePullStates).has(n)
                }
                getResultId(e, t) {
                    const n = p.asKey(t),
                        i = e === h.document ? this.documentPullStates : this.workspacePullStates;
                    return i.get(n) ? .resultId
                }
                getAllResultIds() {
                    const e = [];
                    for (let [t, n] of this.workspacePullStates) this.documentPullStates.has(t) && (n = this.documentPullStates.get(t)), void 0 !== n.resultId && e.push({
                        uri: t,
                        value: n.resultId
                    });
                    return e
                }
            }
            class f {
                constructor(e, t, n) {
                    this.client = e, this.tabs = t, this.options = n, this.isDisposed = !1, this.onDidChangeDiagnosticsEmitter = new r.EventEmitter, this.provider = this.createProvider(), this.diagnostics = r.languages.createDiagnosticCollection(n.identifier), this.openRequests = new Map, this.documentStates = new m, this.workspaceErrorCounter = 0
                }
                knows(e, t) {
                    const n = t instanceof r.Uri ? t : t.uri;
                    return this.documentStates.tracks(e, t) || this.openRequests.has(n.toString())
                }
                forget(e, t) {
                    this.documentStates.unTrack(e, t)
                }
                pull(e, t) {
                    if (this.isDisposed) return;
                    const n = e instanceof r.Uri ? e : e.uri;
                    this.pullAsync(e).then((() => {
                        t && t()
                    }), (e => {
                        this.client.error(`Document pull failed for text document ${n.toString()}`, e, !1)
                    }))
                }
                async pullAsync(e, t) {
                    if (this.isDisposed) return;
                    const n = e instanceof r.Uri,
                        i = n ? e : e.uri,
                        s = i.toString();
                    t = n ? t : e.version;
                    const c = this.openRequests.get(s),
                        l = n ? this.documentStates.track(h.document, e, t) : this.documentStates.track(h.document, e);
                    if (void 0 === c) {
                        const n = new r.CancellationTokenSource;
                        let c, p;
                        this.openRequests.set(s, {
                            state: d.active,
                            document: e,
                            version: t,
                            tokenSource: n
                        });
                        try {
                            c = await this.provider.provideDiagnostics(e, l.resultId, n.token) ? ? {
                                kind: u.DocumentDiagnosticReportKind.full,
                                items: []
                            }
                        } catch (t) {
                            if (t instanceof a.LSPCancellationError && o.DiagnosticServerCancellationData.is(t.data) && !1 === t.data.retriggerRequest && (p = {
                                    state: d.outDated,
                                    document: e
                                }), !(void 0 === p && t instanceof r.CancellationError)) throw t;
                            p = {
                                state: d.reschedule,
                                document: e
                            }
                        }
                        if (p = p ? ? this.openRequests.get(s), void 0 === p) return this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${s}`), void this.diagnostics.delete(i);
                        if (this.openRequests.delete(s), !this.tabs.isVisible(e)) return void this.documentStates.unTrack(h.document, e);
                        if (p.state === d.outDated) return;
                        void 0 !== c && (c.kind === u.DocumentDiagnosticReportKind.full && this.diagnostics.set(i, c.items), l.pulledVersion = t, l.resultId = c.resultId), p.state === d.reschedule && this.pull(e)
                    } else c.state === d.active ? (c.tokenSource.cancel(), this.openRequests.set(s, {
                        state: d.reschedule,
                        document: c.document
                    })) : c.state === d.outDated && this.openRequests.set(s, {
                        state: d.reschedule,
                        document: c.document
                    })
                }
                forgetDocument(e) {
                    const t = e instanceof r.Uri ? e : e.uri,
                        n = t.toString(),
                        i = this.openRequests.get(n);
                    this.options.workspaceDiagnostics ? void 0 !== i ? this.openRequests.set(n, {
                        state: d.reschedule,
                        document: e
                    }) : this.pull(e, (() => {
                        this.forget(h.document, e)
                    })) : (void 0 !== i && (i.state === d.active && i.tokenSource.cancel(), this.openRequests.set(n, {
                        state: d.outDated,
                        document: e
                    })), this.diagnostics.delete(t), this.forget(h.document, e))
                }
                pullWorkspace() {
                    this.isDisposed || this.pullWorkspaceAsync().then((() => {
                        this.workspaceTimeout = (0, o.RAL)().timer.setTimeout((() => {
                            this.pullWorkspace()
                        }), 2e3)
                    }), (e => {
                        e instanceof a.LSPCancellationError || o.DiagnosticServerCancellationData.is(e.data) || (this.client.error("Workspace diagnostic pull failed.", e, !1), this.workspaceErrorCounter++), this.workspaceErrorCounter <= 5 && (this.workspaceTimeout = (0, o.RAL)().timer.setTimeout((() => {
                            this.pullWorkspace()
                        }), 2e3))
                    }))
                }
                async pullWorkspaceAsync() {
                    if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) return;
                    void 0 !== this.workspaceCancellation && (this.workspaceCancellation.cancel(), this.workspaceCancellation = void 0), this.workspaceCancellation = new r.CancellationTokenSource;
                    const e = this.documentStates.getAllResultIds().map((e => ({
                        uri: this.client.protocol2CodeConverter.asUri(e.uri),
                        value: e.value
                    })));
                    await this.provider.provideWorkspaceDiagnostics(e, this.workspaceCancellation.token, (e => {
                        if (e && !this.isDisposed)
                            for (const t of e.items) t.kind === u.DocumentDiagnosticReportKind.full && (this.documentStates.tracks(h.document, t.uri) || this.diagnostics.set(t.uri, t.items)), this.documentStates.update(h.workspace, t.uri, t.version ? ? void 0, t.resultId)
                    }))
                }
                createProvider() {
                    const e = {
                        onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event,
                        provideDiagnostics: (e, t, n) => {
                            const i = (e, t, n) => {
                                    const i = {
                                        identifier: this.options.identifier,
                                        textDocument: {
                                            uri: this.client.code2ProtocolConverter.asUri(e instanceof r.Uri ? e : e.uri)
                                        },
                                        previousResultId: t
                                    };
                                    return !0 !== this.isDisposed && this.client.isRunning() ? this.client.sendRequest(o.DocumentDiagnosticRequest.type, i, n).then((async e => null == e || this.isDisposed || n.isCancellationRequested ? {
                                        kind: u.DocumentDiagnosticReportKind.full,
                                        items: []
                                    } : e.kind === o.DocumentDiagnosticReportKind.Full ? {
                                        kind: u.DocumentDiagnosticReportKind.full,
                                        resultId: e.resultId,
                                        items: await this.client.protocol2CodeConverter.asDiagnostics(e.items, n)
                                    } : {
                                        kind: u.DocumentDiagnosticReportKind.unChanged,
                                        resultId: e.resultId
                                    }), (e => this.client.handleFailedRequest(o.DocumentDiagnosticRequest.type, n, e, {
                                        kind: u.DocumentDiagnosticReportKind.full,
                                        items: []
                                    }))) : {
                                        kind: u.DocumentDiagnosticReportKind.full,
                                        items: []
                                    }
                                },
                                s = this.client.middleware;
                            return s.provideDiagnostics ? s.provideDiagnostics(e, t, n, i) : i(e, t, n)
                        }
                    };
                    return this.options.workspaceDiagnostics && (e.provideWorkspaceDiagnostics = (e, t, n) => {
                        const i = async e => e.kind === o.DocumentDiagnosticReportKind.Full ? {
                                kind: u.DocumentDiagnosticReportKind.full,
                                uri: this.client.protocol2CodeConverter.asUri(e.uri),
                                resultId: e.resultId,
                                version: e.version,
                                items: await this.client.protocol2CodeConverter.asDiagnostics(e.items, t)
                            } : {
                                kind: u.DocumentDiagnosticReportKind.unChanged,
                                uri: this.client.protocol2CodeConverter.asUri(e.uri),
                                resultId: e.resultId,
                                version: e.version
                            },
                            r = e => {
                                const t = [];
                                for (const n of e) t.push({
                                    uri: this.client.code2ProtocolConverter.asUri(n.uri),
                                    value: n.value
                                });
                                return t
                            },
                            a = (e, t) => {
                                const a = (0, s.generateUuid)(),
                                    c = this.client.onProgress(o.WorkspaceDiagnosticRequest.partialResult, a, (async e => {
                                        if (null == e) return void n(null);
                                        const t = {
                                            items: []
                                        };
                                        for (const n of e.items) try {
                                            t.items.push(await i(n))
                                        } catch (e) {
                                            this.client.error("Converting workspace diagnostics failed.", e)
                                        }
                                        n(t)
                                    })),
                                    u = {
                                        identifier: this.options.identifier,
                                        previousResultIds: r(e),
                                        partialResultToken: a
                                    };
                                return !0 !== this.isDisposed && this.client.isRunning() ? this.client.sendRequest(o.WorkspaceDiagnosticRequest.type, u, t).then((async e => {
                                    if (t.isCancellationRequested) return {
                                        items: []
                                    };
                                    const r = {
                                        items: []
                                    };
                                    for (const t of e.items) r.items.push(await i(t));
                                    return c.dispose(), n(r), {
                                        items: []
                                    }
                                }), (e => (c.dispose(), this.client.handleFailedRequest(o.DocumentDiagnosticRequest.type, t, e, {
                                    items: []
                                })))) : {
                                    items: []
                                }
                            },
                            c = this.client.middleware;
                        return c.provideWorkspaceDiagnostics ? c.provideWorkspaceDiagnostics(e, t, n, a) : a(e, t)
                    }), e
                }
                dispose() {
                    this.isDisposed = !0, this.workspaceCancellation ? .cancel(), this.workspaceTimeout ? .dispose();
                    for (const [e, t] of this.openRequests) t.state === d.active && t.tokenSource.cancel(), this.openRequests.set(e, {
                        state: d.outDated,
                        document: t.document
                    });
                    this.diagnostics.dispose()
                }
            }
            class y {
                constructor(e) {
                    this.diagnosticRequestor = e, this.documents = new o.LinkedMap, this.isDisposed = !1
                }
                add(e) {
                    if (!0 === this.isDisposed) return;
                    const t = p.asKey(e);
                    this.documents.has(t) || (this.documents.set(t, e, o.Touch.Last), this.trigger())
                }
                remove(e) {
                    const t = p.asKey(e);
                    this.documents.delete(t), 0 === this.documents.size ? this.stop() : t === this.endDocumentKey() && (this.endDocument = this.documents.last)
                }
                trigger() {
                    !0 !== this.isDisposed && (void 0 === this.intervalHandle ? (this.endDocument = this.documents.last, this.intervalHandle = (0, o.RAL)().timer.setInterval((() => {
                        const e = this.documents.first;
                        if (void 0 !== e) {
                            const t = p.asKey(e);
                            this.diagnosticRequestor.pull(e), this.documents.set(t, e, o.Touch.Last), t === this.endDocumentKey() && this.stop()
                        }
                    }), 200)) : this.endDocument = this.documents.last)
                }
                dispose() {
                    this.isDisposed = !0, this.stop(), this.documents.clear()
                }
                stop() {
                    this.intervalHandle ? .dispose(), this.intervalHandle = void 0, this.endDocument = void 0
                }
                endDocumentKey() {
                    return void 0 !== this.endDocument ? p.asKey(this.endDocument) : void 0
                }
            }
            class v {
                constructor(e, t, n) {
                    const s = e.clientOptions.diagnosticPullOptions ? ? {
                            onChange: !0,
                            onSave: !1
                        },
                        a = e.protocol2CodeConverter.asDocumentSelector(n.documentSelector),
                        c = [],
                        u = e => e instanceof r.Uri ? (e => {
                            const t = n.documentSelector;
                            if (void 0 !== s.match) return s.match(t, e);
                            for (const n of t)
                                if (o.TextDocumentFilter.is(n)) {
                                    if ("string" == typeof n) return !1;
                                    if (void 0 !== n.language && "*" !== n.language) return !1;
                                    if (void 0 !== n.scheme && "*" !== n.scheme && n.scheme !== e.scheme) return !1;
                                    if (void 0 !== n.pattern) {
                                        const t = new i.Minimatch(n.pattern, {
                                            noext: !0
                                        });
                                        if (!t.makeRe()) return !1;
                                        if (!t.match(e.fsPath)) return !1
                                    }
                                }
                            return !0
                        })(e) : r.languages.match(a, e) > 0 && t.isVisible(e),
                        d = e => e instanceof r.Uri ? this.activeTextDocument ? .uri.toString() === e.toString() : this.activeTextDocument === e;
                    this.diagnosticRequestor = new f(e, t, n), this.backgroundScheduler = new y(this.diagnosticRequestor);
                    const p = e => {
                        u(e) && n.interFileDependencies && !d(e) && this.backgroundScheduler.add(e)
                    };
                    this.activeTextDocument = r.window.activeTextEditor ? .document, r.window.onDidChangeActiveTextEditor((e => {
                        const t = this.activeTextDocument;
                        this.activeTextDocument = e ? .document, void 0 !== t && p(t), void 0 !== this.activeTextDocument && this.backgroundScheduler.remove(this.activeTextDocument)
                    }));
                    const g = e.getFeature(o.DidOpenTextDocumentNotification.method);
                    c.push(g.onNotificationSent((e => {
                        const t = e.textDocument;
                        this.diagnosticRequestor.knows(h.document, t) || u(t) && this.diagnosticRequestor.pull(t, (() => {
                            p(t)
                        }))
                    }))), c.push(t.onOpen((e => {
                        for (const t of e) {
                            if (this.diagnosticRequestor.knows(h.document, t)) continue;
                            const e = t.toString();
                            let n;
                            for (const t of r.workspace.textDocuments)
                                if (e === t.uri.toString()) {
                                    n = t;
                                    break
                                }
                            void 0 !== n && u(n) && this.diagnosticRequestor.pull(n, (() => {
                                p(n)
                            }))
                        }
                    })));
                    const m = new Set;
                    for (const e of r.workspace.textDocuments) u(e) && (this.diagnosticRequestor.pull(e, (() => {
                        p(e)
                    })), m.add(e.uri.toString()));
                    if (!0 === s.onTabs)
                        for (const e of t.getTabResources()) !m.has(e.toString()) && u(e) && this.diagnosticRequestor.pull(e, (() => {
                            p(e)
                        }));
                    if (!0 === s.onChange) {
                        const t = e.getFeature(o.DidChangeTextDocumentNotification.method);
                        c.push(t.onNotificationSent((async e => {
                            const t = e.textDocument;
                            void 0 !== s.filter && s.filter(t, l.onType) || !this.diagnosticRequestor.knows(h.document, t) || this.diagnosticRequestor.pull(t, (() => {
                                this.backgroundScheduler.trigger()
                            }))
                        })))
                    }
                    if (!0 === s.onSave) {
                        const t = e.getFeature(o.DidSaveTextDocumentNotification.method);
                        c.push(t.onNotificationSent((e => {
                            const t = e.textDocument;
                            void 0 !== s.filter && s.filter(t, l.onSave) || !this.diagnosticRequestor.knows(h.document, t) || this.diagnosticRequestor.pull(e.textDocument, (() => {
                                this.backgroundScheduler.trigger()
                            }))
                        })))
                    }
                    const v = e.getFeature(o.DidCloseTextDocumentNotification.method);
                    c.push(v.onNotificationSent((e => {
                        this.cleanUpDocument(e.textDocument)
                    }))), t.onClose((e => {
                        for (const t of e) this.cleanUpDocument(t)
                    })), this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event((() => {
                        for (const e of r.workspace.textDocuments) u(e) && this.diagnosticRequestor.pull(e)
                    })), !0 === n.workspaceDiagnostics && "da348dc5-c30a-4515-9d98-31ff3be38d14" !== n.identifier && this.diagnosticRequestor.pullWorkspace(), this.disposable = r.Disposable.from(...c, this.backgroundScheduler, this.diagnosticRequestor)
                }
                get onDidChangeDiagnosticsEmitter() {
                    return this.diagnosticRequestor.onDidChangeDiagnosticsEmitter
                }
                get diagnostics() {
                    return this.diagnosticRequestor.provider
                }
                cleanUpDocument(e) {
                    this.diagnosticRequestor.knows(h.document, e) && (this.diagnosticRequestor.forgetDocument(e), this.backgroundScheduler.remove(e))
                }
            }
            class C extends a.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, o.DocumentDiagnosticRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = c(c(e, "textDocument"), "diagnostic");
                    t.dynamicRegistration = !0, t.relatedDocumentSupport = !1, c(c(e, "workspace"), "diagnostics").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(o.DiagnosticRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeDiagnosticsEmitter.fire()
                    }));
                    let [n, i] = this.getRegistration(t, e.diagnosticProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                clear() {
                    void 0 !== this.tabs && (this.tabs.dispose(), this.tabs = void 0), super.clear()
                }
                registerLanguageProvider(e) {
                    void 0 === this.tabs && (this.tabs = new g);
                    const t = new v(this._client, this.tabs, e);
                    return [t.disposable, t]
                }
            }
            t.DiagnosticFeature = C
        },
        "08tp": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DocumentHighlightFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentHighlightRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "documentHighlight").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentHighlightProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDocumentHighlights: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.DocumentHighlightRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asDocumentHighlights(e, n)), (e => i.handleFailedRequest(r.DocumentHighlightRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideDocumentHighlights ? s.provideDocumentHighlights(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [i.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.DocumentHighlightFeature = a
        },
        tLdd: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DocumentLinkFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentLinkRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "documentLink");
                    t.dynamicRegistration = !0, t.tooltipSupport = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentLinkProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDocumentLinks: (e, t) => {
                                const n = this._client,
                                    i = (e, t) => n.sendRequest(r.DocumentLinkRequest.type, n.code2ProtocolConverter.asDocumentLinkParams(e), t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asDocumentLinks(e, t)), (e => n.handleFailedRequest(r.DocumentLinkRequest.type, t, e, null))),
                                    o = n.middleware;
                                return o.provideDocumentLinks ? o.provideDocumentLinks(e, t, i) : i(e, t)
                            },
                            resolveDocumentLink: e.resolveProvider ? (e, t) => {
                                const n = this._client;
                                let i = (e, t) => n.sendRequest(r.DocumentLinkResolveRequest.type, n.code2ProtocolConverter.asDocumentLink(e), t).then((i => t.isCancellationRequested ? e : n.protocol2CodeConverter.asDocumentLink(i)), (i => n.handleFailedRequest(r.DocumentLinkResolveRequest.type, t, i, e)));
                                const o = n.middleware;
                                return o.resolveDocumentLink ? o.resolveDocumentLink(e, t, i) : i(e, t)
                            } : void 0
                        };
                    return [i.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.DocumentLinkFeature = a
        },
        WDb7: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DocumentSymbolFeature = t.SupportedSymbolTags = t.SupportedSymbolKinds = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            t.SupportedSymbolKinds = [r.SymbolKind.File, r.SymbolKind.Module, r.SymbolKind.Namespace, r.SymbolKind.Package, r.SymbolKind.Class, r.SymbolKind.Method, r.SymbolKind.Property, r.SymbolKind.Field, r.SymbolKind.Constructor, r.SymbolKind.Enum, r.SymbolKind.Interface, r.SymbolKind.Function, r.SymbolKind.Variable, r.SymbolKind.Constant, r.SymbolKind.String, r.SymbolKind.Number, r.SymbolKind.Boolean, r.SymbolKind.Array, r.SymbolKind.Object, r.SymbolKind.Key, r.SymbolKind.Null, r.SymbolKind.EnumMember, r.SymbolKind.Struct, r.SymbolKind.Event, r.SymbolKind.Operator, r.SymbolKind.TypeParameter], t.SupportedSymbolTags = [r.SymbolTag.Deprecated];
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentSymbolRequest.type)
                }
                fillClientCapabilities(e) {
                    let n = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "documentSymbol");
                    n.dynamicRegistration = !0, n.symbolKind = {
                        valueSet: t.SupportedSymbolKinds
                    }, n.hierarchicalDocumentSymbolSupport = !0, n.tagSupport = {
                        valueSet: t.SupportedSymbolTags
                    }, n.labelSupport = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentSymbolProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDocumentSymbols: (e, t) => {
                                const n = this._client,
                                    i = async (e, t) => {
                                        try {
                                            const i = await n.sendRequest(r.DocumentSymbolRequest.type, n.code2ProtocolConverter.asDocumentSymbolParams(e), t);
                                            if (t.isCancellationRequested || null == i) return null;
                                            if (0 === i.length) return []; {
                                                const e = i[0];
                                                return r.DocumentSymbol.is(e) ? await n.protocol2CodeConverter.asDocumentSymbols(i, t) : await n.protocol2CodeConverter.asSymbolInformations(i, t)
                                            }
                                        } catch (e) {
                                            return n.handleFailedRequest(r.DocumentSymbolRequest.type, t, e, null)
                                        }
                                    },
                                    o = n.middleware;
                                return o.provideDocumentSymbols ? o.provideDocumentSymbols(e, t, i) : i(e, t)
                            }
                        },
                        o = void 0 !== e.label ? {
                            label: e.label
                        } : void 0;
                    return [i.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n, o), n]
                }
            }
            t.DocumentSymbolFeature = a
        },
        iNUr: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExecuteCommandFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("l2C0"),
                s = n("MFH3");
            t.ExecuteCommandFeature = class {
                constructor(e) {
                    this._client = e, this._commands = new Map
                }
                getState() {
                    return {
                        kind: "workspace",
                        id: this.registrationType.method,
                        registrations: this._commands.size > 0
                    }
                }
                get registrationType() {
                    return r.ExecuteCommandRequest.type
                }
                fillClientCapabilities(e) {
                    (0, s.ensure)((0, s.ensure)(e, "workspace"), "executeCommand").dynamicRegistration = !0
                }
                initialize(e) {
                    e.executeCommandProvider && this.register({
                        id: o.generateUuid(),
                        registerOptions: Object.assign({}, e.executeCommandProvider)
                    })
                }
                register(e) {
                    const t = this._client,
                        n = t.middleware,
                        o = (e, n) => {
                            let i = {
                                command: e,
                                arguments: n
                            };
                            return t.sendRequest(r.ExecuteCommandRequest.type, i).then(void 0, (e => t.handleFailedRequest(r.ExecuteCommandRequest.type, void 0, e, void 0)))
                        };
                    if (e.registerOptions.commands) {
                        const t = [];
                        for (const r of e.registerOptions.commands) t.push(i.commands.registerCommand(r, ((...e) => n.executeCommand ? n.executeCommand(r, e, o) : o(r, e))));
                        this._commands.set(e.id, t)
                    }
                }
                unregister(e) {
                    let t = this._commands.get(e);
                    t && t.forEach((e => e.dispose()))
                }
                clear() {
                    this._commands.forEach((e => {
                        e.forEach((e => e.dispose()))
                    })), this._commands.clear()
                }
            }
        },
        MFH3: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkspaceFeature = t.TextDocumentLanguageFeature = t.TextDocumentEventFeature = t.DynamicDocumentFeature = t.DynamicFeature = t.StaticFeature = t.ensure = t.LSPCancellationError = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("wjb4"),
                s = n("l2C0");
            class a extends i.CancellationError {
                constructor(e) {
                    super(), this.data = e
                }
            }
            var c, u;
            t.LSPCancellationError = a, t.ensure = function(e, t) {
                    return void 0 === e[t] && (e[t] = {}), e[t]
                },
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return null != t && o.func(t.fillClientCapabilities) && o.func(t.initialize) && o.func(t.getState) && o.func(t.clear) && (void 0 === t.fillInitializeParams || o.func(t.fillInitializeParams))
                    }
                }(c || (t.StaticFeature = c = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return null != t && o.func(t.fillClientCapabilities) && o.func(t.initialize) && o.func(t.getState) && o.func(t.clear) && (void 0 === t.fillInitializeParams || o.func(t.fillInitializeParams)) && o.func(t.register) && o.func(t.unregister) && void 0 !== t.registrationType
                    }
                }(u || (t.DynamicFeature = u = {}));
            class l {
                constructor(e) {
                    this._client = e
                }
                getState() {
                    const e = this.getDocumentSelectors();
                    let t = 0;
                    for (const n of e) {
                        t++;
                        for (const e of i.workspace.textDocuments)
                            if (i.languages.match(n, e) > 0) return {
                                kind: "document",
                                id: this.registrationType.method,
                                registrations: !0,
                                matches: !0
                            }
                    }
                    const n = t > 0;
                    return {
                        kind: "document",
                        id: this.registrationType.method,
                        registrations: n,
                        matches: !1
                    }
                }
            }
            t.DynamicDocumentFeature = l, t.TextDocumentEventFeature = class extends l {
                static textDocumentFilter(e, t) {
                    for (const n of e)
                        if (i.languages.match(n, t) > 0) return !0;
                    return !1
                }
                constructor(e, t, n, r, o, s, a) {
                    super(e), this._event = t, this._type = n, this._middleware = r, this._createParams = o, this._textDocument = s, this._selectorFilter = a, this._selectors = new Map, this._onNotificationSent = new i.EventEmitter
                }
                getStateInfo() {
                    return [this._selectors.values(), !1]
                }
                getDocumentSelectors() {
                    return this._selectors.values()
                }
                register(e) {
                    e.registerOptions.documentSelector && (this._listener || (this._listener = this._event((e => {
                        this.callback(e).catch((e => {
                            this._client.error(`Sending document notification ${this._type.method} failed.`, e)
                        }))
                    }))), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)))
                }
                async callback(e) {
                    const t = async e => {
                        const t = this._createParams(e);
                        await this._client.sendNotification(this._type, t), this.notificationSent(this.getTextDocument(e), this._type, t)
                    };
                    if (this.matches(e)) {
                        const n = this._middleware();
                        return n ? n(e, (e => t(e))) : t(e)
                    }
                }
                matches(e) {
                    return !this._client.hasDedicatedTextSynchronizationFeature(this._textDocument(e)) && (!this._selectorFilter || this._selectorFilter(this._selectors.values(), e))
                }
                get onNotificationSent() {
                    return this._onNotificationSent.event
                }
                notificationSent(e, t, n) {
                    this._onNotificationSent.fire({
                        textDocument: e,
                        type: t,
                        params: n
                    })
                }
                unregister(e) {
                    this._selectors.delete(e), 0 === this._selectors.size && this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                clear() {
                    this._selectors.clear(), this._onNotificationSent.dispose(), this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                getProvider(e) {
                    for (const t of this._selectors.values())
                        if (i.languages.match(t, e) > 0) return {
                            send: e => this.callback(e)
                        }
                }
            }, t.TextDocumentLanguageFeature = class extends l {
                constructor(e, t) {
                    super(e), this._registrationType = t, this._registrations = new Map
                }* getDocumentSelectors() {
                    for (const e of this._registrations.values()) {
                        const t = e.data.registerOptions.documentSelector;
                        null !== t && (yield this._client.protocol2CodeConverter.asDocumentSelector(t))
                    }
                }
                get registrationType() {
                    return this._registrationType
                }
                register(e) {
                    if (!e.registerOptions.documentSelector) return;
                    let t = this.registerLanguageProvider(e.registerOptions, e.id);
                    this._registrations.set(e.id, {
                        disposable: t[0],
                        data: e,
                        provider: t[1]
                    })
                }
                unregister(e) {
                    let t = this._registrations.get(e);
                    void 0 !== t && t.disposable.dispose()
                }
                clear() {
                    this._registrations.forEach((e => {
                        e.disposable.dispose()
                    })), this._registrations.clear()
                }
                getRegistration(e, t) {
                    if (!t) return [void 0, void 0];
                    if (r.TextDocumentRegistrationOptions.is(t)) {
                        const n = r.StaticRegistrationOptions.hasId(t) ? t.id : s.generateUuid(),
                            i = t.documentSelector ? ? e;
                        if (i) return [n, Object.assign({}, t, {
                            documentSelector: i
                        })]
                    } else if (o.boolean(t) && !0 === t || r.WorkDoneProgressOptions.is(t)) {
                        if (!e) return [void 0, void 0];
                        const n = o.boolean(t) && !0 === t ? {
                            documentSelector: e
                        } : Object.assign({}, t, {
                            documentSelector: e
                        });
                        return [s.generateUuid(), n]
                    }
                    return [void 0, void 0]
                }
                getRegistrationOptions(e, t) {
                    if (e && t) return o.boolean(t) && !0 === t ? {
                        documentSelector: e
                    } : Object.assign({}, t, {
                        documentSelector: e
                    })
                }
                getProvider(e) {
                    for (const t of this._registrations.values()) {
                        let n = t.data.registerOptions.documentSelector;
                        if (null !== n && i.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(n), e) > 0) return t.provider
                    }
                }
                getAllProviders() {
                    const e = [];
                    for (const t of this._registrations.values()) e.push(t.provider);
                    return e
                }
            }, t.WorkspaceFeature = class {
                constructor(e, t) {
                    this._client = e, this._registrationType = t, this._registrations = new Map
                }
                getState() {
                    const e = this._registrations.size > 0;
                    return {
                        kind: "workspace",
                        id: this._registrationType.method,
                        registrations: e
                    }
                }
                get registrationType() {
                    return this._registrationType
                }
                register(e) {
                    const t = this.registerLanguageProvider(e.registerOptions);
                    this._registrations.set(e.id, {
                        disposable: t[0],
                        provider: t[1]
                    })
                }
                unregister(e) {
                    let t = this._registrations.get(e);
                    void 0 !== t && t.disposable.dispose()
                }
                clear() {
                    this._registrations.forEach((e => {
                        e.disposable.dispose()
                    })), this._registrations.clear()
                }
                getProviders() {
                    const e = [];
                    for (const t of this._registrations.values()) e.push(t.provider);
                    return e
                }
            }
        },
        "3rpL": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WillDeleteFilesFeature = t.WillRenameFilesFeature = t.WillCreateFilesFeature = t.DidDeleteFilesFeature = t.DidRenameFilesFeature = t.DidCreateFilesFeature = void 0;
            const i = n("Ja5U"),
                r = n("7khD"),
                o = n("fozD"),
                s = n("l2C0");

            function a(e, t) {
                return void 0 === e[t] && (e[t] = {}), e[t]
            }

            function c(e, t, n) {
                e[t] = n
            }
            class u {
                constructor(e, t, n, i, r) {
                    this._client = e, this._event = t, this._registrationType = n, this._clientCapability = i, this._serverCapability = r, this._filters = new Map
                }
                getState() {
                    return {
                        kind: "workspace",
                        id: this._registrationType.method,
                        registrations: this._filters.size > 0
                    }
                }
                filterSize() {
                    return this._filters.size
                }
                get registrationType() {
                    return this._registrationType
                }
                fillClientCapabilities(e) {
                    const t = a(a(e, "workspace"), "fileOperations");
                    c(t, "dynamicRegistration", !0), c(t, this._clientCapability, !0)
                }
                initialize(e) {
                    const t = e.workspace ? .fileOperations,
                        n = void 0 !== t ? t[this._serverCapability] : void 0;
                    if (void 0 !== n ? .filters) try {
                        this.register({
                            id: s.generateUuid(),
                            registerOptions: {
                                filters: n.filters
                            }
                        })
                    } catch (e) {
                        this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${e}`)
                    }
                }
                register(e) {
                    this._listener || (this._listener = this._event(this.send, this));
                    const t = e.registerOptions.filters.map((e => {
                        const t = new r.Minimatch(e.pattern.glob, u.asMinimatchOptions(e.pattern.options));
                        if (!t.makeRe()) throw new Error(`Invalid pattern ${e.pattern.glob}!`);
                        return {
                            scheme: e.scheme,
                            matcher: t,
                            kind: e.pattern.matches
                        }
                    }));
                    this._filters.set(e.id, t)
                }
                unregister(e) {
                    this._filters.delete(e), 0 === this._filters.size && this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                clear() {
                    this._filters.clear(), this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                getFileType(e) {
                    return u.getFileType(e)
                }
                async filter(e, t) {
                    const n = await Promise.all(e.files.map((async e => {
                            const n = t(e),
                                r = n.fsPath.replace(/\\/g, "/");
                            for (const e of this._filters.values())
                                for (const t of e)
                                    if (void 0 === t.scheme || t.scheme === n.scheme)
                                        if (t.matcher.match(r)) {
                                            if (void 0 === t.kind) return !0;
                                            const e = await this.getFileType(n);
                                            if (void 0 === e) return this._client.error(`Failed to determine file type for ${n.toString()}.`), !0;
                                            if (e === i.FileType.File && t.kind === o.FileOperationPatternKind.file || e === i.FileType.Directory && t.kind === o.FileOperationPatternKind.folder) return !0
                                        } else if (t.kind === o.FileOperationPatternKind.folder && await u.getFileType(n) === i.FileType.Directory && t.matcher.match(`${r}/`)) return !0;
                            return !1
                        }))),
                        r = e.files.filter(((e, t) => n[t]));
                    return { ...e,
                        files: r
                    }
                }
                static async getFileType(e) {
                    try {
                        return (await i.workspace.fs.stat(e)).type
                    } catch (e) {
                        return
                    }
                }
                static asMinimatchOptions(e) {
                    const t = {
                        dot: !0
                    };
                    return !0 === e ? .ignoreCase && (t.nocase = !0), t
                }
            }
            class l extends u {
                constructor(e, t, n, i, r, o, s) {
                    super(e, t, n, i, r), this._notificationType = n, this._accessUri = o, this._createParams = s
                }
                async send(e) {
                    const t = await this.filter(e, this._accessUri);
                    if (t.files.length) {
                        const e = async e => this._client.sendNotification(this._notificationType, this._createParams(e));
                        return this.doSend(t, e)
                    }
                }
            }
            class d extends l {
                constructor() {
                    super(...arguments), this._fsPathFileTypes = new Map
                }
                async getFileType(e) {
                    const t = e.fsPath;
                    if (this._fsPathFileTypes.has(t)) return this._fsPathFileTypes.get(t);
                    const n = await u.getFileType(e);
                    return n && this._fsPathFileTypes.set(t, n), n
                }
                async cacheFileTypes(e, t) {
                    await this.filter(e, t)
                }
                clearFileTypeCache() {
                    this._fsPathFileTypes.clear()
                }
                unregister(e) {
                    super.unregister(e), 0 === this.filterSize() && this._willListener && (this._willListener.dispose(), this._willListener = void 0)
                }
                clear() {
                    super.clear(), this._willListener && (this._willListener.dispose(), this._willListener = void 0)
                }
            }
            t.DidCreateFilesFeature = class extends l {
                constructor(e) {
                    super(e, i.workspace.onDidCreateFiles, o.DidCreateFilesNotification.type, "didCreate", "didCreate", (e => e), e.code2ProtocolConverter.asDidCreateFilesParams)
                }
                doSend(e, t) {
                    const n = this._client.middleware.workspace;
                    return n ? .didCreateFiles ? n.didCreateFiles(e, t) : t(e)
                }
            }, t.DidRenameFilesFeature = class extends d {
                constructor(e) {
                    super(e, i.workspace.onDidRenameFiles, o.DidRenameFilesNotification.type, "didRename", "didRename", (e => e.oldUri), e.code2ProtocolConverter.asDidRenameFilesParams)
                }
                register(e) {
                    this._willListener || (this._willListener = i.workspace.onWillRenameFiles(this.willRename, this)), super.register(e)
                }
                willRename(e) {
                    e.waitUntil(this.cacheFileTypes(e, (e => e.oldUri)))
                }
                doSend(e, t) {
                    this.clearFileTypeCache();
                    const n = this._client.middleware.workspace;
                    return n ? .didRenameFiles ? n.didRenameFiles(e, t) : t(e)
                }
            }, t.DidDeleteFilesFeature = class extends d {
                constructor(e) {
                    super(e, i.workspace.onDidDeleteFiles, o.DidDeleteFilesNotification.type, "didDelete", "didDelete", (e => e), e.code2ProtocolConverter.asDidDeleteFilesParams)
                }
                register(e) {
                    this._willListener || (this._willListener = i.workspace.onWillDeleteFiles(this.willDelete, this)), super.register(e)
                }
                willDelete(e) {
                    e.waitUntil(this.cacheFileTypes(e, (e => e)))
                }
                doSend(e, t) {
                    this.clearFileTypeCache();
                    const n = this._client.middleware.workspace;
                    return n ? .didDeleteFiles ? n.didDeleteFiles(e, t) : t(e)
                }
            };
            class h extends u {
                constructor(e, t, n, i, r, o, s) {
                    super(e, t, n, i, r), this._requestType = n, this._accessUri = o, this._createParams = s
                }
                async send(e) {
                    const t = this.waitUntil(e);
                    e.waitUntil(t)
                }
                async waitUntil(e) {
                    const t = await this.filter(e, this._accessUri);
                    if (t.files.length) {
                        const e = e => this._client.sendRequest(this._requestType, this._createParams(e), e.token).then(this._client.protocol2CodeConverter.asWorkspaceEdit);
                        return this.doSend(t, e)
                    }
                }
            }
            t.WillCreateFilesFeature = class extends h {
                constructor(e) {
                    super(e, i.workspace.onWillCreateFiles, o.WillCreateFilesRequest.type, "willCreate", "willCreate", (e => e), e.code2ProtocolConverter.asWillCreateFilesParams)
                }
                doSend(e, t) {
                    const n = this._client.middleware.workspace;
                    return n ? .willCreateFiles ? n.willCreateFiles(e, t) : t(e)
                }
            }, t.WillRenameFilesFeature = class extends h {
                constructor(e) {
                    super(e, i.workspace.onWillRenameFiles, o.WillRenameFilesRequest.type, "willRename", "willRename", (e => e.oldUri), e.code2ProtocolConverter.asWillRenameFilesParams)
                }
                doSend(e, t) {
                    const n = this._client.middleware.workspace;
                    return n ? .willRenameFiles ? n.willRenameFiles(e, t) : t(e)
                }
            }, t.WillDeleteFilesFeature = class extends h {
                constructor(e) {
                    super(e, i.workspace.onWillDeleteFiles, o.WillDeleteFilesRequest.type, "willDelete", "willDelete", (e => e), e.code2ProtocolConverter.asWillDeleteFilesParams)
                }
                doSend(e, t) {
                    const n = this._client.middleware.workspace;
                    return n ? .willDeleteFiles ? n.willDeleteFiles(e, t) : t(e)
                }
            }
        },
        MCh5: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileSystemWatcherFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            t.FileSystemWatcherFeature = class {
                constructor(e, t) {
                    this._client = e, this._notifyFileEvent = t, this._watchers = new Map
                }
                getState() {
                    return {
                        kind: "workspace",
                        id: this.registrationType.method,
                        registrations: this._watchers.size > 0
                    }
                }
                get registrationType() {
                    return r.DidChangeWatchedFilesNotification.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "workspace"), "didChangeWatchedFiles").dynamicRegistration = !0, (0, o.ensure)((0, o.ensure)(e, "workspace"), "didChangeWatchedFiles").relativePatternSupport = !0
                }
                initialize(e, t) {}
                register(e) {
                    if (!Array.isArray(e.registerOptions.watchers)) return;
                    const t = [];
                    for (const n of e.registerOptions.watchers) {
                        const e = this._client.protocol2CodeConverter.asGlobPattern(n.globPattern);
                        if (void 0 === e) continue;
                        let o = !0,
                            s = !0,
                            a = !0;
                        void 0 !== n.kind && null !== n.kind && (o = 0 != (n.kind & r.WatchKind.Create), s = 0 != (n.kind & r.WatchKind.Change), a = 0 != (n.kind & r.WatchKind.Delete));
                        const c = i.workspace.createFileSystemWatcher(e, !o, !s, !a);
                        this.hookListeners(c, o, s, a, t), t.push(c)
                    }
                    this._watchers.set(e.id, t)
                }
                registerRaw(e, t) {
                    let n = [];
                    for (let e of t) this.hookListeners(e, !0, !0, !0, n);
                    this._watchers.set(e, n)
                }
                hookListeners(e, t, n, i, o) {
                    t && e.onDidCreate((e => this._notifyFileEvent({
                        uri: this._client.code2ProtocolConverter.asUri(e),
                        type: r.FileChangeType.Created
                    })), null, o), n && e.onDidChange((e => this._notifyFileEvent({
                        uri: this._client.code2ProtocolConverter.asUri(e),
                        type: r.FileChangeType.Changed
                    })), null, o), i && e.onDidDelete((e => this._notifyFileEvent({
                        uri: this._client.code2ProtocolConverter.asUri(e),
                        type: r.FileChangeType.Deleted
                    })), null, o)
                }
                unregister(e) {
                    let t = this._watchers.get(e);
                    if (t)
                        for (let e of t) e.dispose()
                }
                clear() {
                    this._watchers.forEach((e => {
                        for (let t of e) t.dispose()
                    })), this._watchers.clear()
                }
            }
        },
        RWSK: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FoldingRangeFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.FoldingRangeRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "foldingRange");
                    t.dynamicRegistration = !0, t.rangeLimit = 5e3, t.lineFoldingOnly = !0, t.foldingRangeKind = {
                        valueSet: [r.FoldingRangeKind.Comment, r.FoldingRangeKind.Imports, r.FoldingRangeKind.Region]
                    }, t.foldingRange = {
                        collapsedText: !1
                    }, (0, o.ensure)((0, o.ensure)(e, "workspace"), "foldingRange").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(r.FoldingRangeRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeFoldingRange.fire()
                    }));
                    let [n, i] = this.getRegistration(t, e.foldingRangeProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = new i.EventEmitter,
                        o = {
                            onDidChangeFoldingRanges: n.event,
                            provideFoldingRanges: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e)
                                        };
                                        return i.sendRequest(r.FoldingRangeRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asFoldingRanges(e, n)), (e => i.handleFailedRequest(r.FoldingRangeRequest.type, n, e, null)))
                                    },
                                    s = i.middleware;
                                return s.provideFoldingRanges ? s.provideFoldingRanges(e, t, n, o) : o(e, 0, n)
                            }
                        };
                    return [i.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), o), {
                        provider: o,
                        onDidChangeFoldingRange: n
                    }]
                }
            }
            t.FoldingRangeFeature = s
        },
        aUnd: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DocumentOnTypeFormattingFeature = t.DocumentRangeFormattingFeature = t.DocumentFormattingFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("l2C0"),
                s = n("MFH3");
            var a;
            ! function(e) {
                e.fromConfiguration = function(e) {
                    const t = i.workspace.getConfiguration("files", e);
                    return {
                        trimTrailingWhitespace: t.get("trimTrailingWhitespace"),
                        trimFinalNewlines: t.get("trimFinalNewlines"),
                        insertFinalNewline: t.get("insertFinalNewline")
                    }
                }
            }(a || (a = {}));
            class c extends s.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentFormattingRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, s.ensure)((0, s.ensure)(e, "textDocument"), "formatting").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentFormattingProvider);
                    n && this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDocumentFormattingEdits: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            options: i.code2ProtocolConverter.asFormattingOptions(t, a.fromConfiguration(e))
                                        };
                                        return i.sendRequest(r.DocumentFormattingRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asTextEdits(e, n)), (e => i.handleFailedRequest(r.DocumentFormattingRequest.type, n, e, null)))
                                    },
                                    s = i.middleware;
                                return s.provideDocumentFormattingEdits ? s.provideDocumentFormattingEdits(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [i.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.DocumentFormattingFeature = c;
            class u extends s.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentRangeFormattingRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, s.ensure)((0, s.ensure)(e, "textDocument"), "rangeFormatting");
                    t.dynamicRegistration = !0, t.rangesSupport = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentRangeFormattingProvider);
                    n && this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideDocumentRangeFormattingEdits: (e, t, n, i) => {
                                const o = this._client,
                                    s = (e, t, n, i) => {
                                        const s = {
                                            textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            range: o.code2ProtocolConverter.asRange(t),
                                            options: o.code2ProtocolConverter.asFormattingOptions(n, a.fromConfiguration(e))
                                        };
                                        return o.sendRequest(r.DocumentRangeFormattingRequest.type, s, i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asTextEdits(e, i)), (e => o.handleFailedRequest(r.DocumentRangeFormattingRequest.type, i, e, null)))
                                    },
                                    c = o.middleware;
                                return c.provideDocumentRangeFormattingEdits ? c.provideDocumentRangeFormattingEdits(e, t, n, i, s) : s(e, t, n, i)
                            }
                        };
                    return e.rangesSupport && (n.provideDocumentRangesFormattingEdits = (e, t, n, i) => {
                        const o = this._client,
                            s = (e, t, n, i) => {
                                const s = {
                                    textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                    ranges: o.code2ProtocolConverter.asRanges(t),
                                    options: o.code2ProtocolConverter.asFormattingOptions(n, a.fromConfiguration(e))
                                };
                                return o.sendRequest(r.DocumentRangesFormattingRequest.type, s, i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asTextEdits(e, i)), (e => o.handleFailedRequest(r.DocumentRangesFormattingRequest.type, i, e, null)))
                            },
                            c = o.middleware;
                        return c.provideDocumentRangesFormattingEdits ? c.provideDocumentRangesFormattingEdits(e, t, n, i, s) : s(e, t, n, i)
                    }), [i.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.DocumentRangeFormattingFeature = u;
            class l extends s.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.DocumentOnTypeFormattingRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, s.ensure)((0, s.ensure)(e, "textDocument"), "onTypeFormatting").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.documentOnTypeFormattingProvider);
                    n && this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideOnTypeFormattingEdits: (e, t, n, i, o) => {
                                const s = this._client,
                                    c = (e, t, n, i, o) => {
                                        let c = {
                                            textDocument: s.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            position: s.code2ProtocolConverter.asPosition(t),
                                            ch: n,
                                            options: s.code2ProtocolConverter.asFormattingOptions(i, a.fromConfiguration(e))
                                        };
                                        return s.sendRequest(r.DocumentOnTypeFormattingRequest.type, c, o).then((e => o.isCancellationRequested ? null : s.protocol2CodeConverter.asTextEdits(e, o)), (e => s.handleFailedRequest(r.DocumentOnTypeFormattingRequest.type, o, e, null)))
                                    },
                                    u = s.middleware;
                                return u.provideOnTypeFormattingEdits ? u.provideOnTypeFormattingEdits(e, t, n, i, o, c) : c(e, t, n, i, o)
                            }
                        },
                        o = e.moreTriggerCharacter || [];
                    return [i.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n, e.firstTriggerCharacter, ...o), n]
                }
            }
            t.DocumentOnTypeFormattingFeature = l
        },
        JZSJ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HoverFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.HoverRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "hover");
                    t.dynamicRegistration = !0, t.contentFormat = [r.MarkupKind.Markdown, r.MarkupKind.PlainText]
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.hoverProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideHover: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.HoverRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asHover(e)), (e => i.handleFailedRequest(r.HoverRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideHover ? s.provideHover(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.HoverFeature = a
        },
        "oHS/": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImplementationFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.ImplementationRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "implementation");
                    t.dynamicRegistration = !0, t.linkSupport = !0
                }
                initialize(e, t) {
                    let [n, i] = this.getRegistration(t, e.implementationProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideImplementation: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.ImplementationRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asDefinitionResult(e, n)), (e => i.handleFailedRequest(r.ImplementationRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideImplementation ? s.provideImplementation(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.ImplementationFeature = s
        },
        OQvZ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlayHintsFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.InlayHintRequest.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "inlayHint");
                    t.dynamicRegistration = !0, t.resolveSupport = {
                        properties: ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"]
                    }, (0, o.ensure)((0, o.ensure)(e, "workspace"), "inlayHint").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(r.InlayHintRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeInlayHints.fire()
                    }));
                    const [n, i] = this.getRegistration(t, e.inlayHintProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = new i.EventEmitter,
                        o = {
                            onDidChangeInlayHints: n.event,
                            provideInlayHints: (e, t, n) => {
                                const i = this._client,
                                    o = async (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            range: i.code2ProtocolConverter.asRange(t)
                                        };
                                        try {
                                            const e = await i.sendRequest(r.InlayHintRequest.type, o, n);
                                            return n.isCancellationRequested ? null : i.protocol2CodeConverter.asInlayHints(e, n)
                                        } catch (e) {
                                            return i.handleFailedRequest(r.InlayHintRequest.type, n, e, null)
                                        }
                                    },
                                    s = i.middleware;
                                return s.provideInlayHints ? s.provideInlayHints(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return o.resolveInlayHint = !0 === e.resolveProvider ? (e, t) => {
                        const n = this._client,
                            i = async (e, t) => {
                                try {
                                    const i = await n.sendRequest(r.InlayHintResolveRequest.type, n.code2ProtocolConverter.asInlayHint(e), t);
                                    if (t.isCancellationRequested) return null;
                                    const o = n.protocol2CodeConverter.asInlayHint(i, t);
                                    return t.isCancellationRequested ? null : o
                                } catch (e) {
                                    return n.handleFailedRequest(r.InlayHintResolveRequest.type, t, e, null)
                                }
                            },
                            o = n.middleware;
                        return o.resolveInlayHint ? o.resolveInlayHint(e, t, i) : i(e, t)
                    } : void 0, [this.registerProvider(t, o), {
                        provider: o,
                        onDidChangeInlayHints: n
                    }]
                }
                registerProvider(e, t) {
                    return i.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.InlayHintsFeature = s
        },
        p1f7: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlineCompletionItemFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.InlineCompletionRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "inlineCompletion").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.inlineCompletionProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideInlineCompletionItems: (e, t, n, i) => {
                                const o = this._client,
                                    s = this._client.middleware,
                                    a = (e, t, n, i) => o.sendRequest(r.InlineCompletionRequest.type, o.code2ProtocolConverter.asInlineCompletionParams(e, t, n), i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asInlineCompletionResult(e, i)), (e => o.handleFailedRequest(r.InlineCompletionRequest.type, i, e, null)));
                                return s.provideInlineCompletionItems ? s.provideInlineCompletionItems(e, t, n, i, a) : a(e, t, n, i)
                            }
                        };
                    return [i.languages.registerInlineCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), n), n]
                }
            }
            t.InlineCompletionItemFeature = a
        },
        qH05: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlineValueFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.InlineValueRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "inlineValue").dynamicRegistration = !0, (0, o.ensure)((0, o.ensure)(e, "workspace"), "inlineValue").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(r.InlineValueRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeInlineValues.fire()
                    }));
                    const [n, i] = this.getRegistration(t, e.inlineValueProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = new i.EventEmitter,
                        o = {
                            onDidChangeInlineValues: n.event,
                            provideInlineValues: (e, t, n, i) => {
                                const o = this._client,
                                    s = (e, t, n, i) => {
                                        const s = {
                                            textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            range: o.code2ProtocolConverter.asRange(t),
                                            context: o.code2ProtocolConverter.asInlineValueContext(n)
                                        };
                                        return o.sendRequest(r.InlineValueRequest.type, s, i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asInlineValues(e, i)), (e => o.handleFailedRequest(r.InlineValueRequest.type, i, e, null)))
                                    },
                                    a = o.middleware;
                                return a.provideInlineValues ? a.provideInlineValues(e, t, n, i, s) : s(e, t, n, i)
                            }
                        };
                    return [this.registerProvider(t, o), {
                        provider: o,
                        onDidChangeInlineValues: n
                    }]
                }
                registerProvider(e, t) {
                    return i.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.InlineValueFeature = s
        },
        wQwv: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LinkedEditingFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.LinkedEditingRangeRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "linkedEditingRange").dynamicRegistration = !0
                }
                initialize(e, t) {
                    let [n, i] = this.getRegistration(t, e.linkedEditingRangeProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideLinkedEditingRanges: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.LinkedEditingRangeRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asLinkedEditingRanges(e, n)), (e => i.handleFailedRequest(r.LinkedEditingRangeRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideLinkedEditingRange ? s.provideLinkedEditingRange(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.LinkedEditingFeature = s
        },
        hb8V: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NotebookDocumentSyncFeature = void 0;
            const i = n("Ja5U"),
                r = n("7khD"),
                o = n("fozD"),
                s = n("l2C0"),
                a = n("wjb4");

            function c(e, t) {
                return void 0 === e[t] && (e[t] = {}), e[t]
            }
            var u, l, d, h, p;
            ! function(e) {
                let t;
                ! function(t) {
                    function n(e, t) {
                        return e.map((e => s(e, t)))
                    }

                    function r(e) {
                        return c(new Set, e)
                    }

                    function s(e, t) {
                        const n = o.NotebookCell.create(function(e) {
                            switch (e) {
                                case i.NotebookCellKind.Markup:
                                    return o.NotebookCellKind.Markup;
                                case i.NotebookCellKind.Code:
                                    return o.NotebookCellKind.Code
                            }
                        }(e.kind), t.asUri(e.document.uri));
                        return Object.keys(e.metadata).length > 0 && (n.metadata = r(e.metadata)), void 0 !== e.executionSummary && a.number(e.executionSummary.executionOrder) && a.boolean(e.executionSummary.success) && (n.executionSummary = {
                            executionOrder: e.executionSummary.executionOrder,
                            success: e.executionSummary.success
                        }), n
                    }

                    function c(e, t) {
                        if (e.has(t)) throw new Error("Can't deep copy cyclic structures.");
                        if (Array.isArray(t)) {
                            const n = [];
                            for (const i of t)
                                if (null !== i && "object" == typeof i || Array.isArray(i)) n.push(c(e, i));
                                else {
                                    if (i instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
                                    n.push(i)
                                }
                            return n
                        } {
                            const n = Object.keys(t),
                                i = Object.create(null);
                            for (const r of n) {
                                const n = t[r];
                                if (null !== n && "object" == typeof n || Array.isArray(n)) i[r] = c(e, n);
                                else {
                                    if (n instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
                                    i[r] = n
                                }
                            }
                            return i
                        }
                    }
                    t.asVersionedNotebookDocumentIdentifier = function(e, t) {
                        return {
                            version: e.version,
                            uri: t.asUri(e.uri)
                        }
                    }, t.asNotebookDocument = function(e, t, i) {
                        const s = o.NotebookDocument.create(i.asUri(e.uri), e.notebookType, e.version, n(t, i));
                        return Object.keys(e.metadata).length > 0 && (s.metadata = r(e.metadata)), s
                    }, t.asNotebookCells = n, t.asMetadata = r, t.asNotebookCell = s, t.asTextContentChange = function(e, t) {
                        const n = t.asChangeTextDocumentParams(e, e.document.uri, e.document.version);
                        return {
                            document: n.textDocument,
                            changes: n.contentChanges
                        }
                    }, t.asNotebookDocumentChangeEvent = function(t, n) {
                        const i = Object.create(null);
                        if (t.metadata && (i.metadata = e.c2p.asMetadata(t.metadata)), void 0 !== t.cells) {
                            const r = Object.create(null),
                                o = t.cells;
                            o.structure && (r.structure = {
                                array: {
                                    start: o.structure.array.start,
                                    deleteCount: o.structure.array.deleteCount,
                                    cells: void 0 !== o.structure.array.cells ? o.structure.array.cells.map((t => e.c2p.asNotebookCell(t, n))) : void 0
                                },
                                didOpen: void 0 !== o.structure.didOpen ? o.structure.didOpen.map((e => n.asOpenTextDocumentParams(e.document).textDocument)) : void 0,
                                didClose: void 0 !== o.structure.didClose ? o.structure.didClose.map((e => n.asCloseTextDocumentParams(e.document).textDocument)) : void 0
                            }), void 0 !== o.data && (r.data = o.data.map((t => e.c2p.asNotebookCell(t, n)))), void 0 !== o.textContent && (r.textContent = o.textContent.map((t => e.c2p.asTextContentChange(t, n)))), Object.keys(r).length > 0 && (i.cells = r)
                        }
                        return i
                    }
                }(t = e.c2p || (e.c2p = {}))
            }(u || (u = {})),
            function(e) {
                function t(e, t, i = !0) {
                    return !(e.kind !== t.kind || e.document.uri.toString() !== t.document.uri.toString() || e.document.languageId !== t.document.languageId || ! function(e, t) {
                        return e === t || void 0 !== e && void 0 !== t && (e.executionOrder === t.executionOrder && e.success === t.success && function(e, t) {
                            return e === t || void 0 !== e && void 0 !== t && (e.startTime === t.startTime && e.endTime === t.endTime)
                        }(e.timing, t.timing))
                    }(e.executionSummary, t.executionSummary)) && (!i || i && n(e.metadata, t.metadata))
                }

                function n(e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t) return !1;
                    if (typeof e != typeof t) return !1;
                    if ("object" != typeof e) return !1;
                    const r = Array.isArray(e),
                        o = Array.isArray(t);
                    if (r !== o) return !1;
                    if (r && o) {
                        if (e.length !== t.length) return !1;
                        for (let i = 0; i < e.length; i++)
                            if (!n(e[i], t[i])) return !1
                    }
                    if (i(e) && i(t)) {
                        const i = Object.keys(e),
                            r = Object.keys(t);
                        if (i.length !== r.length) return !1;
                        if (i.sort(), r.sort(), !n(i, r)) return !1;
                        for (let r = 0; r < i.length; r++) {
                            const o = i[r];
                            if (!n(e[o], t[o])) return !1
                        }
                        return !0
                    }
                    return !1
                }

                function i(e) {
                    return null !== e && "object" == typeof e
                }
                e.computeDiff = function(e, n, i) {
                    const r = e.length,
                        o = n.length;
                    let s = 0;
                    for (; s < o && s < r && t(e[s], n[s], i);) s++;
                    if (s < o && s < r) {
                        let a = r - 1,
                            c = o - 1;
                        for (; a >= 0 && c >= 0 && t(e[a], n[c], i);) a--, c--;
                        const u = a + 1 - s,
                            l = s === c + 1 ? void 0 : n.slice(s, c + 1);
                        return void 0 !== l ? {
                            start: s,
                            deleteCount: u,
                            cells: l
                        } : {
                            start: s,
                            deleteCount: u
                        }
                    }
                    return s < o ? {
                        start: s,
                        deleteCount: 0,
                        cells: n.slice(s)
                    } : s < r ? {
                        start: s,
                        deleteCount: r - s
                    } : void 0
                }, e.isObjectLiteral = i
            }(l || (l = {})),
            function(e) {
                e.matchNotebook = function(e, t) {
                    if ("string" == typeof e) return "*" === e || t.notebookType === e;
                    if (void 0 !== e.notebookType && "*" !== e.notebookType && t.notebookType !== e.notebookType) return !1;
                    const n = t.uri;
                    if (void 0 !== e.scheme && "*" !== e.scheme && n.scheme !== e.scheme) return !1;
                    if (void 0 !== e.pattern) {
                        const t = new r.Minimatch(e.pattern, {
                            noext: !0
                        });
                        if (!t.makeRe()) return !1;
                        if (!t.match(n.fsPath)) return !1
                    }
                    return !0
                }
            }(d || (d = {})),
            function(e) {
                function t(e, t, n, i) {
                    return void 0 === t && void 0 === n ? {
                        notebook: e,
                        language: i
                    } : {
                        notebook: {
                            notebookType: e,
                            scheme: t,
                            pattern: n
                        },
                        language: i
                    }
                }
                e.asDocumentSelector = function(e) {
                    const n = e.notebookSelector,
                        i = [];
                    for (const e of n) {
                        const n = ("string" == typeof e.notebook ? e.notebook : e.notebook ? .notebookType) ? ? "*",
                            r = "string" == typeof e.notebook ? void 0 : e.notebook ? .scheme,
                            o = "string" == typeof e.notebook ? void 0 : e.notebook ? .pattern;
                        if (void 0 !== e.cells)
                            for (const s of e.cells) i.push(t(n, r, o, s.language));
                        else i.push(t(n, r, o, void 0))
                    }
                    return i
                }
            }(h || (h = {})),
            function(e) {
                e.create = function(e) {
                    return {
                        cells: e,
                        uris: new Set(e.map((e => e.document.uri.toString())))
                    }
                }
            }(p || (p = {}));
            class g {
                constructor(e, t) {
                    this.client = e, this.options = t, this.notebookSyncInfo = new Map, this.notebookDidOpen = new Set, this.disposables = [], this.selector = e.protocol2CodeConverter.asDocumentSelector(h.asDocumentSelector(t)), i.workspace.onDidOpenNotebookDocument((e => {
                        this.notebookDidOpen.add(e.uri.toString()), this.didOpen(e)
                    }), void 0, this.disposables);
                    for (const e of i.workspace.notebookDocuments) this.notebookDidOpen.add(e.uri.toString()), this.didOpen(e);
                    i.workspace.onDidChangeNotebookDocument((e => this.didChangeNotebookDocument(e)), void 0, this.disposables), !0 === this.options.save && i.workspace.onDidSaveNotebookDocument((e => this.didSave(e)), void 0, this.disposables), i.workspace.onDidCloseNotebookDocument((e => {
                        this.didClose(e), this.notebookDidOpen.delete(e.uri.toString())
                    }), void 0, this.disposables)
                }
                getState() {
                    for (const e of i.workspace.notebookDocuments)
                        if (void 0 !== this.getMatchingCells(e)) return {
                            kind: "document",
                            id: "$internal",
                            registrations: !0,
                            matches: !0
                        };
                    return {
                        kind: "document",
                        id: "$internal",
                        registrations: !0,
                        matches: !1
                    }
                }
                get mode() {
                    return "notebook"
                }
                handles(e) {
                    return i.languages.match(this.selector, e) > 0
                }
                didOpenNotebookCellTextDocument(e, t) {
                    if (0 === i.languages.match(this.selector, t.document)) return;
                    if (!this.notebookDidOpen.has(e.uri.toString())) return;
                    const n = this.notebookSyncInfo.get(e.uri.toString()),
                        r = this.cellMatches(e, t);
                    if (void 0 !== n) {
                        const i = n.uris.has(t.document.uri.toString());
                        if (r && i || !r && !i) return;
                        if (r) {
                            const t = this.getMatchingCells(e);
                            if (void 0 !== t) {
                                const i = this.asNotebookDocumentChangeEvent(e, void 0, n, t);
                                void 0 !== i && this.doSendChange(i, t).catch((() => {}))
                            }
                        }
                    } else r && this.doSendOpen(e, [t]).catch((() => {}))
                }
                didChangeNotebookCellTextDocument(e, t) {
                    0 !== i.languages.match(this.selector, t.document) && this.doSendChange({
                        notebook: e,
                        cells: {
                            textContent: [t]
                        }
                    }, void 0).catch((() => {}))
                }
                didCloseNotebookCellTextDocument(e, t) {
                    const n = this.notebookSyncInfo.get(e.uri.toString());
                    if (void 0 === n) return;
                    const i = t.document.uri,
                        r = n.cells.findIndex((e => e.document.uri.toString() === i.toString()));
                    if (-1 !== r)
                        if (0 === r && 1 === n.cells.length) this.doSendClose(e, n.cells).catch((() => {}));
                        else {
                            const t = n.cells.slice(),
                                i = t.splice(r, 1);
                            this.doSendChange({
                                notebook: e,
                                cells: {
                                    structure: {
                                        array: {
                                            start: r,
                                            deleteCount: 1
                                        },
                                        didClose: i
                                    }
                                }
                            }, t).catch((() => {}))
                        }
                }
                dispose() {
                    for (const e of this.disposables) e.dispose()
                }
                didOpen(e, t = this.getMatchingCells(e), n = this.notebookSyncInfo.get(e.uri.toString())) {
                    if (void 0 !== n)
                        if (void 0 !== t) {
                            const i = this.asNotebookDocumentChangeEvent(e, void 0, n, t);
                            void 0 !== i && this.doSendChange(i, t).catch((() => {}))
                        } else this.doSendClose(e, []).catch((() => {}));
                    else {
                        if (void 0 === t) return;
                        this.doSendOpen(e, t).catch((() => {}))
                    }
                }
                didChangeNotebookDocument(e) {
                    const t = e.notebook,
                        n = this.notebookSyncInfo.get(t.uri.toString());
                    if (void 0 === n) {
                        if (0 === e.contentChanges.length) return;
                        const i = this.getMatchingCells(t);
                        if (void 0 === i) return;
                        this.didOpen(t, i, n)
                    } else {
                        const i = this.getMatchingCells(t);
                        if (void 0 === i) return void this.didClose(t, n);
                        const r = this.asNotebookDocumentChangeEvent(e.notebook, e, n, i);
                        void 0 !== r && this.doSendChange(r, i).catch((() => {}))
                    }
                }
                didSave(e) {
                    void 0 !== this.notebookSyncInfo.get(e.uri.toString()) && this.doSendSave(e).catch((() => {}))
                }
                didClose(e, t = this.notebookSyncInfo.get(e.uri.toString())) {
                    if (void 0 === t) return;
                    const n = e.getCells().filter((e => t.uris.has(e.document.uri.toString())));
                    this.doSendClose(e, n).catch((() => {}))
                }
                async sendDidOpenNotebookDocument(e) {
                    const t = this.getMatchingCells(e);
                    if (void 0 !== t) return this.doSendOpen(e, t)
                }
                async doSendOpen(e, t) {
                    const n = async (e, t) => {
                            const n = u.c2p.asNotebookDocument(e, t, this.client.code2ProtocolConverter),
                                i = t.map((e => this.client.code2ProtocolConverter.asTextDocumentItem(e.document)));
                            try {
                                await this.client.sendNotification(o.DidOpenNotebookDocumentNotification.type, {
                                    notebookDocument: n,
                                    cellTextDocuments: i
                                })
                            } catch (e) {
                                throw this.client.error("Sending DidOpenNotebookDocumentNotification failed", e), e
                            }
                        },
                        i = this.client.middleware ? .notebooks;
                    return this.notebookSyncInfo.set(e.uri.toString(), p.create(t)), void 0 !== i ? .didOpen ? i.didOpen(e, t, n) : n(e, t)
                }
                async sendDidChangeNotebookDocument(e) {
                    return this.doSendChange(e, void 0)
                }
                async doSendChange(e, t = this.getMatchingCells(e.notebook)) {
                    const n = async e => {
                            try {
                                await this.client.sendNotification(o.DidChangeNotebookDocumentNotification.type, {
                                    notebookDocument: u.c2p.asVersionedNotebookDocumentIdentifier(e.notebook, this.client.code2ProtocolConverter),
                                    change: u.c2p.asNotebookDocumentChangeEvent(e, this.client.code2ProtocolConverter)
                                })
                            } catch (e) {
                                throw this.client.error("Sending DidChangeNotebookDocumentNotification failed", e), e
                            }
                        },
                        i = this.client.middleware ? .notebooks;
                    return void 0 !== e.cells ? .structure && this.notebookSyncInfo.set(e.notebook.uri.toString(), p.create(t ? ? [])), void 0 !== i ? .didChange ? i ? .didChange(e, n) : n(e)
                }
                async sendDidSaveNotebookDocument(e) {
                    return this.doSendSave(e)
                }
                async doSendSave(e) {
                    const t = async e => {
                            try {
                                await this.client.sendNotification(o.DidSaveNotebookDocumentNotification.type, {
                                    notebookDocument: {
                                        uri: this.client.code2ProtocolConverter.asUri(e.uri)
                                    }
                                })
                            } catch (e) {
                                throw this.client.error("Sending DidSaveNotebookDocumentNotification failed", e), e
                            }
                        },
                        n = this.client.middleware ? .notebooks;
                    return void 0 !== n ? .didSave ? n.didSave(e, t) : t(e)
                }
                async sendDidCloseNotebookDocument(e) {
                    return this.doSendClose(e, this.getMatchingCells(e) ? ? [])
                }
                async doSendClose(e, t) {
                    const n = async (e, t) => {
                            try {
                                await this.client.sendNotification(o.DidCloseNotebookDocumentNotification.type, {
                                    notebookDocument: {
                                        uri: this.client.code2ProtocolConverter.asUri(e.uri)
                                    },
                                    cellTextDocuments: t.map((e => this.client.code2ProtocolConverter.asTextDocumentIdentifier(e.document)))
                                })
                            } catch (e) {
                                throw this.client.error("Sending DidCloseNotebookDocumentNotification failed", e), e
                            }
                        },
                        i = this.client.middleware ? .notebooks;
                    return this.notebookSyncInfo.delete(e.uri.toString()), void 0 !== i ? .didClose ? i.didClose(e, t, n) : n(e, t)
                }
                asNotebookDocumentChangeEvent(e, t, n, i) {
                    if (void 0 !== t && t.notebook !== e) throw new Error("Notebook must be identical");
                    const r = {
                        notebook: e
                    };
                    let o;
                    if (void 0 !== t ? .metadata && (r.metadata = u.c2p.asMetadata(t.metadata)), void 0 !== t ? .cellChanges && t.cellChanges.length > 0) {
                        const e = [];
                        o = new Set(i.map((e => e.document.uri.toString())));
                        for (const n of t.cellChanges) !o.has(n.cell.document.uri.toString()) || void 0 === n.executionSummary && void 0 === n.metadata || e.push(n.cell);
                        e.length > 0 && (r.cells = r.cells ? ? {}, r.cells.data = e)
                    }
                    if ((void 0 !== t ? .contentChanges && t.contentChanges.length > 0 || void 0 === t) && void 0 !== n && void 0 !== i) {
                        const e = n.cells,
                            t = i,
                            o = l.computeDiff(e, t, !1);
                        let s, a;
                        if (void 0 !== o) {
                            s = void 0 === o.cells ? new Map : new Map(o.cells.map((e => [e.document.uri.toString(), e]))), a = 0 === o.deleteCount ? new Map : new Map(e.slice(o.start, o.start + o.deleteCount).map((e => [e.document.uri.toString(), e])));
                            for (const e of Array.from(a.keys())) s.has(e) && (a.delete(e), s.delete(e));
                            r.cells = r.cells ? ? {};
                            const t = [],
                                n = [];
                            if (s.size > 0 || a.size > 0) {
                                for (const e of s.values()) t.push(e);
                                for (const e of a.values()) n.push(e)
                            }
                            r.cells.structure = {
                                array: o,
                                didOpen: t,
                                didClose: n
                            }
                        }
                    }
                    return Object.keys(r).length > 1 ? r : void 0
                }
                getMatchingCells(e, t = e.getCells()) {
                    if (void 0 !== this.options.notebookSelector)
                        for (const n of this.options.notebookSelector)
                            if (void 0 === n.notebook || d.matchNotebook(n.notebook, e)) {
                                const i = this.filterCells(e, t, n.cells);
                                return 0 === i.length ? void 0 : i
                            }
                }
                cellMatches(e, t) {
                    const n = this.getMatchingCells(e, [t]);
                    return void 0 !== n && n[0] === t
                }
                filterCells(e, t, n) {
                    const i = void 0 !== n ? t.filter((e => {
                        const t = e.document.languageId;
                        return n.some((e => "*" === e.language || t === e.language))
                    })) : t;
                    return "function" == typeof this.client.clientOptions.notebookDocumentOptions ? .filterCells ? this.client.clientOptions.notebookDocumentOptions.filterCells(e, i) : i
                }
            }
            class m {
                constructor(e) {
                    this.client = e, this.registrations = new Map, this.registrationType = o.NotebookDocumentSyncRegistrationType.type, i.workspace.onDidOpenTextDocument((e => {
                        if (e.uri.scheme !== m.CellScheme) return;
                        const [t, n] = this.findNotebookDocumentAndCell(e);
                        if (void 0 !== t && void 0 !== n)
                            for (const e of this.registrations.values()) e instanceof g && e.didOpenNotebookCellTextDocument(t, n)
                    })), i.workspace.onDidChangeTextDocument((e => {
                        if (0 === e.contentChanges.length) return;
                        const t = e.document;
                        if (t.uri.scheme !== m.CellScheme) return;
                        const [n] = this.findNotebookDocumentAndCell(t);
                        if (void 0 !== n)
                            for (const t of this.registrations.values()) t instanceof g && t.didChangeNotebookCellTextDocument(n, e)
                    })), i.workspace.onDidCloseTextDocument((e => {
                        if (e.uri.scheme !== m.CellScheme) return;
                        const [t, n] = this.findNotebookDocumentAndCell(e);
                        if (void 0 !== t && void 0 !== n)
                            for (const e of this.registrations.values()) e instanceof g && e.didCloseNotebookCellTextDocument(t, n)
                    }))
                }
                getState() {
                    if (0 === this.registrations.size) return {
                        kind: "document",
                        id: this.registrationType.method,
                        registrations: !1,
                        matches: !1
                    };
                    for (const e of this.registrations.values()) {
                        const t = e.getState();
                        if ("document" === t.kind && !0 === t.registrations && !0 === t.matches) return {
                            kind: "document",
                            id: this.registrationType.method,
                            registrations: !0,
                            matches: !0
                        }
                    }
                    return {
                        kind: "document",
                        id: this.registrationType.method,
                        registrations: !0,
                        matches: !1
                    }
                }
                fillClientCapabilities(e) {
                    const t = c(c(e, "notebookDocument"), "synchronization");
                    t.dynamicRegistration = !0, t.executionSummarySupport = !0
                }
                preInitialize(e) {
                    const t = e.notebookDocumentSync;
                    void 0 !== t && (this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector(h.asDocumentSelector(t)))
                }
                initialize(e) {
                    const t = e.notebookDocumentSync;
                    if (void 0 === t) return;
                    const n = t.id ? ? s.generateUuid();
                    this.register({
                        id: n,
                        registerOptions: t
                    })
                }
                register(e) {
                    const t = new g(this.client, e.registerOptions);
                    this.registrations.set(e.id, t)
                }
                unregister(e) {
                    const t = this.registrations.get(e);
                    t && t.dispose()
                }
                clear() {
                    for (const e of this.registrations.values()) e.dispose();
                    this.registrations.clear()
                }
                handles(e) {
                    if (e.uri.scheme !== m.CellScheme) return !1;
                    if (void 0 !== this.dedicatedChannel && i.languages.match(this.dedicatedChannel, e) > 0) return !0;
                    for (const t of this.registrations.values())
                        if (t.handles(e)) return !0;
                    return !1
                }
                getProvider(e) {
                    for (const t of this.registrations.values())
                        if (t.handles(e.document)) return t
                }
                findNotebookDocumentAndCell(e) {
                    const t = e.uri.toString();
                    for (const e of i.workspace.notebookDocuments)
                        for (const n of e.getCells())
                            if (n.document.uri.toString() === t) return [e, n];
                    return [void 0, void 0]
                }
            }
            t.NotebookDocumentSyncFeature = m, m.CellScheme = "vscode-notebook-cell"
        },
        yTjP: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProgressFeature = void 0;
            const i = n("fozD"),
                r = n("I9Hb");
            t.ProgressFeature = class {
                constructor(e) {
                    this._client = e, this.activeParts = new Set
                }
                getState() {
                    return {
                        kind: "window",
                        id: i.WorkDoneProgressCreateRequest.method,
                        registrations: this.activeParts.size > 0
                    }
                }
                fillClientCapabilities(e) {
                    var t, n;
                    (t = e, n = "window", void 0 === t[n] && (t[n] = Object.create(null)), t[n]).workDoneProgress = !0
                }
                initialize() {
                    const e = this._client,
                        t = e => {
                            this.activeParts.delete(e)
                        };
                    e.onRequest(i.WorkDoneProgressCreateRequest.type, (e => {
                        this.activeParts.add(new r.ProgressPart(this._client, e.token, t))
                    }))
                }
                clear() {
                    for (const e of this.activeParts) e.done();
                    this.activeParts.clear()
                }
            }
        },
        I9Hb: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProgressPart = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("wjb4");
            t.ProgressPart = class {
                constructor(e, t, n) {
                    this._client = e, this._token = t, this._reported = 0, this._infinite = !1, this._lspProgressDisposable = this._client.onProgress(r.WorkDoneProgress.type, this._token, (e => {
                        switch (e.kind) {
                            case "begin":
                                this.begin(e);
                                break;
                            case "report":
                                this.report(e);
                                break;
                            case "end":
                                this.done(), n && n(this)
                        }
                    }))
                }
                begin(e) {
                    this._infinite = void 0 === e.percentage, void 0 !== this._lspProgressDisposable && i.window.withProgress({
                        location: i.ProgressLocation.Window,
                        cancellable: e.cancellable,
                        title: e.title
                    }, (async (t, n) => {
                        if (void 0 !== this._lspProgressDisposable) return this._progress = t, this._cancellationToken = n, this._tokenDisposable = this._cancellationToken.onCancellationRequested((() => {
                            this._client.sendNotification(r.WorkDoneProgressCancelNotification.type, {
                                token: this._token
                            })
                        })), this.report(e), new Promise(((e, t) => {
                            this._resolve = e, this._reject = t
                        }))
                    }))
                }
                report(e) {
                    if (this._infinite && o.string(e.message)) void 0 !== this._progress && this._progress.report({
                        message: e.message
                    });
                    else if (o.number(e.percentage)) {
                        const t = Math.max(0, Math.min(e.percentage, 100)),
                            n = Math.max(0, t - this._reported);
                        this._reported += n, void 0 !== this._progress && this._progress.report({
                            message: e.message,
                            increment: n
                        })
                    }
                }
                cancel() {
                    this.cleanup(), void 0 !== this._reject && (this._reject(), this._resolve = void 0, this._reject = void 0)
                }
                done() {
                    this.cleanup(), void 0 !== this._resolve && (this._resolve(), this._resolve = void 0, this._reject = void 0)
                }
                cleanup() {
                    void 0 !== this._lspProgressDisposable && (this._lspProgressDisposable.dispose(), this._lspProgressDisposable = void 0), void 0 !== this._tokenDisposable && (this._tokenDisposable.dispose(), this._tokenDisposable = void 0), this._progress = void 0, this._cancellationToken = void 0
                }
            }
        },
        SJgK: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.CallHierarchyItem {
                constructor(e, t, n, i, r, o, s) {
                    super(e, t, n, i, r, o), void 0 !== s && (this.data = s)
                }
            }
            t.default = r
        },
        jDNm: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.CodeAction {
                constructor(e, t) {
                    super(e), this.data = t
                }
            }
            t.default = r
        },
        "2afT": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.CodeLens {
                constructor(e) {
                    super(e)
                }
            }
            t.default = r
        },
        "+T0I": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.CompletionItem {
                constructor(e) {
                    super(e)
                }
            }
            t.default = r
        },
        QD5j: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createConverter = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("wjb4"),
                s = n("F4kK"),
                a = n("+T0I"),
                c = n("2afT"),
                u = n("VtvQ"),
                l = n("jDNm"),
                d = n("h6Cg"),
                h = n("SJgK"),
                p = n("tMnT"),
                g = n("5M8Z"),
                m = n("9ANT"),
                f = n("fozD");
            var y;
            ! function(e) {
                e.is = function(e) {
                    let t = e;
                    return t && o.string(t.language) && o.string(t.value)
                }
            }(y || (y = {})), t.createConverter = function(e, t, n) {
                const v = e || (e => i.Uri.parse(e));

                function C(e) {
                    return v(e)
                }

                function b(e) {
                    let t = new d.ProtocolDiagnostic(_(e.range), e.message, T(e.severity), e.data);
                    if (void 0 !== e.code)
                        if ("string" == typeof e.code || "number" == typeof e.code) r.CodeDescription.is(e.codeDescription) ? t.code = {
                            value: e.code,
                            target: C(e.codeDescription.href)
                        } : t.code = e.code;
                        else if (d.DiagnosticCode.is(e.code)) {
                        t.hasDiagnosticCode = !0;
                        const n = e.code;
                        t.code = {
                            value: n.value,
                            target: C(n.target)
                        }
                    }
                    return e.source && (t.source = e.source), e.relatedInformation && (t.relatedInformation = function(e) {
                        const t = new Array(e.length);
                        for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            t[n] = new i.DiagnosticRelatedInformation(L(r.location), r.message)
                        }
                        return t
                    }(e.relatedInformation)), Array.isArray(e.tags) && (t.tags = function(e) {
                        if (!e) return;
                        let t = [];
                        for (let n of e) {
                            let e = D(n);
                            void 0 !== e && t.push(e)
                        }
                        return t.length > 0 ? t : void 0
                    }(e.tags)), t
                }

                function D(e) {
                    switch (e) {
                        case r.DiagnosticTag.Unnecessary:
                            return i.DiagnosticTag.Unnecessary;
                        case r.DiagnosticTag.Deprecated:
                            return i.DiagnosticTag.Deprecated;
                        default:
                            return
                    }
                }

                function R(e) {
                    return e ? new i.Position(e.line, e.character) : void 0
                }

                function _(e) {
                    return e ? new i.Range(e.start.line, e.start.character, e.end.line, e.end.character) : void 0
                }
                async function w(e, t) {
                    return s.map(e, (e => new i.Range(e.start.line, e.start.character, e.end.line, e.end.character)), t)
                }

                function T(e) {
                    if (null == e) return i.DiagnosticSeverity.Error;
                    switch (e) {
                        case r.DiagnosticSeverity.Error:
                            return i.DiagnosticSeverity.Error;
                        case r.DiagnosticSeverity.Warning:
                            return i.DiagnosticSeverity.Warning;
                        case r.DiagnosticSeverity.Information:
                            return i.DiagnosticSeverity.Information;
                        case r.DiagnosticSeverity.Hint:
                            return i.DiagnosticSeverity.Hint
                    }
                    return i.DiagnosticSeverity.Error
                }

                function S(e) {
                    if (o.string(e)) return e;
                    switch (e.kind) {
                        case r.MarkupKind.Markdown:
                            return k(e.value);
                        case r.MarkupKind.PlainText:
                            return e.value;
                        default:
                            return `Unsupported Markup content received. Kind is: ${e.kind}`
                    }
                }

                function k(e) {
                    let o;
                    if (void 0 === e || "string" == typeof e) o = new i.MarkdownString(e);
                    else switch (e.kind) {
                        case r.MarkupKind.Markdown:
                            o = new i.MarkdownString(e.value);
                            break;
                        case r.MarkupKind.PlainText:
                            o = new i.MarkdownString, o.appendText(e.value);
                            break;
                        default:
                            o = new i.MarkdownString, o.appendText(`Unsupported Markup content received. Kind is: ${e.kind}`)
                    }
                    return o.isTrusted = t, o.supportHtml = n, o
                }

                function P(e) {
                    if (e === r.CompletionItemTag.Deprecated) return i.CompletionItemTag.Deprecated
                }

                function x(e, t, n, s, c, u) {
                    const l = function(e) {
                            if (null == e) return [];
                            const t = [];
                            for (const n of e) {
                                const e = P(n);
                                void 0 !== e && t.push(e)
                            }
                            return t
                        }(e.tags),
                        d = function(e) {
                            return r.CompletionItemLabelDetails.is(e.labelDetails) ? {
                                label: e.label,
                                detail: e.labelDetails.detail,
                                description: e.labelDetails.description
                            } : e.label
                        }(e),
                        h = new a.default(d);
                    e.detail && (h.detail = e.detail), e.documentation && (h.documentation = S(e.documentation), h.documentationFormat = o.string(e.documentation) ? "$string" : e.documentation.kind), e.filterText && (h.filterText = e.filterText);
                    const p = function(e, t, n) {
                        const o = e.insertTextFormat ? ? n;
                        if (void 0 !== e.textEdit || void 0 !== t) {
                            const [n, a] = void 0 !== e.textEdit ? (s = e.textEdit, r.InsertReplaceEdit.is(s) ? [{
                                inserting: _(s.insert),
                                replacing: _(s.replace)
                            }, s.newText] : [_(s.range), s.newText]) : [t, e.textEditText ? ? e.label];
                            return o === r.InsertTextFormat.Snippet ? {
                                text: new i.SnippetString(a),
                                range: n,
                                fromEdit: !0
                            } : {
                                text: a,
                                range: n,
                                fromEdit: !0
                            }
                        }
                        return e.insertText ? o === r.InsertTextFormat.Snippet ? {
                            text: new i.SnippetString(e.insertText),
                            fromEdit: !1
                        } : {
                            text: e.insertText,
                            fromEdit: !1
                        } : void 0;
                        var s
                    }(e, n, c);
                    if (p && (h.insertText = p.text, h.range = p.range, h.fromEdit = p.fromEdit), o.number(e.kind)) {
                        let [t, n] = (g = e.kind, r.CompletionItemKind.Text <= g && g <= r.CompletionItemKind.TypeParameter ? [g - 1, void 0] : [i.CompletionItemKind.Text, g]);
                        h.kind = t, n && (h.originalItemKind = n)
                    }
                    var g;
                    e.sortText && (h.sortText = e.sortText), e.additionalTextEdits && (h.additionalTextEdits = q(e.additionalTextEdits));
                    const m = void 0 !== e.commitCharacters ? o.stringArray(e.commitCharacters) ? e.commitCharacters : void 0 : t;
                    m && (h.commitCharacters = m.slice()), e.command && (h.command = B(e.command)), !0 !== e.deprecated && !1 !== e.deprecated || (h.deprecated = e.deprecated, !0 === e.deprecated && l.push(i.CompletionItemTag.Deprecated)), !0 !== e.preselect && !1 !== e.preselect || (h.preselect = e.preselect);
                    const f = e.data ? ? u;
                    void 0 !== f && (h.data = f), l.length > 0 && (h.tags = l);
                    const y = e.insertTextMode ? ? s;
                    return void 0 !== y && (h.insertTextMode = y, y === r.InsertTextMode.asIs && (h.keepWhitespace = !0)), h
                }

                function E(e) {
                    if (e) return new i.TextEdit(_(e.range), e.newText)
                }
                async function O(e, t) {
                    if (e) return s.map(e, E, t)
                }

                function q(e) {
                    if (!e) return;
                    const t = new Array(e.length);
                    for (let n = 0; n < e.length; n++) t[n] = E(e[n]);
                    return t
                }
                async function M(e, t) {
                    return s.mapAsync(e, F, t)
                }
                async function F(e, t) {
                    let n = new i.SignatureInformation(e.label);
                    return void 0 !== e.documentation && (n.documentation = S(e.documentation)), void 0 !== e.parameters && (n.parameters = await N(e.parameters, t)), void 0 !== e.activeParameter && (n.activeParameter = e.activeParameter), n
                }

                function N(e, t) {
                    return s.map(e, I, t)
                }

                function I(e) {
                    let t = new i.ParameterInformation(e.label);
                    return e.documentation && (t.documentation = S(e.documentation)), t
                }

                function L(e) {
                    return e ? new i.Location(v(e.uri), _(e.range)) : void 0
                }

                function j(e) {
                    if (!e) return;
                    let t = {
                        targetUri: v(e.targetUri),
                        targetRange: _(e.targetRange),
                        originSelectionRange: _(e.originSelectionRange),
                        targetSelectionRange: _(e.targetSelectionRange)
                    };
                    if (!t.targetSelectionRange) throw new Error("targetSelectionRange must not be undefined or null");
                    return t
                }
                async function A(e, t) {
                    if (e) {
                        if (o.array(e)) {
                            if (0 === e.length) return [];
                            if (r.LocationLink.is(e[0])) {
                                const n = e;
                                return s.map(n, j, t)
                            } {
                                const n = e;
                                return s.map(n, L, t)
                            }
                        }
                        return r.LocationLink.is(e) ? [j(e)] : L(e)
                    }
                }

                function H(e) {
                    let t = new i.DocumentHighlight(_(e.range));
                    return o.number(e.kind) && (t.kind = W(e.kind)), t
                }

                function W(e) {
                    switch (e) {
                        case r.DocumentHighlightKind.Text:
                            return i.DocumentHighlightKind.Text;
                        case r.DocumentHighlightKind.Read:
                            return i.DocumentHighlightKind.Read;
                        case r.DocumentHighlightKind.Write:
                            return i.DocumentHighlightKind.Write
                    }
                    return i.DocumentHighlightKind.Text
                }

                function K(e) {
                    return e <= r.SymbolKind.TypeParameter ? e - 1 : i.SymbolKind.Property
                }

                function U(e) {
                    if (e === r.SymbolTag.Deprecated) return i.SymbolTag.Deprecated
                }

                function z(e) {
                    if (null == e) return;
                    const t = [];
                    for (const n of e) {
                        const e = U(n);
                        void 0 !== e && t.push(e)
                    }
                    return 0 === t.length ? void 0 : t
                }

                function $(e) {
                    const t = e.data,
                        n = e.location,
                        r = void 0 === n.range || void 0 !== t ? new g.default(e.name, K(e.kind), e.containerName ? ? "", void 0 === n.range ? v(n.uri) : new i.Location(v(e.location.uri), _(n.range)), t) : new i.SymbolInformation(e.name, K(e.kind), e.containerName ? ? "", new i.Location(v(e.location.uri), _(n.range)));
                    return J(r, e), r
                }

                function V(e) {
                    let t = new i.DocumentSymbol(e.name, e.detail || "", K(e.kind), _(e.range), _(e.selectionRange));
                    if (J(t, e), void 0 !== e.children && e.children.length > 0) {
                        let n = [];
                        for (let t of e.children) n.push(V(t));
                        t.children = n
                    }
                    return t
                }

                function J(e, t) {
                    e.tags = z(t.tags), t.deprecated && (e.tags ? e.tags.includes(i.SymbolTag.Deprecated) || (e.tags = e.tags.concat(i.SymbolTag.Deprecated)) : e.tags = [i.SymbolTag.Deprecated])
                }

                function B(e) {
                    let t = {
                        title: e.title,
                        command: e.command
                    };
                    return e.arguments && (t.arguments = e.arguments), t
                }
                const Q = new Map;

                function G(e) {
                    if (null == e) return;
                    let t = Q.get(e);
                    if (t) return t;
                    let n = e.split(".");
                    t = i.CodeActionKind.Empty;
                    for (let e of n) t = t.append(e);
                    return t
                }
                async function Z(e, t) {
                    if (null == e) return;
                    let n = new l.default(e.title, e.data);
                    return void 0 !== e.kind && (n.kind = G(e.kind)), void 0 !== e.diagnostics && (n.diagnostics = function(e) {
                        const t = new Array(e.length);
                        for (let n = 0; n < e.length; n++) t[n] = b(e[n]);
                        return t
                    }(e.diagnostics)), void 0 !== e.edit && (n.edit = await Y(e.edit, t)), void 0 !== e.command && (n.command = B(e.command)), void 0 !== e.isPreferred && (n.isPreferred = e.isPreferred), void 0 !== e.disabled && (n.disabled = {
                        reason: e.disabled.reason
                    }), n
                }

                function X(e) {
                    if (!e) return;
                    let t = new c.default(_(e.range));
                    return e.command && (t.command = B(e.command)), void 0 !== e.data && null !== e.data && (t.data = e.data), t
                }
                async function Y(e, t) {
                    if (!e) return;
                    const n = new Map;
                    if (void 0 !== e.changeAnnotations) {
                        const i = e.changeAnnotations;
                        await s.forEach(Object.keys(i), (e => {
                            const t = function(e) {
                                if (void 0 !== e) return {
                                    label: e.label,
                                    needsConfirmation: !!e.needsConfirmation,
                                    description: e.description
                                }
                            }(i[e]);
                            n.set(e, t)
                        }), t)
                    }
                    const o = e => void 0 === e ? void 0 : n.get(e),
                        a = new i.WorkspaceEdit;
                    if (e.documentChanges) {
                        const n = e.documentChanges;
                        await s.forEach(n, (e => {
                            if (r.CreateFile.is(e)) a.createFile(v(e.uri), e.options, o(e.annotationId));
                            else if (r.RenameFile.is(e)) a.renameFile(v(e.oldUri), v(e.newUri), e.options, o(e.annotationId));
                            else if (r.DeleteFile.is(e)) a.deleteFile(v(e.uri), e.options, o(e.annotationId));
                            else {
                                if (!r.TextDocumentEdit.is(e)) throw new Error(`Unknown workspace edit change received:\n${JSON.stringify(e,void 0,4)}`); {
                                    const t = v(e.textDocument.uri);
                                    for (const n of e.edits) r.AnnotatedTextEdit.is(n) ? a.replace(t, _(n.range), n.newText, o(n.annotationId)) : a.replace(t, _(n.range), n.newText)
                                }
                            }
                        }), t)
                    } else if (e.changes) {
                        const n = e.changes;
                        await s.forEach(Object.keys(n), (e => {
                            a.set(v(e), q(n[e]))
                        }), t)
                    }
                    return a
                }

                function ee(e) {
                    let t = _(e.range),
                        n = e.target ? C(e.target) : void 0,
                        i = new u.default(t, n);
                    return void 0 !== e.tooltip && (i.tooltip = e.tooltip), void 0 !== e.data && null !== e.data && (i.data = e.data), i
                }

                function te(e) {
                    return new i.Color(e.red, e.green, e.blue, e.alpha)
                }

                function ne(e) {
                    return new i.ColorInformation(_(e.range), te(e.color))
                }

                function ie(e) {
                    let t = new i.ColorPresentation(e.label);
                    return t.additionalTextEdits = q(e.additionalTextEdits), e.textEdit && (t.textEdit = E(e.textEdit)), t
                }

                function re(e) {
                    if (e) switch (e) {
                        case r.FoldingRangeKind.Comment:
                            return i.FoldingRangeKind.Comment;
                        case r.FoldingRangeKind.Imports:
                            return i.FoldingRangeKind.Imports;
                        case r.FoldingRangeKind.Region:
                            return i.FoldingRangeKind.Region
                    }
                }

                function oe(e) {
                    return new i.FoldingRange(e.startLine, e.endLine, re(e.kind))
                }

                function se(e) {
                    return new i.SelectionRange(_(e.range), e.parent ? se(e.parent) : void 0)
                }

                function ae(e) {
                    return r.InlineValueText.is(e) ? new i.InlineValueText(_(e.range), e.text) : r.InlineValueVariableLookup.is(e) ? new i.InlineValueVariableLookup(_(e.range), e.variableName, e.caseSensitiveLookup) : new i.InlineValueEvaluatableExpression(_(e.range), e.expression)
                }
                async function ce(e, t) {
                    const n = "string" == typeof e.label ? e.label : await s.map(e.label, ue, t),
                        i = new m.default(R(e.position), n);
                    return void 0 !== e.kind && (i.kind = e.kind), void 0 !== e.textEdits && (i.textEdits = await O(e.textEdits, t)), void 0 !== e.tooltip && (i.tooltip = le(e.tooltip)), void 0 !== e.paddingLeft && (i.paddingLeft = e.paddingLeft), void 0 !== e.paddingRight && (i.paddingRight = e.paddingRight), void 0 !== e.data && (i.data = e.data), i
                }

                function ue(e) {
                    const t = new i.InlayHintLabelPart(e.value);
                    return void 0 !== e.location && (t.location = L(e.location)), void 0 !== e.tooltip && (t.tooltip = le(e.tooltip)), void 0 !== e.command && (t.command = B(e.command)), t
                }

                function le(e) {
                    return "string" == typeof e ? e : k(e)
                }

                function de(e) {
                    if (null === e) return;
                    const t = new h.default(K(e.kind), e.name, e.detail || "", C(e.uri), _(e.range), _(e.selectionRange), e.data);
                    return void 0 !== e.tags && (t.tags = z(e.tags)), t
                }
                async function he(e, t) {
                    return new i.CallHierarchyIncomingCall(de(e.from), await w(e.fromRanges, t))
                }
                async function pe(e, t) {
                    return new i.CallHierarchyOutgoingCall(de(e.to), await w(e.fromRanges, t))
                }

                function ge(e) {
                    return new i.SemanticTokensEdit(e.start, e.deleteCount, void 0 !== e.data ? new Uint32Array(e.data) : void 0)
                }

                function me(e) {
                    if (null === e) return;
                    let t = new p.default(K(e.kind), e.name, e.detail || "", C(e.uri), _(e.range), _(e.selectionRange), e.data);
                    return void 0 !== e.tags && (t.tags = z(e.tags)), t
                }

                function fe(e) {
                    let t, n;
                    t = "string" == typeof e.insertText ? e.insertText : new i.SnippetString(e.insertText.value), e.command && (n = B(e.command));
                    const r = new i.InlineCompletionItem(t, _(e.range), n);
                    return e.filterText && (r.filterText = e.filterText), r
                }
                return Q.set(r.CodeActionKind.Empty, i.CodeActionKind.Empty), Q.set(r.CodeActionKind.QuickFix, i.CodeActionKind.QuickFix), Q.set(r.CodeActionKind.Refactor, i.CodeActionKind.Refactor), Q.set(r.CodeActionKind.RefactorExtract, i.CodeActionKind.RefactorExtract), Q.set(r.CodeActionKind.RefactorInline, i.CodeActionKind.RefactorInline), Q.set(r.CodeActionKind.RefactorRewrite, i.CodeActionKind.RefactorRewrite), Q.set(r.CodeActionKind.Source, i.CodeActionKind.Source), Q.set(r.CodeActionKind.SourceOrganizeImports, i.CodeActionKind.SourceOrganizeImports), {
                    asUri: C,
                    asDocumentSelector: function(e) {
                        const t = [];
                        for (const n of e)
                            if ("string" == typeof n) t.push(n);
                            else if (f.NotebookCellTextDocumentFilter.is(n))
                            if ("string" == typeof n.notebook) t.push({
                                notebookType: n.notebook,
                                language: n.language
                            });
                            else {
                                const e = n.notebook.notebookType ? ? "*";
                                t.push({
                                    notebookType: e,
                                    scheme: n.notebook.scheme,
                                    pattern: n.notebook.pattern,
                                    language: n.language
                                })
                            }
                        else f.TextDocumentFilter.is(n) && t.push({
                            language: n.language,
                            scheme: n.scheme,
                            pattern: n.pattern
                        });
                        return t
                    },
                    asDiagnostics: async function(e, t) {
                        return s.map(e, b, t)
                    },
                    asDiagnostic: b,
                    asRange: _,
                    asRanges: w,
                    asPosition: R,
                    asDiagnosticSeverity: T,
                    asDiagnosticTag: D,
                    asHover: function(e) {
                        if (e) return new i.Hover(function(e) {
                            if (o.string(e)) return k(e);
                            if (y.is(e)) return k().appendCodeblock(e.value, e.language);
                            if (Array.isArray(e)) {
                                let t = [];
                                for (let n of e) {
                                    let e = k();
                                    y.is(n) ? e.appendCodeblock(n.value, n.language) : e.appendMarkdown(n), t.push(e)
                                }
                                return t
                            }
                            return k(e)
                        }(e.contents), _(e.range))
                    },
                    asCompletionResult: async function(e, t, n) {
                        if (!e) return;
                        if (Array.isArray(e)) return s.map(e, (e => x(e, t)), n);
                        const o = e,
                            {
                                defaultRange: a,
                                commitCharacters: c
                            } = function(e, t) {
                                const n = e.itemDefaults ? .editRange,
                                    i = e.itemDefaults ? .commitCharacters ? ? t;
                                return r.Range.is(n) ? {
                                    defaultRange: _(n),
                                    commitCharacters: i
                                } : void 0 !== n ? {
                                    defaultRange: {
                                        inserting: _(n.insert),
                                        replacing: _(n.replace)
                                    },
                                    commitCharacters: i
                                } : {
                                    defaultRange: void 0,
                                    commitCharacters: i
                                }
                            }(o, t),
                            u = await s.map(o.items, (e => x(e, c, a, o.itemDefaults ? .insertTextMode, o.itemDefaults ? .insertTextFormat, o.itemDefaults ? .data)), n);
                        return new i.CompletionList(u, o.isIncomplete)
                    },
                    asCompletionItem: x,
                    asTextEdit: E,
                    asTextEdits: O,
                    asSignatureHelp: async function(e, t) {
                        if (!e) return;
                        let n = new i.SignatureHelp;
                        return o.number(e.activeSignature) ? n.activeSignature = e.activeSignature : n.activeSignature = 0, o.number(e.activeParameter) ? n.activeParameter = e.activeParameter : n.activeParameter = 0, e.signatures && (n.signatures = await M(e.signatures, t)), n
                    },
                    asSignatureInformations: M,
                    asSignatureInformation: F,
                    asParameterInformations: N,
                    asParameterInformation: I,
                    asDeclarationResult: async function(e, t) {
                        if (e) return A(e, t)
                    },
                    asDefinitionResult: async function(e, t) {
                        if (e) return A(e, t)
                    },
                    asLocation: L,
                    asReferences: async function(e, t) {
                        if (e) return s.map(e, L, t)
                    },
                    asDocumentHighlights: async function(e, t) {
                        if (e) return s.map(e, H, t)
                    },
                    asDocumentHighlight: H,
                    asDocumentHighlightKind: W,
                    asSymbolKind: K,
                    asSymbolTag: U,
                    asSymbolTags: z,
                    asSymbolInformations: async function(e, t) {
                        if (e) return s.map(e, $, t)
                    },
                    asSymbolInformation: $,
                    asDocumentSymbols: async function(e, t) {
                        if (null != e) return s.map(e, V, t)
                    },
                    asDocumentSymbol: V,
                    asCommand: B,
                    asCommands: async function(e, t) {
                        if (e) return s.map(e, B, t)
                    },
                    asCodeAction: Z,
                    asCodeActionKind: G,
                    asCodeActionKinds: function(e) {
                        if (null != e) return e.map((e => G(e)))
                    },
                    asCodeActionResult: function(e, t) {
                        return s.mapAsync(e, (async e => r.Command.is(e) ? B(e) : Z(e, t)), t)
                    },
                    asCodeLens: X,
                    asCodeLenses: async function(e, t) {
                        if (e) return s.map(e, X, t)
                    },
                    asWorkspaceEdit: Y,
                    asDocumentLink: ee,
                    asDocumentLinks: async function(e, t) {
                        if (e) return s.map(e, ee, t)
                    },
                    asFoldingRangeKind: re,
                    asFoldingRange: oe,
                    asFoldingRanges: async function(e, t) {
                        if (e) return s.map(e, oe, t)
                    },
                    asColor: te,
                    asColorInformation: ne,
                    asColorInformations: async function(e, t) {
                        if (e) return s.map(e, ne, t)
                    },
                    asColorPresentation: ie,
                    asColorPresentations: async function(e, t) {
                        if (e) return s.map(e, ie, t)
                    },
                    asSelectionRange: se,
                    asSelectionRanges: async function(e, t) {
                        return Array.isArray(e) ? s.map(e, se, t) : []
                    },
                    asInlineValue: ae,
                    asInlineValues: async function(e, t) {
                        return Array.isArray(e) ? s.map(e, ae, t) : []
                    },
                    asInlayHint: ce,
                    asInlayHints: async function(e, t) {
                        if (Array.isArray(e)) return s.mapAsync(e, ce, t)
                    },
                    asSemanticTokensLegend: function(e) {
                        return e
                    },
                    asSemanticTokens: async function(e, t) {
                        if (null != e) return new i.SemanticTokens(new Uint32Array(e.data), e.resultId)
                    },
                    asSemanticTokensEdit: ge,
                    asSemanticTokensEdits: async function(e, t) {
                        if (null != e) return new i.SemanticTokensEdits(e.edits.map(ge), e.resultId)
                    },
                    asCallHierarchyItem: de,
                    asCallHierarchyItems: async function(e, t) {
                        if (null !== e) return s.map(e, de, t)
                    },
                    asCallHierarchyIncomingCall: he,
                    asCallHierarchyIncomingCalls: async function(e, t) {
                        if (null !== e) return s.mapAsync(e, he, t)
                    },
                    asCallHierarchyOutgoingCall: pe,
                    asCallHierarchyOutgoingCalls: async function(e, t) {
                        if (null !== e) return s.mapAsync(e, pe, t)
                    },
                    asLinkedEditingRanges: async function(e, t) {
                        if (null != e) return new i.LinkedEditingRanges(await w(e.ranges, t), function(e) {
                            if (null != e) return new RegExp(e)
                        }(e.wordPattern))
                    },
                    asTypeHierarchyItem: me,
                    asTypeHierarchyItems: async function(e, t) {
                        if (null !== e) return s.map(e, me, t)
                    },
                    asGlobPattern: function(e) {
                        if (o.string(e)) return e;
                        if (r.RelativePattern.is(e)) {
                            if (r.URI.is(e.baseUri)) return new i.RelativePattern(C(e.baseUri), e.pattern);
                            if (r.WorkspaceFolder.is(e.baseUri)) {
                                const t = i.workspace.getWorkspaceFolder(C(e.baseUri.uri));
                                return void 0 !== t ? new i.RelativePattern(t, e.pattern) : void 0
                            }
                        }
                    },
                    asInlineCompletionResult: async function(e, t) {
                        if (!e) return;
                        if (Array.isArray(e)) return s.map(e, (e => fe(e)), t);
                        const n = e,
                            r = await s.map(n.items, (e => fe(e)), t);
                        return new i.InlineCompletionList(r)
                    },
                    asInlineCompletionItem: fe
                }
            }
        },
        h6Cg: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProtocolDiagnostic = t.DiagnosticCode = void 0;
            const i = n("Ja5U"),
                r = n("wjb4");
            var o;
            ! function(e) {
                e.is = function(e) {
                    const t = e;
                    return null != t && (r.number(t.value) || r.string(t.value)) && r.string(t.target)
                }
            }(o || (t.DiagnosticCode = o = {}));
            class s extends i.Diagnostic {
                constructor(e, t, n, i) {
                    super(e, t, n), this.data = i, this.hasDiagnosticCode = !1
                }
            }
            t.ProtocolDiagnostic = s
        },
        VtvQ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.DocumentLink {
                constructor(e, t) {
                    super(e, t)
                }
            }
            t.default = r
        },
        "9ANT": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.InlayHint {
                constructor(e, t, n) {
                    super(e, t, n)
                }
            }
            t.default = r
        },
        tMnT: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.TypeHierarchyItem {
                constructor(e, t, n, i, r, o, s) {
                    super(e, t, n, i, r, o), void 0 !== s && (this.data = s)
                }
            }
            t.default = r
        },
        "5M8Z": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n("Ja5U");
            class r extends i.SymbolInformation {
                constructor(e, t, n, r, o) {
                    const s = !(r instanceof i.Uri);
                    super(e, t, n, s ? r : new i.Location(r, new i.Range(0, 0, 0, 0))), this.hasRange = s, void 0 !== o && (this.data = o)
                }
            }
            t.default = r
        },
        HZS4: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReferencesFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.ReferencesRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "references").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.referencesProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideReferences: (e, t, n, i) => {
                                const o = this._client,
                                    s = (e, t, n, i) => o.sendRequest(r.ReferencesRequest.type, o.code2ProtocolConverter.asReferenceParams(e, t, n), i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asReferences(e, i)), (e => o.handleFailedRequest(r.ReferencesRequest.type, i, e, null))),
                                    a = o.middleware;
                                return a.provideReferences ? a.provideReferences(e, t, n, i, s) : s(e, t, n, i)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.ReferencesFeature = a
        },
        "l4+b": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RenameFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("l2C0"),
                s = n("wjb4"),
                a = n("MFH3");
            class c extends a.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.RenameRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, a.ensure)((0, a.ensure)(e, "textDocument"), "rename");
                    t.dynamicRegistration = !0, t.prepareSupport = !0, t.prepareSupportDefaultBehavior = r.PrepareSupportDefaultBehavior.Identifier, t.honorsChangeAnnotations = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.renameProvider);
                    n && (s.boolean(e.renameProvider) && (n.prepareProvider = !1), this.register({
                        id: o.generateUuid(),
                        registerOptions: n
                    }))
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideRenameEdits: (e, t, n, i) => {
                                const o = this._client,
                                    s = (e, t, n, i) => {
                                        let s = {
                                            textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            position: o.code2ProtocolConverter.asPosition(t),
                                            newName: n
                                        };
                                        return o.sendRequest(r.RenameRequest.type, s, i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asWorkspaceEdit(e, i)), (e => o.handleFailedRequest(r.RenameRequest.type, i, e, null, !1)))
                                    },
                                    a = o.middleware;
                                return a.provideRenameEdits ? a.provideRenameEdits(e, t, n, i, s) : s(e, t, n, i)
                            },
                            prepareRename: e.prepareProvider ? (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => {
                                        let o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            position: i.code2ProtocolConverter.asPosition(t)
                                        };
                                        return i.sendRequest(r.PrepareRenameRequest.type, o, n).then((e => n.isCancellationRequested ? null : r.Range.is(e) ? i.protocol2CodeConverter.asRange(e) : this.isDefaultBehavior(e) ? !0 === e.defaultBehavior ? null : Promise.reject(new Error("The element can't be renamed.")) : e && r.Range.is(e.range) ? {
                                            range: i.protocol2CodeConverter.asRange(e.range),
                                            placeholder: e.placeholder
                                        } : Promise.reject(new Error("The element can't be renamed."))), (e => {
                                            throw "string" == typeof e.message ? new Error(e.message) : new Error("The element can't be renamed.")
                                        }))
                                    },
                                    s = i.middleware;
                                return s.prepareRename ? s.prepareRename(e, t, n, o) : o(e, t, n)
                            } : void 0
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
                isDefaultBehavior(e) {
                    const t = e;
                    return t && s.boolean(t.defaultBehavior)
                }
            }
            t.RenameFeature = c
        },
        qLfr: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectionRangeFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.SelectionRangeRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "selectionRange").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const [n, i] = this.getRegistration(t, e.selectionRangeProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideSelectionRanges: (e, t, n) => {
                                const i = this._client,
                                    o = async (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            positions: i.code2ProtocolConverter.asPositionsSync(t, n)
                                        };
                                        return i.sendRequest(r.SelectionRangeRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asSelectionRanges(e, n)), (e => i.handleFailedRequest(r.SelectionRangeRequest.type, n, e, null)))
                                    },
                                    s = i.middleware;
                                return s.provideSelectionRanges ? s.provideSelectionRanges(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.SelectionRangeFeature = s
        },
        fyZm: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SemanticTokensFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("wjb4");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.SemanticTokensRegistrationType.type)
                }
                fillClientCapabilities(e) {
                    const t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "semanticTokens");
                    t.dynamicRegistration = !0, t.tokenTypes = [r.SemanticTokenTypes.namespace, r.SemanticTokenTypes.type, r.SemanticTokenTypes.class, r.SemanticTokenTypes.enum, r.SemanticTokenTypes.interface, r.SemanticTokenTypes.struct, r.SemanticTokenTypes.typeParameter, r.SemanticTokenTypes.parameter, r.SemanticTokenTypes.variable, r.SemanticTokenTypes.property, r.SemanticTokenTypes.enumMember, r.SemanticTokenTypes.event, r.SemanticTokenTypes.function, r.SemanticTokenTypes.method, r.SemanticTokenTypes.macro, r.SemanticTokenTypes.keyword, r.SemanticTokenTypes.modifier, r.SemanticTokenTypes.comment, r.SemanticTokenTypes.string, r.SemanticTokenTypes.number, r.SemanticTokenTypes.regexp, r.SemanticTokenTypes.operator, r.SemanticTokenTypes.decorator], t.tokenModifiers = [r.SemanticTokenModifiers.declaration, r.SemanticTokenModifiers.definition, r.SemanticTokenModifiers.readonly, r.SemanticTokenModifiers.static, r.SemanticTokenModifiers.deprecated, r.SemanticTokenModifiers.abstract, r.SemanticTokenModifiers.async, r.SemanticTokenModifiers.modification, r.SemanticTokenModifiers.documentation, r.SemanticTokenModifiers.defaultLibrary], t.formats = [r.TokenFormat.Relative], t.requests = {
                        range: !0,
                        full: {
                            delta: !0
                        }
                    }, t.multilineTokenSupport = !1, t.overlappingTokenSupport = !1, t.serverCancelSupport = !0, t.augmentsSyntaxTokens = !0, (0, o.ensure)((0, o.ensure)(e, "workspace"), "semanticTokens").refreshSupport = !0
                }
                initialize(e, t) {
                    this._client.onRequest(r.SemanticTokensRefreshRequest.type, (async () => {
                        for (const e of this.getAllProviders()) e.onDidChangeSemanticTokensEmitter.fire()
                    }));
                    const [n, i] = this.getRegistration(t, e.semanticTokensProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = s.boolean(e.full) ? e.full : void 0 !== e.full,
                        o = void 0 !== e.full && "boolean" != typeof e.full && !0 === e.full.delta,
                        a = new i.EventEmitter,
                        c = n ? {
                            onDidChangeSemanticTokens: a.event,
                            provideDocumentSemanticTokens: (e, t) => {
                                const n = this._client,
                                    i = n.middleware,
                                    o = (e, t) => {
                                        const i = {
                                            textDocument: n.code2ProtocolConverter.asTextDocumentIdentifier(e)
                                        };
                                        return n.sendRequest(r.SemanticTokensRequest.type, i, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asSemanticTokens(e, t)), (e => n.handleFailedRequest(r.SemanticTokensRequest.type, t, e, null)))
                                    };
                                return i.provideDocumentSemanticTokens ? i.provideDocumentSemanticTokens(e, t, o) : o(e, t)
                            },
                            provideDocumentSemanticTokensEdits: o ? (e, t, n) => {
                                const i = this._client,
                                    o = i.middleware,
                                    s = (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            previousResultId: t
                                        };
                                        return i.sendRequest(r.SemanticTokensDeltaRequest.type, o, n).then((async e => n.isCancellationRequested ? null : r.SemanticTokens.is(e) ? await i.protocol2CodeConverter.asSemanticTokens(e, n) : await i.protocol2CodeConverter.asSemanticTokensEdits(e, n)), (e => i.handleFailedRequest(r.SemanticTokensDeltaRequest.type, n, e, null)))
                                    };
                                return o.provideDocumentSemanticTokensEdits ? o.provideDocumentSemanticTokensEdits(e, t, n, s) : s(e, t, n)
                            } : void 0
                        } : void 0,
                        u = !0 === e.range ? {
                            provideDocumentRangeSemanticTokens: (e, t, n) => {
                                const i = this._client,
                                    o = i.middleware,
                                    s = (e, t, n) => {
                                        const o = {
                                            textDocument: i.code2ProtocolConverter.asTextDocumentIdentifier(e),
                                            range: i.code2ProtocolConverter.asRange(t)
                                        };
                                        return i.sendRequest(r.SemanticTokensRangeRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asSemanticTokens(e, n)), (e => i.handleFailedRequest(r.SemanticTokensRangeRequest.type, n, e, null)))
                                    };
                                return o.provideDocumentRangeSemanticTokens ? o.provideDocumentRangeSemanticTokens(e, t, n, s) : s(e, t, n)
                            }
                        } : void 0,
                        l = [],
                        d = this._client,
                        h = d.protocol2CodeConverter.asSemanticTokensLegend(e.legend),
                        p = d.protocol2CodeConverter.asDocumentSelector(t);
                    return void 0 !== c && l.push(i.languages.registerDocumentSemanticTokensProvider(p, c, h)), void 0 !== u && l.push(i.languages.registerDocumentRangeSemanticTokensProvider(p, u, h)), [new i.Disposable((() => l.forEach((e => e.dispose())))), {
                        range: u,
                        full: c,
                        onDidChangeSemanticTokensEmitter: a
                    }]
                }
            }
            t.SemanticTokensFeature = a
        },
        FDo1: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignatureHelpFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.SignatureHelpRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "signatureHelp");
                    t.dynamicRegistration = !0, t.signatureInformation = {
                        documentationFormat: [r.MarkupKind.Markdown, r.MarkupKind.PlainText]
                    }, t.signatureInformation.parameterInformation = {
                        labelOffsetSupport: !0
                    }, t.signatureInformation.activeParameterSupport = !0, t.contextSupport = !0
                }
                initialize(e, t) {
                    const n = this.getRegistrationOptions(t, e.signatureHelpProvider);
                    n && this.register({
                        id: s.generateUuid(),
                        registerOptions: n
                    })
                }
                registerLanguageProvider(e) {
                    const t = {
                        provideSignatureHelp: (e, t, n, i) => {
                            const o = this._client,
                                s = (e, t, n, i) => o.sendRequest(r.SignatureHelpRequest.type, o.code2ProtocolConverter.asSignatureHelpParams(e, t, n), i).then((e => i.isCancellationRequested ? null : o.protocol2CodeConverter.asSignatureHelp(e, i)), (e => o.handleFailedRequest(r.SignatureHelpRequest.type, i, e, null))),
                                a = o.middleware;
                            return a.provideSignatureHelp ? a.provideSignatureHelp(e, t, i, n, s) : s(e, t, i, n)
                        }
                    };
                    return [this.registerProvider(e, t), t]
                }
                registerProvider(e, t) {
                    const n = this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector);
                    if (void 0 === e.retriggerCharacters) {
                        const r = e.triggerCharacters || [];
                        return i.languages.registerSignatureHelpProvider(n, t, ...r)
                    } {
                        const r = {
                            triggerCharacters: e.triggerCharacters || [],
                            retriggerCharacters: e.retriggerCharacters || []
                        };
                        return i.languages.registerSignatureHelpProvider(n, t, r)
                    }
                }
            }
            t.SignatureHelpFeature = a
        },
        XlVN: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DidSaveTextDocumentFeature = t.WillSaveWaitUntilFeature = t.WillSaveFeature = t.DidChangeTextDocumentFeature = t.DidCloseTextDocumentFeature = t.DidOpenTextDocumentFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("l2C0");
            class a extends o.TextDocumentEventFeature {
                constructor(e, t) {
                    super(e, i.workspace.onDidOpenTextDocument, r.DidOpenTextDocumentNotification.type, (() => e.middleware.didOpen), (t => e.code2ProtocolConverter.asOpenTextDocumentParams(t)), (e => e), o.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t
                }
                get openDocuments() {
                    return this._syncedDocuments.values()
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const n = e.resolvedTextDocumentSync;
                    t && n && n.openClose && this.register({
                        id: s.generateUuid(),
                        registerOptions: {
                            documentSelector: t
                        }
                    })
                }
                get registrationType() {
                    return r.DidOpenTextDocumentNotification.type
                }
                register(e) {
                    if (super.register(e), !e.registerOptions.documentSelector) return;
                    const t = this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector);
                    i.workspace.textDocuments.forEach((e => {
                        const n = e.uri.toString();
                        if (!this._syncedDocuments.has(n) && i.languages.match(t, e) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(e)) {
                            const t = this._client.middleware,
                                i = e => this._client.sendNotification(this._type, this._createParams(e));
                            (t.didOpen ? t.didOpen(e, i) : i(e)).catch((e => {
                                this._client.error(`Sending document notification ${this._type.method} failed`, e)
                            })), this._syncedDocuments.set(n, e)
                        }
                    }))
                }
                getTextDocument(e) {
                    return e
                }
                notificationSent(e, t, n) {
                    this._syncedDocuments.set(e.uri.toString(), e), super.notificationSent(e, t, n)
                }
            }
            t.DidOpenTextDocumentFeature = a;
            class c extends o.TextDocumentEventFeature {
                constructor(e, t, n) {
                    super(e, i.workspace.onDidCloseTextDocument, r.DidCloseTextDocumentNotification.type, (() => e.middleware.didClose), (t => e.code2ProtocolConverter.asCloseTextDocumentParams(t)), (e => e), o.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingTextDocumentChanges = n
                }
                get registrationType() {
                    return r.DidCloseTextDocumentNotification.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = !0
                }
                initialize(e, t) {
                    let n = e.resolvedTextDocumentSync;
                    t && n && n.openClose && this.register({
                        id: s.generateUuid(),
                        registerOptions: {
                            documentSelector: t
                        }
                    })
                }
                async callback(e) {
                    await super.callback(e), this._pendingTextDocumentChanges.delete(e.uri.toString())
                }
                getTextDocument(e) {
                    return e
                }
                notificationSent(e, t, n) {
                    this._syncedDocuments.delete(e.uri.toString()), super.notificationSent(e, t, n)
                }
                unregister(e) {
                    const t = this._selectors.get(e);
                    super.unregister(e);
                    const n = this._selectors.values();
                    this._syncedDocuments.forEach((e => {
                        if (i.languages.match(t, e) > 0 && !this._selectorFilter(n, e) && !this._client.hasDedicatedTextSynchronizationFeature(e)) {
                            let t = this._client.middleware,
                                n = e => this._client.sendNotification(this._type, this._createParams(e));
                            this._syncedDocuments.delete(e.uri.toString()), (t.didClose ? t.didClose(e, n) : n(e)).catch((e => {
                                this._client.error(`Sending document notification ${this._type.method} failed`, e)
                            }))
                        }
                    }))
                }
            }
            t.DidCloseTextDocumentFeature = c;
            class u extends o.DynamicDocumentFeature {
                constructor(e, t) {
                    super(e), this._changeData = new Map, this._onNotificationSent = new i.EventEmitter, this._onPendingChangeAdded = new i.EventEmitter, this._pendingTextDocumentChanges = t, this._syncKind = r.TextDocumentSyncKind.None
                }
                get onNotificationSent() {
                    return this._onNotificationSent.event
                }
                get onPendingChangeAdded() {
                    return this._onPendingChangeAdded.event
                }
                get syncKind() {
                    return this._syncKind
                }
                get registrationType() {
                    return r.DidChangeTextDocumentNotification.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = !0
                }
                initialize(e, t) {
                    let n = e.resolvedTextDocumentSync;
                    t && n && void 0 !== n.change && n.change !== r.TextDocumentSyncKind.None && this.register({
                        id: s.generateUuid(),
                        registerOptions: Object.assign({}, {
                            documentSelector: t
                        }, {
                            syncKind: n.change
                        })
                    })
                }
                register(e) {
                    e.registerOptions.documentSelector && (this._listener || (this._listener = i.workspace.onDidChangeTextDocument(this.callback, this)), this._changeData.set(e.id, {
                        syncKind: e.registerOptions.syncKind,
                        documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)
                    }), this.updateSyncKind(e.registerOptions.syncKind))
                }* getDocumentSelectors() {
                    for (const e of this._changeData.values()) yield e.documentSelector
                }
                async callback(e) {
                    if (0 === e.contentChanges.length) return;
                    const t = e.document.uri,
                        n = e.document.version,
                        o = [];
                    for (const s of this._changeData.values())
                        if (i.languages.match(s.documentSelector, e.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
                            const i = this._client.middleware;
                            if (s.syncKind === r.TextDocumentSyncKind.Incremental) {
                                const s = async e => {
                                    const i = this._client.code2ProtocolConverter.asChangeTextDocumentParams(e, t, n);
                                    await this._client.sendNotification(r.DidChangeTextDocumentNotification.type, i), this.notificationSent(e.document, r.DidChangeTextDocumentNotification.type, i)
                                };
                                o.push(i.didChange ? i.didChange(e, (e => s(e))) : s(e))
                            } else if (s.syncKind === r.TextDocumentSyncKind.Full) {
                                const t = async e => {
                                    const t = e.document.uri.toString();
                                    this._pendingTextDocumentChanges.set(t, e.document), this._onPendingChangeAdded.fire()
                                };
                                o.push(i.didChange ? i.didChange(e, (e => t(e))) : t(e))
                            }
                        }
                    return Promise.all(o).then(void 0, (e => {
                        throw this._client.error(`Sending document notification ${r.DidChangeTextDocumentNotification.type.method} failed`, e), e
                    }))
                }
                notificationSent(e, t, n) {
                    this._onNotificationSent.fire({
                        textDocument: e,
                        type: t,
                        params: n
                    })
                }
                unregister(e) {
                    if (this._changeData.delete(e), 0 === this._changeData.size) this._listener && (this._listener.dispose(), this._listener = void 0), this._syncKind = r.TextDocumentSyncKind.None;
                    else {
                        this._syncKind = r.TextDocumentSyncKind.None;
                        for (const e of this._changeData.values())
                            if (this.updateSyncKind(e.syncKind), this._syncKind === r.TextDocumentSyncKind.Full) break
                    }
                }
                clear() {
                    this._pendingTextDocumentChanges.clear(), this._changeData.clear(), this._syncKind = r.TextDocumentSyncKind.None, this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                getPendingDocumentChanges(e) {
                    if (0 === this._pendingTextDocumentChanges.size) return [];
                    let t;
                    if (0 === e.size) t = Array.from(this._pendingTextDocumentChanges.values()), this._pendingTextDocumentChanges.clear();
                    else {
                        t = [];
                        for (const n of this._pendingTextDocumentChanges) e.has(n[0]) || (t.push(n[1]), this._pendingTextDocumentChanges.delete(n[0]))
                    }
                    return t
                }
                getProvider(e) {
                    for (const t of this._changeData.values())
                        if (i.languages.match(t.documentSelector, e) > 0) return {
                            send: e => this.callback(e)
                        }
                }
                updateSyncKind(e) {
                    if (this._syncKind !== r.TextDocumentSyncKind.Full) switch (e) {
                        case r.TextDocumentSyncKind.Full:
                            this._syncKind = e;
                            break;
                        case r.TextDocumentSyncKind.Incremental:
                            this._syncKind === r.TextDocumentSyncKind.None && (this._syncKind = r.TextDocumentSyncKind.Incremental)
                    }
                }
            }
            t.DidChangeTextDocumentFeature = u;
            class l extends o.TextDocumentEventFeature {
                constructor(e) {
                    super(e, i.workspace.onWillSaveTextDocument, r.WillSaveTextDocumentNotification.type, (() => e.middleware.willSave), (t => e.code2ProtocolConverter.asWillSaveTextDocumentParams(t)), (e => e.document), ((e, t) => o.TextDocumentEventFeature.textDocumentFilter(e, t.document)))
                }
                get registrationType() {
                    return r.WillSaveTextDocumentNotification.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").willSave = !0
                }
                initialize(e, t) {
                    let n = e.resolvedTextDocumentSync;
                    t && n && n.willSave && this.register({
                        id: s.generateUuid(),
                        registerOptions: {
                            documentSelector: t
                        }
                    })
                }
                getTextDocument(e) {
                    return e.document
                }
            }
            t.WillSaveFeature = l;
            class d extends o.DynamicDocumentFeature {
                constructor(e) {
                    super(e), this._selectors = new Map
                }
                getDocumentSelectors() {
                    return this._selectors.values()
                }
                get registrationType() {
                    return r.WillSaveTextDocumentWaitUntilRequest.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").willSaveWaitUntil = !0
                }
                initialize(e, t) {
                    let n = e.resolvedTextDocumentSync;
                    t && n && n.willSaveWaitUntil && this.register({
                        id: s.generateUuid(),
                        registerOptions: {
                            documentSelector: t
                        }
                    })
                }
                register(e) {
                    e.registerOptions.documentSelector && (this._listener || (this._listener = i.workspace.onWillSaveTextDocument(this.callback, this)), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)))
                }
                callback(e) {
                    if (o.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), e.document) && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
                        let t = this._client.middleware,
                            n = e => this._client.sendRequest(r.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(e)).then((async e => {
                                let t = await this._client.protocol2CodeConverter.asTextEdits(e);
                                return void 0 === t ? [] : t
                            }));
                        e.waitUntil(t.willSaveWaitUntil ? t.willSaveWaitUntil(e, n) : n(e))
                    }
                }
                unregister(e) {
                    this._selectors.delete(e), 0 === this._selectors.size && this._listener && (this._listener.dispose(), this._listener = void 0)
                }
                clear() {
                    this._selectors.clear(), this._listener && (this._listener.dispose(), this._listener = void 0)
                }
            }
            t.WillSaveWaitUntilFeature = d;
            class h extends o.TextDocumentEventFeature {
                constructor(e) {
                    super(e, i.workspace.onDidSaveTextDocument, r.DidSaveTextDocumentNotification.type, (() => e.middleware.didSave), (t => e.code2ProtocolConverter.asSaveTextDocumentParams(t, this._includeText)), (e => e), o.TextDocumentEventFeature.textDocumentFilter), this._includeText = !1
                }
                get registrationType() {
                    return r.DidSaveTextDocumentNotification.type
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "synchronization").didSave = !0
                }
                initialize(e, t) {
                    const n = e.resolvedTextDocumentSync;
                    if (t && n && n.save) {
                        const e = "boolean" == typeof n.save ? {
                            includeText: !1
                        } : {
                            includeText: !!n.save.includeText
                        };
                        this.register({
                            id: s.generateUuid(),
                            registerOptions: Object.assign({}, {
                                documentSelector: t
                            }, e)
                        })
                    }
                }
                register(e) {
                    this._includeText = !!e.registerOptions.includeText, super.register(e)
                }
                getTextDocument(e) {
                    return e
                }
            }
            t.DidSaveTextDocumentFeature = h
        },
        t5Ol: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeDefinitionFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.TypeDefinitionRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "typeDefinition").dynamicRegistration = !0;
                    let t = (0, o.ensure)((0, o.ensure)(e, "textDocument"), "typeDefinition");
                    t.dynamicRegistration = !0, t.linkSupport = !0
                }
                initialize(e, t) {
                    let [n, i] = this.getRegistration(t, e.typeDefinitionProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = e.documentSelector,
                        n = {
                            provideTypeDefinition: (e, t, n) => {
                                const i = this._client,
                                    o = (e, t, n) => i.sendRequest(r.TypeDefinitionRequest.type, i.code2ProtocolConverter.asTextDocumentPositionParams(e, t), n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asDefinitionResult(e, n)), (e => i.handleFailedRequest(r.TypeDefinitionRequest.type, n, e, null))),
                                    s = i.middleware;
                                return s.provideTypeDefinition ? s.provideTypeDefinition(e, t, n, o) : o(e, t, n)
                            }
                        };
                    return [this.registerProvider(t, n), n]
                }
                registerProvider(e, t) {
                    return i.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t)
                }
            }
            t.TypeDefinitionFeature = s
        },
        N72P: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeHierarchyFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3");
            class s {
                constructor(e) {
                    this.client = e, this.middleware = e.middleware
                }
                prepareTypeHierarchy(e, t, n) {
                    const i = this.client,
                        o = this.middleware,
                        s = (e, t, n) => {
                            const o = i.code2ProtocolConverter.asTextDocumentPositionParams(e, t);
                            return i.sendRequest(r.TypeHierarchyPrepareRequest.type, o, n).then((e => n.isCancellationRequested ? null : i.protocol2CodeConverter.asTypeHierarchyItems(e, n)), (e => i.handleFailedRequest(r.TypeHierarchyPrepareRequest.type, n, e, null)))
                        };
                    return o.prepareTypeHierarchy ? o.prepareTypeHierarchy(e, t, n, s) : s(e, t, n)
                }
                provideTypeHierarchySupertypes(e, t) {
                    const n = this.client,
                        i = this.middleware,
                        o = (e, t) => {
                            const i = {
                                item: n.code2ProtocolConverter.asTypeHierarchyItem(e)
                            };
                            return n.sendRequest(r.TypeHierarchySupertypesRequest.type, i, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asTypeHierarchyItems(e, t)), (e => n.handleFailedRequest(r.TypeHierarchySupertypesRequest.type, t, e, null)))
                        };
                    return i.provideTypeHierarchySupertypes ? i.provideTypeHierarchySupertypes(e, t, o) : o(e, t)
                }
                provideTypeHierarchySubtypes(e, t) {
                    const n = this.client,
                        i = this.middleware,
                        o = (e, t) => {
                            const i = {
                                item: n.code2ProtocolConverter.asTypeHierarchyItem(e)
                            };
                            return n.sendRequest(r.TypeHierarchySubtypesRequest.type, i, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asTypeHierarchyItems(e, t)), (e => n.handleFailedRequest(r.TypeHierarchySubtypesRequest.type, t, e, null)))
                        };
                    return i.provideTypeHierarchySubtypes ? i.provideTypeHierarchySubtypes(e, t, o) : o(e, t)
                }
            }
            class a extends o.TextDocumentLanguageFeature {
                constructor(e) {
                    super(e, r.TypeHierarchyPrepareRequest.type)
                }
                fillClientCapabilities(e) {
                    (0, o.ensure)((0, o.ensure)(e, "textDocument"), "typeHierarchy").dynamicRegistration = !0
                }
                initialize(e, t) {
                    const [n, i] = this.getRegistration(t, e.typeHierarchyProvider);
                    n && i && this.register({
                        id: n,
                        registerOptions: i
                    })
                }
                registerLanguageProvider(e) {
                    const t = this._client,
                        n = new s(t);
                    return [i.languages.registerTypeHierarchyProvider(t.protocol2CodeConverter.asDocumentSelector(e.documentSelector), n), n]
                }
            }
            t.TypeHierarchyFeature = a
        },
        F4kK: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.forEach = t.mapAsync = t.map = t.clearTestMode = t.setTestMode = t.Semaphore = t.Delayer = void 0;
            const i = n("fozD");
            t.Delayer = class {
                constructor(e) {
                    this.defaultDelay = e, this.timeout = void 0, this.completionPromise = void 0, this.onSuccess = void 0, this.task = void 0
                }
                trigger(e, t = this.defaultDelay) {
                    return this.task = e, t >= 0 && this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((e => {
                        this.onSuccess = e
                    })).then((() => {
                        this.completionPromise = void 0, this.onSuccess = void 0;
                        var e = this.task();
                        return this.task = void 0, e
                    }))), (t >= 0 || void 0 === this.timeout) && (this.timeout = (0, i.RAL)().timer.setTimeout((() => {
                        this.timeout = void 0, this.onSuccess(void 0)
                    }), t >= 0 ? t : this.defaultDelay)), this.completionPromise
                }
                forceDelivery() {
                    if (!this.completionPromise) return;
                    this.cancelTimeout();
                    let e = this.task();
                    return this.completionPromise = void 0, this.onSuccess = void 0, this.task = void 0, e
                }
                isTriggered() {
                    return void 0 !== this.timeout
                }
                cancel() {
                    this.cancelTimeout(), this.completionPromise = void 0
                }
                cancelTimeout() {
                    void 0 !== this.timeout && (this.timeout.dispose(), this.timeout = void 0)
                }
            }, t.Semaphore = class {
                constructor(e = 1) {
                    if (e <= 0) throw new Error("Capacity must be greater than 0");
                    this._capacity = e, this._active = 0, this._waiting = []
                }
                lock(e) {
                    return new Promise(((t, n) => {
                        this._waiting.push({
                            thunk: e,
                            resolve: t,
                            reject: n
                        }), this.runNext()
                    }))
                }
                get active() {
                    return this._active
                }
                runNext() {
                    0 !== this._waiting.length && this._active !== this._capacity && (0, i.RAL)().timer.setImmediate((() => this.doRunNext()))
                }
                doRunNext() {
                    if (0 === this._waiting.length || this._active === this._capacity) return;
                    const e = this._waiting.shift();
                    if (this._active++, this._active > this._capacity) throw new Error("To many thunks active");
                    try {
                        const t = e.thunk();
                        t instanceof Promise ? t.then((t => {
                            this._active--, e.resolve(t), this.runNext()
                        }), (t => {
                            this._active--, e.reject(t), this.runNext()
                        })) : (this._active--, e.resolve(t), this.runNext())
                    } catch (t) {
                        this._active--, e.reject(t), this.runNext()
                    }
                }
            };
            let r = !1;
            t.setTestMode = function() {
                r = !0
            }, t.clearTestMode = function() {
                r = !1
            };
            class o {
                constructor(e = 15) {
                    this.yieldAfter = !0 === r ? Math.max(e, 2) : Math.max(e, 15), this.startTime = Date.now(), this.counter = 0, this.total = 0, this.counterInterval = 1
                }
                start() {
                    this.counter = 0, this.total = 0, this.counterInterval = 1, this.startTime = Date.now()
                }
                shouldYield() {
                    if (++this.counter >= this.counterInterval) {
                        const e = Date.now() - this.startTime,
                            t = Math.max(0, this.yieldAfter - e);
                        if (this.total += this.counter, this.counter = 0, e >= this.yieldAfter || t <= 1) return this.counterInterval = 1, this.total = 0, !0;
                        switch (e) {
                            case 0:
                            case 1:
                                this.counterInterval = 2 * this.total
                        }
                    }
                    return !1
                }
            }
            t.map = async function(e, t, n, r) {
                if (0 === e.length) return [];
                const s = new Array(e.length),
                    a = new o(r ? .yieldAfter);

                function c(n) {
                    a.start();
                    for (let i = n; i < e.length; i++)
                        if (s[i] = t(e[i]), a.shouldYield()) return r ? .yieldCallback && r.yieldCallback(), i + 1;
                    return -1
                }
                let u = c(0);
                for (; - 1 !== u && (void 0 === n || !n.isCancellationRequested);) u = await new Promise((e => {
                    (0, i.RAL)().timer.setImmediate((() => {
                        e(c(u))
                    }))
                }));
                return s
            }, t.mapAsync = async function(e, t, n, r) {
                if (0 === e.length) return [];
                const s = new Array(e.length),
                    a = new o(r ? .yieldAfter);
                async function c(i) {
                    a.start();
                    for (let o = i; o < e.length; o++)
                        if (s[o] = await t(e[o], n), a.shouldYield()) return r ? .yieldCallback && r.yieldCallback(), o + 1;
                    return -1
                }
                let u = await c(0);
                for (; - 1 !== u && (void 0 === n || !n.isCancellationRequested);) u = await new Promise((e => {
                    (0, i.RAL)().timer.setImmediate((() => {
                        e(c(u))
                    }))
                }));
                return s
            }, t.forEach = async function(e, t, n, r) {
                if (0 === e.length) return;
                const s = new o(r ? .yieldAfter);

                function a(n) {
                    s.start();
                    for (let i = n; i < e.length; i++)
                        if (t(e[i]), s.shouldYield()) return r ? .yieldCallback && r.yieldCallback(), i + 1;
                    return -1
                }
                let c = a(0);
                for (; - 1 !== c && (void 0 === n || !n.isCancellationRequested);) c = await new Promise((e => {
                    (0, i.RAL)().timer.setImmediate((() => {
                        e(a(c))
                    }))
                }))
            }
        },
        wjb4: (e, t) => {
            "use strict";

            function n(e) {
                return "string" == typeof e || e instanceof String
            }

            function i(e) {
                return "function" == typeof e
            }

            function r(e) {
                return Array.isArray(e)
            }

            function o(e) {
                return e && i(e.then)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.asPromise = t.thenable = t.typedArray = t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0, t.boolean = function(e) {
                return !0 === e || !1 === e
            }, t.string = n, t.number = function(e) {
                return "number" == typeof e || e instanceof Number
            }, t.error = function(e) {
                return e instanceof Error
            }, t.func = i, t.array = r, t.stringArray = function(e) {
                return r(e) && e.every((e => n(e)))
            }, t.typedArray = function(e, t) {
                return Array.isArray(e) && e.every(t)
            }, t.thenable = o, t.asPromise = function(e) {
                return e instanceof Promise ? e : o(e) ? new Promise(((t, n) => {
                    e.then((e => t(e)), (e => n(e)))
                })) : Promise.resolve(e)
            }
        },
        l2C0: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateUuid = t.parse = t.isUUID = t.v4 = t.empty = void 0;
            class n {
                constructor(e) {
                    this._value = e
                }
                asHex() {
                    return this._value
                }
                equals(e) {
                    return this.asHex() === e.asHex()
                }
            }
            class i extends n {
                static _oneOf(e) {
                    return e[Math.floor(e.length * Math.random())]
                }
                static _randomHex() {
                    return i._oneOf(i._chars)
                }
                constructor() {
                    super([i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", "4", i._randomHex(), i._randomHex(), i._randomHex(), "-", i._oneOf(i._timeHighBits), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex()].join(""))
                }
            }

            function r() {
                return new i
            }
            i._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], i._timeHighBits = ["8", "9", "a", "b"], t.empty = new n("00000000-0000-0000-0000-000000000000"), t.v4 = r;
            const o = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

            function s(e) {
                return o.test(e)
            }
            t.isUUID = s, t.parse = function(e) {
                if (!s(e)) throw new Error("invalid uuid");
                return new n(e)
            }, t.generateUuid = function() {
                return r().asHex()
            }
        },
        Z30C: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkspaceFoldersFeature = t.arrayDiff = void 0;
            const i = n("l2C0"),
                r = n("Ja5U"),
                o = n("fozD");

            function s(e, t) {
                if (null != e) return e[t]
            }

            function a(e, t) {
                return e.filter((e => t.indexOf(e) < 0))
            }
            t.arrayDiff = a, t.WorkspaceFoldersFeature = class {
                constructor(e) {
                    this._client = e, this._listeners = new Map
                }
                getState() {
                    return {
                        kind: "workspace",
                        id: this.registrationType.method,
                        registrations: this._listeners.size > 0
                    }
                }
                get registrationType() {
                    return o.DidChangeWorkspaceFoldersNotification.type
                }
                fillInitializeParams(e) {
                    const t = r.workspace.workspaceFolders;
                    this.initializeWithFolders(t), e.workspaceFolders = void 0 === t ? null : t.map((e => this.asProtocol(e)))
                }
                initializeWithFolders(e) {
                    this._initialFolders = e
                }
                fillClientCapabilities(e) {
                    e.workspace = e.workspace || {}, e.workspace.workspaceFolders = !0
                }
                initialize(e) {
                    const t = this._client;
                    t.onRequest(o.WorkspaceFoldersRequest.type, (e => {
                        const n = () => {
                                const e = r.workspace.workspaceFolders;
                                return void 0 === e ? null : e.map((e => this.asProtocol(e)))
                            },
                            i = t.middleware.workspace;
                        return i && i.workspaceFolders ? i.workspaceFolders(e, n) : n()
                    }));
                    const n = s(s(s(e, "workspace"), "workspaceFolders"), "changeNotifications");
                    let a;
                    "string" == typeof n ? a = n : !0 === n && (a = i.generateUuid()), a && this.register({
                        id: a,
                        registerOptions: void 0
                    })
                }
                sendInitialEvent(e) {
                    let t;
                    if (this._initialFolders && e) {
                        const n = a(this._initialFolders, e),
                            i = a(e, this._initialFolders);
                        (i.length > 0 || n.length > 0) && (t = this.doSendEvent(i, n))
                    } else this._initialFolders ? t = this.doSendEvent([], this._initialFolders) : e && (t = this.doSendEvent(e, []));
                    void 0 !== t && t.catch((e => {
                        this._client.error(`Sending notification ${o.DidChangeWorkspaceFoldersNotification.type.method} failed`, e)
                    }))
                }
                doSendEvent(e, t) {
                    let n = {
                        event: {
                            added: e.map((e => this.asProtocol(e))),
                            removed: t.map((e => this.asProtocol(e)))
                        }
                    };
                    return this._client.sendNotification(o.DidChangeWorkspaceFoldersNotification.type, n)
                }
                register(e) {
                    let t = e.id,
                        n = this._client,
                        i = r.workspace.onDidChangeWorkspaceFolders((e => {
                            let t = e => this.doSendEvent(e.added, e.removed),
                                i = n.middleware.workspace;
                            (i && i.didChangeWorkspaceFolders ? i.didChangeWorkspaceFolders(e, t) : t(e)).catch((e => {
                                this._client.error(`Sending notification ${o.DidChangeWorkspaceFoldersNotification.type.method} failed`, e)
                            }))
                        }));
                    this._listeners.set(t, i), this.sendInitialEvent(r.workspace.workspaceFolders)
                }
                unregister(e) {
                    let t = this._listeners.get(e);
                    void 0 !== t && (this._listeners.delete(e), t.dispose())
                }
                clear() {
                    for (let e of this._listeners.values()) e.dispose();
                    this._listeners.clear()
                }
                asProtocol(e) {
                    return void 0 === e ? null : {
                        uri: this._client.code2ProtocolConverter.asUri(e.uri),
                        name: e.name
                    }
                }
            }
        },
        BZAB: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkspaceSymbolFeature = void 0;
            const i = n("Ja5U"),
                r = n("fozD"),
                o = n("MFH3"),
                s = n("WDb7"),
                a = n("l2C0");
            class c extends o.WorkspaceFeature {
                constructor(e) {
                    super(e, r.WorkspaceSymbolRequest.type)
                }
                fillClientCapabilities(e) {
                    let t = (0, o.ensure)((0, o.ensure)(e, "workspace"), "symbol");
                    t.dynamicRegistration = !0, t.symbolKind = {
                        valueSet: s.SupportedSymbolKinds
                    }, t.tagSupport = {
                        valueSet: s.SupportedSymbolTags
                    }, t.resolveSupport = {
                        properties: ["location.range"]
                    }
                }
                initialize(e) {
                    e.workspaceSymbolProvider && this.register({
                        id: a.generateUuid(),
                        registerOptions: !0 === e.workspaceSymbolProvider ? {
                            workDoneProgress: !1
                        } : e.workspaceSymbolProvider
                    })
                }
                registerLanguageProvider(e) {
                    const t = {
                        provideWorkspaceSymbols: (e, t) => {
                            const n = this._client,
                                i = (e, t) => n.sendRequest(r.WorkspaceSymbolRequest.type, {
                                    query: e
                                }, t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asSymbolInformations(e, t)), (e => n.handleFailedRequest(r.WorkspaceSymbolRequest.type, t, e, null))),
                                o = n.middleware;
                            return o.provideWorkspaceSymbols ? o.provideWorkspaceSymbols(e, t, i) : i(e, t)
                        },
                        resolveWorkspaceSymbol: !0 === e.resolveProvider ? (e, t) => {
                            const n = this._client,
                                i = (e, t) => n.sendRequest(r.WorkspaceSymbolResolveRequest.type, n.code2ProtocolConverter.asWorkspaceSymbol(e), t).then((e => t.isCancellationRequested ? null : n.protocol2CodeConverter.asSymbolInformation(e)), (e => n.handleFailedRequest(r.WorkspaceSymbolResolveRequest.type, t, e, null))),
                                o = n.middleware;
                            return o.resolveWorkspaceSymbol ? o.resolveWorkspaceSymbol(e, t, i) : i(e, t)
                        } : void 0
                    };
                    return [i.languages.registerWorkspaceSymbolProvider(t), t]
                }
            }
            t.WorkspaceSymbolFeature = c
        },
        i3i9: (e, t, n) => {
            var i = n("kbA8");
            e.exports = function(e) {
                return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), f(function(e) {
                    return e.split("\\\\").join(r).split("\\{").join(o).split("\\}").join(s).split("\\,").join(a).split("\\.").join(c)
                }(e), !0).map(l)) : []
            };
            var r = "\0SLASH" + Math.random() + "\0",
                o = "\0OPEN" + Math.random() + "\0",
                s = "\0CLOSE" + Math.random() + "\0",
                a = "\0COMMA" + Math.random() + "\0",
                c = "\0PERIOD" + Math.random() + "\0";

            function u(e) {
                return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0)
            }

            function l(e) {
                return e.split(r).join("\\").split(o).join("{").split(s).join("}").split(a).join(",").split(c).join(".")
            }

            function d(e) {
                if (!e) return [""];
                var t = [],
                    n = i("{", "}", e);
                if (!n) return e.split(",");
                var r = n.pre,
                    o = n.body,
                    s = n.post,
                    a = r.split(",");
                a[a.length - 1] += "{" + o + "}";
                var c = d(s);
                return s.length && (a[a.length - 1] += c.shift(), a.push.apply(a, c)), t.push.apply(t, a), t
            }

            function h(e) {
                return "{" + e + "}"
            }

            function p(e) {
                return /^-?0\d/.test(e)
            }

            function g(e, t) {
                return e <= t
            }

            function m(e, t) {
                return e >= t
            }

            function f(e, t) {
                var n = [],
                    r = i("{", "}", e);
                if (!r) return [e];
                var o = r.pre,
                    a = r.post.length ? f(r.post, !1) : [""];
                if (/\$$/.test(r.pre))
                    for (var c = 0; c < a.length; c++) {
                        var l = o + "{" + r.body + "}" + a[c];
                        n.push(l)
                    } else {
                        var y, v, C = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body),
                            b = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body),
                            D = C || b,
                            R = r.body.indexOf(",") >= 0;
                        if (!D && !R) return r.post.match(/,.*\}/) ? f(e = r.pre + "{" + r.body + s + r.post) : [e];
                        if (D) y = r.body.split(/\.\./);
                        else if (1 === (y = d(r.body)).length && 1 === (y = f(y[0], !1).map(h)).length) return a.map((function(e) {
                            return r.pre + y[0] + e
                        }));
                        if (D) {
                            var _ = u(y[0]),
                                w = u(y[1]),
                                T = Math.max(y[0].length, y[1].length),
                                S = 3 == y.length ? Math.abs(u(y[2])) : 1,
                                k = g;
                            w < _ && (S *= -1, k = m);
                            var P = y.some(p);
                            v = [];
                            for (var x = _; k(x, w); x += S) {
                                var E;
                                if (b) "\\" === (E = String.fromCharCode(x)) && (E = "");
                                else if (E = String(x), P) {
                                    var O = T - E.length;
                                    if (O > 0) {
                                        var q = new Array(O + 1).join("0");
                                        E = x < 0 ? "-" + q + E.slice(1) : q + E
                                    }
                                }
                                v.push(E)
                            }
                        } else {
                            v = [];
                            for (var M = 0; M < y.length; M++) v.push.apply(v, f(y[M], !1))
                        }
                        for (M = 0; M < v.length; M++)
                            for (c = 0; c < a.length; c++) l = o + v[M] + a[c], (!t || D || l) && n.push(l)
                    }
                return n
            }
        },
        "hG/F": (e, t, n) => {
            var i = n("8oxB");
            const r = "object" == typeof i && i && "win32" === i.platform;
            e.exports = r ? {
                sep: "\\"
            } : {
                sep: "/"
            }
        },
        "7khD": (e, t, n) => {
            var i = n("ziTh");
            const r = e.exports = (e, t, n = {}) => (y(t), !(!n.nocomment && "#" === t.charAt(0)) && new C(t, n).match(e));
            e.exports = r;
            const o = n("hG/F");
            r.sep = o.sep;
            const s = Symbol("globstar **");
            r.GLOBSTAR = s;
            const a = n("i3i9"),
                c = {
                    "!": {
                        open: "(?:(?!(?:",
                        close: "))[^/]*?)"
                    },
                    "?": {
                        open: "(?:",
                        close: ")?"
                    },
                    "+": {
                        open: "(?:",
                        close: ")+"
                    },
                    "*": {
                        open: "(?:",
                        close: ")*"
                    },
                    "@": {
                        open: "(?:",
                        close: ")"
                    }
                },
                u = "[^/]",
                l = u + "*?",
                d = e => e.split("").reduce(((e, t) => (e[t] = !0, e)), {}),
                h = d("().*{}+?[]^$\\!"),
                p = d("[.("),
                g = /\/+/;
            r.filter = (e, t = {}) => (n, i, o) => r(n, e, t);
            const m = (e, t = {}) => {
                const n = {};
                return Object.keys(e).forEach((t => n[t] = e[t])), Object.keys(t).forEach((e => n[e] = t[e])), n
            };
            r.defaults = e => {
                if (!e || "object" != typeof e || !Object.keys(e).length) return r;
                const t = r,
                    n = (n, i, r) => t(n, i, m(e, r));
                return (n.Minimatch = class extends t.Minimatch {
                    constructor(t, n) {
                        super(t, m(e, n))
                    }
                }).defaults = n => t.defaults(m(e, n)).Minimatch, n.filter = (n, i) => t.filter(n, m(e, i)), n.defaults = n => t.defaults(m(e, n)), n.makeRe = (n, i) => t.makeRe(n, m(e, i)), n.braceExpand = (n, i) => t.braceExpand(n, m(e, i)), n.match = (n, i, r) => t.match(n, i, m(e, r)), n
            }, r.braceExpand = (e, t) => f(e, t);
            const f = (e, t = {}) => (y(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : a(e)),
                y = e => {
                    if ("string" != typeof e) throw new TypeError("invalid pattern");
                    if (e.length > 65536) throw new TypeError("pattern is too long")
                },
                v = Symbol("subparse");
            r.makeRe = (e, t) => new C(e, t || {}).makeRe(), r.match = (e, t, n = {}) => {
                const i = new C(t, n);
                return e = e.filter((e => i.match(e))), i.options.nonull && !e.length && e.push(t), e
            };
            class C {
                constructor(e, t) {
                    y(e), t || (t = {}), this.options = t, this.set = [], this.pattern = e, this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.make()
                }
                debug() {}
                make() {
                    const e = this.pattern,
                        t = this.options;
                    if (!t.nocomment && "#" === e.charAt(0)) return void(this.comment = !0);
                    if (!e) return void(this.empty = !0);
                    this.parseNegate();
                    let n = this.globSet = this.braceExpand();
                    t.debug && (this.debug = (...e) => i.error(...e)), this.debug(this.pattern, n), n = this.globParts = n.map((e => e.split(g))), this.debug(this.pattern, n), n = n.map(((e, t, n) => e.map(this.parse, this))), this.debug(this.pattern, n), n = n.filter((e => -1 === e.indexOf(!1))), this.debug(this.pattern, n), this.set = n
                }
                parseNegate() {
                    if (this.options.nonegate) return;
                    const e = this.pattern;
                    let t = !1,
                        n = 0;
                    for (let i = 0; i < e.length && "!" === e.charAt(i); i++) t = !t, n++;
                    n && (this.pattern = e.slice(n)), this.negate = t
                }
                matchOne(e, t, n) {
                    var i = this.options;
                    this.debug("matchOne", {
                        this: this,
                        file: e,
                        pattern: t
                    }), this.debug("matchOne", e.length, t.length);
                    for (var r = 0, o = 0, a = e.length, c = t.length; r < a && o < c; r++, o++) {
                        this.debug("matchOne loop");
                        var u, l = t[o],
                            d = e[r];
                        if (this.debug(t, l, d), !1 === l) return !1;
                        if (l === s) {
                            this.debug("GLOBSTAR", [t, l, d]);
                            var h = r,
                                p = o + 1;
                            if (p === c) {
                                for (this.debug("** at the end"); r < a; r++)
                                    if ("." === e[r] || ".." === e[r] || !i.dot && "." === e[r].charAt(0)) return !1;
                                return !0
                            }
                            for (; h < a;) {
                                var g = e[h];
                                if (this.debug("\nglobstar while", e, h, t, p, g), this.matchOne(e.slice(h), t.slice(p), n)) return this.debug("globstar found match!", h, a, g), !0;
                                if ("." === g || ".." === g || !i.dot && "." === g.charAt(0)) {
                                    this.debug("dot detected!", e, h, t, p);
                                    break
                                }
                                this.debug("globstar swallow a segment, and continue"), h++
                            }
                            return !(!n || (this.debug("\n>>> no match, partial?", e, h, t, p), h !== a))
                        }
                        if ("string" == typeof l ? (u = d === l, this.debug("string match", l, d, u)) : (u = d.match(l), this.debug("pattern match", l, d, u)), !u) return !1
                    }
                    if (r === a && o === c) return !0;
                    if (r === a) return n;
                    if (o === c) return r === a - 1 && "" === e[r];
                    throw new Error("wtf?")
                }
                braceExpand() {
                    return f(this.pattern, this.options)
                }
                parse(e, t) {
                    y(e);
                    const n = this.options;
                    if ("**" === e) {
                        if (!n.noglobstar) return s;
                        e = "*"
                    }
                    if ("" === e) return "";
                    let i = "",
                        r = !1,
                        o = !1;
                    const a = [],
                        d = [];
                    let g, m, f, C, b = !1,
                        D = -1,
                        R = -1,
                        _ = "." === e.charAt(0),
                        w = n.dot || _;
                    const T = e => "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)",
                        S = () => {
                            if (g) {
                                switch (g) {
                                    case "*":
                                        i += l, r = !0;
                                        break;
                                    case "?":
                                        i += u, r = !0;
                                        break;
                                    default:
                                        i += "\\" + g
                                }
                                this.debug("clearStateChar %j %j", g, i), g = !1
                            }
                        };
                    for (let t, s = 0; s < e.length && (t = e.charAt(s)); s++)
                        if (this.debug("%s\t%s %s %j", e, s, i, t), o) {
                            if ("/" === t) return !1;
                            h[t] && (i += "\\"), i += t, o = !1
                        } else switch (t) {
                            case "/":
                                return !1;
                            case "\\":
                                if (b && "-" === e.charAt(s + 1)) {
                                    i += t;
                                    continue
                                }
                                S(), o = !0;
                                continue;
                            case "?":
                            case "*":
                            case "+":
                            case "@":
                            case "!":
                                if (this.debug("%s\t%s %s %j <-- stateChar", e, s, i, t), b) {
                                    this.debug("  in class"), "!" === t && s === R + 1 && (t = "^"), i += t;
                                    continue
                                }
                                this.debug("call clearStateChar %j", g), S(), g = t, n.noext && S();
                                continue;
                            case "(":
                                {
                                    if (b) {
                                        i += "(";
                                        continue
                                    }
                                    if (!g) {
                                        i += "\\(";
                                        continue
                                    }
                                    const t = {
                                        type: g,
                                        start: s - 1,
                                        reStart: i.length,
                                        open: c[g].open,
                                        close: c[g].close
                                    };this.debug(this.pattern, "\t", t),
                                    a.push(t),
                                    i += t.open,
                                    0 === t.start && "!" !== t.type && (_ = !0, i += T(e.slice(s + 1))),
                                    this.debug("plType %j %j", g, i),
                                    g = !1;
                                    continue
                                }
                            case ")":
                                {
                                    const e = a[a.length - 1];
                                    if (b || !e) {
                                        i += "\\)";
                                        continue
                                    }
                                    a.pop(),
                                    S(),
                                    r = !0,
                                    f = e,
                                    i += f.close,
                                    "!" === f.type && d.push(Object.assign(f, {
                                        reEnd: i.length
                                    }));
                                    continue
                                }
                            case "|":
                                {
                                    const t = a[a.length - 1];
                                    if (b || !t) {
                                        i += "\\|";
                                        continue
                                    }
                                    S(),
                                    i += "|",
                                    0 === t.start && "!" !== t.type && (_ = !0, i += T(e.slice(s + 1)));
                                    continue
                                }
                            case "[":
                                if (S(), b) {
                                    i += "\\" + t;
                                    continue
                                }
                                b = !0, R = s, D = i.length, i += t;
                                continue;
                            case "]":
                                if (s === R + 1 || !b) {
                                    i += "\\" + t;
                                    continue
                                }
                                m = e.substring(R + 1, s);
                                try {
                                    RegExp("[" + (m.replace(/\\([^-\]])/g, "$1").replace(/[[\]\\]/g, "\\$&") + "]")), i += t
                                } catch (e) {
                                    i = i.substring(0, D) + "(?:$.)"
                                }
                                r = !0, b = !1;
                                continue;
                            default:
                                S(), !h[t] || "^" === t && b || (i += "\\"), i += t
                        }
                    for (b && (m = e.slice(R + 1), C = this.parse(m, v), i = i.substring(0, D) + "\\[" + C[0], r = r || C[1]), f = a.pop(); f; f = a.pop()) {
                        let e;
                        e = i.slice(f.reStart + f.open.length), this.debug("setting tail", i, f), e = e.replace(/((?:\\{2}){0,64})(\\?)\|/g, ((e, t, n) => (n || (n = "\\"), t + t + n + "|"))), this.debug("tail=%j\n   %s", e, e, f, i);
                        const t = "*" === f.type ? l : "?" === f.type ? u : "\\" + f.type;
                        r = !0, i = i.slice(0, f.reStart) + t + "\\(" + e
                    }
                    S(), o && (i += "\\\\");
                    const k = p[i.charAt(0)];
                    for (let e = d.length - 1; e > -1; e--) {
                        const n = d[e],
                            r = i.slice(0, n.reStart),
                            o = i.slice(n.reStart, n.reEnd - 8);
                        let s = i.slice(n.reEnd);
                        const a = i.slice(n.reEnd - 8, n.reEnd) + s,
                            c = r.split(")").length,
                            u = r.split("(").length - c;
                        let l = s;
                        for (let e = 0; e < u; e++) l = l.replace(/\)[+*?]?/, "");
                        s = l, i = r + o + s + ("" === s && t !== v ? "(?:$|\\/)" : "") + a
                    }
                    if ("" !== i && r && (i = "(?=.)" + i), k && (i = (_ ? "" : w ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + i), t === v) return [i, r];
                    if (n.nocase && !r && (r = e.toUpperCase() !== e.toLowerCase()), !r) return (e => e.replace(/\\(.)/g, "$1"))(e);
                    const P = n.nocase ? "i" : "";
                    try {
                        return Object.assign(new RegExp("^" + i + "$", P), {
                            _glob: e,
                            _src: i
                        })
                    } catch (e) {
                        return new RegExp("$.")
                    }
                }
                makeRe() {
                    if (this.regexp || !1 === this.regexp) return this.regexp;
                    const e = this.set;
                    if (!e.length) return this.regexp = !1, this.regexp;
                    const t = this.options,
                        n = t.noglobstar ? l : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?",
                        i = t.nocase ? "i" : "";
                    let r = e.map((e => (e = e.map((e => "string" == typeof e ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === s ? s : e._src)).reduce(((e, t) => (e[e.length - 1] === s && t === s || e.push(t), e)), []), e.forEach(((t, i) => {
                        t === s && e[i - 1] !== s && (0 === i ? e.length > 1 ? e[i + 1] = "(?:\\/|" + n + "\\/)?" + e[i + 1] : e[i] = n : i === e.length - 1 ? e[i - 1] += "(?:\\/|" + n + ")?" : (e[i - 1] += "(?:\\/|\\/" + n + "\\/)" + e[i + 1], e[i + 1] = s))
                    })), e.filter((e => e !== s)).join("/")))).join("|");
                    r = "^(?:" + r + ")$", this.negate && (r = "^(?!" + r + ").*$");
                    try {
                        this.regexp = new RegExp(r, i)
                    } catch (e) {
                        this.regexp = !1
                    }
                    return this.regexp
                }
                match(e, t = this.partial) {
                    if (this.debug("match", e, this.pattern), this.comment) return !1;
                    if (this.empty) return "" === e;
                    if ("/" === e && t) return !0;
                    const n = this.options;
                    "/" !== o.sep && (e = e.split(o.sep).join("/")), e = e.split(g), this.debug(this.pattern, "split", e);
                    const i = this.set;
                    let r;
                    this.debug(this.pattern, "set", i);
                    for (let t = e.length - 1; t >= 0 && (r = e[t], !r); t--);
                    for (let o = 0; o < i.length; o++) {
                        const s = i[o];
                        let a = e;
                        if (n.matchBase && 1 === s.length && (a = [r]), this.matchOne(a, s, t)) return !!n.flipNegate || !this.negate
                    }
                    return !n.flipNegate && this.negate
                }
                static defaults(e) {
                    return r.defaults(e).Minimatch
                }
            }
            r.Minimatch = C
        },
        "+Cbi": (e, t, n) => {
            "use strict";
            e.exports = n("fozD")
        },
        fozD: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createProtocolConnection = void 0;
            const o = n("4lZc");
            r(n("4lZc"), t), r(n("gfO8"), t), t.createProtocolConnection = function(e, t, n, i) {
                return (0, o.createMessageConnection)(e, t, n, i)
            }
        },
        gfO8: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LSPErrorCodes = t.createProtocolConnection = void 0, r(n("vwa9"), t), r(n("ZkAy"), t), r(n("2Aak"), t), r(n("Z5ea"), t);
            var o, s = n("9glj");
            Object.defineProperty(t, "createProtocolConnection", {
                    enumerable: !0,
                    get: function() {
                        return s.createProtocolConnection
                    }
                }),
                function(e) {
                    e.lspReservedErrorRangeStart = -32899, e.RequestFailed = -32803, e.ServerCancelled = -32802, e.ContentModified = -32801, e.RequestCancelled = -32800, e.lspReservedErrorRangeEnd = -32800
                }(o || (t.LSPErrorCodes = o = {}))
        },
        "9glj": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createProtocolConnection = void 0;
            const i = n("vwa9");
            t.createProtocolConnection = function(e, t, n, r) {
                return i.ConnectionStrategy.is(r) && (r = {
                    connectionStrategy: r
                }), (0, i.createMessageConnection)(e, t, n, r)
            }
        },
        "2Aak": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProtocolNotificationType = t.ProtocolNotificationType0 = t.ProtocolRequestType = t.ProtocolRequestType0 = t.RegistrationType = t.MessageDirection = void 0;
            const i = n("vwa9");
            var r;
            ! function(e) {
                e.clientToServer = "clientToServer", e.serverToClient = "serverToClient", e.both = "both"
            }(r || (t.MessageDirection = r = {})), t.RegistrationType = class {
                constructor(e) {
                    this.method = e
                }
            };
            class o extends i.RequestType0 {
                constructor(e) {
                    super(e)
                }
            }
            t.ProtocolRequestType0 = o;
            class s extends i.RequestType {
                constructor(e) {
                    super(e, i.ParameterStructures.byName)
                }
            }
            t.ProtocolRequestType = s;
            class a extends i.NotificationType0 {
                constructor(e) {
                    super(e)
                }
            }
            t.ProtocolNotificationType0 = a;
            class c extends i.NotificationType {
                constructor(e) {
                    super(e, i.ParameterStructures.byName)
                }
            }
            t.ProtocolNotificationType = c
        },
        zAGr: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CallHierarchyOutgoingCallsRequest = t.CallHierarchyIncomingCallsRequest = t.CallHierarchyPrepareRequest = void 0;
            const i = n("2Aak");
            var r, o, s;
            ! function(e) {
                e.method = "textDocument/prepareCallHierarchy", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.CallHierarchyPrepareRequest = r = {})),
            function(e) {
                e.method = "callHierarchy/incomingCalls", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(o || (t.CallHierarchyIncomingCallsRequest = o = {})),
            function(e) {
                e.method = "callHierarchy/outgoingCalls", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(s || (t.CallHierarchyOutgoingCallsRequest = s = {}))
        },
        wevM: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ColorPresentationRequest = t.DocumentColorRequest = void 0;
            const i = n("2Aak");
            var r, o;
            ! function(e) {
                e.method = "textDocument/documentColor", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.DocumentColorRequest = r = {})),
            function(e) {
                e.method = "textDocument/colorPresentation", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(o || (t.ColorPresentationRequest = o = {}))
        },
        "S/zA": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfigurationRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "workspace/configuration", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.ConfigurationRequest = r = {}))
        },
        "0JbI": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DeclarationRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/declaration", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.DeclarationRequest = r = {}))
        },
        qciZ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DiagnosticRefreshRequest = t.WorkspaceDiagnosticRequest = t.DocumentDiagnosticRequest = t.DocumentDiagnosticReportKind = t.DiagnosticServerCancellationData = void 0;
            const i = n("vwa9"),
                r = n("b9dW"),
                o = n("2Aak");
            var s, a, c, u, l;
            ! function(e) {
                e.is = function(e) {
                    const t = e;
                    return t && r.boolean(t.retriggerRequest)
                }
            }(s || (t.DiagnosticServerCancellationData = s = {})),
            function(e) {
                e.Full = "full", e.Unchanged = "unchanged"
            }(a || (t.DocumentDiagnosticReportKind = a = {})),
            function(e) {
                e.method = "textDocument/diagnostic", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolRequestType(e.method), e.partialResult = new i.ProgressType
            }(c || (t.DocumentDiagnosticRequest = c = {})),
            function(e) {
                e.method = "workspace/diagnostic", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolRequestType(e.method), e.partialResult = new i.ProgressType
            }(u || (t.WorkspaceDiagnosticRequest = u = {})),
            function(e) {
                e.method = "workspace/diagnostic/refresh", e.messageDirection = o.MessageDirection.serverToClient, e.type = new o.ProtocolRequestType0(e.method)
            }(l || (t.DiagnosticRefreshRequest = l = {}))
        },
        S2q5: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WillDeleteFilesRequest = t.DidDeleteFilesNotification = t.DidRenameFilesNotification = t.WillRenameFilesRequest = t.DidCreateFilesNotification = t.WillCreateFilesRequest = t.FileOperationPatternKind = void 0;
            const i = n("2Aak");
            var r, o, s, a, c, u, l;
            ! function(e) {
                e.file = "file", e.folder = "folder"
            }(r || (t.FileOperationPatternKind = r = {})),
            function(e) {
                e.method = "workspace/willCreateFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(o || (t.WillCreateFilesRequest = o = {})),
            function(e) {
                e.method = "workspace/didCreateFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
            }(s || (t.DidCreateFilesNotification = s = {})),
            function(e) {
                e.method = "workspace/willRenameFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(a || (t.WillRenameFilesRequest = a = {})),
            function(e) {
                e.method = "workspace/didRenameFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
            }(c || (t.DidRenameFilesNotification = c = {})),
            function(e) {
                e.method = "workspace/didDeleteFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
            }(u || (t.DidDeleteFilesNotification = u = {})),
            function(e) {
                e.method = "workspace/willDeleteFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(l || (t.WillDeleteFilesRequest = l = {}))
        },
        Vj44: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FoldingRangeRefreshRequest = t.FoldingRangeRequest = void 0;
            const i = n("2Aak");
            var r, o;
            ! function(e) {
                e.method = "textDocument/foldingRange", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.FoldingRangeRequest = r = {})),
            function(e) {
                e.method = "workspace/foldingRange/refresh", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
            }(o || (t.FoldingRangeRefreshRequest = o = {}))
        },
        DeSM: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImplementationRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/implementation", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.ImplementationRequest = r = {}))
        },
        SUP8: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlayHintRefreshRequest = t.InlayHintResolveRequest = t.InlayHintRequest = void 0;
            const i = n("2Aak");
            var r, o, s;
            ! function(e) {
                e.method = "textDocument/inlayHint", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.InlayHintRequest = r = {})),
            function(e) {
                e.method = "inlayHint/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(o || (t.InlayHintResolveRequest = o = {})),
            function(e) {
                e.method = "workspace/inlayHint/refresh", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
            }(s || (t.InlayHintRefreshRequest = s = {}))
        },
        nVKA: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlineCompletionRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/inlineCompletion", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.InlineCompletionRequest = r = {}))
        },
        LJrd: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InlineValueRefreshRequest = t.InlineValueRequest = void 0;
            const i = n("2Aak");
            var r, o;
            ! function(e) {
                e.method = "textDocument/inlineValue", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.InlineValueRequest = r = {})),
            function(e) {
                e.method = "workspace/inlineValue/refresh", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
            }(o || (t.InlineValueRefreshRequest = o = {}))
        },
        Z5ea: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkspaceSymbolRequest = t.CodeActionResolveRequest = t.CodeActionRequest = t.DocumentSymbolRequest = t.DocumentHighlightRequest = t.ReferencesRequest = t.DefinitionRequest = t.SignatureHelpRequest = t.SignatureHelpTriggerKind = t.HoverRequest = t.CompletionResolveRequest = t.CompletionRequest = t.CompletionTriggerKind = t.PublishDiagnosticsNotification = t.WatchKind = t.RelativePattern = t.FileChangeType = t.DidChangeWatchedFilesNotification = t.WillSaveTextDocumentWaitUntilRequest = t.WillSaveTextDocumentNotification = t.TextDocumentSaveReason = t.DidSaveTextDocumentNotification = t.DidCloseTextDocumentNotification = t.DidChangeTextDocumentNotification = t.TextDocumentContentChangeEvent = t.DidOpenTextDocumentNotification = t.TextDocumentSyncKind = t.TelemetryEventNotification = t.LogMessageNotification = t.ShowMessageRequest = t.ShowMessageNotification = t.MessageType = t.DidChangeConfigurationNotification = t.ExitNotification = t.ShutdownRequest = t.InitializedNotification = t.InitializeErrorCodes = t.InitializeRequest = t.WorkDoneProgressOptions = t.TextDocumentRegistrationOptions = t.StaticRegistrationOptions = t.PositionEncodingKind = t.FailureHandlingKind = t.ResourceOperationKind = t.UnregistrationRequest = t.RegistrationRequest = t.DocumentSelector = t.NotebookCellTextDocumentFilter = t.NotebookDocumentFilter = t.TextDocumentFilter = void 0, t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = t.WillDeleteFilesRequest = t.DidDeleteFilesNotification = t.WillRenameFilesRequest = t.DidRenameFilesNotification = t.WillCreateFilesRequest = t.DidCreateFilesNotification = t.FileOperationPatternKind = t.LinkedEditingRangeRequest = t.ShowDocumentRequest = t.SemanticTokensRegistrationType = t.SemanticTokensRefreshRequest = t.SemanticTokensRangeRequest = t.SemanticTokensDeltaRequest = t.SemanticTokensRequest = t.TokenFormat = t.CallHierarchyPrepareRequest = t.CallHierarchyOutgoingCallsRequest = t.CallHierarchyIncomingCallsRequest = t.WorkDoneProgressCancelNotification = t.WorkDoneProgressCreateRequest = t.WorkDoneProgress = t.SelectionRangeRequest = t.DeclarationRequest = t.FoldingRangeRefreshRequest = t.FoldingRangeRequest = t.ColorPresentationRequest = t.DocumentColorRequest = t.ConfigurationRequest = t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest = t.TypeDefinitionRequest = t.ImplementationRequest = t.ApplyWorkspaceEditRequest = t.ExecuteCommandRequest = t.PrepareRenameRequest = t.RenameRequest = t.PrepareSupportDefaultBehavior = t.DocumentOnTypeFormattingRequest = t.DocumentRangesFormattingRequest = t.DocumentRangeFormattingRequest = t.DocumentFormattingRequest = t.DocumentLinkResolveRequest = t.DocumentLinkRequest = t.CodeLensRefreshRequest = t.CodeLensResolveRequest = t.CodeLensRequest = t.WorkspaceSymbolResolveRequest = void 0, t.InlineCompletionRequest = t.DidCloseNotebookDocumentNotification = t.DidSaveNotebookDocumentNotification = t.DidChangeNotebookDocumentNotification = t.NotebookCellArrayChange = t.DidOpenNotebookDocumentNotification = t.NotebookDocumentSyncRegistrationType = t.NotebookDocument = t.NotebookCell = t.ExecutionSummary = t.NotebookCellKind = t.DiagnosticRefreshRequest = t.WorkspaceDiagnosticRequest = t.DocumentDiagnosticRequest = t.DocumentDiagnosticReportKind = t.DiagnosticServerCancellationData = t.InlayHintRefreshRequest = t.InlayHintResolveRequest = t.InlayHintRequest = t.InlineValueRefreshRequest = t.InlineValueRequest = t.TypeHierarchySupertypesRequest = t.TypeHierarchySubtypesRequest = t.TypeHierarchyPrepareRequest = void 0;
            const i = n("2Aak"),
                r = n("ZkAy"),
                o = n("b9dW"),
                s = n("DeSM");
            Object.defineProperty(t, "ImplementationRequest", {
                enumerable: !0,
                get: function() {
                    return s.ImplementationRequest
                }
            });
            const a = n("TdIZ");
            Object.defineProperty(t, "TypeDefinitionRequest", {
                enumerable: !0,
                get: function() {
                    return a.TypeDefinitionRequest
                }
            });
            const c = n("Vu9e");
            Object.defineProperty(t, "WorkspaceFoldersRequest", {
                enumerable: !0,
                get: function() {
                    return c.WorkspaceFoldersRequest
                }
            }), Object.defineProperty(t, "DidChangeWorkspaceFoldersNotification", {
                enumerable: !0,
                get: function() {
                    return c.DidChangeWorkspaceFoldersNotification
                }
            });
            const u = n("S/zA");
            Object.defineProperty(t, "ConfigurationRequest", {
                enumerable: !0,
                get: function() {
                    return u.ConfigurationRequest
                }
            });
            const l = n("wevM");
            Object.defineProperty(t, "DocumentColorRequest", {
                enumerable: !0,
                get: function() {
                    return l.DocumentColorRequest
                }
            }), Object.defineProperty(t, "ColorPresentationRequest", {
                enumerable: !0,
                get: function() {
                    return l.ColorPresentationRequest
                }
            });
            const d = n("Vj44");
            Object.defineProperty(t, "FoldingRangeRequest", {
                enumerable: !0,
                get: function() {
                    return d.FoldingRangeRequest
                }
            }), Object.defineProperty(t, "FoldingRangeRefreshRequest", {
                enumerable: !0,
                get: function() {
                    return d.FoldingRangeRefreshRequest
                }
            });
            const h = n("0JbI");
            Object.defineProperty(t, "DeclarationRequest", {
                enumerable: !0,
                get: function() {
                    return h.DeclarationRequest
                }
            });
            const p = n("YtzD");
            Object.defineProperty(t, "SelectionRangeRequest", {
                enumerable: !0,
                get: function() {
                    return p.SelectionRangeRequest
                }
            });
            const g = n("cJUB");
            Object.defineProperty(t, "WorkDoneProgress", {
                enumerable: !0,
                get: function() {
                    return g.WorkDoneProgress
                }
            }), Object.defineProperty(t, "WorkDoneProgressCreateRequest", {
                enumerable: !0,
                get: function() {
                    return g.WorkDoneProgressCreateRequest
                }
            }), Object.defineProperty(t, "WorkDoneProgressCancelNotification", {
                enumerable: !0,
                get: function() {
                    return g.WorkDoneProgressCancelNotification
                }
            });
            const m = n("zAGr");
            Object.defineProperty(t, "CallHierarchyIncomingCallsRequest", {
                enumerable: !0,
                get: function() {
                    return m.CallHierarchyIncomingCallsRequest
                }
            }), Object.defineProperty(t, "CallHierarchyOutgoingCallsRequest", {
                enumerable: !0,
                get: function() {
                    return m.CallHierarchyOutgoingCallsRequest
                }
            }), Object.defineProperty(t, "CallHierarchyPrepareRequest", {
                enumerable: !0,
                get: function() {
                    return m.CallHierarchyPrepareRequest
                }
            });
            const f = n("uL1X");
            Object.defineProperty(t, "TokenFormat", {
                enumerable: !0,
                get: function() {
                    return f.TokenFormat
                }
            }), Object.defineProperty(t, "SemanticTokensRequest", {
                enumerable: !0,
                get: function() {
                    return f.SemanticTokensRequest
                }
            }), Object.defineProperty(t, "SemanticTokensDeltaRequest", {
                enumerable: !0,
                get: function() {
                    return f.SemanticTokensDeltaRequest
                }
            }), Object.defineProperty(t, "SemanticTokensRangeRequest", {
                enumerable: !0,
                get: function() {
                    return f.SemanticTokensRangeRequest
                }
            }), Object.defineProperty(t, "SemanticTokensRefreshRequest", {
                enumerable: !0,
                get: function() {
                    return f.SemanticTokensRefreshRequest
                }
            }), Object.defineProperty(t, "SemanticTokensRegistrationType", {
                enumerable: !0,
                get: function() {
                    return f.SemanticTokensRegistrationType
                }
            });
            const y = n("k990");
            Object.defineProperty(t, "ShowDocumentRequest", {
                enumerable: !0,
                get: function() {
                    return y.ShowDocumentRequest
                }
            });
            const v = n("vq5T");
            Object.defineProperty(t, "LinkedEditingRangeRequest", {
                enumerable: !0,
                get: function() {
                    return v.LinkedEditingRangeRequest
                }
            });
            const C = n("S2q5");
            Object.defineProperty(t, "FileOperationPatternKind", {
                enumerable: !0,
                get: function() {
                    return C.FileOperationPatternKind
                }
            }), Object.defineProperty(t, "DidCreateFilesNotification", {
                enumerable: !0,
                get: function() {
                    return C.DidCreateFilesNotification
                }
            }), Object.defineProperty(t, "WillCreateFilesRequest", {
                enumerable: !0,
                get: function() {
                    return C.WillCreateFilesRequest
                }
            }), Object.defineProperty(t, "DidRenameFilesNotification", {
                enumerable: !0,
                get: function() {
                    return C.DidRenameFilesNotification
                }
            }), Object.defineProperty(t, "WillRenameFilesRequest", {
                enumerable: !0,
                get: function() {
                    return C.WillRenameFilesRequest
                }
            }), Object.defineProperty(t, "DidDeleteFilesNotification", {
                enumerable: !0,
                get: function() {
                    return C.DidDeleteFilesNotification
                }
            }), Object.defineProperty(t, "WillDeleteFilesRequest", {
                enumerable: !0,
                get: function() {
                    return C.WillDeleteFilesRequest
                }
            });
            const b = n("HKKP");
            Object.defineProperty(t, "UniquenessLevel", {
                enumerable: !0,
                get: function() {
                    return b.UniquenessLevel
                }
            }), Object.defineProperty(t, "MonikerKind", {
                enumerable: !0,
                get: function() {
                    return b.MonikerKind
                }
            }), Object.defineProperty(t, "MonikerRequest", {
                enumerable: !0,
                get: function() {
                    return b.MonikerRequest
                }
            });
            const D = n("6CWh");
            Object.defineProperty(t, "TypeHierarchyPrepareRequest", {
                enumerable: !0,
                get: function() {
                    return D.TypeHierarchyPrepareRequest
                }
            }), Object.defineProperty(t, "TypeHierarchySubtypesRequest", {
                enumerable: !0,
                get: function() {
                    return D.TypeHierarchySubtypesRequest
                }
            }), Object.defineProperty(t, "TypeHierarchySupertypesRequest", {
                enumerable: !0,
                get: function() {
                    return D.TypeHierarchySupertypesRequest
                }
            });
            const R = n("LJrd");
            Object.defineProperty(t, "InlineValueRequest", {
                enumerable: !0,
                get: function() {
                    return R.InlineValueRequest
                }
            }), Object.defineProperty(t, "InlineValueRefreshRequest", {
                enumerable: !0,
                get: function() {
                    return R.InlineValueRefreshRequest
                }
            });
            const _ = n("SUP8");
            Object.defineProperty(t, "InlayHintRequest", {
                enumerable: !0,
                get: function() {
                    return _.InlayHintRequest
                }
            }), Object.defineProperty(t, "InlayHintResolveRequest", {
                enumerable: !0,
                get: function() {
                    return _.InlayHintResolveRequest
                }
            }), Object.defineProperty(t, "InlayHintRefreshRequest", {
                enumerable: !0,
                get: function() {
                    return _.InlayHintRefreshRequest
                }
            });
            const w = n("qciZ");
            Object.defineProperty(t, "DiagnosticServerCancellationData", {
                enumerable: !0,
                get: function() {
                    return w.DiagnosticServerCancellationData
                }
            }), Object.defineProperty(t, "DocumentDiagnosticReportKind", {
                enumerable: !0,
                get: function() {
                    return w.DocumentDiagnosticReportKind
                }
            }), Object.defineProperty(t, "DocumentDiagnosticRequest", {
                enumerable: !0,
                get: function() {
                    return w.DocumentDiagnosticRequest
                }
            }), Object.defineProperty(t, "WorkspaceDiagnosticRequest", {
                enumerable: !0,
                get: function() {
                    return w.WorkspaceDiagnosticRequest
                }
            }), Object.defineProperty(t, "DiagnosticRefreshRequest", {
                enumerable: !0,
                get: function() {
                    return w.DiagnosticRefreshRequest
                }
            });
            const T = n("cSbA");
            Object.defineProperty(t, "NotebookCellKind", {
                enumerable: !0,
                get: function() {
                    return T.NotebookCellKind
                }
            }), Object.defineProperty(t, "ExecutionSummary", {
                enumerable: !0,
                get: function() {
                    return T.ExecutionSummary
                }
            }), Object.defineProperty(t, "NotebookCell", {
                enumerable: !0,
                get: function() {
                    return T.NotebookCell
                }
            }), Object.defineProperty(t, "NotebookDocument", {
                enumerable: !0,
                get: function() {
                    return T.NotebookDocument
                }
            }), Object.defineProperty(t, "NotebookDocumentSyncRegistrationType", {
                enumerable: !0,
                get: function() {
                    return T.NotebookDocumentSyncRegistrationType
                }
            }), Object.defineProperty(t, "DidOpenNotebookDocumentNotification", {
                enumerable: !0,
                get: function() {
                    return T.DidOpenNotebookDocumentNotification
                }
            }), Object.defineProperty(t, "NotebookCellArrayChange", {
                enumerable: !0,
                get: function() {
                    return T.NotebookCellArrayChange
                }
            }), Object.defineProperty(t, "DidChangeNotebookDocumentNotification", {
                enumerable: !0,
                get: function() {
                    return T.DidChangeNotebookDocumentNotification
                }
            }), Object.defineProperty(t, "DidSaveNotebookDocumentNotification", {
                enumerable: !0,
                get: function() {
                    return T.DidSaveNotebookDocumentNotification
                }
            }), Object.defineProperty(t, "DidCloseNotebookDocumentNotification", {
                enumerable: !0,
                get: function() {
                    return T.DidCloseNotebookDocumentNotification
                }
            });
            const S = n("nVKA");
            var k, P, x, E, O, q, M, F, N, I, L, j, A, H, W, K, U, z, $, V, J, B, Q, G, Z, X, Y, ee, te, ne, ie, re, oe, se, ae, ce, ue, le, de, he, pe, ge, me, fe, ye, ve, Ce, be, De, Re, _e, we, Te, Se, ke, Pe, xe, Ee, Oe, qe, Me, Fe, Ne, Ie, Le;
            Object.defineProperty(t, "InlineCompletionRequest", {
                    enumerable: !0,
                    get: function() {
                        return S.InlineCompletionRequest
                    }
                }),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return o.string(t) || o.string(t.language) || o.string(t.scheme) || o.string(t.pattern)
                    }
                }(k || (t.TextDocumentFilter = k = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return o.objectLiteral(t) && (o.string(t.notebookType) || o.string(t.scheme) || o.string(t.pattern))
                    }
                }(P || (t.NotebookDocumentFilter = P = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return o.objectLiteral(t) && (o.string(t.notebook) || P.is(t.notebook)) && (void 0 === t.language || o.string(t.language))
                    }
                }(x || (t.NotebookCellTextDocumentFilter = x = {})),
                function(e) {
                    e.is = function(e) {
                        if (!Array.isArray(e)) return !1;
                        for (let t of e)
                            if (!o.string(t) && !k.is(t) && !x.is(t)) return !1;
                        return !0
                    }
                }(E || (t.DocumentSelector = E = {})),
                function(e) {
                    e.method = "client/registerCapability", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType(e.method)
                }(O || (t.RegistrationRequest = O = {})),
                function(e) {
                    e.method = "client/unregisterCapability", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType(e.method)
                }(q || (t.UnregistrationRequest = q = {})),
                function(e) {
                    e.Create = "create", e.Rename = "rename", e.Delete = "delete"
                }(M || (t.ResourceOperationKind = M = {})),
                function(e) {
                    e.Abort = "abort", e.Transactional = "transactional", e.TextOnlyTransactional = "textOnlyTransactional", e.Undo = "undo"
                }(F || (t.FailureHandlingKind = F = {})),
                function(e) {
                    e.UTF8 = "utf-8", e.UTF16 = "utf-16", e.UTF32 = "utf-32"
                }(N || (t.PositionEncodingKind = N = {})),
                function(e) {
                    e.hasId = function(e) {
                        const t = e;
                        return t && o.string(t.id) && t.id.length > 0
                    }
                }(I || (t.StaticRegistrationOptions = I = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && (null === t.documentSelector || E.is(t.documentSelector))
                    }
                }(L || (t.TextDocumentRegistrationOptions = L = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return o.objectLiteral(t) && (void 0 === t.workDoneProgress || o.boolean(t.workDoneProgress))
                    }, e.hasWorkDoneProgress = function(e) {
                        const t = e;
                        return t && o.boolean(t.workDoneProgress)
                    }
                }(j || (t.WorkDoneProgressOptions = j = {})),
                function(e) {
                    e.method = "initialize", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(A || (t.InitializeRequest = A = {})),
                function(e) {
                    e.unknownProtocolVersion = 1
                }(H || (t.InitializeErrorCodes = H = {})),
                function(e) {
                    e.method = "initialized", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(W || (t.InitializedNotification = W = {})),
                function(e) {
                    e.method = "shutdown", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType0(e.method)
                }(K || (t.ShutdownRequest = K = {})),
                function(e) {
                    e.method = "exit", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType0(e.method)
                }(U || (t.ExitNotification = U = {})),
                function(e) {
                    e.method = "workspace/didChangeConfiguration", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(z || (t.DidChangeConfigurationNotification = z = {})),
                function(e) {
                    e.Error = 1, e.Warning = 2, e.Info = 3, e.Log = 4, e.Debug = 5
                }($ || (t.MessageType = $ = {})),
                function(e) {
                    e.method = "window/showMessage", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolNotificationType(e.method)
                }(V || (t.ShowMessageNotification = V = {})),
                function(e) {
                    e.method = "window/showMessageRequest", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType(e.method)
                }(J || (t.ShowMessageRequest = J = {})),
                function(e) {
                    e.method = "window/logMessage", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolNotificationType(e.method)
                }(B || (t.LogMessageNotification = B = {})),
                function(e) {
                    e.method = "telemetry/event", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolNotificationType(e.method)
                }(Q || (t.TelemetryEventNotification = Q = {})),
                function(e) {
                    e.None = 0, e.Full = 1, e.Incremental = 2
                }(G || (t.TextDocumentSyncKind = G = {})),
                function(e) {
                    e.method = "textDocument/didOpen", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(Z || (t.DidOpenTextDocumentNotification = Z = {})),
                function(e) {
                    e.isIncremental = function(e) {
                        let t = e;
                        return null != t && "string" == typeof t.text && void 0 !== t.range && (void 0 === t.rangeLength || "number" == typeof t.rangeLength)
                    }, e.isFull = function(e) {
                        let t = e;
                        return null != t && "string" == typeof t.text && void 0 === t.range && void 0 === t.rangeLength
                    }
                }(X || (t.TextDocumentContentChangeEvent = X = {})),
                function(e) {
                    e.method = "textDocument/didChange", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(Y || (t.DidChangeTextDocumentNotification = Y = {})),
                function(e) {
                    e.method = "textDocument/didClose", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(ee || (t.DidCloseTextDocumentNotification = ee = {})),
                function(e) {
                    e.method = "textDocument/didSave", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(te || (t.DidSaveTextDocumentNotification = te = {})),
                function(e) {
                    e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3
                }(ne || (t.TextDocumentSaveReason = ne = {})),
                function(e) {
                    e.method = "textDocument/willSave", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(ie || (t.WillSaveTextDocumentNotification = ie = {})),
                function(e) {
                    e.method = "textDocument/willSaveWaitUntil", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(re || (t.WillSaveTextDocumentWaitUntilRequest = re = {})),
                function(e) {
                    e.method = "workspace/didChangeWatchedFiles", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
                }(oe || (t.DidChangeWatchedFilesNotification = oe = {})),
                function(e) {
                    e.Created = 1, e.Changed = 2, e.Deleted = 3
                }(se || (t.FileChangeType = se = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return o.objectLiteral(t) && (r.URI.is(t.baseUri) || r.WorkspaceFolder.is(t.baseUri)) && o.string(t.pattern)
                    }
                }(ae || (t.RelativePattern = ae = {})),
                function(e) {
                    e.Create = 1, e.Change = 2, e.Delete = 4
                }(ce || (t.WatchKind = ce = {})),
                function(e) {
                    e.method = "textDocument/publishDiagnostics", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolNotificationType(e.method)
                }(ue || (t.PublishDiagnosticsNotification = ue = {})),
                function(e) {
                    e.Invoked = 1, e.TriggerCharacter = 2, e.TriggerForIncompleteCompletions = 3
                }(le || (t.CompletionTriggerKind = le = {})),
                function(e) {
                    e.method = "textDocument/completion", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(de || (t.CompletionRequest = de = {})),
                function(e) {
                    e.method = "completionItem/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(he || (t.CompletionResolveRequest = he = {})),
                function(e) {
                    e.method = "textDocument/hover", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(pe || (t.HoverRequest = pe = {})),
                function(e) {
                    e.Invoked = 1, e.TriggerCharacter = 2, e.ContentChange = 3
                }(ge || (t.SignatureHelpTriggerKind = ge = {})),
                function(e) {
                    e.method = "textDocument/signatureHelp", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(me || (t.SignatureHelpRequest = me = {})),
                function(e) {
                    e.method = "textDocument/definition", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(fe || (t.DefinitionRequest = fe = {})),
                function(e) {
                    e.method = "textDocument/references", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(ye || (t.ReferencesRequest = ye = {})),
                function(e) {
                    e.method = "textDocument/documentHighlight", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(ve || (t.DocumentHighlightRequest = ve = {})),
                function(e) {
                    e.method = "textDocument/documentSymbol", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Ce || (t.DocumentSymbolRequest = Ce = {})),
                function(e) {
                    e.method = "textDocument/codeAction", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(be || (t.CodeActionRequest = be = {})),
                function(e) {
                    e.method = "codeAction/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(De || (t.CodeActionResolveRequest = De = {})),
                function(e) {
                    e.method = "workspace/symbol", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Re || (t.WorkspaceSymbolRequest = Re = {})),
                function(e) {
                    e.method = "workspaceSymbol/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(_e || (t.WorkspaceSymbolResolveRequest = _e = {})),
                function(e) {
                    e.method = "textDocument/codeLens", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(we || (t.CodeLensRequest = we = {})),
                function(e) {
                    e.method = "codeLens/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Te || (t.CodeLensResolveRequest = Te = {})),
                function(e) {
                    e.method = "workspace/codeLens/refresh", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
                }(Se || (t.CodeLensRefreshRequest = Se = {})),
                function(e) {
                    e.method = "textDocument/documentLink", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(ke || (t.DocumentLinkRequest = ke = {})),
                function(e) {
                    e.method = "documentLink/resolve", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Pe || (t.DocumentLinkResolveRequest = Pe = {})),
                function(e) {
                    e.method = "textDocument/formatting", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(xe || (t.DocumentFormattingRequest = xe = {})),
                function(e) {
                    e.method = "textDocument/rangeFormatting", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Ee || (t.DocumentRangeFormattingRequest = Ee = {})),
                function(e) {
                    e.method = "textDocument/rangesFormatting", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Oe || (t.DocumentRangesFormattingRequest = Oe = {})),
                function(e) {
                    e.method = "textDocument/onTypeFormatting", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(qe || (t.DocumentOnTypeFormattingRequest = qe = {})),
                function(e) {
                    e.Identifier = 1
                }(Me || (t.PrepareSupportDefaultBehavior = Me = {})),
                function(e) {
                    e.method = "textDocument/rename", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Fe || (t.RenameRequest = Fe = {})),
                function(e) {
                    e.method = "textDocument/prepareRename", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Ne || (t.PrepareRenameRequest = Ne = {})),
                function(e) {
                    e.method = "workspace/executeCommand", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
                }(Ie || (t.ExecuteCommandRequest = Ie = {})),
                function(e) {
                    e.method = "workspace/applyEdit", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType("workspace/applyEdit")
                }(Le || (t.ApplyWorkspaceEditRequest = Le = {}))
        },
        vq5T: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LinkedEditingRangeRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/linkedEditingRange", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.LinkedEditingRangeRequest = r = {}))
        },
        HKKP: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = void 0;
            const i = n("2Aak");
            var r, o, s;
            ! function(e) {
                e.document = "document", e.project = "project", e.group = "group", e.scheme = "scheme", e.global = "global"
            }(r || (t.UniquenessLevel = r = {})),
            function(e) {
                e.$import = "import", e.$export = "export", e.local = "local"
            }(o || (t.MonikerKind = o = {})),
            function(e) {
                e.method = "textDocument/moniker", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(s || (t.MonikerRequest = s = {}))
        },
        cSbA: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DidCloseNotebookDocumentNotification = t.DidSaveNotebookDocumentNotification = t.DidChangeNotebookDocumentNotification = t.NotebookCellArrayChange = t.DidOpenNotebookDocumentNotification = t.NotebookDocumentSyncRegistrationType = t.NotebookDocument = t.NotebookCell = t.ExecutionSummary = t.NotebookCellKind = void 0;
            const i = n("ZkAy"),
                r = n("b9dW"),
                o = n("2Aak");
            var s, a, c, u, l, d, h, p, g, m;
            ! function(e) {
                e.Markup = 1, e.Code = 2, e.is = function(e) {
                    return 1 === e || 2 === e
                }
            }(s || (t.NotebookCellKind = s = {})),
            function(e) {
                e.create = function(e, t) {
                    const n = {
                        executionOrder: e
                    };
                    return !0 !== t && !1 !== t || (n.success = t), n
                }, e.is = function(e) {
                    const t = e;
                    return r.objectLiteral(t) && i.uinteger.is(t.executionOrder) && (void 0 === t.success || r.boolean(t.success))
                }, e.equals = function(e, t) {
                    return e === t || null != e && null != t && e.executionOrder === t.executionOrder && e.success === t.success
                }
            }(a || (t.ExecutionSummary = a = {})),
            function(e) {
                function t(e, n) {
                    if (e === n) return !0;
                    if (null == e || null == n) return !1;
                    if (typeof e != typeof n) return !1;
                    if ("object" != typeof e) return !1;
                    const i = Array.isArray(e),
                        o = Array.isArray(n);
                    if (i !== o) return !1;
                    if (i && o) {
                        if (e.length !== n.length) return !1;
                        for (let i = 0; i < e.length; i++)
                            if (!t(e[i], n[i])) return !1
                    }
                    if (r.objectLiteral(e) && r.objectLiteral(n)) {
                        const i = Object.keys(e),
                            r = Object.keys(n);
                        if (i.length !== r.length) return !1;
                        if (i.sort(), r.sort(), !t(i, r)) return !1;
                        for (let r = 0; r < i.length; r++) {
                            const o = i[r];
                            if (!t(e[o], n[o])) return !1
                        }
                    }
                    return !0
                }
                e.create = function(e, t) {
                    return {
                        kind: e,
                        document: t
                    }
                }, e.is = function(e) {
                    const t = e;
                    return r.objectLiteral(t) && s.is(t.kind) && i.DocumentUri.is(t.document) && (void 0 === t.metadata || r.objectLiteral(t.metadata))
                }, e.diff = function(e, n) {
                    const i = new Set;
                    return e.document !== n.document && i.add("document"), e.kind !== n.kind && i.add("kind"), e.executionSummary !== n.executionSummary && i.add("executionSummary"), void 0 === e.metadata && void 0 === n.metadata || t(e.metadata, n.metadata) || i.add("metadata"), void 0 === e.executionSummary && void 0 === n.executionSummary || a.equals(e.executionSummary, n.executionSummary) || i.add("executionSummary"), i
                }
            }(c || (t.NotebookCell = c = {})),
            function(e) {
                e.create = function(e, t, n, i) {
                    return {
                        uri: e,
                        notebookType: t,
                        version: n,
                        cells: i
                    }
                }, e.is = function(e) {
                    const t = e;
                    return r.objectLiteral(t) && r.string(t.uri) && i.integer.is(t.version) && r.typedArray(t.cells, c.is)
                }
            }(u || (t.NotebookDocument = u = {})),
            function(e) {
                e.method = "notebookDocument/sync", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.RegistrationType(e.method)
            }(l || (t.NotebookDocumentSyncRegistrationType = l = {})),
            function(e) {
                e.method = "notebookDocument/didOpen", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolNotificationType(e.method), e.registrationMethod = l.method
            }(d || (t.DidOpenNotebookDocumentNotification = d = {})),
            function(e) {
                e.is = function(e) {
                    const t = e;
                    return r.objectLiteral(t) && i.uinteger.is(t.start) && i.uinteger.is(t.deleteCount) && (void 0 === t.cells || r.typedArray(t.cells, c.is))
                }, e.create = function(e, t, n) {
                    const i = {
                        start: e,
                        deleteCount: t
                    };
                    return void 0 !== n && (i.cells = n), i
                }
            }(h || (t.NotebookCellArrayChange = h = {})),
            function(e) {
                e.method = "notebookDocument/didChange", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolNotificationType(e.method), e.registrationMethod = l.method
            }(p || (t.DidChangeNotebookDocumentNotification = p = {})),
            function(e) {
                e.method = "notebookDocument/didSave", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolNotificationType(e.method), e.registrationMethod = l.method
            }(g || (t.DidSaveNotebookDocumentNotification = g = {})),
            function(e) {
                e.method = "notebookDocument/didClose", e.messageDirection = o.MessageDirection.clientToServer, e.type = new o.ProtocolNotificationType(e.method), e.registrationMethod = l.method
            }(m || (t.DidCloseNotebookDocumentNotification = m = {}))
        },
        cJUB: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WorkDoneProgressCancelNotification = t.WorkDoneProgressCreateRequest = t.WorkDoneProgress = void 0;
            const i = n("vwa9"),
                r = n("2Aak");
            var o, s, a;
            ! function(e) {
                e.type = new i.ProgressType, e.is = function(t) {
                    return t === e.type
                }
            }(o || (t.WorkDoneProgress = o = {})),
            function(e) {
                e.method = "window/workDoneProgress/create", e.messageDirection = r.MessageDirection.serverToClient, e.type = new r.ProtocolRequestType(e.method)
            }(s || (t.WorkDoneProgressCreateRequest = s = {})),
            function(e) {
                e.method = "window/workDoneProgress/cancel", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method)
            }(a || (t.WorkDoneProgressCancelNotification = a = {}))
        },
        YtzD: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectionRangeRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/selectionRange", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.SelectionRangeRequest = r = {}))
        },
        uL1X: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SemanticTokensRefreshRequest = t.SemanticTokensRangeRequest = t.SemanticTokensDeltaRequest = t.SemanticTokensRequest = t.SemanticTokensRegistrationType = t.TokenFormat = void 0;
            const i = n("2Aak");
            var r, o, s, a, c, u;
            ! function(e) {
                e.Relative = "relative"
            }(r || (t.TokenFormat = r = {})),
            function(e) {
                e.method = "textDocument/semanticTokens", e.type = new i.RegistrationType(e.method)
            }(o || (t.SemanticTokensRegistrationType = o = {})),
            function(e) {
                e.method = "textDocument/semanticTokens/full", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method), e.registrationMethod = o.method
            }(s || (t.SemanticTokensRequest = s = {})),
            function(e) {
                e.method = "textDocument/semanticTokens/full/delta", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method), e.registrationMethod = o.method
            }(a || (t.SemanticTokensDeltaRequest = a = {})),
            function(e) {
                e.method = "textDocument/semanticTokens/range", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method), e.registrationMethod = o.method
            }(c || (t.SemanticTokensRangeRequest = c = {})),
            function(e) {
                e.method = "workspace/semanticTokens/refresh", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
            }(u || (t.SemanticTokensRefreshRequest = u = {}))
        },
        k990: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShowDocumentRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "window/showDocument", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.ShowDocumentRequest = r = {}))
        },
        TdIZ: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeDefinitionRequest = void 0;
            const i = n("2Aak");
            var r;
            ! function(e) {
                e.method = "textDocument/typeDefinition", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.TypeDefinitionRequest = r = {}))
        },
        "6CWh": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeHierarchySubtypesRequest = t.TypeHierarchySupertypesRequest = t.TypeHierarchyPrepareRequest = void 0;
            const i = n("2Aak");
            var r, o, s;
            ! function(e) {
                e.method = "textDocument/prepareTypeHierarchy", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(r || (t.TypeHierarchyPrepareRequest = r = {})),
            function(e) {
                e.method = "typeHierarchy/supertypes", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(o || (t.TypeHierarchySupertypesRequest = o = {})),
            function(e) {
                e.method = "typeHierarchy/subtypes", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolRequestType(e.method)
            }(s || (t.TypeHierarchySubtypesRequest = s = {}))
        },
        Vu9e: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest = void 0;
            const i = n("2Aak");
            var r, o;
            ! function(e) {
                e.method = "workspace/workspaceFolders", e.messageDirection = i.MessageDirection.serverToClient, e.type = new i.ProtocolRequestType0(e.method)
            }(r || (t.WorkspaceFoldersRequest = r = {})),
            function(e) {
                e.method = "workspace/didChangeWorkspaceFolders", e.messageDirection = i.MessageDirection.clientToServer, e.type = new i.ProtocolNotificationType(e.method)
            }(o || (t.DidChangeWorkspaceFoldersNotification = o = {}))
        },
        b9dW: (e, t) => {
            "use strict";

            function n(e) {
                return "string" == typeof e || e instanceof String
            }

            function i(e) {
                return Array.isArray(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectLiteral = t.typedArray = t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0, t.boolean = function(e) {
                return !0 === e || !1 === e
            }, t.string = n, t.number = function(e) {
                return "number" == typeof e || e instanceof Number
            }, t.error = function(e) {
                return e instanceof Error
            }, t.func = function(e) {
                return "function" == typeof e
            }, t.array = i, t.stringArray = function(e) {
                return i(e) && e.every((e => n(e)))
            }, t.typedArray = function(e, t) {
                return Array.isArray(e) && e.every(t)
            }, t.objectLiteral = function(e) {
                return null !== e && "object" == typeof e
            }
        },
        "4lZc": (e, t, n) => {
            "use strict";
            e.exports = n("vwa9")
        },
        vwa9: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, r)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMessageConnection = t.BrowserMessageWriter = t.BrowserMessageReader = void 0, n("Ewo4").default.install();
            const o = n("htyc");
            r(n("htyc"), t);
            class s extends o.AbstractMessageReader {
                constructor(e) {
                    super(), this._onData = new o.Emitter, this._messageListener = e => {
                        this._onData.fire(e.data)
                    }, e.addEventListener("error", (e => this.fireError(e))), e.onmessage = this._messageListener
                }
                listen(e) {
                    return this._onData.event(e)
                }
            }
            t.BrowserMessageReader = s;
            class a extends o.AbstractMessageWriter {
                constructor(e) {
                    super(), this.port = e, this.errorCount = 0, e.addEventListener("error", (e => this.fireError(e)))
                }
                write(e) {
                    try {
                        return this.port.postMessage(e), Promise.resolve()
                    } catch (t) {
                        return this.handleError(t, e), Promise.reject(t)
                    }
                }
                handleError(e, t) {
                    this.errorCount++, this.fireError(e, t, this.errorCount)
                }
                end() {}
            }
            t.BrowserMessageWriter = a, t.createMessageConnection = function(e, t, n, i) {
                return void 0 === n && (n = o.NullLogger), o.ConnectionStrategy.is(i) && (i = {
                    connectionStrategy: i
                }), (0, o.createMessageConnection)(e, t, n, i)
            }
        },
        Ewo4: (e, t, n) => {
            "use strict";
            var i = n("ziTh");
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n("htyc");
            class o extends r.AbstractMessageBuffer {
                constructor(e = "utf-8") {
                    super(e), this.asciiDecoder = new TextDecoder("ascii")
                }
                emptyBuffer() {
                    return o.emptyBuffer
                }
                fromString(e, t) {
                    return (new TextEncoder).encode(e)
                }
                toString(e, t) {
                    return "ascii" === t ? this.asciiDecoder.decode(e) : new TextDecoder(t).decode(e)
                }
                asNative(e, t) {
                    return void 0 === t ? e : e.slice(0, t)
                }
                allocNative(e) {
                    return new Uint8Array(e)
                }
            }
            o.emptyBuffer = new Uint8Array(0);
            class s {
                constructor(e) {
                    this.socket = e, this._onData = new r.Emitter, this._messageListener = e => {
                        e.data.arrayBuffer().then((e => {
                            this._onData.fire(new Uint8Array(e))
                        }), (() => {
                            (0, r.RAL)().console.error("Converting blob to array buffer failed.")
                        }))
                    }, this.socket.addEventListener("message", this._messageListener)
                }
                onClose(e) {
                    return this.socket.addEventListener("close", e), r.Disposable.create((() => this.socket.removeEventListener("close", e)))
                }
                onError(e) {
                    return this.socket.addEventListener("error", e), r.Disposable.create((() => this.socket.removeEventListener("error", e)))
                }
                onEnd(e) {
                    return this.socket.addEventListener("end", e), r.Disposable.create((() => this.socket.removeEventListener("end", e)))
                }
                onData(e) {
                    return this._onData.event(e)
                }
            }
            class a {
                constructor(e) {
                    this.socket = e
                }
                onClose(e) {
                    return this.socket.addEventListener("close", e), r.Disposable.create((() => this.socket.removeEventListener("close", e)))
                }
                onError(e) {
                    return this.socket.addEventListener("error", e), r.Disposable.create((() => this.socket.removeEventListener("error", e)))
                }
                onEnd(e) {
                    return this.socket.addEventListener("end", e), r.Disposable.create((() => this.socket.removeEventListener("end", e)))
                }
                write(e, t) {
                    if ("string" == typeof e) {
                        if (void 0 !== t && "utf-8" !== t) throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t}`);
                        this.socket.send(e)
                    } else this.socket.send(e);
                    return Promise.resolve()
                }
                end() {
                    this.socket.close()
                }
            }
            const c = new TextEncoder,
                u = Object.freeze({
                    messageBuffer: Object.freeze({
                        create: e => new o(e)
                    }),
                    applicationJson: Object.freeze({
                        encoder: Object.freeze({
                            name: "application/json",
                            encode: (e, t) => {
                                if ("utf-8" !== t.charset) throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);
                                return Promise.resolve(c.encode(JSON.stringify(e, void 0, 0)))
                            }
                        }),
                        decoder: Object.freeze({
                            name: "application/json",
                            decode: (e, t) => {
                                if (!(e instanceof Uint8Array)) throw new Error("In a Browser environments only Uint8Arrays are supported.");
                                return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)))
                            }
                        })
                    }),
                    stream: Object.freeze({
                        asReadableStream: e => new s(e),
                        asWritableStream: e => new a(e)
                    }),
                    console: i,
                    timer: Object.freeze({
                        setTimeout(e, t, ...n) {
                            const i = setTimeout(e, t, ...n);
                            return {
                                dispose: () => clearTimeout(i)
                            }
                        },
                        setImmediate(e, ...t) {
                            const n = setTimeout(e, 0, ...t);
                            return {
                                dispose: () => clearTimeout(n)
                            }
                        },
                        setInterval(e, t, ...n) {
                            const i = setInterval(e, t, ...n);
                            return {
                                dispose: () => clearInterval(i)
                            }
                        }
                    })
                });

            function l() {
                return u
            }! function(e) {
                e.install = function() {
                    r.RAL.install(u)
                }
            }(l || (l = {})), t.default = l
        },
        htyc: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProgressType = t.ProgressToken = t.createMessageConnection = t.NullLogger = t.ConnectionOptions = t.ConnectionStrategy = t.AbstractMessageBuffer = t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = t.CancellationToken = t.CancellationTokenSource = t.Emitter = t.Event = t.Disposable = t.LRUCache = t.Touch = t.LinkedMap = t.ParameterStructures = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.ErrorCodes = t.ResponseError = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType0 = t.RequestType = t.Message = t.RAL = void 0, t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = void 0;
            const i = n("eIQY");
            Object.defineProperty(t, "Message", {
                enumerable: !0,
                get: function() {
                    return i.Message
                }
            }), Object.defineProperty(t, "RequestType", {
                enumerable: !0,
                get: function() {
                    return i.RequestType
                }
            }), Object.defineProperty(t, "RequestType0", {
                enumerable: !0,
                get: function() {
                    return i.RequestType0
                }
            }), Object.defineProperty(t, "RequestType1", {
                enumerable: !0,
                get: function() {
                    return i.RequestType1
                }
            }), Object.defineProperty(t, "RequestType2", {
                enumerable: !0,
                get: function() {
                    return i.RequestType2
                }
            }), Object.defineProperty(t, "RequestType3", {
                enumerable: !0,
                get: function() {
                    return i.RequestType3
                }
            }), Object.defineProperty(t, "RequestType4", {
                enumerable: !0,
                get: function() {
                    return i.RequestType4
                }
            }), Object.defineProperty(t, "RequestType5", {
                enumerable: !0,
                get: function() {
                    return i.RequestType5
                }
            }), Object.defineProperty(t, "RequestType6", {
                enumerable: !0,
                get: function() {
                    return i.RequestType6
                }
            }), Object.defineProperty(t, "RequestType7", {
                enumerable: !0,
                get: function() {
                    return i.RequestType7
                }
            }), Object.defineProperty(t, "RequestType8", {
                enumerable: !0,
                get: function() {
                    return i.RequestType8
                }
            }), Object.defineProperty(t, "RequestType9", {
                enumerable: !0,
                get: function() {
                    return i.RequestType9
                }
            }), Object.defineProperty(t, "ResponseError", {
                enumerable: !0,
                get: function() {
                    return i.ResponseError
                }
            }), Object.defineProperty(t, "ErrorCodes", {
                enumerable: !0,
                get: function() {
                    return i.ErrorCodes
                }
            }), Object.defineProperty(t, "NotificationType", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType
                }
            }), Object.defineProperty(t, "NotificationType0", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType0
                }
            }), Object.defineProperty(t, "NotificationType1", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType1
                }
            }), Object.defineProperty(t, "NotificationType2", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType2
                }
            }), Object.defineProperty(t, "NotificationType3", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType3
                }
            }), Object.defineProperty(t, "NotificationType4", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType4
                }
            }), Object.defineProperty(t, "NotificationType5", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType5
                }
            }), Object.defineProperty(t, "NotificationType6", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType6
                }
            }), Object.defineProperty(t, "NotificationType7", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType7
                }
            }), Object.defineProperty(t, "NotificationType8", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType8
                }
            }), Object.defineProperty(t, "NotificationType9", {
                enumerable: !0,
                get: function() {
                    return i.NotificationType9
                }
            }), Object.defineProperty(t, "ParameterStructures", {
                enumerable: !0,
                get: function() {
                    return i.ParameterStructures
                }
            });
            const r = n("lPa5");
            Object.defineProperty(t, "LinkedMap", {
                enumerable: !0,
                get: function() {
                    return r.LinkedMap
                }
            }), Object.defineProperty(t, "LRUCache", {
                enumerable: !0,
                get: function() {
                    return r.LRUCache
                }
            }), Object.defineProperty(t, "Touch", {
                enumerable: !0,
                get: function() {
                    return r.Touch
                }
            });
            const o = n("mMLu");
            Object.defineProperty(t, "Disposable", {
                enumerable: !0,
                get: function() {
                    return o.Disposable
                }
            });
            const s = n("mukt");
            Object.defineProperty(t, "Event", {
                enumerable: !0,
                get: function() {
                    return s.Event
                }
            }), Object.defineProperty(t, "Emitter", {
                enumerable: !0,
                get: function() {
                    return s.Emitter
                }
            });
            const a = n("WZ1q");
            Object.defineProperty(t, "CancellationTokenSource", {
                enumerable: !0,
                get: function() {
                    return a.CancellationTokenSource
                }
            }), Object.defineProperty(t, "CancellationToken", {
                enumerable: !0,
                get: function() {
                    return a.CancellationToken
                }
            });
            const c = n("SC0f");
            Object.defineProperty(t, "SharedArraySenderStrategy", {
                enumerable: !0,
                get: function() {
                    return c.SharedArraySenderStrategy
                }
            }), Object.defineProperty(t, "SharedArrayReceiverStrategy", {
                enumerable: !0,
                get: function() {
                    return c.SharedArrayReceiverStrategy
                }
            });
            const u = n("DMCA");
            Object.defineProperty(t, "MessageReader", {
                enumerable: !0,
                get: function() {
                    return u.MessageReader
                }
            }), Object.defineProperty(t, "AbstractMessageReader", {
                enumerable: !0,
                get: function() {
                    return u.AbstractMessageReader
                }
            }), Object.defineProperty(t, "ReadableStreamMessageReader", {
                enumerable: !0,
                get: function() {
                    return u.ReadableStreamMessageReader
                }
            });
            const l = n("FiQC");
            Object.defineProperty(t, "MessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.MessageWriter
                }
            }), Object.defineProperty(t, "AbstractMessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.AbstractMessageWriter
                }
            }), Object.defineProperty(t, "WriteableStreamMessageWriter", {
                enumerable: !0,
                get: function() {
                    return l.WriteableStreamMessageWriter
                }
            });
            const d = n("Md4X");
            Object.defineProperty(t, "AbstractMessageBuffer", {
                enumerable: !0,
                get: function() {
                    return d.AbstractMessageBuffer
                }
            });
            const h = n("RSEp");
            Object.defineProperty(t, "ConnectionStrategy", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionStrategy
                }
            }), Object.defineProperty(t, "ConnectionOptions", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionOptions
                }
            }), Object.defineProperty(t, "NullLogger", {
                enumerable: !0,
                get: function() {
                    return h.NullLogger
                }
            }), Object.defineProperty(t, "createMessageConnection", {
                enumerable: !0,
                get: function() {
                    return h.createMessageConnection
                }
            }), Object.defineProperty(t, "ProgressToken", {
                enumerable: !0,
                get: function() {
                    return h.ProgressToken
                }
            }), Object.defineProperty(t, "ProgressType", {
                enumerable: !0,
                get: function() {
                    return h.ProgressType
                }
            }), Object.defineProperty(t, "Trace", {
                enumerable: !0,
                get: function() {
                    return h.Trace
                }
            }), Object.defineProperty(t, "TraceValues", {
                enumerable: !0,
                get: function() {
                    return h.TraceValues
                }
            }), Object.defineProperty(t, "TraceFormat", {
                enumerable: !0,
                get: function() {
                    return h.TraceFormat
                }
            }), Object.defineProperty(t, "SetTraceNotification", {
                enumerable: !0,
                get: function() {
                    return h.SetTraceNotification
                }
            }), Object.defineProperty(t, "LogTraceNotification", {
                enumerable: !0,
                get: function() {
                    return h.LogTraceNotification
                }
            }), Object.defineProperty(t, "ConnectionErrors", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionErrors
                }
            }), Object.defineProperty(t, "ConnectionError", {
                enumerable: !0,
                get: function() {
                    return h.ConnectionError
                }
            }), Object.defineProperty(t, "CancellationReceiverStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationReceiverStrategy
                }
            }), Object.defineProperty(t, "CancellationSenderStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationSenderStrategy
                }
            }), Object.defineProperty(t, "CancellationStrategy", {
                enumerable: !0,
                get: function() {
                    return h.CancellationStrategy
                }
            }), Object.defineProperty(t, "MessageStrategy", {
                enumerable: !0,
                get: function() {
                    return h.MessageStrategy
                }
            });
            const p = n("kQ7c");
            t.RAL = p.default
        },
        WZ1q: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CancellationTokenSource = t.CancellationToken = void 0;
            const i = n("kQ7c"),
                r = n("kLC8"),
                o = n("mukt");
            var s;
            ! function(e) {
                e.None = Object.freeze({
                    isCancellationRequested: !1,
                    onCancellationRequested: o.Event.None
                }), e.Cancelled = Object.freeze({
                    isCancellationRequested: !0,
                    onCancellationRequested: o.Event.None
                }), e.is = function(t) {
                    const n = t;
                    return n && (n === e.None || n === e.Cancelled || r.boolean(n.isCancellationRequested) && !!n.onCancellationRequested)
                }
            }(s || (t.CancellationToken = s = {}));
            const a = Object.freeze((function(e, t) {
                const n = (0, i.default)().timer.setTimeout(e.bind(t), 0);
                return {
                    dispose() {
                        n.dispose()
                    }
                }
            }));
            class c {
                constructor() {
                    this._isCancelled = !1
                }
                cancel() {
                    this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()))
                }
                get isCancellationRequested() {
                    return this._isCancelled
                }
                get onCancellationRequested() {
                    return this._isCancelled ? a : (this._emitter || (this._emitter = new o.Emitter), this._emitter.event)
                }
                dispose() {
                    this._emitter && (this._emitter.dispose(), this._emitter = void 0)
                }
            }
            t.CancellationTokenSource = class {
                get token() {
                    return this._token || (this._token = new c), this._token
                }
                cancel() {
                    this._token ? this._token.cancel() : this._token = s.Cancelled
                }
                dispose() {
                    this._token ? this._token instanceof c && this._token.dispose() : this._token = s.None
                }
            }
        },
        RSEp: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMessageConnection = t.ConnectionOptions = t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.RequestCancellationReceiverStrategy = t.IdCancellationReceiverStrategy = t.ConnectionStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = t.NullLogger = t.ProgressType = t.ProgressToken = void 0;
            const i = n("kQ7c"),
                r = n("kLC8"),
                o = n("eIQY"),
                s = n("lPa5"),
                a = n("mukt"),
                c = n("WZ1q");
            var u, l, d, h, p, g, m, f, y, v, C, b, D, R, _, w, T, S, k;
            ! function(e) {
                e.type = new o.NotificationType("$/cancelRequest")
            }(u || (u = {})),
            function(e) {
                e.is = function(e) {
                    return "string" == typeof e || "number" == typeof e
                }
            }(l || (t.ProgressToken = l = {})),
            function(e) {
                e.type = new o.NotificationType("$/progress")
            }(d || (d = {})), t.ProgressType = class {
                    constructor() {}
                },
                function(e) {
                    e.is = function(e) {
                        return r.func(e)
                    }
                }(h || (h = {})), t.NullLogger = Object.freeze({
                    error: () => {},
                    warn: () => {},
                    info: () => {},
                    log: () => {}
                }),
                function(e) {
                    e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", e[e.Verbose = 3] = "Verbose"
                }(p || (t.Trace = p = {})),
                function(e) {
                    e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose"
                }(g || (t.TraceValues = g = {})),
                function(e) {
                    e.fromString = function(t) {
                        if (!r.string(t)) return e.Off;
                        switch (t = t.toLowerCase()) {
                            case "off":
                            default:
                                return e.Off;
                            case "messages":
                                return e.Messages;
                            case "compact":
                                return e.Compact;
                            case "verbose":
                                return e.Verbose
                        }
                    }, e.toString = function(t) {
                        switch (t) {
                            case e.Off:
                                return "off";
                            case e.Messages:
                                return "messages";
                            case e.Compact:
                                return "compact";
                            case e.Verbose:
                                return "verbose";
                            default:
                                return "off"
                        }
                    }
                }(p || (t.Trace = p = {})),
                function(e) {
                    e.Text = "text", e.JSON = "json"
                }(m || (t.TraceFormat = m = {})),
                function(e) {
                    e.fromString = function(t) {
                        return r.string(t) && "json" === (t = t.toLowerCase()) ? e.JSON : e.Text
                    }
                }(m || (t.TraceFormat = m = {})),
                function(e) {
                    e.type = new o.NotificationType("$/setTrace")
                }(f || (t.SetTraceNotification = f = {})),
                function(e) {
                    e.type = new o.NotificationType("$/logTrace")
                }(y || (t.LogTraceNotification = y = {})),
                function(e) {
                    e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening"
                }(v || (t.ConnectionErrors = v = {}));
            class P extends Error {
                constructor(e, t) {
                    super(t), this.code = e, Object.setPrototypeOf(this, P.prototype)
                }
            }
            t.ConnectionError = P,
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && r.func(t.cancelUndispatched)
                    }
                }(C || (t.ConnectionStrategy = C = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && (void 0 === t.kind || "id" === t.kind) && r.func(t.createCancellationTokenSource) && (void 0 === t.dispose || r.func(t.dispose))
                    }
                }(b || (t.IdCancellationReceiverStrategy = b = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && "request" === t.kind && r.func(t.createCancellationTokenSource) && (void 0 === t.dispose || r.func(t.dispose))
                    }
                }(D || (t.RequestCancellationReceiverStrategy = D = {})),
                function(e) {
                    e.Message = Object.freeze({
                        createCancellationTokenSource: e => new c.CancellationTokenSource
                    }), e.is = function(e) {
                        return b.is(e) || D.is(e)
                    }
                }(R || (t.CancellationReceiverStrategy = R = {})),
                function(e) {
                    e.Message = Object.freeze({
                        sendCancellation: (e, t) => e.sendNotification(u.type, {
                            id: t
                        }),
                        cleanup(e) {}
                    }), e.is = function(e) {
                        const t = e;
                        return t && r.func(t.sendCancellation) && r.func(t.cleanup)
                    }
                }(_ || (t.CancellationSenderStrategy = _ = {})),
                function(e) {
                    e.Message = Object.freeze({
                        receiver: R.Message,
                        sender: _.Message
                    }), e.is = function(e) {
                        const t = e;
                        return t && R.is(t.receiver) && _.is(t.sender)
                    }
                }(w || (t.CancellationStrategy = w = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && r.func(t.handleMessage)
                    }
                }(T || (t.MessageStrategy = T = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return t && (w.is(t.cancellationStrategy) || C.is(t.connectionStrategy) || T.is(t.messageStrategy))
                    }
                }(S || (t.ConnectionOptions = S = {})),
                function(e) {
                    e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", e[e.Disposed = 4] = "Disposed"
                }(k || (k = {})), t.createMessageConnection = function(e, n, g, C) {
                    const D = void 0 !== g ? g : t.NullLogger;
                    let R = 0,
                        _ = 0,
                        S = 0;
                    const x = "2.0";
                    let E;
                    const O = new Map;
                    let q;
                    const M = new Map,
                        F = new Map;
                    let N, I, L = new s.LinkedMap,
                        j = new Map,
                        A = new Set,
                        H = new Map,
                        W = p.Off,
                        K = m.Text,
                        U = k.New;
                    const z = new a.Emitter,
                        $ = new a.Emitter,
                        V = new a.Emitter,
                        J = new a.Emitter,
                        B = new a.Emitter,
                        Q = C && C.cancellationStrategy ? C.cancellationStrategy : w.Message;

                    function G(e) {
                        if (null === e) throw new Error("Can't send requests with id null since the response can't be correlated.");
                        return "req-" + e.toString()
                    }

                    function Z(e) {}

                    function X() {
                        return U === k.Listening
                    }

                    function Y() {
                        return U === k.Closed
                    }

                    function ee() {
                        return U === k.Disposed
                    }

                    function te() {
                        U !== k.New && U !== k.Listening || (U = k.Closed, $.fire(void 0))
                    }

                    function ne() {
                        N || 0 === L.size || (N = (0, i.default)().timer.setImmediate((() => {
                            N = void 0,
                                function() {
                                    if (0 === L.size) return;
                                    const e = L.shift();
                                    try {
                                        const t = C ? .messageStrategy;
                                        T.is(t) ? t.handleMessage(e, ie) : ie(e)
                                    } finally {
                                        ne()
                                    }
                                }()
                        })))
                    }

                    function ie(e) {
                        o.Message.isRequest(e) ? function(e) {
                            if (ee()) return;

                            function t(t, i, r) {
                                const s = {
                                    jsonrpc: x,
                                    id: e.id
                                };
                                t instanceof o.ResponseError ? s.error = t.toJson() : s.result = void 0 === t ? null : t, se(s, i, r), n.write(s).catch((() => D.error("Sending response failed.")))
                            }

                            function i(t, i, r) {
                                const o = {
                                    jsonrpc: x,
                                    id: e.id,
                                    error: t.toJson()
                                };
                                se(o, i, r), n.write(o).catch((() => D.error("Sending response failed.")))
                            }! function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || !e.params || (t = `Params: ${oe(e.params)}\n\n`), I.log(`Received request '${e.method} - (${e.id})'.`, t)
                                    } else ce("receive-request", e)
                            }(e);
                            const s = O.get(e.method);
                            let a, c;
                            s && (a = s.type, c = s.handler);
                            const u = Date.now();
                            if (c || E) {
                                const s = e.id ? ? String(Date.now()),
                                    l = b.is(Q.receiver) ? Q.receiver.createCancellationTokenSource(s) : Q.receiver.createCancellationTokenSource(e);
                                null !== e.id && A.has(e.id) && l.cancel(), null !== e.id && H.set(s, l);
                                try {
                                    let d;
                                    if (c)
                                        if (void 0 === e.params) {
                                            if (void 0 !== a && 0 !== a.numberOfParams) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines ${a.numberOfParams} params but received none.`), e.method, u);
                                            d = c(l.token)
                                        } else if (Array.isArray(e.params)) {
                                        if (void 0 !== a && a.parameterStructures === o.ParameterStructures.byName) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by name but received parameters by position`), e.method, u);
                                        d = c(...e.params, l.token)
                                    } else {
                                        if (void 0 !== a && a.parameterStructures === o.ParameterStructures.byPosition) return void i(new o.ResponseError(o.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by position but received parameters by name`), e.method, u);
                                        d = c(e.params, l.token)
                                    } else E && (d = E(e.method, e.params, l.token));
                                    const h = d;
                                    d ? h.then ? h.then((n => {
                                        H.delete(s), t(n, e.method, u)
                                    }), (t => {
                                        H.delete(s), t instanceof o.ResponseError ? i(t, e.method, u) : t && r.string(t.message) ? i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${t.message}`), e.method, u) : i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u)
                                    })) : (H.delete(s), t(d, e.method, u)) : (H.delete(s), function(t, i, r) {
                                        void 0 === t && (t = null);
                                        const o = {
                                            jsonrpc: x,
                                            id: e.id,
                                            result: t
                                        };
                                        se(o, i, r), n.write(o).catch((() => D.error("Sending response failed.")))
                                    }(d, e.method, u))
                                } catch (n) {
                                    H.delete(s), n instanceof o.ResponseError ? t(n, e.method, u) : n && r.string(n.message) ? i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${n.message}`), e.method, u) : i(new o.ResponseError(o.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u)
                                }
                            } else i(new o.ResponseError(o.ErrorCodes.MethodNotFound, `Unhandled method ${e.method}`), e.method, u)
                        }(e) : o.Message.isNotification(e) ? function(e) {
                            if (ee()) return;
                            let t, n;
                            if (e.method === u.type.method) {
                                const t = e.params.id;
                                return A.delete(t), void ae(e)
                            } {
                                const i = M.get(e.method);
                                i && (n = i.handler, t = i.type)
                            }
                            if (n || q) try {
                                if (ae(e), n)
                                    if (void 0 === e.params) void 0 !== t && 0 !== t.numberOfParams && t.parameterStructures !== o.ParameterStructures.byName && D.error(`Notification ${e.method} defines ${t.numberOfParams} params but received none.`), n();
                                    else if (Array.isArray(e.params)) {
                                    const i = e.params;
                                    e.method === d.type.method && 2 === i.length && l.is(i[0]) ? n({
                                        token: i[0],
                                        value: i[1]
                                    }) : (void 0 !== t && (t.parameterStructures === o.ParameterStructures.byName && D.error(`Notification ${e.method} defines parameters by name but received parameters by position`), t.numberOfParams !== e.params.length && D.error(`Notification ${e.method} defines ${t.numberOfParams} params but received ${i.length} arguments`)), n(...i))
                                } else void 0 !== t && t.parameterStructures === o.ParameterStructures.byPosition && D.error(`Notification ${e.method} defines parameters by position but received parameters by name`), n(e.params);
                                else q && q(e.method, e.params)
                            } catch (t) {
                                t.message ? D.error(`Notification handler '${e.method}' failed with message: ${t.message}`) : D.error(`Notification handler '${e.method}' failed unexpectedly.`)
                            } else V.fire(e)
                        }(e) : o.Message.isResponse(e) ? function(e) {
                            if (!ee())
                                if (null === e.id) e.error ? D.error(`Received response message without id: Error is: \n${JSON.stringify(e.error,void 0,4)}`) : D.error("Received response message without id. No further error information provided.");
                                else {
                                    const t = e.id,
                                        n = j.get(t);
                                    if (function(e, t) {
                                            if (W !== p.Off && I)
                                                if (K === m.Text) {
                                                    let n;
                                                    if (W !== p.Verbose && W !== p.Compact || (e.error && e.error.data ? n = `Error data: ${oe(e.error.data)}\n\n` : e.result ? n = `Result: ${oe(e.result)}\n\n` : void 0 === e.error && (n = "No result returned.\n\n")), t) {
                                                        const i = e.error ? ` Request failed: ${e.error.message} (${e.error.code}).` : "";
                                                        I.log(`Received response '${t.method} - (${e.id})' in ${Date.now()-t.timerStart}ms.${i}`, n)
                                                    } else I.log(`Received response ${e.id} without active response promise.`, n)
                                                } else ce("receive-response", e)
                                        }(e, n), void 0 !== n) {
                                        j.delete(t);
                                        try {
                                            if (e.error) {
                                                const t = e.error;
                                                n.reject(new o.ResponseError(t.code, t.message, t.data))
                                            } else {
                                                if (void 0 === e.result) throw new Error("Should never happen.");
                                                n.resolve(e.result)
                                            }
                                        } catch (e) {
                                            e.message ? D.error(`Response handler '${n.method}' failed with message: ${e.message}`) : D.error(`Response handler '${n.method}' failed unexpectedly.`)
                                        }
                                    }
                                }
                        }(e) : function(e) {
                            if (!e) return void D.error("Received empty message.");
                            D.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(e,null,4)}`);
                            const t = e;
                            if (r.string(t.id) || r.number(t.id)) {
                                const e = t.id,
                                    n = j.get(e);
                                n && n.reject(new Error("The received response has neither a result nor an error property."))
                            }
                        }(e)
                    }
                    e.onClose(te), e.onError((function(e) {
                        z.fire([e, void 0, void 0])
                    })), n.onClose(te), n.onError((function(e) {
                        z.fire(e)
                    }));
                    const re = e => {
                        try {
                            if (o.Message.isNotification(e) && e.method === u.type.method) {
                                const t = e.params.id,
                                    i = G(t),
                                    r = L.get(i);
                                if (o.Message.isRequest(r)) {
                                    const o = C ? .connectionStrategy,
                                        s = o && o.cancelUndispatched ? o.cancelUndispatched(r, Z) : void 0;
                                    if (s && (void 0 !== s.error || void 0 !== s.result)) return L.delete(i), H.delete(t), s.id = r.id, se(s, e.method, Date.now()), void n.write(s).catch((() => D.error("Sending response for canceled message failed.")))
                                }
                                const s = H.get(t);
                                if (void 0 !== s) return s.cancel(), void ae(e);
                                A.add(t)
                            }! function(e, t) {
                                var n;
                                o.Message.isRequest(t) ? e.set(G(t.id), t) : o.Message.isResponse(t) ? e.set(null === (n = t.id) ? "res-unknown-" + (++S).toString() : "res-" + n.toString(), t) : e.set("not-" + (++_).toString(), t)
                            }(L, e)
                        } finally {
                            ne()
                        }
                    };

                    function oe(e) {
                        if (null != e) switch (W) {
                            case p.Verbose:
                                return JSON.stringify(e, null, 4);
                            case p.Compact:
                                return JSON.stringify(e);
                            default:
                                return
                        }
                    }

                    function se(e, t, n) {
                        if (W !== p.Off && I)
                            if (K === m.Text) {
                                let i;
                                W !== p.Verbose && W !== p.Compact || (e.error && e.error.data ? i = `Error data: ${oe(e.error.data)}\n\n` : e.result ? i = `Result: ${oe(e.result)}\n\n` : void 0 === e.error && (i = "No result returned.\n\n")), I.log(`Sending response '${t} - (${e.id})'. Processing request took ${Date.now()-n}ms`, i)
                            } else ce("send-response", e)
                    }

                    function ae(e) {
                        if (W !== p.Off && I && e.method !== y.type.method)
                            if (K === m.Text) {
                                let t;
                                W !== p.Verbose && W !== p.Compact || (t = e.params ? `Params: ${oe(e.params)}\n\n` : "No parameters provided.\n\n"), I.log(`Received notification '${e.method}'.`, t)
                            } else ce("receive-notification", e)
                    }

                    function ce(e, t) {
                        if (!I || W === p.Off) return;
                        const n = {
                            isLSPMessage: !0,
                            type: e,
                            message: t,
                            timestamp: Date.now()
                        };
                        I.log(n)
                    }

                    function ue() {
                        if (Y()) throw new P(v.Closed, "Connection is closed.");
                        if (ee()) throw new P(v.Disposed, "Connection is disposed.")
                    }

                    function le(e) {
                        return void 0 === e ? null : e
                    }

                    function de(e) {
                        return null === e ? void 0 : e
                    }

                    function he(e) {
                        return null != e && !Array.isArray(e) && "object" == typeof e
                    }

                    function pe(e, t) {
                        switch (e) {
                            case o.ParameterStructures.auto:
                                return he(t) ? de(t) : [le(t)];
                            case o.ParameterStructures.byName:
                                if (!he(t)) throw new Error("Received parameters by name but param is not an object literal.");
                                return de(t);
                            case o.ParameterStructures.byPosition:
                                return [le(t)];
                            default:
                                throw new Error(`Unknown parameter structure ${e.toString()}`)
                        }
                    }

                    function ge(e, t) {
                        let n;
                        const i = e.numberOfParams;
                        switch (i) {
                            case 0:
                                n = void 0;
                                break;
                            case 1:
                                n = pe(e.parameterStructures, t[0]);
                                break;
                            default:
                                n = [];
                                for (let e = 0; e < t.length && e < i; e++) n.push(le(t[e]));
                                if (t.length < i)
                                    for (let e = t.length; e < i; e++) n.push(null)
                        }
                        return n
                    }
                    const me = {
                        sendNotification: (e, ...t) => {
                            let i, s;
                            if (ue(), r.string(e)) {
                                i = e;
                                const n = t[0];
                                let r = 0,
                                    a = o.ParameterStructures.auto;
                                o.ParameterStructures.is(n) && (r = 1, a = n);
                                let c = t.length;
                                const u = c - r;
                                switch (u) {
                                    case 0:
                                        s = void 0;
                                        break;
                                    case 1:
                                        s = pe(a, t[r]);
                                        break;
                                    default:
                                        if (a === o.ParameterStructures.byName) throw new Error(`Received ${u} parameters for 'by Name' notification parameter structure.`);
                                        s = t.slice(r, c).map((e => le(e)))
                                }
                            } else {
                                const n = t;
                                i = e.method, s = ge(e, n)
                            }
                            const a = {
                                jsonrpc: x,
                                method: i,
                                params: s
                            };
                            return function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || (t = e.params ? `Params: ${oe(e.params)}\n\n` : "No parameters provided.\n\n"), I.log(`Sending notification '${e.method}'.`, t)
                                    } else ce("send-notification", e)
                            }(a), n.write(a).catch((e => {
                                throw D.error("Sending notification failed."), e
                            }))
                        },
                        onNotification: (e, t) => {
                            let n;
                            return ue(), r.func(e) ? q = e : t && (r.string(e) ? (n = e, M.set(e, {
                                type: void 0,
                                handler: t
                            })) : (n = e.method, M.set(e.method, {
                                type: e,
                                handler: t
                            }))), {
                                dispose: () => {
                                    void 0 !== n ? M.delete(n) : q = void 0
                                }
                            }
                        },
                        onProgress: (e, t, n) => {
                            if (F.has(t)) throw new Error(`Progress handler for token ${t} already registered`);
                            return F.set(t, n), {
                                dispose: () => {
                                    F.delete(t)
                                }
                            }
                        },
                        sendProgress: (e, t, n) => me.sendNotification(d.type, {
                            token: t,
                            value: n
                        }),
                        onUnhandledProgress: J.event,
                        sendRequest: (e, ...t) => {
                            let i, s, a;
                            if (ue(), function() {
                                    if (!X()) throw new Error("Call listen() first.")
                                }(), r.string(e)) {
                                i = e;
                                const n = t[0],
                                    r = t[t.length - 1];
                                let u = 0,
                                    l = o.ParameterStructures.auto;
                                o.ParameterStructures.is(n) && (u = 1, l = n);
                                let d = t.length;
                                c.CancellationToken.is(r) && (d -= 1, a = r);
                                const h = d - u;
                                switch (h) {
                                    case 0:
                                        s = void 0;
                                        break;
                                    case 1:
                                        s = pe(l, t[u]);
                                        break;
                                    default:
                                        if (l === o.ParameterStructures.byName) throw new Error(`Received ${h} parameters for 'by Name' request parameter structure.`);
                                        s = t.slice(u, d).map((e => le(e)))
                                }
                            } else {
                                const n = t;
                                i = e.method, s = ge(e, n);
                                const r = e.numberOfParams;
                                a = c.CancellationToken.is(n[r]) ? n[r] : void 0
                            }
                            const u = R++;
                            let l;
                            a && (l = a.onCancellationRequested((() => {
                                const e = Q.sender.sendCancellation(me, u);
                                return void 0 === e ? (D.log(`Received no promise from cancellation strategy when cancelling id ${u}`), Promise.resolve()) : e.catch((() => {
                                    D.log(`Sending cancellation messages for id ${u} failed`)
                                }))
                            })));
                            const d = {
                                jsonrpc: x,
                                id: u,
                                method: i,
                                params: s
                            };
                            return function(e) {
                                if (W !== p.Off && I)
                                    if (K === m.Text) {
                                        let t;
                                        W !== p.Verbose && W !== p.Compact || !e.params || (t = `Params: ${oe(e.params)}\n\n`), I.log(`Sending request '${e.method} - (${e.id})'.`, t)
                                    } else ce("send-request", e)
                            }(d), "function" == typeof Q.sender.enableCancellation && Q.sender.enableCancellation(d), new Promise((async (e, t) => {
                                const r = {
                                    method: i,
                                    timerStart: Date.now(),
                                    resolve: t => {
                                        e(t), Q.sender.cleanup(u), l ? .dispose()
                                    },
                                    reject: e => {
                                        t(e), Q.sender.cleanup(u), l ? .dispose()
                                    }
                                };
                                try {
                                    await n.write(d), j.set(u, r)
                                } catch (e) {
                                    throw D.error("Sending request failed."), r.reject(new o.ResponseError(o.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason")), e
                                }
                            }))
                        },
                        onRequest: (e, t) => {
                            ue();
                            let n = null;
                            return h.is(e) ? (n = void 0, E = e) : r.string(e) ? (n = null, void 0 !== t && (n = e, O.set(e, {
                                handler: t,
                                type: void 0
                            }))) : void 0 !== t && (n = e.method, O.set(e.method, {
                                type: e,
                                handler: t
                            })), {
                                dispose: () => {
                                    null !== n && (void 0 !== n ? O.delete(n) : E = void 0)
                                }
                            }
                        },
                        hasPendingResponse: () => j.size > 0,
                        trace: async (e, t, n) => {
                            let i = !1,
                                o = m.Text;
                            void 0 !== n && (r.boolean(n) ? i = n : (i = n.sendNotification || !1, o = n.traceFormat || m.Text)), W = e, K = o, I = W === p.Off ? void 0 : t, !i || Y() || ee() || await me.sendNotification(f.type, {
                                value: p.toString(e)
                            })
                        },
                        onError: z.event,
                        onClose: $.event,
                        onUnhandledNotification: V.event,
                        onDispose: B.event,
                        end: () => {
                            n.end()
                        },
                        dispose: () => {
                            if (ee()) return;
                            U = k.Disposed, B.fire(void 0);
                            const t = new o.ResponseError(o.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
                            for (const e of j.values()) e.reject(t);
                            j = new Map, H = new Map, A = new Set, L = new s.LinkedMap, r.func(n.dispose) && n.dispose(), r.func(e.dispose) && e.dispose()
                        },
                        listen: () => {
                            ue(),
                                function() {
                                    if (X()) throw new P(v.AlreadyListening, "Connection is already listening")
                                }(), U = k.Listening, e.listen(re)
                        },
                        inspect: () => {
                            (0, i.default)().console.log("inspect")
                        }
                    };
                    return me.onNotification(y.type, (e => {
                        if (W === p.Off || !I) return;
                        const t = W === p.Verbose || W === p.Compact;
                        I.log(e.message, t ? e.verbose : void 0)
                    })), me.onNotification(d.type, (e => {
                        const t = F.get(e.token);
                        t ? t(e.value) : J.fire(e)
                    })), me
                }
        },
        mMLu: (e, t) => {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Disposable = void 0,
                function(e) {
                    e.create = function(e) {
                        return {
                            dispose: e
                        }
                    }
                }(n || (t.Disposable = n = {}))
        },
        mukt: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Emitter = t.Event = void 0;
            const i = n("kQ7c");
            var r;
            ! function(e) {
                const t = {
                    dispose() {}
                };
                e.None = function() {
                    return t
                }
            }(r || (t.Event = r = {}));
            class o {
                add(e, t = null, n) {
                    this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({
                        dispose: () => this.remove(e, t)
                    })
                }
                remove(e, t = null) {
                    if (!this._callbacks) return;
                    let n = !1;
                    for (let i = 0, r = this._callbacks.length; i < r; i++)
                        if (this._callbacks[i] === e) {
                            if (this._contexts[i] === t) return this._callbacks.splice(i, 1), void this._contexts.splice(i, 1);
                            n = !0
                        }
                    if (n) throw new Error("When adding a listener with a context, you should remove it with the same context")
                }
                invoke(...e) {
                    if (!this._callbacks) return [];
                    const t = [],
                        n = this._callbacks.slice(0),
                        r = this._contexts.slice(0);
                    for (let o = 0, s = n.length; o < s; o++) try {
                        t.push(n[o].apply(r[o], e))
                    } catch (e) {
                        (0, i.default)().console.error(e)
                    }
                    return t
                }
                isEmpty() {
                    return !this._callbacks || 0 === this._callbacks.length
                }
                dispose() {
                    this._callbacks = void 0, this._contexts = void 0
                }
            }
            class s {
                constructor(e) {
                    this._options = e
                }
                get event() {
                    return this._event || (this._event = (e, t, n) => {
                        this._callbacks || (this._callbacks = new o), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
                        const i = {
                            dispose: () => {
                                this._callbacks && (this._callbacks.remove(e, t), i.dispose = s._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this))
                            }
                        };
                        return Array.isArray(n) && n.push(i), i
                    }), this._event
                }
                fire(e) {
                    this._callbacks && this._callbacks.invoke.call(this._callbacks, e)
                }
                dispose() {
                    this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0)
                }
            }
            t.Emitter = s, s._noop = function() {}
        },
        kLC8: (e, t) => {
            "use strict";

            function n(e) {
                return "string" == typeof e || e instanceof String
            }

            function i(e) {
                return Array.isArray(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0, t.boolean = function(e) {
                return !0 === e || !1 === e
            }, t.string = n, t.number = function(e) {
                return "number" == typeof e || e instanceof Number
            }, t.error = function(e) {
                return e instanceof Error
            }, t.func = function(e) {
                return "function" == typeof e
            }, t.array = i, t.stringArray = function(e) {
                return i(e) && e.every((e => n(e)))
            }
        },
        lPa5: (e, t) => {
            "use strict";
            var n, i;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LRUCache = t.LinkedMap = t.Touch = void 0,
                function(e) {
                    e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last
                }(i || (t.Touch = i = {}));
            class r {
                constructor() {
                    this[n] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
                }
                clear() {
                    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++
                }
                isEmpty() {
                    return !this._head && !this._tail
                }
                get size() {
                    return this._size
                }
                get first() {
                    return this._head ? .value
                }
                get last() {
                    return this._tail ? .value
                }
                has(e) {
                    return this._map.has(e)
                }
                get(e, t = i.None) {
                    const n = this._map.get(e);
                    if (n) return t !== i.None && this.touch(n, t), n.value
                }
                set(e, t, n = i.None) {
                    let r = this._map.get(e);
                    if (r) r.value = t, n !== i.None && this.touch(r, n);
                    else {
                        switch (r = {
                            key: e,
                            value: t,
                            next: void 0,
                            previous: void 0
                        }, n) {
                            case i.None:
                                this.addItemLast(r);
                                break;
                            case i.First:
                                this.addItemFirst(r);
                                break;
                            case i.Last:
                            default:
                                this.addItemLast(r)
                        }
                        this._map.set(e, r), this._size++
                    }
                    return this
                }
                delete(e) {
                    return !!this.remove(e)
                }
                remove(e) {
                    const t = this._map.get(e);
                    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value
                }
                shift() {
                    if (!this._head && !this._tail) return;
                    if (!this._head || !this._tail) throw new Error("Invalid list");
                    const e = this._head;
                    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value
                }
                forEach(e, t) {
                    const n = this._state;
                    let i = this._head;
                    for (; i;) {
                        if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
                        i = i.next
                    }
                }
                keys() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: t.key,
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }
                values() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: t.value,
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }
                entries() {
                    const e = this._state;
                    let t = this._head;
                    const n = {
                        [Symbol.iterator]: () => n,
                        next: () => {
                            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
                            if (t) {
                                const e = {
                                    value: [t.key, t.value],
                                    done: !1
                                };
                                return t = t.next, e
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    };
                    return n
                }[(n = Symbol.toStringTag, Symbol.iterator)]() {
                    return this.entries()
                }
                trimOld(e) {
                    if (e >= this.size) return;
                    if (0 === e) return void this.clear();
                    let t = this._head,
                        n = this.size;
                    for (; t && n > e;) this._map.delete(t.key), t = t.next, n--;
                    this._head = t, this._size = n, t && (t.previous = void 0), this._state++
                }
                addItemFirst(e) {
                    if (this._head || this._tail) {
                        if (!this._head) throw new Error("Invalid list");
                        e.next = this._head, this._head.previous = e
                    } else this._tail = e;
                    this._head = e, this._state++
                }
                addItemLast(e) {
                    if (this._head || this._tail) {
                        if (!this._tail) throw new Error("Invalid list");
                        e.previous = this._tail, this._tail.next = e
                    } else this._head = e;
                    this._tail = e, this._state++
                }
                removeItem(e) {
                    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
                    else if (e === this._head) {
                        if (!e.next) throw new Error("Invalid list");
                        e.next.previous = void 0, this._head = e.next
                    } else if (e === this._tail) {
                        if (!e.previous) throw new Error("Invalid list");
                        e.previous.next = void 0, this._tail = e.previous
                    } else {
                        const t = e.next,
                            n = e.previous;
                        if (!t || !n) throw new Error("Invalid list");
                        t.previous = n, n.next = t
                    }
                    e.next = void 0, e.previous = void 0, this._state++
                }
                touch(e, t) {
                    if (!this._head || !this._tail) throw new Error("Invalid list");
                    if (t === i.First || t === i.Last)
                        if (t === i.First) {
                            if (e === this._head) return;
                            const t = e.next,
                                n = e.previous;
                            e === this._tail ? (n.next = void 0, this._tail = n) : (t.previous = n, n.next = t), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++
                        } else if (t === i.Last) {
                        if (e === this._tail) return;
                        const t = e.next,
                            n = e.previous;
                        e === this._head ? (t.previous = void 0, this._head = t) : (t.previous = n, n.next = t), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++
                    }
                }
                toJSON() {
                    const e = [];
                    return this.forEach(((t, n) => {
                        e.push([n, t])
                    })), e
                }
                fromJSON(e) {
                    this.clear();
                    for (const [t, n] of e) this.set(t, n)
                }
            }
            t.LinkedMap = r, t.LRUCache = class extends r {
                constructor(e, t = 1) {
                    super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1)
                }
                get limit() {
                    return this._limit
                }
                set limit(e) {
                    this._limit = e, this.checkTrim()
                }
                get ratio() {
                    return this._ratio
                }
                set ratio(e) {
                    this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim()
                }
                get(e, t = i.AsNew) {
                    return super.get(e, t)
                }
                peek(e) {
                    return super.get(e, i.None)
                }
                set(e, t) {
                    return super.set(e, t, i.Last), this.checkTrim(), this
                }
                checkTrim() {
                    this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
                }
            }
        },
        Md4X: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AbstractMessageBuffer = void 0, t.AbstractMessageBuffer = class {
                constructor(e = "utf-8") {
                    this._encoding = e, this._chunks = [], this._totalLength = 0
                }
                get encoding() {
                    return this._encoding
                }
                append(e) {
                    const t = "string" == typeof e ? this.fromString(e, this._encoding) : e;
                    this._chunks.push(t), this._totalLength += t.byteLength
                }
                tryReadHeaders(e = !1) {
                    if (0 === this._chunks.length) return;
                    let t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    e: for (; n < this._chunks.length;) {
                        const e = this._chunks[n];
                        for (i = 0; i < e.length;) {
                            switch (e[i]) {
                                case 13:
                                    switch (t) {
                                        case 0:
                                            t = 1;
                                            break;
                                        case 2:
                                            t = 3;
                                            break;
                                        default:
                                            t = 0
                                    }
                                    break;
                                case 10:
                                    switch (t) {
                                        case 1:
                                            t = 2;
                                            break;
                                        case 3:
                                            t = 4, i++;
                                            break e;
                                        default:
                                            t = 0
                                    }
                                    break;
                                default:
                                    t = 0
                            }
                            i++
                        }
                        r += e.byteLength, n++
                    }
                    if (4 !== t) return;
                    const o = this._read(r + i),
                        s = new Map,
                        a = this.toString(o, "ascii").split("\r\n");
                    if (a.length < 2) return s;
                    for (let t = 0; t < a.length - 2; t++) {
                        const n = a[t],
                            i = n.indexOf(":");
                        if (-1 === i) throw new Error(`Message header must separate key and value using ':'\n${n}`);
                        const r = n.substr(0, i),
                            o = n.substr(i + 1).trim();
                        s.set(e ? r.toLowerCase() : r, o)
                    }
                    return s
                }
                tryReadBody(e) {
                    if (!(this._totalLength < e)) return this._read(e)
                }
                get numberOfBytes() {
                    return this._totalLength
                }
                _read(e) {
                    if (0 === e) return this.emptyBuffer();
                    if (e > this._totalLength) throw new Error("Cannot read so many bytes!");
                    if (this._chunks[0].byteLength === e) {
                        const t = this._chunks[0];
                        return this._chunks.shift(), this._totalLength -= e, this.asNative(t)
                    }
                    if (this._chunks[0].byteLength > e) {
                        const t = this._chunks[0],
                            n = this.asNative(t, e);
                        return this._chunks[0] = t.slice(e), this._totalLength -= e, n
                    }
                    const t = this.allocNative(e);
                    let n = 0;
                    for (; e > 0;) {
                        const i = this._chunks[0];
                        if (i.byteLength > e) {
                            const r = i.slice(0, e);
                            t.set(r, n), n += e, this._chunks[0] = i.slice(e), this._totalLength -= e, e -= e
                        } else t.set(i, n), n += i.byteLength, this._chunks.shift(), this._totalLength -= i.byteLength, e -= i.byteLength
                    }
                    return t
                }
            }
        },
        DMCA: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = void 0;
            const i = n("kQ7c"),
                r = n("kLC8"),
                o = n("mukt"),
                s = n("s370");
            var a, c;
            ! function(e) {
                e.is = function(e) {
                    let t = e;
                    return t && r.func(t.listen) && r.func(t.dispose) && r.func(t.onError) && r.func(t.onClose) && r.func(t.onPartialMessage)
                }
            }(a || (t.MessageReader = a = {}));
            class u {
                constructor() {
                    this.errorEmitter = new o.Emitter, this.closeEmitter = new o.Emitter, this.partialMessageEmitter = new o.Emitter
                }
                dispose() {
                    this.errorEmitter.dispose(), this.closeEmitter.dispose()
                }
                get onError() {
                    return this.errorEmitter.event
                }
                fireError(e) {
                    this.errorEmitter.fire(this.asError(e))
                }
                get onClose() {
                    return this.closeEmitter.event
                }
                fireClose() {
                    this.closeEmitter.fire(void 0)
                }
                get onPartialMessage() {
                    return this.partialMessageEmitter.event
                }
                firePartialMessage(e) {
                    this.partialMessageEmitter.fire(e)
                }
                asError(e) {
                    return e instanceof Error ? e : new Error(`Reader received error. Reason: ${r.string(e.message)?e.message:"unknown"}`)
                }
            }
            t.AbstractMessageReader = u,
                function(e) {
                    e.fromOptions = function(e) {
                        let t, n;
                        const r = new Map;
                        let o;
                        const s = new Map;
                        if (void 0 === e || "string" == typeof e) t = e ? ? "utf-8";
                        else {
                            if (t = e.charset ? ? "utf-8", void 0 !== e.contentDecoder && (n = e.contentDecoder, r.set(n.name, n)), void 0 !== e.contentDecoders)
                                for (const t of e.contentDecoders) r.set(t.name, t);
                            if (void 0 !== e.contentTypeDecoder && (o = e.contentTypeDecoder, s.set(o.name, o)), void 0 !== e.contentTypeDecoders)
                                for (const t of e.contentTypeDecoders) s.set(t.name, t)
                        }
                        return void 0 === o && (o = (0, i.default)().applicationJson.decoder, s.set(o.name, o)), {
                            charset: t,
                            contentDecoder: n,
                            contentDecoders: r,
                            contentTypeDecoder: o,
                            contentTypeDecoders: s
                        }
                    }
                }(c || (c = {})), t.ReadableStreamMessageReader = class extends u {
                    constructor(e, t) {
                        super(), this.readable = e, this.options = c.fromOptions(t), this.buffer = (0, i.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new s.Semaphore(1)
                    }
                    set partialMessageTimeout(e) {
                        this._partialMessageTimeout = e
                    }
                    get partialMessageTimeout() {
                        return this._partialMessageTimeout
                    }
                    listen(e) {
                        this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
                        const t = this.readable.onData((e => {
                            this.onData(e)
                        }));
                        return this.readable.onError((e => this.fireError(e))), this.readable.onClose((() => this.fireClose())), t
                    }
                    onData(e) {
                        try {
                            for (this.buffer.append(e);;) {
                                if (-1 === this.nextMessageLength) {
                                    const e = this.buffer.tryReadHeaders(!0);
                                    if (!e) return;
                                    const t = e.get("content-length");
                                    if (!t) return void this.fireError(new Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(e))}`));
                                    const n = parseInt(t);
                                    if (isNaN(n)) return void this.fireError(new Error(`Content-Length value must be a number. Got ${t}`));
                                    this.nextMessageLength = n
                                }
                                const e = this.buffer.tryReadBody(this.nextMessageLength);
                                if (void 0 === e) return void this.setPartialMessageTimer();
                                this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock((async () => {
                                    const t = void 0 !== this.options.contentDecoder ? await this.options.contentDecoder.decode(e) : e,
                                        n = await this.options.contentTypeDecoder.decode(t, this.options);
                                    this.callback(n)
                                })).catch((e => {
                                    this.fireError(e)
                                }))
                            }
                        } catch (e) {
                            this.fireError(e)
                        }
                    }
                    clearPartialMessageTimer() {
                        this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0)
                    }
                    setPartialMessageTimer() {
                        this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0 || (this.partialMessageTimer = (0, i.default)().timer.setTimeout(((e, t) => {
                            this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({
                                messageToken: e,
                                waitingTime: t
                            }), this.setPartialMessageTimer())
                        }), this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout))
                    }
                }
        },
        FiQC: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = void 0;
            const i = n("kQ7c"),
                r = n("kLC8"),
                o = n("s370"),
                s = n("mukt");
            var a, c;
            ! function(e) {
                e.is = function(e) {
                    let t = e;
                    return t && r.func(t.dispose) && r.func(t.onClose) && r.func(t.onError) && r.func(t.write)
                }
            }(a || (t.MessageWriter = a = {}));
            class u {
                constructor() {
                    this.errorEmitter = new s.Emitter, this.closeEmitter = new s.Emitter
                }
                dispose() {
                    this.errorEmitter.dispose(), this.closeEmitter.dispose()
                }
                get onError() {
                    return this.errorEmitter.event
                }
                fireError(e, t, n) {
                    this.errorEmitter.fire([this.asError(e), t, n])
                }
                get onClose() {
                    return this.closeEmitter.event
                }
                fireClose() {
                    this.closeEmitter.fire(void 0)
                }
                asError(e) {
                    return e instanceof Error ? e : new Error(`Writer received error. Reason: ${r.string(e.message)?e.message:"unknown"}`)
                }
            }
            t.AbstractMessageWriter = u,
                function(e) {
                    e.fromOptions = function(e) {
                        return void 0 === e || "string" == typeof e ? {
                            charset: e ? ? "utf-8",
                            contentTypeEncoder: (0, i.default)().applicationJson.encoder
                        } : {
                            charset: e.charset ? ? "utf-8",
                            contentEncoder: e.contentEncoder,
                            contentTypeEncoder: e.contentTypeEncoder ? ? (0, i.default)().applicationJson.encoder
                        }
                    }
                }(c || (c = {})), t.WriteableStreamMessageWriter = class extends u {
                    constructor(e, t) {
                        super(), this.writable = e, this.options = c.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new o.Semaphore(1), this.writable.onError((e => this.fireError(e))), this.writable.onClose((() => this.fireClose()))
                    }
                    async write(e) {
                        return this.writeSemaphore.lock((async () => this.options.contentTypeEncoder.encode(e, this.options).then((e => void 0 !== this.options.contentEncoder ? this.options.contentEncoder.encode(e) : e)).then((t => {
                            const n = [];
                            return n.push("Content-Length: ", t.byteLength.toString(), "\r\n"), n.push("\r\n"), this.doWrite(e, n, t)
                        }), (e => {
                            throw this.fireError(e), e
                        }))))
                    }
                    async doWrite(e, t, n) {
                        try {
                            return await this.writable.write(t.join(""), "ascii"), this.writable.write(n)
                        } catch (t) {
                            return this.handleError(t, e), Promise.reject(t)
                        }
                    }
                    handleError(e, t) {
                        this.errorCount++, this.fireError(e, t, this.errorCount)
                    }
                    end() {
                        this.writable.end()
                    }
                }
        },
        eIQY: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Message = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType = t.RequestType0 = t.AbstractMessageSignature = t.ParameterStructures = t.ResponseError = t.ErrorCodes = void 0;
            const i = n("kLC8");
            var r, o;
            ! function(e) {
                e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3
            }(r || (t.ErrorCodes = r = {}));
            class s extends Error {
                constructor(e, t, n) {
                    super(t), this.code = i.number(e) ? e : r.UnknownErrorCode, this.data = n, Object.setPrototypeOf(this, s.prototype)
                }
                toJson() {
                    const e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), e
                }
            }
            t.ResponseError = s;
            class a {
                constructor(e) {
                    this.kind = e
                }
                static is(e) {
                    return e === a.auto || e === a.byName || e === a.byPosition
                }
                toString() {
                    return this.kind
                }
            }
            t.ParameterStructures = a, a.auto = new a("auto"), a.byPosition = new a("byPosition"), a.byName = new a("byName");
            class c {
                constructor(e, t) {
                    this.method = e, this.numberOfParams = t
                }
                get parameterStructures() {
                    return a.auto
                }
            }
            t.AbstractMessageSignature = c, t.RequestType0 = class extends c {
                    constructor(e) {
                        super(e, 0)
                    }
                }, t.RequestType = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.RequestType1 = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.RequestType2 = class extends c {
                    constructor(e) {
                        super(e, 2)
                    }
                }, t.RequestType3 = class extends c {
                    constructor(e) {
                        super(e, 3)
                    }
                }, t.RequestType4 = class extends c {
                    constructor(e) {
                        super(e, 4)
                    }
                }, t.RequestType5 = class extends c {
                    constructor(e) {
                        super(e, 5)
                    }
                }, t.RequestType6 = class extends c {
                    constructor(e) {
                        super(e, 6)
                    }
                }, t.RequestType7 = class extends c {
                    constructor(e) {
                        super(e, 7)
                    }
                }, t.RequestType8 = class extends c {
                    constructor(e) {
                        super(e, 8)
                    }
                }, t.RequestType9 = class extends c {
                    constructor(e) {
                        super(e, 9)
                    }
                }, t.NotificationType = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.NotificationType0 = class extends c {
                    constructor(e) {
                        super(e, 0)
                    }
                }, t.NotificationType1 = class extends c {
                    constructor(e, t = a.auto) {
                        super(e, 1), this._parameterStructures = t
                    }
                    get parameterStructures() {
                        return this._parameterStructures
                    }
                }, t.NotificationType2 = class extends c {
                    constructor(e) {
                        super(e, 2)
                    }
                }, t.NotificationType3 = class extends c {
                    constructor(e) {
                        super(e, 3)
                    }
                }, t.NotificationType4 = class extends c {
                    constructor(e) {
                        super(e, 4)
                    }
                }, t.NotificationType5 = class extends c {
                    constructor(e) {
                        super(e, 5)
                    }
                }, t.NotificationType6 = class extends c {
                    constructor(e) {
                        super(e, 6)
                    }
                }, t.NotificationType7 = class extends c {
                    constructor(e) {
                        super(e, 7)
                    }
                }, t.NotificationType8 = class extends c {
                    constructor(e) {
                        super(e, 8)
                    }
                }, t.NotificationType9 = class extends c {
                    constructor(e) {
                        super(e, 9)
                    }
                },
                function(e) {
                    e.isRequest = function(e) {
                        const t = e;
                        return t && i.string(t.method) && (i.string(t.id) || i.number(t.id))
                    }, e.isNotification = function(e) {
                        const t = e;
                        return t && i.string(t.method) && void 0 === e.id
                    }, e.isResponse = function(e) {
                        const t = e;
                        return t && (void 0 !== t.result || !!t.error) && (i.string(t.id) || i.number(t.id) || null === t.id)
                    }
                }(o || (t.Message = o = {}))
        },
        kQ7c: (e, t) => {
            "use strict";
            let n;

            function i() {
                if (void 0 === n) throw new Error("No runtime abstraction layer installed");
                return n
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.install = function(e) {
                        if (void 0 === e) throw new Error("No runtime abstraction layer provided");
                        n = e
                    }
                }(i || (i = {})), t.default = i
        },
        s370: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Semaphore = void 0;
            const i = n("kQ7c");
            t.Semaphore = class {
                constructor(e = 1) {
                    if (e <= 0) throw new Error("Capacity must be greater than 0");
                    this._capacity = e, this._active = 0, this._waiting = []
                }
                lock(e) {
                    return new Promise(((t, n) => {
                        this._waiting.push({
                            thunk: e,
                            resolve: t,
                            reject: n
                        }), this.runNext()
                    }))
                }
                get active() {
                    return this._active
                }
                runNext() {
                    0 !== this._waiting.length && this._active !== this._capacity && (0, i.default)().timer.setImmediate((() => this.doRunNext()))
                }
                doRunNext() {
                    if (0 === this._waiting.length || this._active === this._capacity) return;
                    const e = this._waiting.shift();
                    if (this._active++, this._active > this._capacity) throw new Error("To many thunks active");
                    try {
                        const t = e.thunk();
                        t instanceof Promise ? t.then((t => {
                            this._active--, e.resolve(t), this.runNext()
                        }), (t => {
                            this._active--, e.reject(t), this.runNext()
                        })) : (this._active--, e.resolve(t), this.runNext())
                    } catch (t) {
                        this._active--, e.reject(t), this.runNext()
                    }
                }
            }
        },
        SC0f: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = void 0;
            const i = n("WZ1q");
            var r;
            ! function(e) {
                e.Continue = 0, e.Cancelled = 1
            }(r || (r = {})), t.SharedArraySenderStrategy = class {
                constructor() {
                    this.buffers = new Map
                }
                enableCancellation(e) {
                    if (null === e.id) return;
                    const t = new SharedArrayBuffer(4);
                    new Int32Array(t, 0, 1)[0] = r.Continue, this.buffers.set(e.id, t), e.$cancellationData = t
                }
                async sendCancellation(e, t) {
                    const n = this.buffers.get(t);
                    if (void 0 === n) return;
                    const i = new Int32Array(n, 0, 1);
                    Atomics.store(i, 0, r.Cancelled)
                }
                cleanup(e) {
                    this.buffers.delete(e)
                }
                dispose() {
                    this.buffers.clear()
                }
            };
            class o {
                constructor(e) {
                    this.data = new Int32Array(e, 0, 1)
                }
                get isCancellationRequested() {
                    return Atomics.load(this.data, 0) === r.Cancelled
                }
                get onCancellationRequested() {
                    throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")
                }
            }
            class s {
                constructor(e) {
                    this.token = new o(e)
                }
                cancel() {}
                dispose() {}
            }
            t.SharedArrayReceiverStrategy = class {
                constructor() {
                    this.kind = "request"
                }
                createCancellationTokenSource(e) {
                    const t = e.$cancellationData;
                    return void 0 === t ? new i.CancellationTokenSource : new s(t)
                }
            }
        },
        IBju: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => r
            });
            var i = n("0Qos");
            class r extends i.BaseLanguageClient {
                connectionProvider;
                constructor({
                    id: e,
                    name: t,
                    clientOptions: n,
                    connectionProvider: i
                }) {
                    super(e ? ? t.toLowerCase(), t, n), this.connectionProvider = i
                }
                createMessageTransports(e) {
                    return this.connectionProvider.get(e)
                }
            }
        },
        ZkAy: (e, t, n) => {
            "use strict";
            var i, r, o, s, a, c, u, l, d, h, p, g, m, f, y, v, C, b, D, R, _, w, T, S, k, P, x, E, O, q, M, F, N, I, L, j, A, H, W, K, U, z, $, V, J, B, Q, G, Z, X, Y, ee, te, ne, ie, re, oe, se, ae, ce, ue, le, de, he, pe, ge, me, fe, ye, ve, Ce, be, De, Re, _e, we, Te, Se;
            n.r(t), n.d(t, {
                    AnnotatedTextEdit: () => T,
                    ChangeAnnotation: () => _,
                    ChangeAnnotationIdentifier: () => w,
                    CodeAction: () => oe,
                    CodeActionContext: () => re,
                    CodeActionKind: () => ne,
                    CodeActionTriggerKind: () => ie,
                    CodeDescription: () => C,
                    CodeLens: () => se,
                    Color: () => d,
                    ColorInformation: () => h,
                    ColorPresentation: () => p,
                    Command: () => D,
                    CompletionItem: () => U,
                    CompletionItemKind: () => L,
                    CompletionItemLabelDetails: () => K,
                    CompletionItemTag: () => A,
                    CompletionList: () => z,
                    CreateFile: () => k,
                    DeleteFile: () => x,
                    Diagnostic: () => b,
                    DiagnosticRelatedInformation: () => f,
                    DiagnosticSeverity: () => y,
                    DiagnosticTag: () => v,
                    DocumentHighlight: () => G,
                    DocumentHighlightKind: () => Q,
                    DocumentLink: () => ce,
                    DocumentSymbol: () => te,
                    DocumentUri: () => i,
                    EOL: () => Ee,
                    FoldingRange: () => m,
                    FoldingRangeKind: () => g,
                    FormattingOptions: () => ae,
                    Hover: () => V,
                    InlayHint: () => Ce,
                    InlayHintKind: () => ye,
                    InlayHintLabelPart: () => ve,
                    InlineCompletionContext: () => Te,
                    InlineCompletionItem: () => De,
                    InlineCompletionList: () => Re,
                    InlineCompletionTriggerKind: () => _e,
                    InlineValueContext: () => fe,
                    InlineValueEvaluatableExpression: () => me,
                    InlineValueText: () => pe,
                    InlineValueVariableLookup: () => ge,
                    InsertReplaceEdit: () => H,
                    InsertTextFormat: () => j,
                    InsertTextMode: () => W,
                    Location: () => u,
                    LocationLink: () => l,
                    MarkedString: () => $,
                    MarkupContent: () => I,
                    MarkupKind: () => N,
                    OptionalVersionedTextDocumentIdentifier: () => M,
                    ParameterInformation: () => J,
                    Position: () => a,
                    Range: () => c,
                    RenameFile: () => P,
                    SelectedCompletionInfo: () => we,
                    SelectionRange: () => ue,
                    SemanticTokenModifiers: () => de,
                    SemanticTokenTypes: () => le,
                    SemanticTokens: () => he,
                    SignatureInformation: () => B,
                    StringValue: () => be,
                    SymbolInformation: () => Y,
                    SymbolKind: () => Z,
                    SymbolTag: () => X,
                    TextDocument: () => Oe,
                    TextDocumentEdit: () => S,
                    TextDocumentIdentifier: () => O,
                    TextDocumentItem: () => F,
                    TextEdit: () => R,
                    URI: () => r,
                    VersionedTextDocumentIdentifier: () => q,
                    WorkspaceChange: () => xe,
                    WorkspaceEdit: () => E,
                    WorkspaceFolder: () => Se,
                    WorkspaceSymbol: () => ee,
                    integer: () => o,
                    uinteger: () => s
                }),
                function(e) {
                    e.is = function(e) {
                        return "string" == typeof e
                    }
                }(i || (i = {})),
                function(e) {
                    e.is = function(e) {
                        return "string" == typeof e
                    }
                }(r || (r = {})),
                function(e) {
                    e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647, e.is = function(t) {
                        return "number" == typeof t && e.MIN_VALUE <= t && t <= e.MAX_VALUE
                    }
                }(o || (o = {})),
                function(e) {
                    e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647, e.is = function(t) {
                        return "number" == typeof t && e.MIN_VALUE <= t && t <= e.MAX_VALUE
                    }
                }(s || (s = {})),
                function(e) {
                    e.create = function(e, t) {
                        return e === Number.MAX_VALUE && (e = s.MAX_VALUE), t === Number.MAX_VALUE && (t = s.MAX_VALUE), {
                            line: e,
                            character: t
                        }
                    }, e.is = function(e) {
                        let t = e;
                        return qe.objectLiteral(t) && qe.uinteger(t.line) && qe.uinteger(t.character)
                    }
                }(a || (a = {})),
                function(e) {
                    e.create = function(e, t, n, i) {
                        if (qe.uinteger(e) && qe.uinteger(t) && qe.uinteger(n) && qe.uinteger(i)) return {
                            start: a.create(e, t),
                            end: a.create(n, i)
                        };
                        if (a.is(e) && a.is(t)) return {
                            start: e,
                            end: t
                        };
                        throw new Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${i}]`)
                    }, e.is = function(e) {
                        let t = e;
                        return qe.objectLiteral(t) && a.is(t.start) && a.is(t.end)
                    }
                }(c || (c = {})),
                function(e) {
                    e.create = function(e, t) {
                        return {
                            uri: e,
                            range: t
                        }
                    }, e.is = function(e) {
                        let t = e;
                        return qe.objectLiteral(t) && c.is(t.range) && (qe.string(t.uri) || qe.undefined(t.uri))
                    }
                }(u || (u = {})),
                function(e) {
                    e.create = function(e, t, n, i) {
                        return {
                            targetUri: e,
                            targetRange: t,
                            targetSelectionRange: n,
                            originSelectionRange: i
                        }
                    }, e.is = function(e) {
                        let t = e;
                        return qe.objectLiteral(t) && c.is(t.targetRange) && qe.string(t.targetUri) && c.is(t.targetSelectionRange) && (c.is(t.originSelectionRange) || qe.undefined(t.originSelectionRange))
                    }
                }(l || (l = {})),
                function(e) {
                    e.create = function(e, t, n, i) {
                        return {
                            red: e,
                            green: t,
                            blue: n,
                            alpha: i
                        }
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.numberRange(t.red, 0, 1) && qe.numberRange(t.green, 0, 1) && qe.numberRange(t.blue, 0, 1) && qe.numberRange(t.alpha, 0, 1)
                    }
                }(d || (d = {})),
                function(e) {
                    e.create = function(e, t) {
                        return {
                            range: e,
                            color: t
                        }
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && c.is(t.range) && d.is(t.color)
                    }
                }(h || (h = {})),
                function(e) {
                    e.create = function(e, t, n) {
                        return {
                            label: e,
                            textEdit: t,
                            additionalTextEdits: n
                        }
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.string(t.label) && (qe.undefined(t.textEdit) || R.is(t)) && (qe.undefined(t.additionalTextEdits) || qe.typedArray(t.additionalTextEdits, R.is))
                    }
                }(p || (p = {})),
                function(e) {
                    e.Comment = "comment", e.Imports = "imports", e.Region = "region"
                }(g || (g = {})),
                function(e) {
                    e.create = function(e, t, n, i, r, o) {
                        const s = {
                            startLine: e,
                            endLine: t
                        };
                        return qe.defined(n) && (s.startCharacter = n), qe.defined(i) && (s.endCharacter = i), qe.defined(r) && (s.kind = r), qe.defined(o) && (s.collapsedText = o), s
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.uinteger(t.startLine) && qe.uinteger(t.startLine) && (qe.undefined(t.startCharacter) || qe.uinteger(t.startCharacter)) && (qe.undefined(t.endCharacter) || qe.uinteger(t.endCharacter)) && (qe.undefined(t.kind) || qe.string(t.kind))
                    }
                }(m || (m = {})),
                function(e) {
                    e.create = function(e, t) {
                        return {
                            location: e,
                            message: t
                        }
                    }, e.is = function(e) {
                        let t = e;
                        return qe.defined(t) && u.is(t.location) && qe.string(t.message)
                    }
                }(f || (f = {})),
                function(e) {
                    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4
                }(y || (y = {})),
                function(e) {
                    e.Unnecessary = 1, e.Deprecated = 2
                }(v || (v = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.string(t.href)
                    }
                }(C || (C = {})),
                function(e) {
                    e.create = function(e, t, n, i, r, o) {
                        let s = {
                            range: e,
                            message: t
                        };
                        return qe.defined(n) && (s.severity = n), qe.defined(i) && (s.code = i), qe.defined(r) && (s.source = r), qe.defined(o) && (s.relatedInformation = o), s
                    }, e.is = function(e) {
                        var t;
                        let n = e;
                        return qe.defined(n) && c.is(n.range) && qe.string(n.message) && (qe.number(n.severity) || qe.undefined(n.severity)) && (qe.integer(n.code) || qe.string(n.code) || qe.undefined(n.code)) && (qe.undefined(n.codeDescription) || qe.string(null === (t = n.codeDescription) || void 0 === t ? void 0 : t.href)) && (qe.string(n.source) || qe.undefined(n.source)) && (qe.undefined(n.relatedInformation) || qe.typedArray(n.relatedInformation, f.is))
                    }
                }(b || (b = {})),
                function(e) {
                    e.create = function(e, t, ...n) {
                        let i = {
                            title: e,
                            command: t
                        };
                        return qe.defined(n) && n.length > 0 && (i.arguments = n), i
                    }, e.is = function(e) {
                        let t = e;
                        return qe.defined(t) && qe.string(t.title) && qe.string(t.command)
                    }
                }(D || (D = {})),
                function(e) {
                    e.replace = function(e, t) {
                        return {
                            range: e,
                            newText: t
                        }
                    }, e.insert = function(e, t) {
                        return {
                            range: {
                                start: e,
                                end: e
                            },
                            newText: t
                        }
                    }, e.del = function(e) {
                        return {
                            range: e,
                            newText: ""
                        }
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.string(t.newText) && c.is(t.range)
                    }
                }(R || (R = {})),
                function(e) {
                    e.create = function(e, t, n) {
                        const i = {
                            label: e
                        };
                        return void 0 !== t && (i.needsConfirmation = t), void 0 !== n && (i.description = n), i
                    }, e.is = function(e) {
                        const t = e;
                        return qe.objectLiteral(t) && qe.string(t.label) && (qe.boolean(t.needsConfirmation) || void 0 === t.needsConfirmation) && (qe.string(t.description) || void 0 === t.description)
                    }
                }(_ || (_ = {})),
                function(e) {
                    e.is = function(e) {
                        const t = e;
                        return qe.string(t)
                    }
                }(w || (w = {})),
                function(e) {
                    e.replace = function(e, t, n) {
                        return {
                            range: e,
                            newText: t,
                            annotationId: n
                        }
                    }, e.insert = function(e, t, n) {
                        return {
                            range: {
                                start: e,
                                end: e
                            },
                            newText: t,
                            annotationId: n
                        }
                    }, e.del = function(e, t) {
                        return {
                            range: e,
                            newText: "",
                            annotationId: t
                        }
                    }, e.is = function(e) {
                        const t = e;
                        return R.is(t) && (_.is(t.annotationId) || w.is(t.annotationId))
                    }
                }(T || (T = {})),
                function(e) {
                    e.create = function(e, t) {
                        return {
                            textDocument: e,
                            edits: t
                        }
                    }, e.is = function(e) {
                        let t = e;
                        return qe.defined(t) && M.is(t.textDocument) && Array.isArray(t.edits)
                    }
                }(S || (S = {})),
                function(e) {
                    e.create = function(e, t, n) {
                        let i = {
                            kind: "create",
                            uri: e
                        };
                        return void 0 === t || void 0 === t.overwrite && void 0 === t.ignoreIfExists || (i.options = t), void 0 !== n && (i.annotationId = n), i
                    }, e.is = function(e) {
                        let t = e;
                        return t && "create" === t.kind && qe.string(t.uri) && (void 0 === t.options || (void 0 === t.options.overwrite || qe.boolean(t.options.overwrite)) && (void 0 === t.options.ignoreIfExists || qe.boolean(t.options.ignoreIfExists))) && (void 0 === t.annotationId || w.is(t.annotationId))
                    }
                }(k || (k = {})),
                function(e) {
                    e.create = function(e, t, n, i) {
                        let r = {
                            kind: "rename",
                            oldUri: e,
                            newUri: t
                        };
                        return void 0 === n || void 0 === n.overwrite && void 0 === n.ignoreIfExists || (r.options = n), void 0 !== i && (r.annotationId = i), r
                    }, e.is = function(e) {
                        let t = e;
                        return t && "rename" === t.kind && qe.string(t.oldUri) && qe.string(t.newUri) && (void 0 === t.options || (void 0 === t.options.overwrite || qe.boolean(t.options.overwrite)) && (void 0 === t.options.ignoreIfExists || qe.boolean(t.options.ignoreIfExists))) && (void 0 === t.annotationId || w.is(t.annotationId))
                    }
                }(P || (P = {})),
                function(e) {
                    e.create = function(e, t, n) {
                        let i = {
                            kind: "delete",
                            uri: e
                        };
                        return void 0 === t || void 0 === t.recursive && void 0 === t.ignoreIfNotExists || (i.options = t), void 0 !== n && (i.annotationId = n), i
                    }, e.is = function(e) {
                        let t = e;
                        return t && "delete" === t.kind && qe.string(t.uri) && (void 0 === t.options || (void 0 === t.options.recursive || qe.boolean(t.options.recursive)) && (void 0 === t.options.ignoreIfNotExists || qe.boolean(t.options.ignoreIfNotExists))) && (void 0 === t.annotationId || w.is(t.annotationId))
                    }
                }(x || (x = {})),
                function(e) {
                    e.is = function(e) {
                        let t = e;
                        return t && (void 0 !== t.changes || void 0 !== t.documentChanges) && (void 0 === t.documentChanges || t.documentChanges.every((e => qe.string(e.kind) ? k.is(e) || P.is(e) || x.is(e) : S.is(e))))
                    }
                }(E || (E = {}));
            class ke {
                constructor(e, t) {
                    this.edits = e, this.changeAnnotations = t
                }
                insert(e, t, n) {
                    let i, r;
                    if (void 0 === n ? i = R.insert(e, t) : w.is(n) ? (r = n, i = T.insert(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), r = this.changeAnnotations.manage(n), i = T.insert(e, t, r)), this.edits.push(i), void 0 !== r) return r
                }
                replace(e, t, n) {
                    let i, r;
                    if (void 0 === n ? i = R.replace(e, t) : w.is(n) ? (r = n, i = T.replace(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), r = this.changeAnnotations.manage(n), i = T.replace(e, t, r)), this.edits.push(i), void 0 !== r) return r
                }
                delete(e, t) {
                    let n, i;
                    if (void 0 === t ? n = R.del(e) : w.is(t) ? (i = t, n = T.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(t), n = T.del(e, i)), this.edits.push(n), void 0 !== i) return i
                }
                add(e) {
                    this.edits.push(e)
                }
                all() {
                    return this.edits
                }
                clear() {
                    this.edits.splice(0, this.edits.length)
                }
                assertChangeAnnotations(e) {
                    if (void 0 === e) throw new Error("Text edit change is not configured to manage change annotations.")
                }
            }
            class Pe {
                constructor(e) {
                    this._annotations = void 0 === e ? Object.create(null) : e, this._counter = 0, this._size = 0
                }
                all() {
                    return this._annotations
                }
                get size() {
                    return this._size
                }
                manage(e, t) {
                    let n;
                    if (w.is(e) ? n = e : (n = this.nextId(), t = e), void 0 !== this._annotations[n]) throw new Error(`Id ${n} is already in use.`);
                    if (void 0 === t) throw new Error(`No annotation provided for id ${n}`);
                    return this._annotations[n] = t, this._size++, n
                }
                nextId() {
                    return this._counter++, this._counter.toString()
                }
            }
            class xe {
                constructor(e) {
                    this._textEditChanges = Object.create(null), void 0 !== e ? (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new Pe(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((e => {
                        if (S.is(e)) {
                            const t = new ke(e.edits, this._changeAnnotations);
                            this._textEditChanges[e.textDocument.uri] = t
                        }
                    }))) : e.changes && Object.keys(e.changes).forEach((t => {
                        const n = new ke(e.changes[t]);
                        this._textEditChanges[t] = n
                    }))) : this._workspaceEdit = {}
                }
                get edit() {
                    return this.initDocumentChanges(), void 0 !== this._changeAnnotations && (0 === this._changeAnnotations.size ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit
                }
                getTextEditChange(e) {
                    if (M.is(e)) {
                        if (this.initDocumentChanges(), void 0 === this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for document changes.");
                        const t = {
                            uri: e.uri,
                            version: e.version
                        };
                        let n = this._textEditChanges[t.uri];
                        if (!n) {
                            const e = [],
                                i = {
                                    textDocument: t,
                                    edits: e
                                };
                            this._workspaceEdit.documentChanges.push(i), n = new ke(e, this._changeAnnotations), this._textEditChanges[t.uri] = n
                        }
                        return n
                    } {
                        if (this.initChanges(), void 0 === this._workspaceEdit.changes) throw new Error("Workspace edit is not configured for normal text edit changes.");
                        let t = this._textEditChanges[e];
                        if (!t) {
                            let n = [];
                            this._workspaceEdit.changes[e] = n, t = new ke(n), this._textEditChanges[e] = t
                        }
                        return t
                    }
                }
                initDocumentChanges() {
                    void 0 === this._workspaceEdit.documentChanges && void 0 === this._workspaceEdit.changes && (this._changeAnnotations = new Pe, this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all())
                }
                initChanges() {
                    void 0 === this._workspaceEdit.documentChanges && void 0 === this._workspaceEdit.changes && (this._workspaceEdit.changes = Object.create(null))
                }
                createFile(e, t, n) {
                    if (this.initDocumentChanges(), void 0 === this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for document changes.");
                    let i, r, o;
                    if (_.is(t) || w.is(t) ? i = t : n = t, void 0 === i ? r = k.create(e, n) : (o = w.is(i) ? i : this._changeAnnotations.manage(i), r = k.create(e, n, o)), this._workspaceEdit.documentChanges.push(r), void 0 !== o) return o
                }
                renameFile(e, t, n, i) {
                    if (this.initDocumentChanges(), void 0 === this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for document changes.");
                    let r, o, s;
                    if (_.is(n) || w.is(n) ? r = n : i = n, void 0 === r ? o = P.create(e, t, i) : (s = w.is(r) ? r : this._changeAnnotations.manage(r), o = P.create(e, t, i, s)), this._workspaceEdit.documentChanges.push(o), void 0 !== s) return s
                }
                deleteFile(e, t, n) {
                    if (this.initDocumentChanges(), void 0 === this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for document changes.");
                    let i, r, o;
                    if (_.is(t) || w.is(t) ? i = t : n = t, void 0 === i ? r = x.create(e, n) : (o = w.is(i) ? i : this._changeAnnotations.manage(i), r = x.create(e, n, o)), this._workspaceEdit.documentChanges.push(r), void 0 !== o) return o
                }
            }! function(e) {
                e.create = function(e) {
                    return {
                        uri: e
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.string(t.uri)
                }
            }(O || (O = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        uri: e,
                        version: t
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.string(t.uri) && qe.integer(t.version)
                }
            }(q || (q = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        uri: e,
                        version: t
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.string(t.uri) && (null === t.version || qe.integer(t.version))
                }
            }(M || (M = {})),
            function(e) {
                e.create = function(e, t, n, i) {
                    return {
                        uri: e,
                        languageId: t,
                        version: n,
                        text: i
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.string(t.uri) && qe.string(t.languageId) && qe.integer(t.version) && qe.string(t.text)
                }
            }(F || (F = {})),
            function(e) {
                e.PlainText = "plaintext", e.Markdown = "markdown", e.is = function(t) {
                    const n = t;
                    return n === e.PlainText || n === e.Markdown
                }
            }(N || (N = {})),
            function(e) {
                e.is = function(e) {
                    const t = e;
                    return qe.objectLiteral(e) && N.is(t.kind) && qe.string(t.value)
                }
            }(I || (I = {})),
            function(e) {
                e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25
            }(L || (L = {})),
            function(e) {
                e.PlainText = 1, e.Snippet = 2
            }(j || (j = {})),
            function(e) {
                e.Deprecated = 1
            }(A || (A = {})),
            function(e) {
                e.create = function(e, t, n) {
                    return {
                        newText: e,
                        insert: t,
                        replace: n
                    }
                }, e.is = function(e) {
                    const t = e;
                    return t && qe.string(t.newText) && c.is(t.insert) && c.is(t.replace)
                }
            }(H || (H = {})),
            function(e) {
                e.asIs = 1, e.adjustIndentation = 2
            }(W || (W = {})),
            function(e) {
                e.is = function(e) {
                    const t = e;
                    return t && (qe.string(t.detail) || void 0 === t.detail) && (qe.string(t.description) || void 0 === t.description)
                }
            }(K || (K = {})),
            function(e) {
                e.create = function(e) {
                    return {
                        label: e
                    }
                }
            }(U || (U = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        items: e || [],
                        isIncomplete: !!t
                    }
                }
            }(z || (z = {})),
            function(e) {
                e.fromPlainText = function(e) {
                    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
                }, e.is = function(e) {
                    const t = e;
                    return qe.string(t) || qe.objectLiteral(t) && qe.string(t.language) && qe.string(t.value)
                }
            }($ || ($ = {})),
            function(e) {
                e.is = function(e) {
                    let t = e;
                    return !!t && qe.objectLiteral(t) && (I.is(t.contents) || $.is(t.contents) || qe.typedArray(t.contents, $.is)) && (void 0 === e.range || c.is(e.range))
                }
            }(V || (V = {})),
            function(e) {
                e.create = function(e, t) {
                    return t ? {
                        label: e,
                        documentation: t
                    } : {
                        label: e
                    }
                }
            }(J || (J = {})),
            function(e) {
                e.create = function(e, t, ...n) {
                    let i = {
                        label: e
                    };
                    return qe.defined(t) && (i.documentation = t), qe.defined(n) ? i.parameters = n : i.parameters = [], i
                }
            }(B || (B = {})),
            function(e) {
                e.Text = 1, e.Read = 2, e.Write = 3
            }(Q || (Q = {})),
            function(e) {
                e.create = function(e, t) {
                    let n = {
                        range: e
                    };
                    return qe.number(t) && (n.kind = t), n
                }
            }(G || (G = {})),
            function(e) {
                e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26
            }(Z || (Z = {})),
            function(e) {
                e.Deprecated = 1
            }(X || (X = {})),
            function(e) {
                e.create = function(e, t, n, i, r) {
                    let o = {
                        name: e,
                        kind: t,
                        location: {
                            uri: i,
                            range: n
                        }
                    };
                    return r && (o.containerName = r), o
                }
            }(Y || (Y = {})),
            function(e) {
                e.create = function(e, t, n, i) {
                    return void 0 !== i ? {
                        name: e,
                        kind: t,
                        location: {
                            uri: n,
                            range: i
                        }
                    } : {
                        name: e,
                        kind: t,
                        location: {
                            uri: n
                        }
                    }
                }
            }(ee || (ee = {})),
            function(e) {
                e.create = function(e, t, n, i, r, o) {
                    let s = {
                        name: e,
                        detail: t,
                        kind: n,
                        range: i,
                        selectionRange: r
                    };
                    return void 0 !== o && (s.children = o), s
                }, e.is = function(e) {
                    let t = e;
                    return t && qe.string(t.name) && qe.number(t.kind) && c.is(t.range) && c.is(t.selectionRange) && (void 0 === t.detail || qe.string(t.detail)) && (void 0 === t.deprecated || qe.boolean(t.deprecated)) && (void 0 === t.children || Array.isArray(t.children)) && (void 0 === t.tags || Array.isArray(t.tags))
                }
            }(te || (te = {})),
            function(e) {
                e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll"
            }(ne || (ne = {})),
            function(e) {
                e.Invoked = 1, e.Automatic = 2
            }(ie || (ie = {})),
            function(e) {
                e.create = function(e, t, n) {
                    let i = {
                        diagnostics: e
                    };
                    return null != t && (i.only = t), null != n && (i.triggerKind = n), i
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.typedArray(t.diagnostics, b.is) && (void 0 === t.only || qe.typedArray(t.only, qe.string)) && (void 0 === t.triggerKind || t.triggerKind === ie.Invoked || t.triggerKind === ie.Automatic)
                }
            }(re || (re = {})),
            function(e) {
                e.create = function(e, t, n) {
                    let i = {
                            title: e
                        },
                        r = !0;
                    return "string" == typeof t ? (r = !1, i.kind = t) : D.is(t) ? i.command = t : i.edit = t, r && void 0 !== n && (i.kind = n), i
                }, e.is = function(e) {
                    let t = e;
                    return t && qe.string(t.title) && (void 0 === t.diagnostics || qe.typedArray(t.diagnostics, b.is)) && (void 0 === t.kind || qe.string(t.kind)) && (void 0 !== t.edit || void 0 !== t.command) && (void 0 === t.command || D.is(t.command)) && (void 0 === t.isPreferred || qe.boolean(t.isPreferred)) && (void 0 === t.edit || E.is(t.edit))
                }
            }(oe || (oe = {})),
            function(e) {
                e.create = function(e, t) {
                    let n = {
                        range: e
                    };
                    return qe.defined(t) && (n.data = t), n
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && c.is(t.range) && (qe.undefined(t.command) || D.is(t.command))
                }
            }(se || (se = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        tabSize: e,
                        insertSpaces: t
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && qe.uinteger(t.tabSize) && qe.boolean(t.insertSpaces)
                }
            }(ae || (ae = {})),
            function(e) {
                e.create = function(e, t, n) {
                    return {
                        range: e,
                        target: t,
                        data: n
                    }
                }, e.is = function(e) {
                    let t = e;
                    return qe.defined(t) && c.is(t.range) && (qe.undefined(t.target) || qe.string(t.target))
                }
            }(ce || (ce = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        range: e,
                        parent: t
                    }
                }, e.is = function(t) {
                    let n = t;
                    return qe.objectLiteral(n) && c.is(n.range) && (void 0 === n.parent || e.is(n.parent))
                }
            }(ue || (ue = {})),
            function(e) {
                e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator"
            }(le || (le = {})),
            function(e) {
                e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary"
            }(de || (de = {})),
            function(e) {
                e.is = function(e) {
                    const t = e;
                    return qe.objectLiteral(t) && (void 0 === t.resultId || "string" == typeof t.resultId) && Array.isArray(t.data) && (0 === t.data.length || "number" == typeof t.data[0])
                }
            }(he || (he = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        range: e,
                        text: t
                    }
                }, e.is = function(e) {
                    const t = e;
                    return null != t && c.is(t.range) && qe.string(t.text)
                }
            }(pe || (pe = {})),
            function(e) {
                e.create = function(e, t, n) {
                    return {
                        range: e,
                        variableName: t,
                        caseSensitiveLookup: n
                    }
                }, e.is = function(e) {
                    const t = e;
                    return null != t && c.is(t.range) && qe.boolean(t.caseSensitiveLookup) && (qe.string(t.variableName) || void 0 === t.variableName)
                }
            }(ge || (ge = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        range: e,
                        expression: t
                    }
                }, e.is = function(e) {
                    const t = e;
                    return null != t && c.is(t.range) && (qe.string(t.expression) || void 0 === t.expression)
                }
            }(me || (me = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        frameId: e,
                        stoppedLocation: t
                    }
                }, e.is = function(e) {
                    const t = e;
                    return qe.defined(t) && c.is(e.stoppedLocation)
                }
            }(fe || (fe = {})),
            function(e) {
                e.Type = 1, e.Parameter = 2, e.is = function(e) {
                    return 1 === e || 2 === e
                }
            }(ye || (ye = {})),
            function(e) {
                e.create = function(e) {
                    return {
                        value: e
                    }
                }, e.is = function(e) {
                    const t = e;
                    return qe.objectLiteral(t) && (void 0 === t.tooltip || qe.string(t.tooltip) || I.is(t.tooltip)) && (void 0 === t.location || u.is(t.location)) && (void 0 === t.command || D.is(t.command))
                }
            }(ve || (ve = {})),
            function(e) {
                e.create = function(e, t, n) {
                    const i = {
                        position: e,
                        label: t
                    };
                    return void 0 !== n && (i.kind = n), i
                }, e.is = function(e) {
                    const t = e;
                    return qe.objectLiteral(t) && a.is(t.position) && (qe.string(t.label) || qe.typedArray(t.label, ve.is)) && (void 0 === t.kind || ye.is(t.kind)) && void 0 === t.textEdits || qe.typedArray(t.textEdits, R.is) && (void 0 === t.tooltip || qe.string(t.tooltip) || I.is(t.tooltip)) && (void 0 === t.paddingLeft || qe.boolean(t.paddingLeft)) && (void 0 === t.paddingRight || qe.boolean(t.paddingRight))
                }
            }(Ce || (Ce = {})),
            function(e) {
                e.createSnippet = function(e) {
                    return {
                        kind: "snippet",
                        value: e
                    }
                }
            }(be || (be = {})),
            function(e) {
                e.create = function(e, t, n, i) {
                    return {
                        insertText: e,
                        filterText: t,
                        range: n,
                        command: i
                    }
                }
            }(De || (De = {})),
            function(e) {
                e.create = function(e) {
                    return {
                        items: e
                    }
                }
            }(Re || (Re = {})),
            function(e) {
                e.Invoked = 0, e.Automatic = 1
            }(_e || (_e = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        range: e,
                        text: t
                    }
                }
            }(we || (we = {})),
            function(e) {
                e.create = function(e, t) {
                    return {
                        triggerKind: e,
                        selectedCompletionInfo: t
                    }
                }
            }(Te || (Te = {})),
            function(e) {
                e.is = function(e) {
                    const t = e;
                    return qe.objectLiteral(t) && r.is(t.uri) && qe.string(t.name)
                }
            }(Se || (Se = {}));
            const Ee = ["\n", "\r\n", "\r"];
            var Oe, qe;
            ! function(e) {
                function t(e, n) {
                    if (e.length <= 1) return e;
                    const i = e.length / 2 | 0,
                        r = e.slice(0, i),
                        o = e.slice(i);
                    t(r, n), t(o, n);
                    let s = 0,
                        a = 0,
                        c = 0;
                    for (; s < r.length && a < o.length;) {
                        let t = n(r[s], o[a]);
                        e[c++] = t <= 0 ? r[s++] : o[a++]
                    }
                    for (; s < r.length;) e[c++] = r[s++];
                    for (; a < o.length;) e[c++] = o[a++];
                    return e
                }
                e.create = function(e, t, n, i) {
                    return new Me(e, t, n, i)
                }, e.is = function(e) {
                    let t = e;
                    return !!(qe.defined(t) && qe.string(t.uri) && (qe.undefined(t.languageId) || qe.string(t.languageId)) && qe.uinteger(t.lineCount) && qe.func(t.getText) && qe.func(t.positionAt) && qe.func(t.offsetAt))
                }, e.applyEdits = function(e, n) {
                    let i = e.getText(),
                        r = t(n, ((e, t) => {
                            let n = e.range.start.line - t.range.start.line;
                            return 0 === n ? e.range.start.character - t.range.start.character : n
                        })),
                        o = i.length;
                    for (let t = r.length - 1; t >= 0; t--) {
                        let n = r[t],
                            s = e.offsetAt(n.range.start),
                            a = e.offsetAt(n.range.end);
                        if (!(a <= o)) throw new Error("Overlapping edit");
                        i = i.substring(0, s) + n.newText + i.substring(a, i.length), o = s
                    }
                    return i
                }
            }(Oe || (Oe = {}));
            class Me {
                constructor(e, t, n, i) {
                    this._uri = e, this._languageId = t, this._version = n, this._content = i, this._lineOffsets = void 0
                }
                get uri() {
                    return this._uri
                }
                get languageId() {
                    return this._languageId
                }
                get version() {
                    return this._version
                }
                getText(e) {
                    if (e) {
                        let t = this.offsetAt(e.start),
                            n = this.offsetAt(e.end);
                        return this._content.substring(t, n)
                    }
                    return this._content
                }
                update(e, t) {
                    this._content = e.text, this._version = t, this._lineOffsets = void 0
                }
                getLineOffsets() {
                    if (void 0 === this._lineOffsets) {
                        let e = [],
                            t = this._content,
                            n = !0;
                        for (let i = 0; i < t.length; i++) {
                            n && (e.push(i), n = !1);
                            let r = t.charAt(i);
                            n = "\r" === r || "\n" === r, "\r" === r && i + 1 < t.length && "\n" === t.charAt(i + 1) && i++
                        }
                        n && t.length > 0 && e.push(t.length), this._lineOffsets = e
                    }
                    return this._lineOffsets
                }
                positionAt(e) {
                    e = Math.max(Math.min(e, this._content.length), 0);
                    let t = this.getLineOffsets(),
                        n = 0,
                        i = t.length;
                    if (0 === i) return a.create(0, e);
                    for (; n < i;) {
                        let r = Math.floor((n + i) / 2);
                        t[r] > e ? i = r : n = r + 1
                    }
                    let r = n - 1;
                    return a.create(r, e - t[r])
                }
                offsetAt(e) {
                    let t = this.getLineOffsets();
                    if (e.line >= t.length) return this._content.length;
                    if (e.line < 0) return 0;
                    let n = t[e.line],
                        i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
                    return Math.max(Math.min(n + e.character, i), n)
                }
                get lineCount() {
                    return this.getLineOffsets().length
                }
            }! function(e) {
                const t = Object.prototype.toString;
                e.defined = function(e) {
                    return void 0 !== e
                }, e.undefined = function(e) {
                    return void 0 === e
                }, e.boolean = function(e) {
                    return !0 === e || !1 === e
                }, e.string = function(e) {
                    return "[object String]" === t.call(e)
                }, e.number = function(e) {
                    return "[object Number]" === t.call(e)
                }, e.numberRange = function(e, n, i) {
                    return "[object Number]" === t.call(e) && n <= e && e <= i
                }, e.integer = function(e) {
                    return "[object Number]" === t.call(e) && -2147483648 <= e && e <= 2147483647
                }, e.uinteger = function(e) {
                    return "[object Number]" === t.call(e) && 0 <= e && e <= 2147483647
                }, e.func = function(e) {
                    return "[object Function]" === t.call(e)
                }, e.objectLiteral = function(e) {
                    return null !== e && "object" == typeof e
                }, e.typedArray = function(e, t) {
                    return Array.isArray(e) && e.every(t)
                }
            }(qe || (qe = {}))
        },
        MJZJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Mf: () => r,
                IP: () => s,
                Z3: () => a
            });
            var i = n("HJml");
            class r extends i.AbstractMessageReader {
                socket;
                state = "initial";
                callback;
                events = [];
                constructor(e) {
                    super(), this.socket = e, this.socket.onMessage((e => this.readMessage(e))), this.socket.onError((e => this.fireError(e))), this.socket.onClose(((e, t) => {
                        if (1e3 !== e) {
                            const n = {
                                name: "" + e,
                                message: `Error during socket reconnect: code = ${e}, reason = ${t}`
                            };
                            this.fireError(n)
                        }
                        this.fireClose()
                    }))
                }
                listen(e) {
                    if ("initial" === this.state)
                        for (this.state = "listening", this.callback = e; 0 !== this.events.length;) {
                            const e = this.events.pop();
                            void 0 !== e.message ? this.readMessage(e.message) : void 0 !== e.error ? this.fireError(e.error) : this.fireClose()
                        }
                    return {
                        dispose: () => {
                            this.callback === e && (this.state = "initial", this.callback = void 0)
                        }
                    }
                }
                dispose() {
                    super.dispose(), this.state = "initial", this.callback = void 0, this.events.splice(0, this.events.length)
                }
                readMessage(e) {
                    if ("initial" === this.state) this.events.splice(0, 0, {
                        message: e
                    });
                    else if ("listening" === this.state) try {
                        const t = JSON.parse(e);
                        this.callback(t)
                    } catch (e) {
                        const t = {
                            name: "400",
                            message: `Error during message parsing, reason = ${"object"==typeof e?e.message:"unknown"}`
                        };
                        this.fireError(t)
                    }
                }
                fireError(e) {
                    "initial" === this.state ? this.events.splice(0, 0, {
                        error: e
                    }) : "listening" === this.state && super.fireError(e)
                }
                fireClose() {
                    "initial" === this.state ? this.events.splice(0, 0, {}) : "listening" === this.state && super.fireClose(), this.state = "closed"
                }
            }
            var o = n("YXUh");
            class s extends o.AbstractMessageWriter {
                errorCount = 0;
                socket;
                constructor(e) {
                    super(), this.socket = e
                }
                end() {}
                async write(e) {
                    try {
                        const t = JSON.stringify(e);
                        this.socket.send(t)
                    } catch (t) {
                        this.errorCount++, this.fireError(t, e, this.errorCount)
                    }
                }
            }

            function a(e) {
                return {
                    send: t => e.send(t),
                    onMessage: t => {
                        e.onmessage = e => t(e.data)
                    },
                    onError: t => {
                        e.onerror = e => {
                            Object.hasOwn(e, "message") && t(e.message)
                        }
                    },
                    onClose: t => {
                        e.onclose = e => t(e.code, e.reason)
                    },
                    dispose: () => e.close()
                }
            }
            n("Uf1e"), n("ziTh")
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/lsp_client-3cf663bd.js.map