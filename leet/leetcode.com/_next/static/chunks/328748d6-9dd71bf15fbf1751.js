"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2440], {
        29527: function(t, e, n) {
            n.d(e, {
                D$: function() {
                    return G
                },
                H6: function() {
                    return Ht
                },
                NG: function() {
                    return Y
                },
                QW: function() {
                    return R
                },
                gJ: function() {
                    return Q
                },
                or: function() {
                    return ft
                },
                w$: function() {
                    return gt
                }
            });
            var r = n(46320),
                i = n(28974),
                s = n(40909),
                l = n(69805),
                o = n(65580),
                c = n(55913),
                h = n(15097),
                d = n(70790),
                a = n(68137),
                u = n(93562),
                g = n(96399),
                f = n(81351),
                p = n(45064),
                w = n(22860),
                k = n(73285),
                _ = n(21371),
                m = n(31111),
                y = n(49776);
            class b {
                constructor(t, e) {
                    this.clock = t, this.len = e
                }
            }
            class S {
                constructor() {
                    this.clients = new Map
                }
            }
            const E = (t, e, n) => e.clients.forEach(((e, r) => {
                    const i = t.doc.store.clients.get(r);
                    for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        xt(t, i, r.clock, r.len, n)
                    }
                })),
                C = (t, e) => {
                    const n = t.clients.get(e.client);
                    return void 0 !== n && null !== ((t, e) => {
                        let n = 0,
                            r = t.length - 1;
                        for (; n <= r;) {
                            const i = s.GW((n + r) / 2),
                                l = t[i],
                                o = l.clock;
                            if (o <= e) {
                                if (e < o + l.len) return i;
                                n = i + 1
                            } else r = i - 1
                        }
                        return null
                    })(n, e.clock)
                },
                D = t => {
                    t.clients.forEach((t => {
                        let e, n;
                        for (t.sort(((t, e) => t.clock - e.clock)), e = 1, n = 1; e < t.length; e++) {
                            const r = t[n - 1],
                                i = t[e];
                            r.clock + r.len >= i.clock ? r.len = s.Fp(r.len, i.clock + i.len - r.clock) : (n < e && (t[n] = i), n++)
                        }
                        t.length = n
                    }))
                },
                v = t => {
                    const e = new S;
                    for (let n = 0; n < t.length; n++) t[n].clients.forEach(((r, s) => {
                        if (!e.clients.has(s)) {
                            const l = r.slice();
                            for (let e = n + 1; e < t.length; e++) i.s7(l, t[e].clients.get(s) || []);
                            e.clients.set(s, l)
                        }
                    }));
                    return D(e), e
                },
                A = (t, e, n, r) => {
                    l.Yu(t.clients, e, (() => [])).push(new b(n, r))
                },
                x = () => new S,
                M = t => {
                    const e = x();
                    return t.clients.forEach(((t, n) => {
                        const r = [];
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e];
                            if (n.deleted) {
                                const i = n.id.clock;
                                let s = n.length;
                                if (e + 1 < t.length)
                                    for (let n = t[e + 1]; e + 1 < t.length && n.deleted; n = t[1 + ++e]) s += n.length;
                                r.push(new b(i, s))
                            }
                        }
                        r.length > 0 && e.clients.set(n, r)
                    })), e
                },
                N = (t, e) => {
                    o.uE(t.restEncoder, e.clients.size), i.Dp(e.clients.entries()).sort(((t, e) => e[0] - t[0])).forEach((([e, n]) => {
                        t.resetDsCurVal(), o.uE(t.restEncoder, e);
                        const r = n.length;
                        o.uE(t.restEncoder, r);
                        for (let i = 0; i < r; i++) {
                            const e = n[i];
                            t.writeDsClock(e.clock), t.writeDsLen(e.len)
                        }
                    }))
                },
                I = t => {
                    const e = new S,
                        n = c.yg(t.restDecoder);
                    for (let r = 0; r < n; r++) {
                        t.resetDsCurVal();
                        const n = c.yg(t.restDecoder),
                            r = c.yg(t.restDecoder);
                        if (r > 0) {
                            const i = l.Yu(e.clients, n, (() => []));
                            for (let e = 0; e < r; e++) i.push(new b(t.readDsClock(), t.readDsLen()))
                        }
                    }
                    return e
                },
                L = (t, e, n) => {
                    const r = new S,
                        i = c.yg(t.restDecoder);
                    for (let s = 0; s < i; s++) {
                        t.resetDsCurVal();
                        const i = c.yg(t.restDecoder),
                            s = c.yg(t.restDecoder),
                            l = n.clients.get(i) || [],
                            o = bt(n, i);
                        for (let n = 0; n < s; n++) {
                            const n = t.readDsClock(),
                                s = n + t.readDsLen();
                            if (n < o) {
                                o < s && A(r, i, o, s - o);
                                let t = Et(l, n),
                                    c = l[t];
                                for (!c.deleted && c.id.clock < n && (l.splice(t + 1, 0, mn(e, c, n - c.id.clock)), t++); t < l.length && (c = l[t++], c.id.clock < s);) c.deleted || (s < c.id.clock + c.length && l.splice(t, 0, mn(e, c, s - c.id.clock)), c.delete(e))
                            } else A(r, i, n, s - n)
                        }
                    }
                    if (r.clients.size > 0) {
                        const t = new z;
                        return o.uE(t.restEncoder, 0), N(t, r), t.toUint8Array()
                    }
                    return null
                },
                O = h.U7;
            class R extends r.y {
                constructor({
                    guid: t = h.k$(),
                    collectionid: e = null,
                    gc: n = !0,
                    gcFilter: r = (() => !0),
                    meta: i = null,
                    autoLoad: s = !1,
                    shouldLoad: l = !0
                } = {}) {
                    super(), this.gc = n, this.gcFilter = r, this.clientID = O(), this.guid = t, this.collectionid = e, this.share = new Map, this.store = new mt, this._transaction = null, this._transactionCleanups = [], this.subdocs = new Set, this._item = null, this.shouldLoad = l, this.autoLoad = s, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.whenLoaded = d.Ue((t => {
                        this.on("load", (() => {
                            this.isLoaded = !0, t(this)
                        }))
                    }));
                    const o = () => d.Ue((t => {
                        const e = n => {
                            void 0 !== n && !0 !== n || (this.off("sync", e), t())
                        };
                        this.on("sync", e)
                    }));
                    this.on("sync", (t => {
                        !1 === t && this.isSynced && (this.whenSynced = o()), this.isSynced = void 0 === t || !0 === t, this.isSynced && !this.isLoaded && this.emit("load", [])
                    })), this.whenSynced = o()
                }
                load() {
                    const t = this._item;
                    null === t || this.shouldLoad || Ut(t.parent.doc, (t => {
                        t.subdocsLoaded.add(this)
                    }), null, !0), this.shouldLoad = !0
                }
                getSubdocs() {
                    return this.subdocs
                }
                getSubdocGuids() {
                    return new Set(i.Dp(this.subdocs).map((t => t.guid)))
                }
                transact(t, e = null) {
                    return Ut(this, t, e)
                }
                get(t, e = oe) {
                    const n = l.Yu(this.share, t, (() => {
                            const t = new e;
                            return t._integrate(this, null), t
                        })),
                        r = n.constructor;
                    if (e !== oe && r !== e) {
                        if (r === oe) {
                            const r = new e;
                            r._map = n._map, n._map.forEach((t => {
                                for (; null !== t; t = t.left) t.parent = r
                            })), r._start = n._start;
                            for (let t = r._start; null !== t; t = t.right) t.parent = r;
                            return r._length = n._length, this.share.set(t, r), r._integrate(this, null), r
                        }
                        throw new Error(`Type with the name ${t} has already been defined with a different constructor`)
                    }
                    return n
                }
                getArray(t = "") {
                    return this.get(t, De)
                }
                getText(t = "") {
                    return this.get(t, Ve)
                }
                getMap(t = "") {
                    return this.get(t, Ae)
                }
                getXmlFragment(t = "") {
                    return this.get(t, je)
                }
                toJSON() {
                    const t = {};
                    return this.share.forEach(((e, n) => {
                        t[n] = e.toJSON()
                    })), t
                }
                destroy() {
                    i.Dp(this.subdocs).forEach((t => t.destroy()));
                    const t = this._item;
                    if (null !== t) {
                        this._item = null;
                        const e = t.content;
                        e.doc = new R({
                            guid: this.guid,
                            ...e.opts,
                            shouldLoad: !1
                        }), e.doc._item = t, Ut(t.parent.doc, (n => {
                            const r = e.doc;
                            t.deleted || n.subdocsAdded.add(r), n.subdocsRemoved.add(this)
                        }), null, !0)
                    }
                    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy()
                }
                on(t, e) {
                    super.on(t, e)
                }
                off(t, e) {
                    super.off(t, e)
                }
            }
            class T {
                constructor(t) {
                    this.restDecoder = t
                }
                resetDsCurVal() {}
                readDsClock() {
                    return c.yg(this.restDecoder)
                }
                readDsLen() {
                    return c.yg(this.restDecoder)
                }
            }
            class U extends T {
                readLeftID() {
                    return ot(c.yg(this.restDecoder), c.yg(this.restDecoder))
                }
                readRightID() {
                    return ot(c.yg(this.restDecoder), c.yg(this.restDecoder))
                }
                readClient() {
                    return c.yg(this.restDecoder)
                }
                readInfo() {
                    return c.kj(this.restDecoder)
                }
                readString() {
                    return c.kf(this.restDecoder)
                }
                readParentInfo() {
                    return 1 === c.yg(this.restDecoder)
                }
                readTypeRef() {
                    return c.yg(this.restDecoder)
                }
                readLen() {
                    return c.yg(this.restDecoder)
                }
                readAny() {
                    return c.v_(this.restDecoder)
                }
                readBuf() {
                    return a.f9(c.HN(this.restDecoder))
                }
                readJSON() {
                    return JSON.parse(c.kf(this.restDecoder))
                }
                readKey() {
                    return c.kf(this.restDecoder)
                }
            }
            class P {
                constructor(t) {
                    this.dsCurrVal = 0, this.restDecoder = t
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0
                }
                readDsClock() {
                    return this.dsCurrVal += c.yg(this.restDecoder), this.dsCurrVal
                }
                readDsLen() {
                    const t = c.yg(this.restDecoder) + 1;
                    return this.dsCurrVal += t, t
                }
            }
            class J extends P {
                constructor(t) {
                    super(t), this.keys = [], c.yg(t), this.keyClockDecoder = new c.dD(c.HN(t)), this.clientDecoder = new c.UF(c.HN(t)), this.leftClockDecoder = new c.dD(c.HN(t)), this.rightClockDecoder = new c.dD(c.HN(t)), this.infoDecoder = new c.XW(c.HN(t), c.kj), this.stringDecoder = new c.sO(c.HN(t)), this.parentInfoDecoder = new c.XW(c.HN(t), c.kj), this.typeRefDecoder = new c.UF(c.HN(t)), this.lenDecoder = new c.UF(c.HN(t))
                }
                readLeftID() {
                    return new st(this.clientDecoder.read(), this.leftClockDecoder.read())
                }
                readRightID() {
                    return new st(this.clientDecoder.read(), this.rightClockDecoder.read())
                }
                readClient() {
                    return this.clientDecoder.read()
                }
                readInfo() {
                    return this.infoDecoder.read()
                }
                readString() {
                    return this.stringDecoder.read()
                }
                readParentInfo() {
                    return 1 === this.parentInfoDecoder.read()
                }
                readTypeRef() {
                    return this.typeRefDecoder.read()
                }
                readLen() {
                    return this.lenDecoder.read()
                }
                readAny() {
                    return c.v_(this.restDecoder)
                }
                readBuf() {
                    return c.HN(this.restDecoder)
                }
                readJSON() {
                    return c.v_(this.restDecoder)
                }
                readKey() {
                    const t = this.keyClockDecoder.read();
                    if (t < this.keys.length) return this.keys[t]; {
                        const t = this.stringDecoder.read();
                        return this.keys.push(t), t
                    }
                }
            }
            class F {
                constructor() {
                    this.restEncoder = o.Mf()
                }
                toUint8Array() {
                    return o._f(this.restEncoder)
                }
                resetDsCurVal() {}
                writeDsClock(t) {
                    o.uE(this.restEncoder, t)
                }
                writeDsLen(t) {
                    o.uE(this.restEncoder, t)
                }
            }
            class H extends F {
                writeLeftID(t) {
                    o.uE(this.restEncoder, t.client), o.uE(this.restEncoder, t.clock)
                }
                writeRightID(t) {
                    o.uE(this.restEncoder, t.client), o.uE(this.restEncoder, t.clock)
                }
                writeClient(t) {
                    o.uE(this.restEncoder, t)
                }
                writeInfo(t) {
                    o.$F(this.restEncoder, t)
                }
                writeString(t) {
                    o.uw(this.restEncoder, t)
                }
                writeParentInfo(t) {
                    o.uE(this.restEncoder, t ? 1 : 0)
                }
                writeTypeRef(t) {
                    o.uE(this.restEncoder, t)
                }
                writeLen(t) {
                    o.uE(this.restEncoder, t)
                }
                writeAny(t) {
                    o.EM(this.restEncoder, t)
                }
                writeBuf(t) {
                    o.mP(this.restEncoder, t)
                }
                writeJSON(t) {
                    o.uw(this.restEncoder, JSON.stringify(t))
                }
                writeKey(t) {
                    o.uw(this.restEncoder, t)
                }
            }
            class W {
                constructor() {
                    this.restEncoder = o.Mf(), this.dsCurrVal = 0
                }
                toUint8Array() {
                    return o._f(this.restEncoder)
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0
                }
                writeDsClock(t) {
                    const e = t - this.dsCurrVal;
                    this.dsCurrVal = t, o.uE(this.restEncoder, e)
                }
                writeDsLen(t) {
                    0 === t && u.zR(), o.uE(this.restEncoder, t - 1), this.dsCurrVal += t
                }
            }
            class z extends W {
                constructor() {
                    super(), this.keyMap = new Map, this.keyClock = 0, this.keyClockEncoder = new o.sX, this.clientEncoder = new o.HE, this.leftClockEncoder = new o.sX, this.rightClockEncoder = new o.sX, this.infoEncoder = new o.GF(o.$F), this.stringEncoder = new o.TS, this.parentInfoEncoder = new o.GF(o.$F), this.typeRefEncoder = new o.HE, this.lenEncoder = new o.HE
                }
                toUint8Array() {
                    const t = o.Mf();
                    return o.uE(t, 0), o.mP(t, this.keyClockEncoder.toUint8Array()), o.mP(t, this.clientEncoder.toUint8Array()), o.mP(t, this.leftClockEncoder.toUint8Array()), o.mP(t, this.rightClockEncoder.toUint8Array()), o.mP(t, o._f(this.infoEncoder)), o.mP(t, this.stringEncoder.toUint8Array()), o.mP(t, o._f(this.parentInfoEncoder)), o.mP(t, this.typeRefEncoder.toUint8Array()), o.mP(t, this.lenEncoder.toUint8Array()), o.HK(t, o._f(this.restEncoder)), o._f(t)
                }
                writeLeftID(t) {
                    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock)
                }
                writeRightID(t) {
                    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock)
                }
                writeClient(t) {
                    this.clientEncoder.write(t)
                }
                writeInfo(t) {
                    this.infoEncoder.write(t)
                }
                writeString(t) {
                    this.stringEncoder.write(t)
                }
                writeParentInfo(t) {
                    this.parentInfoEncoder.write(t ? 1 : 0)
                }
                writeTypeRef(t) {
                    this.typeRefEncoder.write(t)
                }
                writeLen(t) {
                    this.lenEncoder.write(t)
                }
                writeAny(t) {
                    o.EM(this.restEncoder, t)
                }
                writeBuf(t) {
                    o.mP(this.restEncoder, t)
                }
                writeJSON(t) {
                    o.EM(this.restEncoder, t)
                }
                writeKey(t) {
                    const e = this.keyMap.get(t);
                    void 0 === e ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(e)
                }
            }
            const V = (t, e, n) => {
                    const r = new Map;
                    n.forEach(((t, n) => {
                        bt(e, n) > t && r.set(n, t)
                    })), yt(e).forEach(((t, e) => {
                        n.has(e) || r.set(e, 0)
                    })), o.uE(t.restEncoder, r.size), i.Dp(r.entries()).sort(((t, e) => e[0] - t[0])).forEach((([n, r]) => {
                        ((t, e, n, r) => {
                            r = s.Fp(r, e[0].id.clock);
                            const i = Et(e, r);
                            o.uE(t.restEncoder, e.length - i), t.writeClient(n), o.uE(t.restEncoder, r);
                            const l = e[i];
                            l.write(t, r - l.id.clock);
                            for (let s = i + 1; s < e.length; s++) e[s].write(t, 0)
                        })(t, e.clients.get(n), n, r)
                    }))
                },
                $ = (t, e, n, r = new J(t)) => Ut(e, (t => {
                    t.local = !1;
                    let e = !1;
                    const n = t.doc,
                        s = n.store,
                        h = ((t, e) => {
                            const n = l.Ue(),
                                r = c.yg(t.restDecoder);
                            for (let i = 0; i < r; i++) {
                                const r = c.yg(t.restDecoder),
                                    i = new Array(r),
                                    s = t.readClient();
                                let l = c.yg(t.restDecoder);
                                n.set(s, {
                                    i: 0,
                                    refs: i
                                });
                                for (let n = 0; n < r; n++) {
                                    const r = t.readInfo();
                                    switch (g.kr & r) {
                                        case 0:
                                            {
                                                const e = t.readLen();i[n] = new Xe(ot(s, l), e),
                                                l += e;
                                                break
                                            }
                                        case 10:
                                            {
                                                const e = c.yg(t.restDecoder);i[n] = new Dn(ot(s, l), e),
                                                l += e;
                                                break
                                            }
                                        default:
                                            {
                                                const o = 0 === (r & (g.rc | g.x1)),
                                                    c = new Sn(ot(s, l), null, (r & g.x1) === g.x1 ? t.readLeftID() : null, null, (r & g.rc) === g.rc ? t.readRightID() : null, o ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null, o && (r & g.cq) === g.cq ? t.readString() : null, En(t, r));i[n] = c,
                                                l += c.length
                                            }
                                    }
                                }
                            }
                            return n
                        })(r, n),
                        d = ((t, e, n) => {
                            const r = [];
                            let s = i.Dp(n.keys()).sort(((t, e) => t - e));
                            if (0 === s.length) return null;
                            const c = () => {
                                if (0 === s.length) return null;
                                let t = n.get(s[s.length - 1]);
                                for (; t.refs.length === t.i;) {
                                    if (s.pop(), !(s.length > 0)) return null;
                                    t = n.get(s[s.length - 1])
                                }
                                return t
                            };
                            let h = c();
                            if (null === h) return null;
                            const d = new mt,
                                a = new Map,
                                u = (t, e) => {
                                    const n = a.get(t);
                                    (null == n || n > e) && a.set(t, e)
                                };
                            let g = h.refs[h.i++];
                            const f = new Map,
                                p = () => {
                                    for (const t of r) {
                                        const e = t.id.client,
                                            r = n.get(e);
                                        r ? (r.i--, d.clients.set(e, r.refs.slice(r.i)), n.delete(e), r.i = 0, r.refs = []) : d.clients.set(e, [t]), s = s.filter((t => t !== e))
                                    }
                                    r.length = 0
                                };
                            for (;;) {
                                if (g.constructor !== Dn) {
                                    const i = l.Yu(f, g.id.client, (() => bt(e, g.id.client))) - g.id.clock;
                                    if (i < 0) r.push(g), u(g.id.client, g.id.clock - 1), p();
                                    else {
                                        const s = g.getMissing(t, e);
                                        if (null !== s) {
                                            r.push(g);
                                            const t = n.get(s) || {
                                                refs: [],
                                                i: 0
                                            };
                                            if (t.refs.length !== t.i) {
                                                g = t.refs[t.i++];
                                                continue
                                            }
                                            u(s, bt(e, s)), p()
                                        } else(0 === i || i < g.length) && (g.integrate(t, i), f.set(g.id.client, g.id.clock + g.length))
                                    }
                                }
                                if (r.length > 0) g = r.pop();
                                else if (null !== h && h.i < h.refs.length) g = h.refs[h.i++];
                                else {
                                    if (h = c(), null === h) break;
                                    g = h.refs[h.i++]
                                }
                            }
                            if (d.clients.size > 0) {
                                const t = new z;
                                return V(t, d, new Map), o.uE(t.restEncoder, 0), {
                                    missing: a,
                                    update: t.toUint8Array()
                                }
                            }
                            return null
                        })(t, s, h),
                        a = s.pendingStructs;
                    if (a) {
                        for (const [t, n] of a.missing)
                            if (n < bt(s, t)) {
                                e = !0;
                                break
                            }
                        if (d) {
                            for (const [t, e] of d.missing) {
                                const n = a.missing.get(t);
                                (null == n || n > e) && a.missing.set(t, e)
                            }
                            a.update = jt([a.update, d.update])
                        }
                    } else s.pendingStructs = d;
                    const u = L(r, t, s);
                    if (s.pendingDs) {
                        const e = new J(c.l1(s.pendingDs));
                        c.yg(e.restDecoder);
                        const n = L(e, t, s);
                        s.pendingDs = u && n ? jt([u, n]) : u || n
                    } else s.pendingDs = u;
                    if (e) {
                        const e = s.pendingStructs.update;
                        s.pendingStructs = null, j(t.doc, e)
                    }
                }), n, !1),
                j = (t, e, n, r = J) => {
                    const i = c.l1(e);
                    $(i, t, n, new r(i))
                },
                Y = (t, e, n) => j(t, e, n, U),
                K = (t, e = new Uint8Array([0]), n = new z) => {
                    ((t, e, n = new Map) => {
                        V(t, e.store, n), N(t, M(e.store))
                    })(n, t, q(e));
                    const r = [n.toUint8Array()];
                    if (t.store.pendingDs && r.push(t.store.pendingDs), t.store.pendingStructs && r.push(Yt(t.store.pendingStructs.update, e)), r.length > 1) {
                        if (n.constructor === H) return Vt(r.map(((t, e) => 0 === e ? t : Xt(t))));
                        if (n.constructor === z) return jt(r)
                    }
                    return r[0]
                },
                G = (t, e) => K(t, e, new H),
                B = t => {
                    const e = new Map,
                        n = c.yg(t.restDecoder);
                    for (let r = 0; r < n; r++) {
                        const n = c.yg(t.restDecoder),
                            r = c.yg(t.restDecoder);
                        e.set(n, r)
                    }
                    return e
                },
                q = t => B(new T(c.l1(t))),
                X = (t, e) => (o.uE(t.restEncoder, e.size), i.Dp(e.entries()).sort(((t, e) => e[0] - t[0])).forEach((([e, n]) => {
                    o.uE(t.restEncoder, e), o.uE(t.restEncoder, n)
                })), t),
                Z = (t, e = new W) => (t instanceof Map ? X(e, t) : ((t, e) => {
                    X(t, yt(e.store))
                })(e, t), e.toUint8Array()),
                Q = t => Z(t, new F);
            class tt {
                constructor() {
                    this.l = []
                }
            }
            const et = () => new tt,
                nt = (t, e) => t.l.push(e),
                rt = (t, e) => {
                    const n = t.l,
                        r = n.length;
                    t.l = n.filter((t => e !== t)), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.")
                },
                it = (t, e, n) => f.PP(t.l, [e, n]);
            class st {
                constructor(t, e) {
                    this.client = t, this.clock = e
                }
            }
            const lt = (t, e) => t === e || null !== t && null !== e && t.client === e.client && t.clock === e.clock,
                ot = (t, e) => new st(t, e),
                ct = t => {
                    for (const [e, n] of t.doc.share.entries())
                        if (n === t) return e;
                    throw u.zR()
                },
                ht = (t, e) => {
                    for (; null !== e;) {
                        if (e.parent === t) return !0;
                        e = e.parent._item
                    }
                    return !1
                };
            class dt {
                constructor(t, e, n, r = 0) {
                    this.type = t, this.tname = e, this.item = n, this.assoc = r
                }
            }
            class at {
                constructor(t, e, n = 0) {
                    this.type = t, this.index = e, this.assoc = n
                }
            }
            const ut = (t, e, n) => {
                    let r = null,
                        i = null;
                    return null === t._item ? i = ct(t) : r = ot(t._item.id.client, t._item.id.clock), new dt(r, i, e, n)
                },
                gt = (t, e, n = 0) => {
                    let r = t._start;
                    if (n < 0) {
                        if (0 === e) return ut(t, null, n);
                        e--
                    }
                    for (; null !== r;) {
                        if (!r.deleted && r.countable) {
                            if (r.length > e) return ut(t, ot(r.id.client, r.id.clock + e), n);
                            e -= r.length
                        }
                        if (null === r.right && n < 0) return ut(t, r.lastId, n);
                        r = r.right
                    }
                    return ut(t, null, n)
                },
                ft = (t, e) => {
                    const n = e.store,
                        r = t.item,
                        i = t.type,
                        s = t.tname,
                        l = t.assoc;
                    let o = null,
                        c = 0;
                    if (null !== r) {
                        if (bt(n, r.client) <= r.clock) return null;
                        const t = kn(n, r),
                            e = t.item;
                        if (!(e instanceof Sn)) return null;
                        if (o = e.parent, null === o._item || !o._item.deleted) {
                            c = e.deleted || !e.countable ? 0 : t.diff + (l >= 0 ? 0 : 1);
                            let n = e.left;
                            for (; null !== n;) !n.deleted && n.countable && (c += n.length), n = n.left
                        }
                    } else {
                        if (null !== s) o = e.get(s);
                        else {
                            if (null === i) throw u.zR(); {
                                if (bt(n, i.client) <= i.clock) return null;
                                const {
                                    item: t
                                } = kn(n, i);
                                if (!(t instanceof Sn && t.content instanceof wn)) return null;
                                o = t.content.type
                            }
                        }
                        c = l >= 0 ? o._length : 0
                    }
                    return ((t, e, n = 0) => new at(t, e, n))(o, c, t.assoc)
                };
            class pt {
                constructor(t, e) {
                    this.ds = t, this.sv = e
                }
            }
            const wt = (t, e) => new pt(t, e),
                kt = (wt(x(), new Map), (t, e) => void 0 === e ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !C(e.ds, t.id)),
                _t = (t, e) => {
                    const n = l.Yu(t.meta, _t, p.Ue),
                        r = t.doc.store;
                    n.has(e) || (e.sv.forEach(((e, n) => {
                        e < bt(r, n) && vt(t, ot(n, e))
                    })), E(t, e.ds, (t => {})), n.add(e))
                };
            class mt {
                constructor() {
                    this.clients = new Map, this.pendingStructs = null, this.pendingDs = null
                }
            }
            const yt = t => {
                    const e = new Map;
                    return t.clients.forEach(((t, n) => {
                        const r = t[t.length - 1];
                        e.set(n, r.id.clock + r.length)
                    })), e
                },
                bt = (t, e) => {
                    const n = t.clients.get(e);
                    if (void 0 === n) return 0;
                    const r = n[n.length - 1];
                    return r.id.clock + r.length
                },
                St = (t, e) => {
                    let n = t.clients.get(e.id.client);
                    if (void 0 === n) n = [], t.clients.set(e.id.client, n);
                    else {
                        const t = n[n.length - 1];
                        if (t.id.clock + t.length !== e.id.clock) throw u.zR()
                    }
                    n.push(e)
                },
                Et = (t, e) => {
                    let n = 0,
                        r = t.length - 1,
                        i = t[r],
                        l = i.id.clock;
                    if (l === e) return r;
                    let o = s.GW(e / (l + i.length - 1) * r);
                    for (; n <= r;) {
                        if (i = t[o], l = i.id.clock, l <= e) {
                            if (e < l + i.length) return o;
                            n = o + 1
                        } else r = o - 1;
                        o = s.GW((n + r) / 2)
                    }
                    throw u.zR()
                },
                Ct = (t, e) => {
                    const n = t.clients.get(e.client);
                    return n[Et(n, e.clock)]
                },
                Dt = (t, e, n) => {
                    const r = Et(e, n),
                        i = e[r];
                    return i.id.clock < n && i instanceof Sn ? (e.splice(r + 1, 0, mn(t, i, n - i.id.clock)), r + 1) : r
                },
                vt = (t, e) => {
                    const n = t.doc.store.clients.get(e.client);
                    return n[Dt(t, n, e.clock)]
                },
                At = (t, e, n) => {
                    const r = e.clients.get(n.client),
                        i = Et(r, n.clock),
                        s = r[i];
                    return n.clock !== s.id.clock + s.length - 1 && s.constructor !== Xe && r.splice(i + 1, 0, mn(t, s, n.clock - s.id.clock + 1)), s
                },
                xt = (t, e, n, r, i) => {
                    if (0 === r) return;
                    const s = n + r;
                    let l, o = Dt(t, e, n);
                    do {
                        l = e[o++], s < l.id.clock + l.length && Dt(t, e, s), i(l)
                    } while (o < e.length && e[o].id.clock < s)
                };
            class Mt {
                constructor(t, e, n) {
                    this.doc = t, this.deleteSet = new S, this.beforeState = yt(t.store), this.afterState = new Map, this.changed = new Map, this.changedParentTypes = new Map, this._mergeStructs = [], this.origin = e, this.meta = new Map, this.local = n, this.subdocsAdded = new Set, this.subdocsRemoved = new Set, this.subdocsLoaded = new Set, this._needFormattingCleanup = !1
                }
            }
            const Nt = (t, e) => !(0 === e.deleteSet.clients.size && !l.Yj(e.afterState, ((t, n) => e.beforeState.get(n) !== t))) && (D(e.deleteSet), ((t, e) => {
                    V(t, e.doc.store, e.beforeState)
                })(t, e), N(t, e.deleteSet), !0),
                It = (t, e, n) => {
                    const r = e._item;
                    (null === r || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && l.Yu(t.changed, e, p.Ue).add(n)
                },
                Lt = (t, e) => {
                    let n = t[e],
                        r = t[e - 1],
                        i = e;
                    for (; i > 0 && (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)); n = r, r = t[--i - 1]) n instanceof Sn && null !== n.parentSub && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
                    const s = e - i;
                    return s && t.splice(e + 1 - s, s), s
                },
                Ot = (t, e, n) => {
                    for (const [r, i] of t.clients.entries()) {
                        const t = e.clients.get(r);
                        for (let r = i.length - 1; r >= 0; r--) {
                            const s = i[r],
                                l = s.clock + s.len;
                            for (let r = Et(t, s.clock), i = t[r]; r < t.length && i.id.clock < l; i = t[++r]) {
                                const i = t[r];
                                if (s.clock + s.len <= i.id.clock) break;
                                i instanceof Sn && i.deleted && !i.keep && n(i) && i.gc(e, !1)
                            }
                        }
                    }
                },
                Rt = (t, e) => {
                    t.clients.forEach(((t, n) => {
                        const r = e.clients.get(n);
                        for (let e = t.length - 1; e >= 0; e--) {
                            const n = t[e];
                            for (let t = s.VV(r.length - 1, 1 + Et(r, n.clock + n.len - 1)), e = r[t]; t > 0 && e.id.clock >= n.clock; e = r[t]) t -= 1 + Lt(r, t)
                        }
                    }))
                },
                Tt = (t, e) => {
                    if (e < t.length) {
                        const n = t[e],
                            r = n.doc,
                            i = r.store,
                            l = n.deleteSet,
                            o = n._mergeStructs;
                        try {
                            D(l), n.afterState = yt(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
                            const c = [];
                            n.changed.forEach(((t, e) => c.push((() => {
                                null !== e._item && e._item.deleted || e._callObserver(n, t)
                            })))), c.push((() => {
                                n.changedParentTypes.forEach(((t, e) => {
                                    e._dEH.l.length > 0 && (null === e._item || !e._item.deleted) && ((t = t.filter((t => null === t.target._item || !t.target._item.deleted))).forEach((t => {
                                        t.currentTarget = e, t._path = null
                                    })), t.sort(((t, e) => t.path.length - e.path.length)), it(e._dEH, t, n))
                                }))
                            })), c.push((() => r.emit("afterTransaction", [n, r]))), (0, f.PP)(c, []), n._needFormattingCleanup && He(n)
                        } finally {
                            r.gc && Ot(l, i, r.gcFilter), Rt(l, i), n.afterState.forEach(((t, e) => {
                                const r = n.beforeState.get(e) || 0;
                                if (r !== t) {
                                    const t = i.clients.get(e),
                                        n = s.Fp(Et(t, r), 1);
                                    for (let e = t.length - 1; e >= n;) e -= 1 + Lt(t, e)
                                }
                            }));
                            for (let t = o.length - 1; t >= 0; t--) {
                                const {
                                    client: e,
                                    clock: n
                                } = o[t].id, r = i.clients.get(e), s = Et(r, n);
                                s + 1 < r.length && Lt(r, s + 1) > 1 || s > 0 && Lt(r, s)
                            }
                            if (n.local || n.afterState.get(r.clientID) === n.beforeState.get(r.clientID) || (w.S0(k.ud, k.Pl, "[yjs] ", k.YW, k.hM, "Changed the client-id because another client seems to be using it."), r.clientID = O()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
                                const t = new H;
                                Nt(t, n) && r.emit("update", [t.toUint8Array(), n.origin, r, n])
                            }
                            if (r._observers.has("updateV2")) {
                                const t = new z;
                                Nt(t, n) && r.emit("updateV2", [t.toUint8Array(), n.origin, r, n])
                            }
                            const {
                                subdocsAdded: c,
                                subdocsLoaded: h,
                                subdocsRemoved: d
                            } = n;
                            (c.size > 0 || d.size > 0 || h.size > 0) && (c.forEach((t => {
                                t.clientID = r.clientID, null == t.collectionid && (t.collectionid = r.collectionid), r.subdocs.add(t)
                            })), d.forEach((t => r.subdocs.delete(t))), r.emit("subdocs", [{
                                loaded: h,
                                added: c,
                                removed: d
                            }, r, n]), d.forEach((t => t.destroy()))), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : Tt(t, e + 1)
                        }
                    }
                },
                Ut = (t, e, n = null, r = !0) => {
                    const i = t._transactionCleanups;
                    let s = !1,
                        l = null;
                    null === t._transaction && (s = !0, t._transaction = new Mt(t, n, r), i.push(t._transaction), 1 === i.length && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
                    try {
                        l = e(t._transaction)
                    } finally {
                        if (s) {
                            const e = t._transaction === i[0];
                            t._transaction = null, e && Tt(i, 0)
                        }
                    }
                    return l
                };
            class Pt {
                constructor(t, e) {
                    this.insertions = e, this.deletions = t, this.meta = new Map
                }
            }
            const Jt = (t, e, n) => {
                    E(t, n.deletions, (t => {
                        t instanceof Sn && e.scope.some((e => ht(e, t))) && _n(t, !1)
                    }))
                },
                Ft = (t, e, n) => {
                    let r = null,
                        i = null;
                    const s = t.doc,
                        l = t.scope;
                    if (Ut(s, (n => {
                            for (; e.length > 0 && null === r;) {
                                const i = s.store,
                                    o = e.pop(),
                                    c = new Set,
                                    h = [];
                                let d = !1;
                                E(n, o.insertions, (t => {
                                    if (t instanceof Sn) {
                                        if (null !== t.redone) {
                                            let {
                                                item: e,
                                                diff: r
                                            } = kn(i, t.id);
                                            r > 0 && (e = vt(n, ot(e.id.client, e.id.clock + r))), t = e
                                        }!t.deleted && l.some((e => ht(e, t))) && h.push(t)
                                    }
                                })), E(n, o.deletions, (t => {
                                    t instanceof Sn && l.some((e => ht(e, t))) && !C(o.insertions, t.id) && c.add(t)
                                })), c.forEach((e => {
                                    d = null !== bn(n, e, c, o.insertions, t.ignoreRemoteMapChanges, t) || d
                                }));
                                for (let e = h.length - 1; e >= 0; e--) {
                                    const r = h[e];
                                    t.deleteFilter(r) && (r.delete(n), d = !0)
                                }
                                r = d ? o : null
                            }
                            n.changed.forEach(((t, e) => {
                                t.has(null) && e._searchMarker && (e._searchMarker.length = 0)
                            })), i = n
                        }), t), null != r) {
                        const e = i.changedParentTypes;
                        t.emit("stack-item-popped", [{
                            stackItem: r,
                            type: n,
                            changedParentTypes: e
                        }, t])
                    }
                    return r
                };
            class Ht extends r.y {
                constructor(t, {
                    captureTimeout: e = 500,
                    captureTransaction: n = (t => !0),
                    deleteFilter: r = (() => !0),
                    trackedOrigins: s = new Set([null]),
                    ignoreRemoteMapChanges: l = !1,
                    doc: o = (i.kJ(t) ? t[0].doc : t.doc)
                } = {}) {
                    super(), this.scope = [], this.doc = o, this.addToScope(t), this.deleteFilter = r, s.add(this), this.trackedOrigins = s, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.lastChange = 0, this.ignoreRemoteMapChanges = l, this.captureTimeout = e, this.afterTransactionHandler = t => {
                        if (!this.captureTransaction(t) || !this.scope.some((e => t.changedParentTypes.has(e))) || !this.trackedOrigins.has(t.origin) && (!t.origin || !this.trackedOrigins.has(t.origin.constructor))) return;
                        const e = this.undoing,
                            n = this.redoing,
                            r = e ? this.redoStack : this.undoStack;
                        e ? this.stopCapturing() : n || this.clear(!1, !0);
                        const i = new S;
                        t.afterState.forEach(((e, n) => {
                            const r = t.beforeState.get(n) || 0,
                                s = e - r;
                            s > 0 && A(i, n, r, s)
                        }));
                        const s = _.ZG();
                        let l = !1;
                        if (this.lastChange > 0 && s - this.lastChange < this.captureTimeout && r.length > 0 && !e && !n) {
                            const e = r[r.length - 1];
                            e.deletions = v([e.deletions, t.deleteSet]), e.insertions = v([e.insertions, i])
                        } else r.push(new Pt(t.deleteSet, i)), l = !0;
                        e || n || (this.lastChange = s), E(t, t.deleteSet, (t => {
                            t instanceof Sn && this.scope.some((e => ht(e, t))) && _n(t, !0)
                        }));
                        const o = [{
                            stackItem: r[r.length - 1],
                            origin: t.origin,
                            type: e ? "redo" : "undo",
                            changedParentTypes: t.changedParentTypes
                        }, this];
                        l ? this.emit("stack-item-added", o) : this.emit("stack-item-updated", o)
                    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", (() => {
                        this.destroy()
                    }))
                }
                addToScope(t) {
                    (t = i.kJ(t) ? t : [t]).forEach((t => {
                        this.scope.every((e => e !== t)) && (t.doc !== this.doc && w.ZK("[yjs#509] Not same Y.Doc"), this.scope.push(t))
                    }))
                }
                addTrackedOrigin(t) {
                    this.trackedOrigins.add(t)
                }
                removeTrackedOrigin(t) {
                    this.trackedOrigins.delete(t)
                }
                clear(t = !0, e = !0) {
                    (t && this.canUndo() || e && this.canRedo()) && this.doc.transact((n => {
                        t && (this.undoStack.forEach((t => Jt(n, this, t))), this.undoStack = []), e && (this.redoStack.forEach((t => Jt(n, this, t))), this.redoStack = []), this.emit("stack-cleared", [{
                            undoStackCleared: t,
                            redoStackCleared: e
                        }])
                    }))
                }
                stopCapturing() {
                    this.lastChange = 0
                }
                undo() {
                    let t;
                    this.undoing = !0;
                    try {
                        t = Ft(this, this.undoStack, "undo")
                    } finally {
                        this.undoing = !1
                    }
                    return t
                }
                redo() {
                    let t;
                    this.redoing = !0;
                    try {
                        t = Ft(this, this.redoStack, "redo")
                    } finally {
                        this.redoing = !1
                    }
                    return t
                }
                canUndo() {
                    return this.undoStack.length > 0
                }
                canRedo() {
                    return this.redoStack.length > 0
                }
                destroy() {
                    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy()
                }
            }
            class Wt {
                constructor(t, e) {
                    this.gen = function*(t) {
                        const e = c.yg(t.restDecoder);
                        for (let n = 0; n < e; n++) {
                            const e = c.yg(t.restDecoder),
                                n = t.readClient();
                            let r = c.yg(t.restDecoder);
                            for (let i = 0; i < e; i++) {
                                const e = t.readInfo();
                                if (10 === e) {
                                    const e = c.yg(t.restDecoder);
                                    yield new Dn(ot(n, r), e), r += e
                                } else if (0 !== (g.kr & e)) {
                                    const i = 0 === (e & (g.rc | g.x1)),
                                        s = new Sn(ot(n, r), null, (e & g.x1) === g.x1 ? t.readLeftID() : null, null, (e & g.rc) === g.rc ? t.readRightID() : null, i ? t.readParentInfo() ? t.readString() : t.readLeftID() : null, i && (e & g.cq) === g.cq ? t.readString() : null, En(t, e));
                                    yield s, r += s.length
                                } else {
                                    const e = t.readLen();
                                    yield new Xe(ot(n, r), e), r += e
                                }
                            }
                        }
                    }(t), this.curr = null, this.done = !1, this.filterSkips = e, this.next()
                }
                next() {
                    do {
                        this.curr = this.gen.next().value || null
                    } while (this.filterSkips && null !== this.curr && this.curr.constructor === Dn);
                    return this.curr
                }
            }
            class zt {
                constructor(t) {
                    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = []
                }
            }
            const Vt = t => jt(t, U, H),
                $t = (t, e) => {
                    if (t.constructor === Xe) {
                        const {
                            client: n,
                            clock: r
                        } = t.id;
                        return new Xe(ot(n, r + e), t.length - e)
                    }
                    if (t.constructor === Dn) {
                        const {
                            client: n,
                            clock: r
                        } = t.id;
                        return new Dn(ot(n, r + e), t.length - e)
                    } {
                        const n = t,
                            {
                                client: r,
                                clock: i
                            } = n.id;
                        return new Sn(ot(r, i + e), null, ot(r, i + e - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(e))
                    }
                },
                jt = (t, e = J, n = z) => {
                    if (1 === t.length) return t[0];
                    const r = t.map((t => new e(c.l1(t))));
                    let i = r.map((t => new Wt(t, !0))),
                        s = null;
                    const l = new n,
                        o = new zt(l);
                    for (; i = i.filter((t => null !== t.curr)), i.sort(((t, e) => {
                            if (t.curr.id.client === e.curr.id.client) {
                                const n = t.curr.id.clock - e.curr.id.clock;
                                return 0 === n ? t.curr.constructor === e.curr.constructor ? 0 : t.curr.constructor === Dn ? 1 : -1 : n
                            }
                            return e.curr.id.client - t.curr.id.client
                        })), 0 !== i.length;) {
                        const t = i[0],
                            e = t.curr.id.client;
                        if (null !== s) {
                            let n = t.curr,
                                r = !1;
                            for (; null !== n && n.id.clock + n.length <= s.struct.id.clock + s.struct.length && n.id.client >= s.struct.id.client;) n = t.next(), r = !0;
                            if (null === n || n.id.client !== e || r && n.id.clock > s.struct.id.clock + s.struct.length) continue;
                            if (e !== s.struct.id.client) Gt(o, s.struct, s.offset), s = {
                                struct: n,
                                offset: 0
                            }, t.next();
                            else if (s.struct.id.clock + s.struct.length < n.id.clock)
                                if (s.struct.constructor === Dn) s.struct.length = n.id.clock + n.length - s.struct.id.clock;
                                else {
                                    Gt(o, s.struct, s.offset);
                                    const t = n.id.clock - s.struct.id.clock - s.struct.length;
                                    s = {
                                        struct: new Dn(ot(e, s.struct.id.clock + s.struct.length), t),
                                        offset: 0
                                    }
                                }
                            else {
                                const e = s.struct.id.clock + s.struct.length - n.id.clock;
                                e > 0 && (s.struct.constructor === Dn ? s.struct.length -= e : n = $t(n, e)), s.struct.mergeWith(n) || (Gt(o, s.struct, s.offset), s = {
                                    struct: n,
                                    offset: 0
                                }, t.next())
                            }
                        } else s = {
                            struct: t.curr,
                            offset: 0
                        }, t.next();
                        for (let n = t.curr; null !== n && n.id.client === e && n.id.clock === s.struct.id.clock + s.struct.length && n.constructor !== Dn; n = t.next()) Gt(o, s.struct, s.offset), s = {
                            struct: n,
                            offset: 0
                        }
                    }
                    null !== s && (Gt(o, s.struct, s.offset), s = null), Bt(o);
                    const h = r.map((t => I(t))),
                        d = v(h);
                    return N(l, d), l.toUint8Array()
                },
                Yt = (t, e, n = J, r = z) => {
                    const i = q(e),
                        l = new r,
                        o = new zt(l),
                        h = new n(c.l1(t)),
                        d = new Wt(h, !1);
                    for (; d.curr;) {
                        const t = d.curr,
                            e = t.id.client,
                            n = i.get(e) || 0;
                        if (d.curr.constructor !== Dn)
                            if (t.id.clock + t.length > n)
                                for (Gt(o, t, s.Fp(n - t.id.clock, 0)), d.next(); d.curr && d.curr.id.client === e;) Gt(o, d.curr, 0), d.next();
                            else
                                for (; d.curr && d.curr.id.client === e && d.curr.id.clock + d.curr.length <= n;) d.next();
                        else d.next()
                    }
                    Bt(o);
                    const a = I(h);
                    return N(l, a), l.toUint8Array()
                },
                Kt = t => {
                    t.written > 0 && (t.clientStructs.push({
                        written: t.written,
                        restEncoder: o._f(t.encoder.restEncoder)
                    }), t.encoder.restEncoder = o.Mf(), t.written = 0)
                },
                Gt = (t, e, n) => {
                    t.written > 0 && t.currClient !== e.id.client && Kt(t), 0 === t.written && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), o.uE(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++
                },
                Bt = t => {
                    Kt(t);
                    const e = t.encoder.restEncoder;
                    o.uE(e, t.clientStructs.length);
                    for (let n = 0; n < t.clientStructs.length; n++) {
                        const r = t.clientStructs[n];
                        o.uE(e, r.written), o.HK(e, r.restEncoder)
                    }
                },
                qt = (t, e, n, r) => {
                    const i = new n(c.l1(t)),
                        s = new Wt(i, !1),
                        l = new r,
                        o = new zt(l);
                    for (let c = s.curr; null !== c; c = s.next()) Gt(o, e(c), 0);
                    Bt(o);
                    const h = I(i);
                    return N(l, h), l.toUint8Array()
                },
                Xt = t => qt(t, f.id, J, H),
                Zt = "You must not compute changes after the event-handler fired.";
            class Qt {
                constructor(t, e) {
                    this.target = t, this.currentTarget = t, this.transaction = e, this._changes = null, this._keys = null, this._delta = null, this._path = null
                }
                get path() {
                    return this._path || (this._path = te(this.currentTarget, this.target))
                }
                deletes(t) {
                    return C(this.transaction.deleteSet, t.id)
                }
                get keys() {
                    if (null === this._keys) {
                        if (0 === this.transaction.doc._transactionCleanups.length) throw u.Ue(Zt);
                        const t = new Map,
                            e = this.target;
                        this.transaction.changed.get(e).forEach((n => {
                            if (null !== n) {
                                const r = e._map.get(n);
                                let s, l;
                                if (this.adds(r)) {
                                    let t = r.left;
                                    for (; null !== t && this.adds(t);) t = t.left;
                                    if (this.deletes(r)) {
                                        if (null === t || !this.deletes(t)) return;
                                        s = "delete", l = i.Z$(t.content.getContent())
                                    } else null !== t && this.deletes(t) ? (s = "update", l = i.Z$(t.content.getContent())) : (s = "add", l = void 0)
                                } else {
                                    if (!this.deletes(r)) return;
                                    s = "delete", l = i.Z$(r.content.getContent())
                                }
                                t.set(n, {
                                    action: s,
                                    oldValue: l
                                })
                            }
                        })), this._keys = t
                    }
                    return this._keys
                }
                get delta() {
                    return this.changes.delta
                }
                adds(t) {
                    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0)
                }
                get changes() {
                    let t = this._changes;
                    if (null === t) {
                        if (0 === this.transaction.doc._transactionCleanups.length) throw u.Ue(Zt);
                        const e = this.target,
                            n = p.Ue(),
                            r = p.Ue(),
                            i = [];
                        t = {
                            added: n,
                            deleted: r,
                            delta: i,
                            keys: this.keys
                        };
                        if (this.transaction.changed.get(e).has(null)) {
                            let t = null;
                            const s = () => {
                                t && i.push(t)
                            };
                            for (let i = e._start; null !== i; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && (null !== t && void 0 !== t.delete || (s(), t = {
                                delete: 0
                            }), t.delete += i.length, r.add(i)) : this.adds(i) ? (null !== t && void 0 !== t.insert || (s(), t = {
                                insert: []
                            }), t.insert = t.insert.concat(i.content.getContent()), n.add(i)) : (null !== t && void 0 !== t.retain || (s(), t = {
                                retain: 0
                            }), t.retain += i.length);
                            null !== t && void 0 === t.retain && s()
                        }
                        this._changes = t
                    }
                    return t
                }
            }
            const te = (t, e) => {
                const n = [];
                for (; null !== e._item && e !== t;) {
                    if (null !== e._item.parentSub) n.unshift(e._item.parentSub);
                    else {
                        let t = 0,
                            r = e._item.parent._start;
                        for (; r !== e._item && null !== r;) r.deleted || t++, r = r.right;
                        n.unshift(t)
                    }
                    e = e._item.parent
                }
                return n
            };
            let ee = 0;
            class ne {
                constructor(t, e) {
                    t.marker = !0, this.p = t, this.index = e, this.timestamp = ee++
                }
            }
            const re = (t, e, n) => {
                    t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = ee++
                },
                ie = (t, e) => {
                    if (null === t._start || 0 === e || null === t._searchMarker) return null;
                    const n = 0 === t._searchMarker.length ? null : t._searchMarker.reduce(((t, n) => s.Wn(e - t.index) < s.Wn(e - n.index) ? t : n));
                    let r = t._start,
                        i = 0;
                    for (null !== n && (r = n.p, i = n.index, (t => {
                            t.timestamp = ee++
                        })(n)); null !== r.right && i < e;) {
                        if (!r.deleted && r.countable) {
                            if (e < i + r.length) break;
                            i += r.length
                        }
                        r = r.right
                    }
                    for (; null !== r.left && i > e;) r = r.left, !r.deleted && r.countable && (i -= r.length);
                    for (; null !== r.left && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
                    return null !== n && s.Wn(n.index - i) < r.parent.length / 80 ? (re(n, r, i), n) : ((t, e, n) => {
                        if (t.length >= 80) {
                            const r = t.reduce(((t, e) => t.timestamp < e.timestamp ? t : e));
                            return re(r, e, n), r
                        } {
                            const r = new ne(e, n);
                            return t.push(r), r
                        }
                    })(t._searchMarker, r, i)
                },
                se = (t, e, n) => {
                    for (let r = t.length - 1; r >= 0; r--) {
                        const i = t[r];
                        if (n > 0) {
                            let e = i.p;
                            for (e.marker = !1; e && (e.deleted || !e.countable);) e = e.left, e && !e.deleted && e.countable && (i.index -= e.length);
                            if (null === e || !0 === e.marker) {
                                t.splice(r, 1);
                                continue
                            }
                            i.p = e, e.marker = !0
                        }(e < i.index || n > 0 && e === i.index) && (i.index = s.Fp(e, i.index + n))
                    }
                },
                le = (t, e, n) => {
                    const r = t,
                        i = e.changedParentTypes;
                    for (; l.Yu(i, t, (() => [])).push(n), null !== t._item;) t = t._item.parent;
                    it(r._eH, n, e)
                };
            class oe {
                constructor() {
                    this._item = null, this._map = new Map, this._start = null, this.doc = null, this._length = 0, this._eH = et(), this._dEH = et(), this._searchMarker = null
                }
                get parent() {
                    return this._item ? this._item.parent : null
                }
                _integrate(t, e) {
                    this.doc = t, this._item = e
                }
                _copy() {
                    throw u.Nw()
                }
                clone() {
                    throw u.Nw()
                }
                _write(t) {}
                get _first() {
                    let t = this._start;
                    for (; null !== t && t.deleted;) t = t.right;
                    return t
                }
                _callObserver(t, e) {
                    !t.local && this._searchMarker && (this._searchMarker.length = 0)
                }
                observe(t) {
                    nt(this._eH, t)
                }
                observeDeep(t) {
                    nt(this._dEH, t)
                }
                unobserve(t) {
                    rt(this._eH, t)
                }
                unobserveDeep(t) {
                    rt(this._dEH, t)
                }
                toJSON() {}
            }
            const ce = (t, e, n) => {
                    e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
                    let r = n - e;
                    const i = [];
                    let s = t._start;
                    for (; null !== s && r > 0;) {
                        if (s.countable && !s.deleted) {
                            const t = s.content.getContent();
                            if (t.length <= e) e -= t.length;
                            else {
                                for (let n = e; n < t.length && r > 0; n++) i.push(t[n]), r--;
                                e = 0
                            }
                        }
                        s = s.right
                    }
                    return i
                },
                he = t => {
                    const e = [];
                    let n = t._start;
                    for (; null !== n;) {
                        if (n.countable && !n.deleted) {
                            const t = n.content.getContent();
                            for (let n = 0; n < t.length; n++) e.push(t[n])
                        }
                        n = n.right
                    }
                    return e
                },
                de = (t, e) => {
                    let n = 0,
                        r = t._start;
                    for (; null !== r;) {
                        if (r.countable && !r.deleted) {
                            const i = r.content.getContent();
                            for (let r = 0; r < i.length; r++) e(i[r], n++, t)
                        }
                        r = r.right
                    }
                },
                ae = (t, e) => {
                    const n = [];
                    return de(t, ((r, i) => {
                        n.push(e(r, i, t))
                    })), n
                },
                ue = t => {
                    let e = t._start,
                        n = null,
                        r = 0;
                    return {
                        [Symbol.iterator]() {
                            return this
                        },
                        next: () => {
                            if (null === n) {
                                for (; null !== e && e.deleted;) e = e.right;
                                if (null === e) return {
                                    done: !0,
                                    value: void 0
                                };
                                n = e.content.getContent(), r = 0, e = e.right
                            }
                            const t = n[r++];
                            return n.length <= r && (n = null), {
                                done: !1,
                                value: t
                            }
                        }
                    }
                },
                ge = (t, e) => {
                    const n = ie(t, e);
                    let r = t._start;
                    for (null !== n && (r = n.p, e -= n.index); null !== r; r = r.right)
                        if (!r.deleted && r.countable) {
                            if (e < r.length) return r.content.getContent()[e];
                            e -= r.length
                        }
                },
                fe = (t, e, n, r) => {
                    let i = n;
                    const s = t.doc,
                        l = s.clientID,
                        o = s.store,
                        c = null === n ? e._start : n.right;
                    let h = [];
                    const d = () => {
                        h.length > 0 && (i = new Sn(ot(l, bt(o, l)), i, i && i.lastId, c, c && c.id, e, null, new ln(h)), i.integrate(t, 0), h = [])
                    };
                    r.forEach((n => {
                        if (null === n) h.push(n);
                        else switch (n.constructor) {
                            case Number:
                            case Object:
                            case Boolean:
                            case Array:
                            case String:
                                h.push(n);
                                break;
                            default:
                                switch (d(), n.constructor) {
                                    case Uint8Array:
                                    case ArrayBuffer:
                                        i = new Sn(ot(l, bt(o, l)), i, i && i.lastId, c, c && c.id, e, null, new Ze(new Uint8Array(n))), i.integrate(t, 0);
                                        break;
                                    case R:
                                        i = new Sn(ot(l, bt(o, l)), i, i && i.lastId, c, c && c.id, e, null, new en(n)), i.integrate(t, 0);
                                        break;
                                    default:
                                        if (!(n instanceof oe)) throw new Error("Unexpected content type in insert operation");
                                        i = new Sn(ot(l, bt(o, l)), i, i && i.lastId, c, c && c.id, e, null, new wn(n)), i.integrate(t, 0)
                                }
                        }
                    })), d()
                },
                pe = () => u.Ue("Length exceeded!"),
                we = (t, e, n, r) => {
                    if (n > e._length) throw pe();
                    if (0 === n) return e._searchMarker && se(e._searchMarker, n, r.length), fe(t, e, null, r);
                    const i = n,
                        s = ie(e, n);
                    let l = e._start;
                    for (null !== s && (l = s.p, 0 === (n -= s.index) && (l = l.prev, n += l && l.countable && !l.deleted ? l.length : 0)); null !== l; l = l.right)
                        if (!l.deleted && l.countable) {
                            if (n <= l.length) {
                                n < l.length && vt(t, ot(l.id.client, l.id.clock + n));
                                break
                            }
                            n -= l.length
                        }
                    return e._searchMarker && se(e._searchMarker, i, r.length), fe(t, e, l, r)
                },
                ke = (t, e, n, r) => {
                    if (0 === r) return;
                    const i = n,
                        s = r,
                        l = ie(e, n);
                    let o = e._start;
                    for (null !== l && (o = l.p, n -= l.index); null !== o && n > 0; o = o.right) !o.deleted && o.countable && (n < o.length && vt(t, ot(o.id.client, o.id.clock + n)), n -= o.length);
                    for (; r > 0 && null !== o;) o.deleted || (r < o.length && vt(t, ot(o.id.client, o.id.clock + r)), o.delete(t), r -= o.length), o = o.right;
                    if (r > 0) throw pe();
                    e._searchMarker && se(e._searchMarker, i, -s + r)
                },
                _e = (t, e, n) => {
                    const r = e._map.get(n);
                    void 0 !== r && r.delete(t)
                },
                me = (t, e, n, r) => {
                    const i = e._map.get(n) || null,
                        s = t.doc,
                        l = s.clientID;
                    let o;
                    if (null == r) o = new ln([r]);
                    else switch (r.constructor) {
                        case Number:
                        case Object:
                        case Boolean:
                        case Array:
                        case String:
                            o = new ln([r]);
                            break;
                        case Uint8Array:
                            o = new Ze(r);
                            break;
                        case R:
                            o = new en(r);
                            break;
                        default:
                            if (!(r instanceof oe)) throw new Error("Unexpected content type");
                            o = new wn(r)
                    }
                    new Sn(ot(l, bt(s.store, l)), i, i && i.lastId, null, null, e, n, o).integrate(t, 0)
                },
                ye = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 === n || n.deleted ? void 0 : n.content.getContent()[n.length - 1]
                },
                be = t => {
                    const e = {};
                    return t._map.forEach(((t, n) => {
                        t.deleted || (e[n] = t.content.getContent()[t.length - 1])
                    })), e
                },
                Se = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 !== n && !n.deleted
                },
                Ee = t => m.BG(t.entries(), (t => !t[1].deleted));
            class Ce extends Qt {
                constructor(t, e) {
                    super(t, e), this._transaction = e
                }
            }
            class De extends oe {
                constructor() {
                    super(), this._prelimContent = [], this._searchMarker = []
                }
                static from(t) {
                    const e = new De;
                    return e.push(t), e
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
                }
                _copy() {
                    return new De
                }
                clone() {
                    const t = new De;
                    return t.insert(0, this.toArray().map((t => t instanceof oe ? t.clone() : t))), t
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length
                }
                _callObserver(t, e) {
                    super._callObserver(t, e), le(this, t, new Ce(this, t))
                }
                insert(t, e) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        we(n, this, t, e)
                    })) : this._prelimContent.splice(t, 0, ...e)
                }
                push(t) {
                    null !== this.doc ? Ut(this.doc, (e => {
                        ((t, e, n) => {
                            let r = (e._searchMarker || []).reduce(((t, e) => e.index > t.index ? e : t), {
                                index: 0,
                                p: e._start
                            }).p;
                            if (r)
                                for (; r.right;) r = r.right;
                            fe(t, e, r, n)
                        })(e, this, t)
                    })) : this._prelimContent.push(...t)
                }
                unshift(t) {
                    this.insert(0, t)
                }
                delete(t, e = 1) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        ke(n, this, t, e)
                    })) : this._prelimContent.splice(t, e)
                }
                get(t) {
                    return ge(this, t)
                }
                toArray() {
                    return he(this)
                }
                slice(t = 0, e = this.length) {
                    return ce(this, t, e)
                }
                toJSON() {
                    return this.map((t => t instanceof oe ? t.toJSON() : t))
                }
                map(t) {
                    return ae(this, t)
                }
                forEach(t) {
                    de(this, t)
                }[Symbol.iterator]() {
                    return ue(this)
                }
                _write(t) {
                    t.writeTypeRef(hn)
                }
            }
            class ve extends Qt {
                constructor(t, e, n) {
                    super(t, e), this.keysChanged = n
                }
            }
            class Ae extends oe {
                constructor(t) {
                    super(), this._prelimContent = null, this._prelimContent = void 0 === t ? new Map : new Map(t)
                }
                _integrate(t, e) {
                    super._integrate(t, e), this._prelimContent.forEach(((t, e) => {
                        this.set(e, t)
                    })), this._prelimContent = null
                }
                _copy() {
                    return new Ae
                }
                clone() {
                    const t = new Ae;
                    return this.forEach(((e, n) => {
                        t.set(n, e instanceof oe ? e.clone() : e)
                    })), t
                }
                _callObserver(t, e) {
                    le(this, t, new ve(this, t, e))
                }
                toJSON() {
                    const t = {};
                    return this._map.forEach(((e, n) => {
                        if (!e.deleted) {
                            const r = e.content.getContent()[e.length - 1];
                            t[n] = r instanceof oe ? r.toJSON() : r
                        }
                    })), t
                }
                get size() {
                    return [...Ee(this._map)].length
                }
                keys() {
                    return m.CA(Ee(this._map), (t => t[0]))
                }
                values() {
                    return m.CA(Ee(this._map), (t => t[1].content.getContent()[t[1].length - 1]))
                }
                entries() {
                    return m.CA(Ee(this._map), (t => [t[0], t[1].content.getContent()[t[1].length - 1]]))
                }
                forEach(t) {
                    this._map.forEach(((e, n) => {
                        e.deleted || t(e.content.getContent()[e.length - 1], n, this)
                    }))
                }[Symbol.iterator]() {
                    return this.entries()
                }
                delete(t) {
                    null !== this.doc ? Ut(this.doc, (e => {
                        _e(e, this, t)
                    })) : this._prelimContent.delete(t)
                }
                set(t, e) {
                    return null !== this.doc ? Ut(this.doc, (n => {
                        me(n, this, t, e)
                    })) : this._prelimContent.set(t, e), e
                }
                get(t) {
                    return ye(this, t)
                }
                has(t) {
                    return Se(this, t)
                }
                clear() {
                    null !== this.doc ? Ut(this.doc, (t => {
                        this.forEach((function(e, n, r) {
                            _e(t, r, n)
                        }))
                    })) : this._prelimContent.clear()
                }
                _write(t) {
                    t.writeTypeRef(dn)
                }
            }
            const xe = (t, e) => t === e || "object" === typeof t && "object" === typeof e && t && e && y.$m(t, e);
            class Me {
                constructor(t, e, n, r) {
                    this.left = t, this.right = e, this.index = n, this.currentAttributes = r
                }
                forward() {
                    if (null === this.right && u.zR(), this.right.content.constructor === rn) this.right.deleted || Oe(this.currentAttributes, this.right.content);
                    else this.right.deleted || (this.index += this.right.length);
                    this.left = this.right, this.right = this.right.right
                }
            }
            const Ne = (t, e, n) => {
                    for (; null !== e.right && n > 0;) {
                        if (e.right.content.constructor === rn) e.right.deleted || Oe(e.currentAttributes, e.right.content);
                        else e.right.deleted || (n < e.right.length && vt(t, ot(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length);
                        e.left = e.right, e.right = e.right.right
                    }
                    return e
                },
                Ie = (t, e, n, r) => {
                    const i = new Map,
                        s = r ? ie(e, n) : null;
                    if (s) {
                        const e = new Me(s.p.left, s.p, s.index, i);
                        return Ne(t, e, n - s.index)
                    } {
                        const r = new Me(null, e._start, 0, i);
                        return Ne(t, r, n)
                    }
                },
                Le = (t, e, n, r) => {
                    for (; null !== n.right && (!0 === n.right.deleted || n.right.content.constructor === rn && xe(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
                    const i = t.doc,
                        s = i.clientID;
                    r.forEach(((r, l) => {
                        const o = n.left,
                            c = n.right,
                            h = new Sn(ot(s, bt(i.store, s)), o, o && o.lastId, c, c && c.id, e, null, new rn(l, r));
                        h.integrate(t, 0), n.right = h, n.forward()
                    }))
                },
                Oe = (t, e) => {
                    const {
                        key: n,
                        value: r
                    } = e;
                    null === r ? t.delete(n) : t.set(n, r)
                },
                Re = (t, e) => {
                    for (; null !== t.right && (t.right.deleted || t.right.content.constructor === rn && xe(e[t.right.content.key] || null, t.right.content.value));) t.forward()
                },
                Te = (t, e, n, r) => {
                    const i = t.doc,
                        s = i.clientID,
                        l = new Map;
                    for (const o in r) {
                        const c = r[o],
                            h = n.currentAttributes.get(o) || null;
                        if (!xe(h, c)) {
                            l.set(o, h);
                            const {
                                left: r,
                                right: d
                            } = n;
                            n.right = new Sn(ot(s, bt(i.store, s)), r, r && r.lastId, d, d && d.id, e, null, new rn(o, c)), n.right.integrate(t, 0), n.forward()
                        }
                    }
                    return l
                },
                Ue = (t, e, n, r, i) => {
                    n.currentAttributes.forEach(((t, e) => {
                        void 0 === i[e] && (i[e] = null)
                    }));
                    const s = t.doc,
                        l = s.clientID;
                    Re(n, i);
                    const o = Te(t, e, n, i),
                        c = r.constructor === String ? new on(r) : r instanceof oe ? new wn(r) : new nn(r);
                    let {
                        left: h,
                        right: d,
                        index: a
                    } = n;
                    e._searchMarker && se(e._searchMarker, n.index, c.getLength()), d = new Sn(ot(l, bt(s.store, l)), h, h && h.lastId, d, d && d.id, e, null, c), d.integrate(t, 0), n.right = d, n.index = a, n.forward(), Le(t, e, n, o)
                },
                Pe = (t, e, n, r, i) => {
                    const s = t.doc,
                        l = s.clientID;
                    Re(n, i);
                    const o = Te(t, e, n, i);
                    t: for (; null !== n.right && (r > 0 || o.size > 0 && (n.right.deleted || n.right.content.constructor === rn));) {
                        if (!n.right.deleted) switch (n.right.content.constructor) {
                            case rn:
                                {
                                    const {
                                        key: e,
                                        value: s
                                    } = n.right.content,
                                    l = i[e];
                                    if (void 0 !== l) {
                                        if (xe(l, s)) o.delete(e);
                                        else {
                                            if (0 === r) break t;
                                            o.set(e, s)
                                        }
                                        n.right.delete(t)
                                    } else n.currentAttributes.set(e, s);
                                    break
                                }
                            default:
                                r < n.right.length && vt(t, ot(n.right.id.client, n.right.id.clock + r)), r -= n.right.length
                        }
                        n.forward()
                    }
                    if (r > 0) {
                        let i = "";
                        for (; r > 0; r--) i += "\n";
                        n.right = new Sn(ot(l, bt(s.store, l)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new on(i)), n.right.integrate(t, 0), n.forward()
                    }
                    Le(t, e, n, o)
                },
                Je = (t, e, n, r, i) => {
                    let s = e;
                    const o = l.Ue();
                    for (; s && (!s.countable || s.deleted);) {
                        if (!s.deleted && s.content.constructor === rn) {
                            const t = s.content;
                            o.set(t.key, t)
                        }
                        s = s.right
                    }
                    let c = 0,
                        h = !1;
                    for (; e !== s;) {
                        if (n === e && (h = !0), !e.deleted) {
                            const n = e.content;
                            switch (n.constructor) {
                                case rn:
                                    {
                                        const {
                                            key: s,
                                            value: l
                                        } = n,
                                        d = r.get(s) || null;o.get(s) === n && d !== l || (e.delete(t), c++, h || (i.get(s) || null) !== l || d === l || (null === d ? i.delete(s) : i.set(s, d))),
                                        h || e.deleted || Oe(i, n);
                                        break
                                    }
                            }
                        }
                        e = e.right
                    }
                    return c
                },
                Fe = t => {
                    let e = 0;
                    return Ut(t.doc, (n => {
                        let r = t._start,
                            i = t._start,
                            s = l.Ue();
                        const o = l.JG(s);
                        for (; i;) {
                            if (!1 === i.deleted)
                                if (i.content.constructor === rn) Oe(o, i.content);
                                else e += Je(n, r, i, s, o), s = l.JG(o), r = i;
                            i = i.right
                        }
                    })), e
                },
                He = t => {
                    const e = new Set,
                        n = t.doc;
                    for (const [r, i] of t.afterState.entries()) {
                        const s = t.beforeState.get(r) || 0;
                        i !== s && xt(t, n.store.clients.get(r), s, i, (t => {
                            t.deleted || t.content.constructor !== rn || t.constructor === Xe || e.add(t.parent)
                        }))
                    }
                    Ut(n, (n => {
                        E(t, t.deleteSet, (t => {
                            if (t instanceof Xe || !t.parent._hasFormatting || e.has(t.parent)) return;
                            const r = t.parent;
                            t.content.constructor === rn ? e.add(r) : ((t, e) => {
                                for (; e && e.right && (e.right.deleted || !e.right.countable);) e = e.right;
                                const n = new Set;
                                for (; e && (e.deleted || !e.countable);) {
                                    if (!e.deleted && e.content.constructor === rn) {
                                        const r = e.content.key;
                                        n.has(r) ? e.delete(t) : n.add(r)
                                    }
                                    e = e.left
                                }
                            })(n, t)
                        }));
                        for (const t of e) Fe(t)
                    }))
                },
                We = (t, e, n) => {
                    const r = n,
                        i = l.JG(e.currentAttributes),
                        s = e.right;
                    for (; n > 0 && null !== e.right;) {
                        if (!1 === e.right.deleted) switch (e.right.content.constructor) {
                            case wn:
                            case nn:
                            case on:
                                n < e.right.length && vt(t, ot(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t)
                        }
                        e.forward()
                    }
                    s && Je(t, s, e.right, i, e.currentAttributes);
                    const o = (e.left || e.right).parent;
                    return o._searchMarker && se(o._searchMarker, e.index, -r + n), e
                };
            class ze extends Qt {
                constructor(t, e, n) {
                    super(t, e), this.childListChanged = !1, this.keysChanged = new Set, n.forEach((t => {
                        null === t ? this.childListChanged = !0 : this.keysChanged.add(t)
                    }))
                }
                get changes() {
                    if (null === this._changes) {
                        const t = {
                            keys: this.keys,
                            delta: this.delta,
                            added: new Set,
                            deleted: new Set
                        };
                        this._changes = t
                    }
                    return this._changes
                }
                get delta() {
                    if (null === this._delta) {
                        const t = this.target.doc,
                            e = [];
                        Ut(t, (t => {
                            const n = new Map,
                                r = new Map;
                            let i = this.target._start,
                                s = null;
                            const l = {};
                            let o = "",
                                c = 0,
                                h = 0;
                            const d = () => {
                                if (null !== s) {
                                    let t = null;
                                    switch (s) {
                                        case "delete":
                                            h > 0 && (t = {
                                                delete: h
                                            }), h = 0;
                                            break;
                                        case "insert":
                                            ("object" === typeof o || o.length > 0) && (t = {
                                                insert: o
                                            }, n.size > 0 && (t.attributes = {}, n.forEach(((e, n) => {
                                                null !== e && (t.attributes[n] = e)
                                            })))), o = "";
                                            break;
                                        case "retain":
                                            c > 0 && (t = {
                                                retain: c
                                            }, y.xb(l) || (t.attributes = y.f0({}, l))), c = 0
                                    }
                                    t && e.push(t), s = null
                                }
                            };
                            for (; null !== i;) {
                                switch (i.content.constructor) {
                                    case wn:
                                    case nn:
                                        this.adds(i) ? this.deletes(i) || (d(), s = "insert", o = i.content.getContent()[0], d()) : this.deletes(i) ? ("delete" !== s && (d(), s = "delete"), h += 1) : i.deleted || ("retain" !== s && (d(), s = "retain"), c += 1);
                                        break;
                                    case on:
                                        this.adds(i) ? this.deletes(i) || ("insert" !== s && (d(), s = "insert"), o += i.content.str) : this.deletes(i) ? ("delete" !== s && (d(), s = "delete"), h += i.length) : i.deleted || ("retain" !== s && (d(), s = "retain"), c += i.length);
                                        break;
                                    case rn:
                                        {
                                            const {
                                                key: e,
                                                value: o
                                            } = i.content;
                                            if (this.adds(i)) {
                                                if (!this.deletes(i)) {
                                                    const c = n.get(e) || null;
                                                    xe(c, o) ? null !== o && i.delete(t) : ("retain" === s && d(), xe(o, r.get(e) || null) ? delete l[e] : l[e] = o)
                                                }
                                            } else if (this.deletes(i)) {
                                                r.set(e, o);
                                                const t = n.get(e) || null;
                                                xe(t, o) || ("retain" === s && d(), l[e] = t)
                                            } else if (!i.deleted) {
                                                r.set(e, o);
                                                const n = l[e];
                                                void 0 !== n && (xe(n, o) ? null !== n && i.delete(t) : ("retain" === s && d(), null === o ? delete l[e] : l[e] = o))
                                            }
                                            i.deleted || ("insert" === s && d(), Oe(n, i.content));
                                            break
                                        }
                                }
                                i = i.right
                            }
                            for (d(); e.length > 0;) {
                                const t = e[e.length - 1];
                                if (void 0 === t.retain || void 0 !== t.attributes) break;
                                e.pop()
                            }
                        })), this._delta = e
                    }
                    return this._delta
                }
            }
            class Ve extends oe {
                constructor(t) {
                    super(), this._pending = void 0 !== t ? [() => this.insert(0, t)] : [], this._searchMarker = [], this._hasFormatting = !1
                }
                get length() {
                    return this._length
                }
                _integrate(t, e) {
                    super._integrate(t, e);
                    try {
                        this._pending.forEach((t => t()))
                    } catch (n) {
                        console.error(n)
                    }
                    this._pending = null
                }
                _copy() {
                    return new Ve
                }
                clone() {
                    const t = new Ve;
                    return t.applyDelta(this.toDelta()), t
                }
                _callObserver(t, e) {
                    super._callObserver(t, e);
                    const n = new ze(this, t, e);
                    le(this, t, n), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0)
                }
                toString() {
                    let t = "",
                        e = this._start;
                    for (; null !== e;) !e.deleted && e.countable && e.content.constructor === on && (t += e.content.str), e = e.right;
                    return t
                }
                toJSON() {
                    return this.toString()
                }
                applyDelta(t, {
                    sanitize: e = !0
                } = {}) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        const r = new Me(null, this._start, 0, new Map);
                        for (let i = 0; i < t.length; i++) {
                            const s = t[i];
                            if (void 0 !== s.insert) {
                                const l = e || "string" !== typeof s.insert || i !== t.length - 1 || null !== r.right || "\n" !== s.insert.slice(-1) ? s.insert : s.insert.slice(0, -1);
                                ("string" !== typeof l || l.length > 0) && Ue(n, this, r, l, s.attributes || {})
                            } else void 0 !== s.retain ? Pe(n, this, r, s.retain, s.attributes || {}) : void 0 !== s.delete && We(n, r, s.delete)
                        }
                    })) : this._pending.push((() => this.applyDelta(t)))
                }
                toDelta(t, e, n) {
                    const r = [],
                        i = new Map,
                        s = this.doc;
                    let l = "",
                        o = this._start;

                    function c() {
                        if (l.length > 0) {
                            const t = {};
                            let e = !1;
                            i.forEach(((n, r) => {
                                e = !0, t[r] = n
                            }));
                            const n = {
                                insert: l
                            };
                            e && (n.attributes = t), r.push(n), l = ""
                        }
                    }
                    const h = () => {
                        for (; null !== o;) {
                            if (kt(o, t) || void 0 !== e && kt(o, e)) switch (o.content.constructor) {
                                case on:
                                    {
                                        const r = i.get("ychange");void 0 === t || kt(o, t) ? void 0 === e || kt(o, e) ? void 0 !== r && (c(), i.delete("ychange")) : void 0 !== r && r.user === o.id.client && "added" === r.type || (c(), i.set("ychange", n ? n("added", o.id) : {
                                            type: "added"
                                        })) : void 0 !== r && r.user === o.id.client && "removed" === r.type || (c(), i.set("ychange", n ? n("removed", o.id) : {
                                            type: "removed"
                                        })),
                                        l += o.content.str;
                                        break
                                    }
                                case wn:
                                case nn:
                                    {
                                        c();
                                        const t = {
                                            insert: o.content.getContent()[0]
                                        };
                                        if (i.size > 0) {
                                            const e = {};
                                            t.attributes = e, i.forEach(((t, n) => {
                                                e[n] = t
                                            }))
                                        }
                                        r.push(t);
                                        break
                                    }
                                case rn:
                                    kt(o, t) && (c(), Oe(i, o.content))
                            }
                            o = o.right
                        }
                        c()
                    };
                    return t || e ? Ut(s, (n => {
                        t && _t(n, t), e && _t(n, e), h()
                    }), "cleanup") : h(), r
                }
                insert(t, e, n) {
                    if (e.length <= 0) return;
                    const r = this.doc;
                    null !== r ? Ut(r, (r => {
                        const i = Ie(r, this, t, !n);
                        n || (n = {}, i.currentAttributes.forEach(((t, e) => {
                            n[e] = t
                        }))), Ue(r, this, i, e, n)
                    })) : this._pending.push((() => this.insert(t, e, n)))
                }
                insertEmbed(t, e, n) {
                    const r = this.doc;
                    null !== r ? Ut(r, (r => {
                        const i = Ie(r, this, t, !n);
                        Ue(r, this, i, e, n || {})
                    })) : this._pending.push((() => this.insertEmbed(t, e, n || {})))
                }
                delete(t, e) {
                    if (0 === e) return;
                    const n = this.doc;
                    null !== n ? Ut(n, (n => {
                        We(n, Ie(n, this, t, !0), e)
                    })) : this._pending.push((() => this.delete(t, e)))
                }
                format(t, e, n) {
                    if (0 === e) return;
                    const r = this.doc;
                    null !== r ? Ut(r, (r => {
                        const i = Ie(r, this, t, !1);
                        null !== i.right && Pe(r, this, i, e, n)
                    })) : this._pending.push((() => this.format(t, e, n)))
                }
                removeAttribute(t) {
                    null !== this.doc ? Ut(this.doc, (e => {
                        _e(e, this, t)
                    })) : this._pending.push((() => this.removeAttribute(t)))
                }
                setAttribute(t, e) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        me(n, this, t, e)
                    })) : this._pending.push((() => this.setAttribute(t, e)))
                }
                getAttribute(t) {
                    return ye(this, t)
                }
                getAttributes() {
                    return be(this)
                }
                _write(t) {
                    t.writeTypeRef(an)
                }
            }
            class $e {
                constructor(t, e = (() => !0)) {
                    this._filter = e, this._root = t, this._currentNode = t._start, this._firstCall = !0
                }[Symbol.iterator]() {
                    return this
                }
                next() {
                    let t = this._currentNode,
                        e = t && t.content && t.content.type;
                    if (null !== t && (!this._firstCall || t.deleted || !this._filter(e)))
                        do {
                            if (e = t.content.type, t.deleted || e.constructor !== Ye && e.constructor !== je || null === e._start)
                                for (; null !== t;) {
                                    if (null !== t.right) {
                                        t = t.right;
                                        break
                                    }
                                    t = t.parent === this._root ? null : t.parent._item
                                } else t = e._start
                        } while (null !== t && (t.deleted || !this._filter(t.content.type)));
                    return this._firstCall = !1, null === t ? {
                        value: void 0,
                        done: !0
                    } : (this._currentNode = t, {
                        value: t.content.type,
                        done: !1
                    })
                }
            }
            class je extends oe {
                constructor() {
                    super(), this._prelimContent = []
                }
                get firstChild() {
                    const t = this._first;
                    return t ? t.content.getContent()[0] : null
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
                }
                _copy() {
                    return new je
                }
                clone() {
                    const t = new je;
                    return t.insert(0, this.toArray().map((t => t instanceof oe ? t.clone() : t))), t
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length
                }
                createTreeWalker(t) {
                    return new $e(this, t)
                }
                querySelector(t) {
                    t = t.toUpperCase();
                    const e = new $e(this, (e => e.nodeName && e.nodeName.toUpperCase() === t)).next();
                    return e.done ? null : e.value
                }
                querySelectorAll(t) {
                    return t = t.toUpperCase(), i.Dp(new $e(this, (e => e.nodeName && e.nodeName.toUpperCase() === t)))
                }
                _callObserver(t, e) {
                    le(this, t, new Ke(this, e, t))
                }
                toString() {
                    return ae(this, (t => t.toString())).join("")
                }
                toJSON() {
                    return this.toString()
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createDocumentFragment();
                    return void 0 !== n && n._createAssociation(r, this), de(this, (i => {
                        r.insertBefore(i.toDOM(t, e, n), null)
                    })), r
                }
                insert(t, e) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        we(n, this, t, e)
                    })) : this._prelimContent.splice(t, 0, ...e)
                }
                insertAfter(t, e) {
                    if (null !== this.doc) Ut(this.doc, (n => {
                        const r = t && t instanceof oe ? t._item : t;
                        fe(n, this, r, e)
                    }));
                    else {
                        const n = this._prelimContent,
                            r = null === t ? 0 : n.findIndex((e => e === t)) + 1;
                        if (0 === r && null !== t) throw u.Ue("Reference item not found");
                        n.splice(r, 0, ...e)
                    }
                }
                delete(t, e = 1) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        ke(n, this, t, e)
                    })) : this._prelimContent.splice(t, e)
                }
                toArray() {
                    return he(this)
                }
                push(t) {
                    this.insert(this.length, t)
                }
                unshift(t) {
                    this.insert(0, t)
                }
                get(t) {
                    return ge(this, t)
                }
                slice(t = 0, e = this.length) {
                    return ce(this, t, e)
                }
                forEach(t) {
                    de(this, t)
                }
                _write(t) {
                    t.writeTypeRef(gn)
                }
            }
            class Ye extends je {
                constructor(t = "UNDEFINED") {
                    super(), this.nodeName = t, this._prelimAttrs = new Map
                }
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null
                }
                _integrate(t, e) {
                    super._integrate(t, e), this._prelimAttrs.forEach(((t, e) => {
                        this.setAttribute(e, t)
                    })), this._prelimAttrs = null
                }
                _copy() {
                    return new Ye(this.nodeName)
                }
                clone() {
                    const t = new Ye(this.nodeName),
                        e = this.getAttributes();
                    return y.Ed(e, ((e, n) => {
                        "string" === typeof e && t.setAttribute(n, e)
                    })), t.insert(0, this.toArray().map((t => t instanceof oe ? t.clone() : t))), t
                }
                toString() {
                    const t = this.getAttributes(),
                        e = [],
                        n = [];
                    for (const s in t) n.push(s);
                    n.sort();
                    const r = n.length;
                    for (let s = 0; s < r; s++) {
                        const r = n[s];
                        e.push(r + '="' + t[r] + '"')
                    }
                    const i = this.nodeName.toLocaleLowerCase();
                    return `<${i}${e.length>0?" "+e.join(" "):""}>${super.toString()}</${i}>`
                }
                removeAttribute(t) {
                    null !== this.doc ? Ut(this.doc, (e => {
                        _e(e, this, t)
                    })) : this._prelimAttrs.delete(t)
                }
                setAttribute(t, e) {
                    null !== this.doc ? Ut(this.doc, (n => {
                        me(n, this, t, e)
                    })) : this._prelimAttrs.set(t, e)
                }
                getAttribute(t) {
                    return ye(this, t)
                }
                hasAttribute(t) {
                    return Se(this, t)
                }
                getAttributes(t) {
                    return t ? ((t, e) => {
                        const n = {};
                        return t._map.forEach(((t, r) => {
                            let i = t;
                            for (; null !== i && (!e.sv.has(i.id.client) || i.id.clock >= (e.sv.get(i.id.client) || 0));) i = i.left;
                            null !== i && kt(i, e) && (n[r] = i.content.getContent()[i.length - 1])
                        })), n
                    })(this, t) : be(this)
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createElement(this.nodeName),
                        i = this.getAttributes();
                    for (const s in i) {
                        const t = i[s];
                        "string" === typeof t && r.setAttribute(s, t)
                    }
                    return de(this, (i => {
                        r.appendChild(i.toDOM(t, e, n))
                    })), void 0 !== n && n._createAssociation(r, this), r
                }
                _write(t) {
                    t.writeTypeRef(un), t.writeKey(this.nodeName)
                }
            }
            class Ke extends Qt {
                constructor(t, e, n) {
                    super(t, n), this.childListChanged = !1, this.attributesChanged = new Set, e.forEach((t => {
                        null === t ? this.childListChanged = !0 : this.attributesChanged.add(t)
                    }))
                }
            }
            class Ge extends Ae {
                constructor(t) {
                    super(), this.hookName = t
                }
                _copy() {
                    return new Ge(this.hookName)
                }
                clone() {
                    const t = new Ge(this.hookName);
                    return this.forEach(((e, n) => {
                        t.set(n, e)
                    })), t
                }
                toDOM(t = document, e = {}, n) {
                    const r = e[this.hookName];
                    let i;
                    return i = void 0 !== r ? r.createDom(this) : document.createElement(this.hookName), i.setAttribute("data-yjs-hook", this.hookName), void 0 !== n && n._createAssociation(i, this), i
                }
                _write(t) {
                    t.writeTypeRef(fn), t.writeKey(this.hookName)
                }
            }
            class Be extends Ve {
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null
                }
                _copy() {
                    return new Be
                }
                clone() {
                    const t = new Be;
                    return t.applyDelta(this.toDelta()), t
                }
                toDOM(t = document, e, n) {
                    const r = t.createTextNode(this.toString());
                    return void 0 !== n && n._createAssociation(r, this), r
                }
                toString() {
                    return this.toDelta().map((t => {
                        const e = [];
                        for (const r in t.attributes) {
                            const n = [];
                            for (const e in t.attributes[r]) n.push({
                                key: e,
                                value: t.attributes[r][e]
                            });
                            n.sort(((t, e) => t.key < e.key ? -1 : 1)), e.push({
                                nodeName: r,
                                attrs: n
                            })
                        }
                        e.sort(((t, e) => t.nodeName < e.nodeName ? -1 : 1));
                        let n = "";
                        for (let r = 0; r < e.length; r++) {
                            const t = e[r];
                            n += `<${t.nodeName}`;
                            for (let e = 0; e < t.attrs.length; e++) {
                                const r = t.attrs[e];
                                n += ` ${r.key}="${r.value}"`
                            }
                            n += ">"
                        }
                        n += t.insert;
                        for (let r = e.length - 1; r >= 0; r--) n += `</${e[r].nodeName}>`;
                        return n
                    })).join("")
                }
                toJSON() {
                    return this.toString()
                }
                _write(t) {
                    t.writeTypeRef(pn)
                }
            }
            class qe {
                constructor(t, e) {
                    this.id = t, this.length = e
                }
                get deleted() {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                write(t, e, n) {
                    throw u.Nw()
                }
                integrate(t, e) {
                    throw u.Nw()
                }
            }
            class Xe extends qe {
                get deleted() {
                    return !0
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && (this.length += t.length, !0)
                }
                integrate(t, e) {
                    e > 0 && (this.id.clock += e, this.length -= e), St(t.doc.store, this)
                }
                write(t, e) {
                    t.writeInfo(0), t.writeLen(this.length - e)
                }
                getMissing(t, e) {
                    return null
                }
            }
            class Ze {
                constructor(t) {
                    this.content = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.content]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new Ze(this.content)
                }
                splice(t) {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeBuf(this.content)
                }
                getRef() {
                    return 3
                }
            }
            class Qe {
                constructor(t) {
                    this.len = t
                }
                getLength() {
                    return this.len
                }
                getContent() {
                    return []
                }
                isCountable() {
                    return !1
                }
                copy() {
                    return new Qe(this.len)
                }
                splice(t) {
                    const e = new Qe(this.len - t);
                    return this.len = t, e
                }
                mergeWith(t) {
                    return this.len += t.len, !0
                }
                integrate(t, e) {
                    A(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted()
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeLen(this.len - e)
                }
                getRef() {
                    return 1
                }
            }
            const tn = (t, e) => new R({
                guid: t,
                ...e,
                shouldLoad: e.shouldLoad || e.autoLoad || !1
            });
            class en {
                constructor(t) {
                    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
                    const e = {};
                    this.opts = e, t.gc || (e.gc = !1), t.autoLoad && (e.autoLoad = !0), null !== t.meta && (e.meta = t.meta)
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.doc]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new en(tn(this.doc.guid, this.opts))
                }
                splice(t) {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    this.doc._item = e, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc)
                }
                delete(t) {
                    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc)
                }
                gc(t) {}
                write(t, e) {
                    t.writeString(this.doc.guid), t.writeAny(this.opts)
                }
                getRef() {
                    return 9
                }
            }
            class nn {
                constructor(t) {
                    this.embed = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.embed]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new nn(this.embed)
                }
                splice(t) {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeJSON(this.embed)
                }
                getRef() {
                    return 5
                }
            }
            class rn {
                constructor(t, e) {
                    this.key = t, this.value = e
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return []
                }
                isCountable() {
                    return !1
                }
                copy() {
                    return new rn(this.key, this.value)
                }
                splice(t) {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    const n = e.parent;
                    n._searchMarker = null, n._hasFormatting = !0
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeKey(this.key), t.writeJSON(this.value)
                }
                getRef() {
                    return 6
                }
            }
            class sn {
                constructor(t) {
                    this.arr = t
                }
                getLength() {
                    return this.arr.length
                }
                getContent() {
                    return this.arr
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new sn(this.arr)
                }
                splice(t) {
                    const e = new sn(this.arr.slice(t));
                    return this.arr = this.arr.slice(0, t), e
                }
                mergeWith(t) {
                    return this.arr = this.arr.concat(t.arr), !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeString(void 0 === e ? "undefined" : JSON.stringify(e))
                    }
                }
                getRef() {
                    return 2
                }
            }
            class ln {
                constructor(t) {
                    this.arr = t
                }
                getLength() {
                    return this.arr.length
                }
                getContent() {
                    return this.arr
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new ln(this.arr)
                }
                splice(t) {
                    const e = new ln(this.arr.slice(t));
                    return this.arr = this.arr.slice(0, t), e
                }
                mergeWith(t) {
                    return this.arr = this.arr.concat(t.arr), !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeAny(e)
                    }
                }
                getRef() {
                    return 8
                }
            }
            class on {
                constructor(t) {
                    this.str = t
                }
                getLength() {
                    return this.str.length
                }
                getContent() {
                    return this.str.split("")
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new on(this.str)
                }
                splice(t) {
                    const e = new on(this.str.slice(t));
                    this.str = this.str.slice(0, t);
                    const n = this.str.charCodeAt(t - 1);
                    return n >= 55296 && n <= 56319 && (this.str = this.str.slice(0, t - 1) + "\ufffd", e.str = "\ufffd" + e.str.slice(1)), e
                }
                mergeWith(t) {
                    return this.str += t.str, !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeString(0 === e ? this.str : this.str.slice(e))
                }
                getRef() {
                    return 4
                }
            }
            const cn = [t => new De, t => new Ae, t => new Ve, t => new Ye(t.readKey()), t => new je, t => new Ge(t.readKey()), t => new Be],
                hn = 0,
                dn = 1,
                an = 2,
                un = 3,
                gn = 4,
                fn = 5,
                pn = 6;
            class wn {
                constructor(t) {
                    this.type = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.type]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new wn(this.type._copy())
                }
                splice(t) {
                    throw u.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    this.type._integrate(t.doc, e)
                }
                delete(t) {
                    let e = this.type._start;
                    for (; null !== e;) e.deleted ? e.id.clock < (t.beforeState.get(e.id.client) || 0) && t._mergeStructs.push(e) : e.delete(t), e = e.right;
                    this.type._map.forEach((e => {
                        e.deleted ? e.id.clock < (t.beforeState.get(e.id.client) || 0) && t._mergeStructs.push(e) : e.delete(t)
                    })), t.changed.delete(this.type)
                }
                gc(t) {
                    let e = this.type._start;
                    for (; null !== e;) e.gc(t, !0), e = e.right;
                    this.type._start = null, this.type._map.forEach((e => {
                        for (; null !== e;) e.gc(t, !0), e = e.left
                    })), this.type._map = new Map
                }
                write(t, e) {
                    this.type._write(t)
                }
                getRef() {
                    return 7
                }
            }
            const kn = (t, e) => {
                    let n, r = e,
                        i = 0;
                    do {
                        i > 0 && (r = ot(r.client, r.clock + i)), n = Ct(t, r), i = r.clock - n.id.clock, r = n.redone
                    } while (null !== r && n instanceof Sn);
                    return {
                        item: n,
                        diff: i
                    }
                },
                _n = (t, e) => {
                    for (; null !== t && t.keep !== e;) t.keep = e, t = t.parent._item
                },
                mn = (t, e, n) => {
                    const {
                        client: r,
                        clock: i
                    } = e.id, s = new Sn(ot(r, i + n), e, ot(r, i + n - 1), e.right, e.rightOrigin, e.parent, e.parentSub, e.content.splice(n));
                    return e.deleted && s.markDeleted(), e.keep && (s.keep = !0), null !== e.redone && (s.redone = ot(e.redone.client, e.redone.clock + n)), e.right = s, null !== s.right && (s.right.left = s), t._mergeStructs.push(s), null !== s.parentSub && null === s.right && s.parent._map.set(s.parentSub, s), e.length = n, s
                },
                yn = (t, e) => i.G(t, (t => C(t.deletions, e))),
                bn = (t, e, n, r, i, s) => {
                    const l = t.doc,
                        o = l.store,
                        c = l.clientID,
                        h = e.redone;
                    if (null !== h) return vt(t, h);
                    let d, a = e.parent._item,
                        u = null;
                    if (null !== a && !0 === a.deleted) {
                        if (null === a.redone && (!n.has(a) || null === bn(t, a, n, r, i, s))) return null;
                        for (; null !== a.redone;) a = vt(t, a.redone)
                    }
                    const g = null === a ? e.parent : a.content.type;
                    if (null === e.parentSub) {
                        for (u = e.left, d = e; null !== u;) {
                            let e = u;
                            for (; null !== e && e.parent._item !== a;) e = null === e.redone ? null : vt(t, e.redone);
                            if (null !== e && e.parent._item === a) {
                                u = e;
                                break
                            }
                            u = u.left
                        }
                        for (; null !== d;) {
                            let e = d;
                            for (; null !== e && e.parent._item !== a;) e = null === e.redone ? null : vt(t, e.redone);
                            if (null !== e && e.parent._item === a) {
                                d = e;
                                break
                            }
                            d = d.right
                        }
                    } else if (d = null, e.right && !i) {
                        for (u = e; null !== u && null !== u.right && (u.right.redone || C(r, u.right.id) || yn(s.undoStack, u.right.id) || yn(s.redoStack, u.right.id));)
                            for (u = u.right; u.redone;) u = vt(t, u.redone);
                        if (u && null !== u.right) return null
                    } else u = g._map.get(e.parentSub) || null;
                    const f = bt(o, c),
                        p = ot(c, f),
                        w = new Sn(p, u, u && u.lastId, d, d && d.id, g, e.parentSub, e.content.copy());
                    return e.redone = p, _n(w, !0), w.integrate(t, 0), w
                };
            class Sn extends qe {
                constructor(t, e, n, r, i, s, l, o) {
                    super(t, o.getLength()), this.origin = n, this.left = e, this.right = r, this.rightOrigin = i, this.parent = s, this.parentSub = l, this.redone = null, this.content = o, this.info = this.content.isCountable() ? g.Qn : 0
                }
                set marker(t) {
                    (this.info & g.Ko) > 0 !== t && (this.info ^= g.Ko)
                }
                get marker() {
                    return (this.info & g.Ko) > 0
                }
                get keep() {
                    return (this.info & g.Vw) > 0
                }
                set keep(t) {
                    this.keep !== t && (this.info ^= g.Vw)
                }
                get countable() {
                    return (this.info & g.Qn) > 0
                }
                get deleted() {
                    return (this.info & g.CY) > 0
                }
                set deleted(t) {
                    this.deleted !== t && (this.info ^= g.CY)
                }
                markDeleted() {
                    this.info |= g.CY
                }
                getMissing(t, e) {
                    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= bt(e, this.origin.client)) return this.origin.client;
                    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= bt(e, this.rightOrigin.client)) return this.rightOrigin.client;
                    if (this.parent && this.parent.constructor === st && this.id.client !== this.parent.client && this.parent.clock >= bt(e, this.parent.client)) return this.parent.client;
                    if (this.origin && (this.left = At(t, e, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = vt(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Xe || this.right && this.right.constructor === Xe) this.parent = null;
                    else if (this.parent) {
                        if (this.parent.constructor === st) {
                            const t = Ct(e, this.parent);
                            t.constructor === Xe ? this.parent = null : this.parent = t.content.type
                        }
                    } else this.left && this.left.constructor === Sn && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === Sn && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
                    return null
                }
                integrate(t, e) {
                    if (e > 0 && (this.id.clock += e, this.left = At(t, t.doc.store, ot(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(e), this.length -= e), this.parent) {
                        if (!this.left && (!this.right || null !== this.right.left) || this.left && this.left.right !== this.right) {
                            let e, n = this.left;
                            if (null !== n) e = n.right;
                            else if (null !== this.parentSub)
                                for (e = this.parent._map.get(this.parentSub) || null; null !== e && null !== e.left;) e = e.left;
                            else e = this.parent._start;
                            const r = new Set,
                                i = new Set;
                            for (; null !== e && e !== this.right;) {
                                if (i.add(e), r.add(e), lt(this.origin, e.origin)) {
                                    if (e.id.client < this.id.client) n = e, r.clear();
                                    else if (lt(this.rightOrigin, e.rightOrigin)) break
                                } else {
                                    if (null === e.origin || !i.has(Ct(t.doc.store, e.origin))) break;
                                    r.has(Ct(t.doc.store, e.origin)) || (n = e, r.clear())
                                }
                                e = e.right
                            }
                            this.left = n
                        }
                        if (null !== this.left) {
                            const t = this.left.right;
                            this.right = t, this.left.right = this
                        } else {
                            let t;
                            if (null !== this.parentSub)
                                for (t = this.parent._map.get(this.parentSub) || null; null !== t && null !== t.left;) t = t.left;
                            else t = this.parent._start, this.parent._start = this;
                            this.right = t
                        }
                        null !== this.right ? this.right.left = this : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(t)), null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length), St(t.doc.store, this), this.content.integrate(t, this), It(t, this.parent, this.parentSub), (null !== this.parent._item && this.parent._item.deleted || null !== this.parentSub && null !== this.right) && this.delete(t)
                    } else new Xe(this.id, this.length).integrate(t, 0)
                }
                get next() {
                    let t = this.right;
                    for (; null !== t && t.deleted;) t = t.right;
                    return t
                }
                get prev() {
                    let t = this.left;
                    for (; null !== t && t.deleted;) t = t.left;
                    return t
                }
                get lastId() {
                    return 1 === this.length ? this.id : ot(this.id.client, this.id.clock + this.length - 1)
                }
                mergeWith(t) {
                    if (this.constructor === t.constructor && lt(t.origin, this.lastId) && this.right === t && lt(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && null === this.redone && null === t.redone && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
                        const e = this.parent._searchMarker;
                        return e && e.forEach((e => {
                            e.p === t && (e.p = this, !this.deleted && this.countable && (e.index -= this.length))
                        })), t.keep && (this.keep = !0), this.right = t.right, null !== this.right && (this.right.left = this), this.length += t.length, !0
                    }
                    return !1
                }
                delete(t) {
                    if (!this.deleted) {
                        const e = this.parent;
                        this.countable && null === this.parentSub && (e._length -= this.length), this.markDeleted(), A(t.deleteSet, this.id.client, this.id.clock, this.length), It(t, e, this.parentSub), this.content.delete(t)
                    }
                }
                gc(t, e) {
                    if (!this.deleted) throw u.zR();
                    this.content.gc(t), e ? ((t, e, n) => {
                        const r = t.clients.get(e.id.client);
                        r[Et(r, e.id.clock)] = n
                    })(t, this, new Xe(this.id, this.length)) : this.content = new Qe(this.length)
                }
                write(t, e) {
                    const n = e > 0 ? ot(this.id.client, this.id.clock + e - 1) : this.origin,
                        r = this.rightOrigin,
                        i = this.parentSub,
                        s = this.content.getRef() & g.kr | (null === n ? 0 : g.x1) | (null === r ? 0 : g.rc) | (null === i ? 0 : g.cq);
                    if (t.writeInfo(s), null !== n && t.writeLeftID(n), null !== r && t.writeRightID(r), null === n && null === r) {
                        const e = this.parent;
                        if (void 0 !== e._item) {
                            const n = e._item;
                            if (null === n) {
                                const n = ct(e);
                                t.writeParentInfo(!0), t.writeString(n)
                            } else t.writeParentInfo(!1), t.writeLeftID(n.id)
                        } else e.constructor === String ? (t.writeParentInfo(!0), t.writeString(e)) : e.constructor === st ? (t.writeParentInfo(!1), t.writeLeftID(e)) : u.zR();
                        null !== i && t.writeString(i)
                    }
                    this.content.write(t, e)
                }
            }
            const En = (t, e) => Cn[e & g.kr](t),
                Cn = [() => {
                    u.zR()
                }, t => new Qe(t.readLen()), t => {
                    const e = t.readLen(),
                        n = [];
                    for (let r = 0; r < e; r++) {
                        const e = t.readString();
                        "undefined" === e ? n.push(void 0) : n.push(JSON.parse(e))
                    }
                    return new sn(n)
                }, t => new Ze(t.readBuf()), t => new on(t.readString()), t => new nn(t.readJSON()), t => new rn(t.readKey(), t.readJSON()), t => new wn(cn[t.readTypeRef()](t)), t => {
                    const e = t.readLen(),
                        n = [];
                    for (let r = 0; r < e; r++) n.push(t.readAny());
                    return new ln(n)
                }, t => new en(tn(t.readString(), t.readAny())), () => {
                    u.zR()
                }];
            class Dn extends qe {
                get deleted() {
                    return !0
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && (this.length += t.length, !0)
                }
                integrate(t, e) {
                    u.zR()
                }
                write(t, e) {
                    t.writeInfo(10), o.uE(t.restEncoder, this.length - e)
                }
                getMissing(t, e) {
                    return null
                }
            }
            const vn = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : {};
            !0 === vn["__ $YJS$ __"] && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), vn["__ $YJS$ __"] = !0
        }
    }
]);