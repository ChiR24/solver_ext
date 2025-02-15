(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358], {
        75708: function(t, i, s) {
            var n;
            "undefined" != typeof self && self, t.exports = (n = s(67294), function(t) {
                function i(n) {
                    if (s[n]) return s[n].exports;
                    var o = s[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                }
                var s = {};
                return i.m = t, i.c = s, i.d = function(t, s, n) {
                    i.o(t, s) || Object.defineProperty(t, s, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, i.n = function(t) {
                    var s = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return i.d(s, "a", s), s
                }, i.o = function(t, i) {
                    return Object.prototype.hasOwnProperty.call(t, i)
                }, i.p = "", i(i.s = 0)
            }([function(t, i, s) {
                "use strict";

                function n() {
                    return n = Object.assign || function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var s = arguments[i];
                            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
                        }
                        return t
                    }, n.apply(this, arguments)
                }

                function o(t) {
                    return h(t) || r(t) || a(t) || e()
                }

                function e() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function a(t, i) {
                    if (t) {
                        if ("string" == typeof t) return l(t, i);
                        var s = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === s && t.constructor && (s = t.constructor.name), "Map" === s || "Set" === s ? Array.from(t) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? l(t, i) : void 0
                    }
                }

                function r(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }

                function h(t) {
                    if (Array.isArray(t)) return l(t)
                }

                function l(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var s = 0, n = new Array(i); s < i; s++) n[s] = t[s];
                    return n
                }

                function c(t) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var p = s(1),
                    d = s.n(p),
                    u = "undefined" != typeof window ? p.useLayoutEffect : p.useEffect,
                    g = Object(p.forwardRef)((function(t, i) {
                        var s = Object(p.useRef)(),
                            e = Object(p.useRef)();
                        return u((function() {
                            function i() {
                                var i = t.highcharts || "object" === ("undefined" == typeof window ? "undefined" : c(window)) && window.Highcharts,
                                    n = t.constructorType || "chart";
                                i ? i[n] ? t.options ? e.current = i[n](s.current, t.options, t.callback ? t.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                            }
                            if (e.current) {
                                if (!1 !== t.allowChartUpdate)
                                    if (!t.immutable && e.current) {
                                        var n;
                                        (n = e.current).update.apply(n, [t.options].concat(o(t.updateArgs || [!0, !0])))
                                    } else i()
                            } else i()
                        })), u((function() {
                            return function() {
                                e.current && (e.current.destroy(), e.current = null)
                            }
                        }), []), Object(p.useImperativeHandle)(i, (function() {
                            return {
                                get chart() {
                                    return e.current
                                },
                                container: s
                            }
                        }), []), d.a.createElement("div", n({}, t.containerProps, {
                            ref: s
                        }))
                    }));
                i.default = Object(p.memo)(g)
            }, function(t, i) {
                t.exports = n
            }]))
        },
        75111: function(t, i, s) {
            "use strict";
            var n, o, e;
            e = function(t) {
                function i(t, i, s, n) {
                    t.hasOwnProperty(i) || (t[i] = n.apply(null, s), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                        detail: {
                            path: i,
                            module: t[i]
                        }
                    })))
                }
                i(t = t ? t._modules : {}, "Extensions/Annotations/AnnotationChart.js", [t["Core/Utilities.js"]], (function(t) {
                    function i(t, i) {
                        return t = this.initAnnotation(t), this.options.annotations.push(t.options), p(i, !0) && (t.redraw(), t.graphic.attr({
                            opacity: 1
                        })), t
                    }

                    function s() {
                        const t = this;
                        t.plotBoxClip = this.renderer.clipRect(this.plotBox), t.controlPointsGroup = t.renderer.g("control-points").attr({
                            zIndex: 99
                        }).clip(t.plotBoxClip).add(), t.options.annotations.forEach(((i, s) => {
                            if (!t.annotations.some((t => t.options === i))) {
                                const n = t.initAnnotation(i);
                                t.options.annotations[s] = n.options
                            }
                        })), t.drawAnnotations(), r(t, "redraw", t.drawAnnotations), r(t, "destroy", (function() {
                            t.plotBoxClip.destroy(), t.controlPointsGroup.destroy()
                        })), r(t, "exportData", (function(i) {
                            const s = (this.options.exporting && this.options.exporting.csv || {}).columnHeaderFormatter,
                                n = !i.dataRows[1].xValues,
                                o = t.options.lang && t.options.lang.exportData && t.options.lang.exportData.annotationHeader,
                                e = function(t) {
                                    let i;
                                    return s && (i = s(t), !1 !== i) ? i : (i = o + " " + t, n ? {
                                        columnTitle: i,
                                        topLevelColumnTitle: i
                                    } : i)
                                },
                                a = i.dataRows[0].length,
                                r = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.itemDelimiter,
                                h = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.join;
                            t.annotations.forEach((t => {
                                t.options.labelOptions && t.options.labelOptions.includeInDataExport && t.labels.forEach((t => {
                                    if (t.options.text) {
                                        const s = t.options.text;
                                        t.points.forEach((t => {
                                            const n = t.x,
                                                o = t.series.xAxis ? t.series.xAxis.index : -1;
                                            let e = !1;
                                            if (-1 === o) {
                                                t = i.dataRows[0].length;
                                                for (var l = Array(t), c = 0; c < t; ++c) l[c] = "";
                                                l.push(s), l.xValues = [], l.xValues[o] = n, i.dataRows.push(l), e = !0
                                            }
                                            if (e || i.dataRows.forEach((t => {
                                                    !e && t.xValues && void 0 !== o && n === t.xValues[o] && (h && t.length > a ? t[t.length - 1] += r + s : t.push(s), e = !0)
                                                })), !e) {
                                                for (t = i.dataRows[0].length, l = Array(t), c = 0; c < t; ++c) l[c] = "";
                                                l[0] = n, l.push(s), l.xValues = [], void 0 !== o && (l.xValues[o] = n), i.dataRows.push(l)
                                            }
                                        }))
                                    }
                                }))
                            }));
                            let l = 0;
                            i.dataRows.forEach((t => {
                                l = Math.max(l, t.length)
                            }));
                            const c = l - i.dataRows[0].length;
                            for (let t = 0; t < c; t++) {
                                const s = e(t + 1);
                                n ? (i.dataRows[0].push(s.topLevelColumnTitle), i.dataRows[1].push(s.columnTitle)) : i.dataRows[0].push(s)
                            }
                        }))
                    }

                    function n() {
                        this.plotBoxClip.attr(this.plotBox), this.annotations.forEach((t => {
                            t.redraw(), t.graphic.animate({
                                opacity: 1
                            }, t.animationConfig)
                        }))
                    }

                    function o(t) {
                        const i = this.annotations,
                            s = "annotations" === t.coll ? t : l(i, (function(i) {
                                return i.options.id === t
                            }));
                        s && (c(s, "remove"), h(this.options.annotations, s.options), h(i, s), s.destroy())
                    }

                    function e() {
                        this.annotations = [], this.options.annotations || (this.options.annotations = [])
                    }

                    function a(t) {
                        this.chart.hasDraggedAnnotation || t.apply(this, Array.prototype.slice.call(arguments, 1))
                    }
                    const {
                        addEvent: r,
                        erase: h,
                        find: l,
                        fireEvent: c,
                        pick: p,
                        wrap: d
                    } = t, u = [];
                    var g;
                    return function(h) {
                        h.compose = function(h, l, c) {
                            t.pushUnique(u, l) && (r(l, "afterInit", e), (l = l.prototype).addAnnotation = i, l.callbacks.push(s), l.collectionsWithInit.annotations = [i], l.collectionsWithUpdate.push("annotations"), l.drawAnnotations = n, l.removeAnnotation = o, l.initAnnotation = function(t) {
                                return t = new(h.types[t.type] || h)(this, t), this.annotations.push(t), t
                            }), t.pushUnique(u, c) && d(c.prototype, "onContainerMouseDown", a)
                        }
                    }(g || (g = {})), g
                })), i(t, "Extensions/Annotations/AnnotationDefaults.js", [t["Core/Utilities.js"]], (function(t) {
                    const {
                        defined: i
                    } = t;
                    return {
                        visible: !0,
                        animation: {},
                        crop: !0,
                        draggable: "xy",
                        labelOptions: {
                            align: "center",
                            allowOverlap: !1,
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            borderColor: "#000000",
                            borderRadius: 3,
                            borderWidth: 1,
                            className: "highcharts-no-tooltip",
                            crop: !1,
                            formatter: function() {
                                return i(this.y) ? "" + this.y : "Annotation label"
                            },
                            includeInDataExport: !0,
                            overflow: "justify",
                            padding: 5,
                            shadow: !1,
                            shape: "callout",
                            style: {
                                fontSize: "0.7em",
                                fontWeight: "normal",
                                color: "contrast"
                            },
                            useHTML: !1,
                            verticalAlign: "bottom",
                            x: 0,
                            y: -16
                        },
                        shapeOptions: {
                            stroke: "rgba(0, 0, 0, 0.75)",
                            strokeWidth: 1,
                            fill: "rgba(0, 0, 0, 0.75)",
                            r: 0,
                            snap: 2
                        },
                        controlPointOptions: {
                            events: {},
                            style: {
                                cursor: "pointer",
                                fill: "#ffffff",
                                stroke: "#000000",
                                "stroke-width": 2
                            },
                            height: 10,
                            symbol: "circle",
                            visible: !1,
                            width: 10
                        },
                        events: {},
                        zIndex: 6
                    }
                })), i(t, "Extensions/Annotations/EventEmitter.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        doc: s,
                        isTouchDevice: n
                    } = t, {
                        addEvent: o,
                        fireEvent: e,
                        objectEach: a,
                        pick: r,
                        removeEvent: h
                    } = i;
                    return class {
                        addEvents() {
                            const t = this,
                                i = function(i) {
                                    o(i, n ? "touchstart" : "mousedown", (i => {
                                        t.onMouseDown(i)
                                    }), {
                                        passive: !1
                                    })
                                };
                            if (i(this.graphic.element), (t.labels || []).forEach((t => {
                                    t.options.useHTML && t.graphic.text && i(t.graphic.text.element)
                                })), a(t.options.events, ((i, s) => {
                                    const n = function(n) {
                                        "click" === s && t.cancelClick || i.call(t, t.chart.pointer.normalize(n), t.target)
                                    }; - 1 === (t.nonDOMEvents || []).indexOf(s) ? t.graphic.on(s, n) : o(t, s, n, {
                                        passive: !1
                                    })
                                })), t.options.draggable && (o(t, "drag", t.onDrag), !t.graphic.renderer.styledMode)) {
                                const i = {
                                    cursor: {
                                        x: "ew-resize",
                                        y: "ns-resize",
                                        xy: "move"
                                    }[t.options.draggable]
                                };
                                t.graphic.css(i), (t.labels || []).forEach((t => {
                                    t.options.useHTML && t.graphic.text && t.graphic.text.css(i)
                                }))
                            }
                            t.isUpdating || e(t, "add")
                        }
                        destroy() {
                            this.removeDocEvents(), h(this), this.hcEvents = null
                        }
                        mouseMoveToRadians(t, i, s) {
                            let n = t.prevChartY - s,
                                o = t.prevChartX - i;
                            return s = t.chartY - s, t = t.chartX - i, this.chart.inverted && (i = o, o = n, n = i, i = t, t = s, s = i), Math.atan2(s, t) - Math.atan2(n, o)
                        }
                        mouseMoveToScale(t, i, s) {
                            return i = (t.chartX - i || 1) / (t.prevChartX - i || 1), t = (t.chartY - s || 1) / (t.prevChartY - s || 1), this.chart.inverted && (s = t, t = i, i = s), {
                                x: i,
                                y: t
                            }
                        }
                        mouseMoveToTranslation(t) {
                            let i, s = t.chartX - t.prevChartX;
                            return t = t.chartY - t.prevChartY, this.chart.inverted && (i = t, t = s, s = i), {
                                x: s,
                                y: t
                            }
                        }
                        onDrag(t) {
                            if (this.chart.isInsidePlot(t.chartX - this.chart.plotLeft, t.chartY - this.chart.plotTop, {
                                    visiblePlotOnly: !0
                                })) {
                                const i = this.mouseMoveToTranslation(t);
                                "x" === this.options.draggable && (i.y = 0), "y" === this.options.draggable && (i.x = 0), this.points.length ? this.translate(i.x, i.y) : (this.shapes.forEach((t => t.translate(i.x, i.y))), this.labels.forEach((t => t.translate(i.x, i.y)))), this.redraw(!1)
                            }
                        }
                        onMouseDown(t) {
                            if (t.preventDefault && t.preventDefault(), 2 !== t.button) {
                                var i = this,
                                    a = i.chart.pointer,
                                    h = (t = a.normalize(t)).chartX,
                                    l = t.chartY;
                                i.cancelClick = !1, i.chart.hasDraggedAnnotation = !0, i.removeDrag = o(s, n ? "touchmove" : "mousemove", (function(t) {
                                    i.hasDragged = !0, (t = a.normalize(t)).prevChartX = h, t.prevChartY = l, e(i, "drag", t), h = t.chartX, l = t.chartY
                                }), n ? {
                                    passive: !1
                                } : void 0), i.removeMouseUp = o(s, n ? "touchend" : "mouseup", (function(t) {
                                    const s = r(i.target && i.target.annotation, i.target);
                                    s && (s.cancelClick = i.hasDragged), i.cancelClick = i.hasDragged, i.hasDragged = !1, i.chart.hasDraggedAnnotation = !1, e(r(s, i), "afterUpdate"), i.onMouseUp(t)
                                }), n ? {
                                    passive: !1
                                } : void 0)
                            }
                        }
                        onMouseUp(t) {
                            var i = this.chart;
                            t = this.target || this;
                            const s = i.options.annotations;
                            i = i.annotations.indexOf(t), this.removeDocEvents(), s[i] = t.options
                        }
                        removeDocEvents() {
                            this.removeDrag && (this.removeDrag = this.removeDrag()), this.removeMouseUp && (this.removeMouseUp = this.removeMouseUp())
                        }
                    }
                })), i(t, "Extensions/Annotations/ControlPoint.js", [t["Extensions/Annotations/EventEmitter.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        merge: s,
                        pick: n
                    } = i;
                    return class extends t {
                        constructor(t, i, s, o) {
                            super(), this.graphic = void 0, this.nonDOMEvents = ["drag"], this.chart = t, this.target = i, this.options = s, this.index = n(s.index, o)
                        }
                        destroy() {
                            super.destroy(), this.graphic && (this.graphic = this.graphic.destroy()), this.options = this.target = this.chart = null
                        }
                        redraw(t) {
                            this.graphic[t ? "animate" : "attr"](this.options.positioner.call(this, this.target))
                        }
                        render() {
                            const t = this.chart,
                                i = this.options;
                            this.graphic = t.renderer.symbol(i.symbol, 0, 0, i.width, i.height).add(t.controlPointsGroup).css(i.style), this.setVisibility(i.visible), this.addEvents()
                        }
                        setVisibility(t) {
                            this.graphic[t ? "show" : "hide"](), this.options.visible = t
                        }
                        update(t) {
                            const i = this.chart,
                                n = this.target,
                                o = this.index;
                            t = s(!0, this.options, t), this.destroy(), this.constructor(i, n, t, o), this.render(i.controlPointsGroup), this.redraw()
                        }
                    }
                })), i(t, "Extensions/Annotations/MockPoint.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        series: {
                            prototype: s
                        }
                    } = t, {
                        defined: n,
                        fireEvent: o
                    } = i;
                    class e {
                        static fromPoint(t) {
                            return new e(t.series.chart, null, {
                                x: t.x,
                                y: t.y,
                                xAxis: t.series.xAxis,
                                yAxis: t.series.yAxis
                            })
                        }
                        static pointToPixels(t, i) {
                            const s = t.series,
                                n = s.chart;
                            let o = t.plotX || 0,
                                e = t.plotY || 0;
                            return n.inverted && (t.mock ? (o = t.plotY, e = t.plotX) : (o = n.plotWidth - (t.plotY || 0), e = n.plotHeight - (t.plotX || 0))), s && !i && (o += (t = s.getPlotBox()).translateX, e += t.translateY), {
                                x: o,
                                y: e
                            }
                        }
                        static pointToOptions(t) {
                            return {
                                x: t.x,
                                y: t.y,
                                xAxis: t.series.xAxis,
                                yAxis: t.series.yAxis
                            }
                        }
                        constructor(t, i, n) {
                            this.plotY = this.plotX = void 0, this.mock = !0, this.series = {
                                visible: !0,
                                chart: t,
                                getPlotBox: s.getPlotBox
                            }, this.target = i || null, this.options = n, this.applyOptions(this.getOptions())
                        }
                        applyOptions(t) {
                            this.command = t.command, this.setAxis(t, "x"), this.setAxis(t, "y"), this.refresh()
                        }
                        getLabelConfig() {
                            return {
                                x: this.x,
                                y: this.y,
                                point: this
                            }
                        }
                        getOptions() {
                            return this.hasDynamicOptions() ? this.options(this.target) : this.options
                        }
                        hasDynamicOptions() {
                            return "function" === typeof this.options
                        }
                        isInsidePlot() {
                            const t = this.plotX,
                                i = this.plotY,
                                s = this.series.xAxis,
                                e = this.series.yAxis,
                                a = {
                                    x: t,
                                    y: i,
                                    isInsidePlot: !0,
                                    options: {}
                                };
                            return s && (a.isInsidePlot = n(t) && 0 <= t && t <= s.len), e && (a.isInsidePlot = a.isInsidePlot && n(i) && 0 <= i && i <= e.len), o(this.series.chart, "afterIsInsidePlot", a), a.isInsidePlot
                        }
                        refresh() {
                            var t = this.series;
                            const i = t.xAxis;
                            t = t.yAxis;
                            const s = this.getOptions();
                            i ? (this.x = s.x, this.plotX = i.toPixels(s.x, !0)) : (this.x = void 0, this.plotX = s.x), t ? (this.y = s.y, this.plotY = t.toPixels(s.y, !0)) : (this.y = null, this.plotY = s.y), this.isInside = this.isInsidePlot()
                        }
                        refreshOptions() {
                            var t = this.series;
                            const i = t.xAxis;
                            t = t.yAxis, this.x = this.options.x = i ? this.options.x = i.toValue(this.plotX, !0) : this.plotX, this.y = this.options.y = t ? t.toValue(this.plotY, !0) : this.plotY
                        }
                        rotate(t, i, s) {
                            if (!this.hasDynamicOptions()) {
                                const n = Math.cos(s);
                                s = Math.sin(s);
                                const o = this.plotX - t,
                                    e = this.plotY - i,
                                    a = o * s + e * n;
                                this.plotX = o * n - e * s + t, this.plotY = a + i, this.refreshOptions()
                            }
                        }
                        scale(t, i, s, n) {
                            if (!this.hasDynamicOptions()) {
                                const o = this.plotY * n;
                                this.plotX = (1 - s) * t + this.plotX * s, this.plotY = (1 - n) * i + o, this.refreshOptions()
                            }
                        }
                        setAxis(t, i) {
                            t = t[i += "Axis"];
                            const s = this.series.chart;
                            this.series[i] = "object" === typeof t ? t : n(t) ? s[i][t] || s.get(t) : null
                        }
                        toAnchor() {
                            const t = [this.plotX, this.plotY, 0, 0];
                            return this.series.chart.inverted && (t[0] = this.plotY, t[1] = this.plotX), t
                        }
                        translate(t, i, s, n) {
                            this.hasDynamicOptions() || (this.plotX += s, this.plotY += n, this.refreshOptions())
                        }
                    }
                    return e
                })), i(t, "Extensions/Annotations/ControlTarget.js", [t["Extensions/Annotations/ControlPoint.js"], t["Extensions/Annotations/MockPoint.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    var n;
                    return function(n) {
                        function o() {
                            const i = this.controlPoints,
                                n = this.options.controlPoints || [];
                            n.forEach(((o, e) => {
                                (o = s.merge(this.options.controlPointOptions, o)).index || (o.index = e), n[e] = o, i.push(new t(this.chart, this, o))
                            }))
                        }

                        function e(t) {
                            const i = t.series.getPlotBox(),
                                n = t.series.chart;
                            var o = t.mock ? t.toAnchor() : n.tooltip && n.tooltip.getAnchor.call({
                                chart: t.series.chart
                            }, t) || [0, 0, 0, 0];
                            return {
                                relativePosition: o = {
                                    x: o[0] + (this.options.x || 0),
                                    y: o[1] + (this.options.y || 0),
                                    height: o[2] || 0,
                                    width: o[3] || 0
                                },
                                absolutePosition: s.merge(o, {
                                    x: o.x + (t.mock ? i.translateX : n.plotLeft),
                                    y: o.y + (t.mock ? i.translateY : n.plotTop)
                                })
                            }
                        }

                        function a() {
                            this.controlPoints.forEach((t => t.destroy())), this.options = this.points = this.controlPoints = this.chart = null, this.annotation && (this.annotation = null)
                        }

                        function r() {
                            const t = this.options;
                            return t.points || t.point && s.splat(t.point)
                        }

                        function h() {
                            const t = this.getPointsOptions(),
                                i = this.points,
                                s = t && t.length || 0;
                            let n, o;
                            for (n = 0; n < s; n++) {
                                if (o = this.point(t[n], i[n]), !o) return void(i.length = 0);
                                o.mock && o.refresh(), i[n] = o
                            }
                            return i
                        }

                        function l(t, n) {
                            return t && t.series ? t : (n && null !== n.series || (s.isObject(t) ? n = new i(this.chart, this, t) : s.isString(t) ? n = this.chart.get(t) || null : "function" === typeof t && (n = (n = t.call(n, this)).series ? n : new i(this.chart, this, t))), n)
                        }

                        function c(t) {
                            this.controlPoints.forEach((i => i.redraw(t)))
                        }

                        function p() {
                            this.controlPoints.forEach((t => t.render()))
                        }

                        function d(t, i, s, n, o) {
                            if (this.chart.inverted) {
                                const t = i;
                                i = s, s = t
                            }
                            this.points.forEach(((e, a) => this.transformPoint(t, i, s, n, o, a)), this)
                        }

                        function u(t, s, n, o, e, a) {
                            let r = this.points[a];
                            r.mock || (r = this.points[a] = i.fromPoint(r)), r[t](s, n, o, e)
                        }

                        function g(t, i) {
                            this.transform("translate", null, null, t, i)
                        }

                        function f(t, i, s) {
                            this.transformPoint("translate", null, null, t, i, s)
                        }
                        const m = [];
                        n.compose = function(t) {
                            s.pushUnique(m, t) && s.merge(!0, t.prototype, {
                                addControlPoints: o,
                                anchor: e,
                                destroyControlTarget: a,
                                getPointsOptions: r,
                                linkPoints: h,
                                point: l,
                                redrawControlPoints: c,
                                renderControlPoints: p,
                                transform: d,
                                transformPoint: u,
                                translate: g,
                                translatePoint: f
                            })
                        }
                    }(n || (n = {})), n
                })), i(t, "Extensions/Annotations/Controllables/Controllable.js", [t["Extensions/Annotations/ControlTarget.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        merge: s
                    } = i;
                    class n {
                        constructor(t, i, s, n) {
                            this.graphic = void 0, this.annotation = t, this.chart = t.chart, this.collection = "label" === n ? "labels" : "shapes", this.controlPoints = [], this.options = i, this.points = [], this.index = s, this.itemType = n, this.init(t, i, s)
                        }
                        attr(...t) {
                            this.graphic.attr.apply(this.graphic, arguments)
                        }
                        attrsFromOptions(t) {
                            const i = this.constructor.attrsMap,
                                s = {},
                                n = this.chart.styledMode;
                            let o, e;
                            for (o in t) e = i[o], "undefined" === typeof i[o] || n && -1 !== ["fill", "stroke", "stroke-width"].indexOf(e) || (s[e] = t[o]);
                            return s
                        }
                        destroy() {
                            this.graphic && (this.graphic = this.graphic.destroy()), this.tracker && (this.tracker = this.tracker.destroy()), this.destroyControlTarget()
                        }
                        init(t, i, s) {
                            this.annotation = t, this.chart = t.chart, this.options = i, this.points = [], this.controlPoints = [], this.index = s, this.linkPoints(), this.addControlPoints()
                        }
                        redraw(t) {
                            this.redrawControlPoints(t)
                        }
                        render(t) {
                            this.renderControlPoints()
                        }
                        rotate(t, i, s) {
                            this.transform("rotate", t, i, s)
                        }
                        scale(t, i, s, n) {
                            this.transform("scale", t, i, s, n)
                        }
                        setControlPointsVisibility(t) {
                            this.controlPoints.forEach((i => {
                                i.setVisibility(t)
                            }))
                        }
                        shouldBeDrawn() {
                            return !!this.points.length
                        }
                        translateShape(t, i, s) {
                            var n = this.annotation.chart;
                            const o = this.annotation.userOptions,
                                e = n.annotations.indexOf(this.annotation);
                            n = n.options.annotations[e], this.translatePoint(t, i, 0), s && this.translatePoint(t, i, 1), n[this.collection][this.index].point = this.options.point, o[this.collection][this.index].point = this.options.point
                        }
                        update(t) {
                            var i = this.annotation;
                            const n = s(!0, this.options, t);
                            t = this.graphic.parentGroup;
                            const o = this.constructor;
                            this.destroy(), i = new o(i, n, this.index, this.itemType), s(!0, this, i), this.render(t), this.redraw()
                        }
                    }
                    return t.compose(n), n
                })), i(t, "Extensions/Annotations/Controllables/ControllableDefaults.js", [], (function() {
                    return {
                        defaultMarkers: {
                            arrow: {
                                tagName: "marker",
                                attributes: {
                                    id: "arrow",
                                    refY: 5,
                                    refX: 9,
                                    markerWidth: 10,
                                    markerHeight: 10
                                },
                                children: [{
                                    tagName: "path",
                                    attributes: {
                                        d: "M 0 0 L 10 5 L 0 10 Z",
                                        "stroke-width": 0
                                    }
                                }]
                            },
                            "reverse-arrow": {
                                tagName: "marker",
                                attributes: {
                                    id: "reverse-arrow",
                                    refY: 5,
                                    refX: 1,
                                    markerWidth: 10,
                                    markerHeight: 10
                                },
                                children: [{
                                    tagName: "path",
                                    attributes: {
                                        d: "M 0 5 L 10 0 L 10 10 Z",
                                        "stroke-width": 0
                                    }
                                }]
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/Controllables/ControllablePath.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllableDefaults.js"], t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i, s, n) {
                    function o(t) {
                        return function(i) {
                            this.attr(t, "url(#" + i + ")")
                        }
                    }

                    function e() {
                        this.options.defs = p(r, this.options.defs || {})
                    }

                    function a(t, i) {
                        const s = {
                                attributes: {
                                    id: t
                                }
                            },
                            n = {
                                stroke: i.color || "none",
                                fill: i.color || "rgba(0, 0, 0, 0.75)"
                            };
                        return s.children = i.children && i.children.map((function(t) {
                            return p(n, t)
                        })), i = p(!0, {
                            attributes: {
                                markerWidth: 20,
                                markerHeight: 20,
                                refX: 0,
                                refY: 0,
                                orient: "auto"
                            }
                        }, i, s), (i = this.definition(i)).id = t, i
                    }
                    const {
                        defaultMarkers: r
                    } = i, {
                        addEvent: h,
                        defined: l,
                        extend: c,
                        merge: p,
                        uniqueKey: d
                    } = n, u = [], g = o("marker-end"), f = o("marker-start"), m = "rgba(192,192,192," + (s.svg ? 1e-4 : .002) + ")";
                    class x extends t {
                        static compose(t, i) {
                            n.pushUnique(u, t) && h(t, "afterGetContainer", e), n.pushUnique(u, i) && (i.prototype.addMarker = a)
                        }
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "path"
                        }
                        toD() {
                            var t = this.options.d;
                            if (t) return "function" === typeof t ? t.call(this) : t;
                            const i = (t = this.points).length,
                                s = [];
                            var n = i;
                            let o = t[0],
                                e = n && this.anchor(o).absolutePosition,
                                a = 0;
                            if (e)
                                for (s.push(["M", e.x, e.y]); ++a < i && n;) o = t[a], n = o.command || "L", e = this.anchor(o).absolutePosition, "M" === n || "L" === n ? s.push([n, e.x, e.y]) : "Z" === n && s.push([n]), n = o.series.visible;
                            return n && this.graphic ? this.chart.renderer.crispLine(s, this.graphic.strokeWidth()) : null
                        }
                        shouldBeDrawn() {
                            return super.shouldBeDrawn() || !!this.options.d
                        }
                        render(t) {
                            const i = this.options,
                                s = this.attrsFromOptions(i);
                            this.graphic = this.annotation.chart.renderer.path([
                                ["M", 0, 0]
                            ]).attr(s).add(t), i.className && this.graphic.addClass(i.className), this.tracker = this.annotation.chart.renderer.path([
                                ["M", 0, 0]
                            ]).addClass("highcharts-tracker-line").attr({
                                zIndex: 2
                            }).add(t), this.annotation.chart.styledMode || this.tracker.attr({
                                "stroke-linejoin": "round",
                                stroke: m,
                                fill: m,
                                "stroke-width": this.graphic.strokeWidth() + 2 * i.snap
                            }), super.render(), c(this.graphic, {
                                markerStartSetter: f,
                                markerEndSetter: g
                            }), this.setMarkers(this)
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.toD(),
                                    s = t ? "animate" : "attr";
                                i ? (this.graphic[s]({
                                    d: i
                                }), this.tracker[s]({
                                    d: i
                                })) : (this.graphic.attr({
                                    d: "M 0 -9000000000"
                                }), this.tracker.attr({
                                    d: "M 0 -9000000000"
                                })), this.graphic.placed = this.tracker.placed = !!i
                            }
                            super.redraw(t)
                        }
                        setMarkers(t) {
                            const i = t.options,
                                s = t.chart,
                                n = s.options.defs,
                                o = i.fill,
                                e = l(o) && "none" !== o ? o : i.stroke;
                            ["markerStart", "markerEnd"].forEach((function(o) {
                                var a = i[o];
                                let r, h, l;
                                if (a) {
                                    for (l in n)
                                        if (r = n[l], (a === (r.attributes && r.attributes.id) || a === r.id) && "marker" === r.tagName) {
                                            h = r;
                                            break
                                        }
                                    h && (a = t[o] = s.renderer.addMarker((i.id || d()) + "-" + a, p(h, {
                                        color: e
                                    })), t.attr(o, a.getAttribute("id")))
                                }
                            }))
                        }
                    }
                    return x.attrsMap = {
                        dashStyle: "dashstyle",
                        strokeWidth: "stroke-width",
                        stroke: "stroke",
                        fill: "fill",
                        zIndex: "zIndex"
                    }, x
                })), i(t, "Extensions/Annotations/Controllables/ControllableRect.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    ({
                        merge: s
                    } = s);
                    class n extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "rect", this.translate = super.translateShape
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options);
                            this.graphic = this.annotation.chart.renderer.rect(0, -9e9, 0, 0).attr(i).add(t), super.render()
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.anchor(this.points[0]).absolutePosition;
                                i ? this.graphic[t ? "animate" : "attr"]({
                                    x: i.x,
                                    y: i.y,
                                    width: this.options.width,
                                    height: this.options.height
                                }) : this.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!i
                            }
                            super.redraw(t)
                        }
                    }
                    return n.attrsMap = s(i.attrsMap, {
                        width: "width",
                        height: "height"
                    }), n
                })), i(t, "Extensions/Annotations/Controllables/ControllableCircle.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    ({
                        merge: s
                    } = s);
                    class n extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "circle", this.translate = super.translateShape
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.anchor(this.points[0]).absolutePosition;
                                i ? this.graphic[t ? "animate" : "attr"]({
                                    x: i.x,
                                    y: i.y,
                                    r: this.options.r
                                }) : this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!i
                            }
                            super.redraw.call(this, t)
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options);
                            this.graphic = this.annotation.chart.renderer.circle(0, -9e9, 0).attr(i).add(t), super.render()
                        }
                        setRadius(t) {
                            this.options.r = t
                        }
                    }
                    return n.attrsMap = s(i.attrsMap, {
                        r: "r"
                    }), n
                })), i(t, "Extensions/Annotations/Controllables/ControllableEllipse.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    const {
                        merge: n,
                        defined: o
                    } = s;
                    class e extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "ellipse"
                        }
                        init(t, i, s) {
                            o(i.yAxis) && i.points.forEach((t => {
                                t.yAxis = i.yAxis
                            })), o(i.xAxis) && i.points.forEach((t => {
                                t.xAxis = i.xAxis
                            })), super.init(t, i, s)
                        }
                        render(t) {
                            this.graphic = this.annotation.chart.renderer.createElement("ellipse").attr(this.attrsFromOptions(this.options)).add(t), super.render()
                        }
                        translate(t, i) {
                            super.translateShape(t, i, !0)
                        }
                        getDistanceFromLine(t, i, s, n) {
                            return Math.abs((i.y - t.y) * s - (i.x - t.x) * n + i.x * t.y - i.y * t.x) / Math.sqrt((i.y - t.y) * (i.y - t.y) + (i.x - t.x) * (i.x - t.x))
                        }
                        getAttrs(t, i) {
                            var s = t.x,
                                n = t.y;
                            const o = i.x,
                                e = i.y;
                            i = (s + o) / 2, t = (n + e) / 2;
                            const a = Math.sqrt((s - o) * (s - o) / 4 + (n - e) * (n - e) / 4);
                            return n = 180 * Math.atan((e - n) / (o - s)) / Math.PI, i < s && (n += 180), {
                                cx: i,
                                cy: t,
                                rx: a,
                                ry: s = this.getRY(),
                                angle: n
                            }
                        }
                        getRY() {
                            const t = this.getYAxis();
                            return o(t) ? Math.abs(t.toPixels(this.options.ry) - t.toPixels(0)) : this.options.ry
                        }
                        getYAxis() {
                            return this.chart.yAxis[this.options.yAxis]
                        }
                        getAbsolutePosition(t) {
                            return this.anchor(t).absolutePosition
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const s = this.getAbsolutePosition(this.points[0]);
                                var i = this.getAbsolutePosition(this.points[1]);
                                i = this.getAttrs(s, i), s ? this.graphic[t ? "animate" : "attr"]({
                                    cx: i.cx,
                                    cy: i.cy,
                                    rx: i.rx,
                                    ry: i.ry,
                                    rotation: i.angle,
                                    rotationOriginX: i.cx,
                                    rotationOriginY: i.cy
                                }) : this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!s
                            }
                            super.redraw(t)
                        }
                        setYRadius(t) {
                            const i = this.annotation.userOptions.shapes;
                            this.options.ry = t, i && i[0] && (i[0].ry = t, i[0].ry = t)
                        }
                    }
                    return e.attrsMap = n(i.attrsMap, {
                        ry: "ry"
                    }), e
                })), i(t, "Extensions/Annotations/Controllables/ControllableLabel.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Core/Templating.js"], t["Extensions/Annotations/MockPoint.js"], t["Core/Utilities.js"]], (function(t, i, s, n) {
                    function o(t, i, s, n, o) {
                        const e = o && o.anchorX;
                        o = o && o.anchorY;
                        let a, h, l = s / 2;
                        return r(e) && r(o) && (a = [
                            ["M", e, o]
                        ], h = i - o, 0 > h && (h = -n - h), h < s && (l = e < t + s / 2 ? h : s - h), o > i + n ? a.push(["L", t + l, i + n]) : o < i ? a.push(["L", t + l, i]) : e < t ? a.push(["L", t, i + n / 2]) : e > t + s && a.push(["L", t + s, i + n / 2])), a || []
                    }
                    const {
                        format: e
                    } = i, {
                        extend: a,
                        isNumber: r,
                        pick: h
                    } = n, l = [];
                    class c extends t {
                        static alignedPosition(t, i) {
                            const s = t.align,
                                n = t.verticalAlign;
                            let o, e, a = (i.x || 0) + (t.x || 0),
                                r = (i.y || 0) + (t.y || 0);
                            return "right" === s ? o = 1 : "center" === s && (o = 2), o && (a += (i.width - (t.width || 0)) / o), "bottom" === n ? e = 1 : "middle" === n && (e = 2), e && (r += (i.height - (t.height || 0)) / e), {
                                x: Math.round(a),
                                y: Math.round(r)
                            }
                        }
                        static compose(t) {
                            n.pushUnique(l, t) && (t.prototype.symbols.connector = o)
                        }
                        static justifiedOptions(t, i, s, n) {
                            const o = s.align,
                                e = s.verticalAlign,
                                a = i.box ? 0 : i.padding || 0,
                                r = i.getBBox();
                            let h;
                            return i = {
                                align: o,
                                verticalAlign: e,
                                x: s.x,
                                y: s.y,
                                width: i.width,
                                height: i.height
                            }, s = (n.x || 0) - t.plotLeft, n = (n.y || 0) - t.plotTop, h = s + a, 0 > h && ("right" === o ? i.align = "left" : i.x = (i.x || 0) - h), h = s + r.width - a, h > t.plotWidth && ("left" === o ? i.align = "right" : i.x = (i.x || 0) + t.plotWidth - h), h = n + a, 0 > h && ("bottom" === e ? i.verticalAlign = "top" : i.y = (i.y || 0) - h), h = n + r.height - a, h > t.plotHeight && ("top" === e ? i.verticalAlign = "bottom" : i.y = (i.y || 0) + t.plotHeight - h), i
                        }
                        constructor(t, i, s) {
                            super(t, i, s, "label")
                        }
                        translatePoint(t, i) {
                            super.translatePoint(t, i, 0)
                        }
                        translate(t, i) {
                            var s = this.annotation.chart;
                            const n = this.annotation.userOptions;
                            var o = s.annotations.indexOf(this.annotation);
                            o = s.options.annotations[o], s.inverted && (s = t, t = i, i = s), this.options.x += t, this.options.y += i, o[this.collection][this.index].x = this.options.x, o[this.collection][this.index].y = this.options.y, n[this.collection][this.index].x = this.options.x, n[this.collection][this.index].y = this.options.y
                        }
                        render(t) {
                            const i = this.options,
                                s = this.attrsFromOptions(i),
                                n = i.style;
                            this.graphic = this.annotation.chart.renderer.label("", 0, -9999, i.shape, null, null, i.useHTML, null, "annotation-label").attr(s).add(t), this.annotation.chart.styledMode || ("contrast" === n.color && (n.color = this.annotation.chart.renderer.getContrast(-1 < c.shapesWithoutBackground.indexOf(i.shape) ? "#FFFFFF" : i.backgroundColor)), this.graphic.css(i.style).shadow(i.shadow)), i.className && this.graphic.addClass(i.className), this.graphic.labelrank = i.labelrank, super.render()
                        }
                        redraw(t) {
                            var i = this.options,
                                s = this.text || i.format || i.text;
                            const n = this.graphic,
                                o = this.points[0];
                            n ? (n.attr({
                                text: s ? e(String(s), o.getLabelConfig(), this.annotation.chart) : i.formatter.call(o, this)
                            }), i = this.anchor(o), (s = this.position(i)) ? (n.alignAttr = s, s.anchorX = i.absolutePosition.x, s.anchorY = i.absolutePosition.y, n[t ? "animate" : "attr"](s)) : n.attr({
                                x: 0,
                                y: -9999
                            }), n.placed = !!s, super.redraw(t)) : this.redraw(t)
                        }
                        anchor(t) {
                            const i = super.anchor.apply(this, arguments),
                                s = this.options.x || 0,
                                n = this.options.y || 0;
                            return i.absolutePosition.x -= s, i.absolutePosition.y -= n, i.relativePosition.x -= s, i.relativePosition.y -= n, i
                        }
                        position(t) {
                            var i = this.graphic;
                            const n = this.annotation.chart;
                            var o = n.tooltip;
                            const e = this.points[0];
                            var r = this.options;
                            const l = t.absolutePosition,
                                p = t.relativePosition;
                            let d;
                            if (t = e.series.visible && s.prototype.isInsidePlot.call(e), i && t) {
                                const {
                                    width: s = 0,
                                    height: u = 0
                                } = i;
                                r.distance && o ? d = o.getPosition.call({
                                    chart: n,
                                    distance: h(r.distance, 16),
                                    getPlayingField: o.getPlayingField
                                }, s, u, {
                                    plotX: p.x,
                                    plotY: p.y,
                                    negative: e.negative,
                                    ttBelow: e.ttBelow,
                                    h: p.height || p.width
                                }) : r.positioner ? d = r.positioner.call(this) : (o = {
                                    x: l.x,
                                    y: l.y,
                                    width: 0,
                                    height: 0
                                }, d = c.alignedPosition(a(r, {
                                    width: s,
                                    height: u
                                }), o), "justify" === this.options.overflow && (d = c.alignedPosition(c.justifiedOptions(n, i, r, d), o))), r.crop && (i = d.x - n.plotLeft, r = d.y - n.plotTop, t = n.isInsidePlot(i, r) && n.isInsidePlot(i + s, r + u))
                            }
                            return t ? d : null
                        }
                    }
                    return c.attrsMap = {
                        backgroundColor: "fill",
                        borderColor: "stroke",
                        borderWidth: "stroke-width",
                        zIndex: "zIndex",
                        borderRadius: "r",
                        padding: "padding"
                    }, c.shapesWithoutBackground = ["connector"], c
                })), i(t, "Extensions/Annotations/Controllables/ControllableImage.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllableLabel.js"]], (function(t, i) {
                    class s extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "image", this.translate = super.translateShape
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options),
                                s = this.options;
                            this.graphic = this.annotation.chart.renderer.image(s.src, 0, -9e9, s.width, s.height).attr(i).add(t), this.graphic.width = s.width, this.graphic.height = s.height, super.render()
                        }
                        redraw(t) {
                            if (this.graphic) {
                                var s = this.anchor(this.points[0]);
                                (s = i.prototype.position.call(this, s)) ? this.graphic[t ? "animate" : "attr"]({
                                    x: s.x,
                                    y: s.y
                                }): this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!s
                            }
                            super.redraw(t)
                        }
                    }
                    return s.attrsMap = {
                        width: "width",
                        height: "height",
                        zIndex: "zIndex"
                    }, s
                })), i(t, "Core/Chart/ChartNavigationComposition.js", [], (function() {
                    var t;
                    return function(t) {
                        t.compose = function(t) {
                            return t.navigation || (t.navigation = new i(t)), t
                        };
                        class i {
                            constructor(t) {
                                this.updates = [], this.chart = t
                            }
                            addUpdate(t) {
                                this.chart.navigation.updates.push(t)
                            }
                            update(t, i) {
                                this.updates.forEach((s => {
                                    s.call(this.chart, t, i)
                                }))
                            }
                        }
                        t.Additions = i
                    }(t || (t = {})), t
                })), i(t, "Extensions/Annotations/NavigationBindingsUtilities.js", [t["Core/Utilities.js"]], (function(t) {
                    const {
                        defined: i,
                        isNumber: s,
                        pick: n
                    } = t, o = {
                        backgroundColor: "string",
                        borderColor: "string",
                        borderRadius: "string",
                        color: "string",
                        fill: "string",
                        fontSize: "string",
                        labels: "string",
                        name: "string",
                        stroke: "string",
                        title: "string"
                    };
                    return {
                        annotationsFieldsTypes: o,
                        getAssignedAxis: function(t) {
                            return t.filter((t => {
                                var i = t.axis.getExtremes();
                                const o = i.min;
                                i = i.max;
                                const e = n(t.axis.minPointOffset, 0);
                                return s(o) && s(i) && t.value >= o - e && t.value <= i + e && !t.axis.options.isInternal
                            }))[0]
                        },
                        getFieldType: function(t, s) {
                            return s = typeof s, i(t = o[t]) && (s = t), {
                                string: "text",
                                number: "number",
                                boolean: "checkbox"
                            }[s]
                        }
                    }
                })), i(t, "Extensions/Annotations/NavigationBindingsDefaults.js", [t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        getAssignedAxis: s
                    } = t, {
                        isNumber: n,
                        merge: o
                    } = i;
                    return {
                        lang: {
                            navigation: {
                                popup: {
                                    simpleShapes: "Simple shapes",
                                    lines: "Lines",
                                    circle: "Circle",
                                    ellipse: "Ellipse",
                                    rectangle: "Rectangle",
                                    label: "Label",
                                    shapeOptions: "Shape options",
                                    typeOptions: "Details",
                                    fill: "Fill",
                                    format: "Text",
                                    strokeWidth: "Line width",
                                    stroke: "Line color",
                                    title: "Title",
                                    name: "Name",
                                    labelOptions: "Label options",
                                    labels: "Labels",
                                    backgroundColor: "Background color",
                                    backgroundColors: "Background colors",
                                    borderColor: "Border color",
                                    borderRadius: "Border radius",
                                    borderWidth: "Border width",
                                    style: "Style",
                                    padding: "Padding",
                                    fontSize: "Font size",
                                    color: "Color",
                                    height: "Height",
                                    shapes: "Shape options"
                                }
                            }
                        },
                        navigation: {
                            bindingsClassName: "highcharts-bindings-container",
                            bindings: {
                                circleAnnotation: {
                                    className: "highcharts-circle-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const n = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(o({
                                            langKey: "circle",
                                            type: "basicAnnotation",
                                            shapes: [{
                                                type: "circle",
                                                point: {
                                                    x: t.value,
                                                    y: i.value,
                                                    xAxis: t.axis.index,
                                                    yAxis: i.axis.index
                                                },
                                                r: 5
                                            }]
                                        }, n.annotationsOptions, n.bindings.circleAnnotation.annotationsOptions))
                                    },
                                    steps: [function(t, i) {
                                        var s = i.options.shapes;
                                        if (s = s && s[0] && s[0].point || {}, n(s.xAxis) && n(s.yAxis)) {
                                            var o = this.chart.inverted;
                                            const i = this.chart.xAxis[s.xAxis].toPixels(s.x);
                                            s = this.chart.yAxis[s.yAxis].toPixels(s.y), o = Math.max(Math.sqrt(Math.pow(o ? s - t.chartX : i - t.chartX, 2) + Math.pow(o ? i - t.chartY : s - t.chartY, 2)), 5)
                                        }
                                        i.update({
                                            shapes: [{
                                                r: o
                                            }]
                                        })
                                    }]
                                },
                                ellipseAnnotation: {
                                    className: "highcharts-ellipse-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const n = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(o({
                                            langKey: "ellipse",
                                            type: "basicAnnotation",
                                            shapes: [{
                                                type: "ellipse",
                                                xAxis: t.axis.index,
                                                yAxis: i.axis.index,
                                                points: [{
                                                    x: t.value,
                                                    y: i.value
                                                }, {
                                                    x: t.value,
                                                    y: i.value
                                                }],
                                                ry: 1
                                            }]
                                        }, n.annotationsOptions, n.bindings.ellipseAnnotation.annotationOptions))
                                    },
                                    steps: [function(t, i) {
                                        const s = (i = i.shapes[0]).getAbsolutePosition(i.points[1]);
                                        i.translatePoint(t.chartX - s.x, t.chartY - s.y, 1), i.redraw(!1)
                                    }, function(t, i) {
                                        var s = (i = i.shapes[0]).getAbsolutePosition(i.points[0]);
                                        const n = i.getAbsolutePosition(i.points[1]);
                                        t = i.getDistanceFromLine(s, n, t.chartX, t.chartY), s = i.getYAxis(), t = Math.abs(s.toValue(0) - s.toValue(t)), i.setYRadius(t), i.redraw(!1)
                                    }]
                                },
                                rectangleAnnotation: {
                                    className: "highcharts-rectangle-annotation",
                                    start: function(t) {
                                        t = this.chart.pointer.getCoordinates(t);
                                        var i = s(t.xAxis),
                                            n = s(t.yAxis);
                                        if (i && n) {
                                            t = i.value;
                                            var e = n.value;
                                            i = i.axis.index, n = n.axis.index;
                                            var a = this.chart.options.navigation;
                                            return this.chart.addAnnotation(o({
                                                langKey: "rectangle",
                                                type: "basicAnnotation",
                                                shapes: [{
                                                    type: "path",
                                                    points: [{
                                                        xAxis: i,
                                                        yAxis: n,
                                                        x: t,
                                                        y: e
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: n,
                                                        x: t,
                                                        y: e
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: n,
                                                        x: t,
                                                        y: e
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: n,
                                                        x: t,
                                                        y: e
                                                    }, {
                                                        command: "Z"
                                                    }]
                                                }]
                                            }, a.annotationsOptions, a.bindings.rectangleAnnotation.annotationsOptions))
                                        }
                                    },
                                    steps: [function(t, i) {
                                        var n = i.options.shapes;
                                        n = n && n[0] && n[0].points || [];
                                        var o = this.chart.pointer.getCoordinates(t);
                                        t = s(o.xAxis), o = s(o.yAxis), t && o && (t = t.value, o = o.value, n[1].x = t, n[2].x = t, n[2].y = o, n[3].y = o, i.update({
                                            shapes: [{
                                                points: n
                                            }]
                                        }))
                                    }]
                                },
                                labelAnnotation: {
                                    className: "highcharts-label-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const n = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(o({
                                            langKey: "label",
                                            type: "basicAnnotation",
                                            labelOptions: {
                                                format: "{y:.2f}"
                                            },
                                            labels: [{
                                                point: {
                                                    xAxis: t.axis.index,
                                                    yAxis: i.axis.index,
                                                    x: t.value,
                                                    y: i.value
                                                },
                                                overflow: "none",
                                                crop: !0
                                            }]
                                        }, n.annotationsOptions, n.bindings.labelAnnotation.annotationsOptions))
                                    }
                                }
                            },
                            events: {},
                            annotationsOptions: {
                                animation: {
                                    defer: 0
                                }
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/NavigationBindings.js", [t["Core/Chart/ChartNavigationComposition.js"], t["Core/Defaults.js"], t["Core/Templating.js"], t["Core/Globals.js"], t["Extensions/Annotations/NavigationBindingsDefaults.js"], t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Utilities.js"]], (function(t, i, s, n, o, e, a) {
                    function r() {
                        this.chart.navigationBindings && this.chart.navigationBindings.deselectAnnotation()
                    }

                    function h() {
                        this.navigationBindings && this.navigationBindings.destroy()
                    }

                    function l() {
                        const t = this.options;
                        t && t.navigation && t.navigation.bindings && (this.navigationBindings = new N(this, t.navigation), this.navigationBindings.initEvents(), this.navigationBindings.initUpdate())
                    }

                    function c() {
                        const t = this.navigationBindings;
                        if (this && t) {
                            let i = !1;
                            if (this.series.forEach((t => {
                                    !t.options.isInternal && t.visible && (i = !0)
                                })), this.navigationBindings && this.navigationBindings.container && this.navigationBindings.container[0]) {
                                const s = this.navigationBindings.container[0];
                                j(t.boundClassNames, ((t, n) => {
                                    if (n = s.querySelectorAll("." + n))
                                        for (let s = 0; s < n.length; s++) {
                                            const o = n[s],
                                                e = o.className;
                                            "normal" === t.noDataState || i ? -1 !== e.indexOf("highcharts-disabled-btn") && o.classList.remove("highcharts-disabled-btn") : -1 === e.indexOf("highcharts-disabled-btn") && (o.className += " highcharts-disabled-btn")
                                        }
                                }))
                            }
                        }
                    }

                    function p() {
                        this.deselectAnnotation()
                    }

                    function d() {
                        this.selectedButtonElement = null
                    }

                    function u(t) {
                        function i(t) {
                            const i = this,
                                n = i.chart.navigationBindings,
                                o = n.activeAnnotation;
                            s && s.call(i, t), o !== i ? (n.deselectAnnotation(), n.activeAnnotation = i, i.setControlPointsVisibility(!0), A(n, "showPopup", {
                                annotation: i,
                                formType: "annotation-toolbar",
                                options: n.annotationToFields(i),
                                onSubmit: function(t) {
                                    if ("remove" === t.actionType) n.activeAnnotation = !1, n.chart.removeAnnotation(i);
                                    else {
                                        const s = {};
                                        n.fieldsToOptions(t.fields, s), n.deselectAnnotation(), t = s.typeOptions, "measure" === i.options.type && (t.crosshairY.enabled = 0 !== t.crosshairY.strokeWidth, t.crosshairX.enabled = 0 !== t.crosshairX.strokeWidth), i.update(s)
                                    }
                                }
                            })) : A(n, "closePopup"), t.activeAnnotation = !0
                        }
                        const s = t.prototype.defaultOptions.events && t.prototype.defaultOptions.events.click;
                        let n, o;
                        P(!0, t.prototype.defaultOptions.events, {
                            click: i,
                            touchstart: function(t) {
                                n = t.touches[0].clientX, o = t.touches[0].clientY
                            },
                            touchend: function(t) {
                                n && 4 <= Math.sqrt(Math.pow(n - t.changedTouches[0].clientX, 2) + Math.pow(o - t.changedTouches[0].clientY, 2)) || i.call(this, t)
                            }
                        })
                    }
                    const {
                        setOptions: g
                    } = i, {
                        format: f
                    } = s, {
                        doc: m,
                        win: x
                    } = n, {
                        getFieldType: v
                    } = e, {
                        addEvent: y,
                        attr: b,
                        fireEvent: A,
                        isArray: C,
                        isFunction: E,
                        isNumber: k,
                        isObject: w,
                        merge: P,
                        objectEach: j,
                        pick: O
                    } = a, B = [];
                    class N {
                        static compose(t, i) {
                            a.pushUnique(B, t) && (y(t, "remove", r), u(t), j(t.types, (t => {
                                u(t)
                            }))), a.pushUnique(B, i) && (y(i, "destroy", h), y(i, "load", l), y(i, "render", c)), a.pushUnique(B, N) && (y(N, "closePopup", p), y(N, "deselectButton", d)), a.pushUnique(B, g) && g(o)
                        }
                        constructor(t, i) {
                            this.selectedButton = this.boundClassNames = void 0, this.chart = t, this.options = i, this.eventsToUnbind = [], this.container = this.chart.container.getElementsByClassName(this.options.bindingsClassName || ""), this.container.length || (this.container = m.getElementsByClassName(this.options.bindingsClassName || ""))
                        }
                        initEvents() {
                            const t = this,
                                i = t.chart,
                                s = t.container,
                                o = t.options;
                            t.boundClassNames = {}, j(o.bindings || {}, (i => {
                                t.boundClassNames[i.className] = i
                            })), [].forEach.call(s, (i => {
                                t.eventsToUnbind.push(y(i, "click", (s => {
                                    const n = t.getButtonEvents(i, s);
                                    n && !n.button.classList.contains("highcharts-disabled-btn") && t.bindingsButtonClick(n.button, n.events, s)
                                })))
                            })), j(o.events || {}, ((i, s) => {
                                E(i) && t.eventsToUnbind.push(y(t, s, i, {
                                    passive: !1
                                }))
                            })), t.eventsToUnbind.push(y(i.container, "click", (function(s) {
                                !i.cancelClick && i.isInsidePlot(s.chartX - i.plotLeft, s.chartY - i.plotTop, {
                                    visiblePlotOnly: !0
                                }) && t.bindingsChartClick(this, s)
                            }))), t.eventsToUnbind.push(y(i.container, n.isTouchDevice ? "touchmove" : "mousemove", (function(i) {
                                t.bindingsContainerMouseMove(this, i)
                            }), n.isTouchDevice ? {
                                passive: !1
                            } : void 0))
                        }
                        initUpdate() {
                            const i = this;
                            t.compose(this.chart).navigation.addUpdate((t => {
                                i.update(t)
                            }))
                        }
                        bindingsButtonClick(t, i, s) {
                            const n = this.chart,
                                o = n.renderer.boxWrapper;
                            let e = !0;
                            this.selectedButtonElement && (this.selectedButtonElement.classList === t.classList && (e = !1), A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), this.nextEvent && (this.currentUserDetails && "annotations" === this.currentUserDetails.coll && n.removeAnnotation(this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1)), e ? (this.selectedButton = i, this.selectedButtonElement = t, A(this, "selectButton", {
                                button: t
                            }), i.init && i.init.call(this, t, s), (i.start || i.steps) && n.renderer.boxWrapper.addClass("highcharts-draw-mode")) : (n.stockTools && n.stockTools.toggleButtonActiveClass(t), o.removeClass("highcharts-draw-mode"), this.mouseMoveEvent = this.nextEvent = !1, this.selectedButton = null)
                        }
                        bindingsChartClick(t, i) {
                            t = this.chart;
                            const s = this.activeAnnotation,
                                n = this.selectedButton;
                            t = t.renderer.boxWrapper, s && (s.cancelClick || i.activeAnnotation || !i.target.parentNode || function(t, i) {
                                const s = x.Element.prototype,
                                    n = s.matches || s.msMatchesSelector || s.webkitMatchesSelector;
                                let o = null;
                                if (s.closest) o = s.closest.call(t, i);
                                else
                                    do {
                                        if (n.call(t, i)) return t;
                                        t = t.parentElement || t.parentNode
                                    } while (null !== t && 1 === t.nodeType);
                                return o
                            }(i.target, ".highcharts-popup") ? s.cancelClick && setTimeout((() => {
                                s.cancelClick = !1
                            }), 0) : A(this, "closePopup")), n && n.start && (this.nextEvent ? (this.nextEvent(i, this.currentUserDetails), this.steps && (this.stepIndex++, n.steps[this.stepIndex] ? this.mouseMoveEvent = this.nextEvent = n.steps[this.stepIndex] : (A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), t.removeClass("highcharts-draw-mode"), n.end && n.end.call(this, i, this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1, this.selectedButton = null))) : (this.currentUserDetails = n.start.call(this, i)) && n.steps ? (this.stepIndex = 0, this.steps = !0, this.mouseMoveEvent = this.nextEvent = n.steps[this.stepIndex]) : (A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), t.removeClass("highcharts-draw-mode"), this.steps = !1, this.selectedButton = null, n.end && n.end.call(this, i, this.currentUserDetails)))
                        }
                        bindingsContainerMouseMove(t, i) {
                            this.mouseMoveEvent && this.mouseMoveEvent(i, this.currentUserDetails)
                        }
                        fieldsToOptions(t, i) {
                            return j(t, ((t, s) => {
                                const n = parseFloat(t),
                                    o = s.split("."),
                                    e = o.length - 1;
                                if (!k(n) || t.match(/px|em/g) || s.match(/format/g) || (t = n), "undefined" !== t) {
                                    let s = i;
                                    o.forEach(((i, n) => {
                                        const a = O(o[n + 1], "");
                                        e === n ? s[i] = t : (s[i] || (s[i] = a.match(/\d/g) ? [] : {}), s = s[i])
                                    }))
                                }
                            })), i
                        }
                        deselectAnnotation() {
                            this.activeAnnotation && (this.activeAnnotation.setControlPointsVisibility(!1), this.activeAnnotation = !1)
                        }
                        annotationToFields(t) {
                            function i(s, n, e, r, h) {
                                let l;
                                e && s && -1 === a.indexOf(n) && (0 <= (e.indexOf && e.indexOf(n)) || e[n] || !0 === e) && (C(s) ? (r[n] = [], s.forEach(((t, s) => {
                                    w(t) ? (r[n][s] = {}, j(t, ((t, e) => {
                                        i(t, e, o[n], r[n][s], n)
                                    }))) : i(t, 0, o[n], r[n], n)
                                }))) : w(s) ? (l = {}, C(r) ? (r.push(l), l[n] = {}, l = l[n]) : r[n] = l, j(s, ((t, s) => {
                                    i(t, s, 0 === n ? e : o[n], l, n)
                                }))) : "format" === n ? r[n] = [f(s, t.labels[0].points[0]).toString(), "text"] : C(r) ? r.push([s, v(h, s)]) : r[n] = [s, v(n, s)])
                            }
                            const s = t.options,
                                n = N.annotationsEditable,
                                o = n.nestedOptions,
                                e = O(s.type, s.shapes && s.shapes[0] && s.shapes[0].type, s.labels && s.labels[0] && s.labels[0].type, "label"),
                                a = N.annotationsNonEditable[s.langKey] || [],
                                r = {
                                    langKey: s.langKey,
                                    type: e
                                };
                            return j(s, ((t, a) => {
                                "typeOptions" === a ? (r[a] = {}, j(s[a], ((t, s) => {
                                    i(t, s, o, r[a], s)
                                }))) : i(t, a, n[e], r, a)
                            })), r
                        }
                        getClickedClassNames(t, i) {
                            let s, n = i.target;
                            for (i = []; n && n.tagName && ((s = b(n, "class")) && (i = i.concat(s.split(" ").map((t => [t, n])))), n = n.parentNode, n !== t););
                            return i
                        }
                        getButtonEvents(t, i) {
                            const s = this;
                            let n;
                            return this.getClickedClassNames(t, i).forEach((t => {
                                s.boundClassNames[t[0]] && !n && (n = {
                                    events: s.boundClassNames[t[0]],
                                    button: t[1]
                                })
                            })), n
                        }
                        update(t) {
                            this.options = P(!0, this.options, t), this.removeEvents(), this.initEvents()
                        }
                        removeEvents() {
                            this.eventsToUnbind.forEach((t => t()))
                        }
                        destroy() {
                            this.removeEvents()
                        }
                    }
                    return N.annotationsEditable = {
                        nestedOptions: {
                            labelOptions: ["style", "format", "backgroundColor"],
                            labels: ["style"],
                            label: ["style"],
                            style: ["fontSize", "color"],
                            background: ["fill", "strokeWidth", "stroke"],
                            innerBackground: ["fill", "strokeWidth", "stroke"],
                            outerBackground: ["fill", "strokeWidth", "stroke"],
                            shapeOptions: ["fill", "strokeWidth", "stroke"],
                            shapes: ["fill", "strokeWidth", "stroke"],
                            line: ["strokeWidth", "stroke"],
                            backgroundColors: [!0],
                            connector: ["fill", "strokeWidth", "stroke"],
                            crosshairX: ["strokeWidth", "stroke"],
                            crosshairY: ["strokeWidth", "stroke"]
                        },
                        circle: ["shapes"],
                        ellipse: ["shapes"],
                        verticalLine: [],
                        label: ["labelOptions"],
                        measure: ["background", "crosshairY", "crosshairX"],
                        fibonacci: [],
                        tunnel: ["background", "line", "height"],
                        pitchfork: ["innerBackground", "outerBackground"],
                        rect: ["shapes"],
                        crookedLine: [],
                        basicAnnotation: ["shapes", "labelOptions"]
                    }, N.annotationsNonEditable = {
                        rectangle: ["crosshairX", "crosshairY", "labelOptions"],
                        ellipse: ["labelOptions"],
                        circle: ["labelOptions"]
                    }, N
                })), i(t, "Shared/BaseForm.js", [t["Core/Renderer/HTML/AST.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        addEvent: s,
                        createElement: n
                    } = i;
                    return class {
                        constructor(t, i) {
                            this.iconsURL = i, this.container = this.createPopupContainer(t), this.closeButton = this.addCloseButton()
                        }
                        createPopupContainer(t, i = "highcharts-popup highcharts-no-tooltip") {
                            return n("div", {
                                className: i
                            }, void 0, t)
                        }
                        addCloseButton(t = "highcharts-popup-close") {
                            const i = this,
                                o = this.iconsURL,
                                e = n("div", {
                                    className: t
                                }, void 0, this.container);
                            return e.style["background-image"] = "url(" + (o.match(/png|svg|jpeg|jpg|gif/gi) ? o : o + "close.svg") + ")", ["click", "touchstart"].forEach((t => {
                                s(e, t, i.closeButtonEvents.bind(i))
                            })), e
                        }
                        closeButtonEvents() {
                            this.closePopup()
                        }
                        showPopup(i = "highcharts-annotation-toolbar") {
                            const s = this.container,
                                n = this.closeButton;
                            this.type = void 0, s.innerHTML = t.emptyHTML, 0 <= s.className.indexOf(i) && (s.classList.remove(i), s.removeAttribute("style")), s.appendChild(n), s.style.display = "block", s.style.height = ""
                        }
                        closePopup() {
                            this.container.style.display = "none"
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupAnnotations.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s(t, i, l, p, d, u) {
                        if (i) {
                            var g, f, m = this.addInput,
                                x = this.lang;
                            h(p, ((n, o) => {
                                g = "" !== l ? l + "." + o : o, r(n) && (!a(n) || a(n) && r(n[0]) ? ((f = x[o] || o).match(/\d/g) || d.push([!0, f, t]), s.call(this, t, i, g, n, d, !1)) : d.push([this, g, "annotation", t, n]))
                            })), u && (c(d, (t => t[1].match(/format/g) ? -1 : 1)), o && d.reverse(), d.forEach((t => {
                                !0 === t[0] ? e("span", {
                                    className: "highcharts-annotation-title"
                                }, void 0, t[2]).appendChild(n.createTextNode(t[1])) : (t[4] = {
                                    value: t[4][0],
                                    type: t[4][1]
                                }, m.apply(t[0], t.splice(1)))
                            })))
                        }
                    }
                    const {
                        doc: n,
                        isFirefox: o
                    } = t, {
                        createElement: e,
                        isArray: a,
                        isObject: r,
                        objectEach: h,
                        pick: l,
                        stableSort: c
                    } = i;
                    return {
                        addForm: function(t, i, o, a) {
                            if (t) {
                                var r = this.container,
                                    h = this.lang,
                                    l = e("h2", {
                                        className: "highcharts-popup-main-title"
                                    }, void 0, r);
                                l.appendChild(n.createTextNode(h[i.langKey] || i.langKey || "")), l = e("div", {
                                    className: "highcharts-popup-lhs-col highcharts-popup-lhs-full"
                                }, void 0, r);
                                var c = e("div", {
                                    className: "highcharts-popup-bottom-row"
                                }, void 0, r);
                                s.call(this, l, t, "", i, [], !0), this.addButton(c, a ? h.addButton || "Add" : h.saveButton || "Save", a ? "add" : "save", r, o)
                            }
                        },
                        addToolbar: function(t, i, s) {
                            const o = this.lang,
                                a = this.container,
                                r = this.showForm; - 1 === a.className.indexOf("highcharts-annotation-toolbar") && (a.className += " highcharts-annotation-toolbar"), t && (a.style.top = t.plotTop + 10 + "px"), e("span", void 0, void 0, a).appendChild(n.createTextNode(l(o[i.langKey] || i.langKey, i.shapes && i.shapes[0].type, "")));
                            let h = this.addButton(a, o.removeButton || "Remove", "remove", a, s);
                            h.className += " highcharts-annotation-remove-button", h.style["background-image"] = "url(" + this.iconsURL + "destroy.svg)", h = this.addButton(a, o.editButton || "Edit", "edit", a, (() => {
                                r.call(this, "annotation-edit", t, i, s)
                            })), h.className += " highcharts-annotation-edit-button", h.style["background-image"] = "url(" + this.iconsURL + "edit.svg)"
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupIndicators.js", [t["Core/Renderer/HTML/AST.js"], t["Core/Globals.js"], t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], (function(t, i, s, n, o) {
                    function e(t) {
                        const i = v("div", {
                            className: "highcharts-popup-lhs-col"
                        }, void 0, t);
                        return t = v("div", {
                            className: "highcharts-popup-rhs-col"
                        }, void 0, t), v("div", {
                            className: "highcharts-popup-rhs-col-wrapper"
                        }, void 0, t), {
                            lhsCol: i,
                            rhsCol: t
                        }
                    }

                    function a(i, s, n, o) {
                        const e = this,
                            a = e.lang,
                            h = s.querySelectorAll(".highcharts-popup-lhs-col")[0];
                        s = s.querySelectorAll(".highcharts-popup-rhs-col")[0];
                        const l = "edit" === n;
                        if (n = l ? i.series : i.options.plotOptions || {}, i || !n) {
                            var c, m = [];
                            l || b(n) ? b(n) && (m = d.call(this, n)) : m = p.call(this, n, o), E(m, ((t, i) => (t = t.indicatorFullName.toLowerCase()) < (i = i.indicatorFullName.toLowerCase()) ? -1 : t > i ? 1 : 0)), h.children[1] && h.children[1].remove();
                            var y = v("ul", {
                                    className: "highcharts-indicator-list"
                                }, void 0, h),
                                A = s.querySelectorAll(".highcharts-popup-rhs-col-wrapper")[0];
                            m.forEach((s => {
                                const {
                                    indicatorFullName: n,
                                    indicatorType: o,
                                    series: a
                                } = s;
                                (c = v("li", {
                                    className: "highcharts-indicator-list"
                                }, void 0, y)).appendChild(f.createTextNode(n)), ["click", "touchstart"].forEach((s => {
                                    x(c, s, (function() {
                                        const s = A.parentNode.children[1]; {
                                            const s = a.params || a.options.params;
                                            A.innerHTML = t.emptyHTML, v("h3", {
                                                className: "highcharts-indicator-title"
                                            }, void 0, A).appendChild(f.createTextNode(u(a, o).indicatorFullName)), v("input", {
                                                type: "hidden",
                                                name: "highcharts-type-" + o,
                                                value: o
                                            }, void 0, A), g.call(e, o, "series", i, A, a, a.linkedParent && a.linkedParent.options.id), s.volumeSeriesID && g.call(e, o, "volume", i, A, a, a.linkedParent && s.volumeSeriesID), r.call(e, i, "params", s, o, A)
                                        }
                                        s && (s.style.display = "block"), l && a.options && v("input", {
                                            type: "hidden",
                                            name: "highcharts-id-" + o,
                                            value: a.options.id
                                        }, void 0, A).setAttribute("highcharts-data-series-id", a.options.id)
                                    }))
                                }))
                            })), 0 < y.childNodes.length ? y.childNodes[0].click() : l || (t.setElementHTML(A.parentNode.children[0], a.noFilterMatch || ""), A.parentNode.children[1].style.display = "none")
                        }
                    }

                    function r(t, i, s, n, o) {
                        if (t) {
                            var e = this.addInput;
                            C(s, ((s, a) => {
                                var h = i + "." + a;
                                y(s) && h && (A(s) && (e.call(this, h, n, o, {}), r.call(this, t, h, s, n, o)), h in k ? (h = l.call(this, n, h, o), c.call(this, t, i, h, n, a, s)) : "params.volumeSeriesID" === h || b(s) || e.call(this, h, n, o, {
                                    value: s,
                                    type: "number"
                                }))
                            }))
                        }
                    }

                    function h(t, i) {
                        const s = this;
                        var n = i.querySelectorAll(".highcharts-popup-lhs-col")[0];
                        i = this.lang.clearFilter, n = v("div", {
                            className: "highcharts-input-wrapper"
                        }, void 0, n);
                        const o = this.addInput("searchIndicators", "input", n, {
                                value: "",
                                type: "text",
                                htmlFor: "search-indicators",
                                labelClassName: "highcharts-input-search-indicators-label"
                            }),
                            e = v("a", {
                                textContent: i
                            }, void 0, n);
                        o.classList.add("highcharts-input-search-indicators"), e.classList.add("clear-filter-button"), x(o, "input", (function(i) {
                            a.call(s, t, s.container, "add", this.value), e.style.display = this.value.length ? "inline-block" : "none"
                        })), ["click", "touchstart"].forEach((i => {
                            x(e, i, (function() {
                                o.value = "", a.call(s, t, s.container, "add", ""), e.style.display = "none"
                            }))
                        }))
                    }

                    function l(t, i, s) {
                        var n = i.split(".");
                        n = n[n.length - 1], t = "highcharts-" + i + "-type-" + t;
                        const o = this.lang;
                        return v("label", {
                            htmlFor: t
                        }, null, s).appendChild(f.createTextNode(o[n] || i)), (s = v("select", {
                            name: t,
                            className: "highcharts-popup-field",
                            id: "highcharts-select-" + i
                        }, null, s)).setAttribute("id", "highcharts-select-" + i), s
                    }

                    function c(t, i, s, n, o, e, a) {
                        "series" === i || "volume" === i ? t.series.forEach((t => {
                            const n = t.options,
                                o = n.name || n.params ? t.name : n.id || "";
                            "highcharts-navigator-series" !== n.id && n.id !== (a && a.options && a.options.id) && (y(e) || "volume" !== i || "column" !== t.type || (e = n.id), v("option", {
                                value: n.id
                            }, void 0, s).appendChild(f.createTextNode(o)))
                        })) : n && o && w[o + "-" + n].forEach((t => {
                            v("option", {
                                value: t
                            }, void 0, s).appendChild(f.createTextNode(t))
                        })), y(e) && (s.value = e)
                    }

                    function p(t, i) {
                        const s = this.chart && this.chart.options.lang,
                            n = s && s.navigation && s.navigation.popup && s.navigation.popup.indicatorAliases,
                            o = [];
                        let e;
                        return C(t, ((t, s) => {
                            var a = t && t.options;
                            if (t.params || a && a.params) {
                                const {
                                    indicatorFullName: r,
                                    indicatorType: h
                                } = u(t, s);
                                i ? (s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = new RegExp(s, "i"), a = n && n[h] && n[h].join(" ") || "", (r.match(s) || a.match(s)) && (e = {
                                    indicatorFullName: r,
                                    indicatorType: h,
                                    series: t
                                }, o.push(e))) : (e = {
                                    indicatorFullName: r,
                                    indicatorType: h,
                                    series: t
                                }, o.push(e))
                            }
                        })), o
                    }

                    function d(t) {
                        const i = [];
                        return t.forEach((t => {
                            t.is("sma") && i.push({
                                indicatorFullName: t.name,
                                indicatorType: t.type,
                                series: t
                            })
                        })), i
                    }

                    function u(t, i) {
                        const s = t.options;
                        let n = m[i] && m[i].prototype.nameBase || i.toUpperCase();
                        return s && s.type && (i = t.options.type, n = t.name), {
                            indicatorFullName: n,
                            indicatorType: i
                        }
                    }

                    function g(t, i, s, n, o, e) {
                        s && (t = l.call(this, t, i, n), c.call(this, s, i, t, void 0, void 0, void 0, o), y(e) && (t.value = e))
                    }
                    const {
                        doc: f
                    } = i, {
                        seriesTypes: m
                    } = n, {
                        addEvent: x,
                        createElement: v,
                        defined: y,
                        isArray: b,
                        isObject: A,
                        objectEach: C,
                        stableSort: E
                    } = o;
                    var k;
                    ! function(t) {
                        t[t["params.algorithm"] = 0] = "params.algorithm", t[t["params.average"] = 1] = "params.average"
                    }(k || (k = {}));
                    const w = {
                        "algorithm-pivotpoints": ["standard", "fibonacci", "camarilla"],
                        "average-disparityindex": ["sma", "ema", "dema", "tema", "wma"]
                    };
                    return {
                        addForm: function(t, i, s) {
                            let n;
                            if (i = this.lang, t) {
                                this.tabs.init.call(this, t);
                                var o = this.container.querySelectorAll(".highcharts-tab-item-content");
                                e(o[0]), h.call(this, t, o[0]), a.call(this, t, o[0], "add"), n = o[0].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(n, i.addButton || "add", "add", n, s), e(o[1]), a.call(this, t, o[1], "edit"), n = o[1].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(n, i.saveButton || "save", "edit", n, s), this.addButton(n, i.removeButton || "remove", "remove", n, s)
                            }
                        },
                        getAmount: function() {
                            let t = 0;
                            return this.series.forEach((i => {
                                (i.params || i.options.params) && t++
                            })), t
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupTabs.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s() {
                        return h("div", {
                            className: "highcharts-tab-item-content highcharts-no-mousewheel"
                        }, void 0, this.container)
                    }

                    function n(t, i) {
                        const s = this.container,
                            n = this.lang;
                        let o = "highcharts-tab-item";
                        return 0 === i && (o += " highcharts-tab-disabled"), (i = h("span", {
                            className: o
                        }, void 0, s)).appendChild(a.createTextNode(n[t + "Button"] || t)), i.setAttribute("highcharts-data-tab-type", t), i
                    }

                    function o(t, i) {
                        const s = this.container.querySelectorAll(".highcharts-tab-item-content");
                        t.className += " highcharts-tab-item-active", s[i].className += " highcharts-tab-item-show"
                    }

                    function e(t) {
                        const i = this;
                        this.container.querySelectorAll(".highcharts-tab-item").forEach(((s, n) => {
                            0 === t && "edit" === s.getAttribute("highcharts-data-tab-type") || ["click", "touchstart"].forEach((t => {
                                r(s, t, (function() {
                                    {
                                        var t = i.container;
                                        const s = t.querySelectorAll(".highcharts-tab-item");
                                        t = t.querySelectorAll(".highcharts-tab-item-content");
                                        for (let i = 0; i < s.length; i++) s[i].classList.remove("highcharts-tab-item-active"), t[i].classList.remove("highcharts-tab-item-show")
                                    }
                                    o.call(i, this, n)
                                }))
                            }))
                        }))
                    }
                    const {
                        doc: a
                    } = t, {
                        addEvent: r,
                        createElement: h
                    } = i;
                    return {
                        init: function(t) {
                            if (t) {
                                t = this.indicators.getAmount.call(t);
                                var i = n.call(this, "add");
                                n.call(this, "edit", t), s.call(this), s.call(this), e.call(this, t), o.call(this, i, 0)
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/Popup.js", [t["Shared/BaseForm.js"], t["Core/Globals.js"], t["Core/Defaults.js"], t["Extensions/Annotations/Popup/PopupAnnotations.js"], t["Extensions/Annotations/Popup/PopupIndicators.js"], t["Extensions/Annotations/Popup/PopupTabs.js"], t["Core/Utilities.js"]], (function(t, i, s, n, o, e, a) {
                    const {
                        doc: r
                    } = i, {
                        getOptions: h
                    } = s, {
                        addEvent: l,
                        createElement: c,
                        extend: p,
                        fireEvent: d,
                        pick: u
                    } = a;
                    class g extends t {
                        constructor(t, i, s) {
                            super(t, i), this.chart = s, this.lang = h().lang.navigation.popup, l(this.container, "mousedown", (() => {
                                const t = s && s.navigationBindings && s.navigationBindings.activeAnnotation;
                                if (t) {
                                    t.cancelClick = !0;
                                    const i = l(r, "click", (() => {
                                        setTimeout((() => {
                                            t.cancelClick = !1
                                        }), 0), i()
                                    }))
                                }
                            }))
                        }
                        addInput(t, i, s, n) {
                            var o = t.split(".");
                            o = o[o.length - 1];
                            const e = this.lang;
                            return i = "highcharts-" + i + "-" + u(n.htmlFor, o), o.match(/^\d+$/) || c("label", {
                                htmlFor: i,
                                className: n.labelClassName
                            }, void 0, s).appendChild(r.createTextNode(e[o] || o)), (s = c("input", {
                                name: i,
                                value: n.value,
                                type: n.type,
                                className: "highcharts-popup-field"
                            }, void 0, s)).setAttribute("highcharts-data-name", t), s
                        }
                        closeButtonEvents() {
                            if (this.chart) {
                                const t = this.chart.navigationBindings;
                                d(t, "closePopup"), t && t.selectedButtonElement && d(t, "deselectButton", {
                                    button: t.selectedButtonElement
                                })
                            } else super.closeButtonEvents()
                        }
                        addButton(t, i, s, n, o) {
                            const e = c("button", void 0, void 0, t);
                            return e.appendChild(r.createTextNode(i)), o && ["click", "touchstart"].forEach((t => {
                                l(e, t, (() => (this.closePopup(), o(function(t, i) {
                                    const s = Array.prototype.slice.call(t.querySelectorAll("input")),
                                        n = Array.prototype.slice.call(t.querySelectorAll("select")),
                                        o = t.querySelectorAll("#highcharts-select-series > option:checked")[0];
                                    t = t.querySelectorAll("#highcharts-select-volume > option:checked")[0];
                                    const e = {
                                        actionType: i,
                                        linkedTo: o && o.getAttribute("value") || "",
                                        fields: {}
                                    };
                                    return s.forEach((t => {
                                        const i = t.getAttribute("highcharts-data-name");
                                        t.getAttribute("highcharts-data-series-id") ? e.seriesId = t.value : i ? e.fields[i] = t.value : e.type = t.value
                                    })), n.forEach((t => {
                                        var i = t.id;
                                        "highcharts-select-series" !== i && "highcharts-select-volume" !== i && (i = i.split("highcharts-select-")[1], e.fields[i] = t.value)
                                    })), t && (e.fields["params.volumeSeriesID"] = t.getAttribute("value") || ""), e
                                }(n, s)))))
                            })), e
                        }
                        showForm(t, i, s, n) {
                            i && (this.showPopup(), "indicators" === t && this.indicators.addForm.call(this, i, s, n), "annotation-toolbar" === t && this.annotations.addToolbar.call(this, i, s, n), "annotation-edit" === t && this.annotations.addForm.call(this, i, s, n), "flag" === t && this.annotations.addForm.call(this, i, s, n, !0), this.type = t, this.container.style.height = this.container.offsetHeight + "px")
                        }
                    }
                    return p(g.prototype, {
                        annotations: n,
                        indicators: o,
                        tabs: e
                    }), g
                })), i(t, "Extensions/Annotations/Popup/PopupComposition.js", [t["Extensions/Annotations/Popup/Popup.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s() {
                        this.popup && this.popup.closePopup()
                    }

                    function n(i) {
                        this.popup || (this.popup = new t(this.chart.container, this.chart.options.navigation.iconsURL || this.chart.options.stockTools && this.chart.options.stockTools.gui.iconsURL || "https://code.highcharts.com/11.1.0/gfx/stock-icons/", this.chart)), this.popup.showForm(i.formType, this.chart, i.options, i.onSubmit)
                    }

                    function o(t, i) {
                        this.inClass(i.target, "highcharts-popup") || t.apply(this, Array.prototype.slice.call(arguments, 1))
                    }
                    const {
                        addEvent: e,
                        wrap: a
                    } = i, r = [];
                    return {
                        compose: function(t, h) {
                            i.pushUnique(r, t) && (e(t, "closePopup", s), e(t, "showPopup", n)), i.pushUnique(r, h) && a(h.prototype, "onContainerMouseDown", o)
                        }
                    }
                })), i(t, "Extensions/Annotations/Annotation.js", [t["Core/Animation/AnimationUtilities.js"], t["Extensions/Annotations/AnnotationChart.js"], t["Extensions/Annotations/AnnotationDefaults.js"], t["Extensions/Annotations/Controllables/ControllableRect.js"], t["Extensions/Annotations/Controllables/ControllableCircle.js"], t["Extensions/Annotations/Controllables/ControllableEllipse.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Extensions/Annotations/Controllables/ControllableImage.js"], t["Extensions/Annotations/Controllables/ControllableLabel.js"], t["Extensions/Annotations/ControlPoint.js"], t["Extensions/Annotations/ControlTarget.js"], t["Extensions/Annotations/EventEmitter.js"], t["Extensions/Annotations/MockPoint.js"], t["Extensions/Annotations/NavigationBindings.js"], t["Extensions/Annotations/Popup/PopupComposition.js"], t["Core/Utilities.js"]], (function(t, i, s, n, o, e, a, r, h, l, c, p, d, u, g, f) {
                    function m(t, i) {
                        const s = {};
                        return ["labels", "shapes"].forEach((n => {
                            const o = t[n];
                            o && (s[n] = i[n] ? E(i[n]).map((function(t, i) {
                                return A(o[i], t)
                            })) : t[n])
                        })), s
                    }
                    const {
                        getDeferredAnimation: x
                    } = t, {
                        destroyObjectProperties: v,
                        erase: y,
                        fireEvent: b,
                        merge: A,
                        pick: C,
                        splat: E
                    } = f;
                    class k extends p {
                        static compose(t, s, n) {
                            i.compose(k, t, s), h.compose(n), a.compose(t, n), u.compose(k, t), g.compose(u, s)
                        }
                        constructor(t, i) {
                            super(), this.coll = "annotations", this.shapesGroup = this.labelsGroup = this.labelCollector = this.group = this.graphic = this.animationConfig = void 0, this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.index = -1, this.labels = [], this.shapes = [], this.options = A(this.defaultOptions, i), this.userOptions = i, i = m(this.options, i), this.options.labels = i.labels, this.options.shapes = i.shapes, this.init(t, this.options)
                        }
                        addClipPaths() {
                            this.setClipAxes(), this.clipXAxis && this.clipYAxis && this.options.crop && (this.clipRect = this.chart.renderer.clipRect(this.getClipBox()))
                        }
                        addLabels() {
                            const t = this.options.labels || [];
                            t.forEach(((i, s) => {
                                i = this.initLabel(i, s), A(!0, t[s], i.options)
                            }))
                        }
                        addShapes() {
                            const t = this.options.shapes || [];
                            t.forEach(((i, s) => {
                                i = this.initShape(i, s), A(!0, t[s], i.options)
                            }))
                        }
                        destroy() {
                            const t = this.chart,
                                i = function(t) {
                                    t.destroy()
                                };
                            this.labels.forEach(i), this.shapes.forEach(i), this.clipYAxis = this.clipXAxis = null, y(t.labelCollectors, this.labelCollector), super.destroy(), this.destroyControlTarget(), v(this, t)
                        }
                        destroyItem(t) {
                            y(this[t.itemType + "s"], t), t.destroy()
                        }
                        getClipBox() {
                            if (this.clipXAxis && this.clipYAxis) return {
                                x: this.clipXAxis.left,
                                y: this.clipYAxis.top,
                                width: this.clipXAxis.width,
                                height: this.clipYAxis.height
                            }
                        }
                        initProperties(t, i) {
                            this.setOptions(i);
                            const s = m(this.options, i);
                            this.options.labels = s.labels, this.options.shapes = s.shapes, this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.userOptions = i, this.labels = [], this.shapes = []
                        }
                        init(t, i, s = this.index) {
                            t = this.chart, i = this.options.animation, this.index = s, this.linkPoints(), this.addControlPoints(), this.addShapes(), this.addLabels(), this.setLabelCollector(), this.animationConfig = x(t, i)
                        }
                        initLabel(t, i) {
                            return t = A(this.options.labelOptions, {
                                controlPointOptions: this.options.controlPointOptions
                            }, t), (i = new h(this, t, i)).itemType = "label", this.labels.push(i), i
                        }
                        initShape(t, i) {
                            return t = A(this.options.shapeOptions, {
                                controlPointOptions: this.options.controlPointOptions
                            }, t), (i = new k.shapesMap[t.type](this, t, i)).itemType = "shape", this.shapes.push(i), i
                        }
                        redraw(t) {
                            this.linkPoints(), this.graphic || this.render(), this.clipRect && this.clipRect.animate(this.getClipBox()), this.redrawItems(this.shapes, t), this.redrawItems(this.labels, t), this.redrawControlPoints(t)
                        }
                        redrawItem(t, i) {
                            t.linkPoints(), t.shouldBeDrawn() ? (t.graphic || this.renderItem(t), t.redraw(C(i, !0) && t.graphic.placed), t.points.length && function(t) {
                                const i = t.graphic;
                                t = t.points.some((t => !1 !== t.series.visible && !1 !== t.visible)), i && (t ? "hidden" === i.visibility && i.show() : i.hide())
                            }(t)) : this.destroyItem(t)
                        }
                        redrawItems(t, i) {
                            let s = t.length;
                            for (; s--;) this.redrawItem(t[s], i)
                        }
                        remove() {
                            return this.chart.removeAnnotation(this)
                        }
                        render() {
                            const t = this.chart.renderer;
                            this.graphic = t.g("annotation").attr({
                                opacity: 0,
                                zIndex: this.options.zIndex,
                                visibility: this.options.visible ? "inherit" : "hidden"
                            }).add(), this.shapesGroup = t.g("annotation-shapes").add(this.graphic), this.options.crop && this.shapesGroup.clip(this.chart.plotBoxClip), this.labelsGroup = t.g("annotation-labels").attr({
                                translateX: 0,
                                translateY: 0
                            }).add(this.graphic), this.addClipPaths(), this.clipRect && this.graphic.clip(this.clipRect), this.renderItems(this.shapes), this.renderItems(this.labels), this.addEvents(), this.renderControlPoints()
                        }
                        renderItem(t) {
                            t.render("label" === t.itemType ? this.labelsGroup : this.shapesGroup)
                        }
                        renderItems(t) {
                            let i = t.length;
                            for (; i--;) this.renderItem(t[i])
                        }
                        setClipAxes() {
                            const t = this.chart.xAxis,
                                i = this.chart.yAxis,
                                s = (this.options.labels || []).concat(this.options.shapes || []).reduce(((s, n) => (n = n && (n.point || n.points && n.points[0]), [t[n && n.xAxis] || s[0], i[n && n.yAxis] || s[1]])), []);
                            this.clipXAxis = s[0], this.clipYAxis = s[1]
                        }
                        setControlPointsVisibility(t) {
                            const i = function(i) {
                                i.setControlPointsVisibility(t)
                            };
                            this.controlPoints.forEach((i => {
                                i.setVisibility(t)
                            })), this.shapes.forEach(i), this.labels.forEach(i)
                        }
                        setLabelCollector() {
                            const t = this;
                            t.labelCollector = function() {
                                return t.labels.reduce((function(t, i) {
                                    return i.options.allowOverlap || t.push(i.graphic), t
                                }), [])
                            }, t.chart.labelCollectors.push(t.labelCollector)
                        }
                        setOptions(t) {
                            this.options = A(this.defaultOptions, t)
                        }
                        setVisibility(t) {
                            const i = this.options,
                                s = this.chart.navigationBindings,
                                n = C(t, !i.visible);
                            this.graphic.attr("visibility", n ? "inherit" : "hidden"), n || (t = function(t) {
                                t.setControlPointsVisibility(n)
                            }, this.shapes.forEach(t), this.labels.forEach(t), s.activeAnnotation === this && s.popup && "annotation-toolbar" === s.popup.type && b(s, "closePopup")), i.visible = n
                        }
                        update(t, i) {
                            const s = this.chart,
                                n = m(this.userOptions, t),
                                o = s.annotations.indexOf(this);
                            (t = A(!0, this.userOptions, t)).labels = n.labels, t.shapes = n.shapes, this.destroy(), this.initProperties(s, t), this.init(s, t), s.options.annotations[o] = t, this.isUpdating = !0, C(i, !0) && s.redraw(), b(this, "afterUpdate"), this.isUpdating = !1
                        }
                    }
                    return k.ControlPoint = l, k.MockPoint = d, k.shapesMap = {
                        rect: n,
                        circle: o,
                        ellipse: e,
                        path: a,
                        image: r
                    }, k.types = {}, k.prototype.defaultOptions = s, k.prototype.nonDOMEvents = ["add", "afterUpdate", "drag", "remove"], c.compose(k), k
                })), i(t, "masters/modules/annotations.src.js", [t["Core/Globals.js"], t["Extensions/Annotations/Annotation.js"]], (function(t, i) {
                    t.Annotation = i, i.compose(t.Chart, t.Pointer, t.SVGRenderer)
                }))
            }, t.exports ? (e.default = e, t.exports = e) : (n = [s(78840)], void 0 === (o = function(t) {
                return e(t), e.Highcharts = t, e
            }.apply(i, n)) || (t.exports = o))
        },
        71646: function(t, i, s) {
            "use strict";
            s.d(i, {
                v: function() {
                    return a
                }
            });
            var n = s(67294),
                o = s(16723),
                e = s(3855);

            function a(t, i) {
                let [s, a] = (0, n.useState)(t), r = (0, e.E)(t);
                return (0, o.e)((() => a(r.current)), [r, a, ...i]), s
            }
        }
    }
]);