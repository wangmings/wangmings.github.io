new((function i(e) {
    var t = {};
    console.log('111')
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.i = function(e) {
        return e
    }, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n.oe = function(e) {
        throw console.error(e), e
    };
    var i = n(n.s = 52);
    return i.default || i
})({
    52: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(21),
            r = n(1),
            a = n(0),
            o = n(53);
        t.default = function(e) {
            var t = new o.EventEmitter;
            t.trigger = function(e) {
                for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                t.emit.apply(t, [e, e].concat(n))
            }, t.off = function(e) {
                for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                t.removeListener.apply(t, [e].concat(n))
            };
            var n = function(t, n) {
                e.postMessage({
                    event: t,
                    data: n
                })
            };
            e.addEventListener("message", (function(r) {
                var o = r.data;
                switch (o.cmd) {
                    case "init":
                        var s = JSON.parse(o.config);
                        e.demuxer = new i.default(t, o.typeSupported, s, o.vendor), a.enableLogs(s.debug), n("init", null);
                        break;
                    case "demux":
                        e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity,
                            o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                }
            })), t.on(r.default.FRAG_DECRYPTED, n), t.on(r.default.FRAG_PARSING_INIT_SEGMENT, n), t.on(r.default.FRAG_PARSED,
                n), t.on(r.default.ERROR, n), t.on(r.default.FRAG_PARSING_METADATA, n), t.on(r.default.FRAG_PARSING_USERDATA,
                n), t.on(r.default.INIT_PTS_FOUND, n), t.on(r.default.FRAG_PARSING_DATA, (function(t, n) {
                var i = [],
                    r = {
                        event: t,
                        data: n
                    };
                n.data1 && (r.data1 = n.data1.buffer, i.push(n.data1.buffer), delete n.data1), n.data2 && (r.data2 = n.data2
                    .buffer, i.push(n.data2.buffer), delete n.data2), e.postMessage(r, i)
            }))
        }
    },
    53: function(e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(e) {
            return "function" == typeof e
        }

        function r(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners =
            10, n.prototype.setMaxListeners = function(e) {
                if (! function(e) {
                        return "number" == typeof e
                    }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function(e) {
                var t, n, o, s, l, u;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this
                        ._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error) throw t;
                    var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw d.context = t, d
                }
                if (a(n = this._events[e])) return !1;
                if (i(n)) switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
                } else if (r(n))
                    for (s = Array.prototype.slice.call(arguments, 1), o = (u = n.slice()).length, l = 0; l < o; l++) u[l].apply(
                        this, s);
                return !0
            }, n.prototype.on = n.prototype.addListener = function(e, t) {
                var o;
                if (!i(t)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ?
                    t.listener : t), this._events[e] ? r(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[
                    e], t] : this._events[e] = t, r(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners :
                    this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error(
                    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                    this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, n.prototype.once = function(e, t) {
                if (!i(t)) throw TypeError("listener must be a function");
                var n = !1;

                function r() {
                    this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
                }
                return r.listener = t, this.on(e, r), this
            }, n.prototype.removeListener = function(e, t) {
                var n, a, o, s;
                if (!i(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (o = (n = this._events[e]).length, a = -1, n === t || i(n.listener) && n.listener === t) delete this._events[
                    e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (r(n)) {
                    for (s = o; s-- > 0;)
                        if (n[s] === t || n[s].listener && n[s].listener === t) {
                            a = s;
                            break
                        } if (a < 0) return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(a, 1), this._events.removeListener && this.emit(
                        "removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this
                    ._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (i(n = this._events[e])) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function(e) {
                return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (i(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, n.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
    },
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(6);

        function r() {}
        var a = {
                trace: r,
                debug: r,
                log: r,
                warn: r,
                info: r,
                error: r
            },
            o = a,
            s = i.getSelfScope();
        t.enableLogs = function(e) {
            if (!0 === e || "object" == typeof e) {
                ! function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    t.forEach((function(t) {
                        o[t] = e[t] ? e[t].bind(e) : function(e) {
                            var t = s.console[e];
                            return t ? function() {
                                for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                                n[0] && (n[0] = function(e, t) {
                                    return "[" + e + "] > " + t
                                }(e, n[0])), t.apply(s.console, n)
                            } : r
                        }(t)
                    }))
                }(e, "debug", "log", "info", "warn", "error");
                try {
                    o.log()
                } catch (e) {
                    o = a
                }
            } else o = a
        }, t.logger = o
    },
    6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getSelfScope = function() {
            return "undefined" == typeof window ? self : window
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            MEDIA_ATTACHING: "hlsMediaAttaching",
            MEDIA_ATTACHED: "hlsMediaAttached",
            MEDIA_DETACHING: "hlsMediaDetaching",
            MEDIA_DETACHED: "hlsMediaDetached",
            BUFFER_RESET: "hlsBufferReset",
            BUFFER_CODECS: "hlsBufferCodecs",
            BUFFER_CREATED: "hlsBufferCreated",
            BUFFER_APPENDING: "hlsBufferAppending",
            BUFFER_APPENDED: "hlsBufferAppended",
            BUFFER_EOS: "hlsBufferEos",
            BUFFER_FLUSHING: "hlsBufferFlushing",
            BUFFER_FLUSHED: "hlsBufferFlushed",
            MANIFEST_LOADING: "hlsManifestLoading",
            MANIFEST_LOADED: "hlsManifestLoaded",
            MANIFEST_PARSED: "hlsManifestParsed",
            LEVEL_SWITCHING: "hlsLevelSwitching",
            LEVEL_SWITCHED: "hlsLevelSwitched",
            LEVEL_LOADING: "hlsLevelLoading",
            LEVEL_LOADED: "hlsLevelLoaded",
            LEVEL_UPDATED: "hlsLevelUpdated",
            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
            AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
            AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
            SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
            SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
            SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
            SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
            SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
            INIT_PTS_FOUND: "hlsInitPtsFound",
            FRAG_LOADING: "hlsFragLoading",
            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
            FRAG_LOADED: "hlsFragLoaded",
            FRAG_DECRYPTED: "hlsFragDecrypted",
            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
            FRAG_PARSING_DATA: "hlsFragParsingData",
            FRAG_PARSED: "hlsFragParsed",
            FRAG_BUFFERED: "hlsFragBuffered",
            FRAG_CHANGED: "hlsFragChanged",
            FPS_DROP: "hlsFpsDrop",
            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
            ERROR: "hlsError",
            DESTROYING: "hlsDestroying",
            KEY_LOADING: "hlsKeyLoading",
            KEY_LOADED: "hlsKeyLoaded",
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
        }
    },
    21: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(1),
            a = n(3),
            o = n(12),
            s = n(42),
            l = n(17),
            u = n(43),
            d = n(46),
            c = n(47),
            f = n(50),
            h = n(6),
            p = n(0),
            g = h.getSelfScope();
        try {
            i = g.performance.now.bind(g.performance)
        } catch (e) {
            p.logger.debug("Unable to use Performance API on this environment"), i = g.Date.now
        }
        var m = function() {
            function e(e, t, n, i) {
                this.observer = e, this.typeSupported = t, this.config = n, this.vendor = i
            }
            return e.prototype.destroy = function() {
                var e = this.demuxer;
                e && e.destroy()
            }, e.prototype.push = function(e, t, n, a, s, l, u, d, c, f, h, p) {
                var g = this;
                if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                    var m = this.decrypter;
                    null == m && (m = this.decrypter = new o.default(this.observer, this.config));
                    var v = i();
                    m.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
                        var o = i();
                        g.observer.trigger(r.default.FRAG_DECRYPTED, {
                            stats: {
                                tstart: v,
                                tdecrypt: o
                            }
                        }), g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(n), a, s, l, u, d, c, f, h, p)
                    }))
                } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(n), a, s, l, u, d, c, f, h, p)
            }, e.prototype.pushDecrypted = function(e, t, n, i, o, h, p, g, m, v, y, _) {
                var b = this.demuxer;
                if (!b || (p || g) && !this.probe(e)) {
                    for (var E = this.observer, T = this.typeSupported, S = this.config, w = [{
                            demux: u.default,
                            remux: c.default
                        }, {
                            demux: l.default,
                            remux: f.default
                        }, {
                            demux: s.default,
                            remux: c.default
                        }, {
                            demux: d.default,
                            remux: c.default
                        }], A = 0, R = w.length; A < R; A++) {
                        var C = w[A],
                            I = C.demux.probe;
                        if (I(e)) {
                            var D = this.remuxer = new C.remux(E, S, T, this.vendor);
                            b = new C.demux(E, D, S, T), this.probe = I;
                            break
                        }
                    }
                    if (!b) return void E.trigger(r.default.ERROR, {
                        type: a.ErrorTypes.MEDIA_ERROR,
                        details: a.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found"
                    });
                    this.demuxer = b
                }
                var x = this.remuxer;
                (p || g) && (b.resetInitSegment(n, i, o, v), x.resetInitSegment()), p && (b.resetTimeStamp(_), x.resetTimeStamp(
                    _)), "function" == typeof b.setDecryptData && b.setDecryptData(t), b.append(e, h, m, y)
            }, e
        }();
        t.default = m
    },
    50: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1),
            r = function() {
                function e(e) {
                    this.observer = e
                }
                return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment =
                    function() {}, e.prototype.remux = function(e, t, n, r, a, o, s, l) {
                        var u = this.observer,
                            d = "";
                        e && (d += "audio"), t && (d += "video"), u.trigger(i.default.FRAG_PARSING_DATA, {
                            data1: l,
                            startPTS: a,
                            startDTS: a,
                            type: d,
                            hasAudio: !!e,
                            hasVideo: !!t,
                            nb: 1,
                            dropped: 0
                        }), u.trigger(i.default.FRAG_PARSED)
                    }, e
            }();
        t.default = r
    },
    47: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(48),
            r = n(49),
            a = n(1),
            o = n(3),
            s = n(0),
            l = function() {
                function e(e, t, n, i) {
                    this.observer = e, this.config = t, this.typeSupported = n;
                    var r = navigator.userAgent;
                    this.isSafari = i && i.indexOf("Apple") > -1 && r && !r.match("CriOS"), this.ISGenerated = !1
                }
                return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function(e) {
                    this._initPTS = this._initDTS = e
                }, e.prototype.resetInitSegment = function() {
                    this.ISGenerated = !1
                }, e.prototype.remux = function(e, t, n, i, r, o, l) {
                    if (this.ISGenerated || this.generateIS(e, t, r), this.ISGenerated) {
                        var u = e.samples.length,
                            d = t.samples.length,
                            c = r,
                            f = r;
                        if (u && d) {
                            var h = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                            c += Math.max(0, h), f += Math.max(0, -h)
                        }
                        if (u) {
                            e.timescale || (s.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, r));
                            var p = this.remuxAudio(e, c, o, l);
                            if (d) {
                                var g = void 0;
                                p && (g = p.endPTS - p.startPTS), t.timescale || (s.logger.warn("regenerate InitSegment as video detected"),
                                    this.generateIS(e, t, r)), this.remuxVideo(t, f, o, g, l)
                            }
                        } else if (d) {
                            var m = this.remuxVideo(t, f, o, 0, l);
                            m && e.codec && this.remuxEmptyAudio(e, c, o, m)
                        }
                    }
                    n.samples.length && this.remuxID3(n, r), i.samples.length && this.remuxText(i, r), this.observer.trigger(a.default
                        .FRAG_PARSED)
                }, e.prototype.generateIS = function(e, t, n) {
                    var i, l, u = this.observer,
                        d = e.samples,
                        c = t.samples,
                        f = this.typeSupported,
                        h = "audio/mp4",
                        p = {},
                        g = {
                            tracks: p
                        },
                        m = void 0 === this._initPTS;
                    if (m && (i = l = 1 / 0), e.config && d.length && (e.timescale = e.samplerate, s.logger.log(
                            "audio sampling rate : " + e.samplerate), e.isAAC || (f.mpeg ? (h = "audio/mpeg", e.codec = "") : f.mp3 &&
                            (e.codec = "mp3")), p.audio = {
                            container: h,
                            codec: e.codec,
                            initSegment: !e.isAAC && f.mpeg ? new Uint8Array : r.default.initSegment([e]),
                            metadata: {
                                channelCount: e.channelCount
                            }
                        }, m && (i = l = d[0].pts - e.inputTimeScale * n)), t.sps && t.pps && c.length) {
                        var v = t.inputTimeScale;
                        t.timescale = v, p.video = {
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: r.default.initSegment([t]),
                            metadata: {
                                width: t.width,
                                height: t.height
                            }
                        }, m && (i = Math.min(i, c[0].pts - v * n), l = Math.min(l, c[0].dts - v * n), this.observer.trigger(a.default
                            .INIT_PTS_FOUND, {
                                initPTS: i
                            }))
                    }
                    Object.keys(p).length ? (u.trigger(a.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, m && (this._initPTS =
                        i, this._initDTS = l)) : u.trigger(a.default.ERROR, {
                        type: o.ErrorTypes.MEDIA_ERROR,
                        details: o.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "no audio/video samples found"
                    })
                }, e.prototype.remuxVideo = function(e, t, n, i, l) {
                    var u, d, c, f, h, p, g, m = 8,
                        v = e.timescale,
                        y = e.samples,
                        _ = [],
                        b = y.length,
                        E = this._PTSNormalize,
                        T = this._initPTS,
                        S = this.nextAvcDts,
                        w = this.isSafari;
                    if (0 !== b) {
                        w && (n |= y.length && S && (l && Math.abs(t - S / v) < .1 || Math.abs(y[0].pts - S - T) < v / 5)), n || (S =
                            t * v), y.forEach((function(e) {
                            e.pts = E(e.pts - T, S), e.dts = E(e.dts - T, S)
                        })), y.sort((function(e, t) {
                            return e.dts - t.dts || e.pts - t.pts || e.id - t.id
                        }));
                        var A = y.reduce((function(e, t) {
                            return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                        }), 0);
                        if (A < 0) {
                            s.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(A / 90) +
                                " ms to overcome this issue");
                            for (var R = 0; R < y.length; R++) y[R].dts += A
                        }
                        var C = y[0];
                        h = Math.max(C.dts, 0), f = Math.max(C.pts, 0);
                        var I = Math.round((h - S) / 90);
                        n && I && (I > 1 ? s.logger.log("AVC:" + I + " ms hole between fragments detected,filling it") : I < -1 && s.logger
                            .log("AVC:" + -I + " ms overlapping between fragments detected"), y[0].dts = h = S, f = Math.max(f - I, S),
                            y[0].pts = f, s.logger.log("Video/PTS/DTS adjusted: " + Math.round(f / 90) + "/" + Math.round(h / 90) +
                                ",delta:" + I + " ms")), C = y[y.length - 1], g = Math.max(C.dts, 0), p = Math.max(C.pts, 0, g), w && (u =
                            Math.round((g - h) / (y.length - 1)));
                        var D = 0,
                            x = 0;
                        for (R = 0; R < b; R++) {
                            for (var M = y[R], L = M.units, O = L.length, k = 0, P = 0; P < O; P++) k += L[P].data.length;
                            x += k, D += O, M.length = k, M.dts = w ? h + R * u : Math.max(M.dts, h), M.pts = Math.max(M.pts, M.dts)
                        }
                        var N = x + 4 * D + 8;
                        try {
                            d = new Uint8Array(N)
                        } catch (e) {
                            return void this.observer.trigger(a.default.ERROR, {
                                type: o.ErrorTypes.MUX_ERROR,
                                details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: N,
                                reason: "fail allocating video mdat " + N
                            })
                        }
                        var F = new DataView(d.buffer);
                        for (F.setUint32(0, N), d.set(r.default.types.mdat, 4), R = 0; R < b; R++) {
                            var B = y[R],
                                U = B.units,
                                j = 0,
                                G = void 0;
                            for (P = 0, O = U.length; P < O; P++) {
                                var H = U[P],
                                    z = H.data,
                                    q = H.data.byteLength;
                                F.setUint32(m, q), d.set(z, m += 4), m += q, j += 4 + q
                            }
                            if (w) G = Math.max(0, u * Math.round((B.pts - B.dts) / u));
                            else {
                                if (R < b - 1) u = y[R + 1].dts - B.dts;
                                else {
                                    var Y = this.config,
                                        V = B.dts - y[R > 0 ? R - 1 : R].dts;
                                    if (Y.stretchShortVideoTrack) {
                                        var K = Math.floor(Y.maxBufferHole * v),
                                            W = (i ? f + i * v : this.nextAudioPts) - B.pts;
                                        W > K ? ((u = W - V) < 0 && (u = V), s.logger.log("It is approximately " + W / 90 +
                                            " ms to the next segment; using duration " + u / 90 + " ms for the last video frame.")) : u = V
                                    } else u = V
                                }
                                G = Math.round(B.pts - B.dts)
                            }
                            _.push({
                                size: j,
                                duration: u,
                                cts: G,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: B.key ? 2 : 1,
                                    isNonSync: B.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = g + u;
                        var X = e.dropped;
                        if (e.len = 0, e.nbNalu = 0, e.dropped = 0, _.length && navigator.userAgent.toLowerCase().indexOf("chrome") >
                            -1) {
                            var Q = _[0].flags;
                            Q.dependsOn = 2, Q.isNonSync = 0
                        }
                        e.samples = _, c = r.default.moof(e.sequenceNumber++, h, e), e.samples = [];
                        var J = {
                            data1: c,
                            data2: d,
                            startPTS: f / v,
                            endPTS: (p + u) / v,
                            startDTS: h / v,
                            endDTS: this.nextAvcDts / v,
                            type: "video",
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: _.length,
                            dropped: X
                        };
                        return this.observer.trigger(a.default.FRAG_PARSING_DATA, J), J
                    }
                }, e.prototype.remuxAudio = function(e, t, n, l) {
                    var u, d, c, f, h, p, g, m = e.inputTimeScale,
                        v = m / e.timescale,
                        y = (e.isAAC ? 1024 : 1152) * v,
                        _ = this._PTSNormalize,
                        b = this._initPTS,
                        E = !e.isAAC && this.typeSupported.mpeg,
                        T = e.samples,
                        S = [],
                        w = this.nextAudioPts;
                    if (n |= T.length && w && (l && Math.abs(t - w / m) < .1 || Math.abs(T[0].pts - w - b) < 20 * y), T.forEach((
                            function(e) {
                                e.pts = e.dts = _(e.pts - b, t * m)
                            })), 0 !== (T = T.filter((function(e) {
                            return e.pts >= 0
                        }))).length) {
                        if (n || (w = l ? t * m : T[0].pts), e.isAAC)
                            for (var A = this.config.maxAudioFramesDrift, R = 0, C = w; R < T.length;) {
                                var I, D = T[R];
                                I = (F = D.pts) - C;
                                var x = Math.abs(1e3 * I / m);
                                if (I <= -A * y) s.logger.warn("Dropping 1 audio frame @ " + (C / m).toFixed(3) + "s due to " + Math.round(
                                    x) + " ms overlap."), T.splice(R, 1), e.len -= D.unit.length;
                                else if (I >= A * y && x < 1e4 && C) {
                                    var M = Math.round(I / y);
                                    s.logger.warn("Injecting " + M + " audio frame @ " + (C / m).toFixed(3) + "s due to " + Math.round(1e3 * I /
                                        m) + " ms gap.");
                                    for (var L = 0; L < M; L++) {
                                        var O = Math.max(C, 0);
                                        (c = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log(
                                            "Unable to get silent frame for given audio codec; duplicating last frame instead."), c = D.unit.subarray()),
                                        T.splice(R, 0, {
                                            unit: c,
                                            pts: O,
                                            dts: O
                                        }), e.len += c.length, C += y, R++
                                    }
                                    D.pts = D.dts = C, C += y, R++
                                } else Math.abs(I), D.pts = D.dts = C, C += y, R++
                            }
                        L = 0;
                        for (var k = T.length; L < k; L++) {
                            var P = T[L],
                                N = P.unit,
                                F = P.pts;
                            if (void 0 !== g) d.duration = Math.round((F - g) / v);
                            else {
                                var B = Math.round(1e3 * (F - w) / m),
                                    U = 0;
                                if (n && e.isAAC && B) {
                                    if (B > 0 && B < 1e4) U = Math.round((F - w) / y), s.logger.log(B +
                                        " ms hole between AAC samples detected,filling it"), U > 0 && ((c = i.default.getSilentFrame(e.manifestCodec ||
                                        e.codec, e.channelCount)) || (c = N.subarray()), e.len += U * c.length);
                                    else if (B < -12) {
                                        s.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (w / m).toFixed(3) + "s/" + (F / m).toFixed(
                                            3) + "s/" + -B + "ms"), e.len -= N.byteLength;
                                        continue
                                    }
                                    F = w
                                }
                                if (p = F, !(e.len > 0)) return;
                                var j = E ? e.len : e.len + 8;
                                u = E ? 0 : 8;
                                try {
                                    f = new Uint8Array(j)
                                } catch (e) {
                                    return void this.observer.trigger(a.default.ERROR, {
                                        type: o.ErrorTypes.MUX_ERROR,
                                        details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: j,
                                        reason: "fail allocating audio mdat " + j
                                    })
                                }
                                for (E || (new DataView(f.buffer).setUint32(0, j), f.set(r.default.types.mdat, 4)), R = 0; R < U; R++)(c =
                                        i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log(
                                        "Unable to get silent frame for given audio codec; duplicating this frame instead."), c = N.subarray()),
                                    f.set(c, u), u += c.byteLength, S.push(d = {
                                        size: c.byteLength,
                                        cts: 0,
                                        duration: 1024,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    })
                            }
                            f.set(N, u);
                            var G = N.byteLength;
                            u += G, S.push(d = {
                                size: G,
                                cts: 0,
                                duration: 0,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            }), g = F
                        }
                        var H = 0,
                            z = S.length;
                        if (z >= 2 && (d.duration = H = S[z - 2].duration), z) {
                            this.nextAudioPts = w = g + v * H, e.len = 0, e.samples = S, h = E ? new Uint8Array : r.default.moof(e.sequenceNumber++,
                                p / v, e), e.samples = [];
                            var q = p / m,
                                Y = w / m,
                                V = {
                                    data1: h,
                                    data2: f,
                                    startPTS: q,
                                    endPTS: Y,
                                    startDTS: q,
                                    endDTS: Y,
                                    type: "audio",
                                    hasAudio: !0,
                                    hasVideo: !1,
                                    nb: z
                                };
                            return this.observer.trigger(a.default.FRAG_PARSING_DATA, V), V
                        }
                        return null
                    }
                }, e.prototype.remuxEmptyAudio = function(e, t, n, r) {
                    var a = e.inputTimeScale,
                        o = this.nextAudioPts,
                        l = (void 0 !== o ? o : r.startDTS * a) + this._initDTS,
                        u = a / (e.samplerate ? e.samplerate : a) * 1024,
                        d = Math.ceil((r.endDTS * a + this._initDTS - l) / u),
                        c = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                    if (s.logger.warn("remux empty Audio"), c) {
                        for (var f = [], h = 0; h < d; h++) {
                            var p = l + h * u;
                            f.push({
                                unit: c,
                                pts: p,
                                dts: p
                            }), e.len += c.length
                        }
                        e.samples = f, this.remuxAudio(e, t, n)
                    } else s.logger.trace(
                        "Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                }, e.prototype.remuxID3 = function(e) {
                    var t, n = e.samples.length,
                        i = e.inputTimeScale,
                        r = this._initPTS,
                        o = this._initDTS;
                    if (n) {
                        for (var s = 0; s < n; s++)(t = e.samples[s]).pts = (t.pts - r) / i, t.dts = (t.dts - o) / i;
                        this.observer.trigger(a.default.FRAG_PARSING_METADATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = []
                }, e.prototype.remuxText = function(e) {
                    e.samples.sort((function(e, t) {
                        return e.pts - t.pts
                    }));
                    var t, n = e.samples.length,
                        i = e.inputTimeScale,
                        r = this._initPTS;
                    if (n) {
                        for (var o = 0; o < n; o++)(t = e.samples[o]).pts = (t.pts - r) / i;
                        this.observer.trigger(a.default.FRAG_PARSING_USERDATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = []
                }, e.prototype._PTSNormalize = function(e, t) {
                    var n;
                    if (void 0 === t) return e;
                    for (n = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += n;
                    return e
                }, e
            }();
        t.default = l
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ErrorTypes = {
            NETWORK_ERROR: "networkError",
            MEDIA_ERROR: "mediaError",
            KEY_SYSTEM_ERROR: "keySystemError",
            MUX_ERROR: "muxError",
            OTHER_ERROR: "otherError"
        }, t.ErrorDetails = {
            KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
            KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
            KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
            KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
            MANIFEST_LOAD_ERROR: "manifestLoadError",
            MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
            MANIFEST_PARSING_ERROR: "manifestParsingError",
            MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
            LEVEL_LOAD_ERROR: "levelLoadError",
            LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
            LEVEL_SWITCH_ERROR: "levelSwitchError",
            AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
            AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
            FRAG_LOAD_ERROR: "fragLoadError",
            FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
            FRAG_DECRYPT_ERROR: "fragDecryptError",
            FRAG_PARSING_ERROR: "fragParsingError",
            REMUX_ALLOC_ERROR: "remuxAllocError",
            KEY_LOAD_ERROR: "keyLoadError",
            KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
            BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
            BUFFER_APPEND_ERROR: "bufferAppendError",
            BUFFER_APPENDING_ERROR: "bufferAppendingError",
            BUFFER_STALLED_ERROR: "bufferStalledError",
            BUFFER_FULL_ERROR: "bufferFullError",
            BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
            BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
            INTERNAL_EXCEPTION: "internalException"
        }
    },
    49: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Math.pow(2, 32) - 1,
            r = function() {
                function e() {}
                return e.init = function() {
                    var t;
                    for (t in e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        }) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(
                        3)]);
                    var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86,
                            105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0
                        ]),
                        i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111,
                            117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0
                        ]);
                    e.HDLR_TYPES = {
                        video: n,
                        audio: i
                    };
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array(
                        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array(
                        [0, 0, 0, 0, 0, 0, 0, 1]);
                    var o = new Uint8Array([105, 115, 111, 109]),
                        s = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    e.FTYP = e.box(e.types.ftyp, o, l, o, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, r))
                }, e.box = function(e) {
                    for (var t, n = Array.prototype.slice.call(arguments, 1), i = 8, r = n.length, a = r; r--;) i += n[r].byteLength;
                    for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(
                            e, 4), r = 0, i = 8; r < a; r++) t.set(n[r], i), i += n[r].byteLength;
                    return t
                }, e.hdlr = function(t) {
                    return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                }, e.mdat = function(t) {
                    return e.box(e.types.mdat, t)
                }, e.mdhd = function(t, n) {
                    n *= t;
                    var r = Math.floor(n / (i + 1)),
                        a = Math.floor(n % (i + 1));
                    return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 &
                        255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24, a >> 16 &
                        255, a >> 8 & 255, 255 & a, 85, 196, 0, 0
                    ]))
                }, e.mdia = function(t) {
                    return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                }, e.mfhd = function(t) {
                    return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                }, e.minf = function(t) {
                    return e.box(e.types.minf, "audio" === t.type ? e.box(e.types.smhd, e.SMHD) : e.box(e.types.vmhd, e.VMHD), e.DINF,
                        e.stbl(t))
                }, e.moof = function(t, n, i) {
                    return e.box(e.types.moof, e.mfhd(t), e.traf(i, n))
                }, e.moov = function(t) {
                    for (var n = t.length, i = []; n--;) i[n] = e.trak(t[n]);
                    return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
                }, e.mvex = function(t) {
                    for (var n = t.length, i = []; n--;) i[n] = e.trex(t[n]);
                    return e.box.apply(null, [e.types.mvex].concat(i))
                }, e.mvhd = function(t, n) {
                    n *= t;
                    var r = Math.floor(n / (i + 1)),
                        a = Math.floor(n % (i + 1)),
                        o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255,
                            t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24, a >> 16 & 255, a >> 8 & 255,
                            255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255
                        ]);
                    return e.box(e.types.mvhd, o)
                }, e.sdtp = function(t) {
                    var n, i, r = t.samples || [],
                        a = new Uint8Array(4 + r.length);
                    for (i = 0; i < r.length; i++) a[i + 4] = (n = r[i].flags).dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
                    return e.box(e.types.sdtp, a)
                }, e.stbl = function(t) {
                    return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz,
                        e.STSZ), e.box(e.types.stco, e.STCO))
                }, e.avc1 = function(t) {
                    var n, i, r, a = [],
                        o = [];
                    for (n = 0; n < t.sps.length; n++) r = (i = t.sps[n]).byteLength, a.push(r >>> 8 & 255), a.push(255 & r), a =
                        a.concat(Array.prototype.slice.call(i));
                    for (n = 0; n < t.pps.length; n++) r = (i = t.pps[n]).byteLength, o.push(r >>> 8 & 255), o.push(255 & r), o =
                        o.concat(Array.prototype.slice.call(i));
                    var s = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a).concat([t.pps
                            .length
                        ]).concat(o))),
                        l = t.width,
                        u = t.height,
                        d = t.pixelRatio[0],
                        c = t.pixelRatio[1];
                    return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97,
                        105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 24, 17, 17
                    ]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types
                        .pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, c >> 24, c >> 16 & 255, c >> 8 & 255,
                            255 & c
                        ])))
                }, e.esds = function(e) {
                    var t = e.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat(
                        [t]).concat(e.config).concat([6, 1, 2]))
                }, e.mp4a = function(t) {
                    var n = t.samplerate;
                    return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount,
                        0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0
                    ]), e.box(e.types.esds, e.esds(t)))
                }, e.mp3 = function(t) {
                    var n = t.samplerate;
                    return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount,
                        0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0
                    ]))
                }, e.stsd = function(t) {
                    return e.box(e.types.stsd, e.STSD, "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.mp4a(t) : e.mp3(t) :
                        e.avc1(t))
                }, e.tkhd = function(t) {
                    var n = t.id,
                        r = t.duration * t.timescale,
                        a = t.width,
                        o = t.height,
                        s = Math.floor(r / (i + 1)),
                        l = Math.floor(r % (i + 1));
                    return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, n >> 24 &
                        255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, l >>
                        24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255,
                        255 & a, 0, 0, o >> 8 & 255, 255 & o, 0, 0
                    ]))
                }, e.traf = function(t, n) {
                    var r = e.sdtp(t),
                        a = t.id,
                        o = Math.floor(n / (i + 1)),
                        s = Math.floor(n % (i + 1));
                    return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 &
                        255, 255 & a
                    ])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24,
                        s >> 16 & 255, s >> 8 & 255, 255 & s
                    ])), e.trun(t, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
                }, e.trak = function(t) {
                    return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                }, e.trex = function(t) {
                    var n = t.id;
                    return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0,
                        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1
                    ]))
                }, e.trun = function(t, n) {
                    var i, r, a, o, s, l, u = t.samples || [],
                        d = u.length,
                        c = 12 + 16 * d,
                        f = new Uint8Array(c);
                    for (f.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, (n += 8 + c) >>> 24 & 255, n >>>
                            16 & 255, n >>> 8 & 255, 255 & n
                        ], 0), i = 0; i < d; i++) a = (r = u[i]).duration, f.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 &
                        a, (o = r.size) >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, (s = r.flags).isLeading << 2 | s.dependsOn,
                        s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 &
                        s.degradPrio, (l = r.cts) >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l
                    ], 12 + 16 * i);
                    return e.box(e.types.trun, f)
                }, e.initSegment = function(t) {
                    e.types || e.init();
                    var n, i = e.moov(t);
                    return (n = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP), n.set(i, e.FTYP.byteLength), n
                }, e
            }();
        t.default = r
    },
    48: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.getSilentFrame = function(e, t) {
                switch (e) {
                    case "mp4a.40.2":
                        if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33,
                            144, 2, 56
                        ]);
                        if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33,
                            144, 2, 0, 178, 0, 32, 8, 224
                        ]);
                        break;
                    default:
                        if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10,
                            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
                        ]);
                        if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241,
                            161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
                        ]);
                        if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241,
                            161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                            90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
                        ])
                }
                return null
            }, e
        }();
        t.default = i
    },
    46: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(10),
            r = n(0),
            a = n(23),
            o = function() {
                function e(e, t, n) {
                    this.observer = e, this.config = n, this.remuxer = t
                }
                return e.prototype.resetInitSegment = function(e, t, n, i) {
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: i,
                        inputTimeScale: 9e4
                    }
                }, e.prototype.resetTimeStamp = function() {}, e.probe = function(e) {
                    var t, n, o = i.default.getID3Data(e, 0);
                    if (o && void 0 !== i.default.getTimeStamp(o))
                        for (t = o.length, n = Math.min(e.length - 1, t + 100); t < n; t++)
                            if (a.default.probe(e, t)) return r.logger.log("MPEG Audio sync word found !"), !0;
                    return !1
                }, e.prototype.append = function(e, t, n, r) {
                    for (var o = i.default.getID3Data(e, 0), s = i.default.getTimeStamp(o), l = s ? 90 * s : 9e4 * t, u = o.length,
                            d = e.length, c = 0, f = 0, h = this._audioTrack, p = [{
                                pts: l,
                                dts: l,
                                data: o
                            }]; u < d;)
                        if (a.default.isHeader(e, u)) {
                            var g = a.default.appendFrame(h, e, u, l, c);
                            if (!g) break;
                            u += g.length, f = g.sample.pts, c++
                        } else i.default.isHeader(e, u) ? (o = i.default.getID3Data(e, u), p.push({
                            pts: f,
                            dts: f,
                            data: o
                        }), u += o.length) : u++;
                    this.remuxer.remux(h, {
                        samples: []
                    }, {
                        samples: p,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, t, n, r)
                }, e.prototype.destroy = function() {}, e
            }();
        t.default = o
    },
    23: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112,
                128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56,
                64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160
            ],
            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            SamplesCoefficients: [
                [0, 72, 144, 12],
                [0, 0, 0, 0],
                [0, 72, 144, 12],
                [0, 144, 144, 12]
            ],
            BytesInSlot: [0, 1, 1, 4],
            appendFrame: function(e, t, n, i, r) {
                if (!(n + 24 > t.length)) {
                    var a = this.parseHeader(t, n);
                    if (a && n + a.frameLength <= t.length) {
                        var o = i + r * (9e4 * a.samplesPerFrame / a.sampleRate),
                            s = {
                                unit: t.subarray(n, n + a.frameLength),
                                pts: o,
                                dts: o
                            };
                        return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(s), e.len +=
                            a.frameLength, {
                                sample: s,
                                length: a.frameLength
                            }
                    }
                }
            },
            parseHeader: function(e, t) {
                var n = e[t + 1] >> 3 & 3,
                    r = e[t + 1] >> 1 & 3,
                    a = e[t + 2] >> 4 & 15,
                    o = e[t + 2] >> 2 & 3;
                if (1 !== n && 0 !== a && 15 !== a && 3 !== o) {
                    var s = i.SamplingRateMap[3 * (3 === n ? 0 : 2 === n ? 1 : 2) + o],
                        l = i.SamplesCoefficients[n][r],
                        u = i.BytesInSlot[r],
                        d = 8 * l * u;
                    return {
                        sampleRate: s,
                        channelCount: e[t + 3] >> 6 == 3 ? 1 : 2,
                        frameLength: parseInt(l * (1e3 * i.BitratesMap[14 * (3 === n ? 3 - r : 3 === r ? 3 : 4) + a - 1]) / s + (e[t +
                            2] >> 1 & 1), 10) * u,
                        samplesPerFrame: d
                    }
                }
            },
            isHeaderPattern: function(e, t) {
                return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
            },
            isHeader: function(e, t) {
                return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
            },
            probe: function(e, t) {
                if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                    var n = this.parseHeader(e, t),
                        i = 4;
                    n && n.frameLength && (i = n.frameLength);
                    var r = t + i;
                    if (r === e.length || r + 1 < e.length && this.isHeaderPattern(e, r)) return !0
                }
                return !1
            }
        };
        t.default = i
    },
    10: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.isHeader = function(e, t) {
                return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] <
                    255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            }, e.isFooter = function(e, t) {
                return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] <
                    255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            }, e.getID3Data = function(t, n) {
                for (var i = n, r = 0; e.isHeader(t, n);) r += 10, r += e._readSize(t, n + 6), e.isFooter(t, n + 10) && (r +=
                    10), n += r;
                if (r > 0) return t.subarray(i, i + r)
            }, e._readSize = function(e, t) {
                var n = 0;
                return n = (127 & e[t]) << 21, n |= (127 & e[t + 1]) << 14, (n |= (127 & e[t + 2]) << 7) | 127 & e[t + 3]
            }, e.getTimeStamp = function(t) {
                for (var n = e.getID3Frames(t), i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (e.isTimeStampFrame(r)) return e._readTimeStamp(r)
                }
            }, e.isTimeStampFrame = function(e) {
                return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
            }, e._getFrameData = function(t) {
                var n = String.fromCharCode(t[0], t[1], t[2], t[3]),
                    i = e._readSize(t, 4);
                return {
                    type: n,
                    size: i,
                    data: t.subarray(10, 10 + i)
                }
            }, e.getID3Frames = function(t) {
                for (var n = 0, i = []; e.isHeader(t, n);) {
                    for (var r = e._readSize(t, n + 6), a = (n += 10) + r; n + 8 < a;) {
                        var o = e._getFrameData(t.subarray(n)),
                            s = e._decodeFrame(o);
                        s && i.push(s), n += o.size + 10
                    }
                    e.isFooter(t, n) && (n += 10)
                }
                return i
            }, e._decodeFrame = function(t) {
                return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[
                    0] ? e._decodeURLFrame(t) : void 0
            }, e._readTimeStamp = function(e) {
                if (8 === e.data.byteLength) {
                    var t = new Uint8Array(e.data),
                        n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                    return n /= 45, 1 & t[3] && (n += 47721858.84), Math.round(n)
                }
            }, e._decodePrivFrame = function(t) {
                if (!(t.size < 2)) {
                    var n = e._utf8ArrayToStr(t.data, !0),
                        i = new Uint8Array(t.data.subarray(n.length + 1));
                    return {
                        key: t.type,
                        info: n,
                        data: i.buffer
                    }
                }
            }, e._decodeTextFrame = function(t) {
                if (!(t.size < 2)) {
                    if ("TXXX" === t.type) {
                        var n = 1,
                            i = e._utf8ArrayToStr(t.data.subarray(n)),
                            r = e._utf8ArrayToStr(t.data.subarray(n += i.length + 1));
                        return {
                            key: t.type,
                            info: i,
                            data: r
                        }
                    }
                    var a = e._utf8ArrayToStr(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: a
                    }
                }
            }, e._decodeURLFrame = function(t) {
                if ("WXXX" === t.type) {
                    if (t.size < 2) return;
                    var n = 1,
                        i = e._utf8ArrayToStr(t.data.subarray(n)),
                        r = e._utf8ArrayToStr(t.data.subarray(n += i.length + 1));
                    return {
                        key: t.type,
                        info: i,
                        data: r
                    }
                }
                var a = e._utf8ArrayToStr(t.data);
                return {
                    key: t.type,
                    data: a
                }
            }, e._utf8ArrayToStr = function(e, t) {
                void 0 === t && (t = !1);
                for (var n, i, r, a = e.length, o = "", s = 0; s < a;) {
                    if (0 === (n = e[s++]) && t) return o;
                    if (0 !== n && 3 !== n) switch (n >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            o += String.fromCharCode(n);
                            break;
                        case 12:
                        case 13:
                            i = e[s++], o += String.fromCharCode((31 & n) << 6 | 63 & i);
                            break;
                        case 14:
                            i = e[s++], r = e[s++], o += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & r) << 0)
                    }
                }
                return o
            }, e
        }();
        t.utf8ArrayToStr = i._utf8ArrayToStr, t.default = i
    },
    43: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(22),
            r = n(23),
            a = n(1),
            o = n(44),
            s = n(45),
            l = n(0),
            u = n(3),
            d = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            },
            c = function() {
                function e(e, t, n, i) {
                    this.observer = e, this.config = n, this.typeSupported = i, this.remuxer = t, this.sampleAes = null
                }
                return e.prototype.setDecryptData = function(e) {
                    this.sampleAes = null != e && null != e.key && "SAMPLE-AES" === e.method ? new s.default(this.observer, this.config,
                        e, this.discardEPB) : null
                }, e.probe = function(t) {
                    var n = e._syncOffset(t);
                    return !(n < 0 || (n && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + n +
                        ", junk ahead ?"), 0))
                }, e._syncOffset = function(e) {
                    for (var t = Math.min(1e3, e.length - 564), n = 0; n < t;) {
                        if (71 === e[n] && 71 === e[n + 188] && 71 === e[n + 376]) return n;
                        n++
                    }
                    return -1
                }, e.createTrack = function(e, t) {
                    return {
                        container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                        type: e,
                        id: d[e],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        len: 0,
                        dropped: "video" === e ? 0 : void 0,
                        isAAC: "audio" === e || void 0,
                        duration: "audio" === e ? t : void 0
                    }
                }, e.prototype.resetInitSegment = function(t, n, i, r) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", r), this._audioTrack = e.createTrack(
                            "audio", r), this._id3Track = e.createTrack("id3", r), this._txtTrack = e.createTrack("text", r), this.aacOverFlow =
                        null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = n, this.videoCodec = i, this._duration =
                        r
                }, e.prototype.resetTimeStamp = function() {}, e.prototype.append = function(t, n, i, r) {
                    var o, s, d, c, f, h = t.length,
                        p = !1;
                    this.contiguous = i;
                    var g = this.pmtParsed,
                        m = this._avcTrack,
                        v = this._audioTrack,
                        y = this._id3Track,
                        _ = m.pid,
                        b = v.pid,
                        E = y.pid,
                        T = this._pmtId,
                        S = m.pesData,
                        w = v.pesData,
                        A = y.pesData,
                        R = this._parsePAT,
                        C = this._parsePMT,
                        I = this._parsePES,
                        D = this._parseAVCPES.bind(this),
                        x = this._parseAACPES.bind(this),
                        M = this._parseMPEGPES.bind(this),
                        L = this._parseID3PES.bind(this),
                        O = e._syncOffset(t);
                    for (h -= (h + O) % 188, o = O; o < h; o += 188)
                        if (71 === t[o]) {
                            if (s = !!(64 & t[o + 1]), d = ((31 & t[o + 1]) << 8) + t[o + 2], (48 & t[o + 3]) >> 4 > 1) {
                                if ((c = o + 5 + t[o + 4]) === o + 188) continue
                            } else c = o + 4;
                            switch (d) {
                                case _:
                                    s && (S && (f = I(S)) && void 0 !== f.pts && D(f, !1), S = {
                                        data: [],
                                        size: 0
                                    }), S && (S.data.push(t.subarray(c, o + 188)), S.size += o + 188 - c);
                                    break;
                                case b:
                                    s && (w && (f = I(w)) && void 0 !== f.pts && (v.isAAC ? x(f) : M(f)), w = {
                                        data: [],
                                        size: 0
                                    }), w && (w.data.push(t.subarray(c, o + 188)), w.size += o + 188 - c);
                                    break;
                                case E:
                                    s && (A && (f = I(A)) && void 0 !== f.pts && L(f), A = {
                                        data: [],
                                        size: 0
                                    }), A && (A.data.push(t.subarray(c, o + 188)), A.size += o + 188 - c);
                                    break;
                                case 0:
                                    s && (c += t[c] + 1), T = this._pmtId = R(t, c);
                                    break;
                                case T:
                                    s && (c += t[c] + 1);
                                    var k = C(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                    (_ = k.avc) > 0 && (m.pid = _), (b = k.audio) > 0 && (v.pid = b, v.isAAC = k.isAAC), (E = k.id3) > 0 && (y
                                            .pid = E), p && !g && (l.logger.log("reparse from beginning"), p = !1, o = O - 188), g = this.pmtParsed = !
                                        0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    p = !0
                            }
                        } else this.observer.trigger(a.default.ERROR, {
                            type: u.ErrorTypes.MEDIA_ERROR,
                            details: u.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                    S && (f = I(S)) && void 0 !== f.pts ? (D(f, !0), m.pesData = null) : m.pesData = S, w && (f = I(w)) && void 0 !==
                        f.pts ? (v.isAAC ? x(f) : M(f), v.pesData = null) : (w && w.size && l.logger.log(
                            "last AAC PES packet truncated,might overlap between fragments"), v.pesData = w), A && (f = I(A)) && void 0 !==
                        f.pts ? (L(f), y.pesData = null) : y.pesData = A, null == this.sampleAes ? this.remuxer.remux(v, m, y, this._txtTrack,
                            n, i, r) : this.decryptAndRemux(v, m, y, this._txtTrack, n, i, r)
                }, e.prototype.decryptAndRemux = function(e, t, n, i, r, a, o) {
                    if (e.samples && e.isAAC) {
                        var s = this;
                        this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
                            s.decryptAndRemuxAvc(e, t, n, i, r, a, o)
                        }))
                    } else this.decryptAndRemuxAvc(e, t, n, i, r, a, o)
                }, e.prototype.decryptAndRemuxAvc = function(e, t, n, i, r, a, o) {
                    if (t.samples) {
                        var s = this;
                        this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
                            s.remuxer.remux(e, t, n, i, r, a, o)
                        }))
                    } else this.remuxer.remux(e, t, n, i, r, a, o)
                }, e.prototype.destroy = function() {
                    this._initPTS = this._initDTS = void 0, this._duration = 0
                }, e.prototype._parsePAT = function(e, t) {
                    return (31 & e[t + 10]) << 8 | e[t + 11]
                }, e.prototype._parsePMT = function(e, t, n, i) {
                    var r, a, o = {
                        audio: -1,
                        avc: -1,
                        id3: -1,
                        isAAC: !0
                    };
                    for (r = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < r;) {
                        switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                            case 207:
                                if (!i) {
                                    l.logger.log("unkown stream type:" + e[t]);
                                    break
                                }
                            case 15:
                                -1 === o.audio && (o.audio = a);
                                break;
                            case 21:
                                -1 === o.id3 && (o.id3 = a);
                                break;
                            case 219:
                                if (!i) {
                                    l.logger.log("unkown stream type:" + e[t]);
                                    break
                                }
                            case 27:
                                -1 === o.avc && (o.avc = a);
                                break;
                            case 3:
                            case 4:
                                n ? -1 === o.audio && (o.audio = a, o.isAAC = !1) : l.logger.log(
                                    "MPEG audio found, not supported in this browser for now");
                                break;
                            case 36:
                                l.logger.warn("HEVC stream type found, not supported for now");
                                break;
                            default:
                                l.logger.log("unkown stream type:" + e[t])
                        }
                        t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                    }
                    return o
                }, e.prototype._parsePES = function(e) {
                    var t, n, i, r, a, o, s, u, d = 0,
                        c = e.data;
                    if (!e || 0 === e.size) return null;
                    for (; c[0].length < 19 && c.length > 1;) {
                        var f = new Uint8Array(c[0].length + c[1].length);
                        f.set(c[0]), f.set(c[1], c[0].length), c[0] = f, c.splice(1, 1)
                    }
                    if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
                        if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
                        192 & (n = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (
                            255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & n ? ((s = 536870912 * (14 & t[14]) +
                                4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 &&
                            (s -= 8589934592), o - s > 54e5 && (l.logger.warn(Math.round((o - s) / 9e4) +
                                "s delta between PTS and DTS, align them"), o = s)) : s = o), u = (r = t[8]) + 9, e.size -= u, a = new Uint8Array(
                            e.size);
                        for (var h = 0, p = c.length; h < p; h++) {
                            var g = (t = c[h]).byteLength;
                            if (u) {
                                if (u > g) {
                                    u -= g;
                                    continue
                                }
                                t = t.subarray(u), g -= u, u = 0
                            }
                            a.set(t, d), d += g
                        }
                        return i && (i -= r + 3), {
                            data: a,
                            pts: o,
                            dts: s,
                            len: i
                        }
                    }
                    return null
                }, e.prototype.pushAccesUnit = function(e, t) {
                    if (e.units.length && e.frame) {
                        var n = t.samples,
                            i = n.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, n.push(
                            e)) : t.dropped++
                    }
                    e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                }, e.prototype._parseAVCPES = function(e, t) {
                    var n, i, r, a = this,
                        s = this._avcTrack,
                        l = this._parseAVCNALu(e.data),
                        u = this.avcSample,
                        d = !1,
                        c = this.pushAccesUnit.bind(this),
                        f = function(e, t, n, i) {
                            return {
                                key: e,
                                pts: t,
                                dts: n,
                                units: [],
                                debug: i
                            }
                        };
                    e.data = null, u && l.length && !s.audFound && (c(u, s), u = this.avcSample = f(!1, e.pts, e.dts, "")), l.forEach(
                        (function(t) {
                            switch (t.type) {
                                case 1:
                                    i = !0, u || (u = a.avcSample = f(!0, e.pts, e.dts, "")), u.frame = !0;
                                    var l = t.data;
                                    if (d && l.length > 4) {
                                        var h = new o.default(l).readSliceType();
                                        2 !== h && 4 !== h && 7 !== h && 9 !== h || (u.key = !0)
                                    }
                                    break;
                                case 5:
                                    i = !0, u || (u = a.avcSample = f(!0, e.pts, e.dts, "")), u.key = !0, u.frame = !0;
                                    break;
                                case 6:
                                    i = !0, (n = new o.default(a.discardEPB(t.data))).readUByte();
                                    for (var p = 0, g = 0, m = !1, v = 0; !m && n.bytesAvailable > 1;) {
                                        p = 0;
                                        do {
                                            p += v = n.readUByte()
                                        } while (255 === v);
                                        g = 0;
                                        do {
                                            g += v = n.readUByte()
                                        } while (255 === v);
                                        if (4 === p && 0 !== n.bytesAvailable) {
                                            if (m = !0, 181 === n.readUByte() && 49 === n.readUShort() && 1195456820 === n.readUInt() && 3 === n.readUByte()) {
                                                var y = n.readUByte(),
                                                    _ = 31 & y,
                                                    b = [y, n.readUByte()];
                                                for (r = 0; r < _; r++) b.push(n.readUByte()), b.push(n.readUByte()), b.push(n.readUByte());
                                                a._insertSampleInOrder(a._txtTrack.samples, {
                                                    type: 3,
                                                    pts: e.pts,
                                                    bytes: b
                                                })
                                            }
                                        } else if (g < n.bytesAvailable)
                                            for (r = 0; r < g; r++) n.readUByte()
                                    }
                                    break;
                                case 7:
                                    if (i = !0, d = !0, !s.sps) {
                                        var E = (n = new o.default(t.data)).readSPS();
                                        s.width = E.width, s.height = E.height, s.pixelRatio = E.pixelRatio, s.sps = [t.data], s.duration = a._duration;
                                        var T = t.data.subarray(1, 4),
                                            S = "avc1.";
                                        for (r = 0; r < 3; r++) {
                                            var w = T[r].toString(16);
                                            w.length < 2 && (w = "0" + w), S += w
                                        }
                                        s.codec = S
                                    }
                                    break;
                                case 8:
                                    i = !0, s.pps || (s.pps = [t.data]);
                                    break;
                                case 9:
                                    i = !1, s.audFound = !0, u && c(u, s), u = a.avcSample = f(!1, e.pts, e.dts, "");
                                    break;
                                case 12:
                                    i = !1;
                                    break;
                                default:
                                    i = !1, u && (u.debug += "unknown NAL " + t.type + " ")
                            }
                            u && i && u.units.push(t)
                        })), t && u && (c(u, s), this.avcSample = null)
                }, e.prototype._insertSampleInOrder = function(e, t) {
                    var n = e.length;
                    if (n > 0) {
                        if (t.pts >= e[n - 1].pts) e.push(t);
                        else
                            for (var i = n - 1; i >= 0; i--)
                                if (t.pts < e[i].pts) {
                                    e.splice(i, 0, t);
                                    break
                                }
                    } else e.push(t)
                }, e.prototype._getLastNalUnit = function() {
                    var e, t = this.avcSample;
                    if (!t || 0 === t.units.length) {
                        var n = this._avcTrack.samples;
                        t = n[n.length - 1]
                    }
                    if (t) {
                        var i = t.units;
                        e = i[i.length - 1]
                    }
                    return e
                }, e.prototype._parseAVCNALu = function(e) {
                    var t, n, i, r, a = 0,
                        o = e.byteLength,
                        s = this._avcTrack,
                        l = s.naluState || 0,
                        u = l,
                        d = [],
                        c = -1;
                    for (-1 === l && (c = 0, r = 31 & e[0], l = 0, a = 1); a < o;)
                        if (t = e[a++], l)
                            if (1 !== l)
                                if (t)
                                    if (1 === t) {
                                        var f, h;
                                        c >= 0 ? (i = {
                                                data: e.subarray(c, a - l - 1),
                                                type: r
                                            }, d.push(i)) : (f = this._getLastNalUnit()) && (u && a <= 4 - u && f.state && (f.data = f.data.subarray(
                                                0, f.data.byteLength - u)), (n = a - l - 1) > 0 && ((h = new Uint8Array(f.data.byteLength + n)).set(f.data,
                                                0), h.set(e.subarray(0, n), f.data.byteLength), f.data = h)), a < o ? (c = a, r = 31 & e[a], l = 0) : l = -
                                            1
                                    } else l = 0;
                    else l = 3;
                    else l = t ? 0 : 2;
                    else l = t ? 0 : 1;
                    return c >= 0 && l >= 0 && (i = {
                        data: e.subarray(c, o),
                        type: r,
                        state: l
                    }, d.push(i)), 0 === d.length && (f = this._getLastNalUnit()) && ((h = new Uint8Array(f.data.byteLength + e.byteLength))
                        .set(f.data, 0), h.set(e, f.data.byteLength), f.data = h), s.naluState = l, d
                }, e.prototype.discardEPB = function(e) {
                    for (var t, n, i = e.byteLength, r = [], a = 1; a < i - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (
                        r.push(a + 2), a += 2) : a++;
                    if (0 === r.length) return e;
                    t = i - r.length, n = new Uint8Array(t);
                    var o = 0;
                    for (a = 0; a < t; o++, a++) o === r[0] && (o++, r.shift()), n[a] = e[o];
                    return n
                }, e.prototype._parseAACPES = function(e) {
                    var t, n, r, o, s, d = this._audioTrack,
                        c = e.data,
                        f = e.pts,
                        h = this.aacOverFlow,
                        p = this.aacLastPTS;
                    if (h) {
                        var g = new Uint8Array(h.byteLength + c.byteLength);
                        g.set(h, 0), g.set(c, h.byteLength), c = g
                    }
                    for (r = 0, s = c.length; r < s - 1 && !i.isHeader(c, r); r++);
                    if (r) {
                        var m = void 0,
                            v = void 0;
                        if (r < s - 1 ? (m = "AAC PES did not start with ADTS header,offset:" + r, v = !1) : (m =
                                "no ADTS header found in AAC PES", v = !0), l.logger.warn("parsing error:" + m), this.observer.trigger(a.default
                                .ERROR, {
                                    type: u.ErrorTypes.MEDIA_ERROR,
                                    details: u.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: v,
                                    reason: m
                                }), v) return
                    }
                    if (i.initTrackConfig(d, this.observer, c, r, this.audioCodec), n = 0, t = i.getFrameDuration(d.samplerate), h &&
                        p) {
                        var y = p + t;
                        Math.abs(y - f) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((y - f) / 90)),
                            f = y)
                    }
                    for (; r < s;)
                        if (i.isHeader(c, r) && r + 5 < s) {
                            var _ = i.appendFrame(d, c, r, f, n);
                            if (!_) break;
                            r += _.length, o = _.sample.pts, n++
                        } else r++;
                    h = r < s ? c.subarray(r, s) : null, this.aacOverFlow = h, this.aacLastPTS = o
                }, e.prototype._parseMPEGPES = function(e) {
                    for (var t = e.data, n = t.length, i = 0, a = 0, o = e.pts; a < n;)
                        if (r.default.isHeader(t, a)) {
                            var s = r.default.appendFrame(this._audioTrack, t, a, o, i);
                            if (!s) break;
                            a += s.length, i++
                        } else a++
                }, e.prototype._parseID3PES = function(e) {
                    this._id3Track.samples.push(e)
                }, e
            }();
        t.default = c
    },
    45: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            r = function() {
                function e(e, t, n, r) {
                    this.decryptdata = n, this.discardEPB = r, this.decrypter = new i.default(e, t, {
                        removePKCS7Padding: !1
                    })
                }
                return e.prototype.decryptBuffer = function(e, t) {
                    this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                }, e.prototype.decryptAacSample = function(e, t, n, i) {
                    var r = e[t].unit,
                        a = r.subarray(16, r.length - r.length % 16),
                        o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                        s = this;
                    this.decryptBuffer(o, (function(a) {
                        a = new Uint8Array(a), r.set(a, 16), i || s.decryptAacSamples(e, t + 1, n)
                    }))
                }, e.prototype.decryptAacSamples = function(e, t, n) {
                    for (;; t++) {
                        if (t >= e.length) return void n();
                        if (!(e[t].unit.length < 32)) {
                            var i = this.decrypter.isSync();
                            if (this.decryptAacSample(e, t, n, i), !i) return
                        }
                    }
                }, e.prototype.getAvcEncryptedData = function(e) {
                    for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, n = new Int8Array(t), i = 0, r = 32; r <= e.length -
                        16; r += 160, i += 16) n.set(e.subarray(r, r + 16), i);
                    return n
                }, e.prototype.getAvcDecryptedUnit = function(e, t) {
                    t = new Uint8Array(t);
                    for (var n = 0, i = 32; i <= e.length - 16; i += 160, n += 16) e.set(t.subarray(n, n + 16), i);
                    return e
                }, e.prototype.decryptAvcSample = function(e, t, n, i, r, a) {
                    var o = this.discardEPB(r.data),
                        s = this.getAvcEncryptedData(o),
                        l = this;
                    this.decryptBuffer(s.buffer, (function(s) {
                        r.data = l.getAvcDecryptedUnit(o, s), a || l.decryptAvcSamples(e, t, n + 1, i)
                    }))
                }, e.prototype.decryptAvcSamples = function(e, t, n, i) {
                    for (;; t++, n = 0) {
                        if (t >= e.length) return void i();
                        for (var r = e[t].units; !(n >= r.length); n++) {
                            var a = r[n];
                            if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                var o = this.decrypter.isSync();
                                if (this.decryptAvcSample(e, t, n, i, a, o), !o) return
                            }
                        }
                    }
                }, e
            }();
        t.default = r
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(39),
            r = n(40),
            a = n(41),
            o = n(3),
            s = n(0),
            l = n(1),
            u = n(6).getSelfScope(),
            d = function() {
                function e(e, t, n) {
                    var i = (void 0 === n ? {} : n).removePKCS7Padding,
                        r = void 0 === i || i;
                    if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = r, r) try {
                        var a = u.crypto;
                        a && (this.subtle = a.subtle || a.webkitSubtle)
                    } catch (e) {}
                    this.disableWebCrypto = !this.subtle
                }
                return e.prototype.isSync = function() {
                    return this.disableWebCrypto && this.config.enableSoftwareAES
                }, e.prototype.decrypt = function(e, t, n, o) {
                    var l = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (s.logger.log("JS AES decrypt"), this.logEnabled = !1);
                        var u = this.decryptor;
                        u || (this.decryptor = u = new a.default), u.expandKey(t), o(u.decrypt(e, 0, n, this.removePKCS7Padding))
                    } else {
                        this.logEnabled && (s.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                        var d = this.subtle;
                        this.key !== t && (this.key = t, this.fastAesKey = new r.default(d, t)), this.fastAesKey.expandKey().then((
                            function(r) {
                                new i.default(d, n).decrypt(e, r).catch((function(i) {
                                    l.onWebCryptoError(i, e, t, n, o)
                                })).then((function(e) {
                                    o(e)
                                }))
                            })).catch((function(i) {
                            l.onWebCryptoError(i, e, t, n, o)
                        }))
                    }
                }, e.prototype.onWebCryptoError = function(e, t, n, i, r) {
                    this.config.enableSoftwareAES ? (s.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !
                        0, this.logEnabled = !0, this.decrypt(t, n, i, r)) : (s.logger.error("decrypting error : " + e.message),
                        this.observer.trigger(l.default.ERROR, {
                            type: o.ErrorTypes.MEDIA_ERROR,
                            details: o.ErrorDetails.FRAG_DECRYPT_ERROR,
                            fatal: !0,
                            reason: e.message
                        }))
                }, e.prototype.destroy = function() {
                    var e = this.decryptor;
                    e && (e.destroy(), this.decryptor = void 0)
                }, e
            }();
        t.default = d
    },
    41: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.byteLength,
                n = t && new DataView(e).getUint8(t - 1);
            return n ? e.slice(0, t - n) : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.removePadding = i;
        var r = function() {
            function e() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256),
                        new Uint32Array(256), new Uint32Array(256)
                    ], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
            }
            return e.prototype.uint8ArrayToUint32Array_ = function(e) {
                for (var t = new DataView(e), n = new Uint32Array(4), i = 0; i < 4; i++) n[i] = t.getUint32(4 * i);
                return n
            }, e.prototype.initTable = function() {
                var e = this.sBox,
                    t = this.invSBox,
                    n = this.subMix,
                    i = n[0],
                    r = n[1],
                    a = n[2],
                    o = n[3],
                    s = this.invSubMix,
                    l = s[0],
                    u = s[1],
                    d = s[2],
                    c = s[3],
                    f = new Uint32Array(256),
                    h = 0,
                    p = 0,
                    g = 0;
                for (g = 0; g < 256; g++) f[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                for (g = 0; g < 256; g++) {
                    var m = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                    e[h] = m = m >>> 8 ^ 255 & m ^ 99, t[m] = h;
                    var v = f[h],
                        y = f[v],
                        _ = f[y],
                        b = 257 * f[m] ^ 16843008 * m;
                    i[h] = b << 24 | b >>> 8, r[h] = b << 16 | b >>> 16, a[h] = b << 8 | b >>> 24, o[h] = b, l[m] = (b = 16843009 *
                            _ ^ 65537 * y ^ 257 * v ^ 16843008 * h) << 24 | b >>> 8, u[m] = b << 16 | b >>> 16, d[m] = b << 8 | b >>>
                        24, c[m] = b, h ? (h = v ^ f[f[f[_ ^ v]]], p ^= f[f[p]]) : h = p = 1
                }
            }, e.prototype.expandKey = function(e) {
                for (var t = this.uint8ArrayToUint32Array_(e), n = !0, i = 0; i < t.length && n;) n = t[i] === this.key[i], i++;
                if (!n) {
                    this.key = t;
                    var r = this.keySize = t.length;
                    if (4 !== r && 6 !== r && 8 !== r) throw new Error("Invalid aes key size=" + r);
                    var a, o, s, l, u = this.ksRows = 4 * (r + 6 + 1),
                        d = this.keySchedule = new Uint32Array(u),
                        c = this.invKeySchedule = new Uint32Array(u),
                        f = this.sBox,
                        h = this.rcon,
                        p = this.invSubMix,
                        g = p[0],
                        m = p[1],
                        v = p[2],
                        y = p[3];
                    for (a = 0; a < u; a++) a < r ? s = d[a] = t[a] : (l = s, a % r == 0 ? (l = f[(l = l << 8 | l >>> 24) >>> 24] <<
                            24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[a / r | 0] << 24) : r > 6 && a %
                        r == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), d[a] = s =
                        (d[a - r] ^ l) >>> 0);
                    for (o = 0; o < u; o++) a = u - o, l = 3 & o ? d[a] : d[a - 4], c[o] = o < 4 || a <= 4 ? l : g[f[l >>> 24]] ^
                        m[f[l >>> 16 & 255]] ^ v[f[l >>> 8 & 255]] ^ y[f[255 & l]], c[o] = c[o] >>> 0
                }
            }, e.prototype.networkToHostOrderSwap = function(e) {
                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
            }, e.prototype.decrypt = function(e, t, n, r) {
                for (var a, o, s, l, u, d, c, f, h, p, g, m, v, y, _ = this.keySize + 6, b = this.invKeySchedule, E = this.invSBox,
                        T = this.invSubMix, S = T[0], w = T[1], A = T[2], R = T[3], C = this.uint8ArrayToUint32Array_(n), I = C[0],
                        D = C[1], x = C[2], M = C[3], L = new Int32Array(e), O = new Int32Array(L.length), k = this.networkToHostOrderSwap; t <
                    L.length;) {
                    for (h = k(L[t]), p = k(L[t + 1]), g = k(L[t + 2]), m = k(L[t + 3]), u = h ^ b[0], d = m ^ b[1], c = g ^ b[2],
                        f = p ^ b[3], v = 4, y = 1; y < _; y++) o = S[d >>> 24] ^ w[c >> 16 & 255] ^ A[f >> 8 & 255] ^ R[255 & u] ^
                        b[v + 1], s = S[c >>> 24] ^ w[f >> 16 & 255] ^ A[u >> 8 & 255] ^ R[255 & d] ^ b[v + 2], l = S[f >>> 24] ^ w[
                            u >> 16 & 255] ^ A[d >> 8 & 255] ^ R[255 & c] ^ b[v + 3], u = a = S[u >>> 24] ^ w[d >> 16 & 255] ^ A[c >> 8 &
                            255] ^ R[255 & f] ^ b[v], d = o, c = s, f = l, v += 4;
                    a = E[u >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & f] ^ b[v], o = E[d >>> 24] <<
                        24 ^ E[c >> 16 & 255] << 16 ^ E[f >> 8 & 255] << 8 ^ E[255 & u] ^ b[v + 1], s = E[c >>> 24] << 24 ^ E[f >>
                            16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & d] ^ b[v + 2], l = E[f >>> 24] << 24 ^ E[u >> 16 & 255] <<
                        16 ^ E[d >> 8 & 255] << 8 ^ E[255 & c] ^ b[v + 3], v += 3, O[t] = k(a ^ I), O[t + 1] = k(l ^ D), O[t + 2] =
                        k(s ^ x), O[t + 3] = k(o ^ M), I = h, D = p, x = g, M = m, t += 4
                }
                return r ? i(O.buffer) : O.buffer
            }, e.prototype.destroy = function() {
                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0,
                    this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon =
                    void 0
            }, e
        }();
        t.default = r
    },
    40: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this.subtle = e, this.key = t
            }
            return e.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"])
            }, e
        }();
        t.default = i
    },
    39: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this.subtle = e, this.aesIV = t
            }
            return e.prototype.decrypt = function(e, t) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                }, t, e)
            }, e
        }();
        t.default = i
    },
    44: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = function() {
                function e(e) {
                    this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                }
                return e.prototype.loadWord = function() {
                    var e = this.data,
                        t = this.bytesAvailable,
                        n = e.byteLength - t,
                        i = new Uint8Array(4),
                        r = Math.min(4, t);
                    if (0 === r) throw new Error("no bytes available");
                    i.set(e.subarray(n, n + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * r, this
                        .bytesAvailable -= r
                }, e.prototype.skipBits = function(e) {
                    var t;
                    this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >>
                        3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                }, e.prototype.readBits = function(e) {
                    var t = Math.min(this.bitsAvailable, e),
                        n = this.word >>> 32 - t;
                    return e > 32 && i.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable >
                        0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? n <<
                        t | this.readBits(t) : n
                }, e.prototype.skipLZ = function() {
                    var e;
                    for (e = 0; e < this.bitsAvailable; ++e)
                        if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                    return this.loadWord(), e + this.skipLZ()
                }, e.prototype.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.prototype.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.prototype.readUEG = function() {
                    var e = this.skipLZ();
                    return this.readBits(e + 1) - 1
                }, e.prototype.readEG = function() {
                    var e = this.readUEG();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }, e.prototype.readBoolean = function() {
                    return 1 === this.readBits(1)
                }, e.prototype.readUByte = function() {
                    return this.readBits(8)
                }, e.prototype.readUShort = function() {
                    return this.readBits(16)
                }, e.prototype.readUInt = function() {
                    return this.readBits(32)
                }, e.prototype.skipScalingList = function(e) {
                    var t, n = 8,
                        i = 8;
                    for (t = 0; t < e; t++) 0 !== i && (i = (n + this.readEG() + 256) % 256), n = 0 === i ? n : i
                }, e.prototype.readSPS = function() {
                    var e, t, n, i, r, a, o, s = 0,
                        l = 0,
                        u = 0,
                        d = 0,
                        c = this.readUByte.bind(this),
                        f = this.readBits.bind(this),
                        h = this.readUEG.bind(this),
                        p = this.readBoolean.bind(this),
                        g = this.skipBits.bind(this),
                        m = this.skipEG.bind(this),
                        v = this.skipUEG.bind(this),
                        y = this.skipScalingList.bind(this);
                    if (c(), e = c(), f(5), g(3), c(), v(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 ===
                        e || 86 === e || 118 === e || 128 === e) {
                        var _ = h();
                        if (3 === _ && g(1), v(), v(), g(1), p())
                            for (a = 3 !== _ ? 8 : 12, o = 0; o < a; o++) p() && y(o < 6 ? 16 : 64)
                    }
                    v();
                    var b = h();
                    if (0 === b) h();
                    else if (1 === b)
                        for (g(1), m(), m(), t = h(), o = 0; o < t; o++) m();
                    v(), g(1), n = h(), i = h(), 0 === (r = f(1)) && g(1), g(1), p() && (s = h(), l = h(), u = h(), d = h());
                    var E = [1, 1];
                    if (p() && p()) switch (c()) {
                        case 1:
                            E = [1, 1];
                            break;
                        case 2:
                            E = [12, 11];
                            break;
                        case 3:
                            E = [10, 11];
                            break;
                        case 4:
                            E = [16, 11];
                            break;
                        case 5:
                            E = [40, 33];
                            break;
                        case 6:
                            E = [24, 11];
                            break;
                        case 7:
                            E = [20, 11];
                            break;
                        case 8:
                            E = [32, 11];
                            break;
                        case 9:
                            E = [80, 33];
                            break;
                        case 10:
                            E = [18, 11];
                            break;
                        case 11:
                            E = [15, 11];
                            break;
                        case 12:
                            E = [64, 33];
                            break;
                        case 13:
                            E = [160, 99];
                            break;
                        case 14:
                            E = [4, 3];
                            break;
                        case 15:
                            E = [3, 2];
                            break;
                        case 16:
                            E = [2, 1];
                            break;
                        case 255:
                            E = [c() << 8 | c(), c() << 8 | c()]
                    }
                    return {
                        width: Math.ceil(16 * (n + 1) - 2 * s - 2 * l),
                        height: (2 - r) * (i + 1) * 16 - (r ? 2 : 4) * (u + d),
                        pixelRatio: E
                    }
                }, e.prototype.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }, e
            }();
        t.default = r
    },
    22: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(3),
            a = n(1);

        function o(e, t, n, o) {
            var s, l, u, d, c, f = navigator.userAgent.toLowerCase(),
                h = o,
                p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            if (s = 1 + ((192 & t[n + 2]) >>> 6), !((l = (60 & t[n + 2]) >>> 2) > p.length - 1)) return d = (1 & t[n + 2]) <<
                2, i.logger.log("manifest codec:" + o + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + p[l] +
                    "Hz],channelConfig:" + (d |= (192 & t[n + 3]) >>> 6)), /firefox/i.test(f) ? l >= 6 ? (s = 5, c = new Array(4),
                    u = l - 3) : (s = 2, c = new Array(2), u = l) : -1 !== f.indexOf("android") ? (s = 2, c = new Array(2), u = l) :
                (s = 5, c = new Array(4), o && (-1 !== o.indexOf("mp4a.40.29") || -1 !== o.indexOf("mp4a.40.5")) || !o && l >=
                    6 ? u = l - 3 : ((o && -1 !== o.indexOf("mp4a.40.2") && (l >= 6 && 1 === d || /vivaldi/i.test(f)) || !o && 1 ===
                        d) && (s = 2, c = new Array(2)), u = l)), c[0] = s << 3, c[0] |= (14 & l) >> 1, c[1] |= (1 & l) << 7, c[1] |=
                d << 3, 5 === s && (c[1] |= (14 & u) >> 1, c[2] = (1 & u) << 7, c[2] |= 8, c[3] = 0), {
                    config: c,
                    samplerate: p[l],
                    channelCount: d,
                    codec: "mp4a.40." + s,
                    manifestCodec: h
                };
            e.trigger(a.default.ERROR, {
                type: r.ErrorTypes.MEDIA_ERROR,
                details: r.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + l
            })
        }

        function s(e, t) {
            return 255 === e[t] && 240 == (246 & e[t + 1])
        }

        function l(e, t) {
            return 1 & e[t + 1] ? 7 : 9
        }

        function u(e, t) {
            return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
        }

        function d(e) {
            return 9216e4 / e
        }

        function c(e, t, n, i, r) {
            var a, o, s = e.length;
            if (a = l(e, t), o = u(e, t), (o -= a) > 0 && t + a + o <= s) return {
                headerLength: a,
                frameLength: o,
                stamp: n + i * r
            }
        }
        t.getAudioConfig = o, t.isHeaderPattern = s, t.getHeaderLength = l, t.getFullFrameLength = u, t.isHeader =
            function(e, t) {
                return !!(t + 1 < e.length && s(e, t))
            }, t.probe = function(e, t) {
                if (t + 1 < e.length && s(e, t)) {
                    var n = l(e, t);
                    t + 5 < e.length && (n = u(e, t));
                    var i = t + n;
                    if (i === e.length || i + 1 < e.length && s(e, i)) return !0
                }
                return !1
            }, t.initTrackConfig = function(e, t, n, r, a) {
                if (!e.samplerate) {
                    var s = o(t, n, r, a);
                    e.config = s.config, e.samplerate = s.samplerate, e.channelCount = s.channelCount, e.codec = s.codec, e.manifestCodec =
                        s.manifestCodec, i.logger.log("parsed codec:" + e.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount)
                }
            }, t.getFrameDuration = d, t.parseFrameHeader = c, t.appendFrame = function(e, t, n, i, r) {
                var a = c(t, n, i, r, d(e.samplerate));
                if (a) {
                    var o = a.stamp,
                        s = a.headerLength,
                        l = a.frameLength,
                        u = {
                            unit: t.subarray(n + s, n + s + l),
                            pts: o,
                            dts: o
                        };
                    return e.samples.push(u), e.len += l, {
                        sample: u,
                        length: l + s
                    }
                }
            }
    },
    17: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(1),
            a = Math.pow(2, 32) - 1,
            o = function() {
                function e(e, t) {
                    this.observer = e, this.remuxer = t
                }
                return e.prototype.resetTimeStamp = function(e) {
                    this.initPTS = e
                }, e.prototype.resetInitSegment = function(t, n, i, a) {
                    if (t && t.byteLength) {
                        var o = this.initData = e.parseInitSegment(t);
                        null == n && (n = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
                        var s = {};
                        o.audio && o.video ? s.audiovideo = {
                            container: "video/mp4",
                            codec: n + "," + i,
                            initSegment: a ? t : null
                        } : (o.audio && (s.audio = {
                            container: "audio/mp4",
                            codec: n,
                            initSegment: a ? t : null
                        }), o.video && (s.video = {
                            container: "video/mp4",
                            codec: i,
                            initSegment: a ? t : null
                        })), this.observer.trigger(r.default.FRAG_PARSING_INIT_SEGMENT, {
                            tracks: s
                        })
                    } else n && (this.audioCodec = n), i && (this.videoCodec = i)
                }, e.probe = function(t) {
                    return e.findBox({
                        data: t,
                        start: 0,
                        end: Math.min(t.length, 16384)
                    }, ["moof"]).length > 0
                }, e.bin2str = function(e) {
                    return String.fromCharCode.apply(null, e)
                }, e.readUint16 = function(e, t) {
                    e.data && (t += e.start, e = e.data);
                    var n = e[t] << 8 | e[t + 1];
                    return n < 0 ? 65536 + n : n
                }, e.readUint32 = function(e, t) {
                    e.data && (t += e.start, e = e.data);
                    var n = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                    return n < 0 ? 4294967296 + n : n
                }, e.writeUint32 = function(e, t, n) {
                    e.data && (t += e.start, e = e.data), e[t] = n >> 24, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t +
                        3] = 255 & n
                }, e.findBox = function(t, n) {
                    var i, r, a, o, s, l, u = [];
                    if (t.data ? (s = t.start, a = t.end, t = t.data) : (s = 0, a = t.byteLength), !n.length) return null;
                    for (i = s; i < a;) l = (r = e.readUint32(t, i)) > 1 ? i + r : a, e.bin2str(t.subarray(i + 4, i + 8)) === n[0] &&
                        (1 === n.length ? u.push({
                            data: t,
                            start: i + 8,
                            end: l
                        }) : (o = e.findBox({
                            data: t,
                            start: i + 8,
                            end: l
                        }, n.slice(1))).length && (u = u.concat(o))), i = l;
                    return u
                }, e.parseSegmentIndex = function(t) {
                    var n, i = e.findBox(t, ["moov"])[0],
                        r = i ? i.end : null,
                        a = 0,
                        o = e.findBox(t, ["sidx"]);
                    if (!o || !o[0]) return null;
                    n = [];
                    var s = (o = o[0]).data[0],
                        l = e.readUint32(o, a = 0 === s ? 8 : 16);
                    a += 4, a += 0 === s ? 8 : 16;
                    var u = o.end + 0,
                        d = e.readUint16(o, a += 2);
                    a += 2;
                    for (var c = 0; c < d; c++) {
                        var f = a,
                            h = e.readUint32(o, f);
                        f += 4;
                        var p = 2147483647 & h;
                        if (1 == (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                        var g = e.readUint32(o, f);
                        f += 4, n.push({
                            referenceSize: p,
                            subsegmentDuration: g,
                            info: {
                                duration: g / l,
                                start: u,
                                end: u + p - 1
                            }
                        }), u += p, a = f += 4
                    }
                    return {
                        earliestPresentationTime: 0,
                        timescale: l,
                        version: s,
                        referencesCount: d,
                        references: n,
                        moovEndOffset: r
                    }
                }, e.parseInitSegment = function(t) {
                    var n = [];
                    return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
                        var r = e.findBox(t, ["tkhd"])[0];
                        if (r) {
                            var a = r.data[r.start],
                                o = 0 === a ? 12 : 20,
                                s = e.readUint32(r, o),
                                l = e.findBox(t, ["mdia", "mdhd"])[0];
                            if (l) {
                                o = 0 === (a = l.data[l.start]) ? 12 : 20;
                                var u = e.readUint32(l, o),
                                    d = e.findBox(t, ["mdia", "hdlr"])[0];
                                if (d) {
                                    var c = {
                                        soun: "audio",
                                        vide: "video"
                                    } [e.bin2str(d.data.subarray(d.start + 8, d.start + 12))];
                                    if (c) {
                                        var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                        if (f.length) {
                                            var h = e.bin2str((f = f[0]).data.subarray(f.start + 12, f.start + 16));
                                            i.logger.log("MP4Demuxer:" + c + ":" + h + " found")
                                        }
                                        n[s] = {
                                            timescale: u,
                                            type: c
                                        }, n[c] = {
                                            timescale: u,
                                            id: s
                                        }
                                    }
                                }
                            }
                        }
                    })), n
                }, e.getStartDTS = function(t, n) {
                    var i, r, a;
                    return i = e.findBox(n, ["moof", "traf"]), r = [].concat.apply([], i.map((function(n) {
                        return e.findBox(n, ["tfhd"]).map((function(i) {
                            var r, a;
                            return r = e.readUint32(i, 4), a = t[r].timescale || 9e4, e.findBox(n, ["tfdt"]).map((function(t) {
                                var n, i;
                                return n = t.data[t.start], i = e.readUint32(t, 4), 1 === n && (i *= Math.pow(2, 32), i += e.readUint32(
                                    t, 8)), i
                            }))[0] / a
                        }))
                    }))), a = Math.min.apply(null, r), isFinite(a) ? a : 0
                }, e.offsetStartDTS = function(t, n, i) {
                    e.findBox(n, ["moof", "traf"]).map((function(n) {
                        return e.findBox(n, ["tfhd"]).map((function(r) {
                            var o = e.readUint32(r, 4),
                                s = t[o].timescale || 9e4;
                            e.findBox(n, ["tfdt"]).map((function(t) {
                                var n = t.data[t.start],
                                    r = e.readUint32(t, 4);
                                if (0 === n) e.writeUint32(t, 4, r - i * s);
                                else {
                                    r *= Math.pow(2, 32), r += e.readUint32(t, 8), r -= i * s, r = Math.max(r, 0);
                                    var o = Math.floor(r / (a + 1)),
                                        l = Math.floor(r % (a + 1));
                                    e.writeUint32(t, 4, o), e.writeUint32(t, 8, l)
                                }
                            }))
                        }))
                    }))
                }, e.prototype.append = function(t, n, i, a) {
                    var o = this.initData;
                    o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData);
                    var s, l = this.initPTS;
                    if (void 0 === l) {
                        var u = e.getStartDTS(o, t);
                        this.initPTS = l = u - n, this.observer.trigger(r.default.INIT_PTS_FOUND, {
                            initPTS: l
                        })
                    }
                    e.offsetStartDTS(o, t, l), s = e.getStartDTS(o, t), this.remuxer.remux(o.audio, o.video, null, null, s, i, a,
                        t)
                }, e.prototype.destroy = function() {}, e
            }();
        t.default = o
    },
    42: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(22),
                r = n(0),
                a = n(10),
                o = function() {
                    function t(e, t, n) {
                        this.observer = e, this.config = n, this.remuxer = t
                    }
                    return t.prototype.resetInitSegment = function(e, t, n, i) {
                        this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 0,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0,
                            manifestCodec: t,
                            duration: i,
                            inputTimeScale: 9e4
                        }
                    }, t.prototype.resetTimeStamp = function() {}, t.probe = function(e) {
                        if (!e) return !1;
                        for (var t = (a.default.getID3Data(e, 0) || []).length, n = e.length; t < n; t++)
                            if (i.probe(e, t)) return r.logger.log("ADTS sync word found !"), !0;
                        return !1
                    }, t.prototype.append = function(t, n, o, s) {
                        for (var l = this._audioTrack, u = a.default.getID3Data(t, 0) || [], d = a.default.getTimeStamp(u), c = e.isFinite(
                                d) ? 90 * d : 9e4 * n, f = 0, h = c, p = t.length, g = u.length, m = [{
                                pts: h,
                                dts: h,
                                data: u
                            }]; g < p - 1;)
                            if (i.isHeader(t, g) && g + 5 < p) {
                                i.initTrackConfig(l, this.observer, t, g, l.manifestCodec);
                                var v = i.appendFrame(l, t, g, c, f);
                                if (!v) {
                                    r.logger.log("Unable to parse AAC frame");
                                    break
                                }
                                g += v.length, h = v.sample.pts, f++
                            } else a.default.isHeader(t, g) ? (u = a.default.getID3Data(t, g), m.push({
                                pts: h,
                                dts: h,
                                data: u
                            }), g += u.length) : g++;
                        this.remuxer.remux(l, {
                            samples: []
                        }, {
                            samples: m,
                            inputTimeScale: 9e4
                        }, {
                            samples: []
                        }, n, o, s)
                    }, t.prototype.destroy = function() {}, t
                }();
            t.default = o
        }).call(this, n(2).Number)
    },
    2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(6).getSelfScope().Number;
        t.Number = i, i.isFinite = i.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }
    }
}))(self);
