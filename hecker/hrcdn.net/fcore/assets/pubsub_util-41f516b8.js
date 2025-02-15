"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["pubsub_util"], {
        NwlH: (e, n, r) => {
            r.d(n, {
                Z: () => t
            }), r("Z2Ku");
            var u, s = r("ZHvg"),
                b = r.n(s),
                c = r("zLEA"),
                i = {};
            const t = {
                createConnection: function(e) {
                    return (u = new(b())(e)).open(), u.onerror = c.tz, u
                },
                getConnection: function() {
                    return u
                },
                alreadySubscribed: function(e) {
                    return u && u._subscribes[e]
                },
                subscribe(e, n) {
                    u && (i[e] || (i[e] = []), i[e].includes(n) || i[e].push(n), this.alreadySubscribed(e) || u.subscribe(e, null, {}, ((n, r) => {
                        i[e].forEach((e => e(n, r)))
                    })))
                },
                unsubscribe(e, n) {
                    u && this.alreadySubscribed(e) && (n ? i[e].splice(i[e].indexOf(n), 1) : (delete i[e], u.unsubscribe(e)), i[e] && !i[e].length && (delete i[e], u.unsubscribe(e)))
                }
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/pubsub_util-41f516b8.js.map