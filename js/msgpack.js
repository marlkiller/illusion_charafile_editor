! function (N) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = N() : "function" == typeof define &&
        define.amd ? define([], N) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global :
            "undefined" != typeof self ? self : this).msgpack = N()
}(function () {
    return function k(p, g, b) {
        function e(a, q) {
            if (!g[a]) {
                if (!p[a]) {
                    var d = "function" == typeof require && require;
                    if (!q && d) return d(a, !0);
                    if (c) return c(a, !0);
                    d = Error("Cannot find module '" + a + "'");
                    throw d.code = "MODULE_NOT_FOUND", d;
                }
                d = g[a] = {
                    exports: {}
                };
                p[a][0].call(d.exports, function (d) {
                    var c = p[a][1][d];
                    return e(c ? c : d)
                }, d, d.exports, k, p, g, b)
            }
            return g[a].exports
        }
        for (var c = "function" == typeof require && require, a = 0; a < b.length; a++) e(b[a]);
        return e
    }({
        1: [function (k, p, g) {
            g.encode = k("./encode").encode;
            g.decode = k("./decode").decode;
            g.Encoder = k("./encoder").Encoder;
            g.Decoder = k("./decoder").Decoder;
            g.createCodec = k("./ext").createCodec;
            g.codec = k("./codec").codec
        }, {
            "./codec": 10,
            "./decode": 12,
            "./decoder": 13,
            "./encode": 15,
            "./encoder": 16,
            "./ext": 20
        }],
        2: [function (k, p, g) {
            (function (b) {
                function e(c) {
                    return c && c.isBuffer && c
                }
                p.exports = e("undefined" != typeof b && b) || e(this.Buffer) || e("undefined" !=
                    typeof window && window.Buffer) || this.Buffer
            }).call(this, k("buffer").Buffer)
        }, {
            buffer: 29
        }],
        3: [function (k, p, g) {
            g.copy = function (b, e, c, a) {
                c || (c = 0);
                a || 0 === a || (a = this.length);
                e || (e = 0);
                var n = a - c;
                if (b === this && c < e && e < a)
                    for (a = n - 1; 0 <= a; a--) b[a + e] = this[a + c];
                else
                    for (a = 0; a < n; a++) b[a + e] = this[a + c];
                return n
            };
            g.toString = function (b, e, c) {
                b = 0 | e;
                c || (c = this.length);
                e = "";
                for (var a; b < c;) a = this[b++], 128 > a ? e += String.fromCharCode(a) : (192 ===
                    (224 & a) ? a = (31 & a) << 6 | 63 & this[b++] : 224 === (240 & a) ? a =
                    (15 & a) << 12 | (63 & this[b++]) << 6 | 63 & this[b++] : 240 === (248 &
                        a) && (a = (7 & a) << 18 | (63 & this[b++]) << 12 | (63 & this[b++]) <<
                        6 | 63 & this[b++]), 65536 <= a ? (a -= 65536, e += String.fromCharCode(
                        (a >>> 10) + 55296, (1023 & a) + 56320)) : e += String.fromCharCode(
                        a));
                return e
            };
            g.write = function (b, e) {
                for (var c = e || (e |= 0), a = b.length, n, q = 0; q < a;) n = b.charCodeAt(q++),
                    128 > n ? this[c++] = n : 2048 > n ? (this[c++] = 192 | n >>> 6, this[c++] =
                        128 | 63 & n) : 55296 > n || 57343 < n ? (this[c++] = 224 | n >>> 12,
                        this[c++] = 128 | n >>> 6 & 63, this[c++] = 128 | 63 & n) : (n = (n -
                            55296 << 10 | b.charCodeAt(q++) - 56320) + 65536, this[c++] = 240 |
                        n >>> 18, this[c++] = 128 | n >>> 12 & 63, this[c++] = 128 | n >>> 6 &
                        63, this[c++] = 128 | 63 & n);
                return c - e
            }
        }, {}],
        4: [function (k, p, g) {
            var b = k("./bufferish");
            g = p.exports = [];
            g.alloc = function (b) {
                return Array(b)
            };
            g.concat = b.concat;
            g.from = function (e) {
                if (!b.isBuffer(e) && b.isView(e)) e = b.Uint8Array.from(e);
                else if (b.isArrayBuffer(e)) e = new Uint8Array(e);
                else {
                    if ("string" == typeof e) return b.from.call(g, e);
                    if ("number" == typeof e) throw new TypeError(
                        '"value" argument must not be a number');
                }
                return Array.prototype.slice.call(e)
            }
        }, {
            "./bufferish": 8
        }],
        5: [function (k, p, g) {
            function b(a) {
                return new c(a)
            }
            var e = k("./bufferish"),
                c = e.global;
            g = p.exports = e.hasBuffer ? b(0) : [];
            g.alloc = e.hasBuffer && c.alloc || b;
            g.concat = e.concat;
            g.from = function (a) {
                if (!e.isBuffer(a) && e.isView(a)) a = e.Uint8Array.from(a);
                else if (e.isArrayBuffer(a)) a = new Uint8Array(a);
                else {
                    if ("string" == typeof a) return e.from.call(g, a);
                    if ("number" == typeof a) throw new TypeError(
                        '"value" argument must not be a number');
                }
                return c.from && 1 !== c.from.length ? c.from(a) : new c(a)
            }
        }, {
            "./bufferish": 8
        }],
        6: [function (k, p, g) {
            function b(d, m, b, l) {
                var n = a.isBuffer(this),
                    g = a.isBuffer(d);
                if (n && g) return this.copy(d, m, b, l);
                if (q || n || g || !a.isView(this) || !a.isView(d)) return c.copy.call(this, d, m,
                    b, l);
                b = b || null != l ? e.call(this, b, l) : this;
                return d.set(b, m), b.length
            }

            function e(d, c) {
                var m = this.slice || !q && this.subarray;
                if (m) return m.call(this, d, c);
                m = a.alloc.call(this, c - d);
                return b.call(this, m, 0, d, c), m
            }
            var c = k("./buffer-lite");
            g.copy = b;
            g.slice = e;
            g.toString = function (d, m, b) {
                return (!n && a.isBuffer(this) ? this.toString : c.toString).apply(this,
                    arguments)
            };
            g.write = function (a) {
                return function () {
                    return (this[a] || c[a]).apply(this, arguments)
                }
            }("write");
            var a = k("./bufferish");
            k = a.global;
            var n = a.hasBuffer && "TYPED_ARRAY_SUPPORT" in k,
                q = n && !k.TYPED_ARRAY_SUPPORT
        }, {
            "./buffer-lite": 3,
            "./bufferish": 8
        }],
        7: [function (k, p, g) {
            function b(c) {
                return new Uint8Array(c)
            }
            var e = k("./bufferish");
            g = p.exports = e.hasArrayBuffer ? b(0) : [];
            g.alloc = b;
            g.concat = e.concat;
            g.from = function (c) {
                if (e.isView(c)) {
                    var a = c.byteOffset,
                        b = c.byteLength;
                    c = c.buffer;
                    c.byteLength !== b && (c.slice ? c = c.slice(a, a + b) : (c = new Uint8Array(
                        c), c.byteLength !== b && (c = Array.prototype.slice.call(c,
                        a, a + b))))
                } else {
                    if ("string" == typeof c) return e.from.call(g, c);
                    if ("number" == typeof c) throw new TypeError(
                        '"value" argument must not be a number');
                }
                return new Uint8Array(c)
            }
        }, {
            "./bufferish": 8
        }],
        8: [function (k, p, g) {
            function b(a) {
                return c(this).alloc(a)
            }

            function e(a) {
                return a instanceof ArrayBuffer || F(a)
            }

            function c(a) {
                return x(a) ? y : l(a) ? z : m(a) ? H : q ? y : d ? z : H
            }

            function a() {
                return !1
            }

            function n(a, c) {
                return a = "[object " + a + "]",
                    function (l) {
                        return null != l && {}.toString.call(c ? l[c] : l) === a
                    }
            }
            p = g.global = k("./buffer-global");
            var q = g.hasBuffer = p && !!p.isBuffer,
                d = g.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
                m = g.isArray = k("isarray");
            g.isArrayBuffer = d ? e : a;
            var x = g.isBuffer = q ? p.isBuffer : a,
                l = g.isView = d ? ArrayBuffer.isView || n("ArrayBuffer", "buffer") : a;
            g.alloc = b;
            g.concat = function (a, c) {
                function l(a) {
                    c += a.length
                }
                c || (c = 0, Array.prototype.forEach.call(a, l));
                var d = b.call(this !== g && this || a[0], c),
                    m = 0;
                return Array.prototype.forEach.call(a, function (a) {
                    m += r.copy.call(a, d, m)
                }), d
            };
            g.from = function (a) {
                var l;
                if ("string" == typeof a) {
                    l = 3 * a.length;
                    var d = b.call(this, l);
                    a = r.write.call(d, a);
                    l = (l !== a && (d = r.slice.call(d, 0, a)), d)
                } else l = c(this).from(a);
                return l
            };
            var H = g.Array = k("./bufferish-array"),
                y = g.Buffer = k("./bufferish-buffer"),
                z = g.Uint8Array = k("./bufferish-uint8array"),
                r = g.prototype = k("./bufferish-proto"),
                F = n("ArrayBuffer")
        }, {
            "./buffer-global": 2,
            "./bufferish-array": 4,
            "./bufferish-buffer": 5,
            "./bufferish-proto": 6,
            "./bufferish-uint8array": 7,
            isarray: 34
        }],
        9: [function (k, p, g) {
            function b(a) {
                return this instanceof b ? (this.options = a, void this.init()) : new b(a)
            }

            function e(a, c) {
                function d() {
                    return a.apply(this, arguments), c.apply(this, arguments)
                }
                return a && c ? d : a || c
            }

            function c(a) {
                function c(a, c) {
                    return c(a)
                }
                return a = a.slice(),
                    function (d) {
                        return a.reduce(c, d)
                    }
            }

            function a(a) {
                return new b(a)
            }
            var n = k("isarray");
            g.createCodec = a;
            g.install = function (a) {
                for (var c in a) b.prototype[c] = e(b.prototype[c], a[c])
            };
            g.filter = function (a) {
                return n(a) ? c(a) : a
            };
            var q = k("./bufferish");
            b.prototype.init = function () {
                var a = this.options;
                return a && a.uint8array && (this.bufferish = q.Uint8Array), this
            };
            g.preset = a({
                preset: !0
            })
        }, {
            "./bufferish": 8,
            isarray: 34
        }],
        10: [function (k, p, g) {
            k("./read-core");
            k("./write-core");
            g.codec = {
                preset: k("./codec-base").preset
            }
        }, {
            "./codec-base": 9,
            "./read-core": 22,
            "./write-core": 25
        }],
        11: [function (k, p, g) {
            function b(e) {
                if (!(this instanceof b)) return new b(e);
                e && (this.options = e, e.codec) && (e = this.codec = e.codec, e.bufferish && (this
                    .bufferish = e.bufferish))
            }
            g.DecodeBuffer = b;
            p = k("./read-core").preset;
            k("./flex-buffer").FlexDecoder.mixin(b.prototype);
            b.prototype.codec = p;
            b.prototype.fetch = function () {
                return this.codec.decode(this)
            }
        }, {
            "./flex-buffer": 21,
            "./read-core": 22
        }],
        12: [function (k, p, g) {
            g.decode = function (e, c) {
                var a = new b(c);
                return a.write(e), a.read()
            };
            var b = k("./decode-buffer").DecodeBuffer
        }, {
            "./decode-buffer": 11
        }],
        13: [function (k, p, g) {
            function b(c) {
                return this instanceof b ? void e.call(this, c) : new b(c)
            }
            g.Decoder = b;
            p = k("event-lite");
            var e = k("./decode-buffer").DecodeBuffer;
            b.prototype = new e;
            p.mixin(b.prototype);
            b.prototype.decode = function (c) {
                arguments.length && this.write(c);
                this.flush()
            };
            b.prototype.push = function (c) {
                this.emit("data", c)
            };
            b.prototype.end = function (c) {
                this.decode(c);
                this.emit("end")
            }
        }, {
            "./decode-buffer": 11,
            "event-lite": 31
        }],
        14: [function (k, p, g) {
            function b(e) {
                if (!(this instanceof b)) return new b(e);
                e && (this.options = e, e.codec) && (e = this.codec = e.codec, e.bufferish && (this
                    .bufferish = e.bufferish))
            }
            g.EncodeBuffer = b;
            p = k("./write-core").preset;
            k("./flex-buffer").FlexEncoder.mixin(b.prototype);
            b.prototype.codec = p;
            b.prototype.write = function (b) {
                this.codec.encode(this, b)
            }
        }, {
            "./flex-buffer": 21,
            "./write-core": 25
        }],
        15: [function (k, p, g) {
            g.encode = function (e, c) {
                var a = new b(c);
                return a.write(e), a.read()
            };
            var b = k("./encode-buffer").EncodeBuffer
        }, {
            "./encode-buffer": 14
        }],
        16: [function (k, p, g) {
            function b(c) {
                return this instanceof b ? void e.call(this, c) : new b(c)
            }
            g.Encoder = b;
            p = k("event-lite");
            var e = k("./encode-buffer").EncodeBuffer;
            b.prototype = new e;
            p.mixin(b.prototype);
            b.prototype.encode = function (c) {
                this.write(c);
                this.emit("data", this.read())
            };
            b.prototype.end = function (c) {
                arguments.length && this.encode(c);
                this.flush();
                this.emit("end")
            }
        }, {
            "./encode-buffer": 14,
            "event-lite": 31
        }],
        17: [function (k, p, g) {
            function b(c, a) {
                return this instanceof b ? (this.buffer = e.from(c), void(this.type = a)) : new b(c,
                    a)
            }
            g.ExtBuffer = b;
            var e = k("./bufferish")
        }, {
            "./bufferish": 8
        }],
        18: [function (k, p, g) {
            function b(a) {
                return n || (n = k("./encode").encode), n(a)
            }

            function e(a) {
                return a.valueOf()
            }

            function c(a) {
                a = RegExp.prototype.toString.call(a).split("/");
                a.shift();
                var c = [a.pop()];
                return c.unshift(a.join("/")), c
            }

            function a(a) {
                var c = {},
                    l;
                for (l in x) c[l] = a[l];
                return c
            }
            g.setExtPackers = function (l) {
                l.addExtPacker(14, Error, [a, b]);
                l.addExtPacker(1, EvalError, [a, b]);
                l.addExtPacker(2, RangeError, [a, b]);
                l.addExtPacker(3, ReferenceError, [a, b]);
                l.addExtPacker(4, SyntaxError, [a, b]);
                l.addExtPacker(5, TypeError, [a, b]);
                l.addExtPacker(6, URIError, [a, b]);
                l.addExtPacker(10, RegExp, [c, b]);
                l.addExtPacker(11, Boolean, [e, b]);
                l.addExtPacker(12, String, [e, b]);
                l.addExtPacker(13, Date, [Number, b]);
                l.addExtPacker(15, Number, [e, b]);
                "undefined" != typeof Uint8Array && (l.addExtPacker(17, Int8Array, m), l.addExtPacker(
                        18, Uint8Array, m), l.addExtPacker(19, Int16Array, m), l.addExtPacker(
                        20, Uint16Array, m), l.addExtPacker(21, Int32Array, m), l.addExtPacker(
                        22, Uint32Array, m), l.addExtPacker(23, Float32Array, m),
                    "undefined" != typeof Float64Array && l.addExtPacker(24, Float64Array,
                        m), "undefined" != typeof Uint8ClampedArray && l.addExtPacker(25,
                        Uint8ClampedArray, m), l.addExtPacker(26, ArrayBuffer, m), l.addExtPacker(
                        29, DataView, m));
                q.hasBuffer && l.addExtPacker(27, d, q.from)
            };
            var n, q = k("./bufferish"),
                d = q.global,
                m = q.Uint8Array.from,
                x = {
                    name: 1,
                    message: 1,
                    stack: 1,
                    columnNumber: 1,
                    fileName: 1,
                    lineNumber: 1
                }
        }, {
            "./bufferish": 8,
            "./encode": 15
        }],
        19: [function (k, p, g) {
            function b(a) {
                return q || (q = k("./decode").decode), q(a)
            }

            function e(a) {
                return RegExp.apply(null, a)
            }

            function c(a) {
                return function (c) {
                    var l = new a,
                        b;
                    for (b in x) l[b] = c[b];
                    return l
                }
            }

            function a(a) {
                return function (c) {
                    return new a(c)
                }
            }

            function n(a) {
                return (new Uint8Array(a)).buffer
            }
            g.setExtUnpackers = function (l) {
                l.addExtUnpacker(14, [b, c(Error)]);
                l.addExtUnpacker(1, [b, c(EvalError)]);
                l.addExtUnpacker(2, [b, c(RangeError)]);
                l.addExtUnpacker(3, [b, c(ReferenceError)]);
                l.addExtUnpacker(4, [b, c(SyntaxError)]);
                l.addExtUnpacker(5, [b, c(TypeError)]);
                l.addExtUnpacker(6, [b, c(URIError)]);
                l.addExtUnpacker(10, [b, e]);
                l.addExtUnpacker(11, [b, a(Boolean)]);
                l.addExtUnpacker(12, [b, a(String)]);
                l.addExtUnpacker(13, [b, a(Date)]);
                l.addExtUnpacker(15, [b, a(Number)]);
                "undefined" != typeof Uint8Array && (l.addExtUnpacker(17, a(Int8Array)), l.addExtUnpacker(
                        18, a(Uint8Array)), l.addExtUnpacker(19, [n, a(Int16Array)]), l.addExtUnpacker(
                        20, [n, a(Uint16Array)]), l.addExtUnpacker(21, [n, a(Int32Array)]),
                    l.addExtUnpacker(22, [n, a(Uint32Array)]), l.addExtUnpacker(23, [n, a(
                        Float32Array)]), "undefined" != typeof Float64Array && l.addExtUnpacker(
                        24, [n, a(Float64Array)]), "undefined" != typeof Uint8ClampedArray &&
                    l.addExtUnpacker(25, a(Uint8ClampedArray)), l.addExtUnpacker(26, n), l.addExtUnpacker(
                        29, [n, a(DataView)]));
                d.hasBuffer && l.addExtUnpacker(27, a(m))
            };
            var q, d = k("./bufferish"),
                m = d.global,
                x = {
                    name: 1,
                    message: 1,
                    stack: 1,
                    columnNumber: 1,
                    fileName: 1,
                    lineNumber: 1
                }
        }, {
            "./bufferish": 8,
            "./decode": 12
        }],
        20: [function (k, p, g) {
            k("./read-core");
            k("./write-core");
            g.createCodec = k("./codec-base").createCodec
        }, {
            "./codec-base": 9,
            "./read-core": 22,
            "./write-core": 25
        }],
        21: [function (k, p, g) {
            function b() {
                if (!(this instanceof b)) return new b
            }

            function e() {
                if (!(this instanceof e)) return new e
            }

            function c() {
                throw Error("method not implemented: write()");
            }

            function a() {
                throw Error("method not implemented: fetch()");
            }

            function n() {
                return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
            }

            function q(a) {
                (this.buffers || (this.buffers = [])).push(a)
            }

            function d() {
                return (this.buffers || (this.buffers = [])).shift()
            }

            function m(a) {
                return function (c) {
                    for (var b in a) c[b] = a[b];
                    return c
                }
            }
            g.FlexDecoder = b;
            g.FlexEncoder = e;
            var x = k("./bufferish");
            b.mixin = m(function () {
                return {
                    bufferish: x,
                    write: function (a) {
                        var c = this.offset ? x.prototype.slice.call(this.buffer, this.offset) :
                            this.buffer;
                        this.buffer = c ? a ? this.bufferish.concat([c, a]) : c : a;
                        this.offset = 0
                    },
                    fetch: a,
                    flush: function () {
                        for (; this.offset < this.buffer.length;) {
                            var a, c = this.offset;
                            try {
                                a = this.fetch()
                            } catch (y) {
                                if (y && "BUFFER_SHORTAGE" != y.message) throw y;
                                this.offset = c;
                                break
                            }
                            this.push(a)
                        }
                    },
                    push: q,
                    pull: d,
                    read: n,
                    reserve: function (a) {
                        var c = this.offset;
                        a = c + a;
                        if (a > this.buffer.length) throw Error("BUFFER_SHORTAGE");
                        return this.offset = a, c
                    },
                    offset: 0
                }
            }());
            b.mixin(b.prototype);
            e.mixin = m(function () {
                return {
                    bufferish: x,
                    write: c,
                    fetch: function () {
                        var a = this.start;
                        if (a < this.offset) {
                            var c = this.start = this.offset;
                            return x.prototype.slice.call(this.buffer, a, c)
                        }
                    },
                    flush: function () {
                        for (; this.start < this.offset;) {
                            var a = this.fetch();
                            a && this.push(a)
                        }
                    },
                    push: q,
                    pull: function () {
                        var a = this.buffers || (this.buffers = []),
                            c = 1 < a.length ? this.bufferish.concat(a) : a[0];
                        return a.length = 0, c
                    },
                    read: n,
                    reserve: function (a) {
                        var c = 0 | a;
                        if (this.buffer) {
                            var b = this.buffer.length,
                                d = 0 | this.offset,
                                m = d + c;
                            if (m < b) return this.offset = m, d;
                            this.flush();
                            a = Math.max(a, Math.min(2 * b, this.maxBufferSize))
                        }
                        return a = Math.max(a, this.minBufferSize), this.buffer = this.bufferish
                            .alloc(a), this.start = 0, this.offset = c, 0
                    },
                    send: function (a) {
                        var c = a.length;
                        c > this.minBufferSize ? (this.flush(), this.push(a)) : (c =
                            this.reserve(c), x.prototype.copy.call(a, this.buffer,
                                c))
                    },
                    maxBufferSize: 65536,
                    minBufferSize: 2048,
                    offset: 0,
                    start: 0
                }
            }());
            e.mixin(e.prototype)
        }, {
            "./bufferish": 8
        }],
        22: [function (k, p, g) {
            function b(a) {
                var c = q.getReadToken(a);
                return function (a) {
                    var b = n(a),
                        d = c[b];
                    if (!d) throw Error("Invalid type: " + (b ? "0x" + b.toString(16) : b));
                    return d(a)
                }
            }

            function e() {
                var c = this.options;
                return this.decode = b(c), c && c.preset && a.setExtUnpackers(this), this
            }
            var c = k("./ext-buffer").ExtBuffer,
                a = k("./ext-unpacker"),
                n = k("./read-format").readUint8,
                q = k("./read-token"),
                d = k("./codec-base");
            d.install({
                addExtUnpacker: function (a, c) {
                    (this.extUnpackers || (this.extUnpackers = []))[a] = d.filter(c)
                },
                getExtUnpacker: function (a) {
                    function b(b) {
                        return new c(b, a)
                    }
                    return (this.extUnpackers || (this.extUnpackers = []))[a] || b
                },
                init: e
            });
            g.preset = e.call(d.preset)
        }, {
            "./codec-base": 9,
            "./ext-buffer": 17,
            "./ext-unpacker": 19,
            "./read-format": 23,
            "./read-token": 24
        }],
        23: [function (k, p, g) {
            function b(a, c) {
                var b, d = {},
                    f = Array(c),
                    h = Array(c),
                    w = a.codec.decode;
                for (b = 0; b < c; b++) f[b] = w(a), h[b] = w(a);
                for (b = 0; b < c; b++) d[f[b]] = h[b];
                return d
            }

            function e(a, c) {
                var b, d = new Map,
                    f = Array(c),
                    h = Array(c),
                    w = a.codec.decode;
                for (b = 0; b < c; b++) f[b] = w(a), h[b] = w(a);
                for (b = 0; b < c; b++) d.set(f[b], h[b]);
                return d
            }

            function c(a, c) {
                for (var b = Array(c), d = a.codec.decode, f = 0; f < c; f++) b[f] = d(a);
                return b
            }

            function a(a, c) {
                var b = a.reserve(c);
                return B.toString.call(a.buffer, "utf-8", b, b + c)
            }

            function n(a, c) {
                var b = a.reserve(c),
                    b = B.slice.call(a.buffer, b, b + c);
                return E.from(b)
            }

            function q(a, c) {
                var b = a.reserve(c),
                    b = B.slice.call(a.buffer, b, b + c);
                return E.Uint8Array.from(b).buffer
            }

            function d(a, c) {
                var b = a.reserve(c + 1),
                    d = a.buffer[b++],
                    f = b + c,
                    h = a.codec.getExtUnpacker(d);
                if (!h) throw Error("Invalid ext type: " + (d ? "0x" + d.toString(16) : d));
                b = B.slice.call(a.buffer, b, f);
                return h(b)
            }

            function m(a) {
                var c = a.reserve(1);
                return a.buffer[c]
            }

            function x(a) {
                var c = a.reserve(1);
                a = a.buffer[c];
                return 128 & a ? a - 256 : a
            }

            function l(a) {
                var c = a.reserve(2);
                a = a.buffer;
                return a[c++] << 8 | a[c]
            }

            function H(a) {
                var c = a.reserve(2);
                a = a.buffer;
                c = a[c++] << 8 | a[c];
                return 32768 & c ? c - 65536 : c
            }

            function y(a) {
                var c = a.reserve(4);
                a = a.buffer;
                return 16777216 * a[c++] + (a[c++] << 16) + (a[c++] << 8) + a[c]
            }

            function z(a) {
                var c = a.reserve(4);
                a = a.buffer;
                return a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c]
            }

            function r(a, c) {
                return function (b) {
                    var d = b.reserve(a);
                    return c.call(b.buffer, d, L)
                }
            }

            function F(a) {
                return (new A(this, a)).toNumber()
            }

            function u(a) {
                return (new G(this, a)).toNumber()
            }

            function v(a) {
                return new A(this, a)
            }

            function C(a) {
                return new G(this, a)
            }

            function I(a) {
                return D.read(this, a, !1, 23, 4)
            }

            function J(a) {
                return D.read(this, a, !1, 52, 8)
            }
            var D = k("ieee754");
            p = k("int64-buffer");
            var A = p.Uint64BE,
                G = p.Int64BE;
            g.getReadFormat = function (g) {
                var k = g && g.int64;
                return {
                    map: K && g && g.usemap ? e : b,
                    array: c,
                    str: a,
                    bin: E.hasArrayBuffer && g && g.binarraybuffer ? q : n,
                    ext: d,
                    uint8: m,
                    uint16: l,
                    uint32: y,
                    uint64: r(8, k ? v : F),
                    int8: x,
                    int16: H,
                    int32: z,
                    int64: r(8, k ? C : u),
                    float32: r(4, I),
                    float64: r(8, J)
                }
            };
            g.readUint8 = m;
            var E = k("./bufferish"),
                B = k("./bufferish-proto"),
                K = "undefined" != typeof Map,
                L = !0
        }, {
            "./bufferish": 8,
            "./bufferish-proto": 6,
            ieee754: 32,
            "int64-buffer": 33
        }],
        24: [function (k, p, g) {
            function b(b) {
                var d, m = Array(256);
                for (d = 0; 127 >= d; d++) m[d] = e(d);
                for (d = 128; 143 >= d; d++) m[d] = a(d - 128, b.map);
                for (d = 144; 159 >= d; d++) m[d] = a(d - 144, b.array);
                for (d = 160; 191 >= d; d++) m[d] = a(d - 160, b.str);
                m[192] = e(null);
                m[193] = null;
                m[194] = e(!1);
                m[195] = e(!0);
                m[196] = c(b.uint8, b.bin);
                m[197] = c(b.uint16, b.bin);
                m[198] = c(b.uint32, b.bin);
                m[199] = c(b.uint8, b.ext);
                m[200] = c(b.uint16, b.ext);
                m[201] = c(b.uint32, b.ext);
                m[202] = b.float32;
                m[203] = b.float32;
                m[204] = b.uint8;
                m[205] = b.uint16;
                m[206] = b.uint32;
                m[207] = b.uint64;
                m[208] = b.int8;
                m[209] = b.int16;
                m[210] = b.int32;
                m[211] = b.int64;
                m[212] = a(1, b.ext);
                m[213] = a(2, b.ext);
                m[214] = a(4, b.ext);
                m[215] = a(8, b.ext);
                m[216] = a(16, b.ext);
                m[217] = c(b.uint8, b.str);
                m[218] = c(b.uint16, b.str);
                m[219] = c(b.uint32, b.str);
                m[220] = c(b.uint16, b.array);
                m[221] = c(b.uint32, b.array);
                m[222] = c(b.uint16, b.map);
                m[223] = c(b.uint32, b.map);
                for (d = 224; 255 >= d; d++) m[d] = e(d - 256);
                return m
            }

            function e(a) {
                return function () {
                    return a
                }
            }

            function c(a, c) {
                return function (b) {
                    var d = a(b);
                    return c(b, d)
                }
            }

            function a(a, c) {
                return function (b) {
                    return c(b, a)
                }
            }
            var n = k("./read-format");
            g.getReadToken = function (c) {
                var d = n.getReadFormat(c);
                if (c && c.useraw) {
                    var m = b(d).slice();
                    m[217] = m[196];
                    m[218] = m[197];
                    m[219] = m[198];
                    for (c = 160; 191 >= c; c++) m[c] = a(c - 160, d.bin);
                    d = m
                } else d = b(d);
                return d
            }
        }, {
            "./read-format": 23
        }],
        25: [function (k, p, g) {
            function b(a) {
                var c = n.getWriteType(a);
                return function (a, b) {
                    var d = c[typeof b];
                    if (!d) throw Error('Unsupported type "' + typeof b + '": ' + b);
                    d(a, b)
                }
            }

            function e() {
                var c = this.options;
                return this.encode = b(c), c && c.preset && a.setExtPackers(this), this
            }
            var c = k("./ext-buffer").ExtBuffer,
                a = k("./ext-packer"),
                n = k("./write-type"),
                q = k("./codec-base");
            q.install({
                addExtPacker: function (a, b, e) {
                    function d(b) {
                        return e && (b = e(b)), new c(b, a)
                    }
                    e = q.filter(e);
                    var m = b.name;
                    m && "Object" !== m ? (this.extPackers || (this.extPackers = {}))[m] =
                        d : (this.extEncoderList || (this.extEncoderList = [])).unshift(
                            [b, d])
                },
                getExtPacker: function (a) {
                    var c = this.extPackers || (this.extPackers = {});
                    if (c = (a = a.constructor) && a.name && c[a.name]) return c;
                    for (var c = this.extEncoderList || (this.extEncoderList = []), b =
                            c.length, d = 0; d < b; d++) {
                        var e = c[d];
                        if (a === e[0]) return e[1]
                    }
                },
                init: e
            });
            g.preset = e.call(q.preset)
        }, {
            "./codec-base": 9,
            "./ext-buffer": 17,
            "./ext-packer": 18,
            "./write-type": 27
        }],
        26: [function (k, p, g) {
            function b() {
                var b = y.slice();
                return b[196] = e(196), b[197] = c(197), b[198] = a(198), b[199] = e(199), b[200] =
                    c(200), b[201] = a(201), b[202] = n(202, 4, u.writeFloatBE || m, !0), b[203] =
                    n(202, 4, u.writeFloatBE || m, !0), b[204] = e(204), b[205] = c(205), b[206] =
                    a(206), b[207] = n(207, 8, q), b[208] = e(208), b[209] = c(209), b[210] = a(210),
                    b[211] = n(211, 8, d), b[217] = e(217), b[218] = c(218), b[219] = a(219), b[220] =
                    c(220), b[221] = a(221), b[222] = c(222), b[223] = a(223), b
            }

            function e(a) {
                return function (b, c) {
                    var d = b.reserve(2),
                        e = b.buffer;
                    e[d++] = a;
                    e[d] = c
                }
            }

            function c(a) {
                return function (b, c) {
                    var d = b.reserve(3),
                        e = b.buffer;
                    e[d++] = a;
                    e[d++] = c >>> 8;
                    e[d] = c
                }
            }

            function a(a) {
                return function (b, c) {
                    var d = b.reserve(5),
                        e = b.buffer;
                    e[d++] = a;
                    e[d++] = c >>> 24;
                    e[d++] = c >>> 16;
                    e[d++] = c >>> 8;
                    e[d] = c
                }
            }

            function n(a, b, c, d) {
                return function (e, m) {
                    var g = e.reserve(b + 1);
                    e.buffer[g++] = a;
                    c.call(e.buffer, m, g, d)
                }
            }

            function q(a, b) {
                new l(this, b, a)
            }

            function d(a, b) {
                new H(this, b, a)
            }

            function m(a, b) {
                x.write(this, a, b, !1, 23, 4)
            }
            var x = k("ieee754");
            p = k("int64-buffer");
            var l = p.Uint64BE,
                H = p.Int64BE,
                y = k("./write-uint8").uint8,
                z = k("./bufferish"),
                r = z.global,
                F = z.hasBuffer && "TYPED_ARRAY_SUPPORT" in r && !r.TYPED_ARRAY_SUPPORT,
                u = z.hasBuffer && r.prototype || {};
            g.getWriteToken = function (a) {
                a && a.uint8array ? (a = b(), a = (a[202] = n(202, 4, m), a[202] = n(202, 4, m),
                    a)) : F || z.hasBuffer && a && a.safe ? (a = y.slice(), a = (a[196] = n(
                        196, 1, r.prototype.writeUInt8), a[197] = n(197, 2, r.prototype
                        .writeUInt16BE), a[198] = n(198, 4, r.prototype.writeUInt32BE),
                    a[199] = n(199, 1, r.prototype.writeUInt8), a[200] = n(200, 2, r.prototype
                        .writeUInt16BE), a[201] = n(201, 4, r.prototype.writeUInt32BE),
                    a[202] = n(202, 4, r.prototype.writeFloatBE), a[203] = n(202, 4, r.prototype
                        .writeFloatBE), a[204] = n(204, 1, r.prototype.writeUInt8), a[
                        205] = n(205, 2, r.prototype.writeUInt16BE), a[206] = n(206, 4,
                        r.prototype.writeUInt32BE), a[207] = n(207, 8, q), a[208] = n(
                        208, 1, r.prototype.writeInt8), a[209] = n(209, 2, r.prototype.writeInt16BE),
                    a[210] = n(210, 4, r.prototype.writeInt32BE), a[211] = n(211, 8, d),
                    a[217] = n(217, 1, r.prototype.writeUInt8), a[218] = n(218, 2, r.prototype
                        .writeUInt16BE), a[219] = n(219, 4, r.prototype.writeUInt32BE),
                    a[220] = n(220, 2, r.prototype.writeUInt16BE), a[221] = n(221, 4, r
                        .prototype.writeUInt32BE), a[222] = n(222, 2, r.prototype.writeUInt16BE),
                    a[223] = n(223, 4, r.prototype.writeUInt32BE), a)) : a = b();
                return a
            }
        }, {
            "./bufferish": 8,
            "./write-uint8": 28,
            ieee754: 32,
            "int64-buffer": 33
        }],
        27: [function (k, p, g) {
            var b = k("isarray");
            p = k("int64-buffer");
            var e = p.Uint64BE,
                c = p.Int64BE,
                a = k("./bufferish"),
                n = k("./bufferish-proto"),
                q = k("./write-token"),
                d = k("./write-uint8").uint8,
                m = k("./ext-buffer").ExtBuffer,
                x = "undefined" != typeof Uint8Array,
                l = "undefined" != typeof Map,
                H = [, 212, 213, , 214, , , , 215];
            H[16] = 216;
            g.getWriteType = function (g) {
                function k(a) {
                    return 32 > a ? 1 : 255 >= a ? 2 : 65535 >= a ? 3 : 5
                }

                function p(a) {
                    return 32 > a ? 1 : 65535 >= a ? 3 : 5
                }

                function y(a, g) {
                    if (null === g) return v(a, g);
                    if (B(g)) return K(a, g);
                    if (b(g)) {
                        var l = g,
                            k = l.length;
                        A[16 > k ? 144 + k : 65535 >= k ? 220 : 221](a, k);
                        for (var f = a.codec.encode, h = 0; h < k; h++) f(a, l[h])
                    } else if (e.isUint64BE(g)) A[207](a, g.toArray());
                    else if (c.isInt64BE(g)) A[211](a, g.toArray());
                    else return (l = a.codec.getExtPacker(g)) && (g = l(g)), g instanceof m ? (
                        l = g, k = l.buffer, f = k.length, A[H[f] || (255 > f ? 199 :
                            65535 >= f ? 200 : 201)](a, f), d[l.type](a), a.send(k), l =
                        void 0) : l = void L(a, g), l
                }

                function u(a, b) {
                    var c;
                    B(b) ? (c = b.length, A[32 > c ? 160 + c : 65535 >= c ? 218 : 219](a, c), a
                        .send(b), c = void 0) : c = void y(a, b);
                    return c
                }

                function v(a, b) {
                    A[192](a, b)
                }

                function C(a, b) {
                    var c = b.length;
                    A[255 > c ? 196 : 65535 >= c ? 197 : 198](a, c);
                    a.send(b)
                }

                function I(a, b) {
                    C(a, new Uint8Array(b))
                }

                function J(a, b) {
                    var c = Object.keys(b),
                        d = c.length;
                    A[16 > d ? 128 + d : 65535 >= d ? 222 : 223](a, d);
                    var f = a.codec.encode;
                    c.forEach(function (h) {
                        f(a, h);
                        f(a, b[h])
                    })
                }

                function D(a, b) {
                    if (!(b instanceof Map)) return J(a, b);
                    var c = b.size;
                    A[16 > c ? 128 + c : 65535 >= c ? 222 : 223](a, c);
                    var d = a.codec.encode;
                    b.forEach(function (f, h, b) {
                        d(a, h);
                        d(a, f)
                    })
                }
                var A = q.getWriteToken(g),
                    G = g && g.useraw,
                    E = x && g && g.binarraybuffer,
                    B = E ? a.isArrayBuffer : a.isBuffer,
                    K = E ? I : C,
                    L = l && g && g.usemap ? D : J;
                return {
                    "boolean": function (a, b) {
                        A[b ? 195 : 194](a, b)
                    },
                    "function": v,
                    number: function (a, b) {
                        var c, d = 0 | b;
                        return b !== d ? (c = 203, void A[c](a, b)) : (c = -32 <= d && 127 >=
                            d ? 255 & d : 0 <= d ? 255 >= d ? 204 : 65535 >= d ? 205 :
                            206 : -128 <= d ? 208 : -32768 <= d ? 209 : 210, void A[c](
                                a, d))
                    },
                    object: G ? u : y,
                    string: function (a) {
                        return function (b, c) {
                            var d = c.length;
                            b.offset = b.reserve(5 + 3 * d);
                            var f = b.buffer,
                                h = a(d),
                                w = b.offset + h,
                                d = n.write.call(f, c, w),
                                t = a(d);
                            h !== t && n.copy.call(f, f, w + t - h, w, w + d);
                            A[1 === t ? 160 + d : 3 >= t ? 215 + t : 219](b, d);
                            b.offset += d
                        }
                    }(G ? p : k),
                    symbol: v,
                    undefined: v
                }
            }
        }, {
            "./bufferish": 8,
            "./bufferish-proto": 6,
            "./ext-buffer": 17,
            "./write-token": 26,
            "./write-uint8": 28,
            "int64-buffer": 33,
            isarray: 34
        }],
        28: [function (k, p, g) {
            function b(b) {
                return function (c) {
                    var a = c.reserve(1);
                    c.buffer[a] = b
                }
            }
            k = g.uint8 = Array(256);
            for (p = 0; 255 >= p; p++) k[p] = b(p)
        }, {}],
        29: [function (k, p, g) {
            (function (b) {
                function e() {
                    try {
                        var a = new Uint8Array(1);
                        return a.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === a.foo() && "function" == typeof a.subarray && 0 === a.subarray(
                            1, 1).byteLength
                    } catch (h) {
                        return !1
                    }
                }

                function c(f, h) {
                    if ((a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < h) throw new RangeError(
                        "Invalid typed array length");
                    return a.TYPED_ARRAY_SUPPORT ? (f = new Uint8Array(h), f.__proto__ = a.prototype) :
                        (null === f && (f = new a(h)), f.length = h), f
                }

                function a(f, h, b) {
                    if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(f, h, b);
                    if ("number" == typeof f) {
                        if ("string" == typeof h) throw Error(
                            "If encoding is specified then the first argument must be a string"
                        );
                        return d(this, f)
                    }
                    return n(this, f, h, b)
                }

                function n(f, h, b, t) {
                    if ("number" == typeof h) throw new TypeError(
                        '"value" argument must not be a number');
                    if ("undefined" != typeof ArrayBuffer && h instanceof ArrayBuffer) {
                        if (h.byteLength, 0 > b || h.byteLength < b) throw new RangeError(
                            "'offset' is out of bounds");
                        if (h.byteLength < b + (t || 0)) throw new RangeError(
                            "'length' is out of bounds");
                        b = (h = void 0 === b && void 0 === t ? new Uint8Array(h) : void 0 ===
                            t ? new Uint8Array(h, b) : new Uint8Array(h, b, t), a.TYPED_ARRAY_SUPPORT ?
                            (f = h, f.__proto__ = a.prototype) : f = m(f, h), f)
                    } else {
                        if ("string" == typeof h) {
                            t = f;
                            f = b;
                            if ("string" == typeof f && "" !== f || (f = "utf8"), !a.isEncoding(
                                    f)) throw new TypeError(
                                '"encoding" must be a valid string encoding');
                            b = 0 | l(h, f);
                            t = c(t, b);
                            h = t.write(h, f);
                            h = (h !== b && (t = t.slice(0, h)), t)
                        } else a: if (b = f, a.isBuffer(h)) t = 0 | x(h.length), h = (b = c(b,
                                t), 0 === b.length ? b : (h.copy(b, 0, 0, t), b));
                            else {
                                if (h) {
                                    if ("undefined" != typeof ArrayBuffer && h.buffer instanceof ArrayBuffer ||
                                        "length" in h) {
                                        (t = "number" != typeof h.length) || (t = h.length, t =
                                            t !== t);
                                        h = t ? c(b, 0) : m(b, h);
                                        break a
                                    }
                                    if ("Buffer" === h.type && O(h.data)) {
                                        h = m(b, h.data);
                                        break a
                                    }
                                }
                                throw new TypeError(
                                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                                );
                            } b = h
                    }
                    return b
                }

                function q(a) {
                    if ("number" != typeof a) throw new TypeError(
                        '"size" argument must be a number');
                    if (0 > a) throw new RangeError('"size" argument must not be negative');
                }

                function d(f, h) {
                    if (q(h), f = c(f, 0 > h ? 0 : 0 | x(h)), !a.TYPED_ARRAY_SUPPORT)
                        for (var b = 0; b < h; ++b) f[b] = 0;
                    return f
                }

                function m(a, h) {
                    var f = 0 > h.length ? 0 : 0 | x(h.length);
                    a = c(a, f);
                    for (var b = 0; b < f; b += 1) a[b] = 255 & h[b];
                    return a
                }

                function x(f) {
                    if (f >= (a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError(
                        "Attempt to allocate Buffer larger than maximum size: 0x" + (a.TYPED_ARRAY_SUPPORT ?
                            2147483647 : 1073741823).toString(16) + " bytes");
                    return 0 | f
                }

                function l(f, h) {
                    if (a.isBuffer(f)) return f.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView &&
                        (ArrayBuffer.isView(f) || f instanceof ArrayBuffer)) return f.byteLength;
                    "string" != typeof f && (f = "" + f);
                    var b = f.length;
                    if (0 === b) return 0;
                    for (var c = !1;;) switch (h) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return b;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return E(f).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * b;
                        case "hex":
                            return b >>> 1;
                        case "base64":
                            return L.toByteArray(G(f)).length;
                        default:
                            if (c) return E(f).length;
                            h = ("" + h).toLowerCase();
                            c = !0
                    }
                }

                function p(a, h, b) {
                    var f = !1;
                    if (((void 0 === h || 0 > h) && (h = 0), h > this.length) || ((void 0 ===
                            b || b > this.length) && (b = this.length), 0 >= b) || (b >>>= 0, h >>>=
                            0, b <= h)) return "";
                    for (a || (a = "utf8");;) switch (a) {
                        case "hex":
                            a = h;
                            h = b;
                            b = this.length;
                            (!a || 0 > a) && (a = 0);
                            (!h || 0 > h || h > b) && (h = b);
                            f = "";
                            for (b = a; b < h; ++b) a = f, f = this[b], f = 16 > f ? "0" +
                                f.toString(16) : f.toString(16), f = a + f;
                            return f;
                        case "utf8":
                        case "utf-8":
                            return F(this, h, b);
                        case "ascii":
                            a = "";
                            for (b = Math.min(this.length, b); h < b; ++h) a += String.fromCharCode(
                                127 & this[h]);
                            return a;
                        case "latin1":
                        case "binary":
                            a = "";
                            for (b = Math.min(this.length, b); h < b; ++h) a += String.fromCharCode(
                                this[h]);
                            return a;
                        case "base64":
                            return 0 === h && b === this.length ? L.fromByteArray(this) : L
                                .fromByteArray(this.slice(h, b));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            h = this.slice(h, b);
                            b = "";
                            for (a = 0; a < h.length; a += 2) b += String.fromCharCode(h[a] +
                                256 * h[a + 1]);
                            return b;
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + a);
                            a = (a + "").toLowerCase();
                            f = !0
                    }
                }

                function y(a, h, b) {
                    var f = a[h];
                    a[h] = a[b];
                    a[b] = f
                }

                function z(f, h, b, c, d) {
                    if (0 === f.length) return -1;
                    if ("string" == typeof b ? (c = b, b = 0) : 2147483647 < b ? b = 2147483647 :
                        -2147483648 > b && (b = -2147483648), b = +b, isNaN(b) && (b = d ? 0 :
                            f.length - 1), 0 > b && (b = f.length + b), b >= f.length) {
                        if (d) return -1;
                        b = f.length - 1
                    } else if (0 > b) {
                        if (!d) return -1;
                        b = 0
                    }
                    if ("string" == typeof h && (h = a.from(h, c)), a.isBuffer(h)) return 0 ===
                        h.length ? -1 : r(f, h, b, c, d);
                    if ("number" == typeof h) return h &= 255, a.TYPED_ARRAY_SUPPORT &&
                        "function" == typeof Uint8Array.prototype.indexOf ? d ? Uint8Array.prototype
                        .indexOf.call(f, h, b) : Uint8Array.prototype.lastIndexOf.call(f, h,
                            b) : r(f, [h], b, c, d);
                    throw new TypeError("val must be string, number or Buffer");
                }

                function r(a, b, c, d, e) {
                    function f(a, b) {
                        return 1 === h ? a[b] : a.readUInt16BE(b * h)
                    }
                    var h = 1,
                        w = a.length,
                        t = b.length;
                    if (void 0 !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" ===
                            d || "utf16le" === d || "utf-16le" === d)) {
                        if (2 > a.length || 2 > b.length) return -1;
                        h = 2;
                        w /= 2;
                        t /= 2;
                        c /= 2
                    }
                    if (e)
                        for (d = -1; c < w; c++)
                            if (f(a, c) === f(b, -1 === d ? 0 : c - d)) {
                                if (-1 === d && (d = c), c - d + 1 === t) return d * h
                            } else -1 !== d && (c -= c - d), d = -1;
                    else
                        for (c + t > w && (c = w - t); 0 <= c; c--) {
                            w = !0;
                            for (d = 0; d < t; d++)
                                if (f(a, c + d) !== f(b, d)) {
                                    w = !1;
                                    break
                                } if (w) return c
                        }
                    return -1
                }

                function F(a, b, c) {
                    c = Math.min(a.length, c);
                    for (var f = []; b < c;) {
                        var h = a[b],
                            d = null,
                            w = 239 < h ? 4 : 223 < h ? 3 : 191 < h ? 2 : 1;
                        if (b + w <= c) {
                            var e, g, m, l;
                            switch (w) {
                                case 1:
                                    128 > h && (d = h);
                                    break;
                                case 2:
                                    e = a[b + 1];
                                    128 === (192 & e) && (l = (31 & h) << 6 | 63 & e, 127 < l &&
                                        (d = l));
                                    break;
                                case 3:
                                    e = a[b + 1];
                                    g = a[b + 2];
                                    128 === (192 & e) && 128 === (192 & g) && (l = (15 & h) <<
                                        12 | (63 & e) << 6 | 63 & g, 2047 < l && (55296 > l ||
                                            57343 < l) && (d = l));
                                    break;
                                case 4:
                                    e = a[b + 1], g = a[b + 2], m = a[b + 3], 128 === (192 & e) &&
                                        128 === (192 & g) && 128 === (192 & m) && (l = (15 & h) <<
                                            18 | (63 & e) << 12 | (63 & g) << 6 | 63 & m, 65535 <
                                            l && 1114112 > l && (d = l))
                            }
                        }
                        null === d ? (d = 65533, w = 1) : 65535 < d && (d -= 65536, f.push(d >>>
                            10 & 1023 | 55296), d = 56320 | 1023 & d);
                        f.push(d);
                        b += w
                    }
                    a = f.length;
                    if (a <= P) f = String.fromCharCode.apply(String, f);
                    else {
                        c = "";
                        for (l = 0; l < a;) c += String.fromCharCode.apply(String, f.slice(l, l +=
                            P));
                        f = c
                    }
                    return f
                }

                function u(a, b, c) {
                    if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
                    if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
                }

                function v(b, h, c, d, e, g) {
                    if (!a.isBuffer(b)) throw new TypeError(
                        '"buffer" argument must be a Buffer instance');
                    if (h > e || h < g) throw new RangeError(
                        '"value" argument is out of bounds');
                    if (c + d > b.length) throw new RangeError("Index out of range");
                }

                function C(a, b, c, d) {
                    0 > b && (b = 65535 + b + 1);
                    for (var f = 0, h = Math.min(a.length - c, 2); f < h; ++f) a[c + f] = (b &
                        255 << 8 * (d ? f : 1 - f)) >>> 8 * (d ? f : 1 - f)
                }

                function I(a, b, c, d) {
                    0 > b && (b = 4294967295 + b + 1);
                    for (var f = 0, h = Math.min(a.length - c, 4); f < h; ++f) a[c + f] = b >>>
                        8 * (d ? f : 3 - f) & 255
                }

                function J(a, b, c, d, e, g) {
                    if (c + d > a.length) throw new RangeError("Index out of range");
                    if (0 > c) throw new RangeError("Index out of range");
                }

                function D(a, b, c, d, e) {
                    return e || J(a, b, c, 4, 3.4028234663852886E38, -3.4028234663852886E38), M
                        .write(a, b, c, d, 23, 4), c + 4
                }

                function A(a, b, c, d, e) {
                    return e || J(a, b, c, 8, 1.7976931348623157E308, -1.7976931348623157E308),
                        M.write(a, b, c, d, 52, 8), c + 8
                }

                function G(a) {
                    var b = a;
                    if (a = (b.trim ? b.trim() : b.replace(/^\s+|\s+$/g, "")).replace(S, ""), 2 >
                        a.length) return "";
                    for (; 0 !== a.length % 4;) a += "\x3d";
                    return a
                }

                function E(a, b) {
                    b = b || 1 / 0;
                    for (var f, h = a.length, c = null, d = [], e = 0; e < h; ++e) {
                        if (f = a.charCodeAt(e), 55295 < f && 57344 > f) {
                            if (!c) {
                                if (56319 < f) {
                                    -1 < (b -= 3) && d.push(239, 191, 189);
                                    continue
                                }
                                if (e + 1 === h) {
                                    -1 < (b -= 3) && d.push(239, 191, 189);
                                    continue
                                }
                                c = f;
                                continue
                            }
                            if (56320 > f) {
                                -1 < (b -= 3) && d.push(239, 191, 189);
                                c = f;
                                continue
                            }
                            f = (c - 55296 << 10 | f - 56320) + 65536
                        } else c && -1 < (b -= 3) && d.push(239, 191, 189);
                        if (c = null, 128 > f) {
                            if (0 > --b) break;
                            d.push(f)
                        } else if (2048 > f) {
                            if (0 > (b -= 2)) break;
                            d.push(f >> 6 | 192, 63 & f | 128)
                        } else if (65536 > f) {
                            if (0 > (b -= 3)) break;
                            d.push(f >> 12 | 224, f >> 6 & 63 | 128, 63 & f | 128)
                        } else {
                            if (!(1114112 > f)) throw Error("Invalid code point");
                            if (0 > (b -= 4)) break;
                            d.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, 63 & f |
                                128)
                        }
                    }
                    return d
                }

                function B(a) {
                    for (var b = [], f = 0; f < a.length; ++f) b.push(255 & a.charCodeAt(f));
                    return b
                }

                function K(a, b, c, d) {
                    for (var f = 0; f < d && !(f + c >= b.length || f >= a.length); ++f) b[f +
                        c] = a[f];
                    return f
                }
                var L = k("base64-js"),
                    M = k("ieee754"),
                    O = k("isarray");
                g.Buffer = a;
                g.SlowBuffer = function (b) {
                    return +b != b && (b = 0), a.alloc(+b)
                };
                g.INSPECT_MAX_BYTES = 50;
                a.TYPED_ARRAY_SUPPORT = void 0 !== b.TYPED_ARRAY_SUPPORT ? b.TYPED_ARRAY_SUPPORT :
                    e();
                g.kMaxLength = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                a.poolSize = 8192;
                a._augment = function (b) {
                    return b.__proto__ = a.prototype, b
                };
                a.from = function (a, b, c) {
                    return n(null, a, b, c)
                };
                a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ =
                    Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] ===
                    a && Object.defineProperty(a, Symbol.species, {
                        value: null,
                        configurable: !0
                    }));
                a.alloc = function (a, b, d) {
                    return q(a), 0 >= a ? c(null, a) : void 0 !== b ? "string" == typeof d ?
                        c(null, a).fill(b, d) : c(null, a).fill(b) : c(null, a)
                };
                a.allocUnsafe = function (a) {
                    return d(null, a)
                };
                a.allocUnsafeSlow = function (a) {
                    return d(null, a)
                };
                a.isBuffer = function (a) {
                    return !(null == a || !a._isBuffer)
                };
                a.compare = function (b, h) {
                    if (!a.isBuffer(b) || !a.isBuffer(h)) throw new TypeError(
                        "Arguments must be Buffers");
                    if (b === h) return 0;
                    for (var f = b.length, c = h.length, d = 0, e = Math.min(f, c); d < e; ++
                        d)
                        if (b[d] !== h[d]) {
                            f = b[d];
                            c = h[d];
                            break
                        } return f < c ? -1 : c < f ? 1 : 0
                };
                a.isEncoding = function (a) {
                    switch (String(a).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                };
                a.concat = function (b, h) {
                    if (!O(b)) throw new TypeError(
                        '"list" argument must be an Array of Buffers');
                    if (0 === b.length) return a.alloc(0);
                    var f;
                    if (void 0 === h)
                        for (f = h = 0; f < b.length; ++f) h += b[f].length;
                    var c = a.allocUnsafe(h),
                        d = 0;
                    for (f = 0; f < b.length; ++f) {
                        var e = b[f];
                        if (!a.isBuffer(e)) throw new TypeError(
                            '"list" argument must be an Array of Buffers');
                        e.copy(c, d);
                        d += e.length
                    }
                    return c
                };
                a.byteLength = l;
                a.prototype._isBuffer = !0;
                a.prototype.swap16 = function () {
                    var a = this.length;
                    if (0 !== a % 2) throw new RangeError(
                        "Buffer size must be a multiple of 16-bits");
                    for (var b = 0; b < a; b += 2) y(this, b, b + 1);
                    return this
                };
                a.prototype.swap32 = function () {
                    var a = this.length;
                    if (0 !== a % 4) throw new RangeError(
                        "Buffer size must be a multiple of 32-bits");
                    for (var b = 0; b < a; b += 4) y(this, b, b + 3), y(this, b + 1, b + 2);
                    return this
                };
                a.prototype.swap64 = function () {
                    var a = this.length;
                    if (0 !== a % 8) throw new RangeError(
                        "Buffer size must be a multiple of 64-bits");
                    for (var b = 0; b < a; b += 8) y(this, b, b + 7), y(this, b + 1, b + 6),
                        y(this, b + 2, b + 5), y(this, b + 3, b + 4);
                    return this
                };
                a.prototype.toString = function () {
                    var a = 0 | this.length;
                    return 0 === a ? "" : 0 === arguments.length ? F(this, 0, a) : p.apply(
                        this, arguments)
                };
                a.prototype.equals = function (b) {
                    if (!a.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                    return this === b || 0 === a.compare(this, b)
                };
                a.prototype.inspect = function () {
                    var a = "",
                        b = g.INSPECT_MAX_BYTES;
                    return 0 < this.length && (a = this.toString("hex", 0, b).match(/.{2}/g)
                            .join(" "), this.length > b && (a += " ... ")), "\x3cBuffer " +
                        a + "\x3e"
                };
                a.prototype.compare = function (b, c, d, e, g) {
                    if (!a.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === c && (c = 0), void 0 === d && (d = b ? b.length : 0),
                        void 0 === e && (e = 0), void 0 === g && (g = this.length), 0 > c ||
                        d > b.length || 0 > e || g > this.length) throw new RangeError(
                        "out of range index");
                    if (e >= g && c >= d) return 0;
                    if (e >= g) return -1;
                    if (c >= d) return 1;
                    if (c >>>= 0, d >>>= 0, e >>>= 0, g >>>= 0, this === b) return 0;
                    var f = g - e,
                        h = d - c,
                        w = Math.min(f, h);
                    e = this.slice(e, g);
                    b = b.slice(c, d);
                    for (c = 0; c < w; ++c)
                        if (e[c] !== b[c]) {
                            f = e[c];
                            h = b[c];
                            break
                        } return f < h ? -1 : h < f ? 1 : 0
                };
                a.prototype.includes = function (a, b, c) {
                    return -1 !== this.indexOf(a, b, c)
                };
                a.prototype.indexOf = function (a, b, c) {
                    return z(this, a, b, c, !0)
                };
                a.prototype.lastIndexOf = function (a, b, c) {
                    return z(this, a, b, c, !1)
                };
                a.prototype.write = function (a, b, c, d) {
                    if (void 0 === b) d = "utf8", c = this.length, b = 0;
                    else if (void 0 === c && "string" == typeof b) d = b, c = this.length,
                        b = 0;
                    else {
                        if (!isFinite(b)) throw Error(
                            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                        );
                        b |= 0;
                        isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c =
                            void 0)
                    }
                    var f = this.length - b;
                    if ((void 0 === c || c > f) && (c = f), 0 < a.length && (0 > c || 0 > b) ||
                        b > this.length) throw new RangeError(
                        "Attempt to write outside buffer bounds");
                    d || (d = "utf8");
                    for (f = !1;;) switch (d) {
                        case "hex":
                            a: {
                                b = Number(b) || 0;d = this.length - b;c ? (c =
                                    Number(c), c > d && (c = d)) : c = d;d = a.length;
                                if (0 !== d % 2) throw new TypeError(
                                    "Invalid hex string");c > d / 2 && (c = d / 2);
                                for (d = 0; d < c; ++d) {
                                    f = parseInt(a.substr(2 * d, 2), 16);
                                    if (isNaN(f)) {
                                        a = d;
                                        break a
                                    }
                                    this[b + d] = f
                                }
                                a = d
                            }
                            return a;
                        case "utf8":
                        case "utf-8":
                            return K(E(a, this.length - b), this, b, c);
                        case "ascii":
                            return K(B(a), this, b, c);
                        case "latin1":
                        case "binary":
                            return K(B(a), this, b, c);
                        case "base64":
                            return K(L.toByteArray(G(a)), this, b, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            d = this.length - b;
                            for (var h, e = [], g = 0; g < a.length && !(0 > (d -= 2)); ++
                                g) h = a.charCodeAt(g), f = h >> 8, h %= 256, e.push(h),
                                e.push(f);
                            return K(e, this, b, c);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + d);
                            d = ("" + d).toLowerCase();
                            f = !0
                    }
                };
                a.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var P = 4096;
                a.prototype.slice = function (b, c) {
                    var f = this.length;
                    b = ~~b;
                    c = void 0 === c ? f : ~~c;
                    0 > b ? (b += f, 0 > b && (b = 0)) : b > f && (b = f);
                    0 > c ? (c += f, 0 > c && (c = 0)) : c > f && (c = f);
                    c < b && (c = b);
                    if (a.TYPED_ARRAY_SUPPORT) f = this.subarray(b, c), f.__proto__ = a.prototype;
                    else
                        for (var h = c - b, f = new a(h, void 0), d = 0; d < h; ++d) f[d] =
                            this[d + b];
                    return f
                };
                a.prototype.readUIntLE = function (a, b, c) {
                    a |= 0;
                    b |= 0;
                    c || u(a, b, this.length);
                    c = this[a];
                    for (var f = 1, h = 0; ++h < b && (f *= 256);) c += this[a + h] * f;
                    return c
                };
                a.prototype.readUIntBE = function (a, b, c) {
                    a |= 0;
                    b |= 0;
                    c || u(a, b, this.length);
                    c = this[a + --b];
                    for (var f = 1; 0 < b && (f *= 256);) c += this[a + --b] * f;
                    return c
                };
                a.prototype.readUInt8 = function (a, b) {
                    return b || u(a, 1, this.length), this[a]
                };
                a.prototype.readUInt16LE = function (a, b) {
                    return b || u(a, 2, this.length), this[a] | this[a + 1] << 8
                };
                a.prototype.readUInt16BE = function (a, b) {
                    return b || u(a, 2, this.length), this[a] << 8 | this[a + 1]
                };
                a.prototype.readUInt32LE = function (a, b) {
                    return b || u(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a +
                        2] << 16) + 16777216 * this[a + 3]
                };
                a.prototype.readUInt32BE = function (a, b) {
                    return b || u(a, 4, this.length), 16777216 * this[a] + (this[a + 1] <<
                        16 | this[a + 2] << 8 | this[a + 3])
                };
                a.prototype.readIntLE = function (a, b, c) {
                    a |= 0;
                    b |= 0;
                    c || u(a, b, this.length);
                    c = this[a];
                    for (var f = 1, d = 0; ++d < b && (f *= 256);) c += this[a + d] * f;
                    return f *= 128, c >= f && (c -= Math.pow(2, 8 * b)), c
                };
                a.prototype.readIntBE = function (a, b, c) {
                    a |= 0;
                    b |= 0;
                    c || u(a, b, this.length);
                    c = b;
                    for (var f = 1, d = this[a + --c]; 0 < c && (f *= 256);) d += this[a +
                        --c] * f;
                    return f *= 128, d >= f && (d -= Math.pow(2, 8 * b)), d
                };
                a.prototype.readInt8 = function (a, b) {
                    return b || u(a, 1, this.length), 128 & this[a] ? -1 * (255 - this[a] +
                        1) : this[a]
                };
                a.prototype.readInt16LE = function (a, b) {
                    b || u(a, 2, this.length);
                    var c = this[a] | this[a + 1] << 8;
                    return 32768 & c ? 4294901760 | c : c
                };
                a.prototype.readInt16BE = function (a, b) {
                    b || u(a, 2, this.length);
                    var c = this[a + 1] | this[a] << 8;
                    return 32768 & c ? 4294901760 | c : c
                };
                a.prototype.readInt32LE = function (a, b) {
                    return b || u(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a +
                        2] << 16 | this[a + 3] << 24
                };
                a.prototype.readInt32BE = function (a, b) {
                    return b || u(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 |
                        this[a + 2] << 8 | this[a + 3]
                };
                a.prototype.readFloatLE = function (a, b) {
                    return b || u(a, 4, this.length), M.read(this, a, !0, 23, 4)
                };
                a.prototype.readFloatBE = function (a, b) {
                    return b || u(a, 4, this.length), M.read(this, a, !1, 23, 4)
                };
                a.prototype.readDoubleLE = function (a, b) {
                    return b || u(a, 8, this.length), M.read(this, a, !0, 52, 8)
                };
                a.prototype.readDoubleBE = function (a, b) {
                    return b || u(a, 8, this.length), M.read(this, a, !1, 52, 8)
                };
                a.prototype.writeUIntLE = function (a, b, c, d) {
                    (a = +a, b |= 0, c |= 0, d) || v(this, a, b, c, Math.pow(2, 8 * c) - 1,
                        0);
                    d = 1;
                    var f = 0;
                    for (this[b] = 255 & a; ++f < c && (d *= 256);) this[b + f] = a / d &
                        255;
                    return b + c
                };
                a.prototype.writeUIntBE = function (a, b, c, d) {
                    (a = +a, b |= 0, c |= 0, d) || v(this, a, b, c, Math.pow(2, 8 * c) - 1,
                        0);
                    d = c - 1;
                    var f = 1;
                    for (this[b + d] = 255 & a; 0 <= --d && (f *= 256);) this[b + d] = a /
                        f & 255;
                    return b + c
                };
                a.prototype.writeUInt8 = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 1, 255, 0), a.TYPED_ARRAY_SUPPORT ||
                        (b = Math.floor(b)), this[c] = 255 & b, c + 1
                };
                a.prototype.writeUInt16LE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ?
                        (this[c] = 255 & b, this[c + 1] = b >>> 8) : C(this, b, c, !0), c +
                        2
                };
                a.prototype.writeUInt16BE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ?
                        (this[c] = b >>> 8, this[c + 1] = 255 & b) : C(this, b, c, !1), c +
                        2
                };
                a.prototype.writeUInt32LE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ?
                        (this[c + 3] = b >>> 24, this[c + 2] = b >>> 16, this[c + 1] = b >>>
                            8, this[c] = 255 & b) : I(this, b, c, !0), c + 4
                };
                a.prototype.writeUInt32BE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ?
                        (this[c] = b >>> 24, this[c + 1] = b >>> 16, this[c + 2] = b >>> 8,
                            this[c + 3] = 255 & b) : I(this, b, c, !1), c + 4
                };
                a.prototype.writeIntLE = function (a, b, c, d) {
                    (a = +a, b |= 0, d) || (d = Math.pow(2, 8 * c - 1), v(this, a, b, c, d -
                        1, -d));
                    d = 0;
                    var f = 1,
                        h = 0;
                    for (this[b] = 255 & a; ++d < c && (f *= 256);) 0 > a && 0 === h && 0 !==
                        this[b + d - 1] && (h = 1), this[b + d] = (a / f >> 0) - h & 255;
                    return b + c
                };
                a.prototype.writeIntBE = function (a, b, c, d) {
                    (a = +a, b |= 0, d) || (d = Math.pow(2, 8 * c - 1), v(this, a, b, c, d -
                        1, -d));
                    d = c - 1;
                    var f = 1,
                        h = 0;
                    for (this[b + d] = 255 & a; 0 <= --d && (f *= 256);) 0 > a && 0 === h &&
                        0 !== this[b + d + 1] && (h = 1), this[b + d] = (a / f >> 0) - h &
                        255;
                    return b + c
                };
                a.prototype.writeInt8 = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 1, 127, -128), a.TYPED_ARRAY_SUPPORT ||
                        (b = Math.floor(b)), 0 > b && (b = 255 + b + 1), this[c] = 255 & b,
                        c + 1
                };
                a.prototype.writeInt16LE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ?
                        (this[c] = 255 & b, this[c + 1] = b >>> 8) : C(this, b, c, !0), c +
                        2
                };
                a.prototype.writeInt16BE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ?
                        (this[c] = b >>> 8, this[c + 1] = 255 & b) : C(this, b, c, !1), c +
                        2
                };
                a.prototype.writeInt32LE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 4, 2147483647, -2147483648),
                        a.TYPED_ARRAY_SUPPORT ? (this[c] = 255 & b, this[c + 1] = b >>> 8,
                            this[c + 2] = b >>> 16, this[c + 3] = b >>> 24) : I(this, b, c,
                            !0), c + 4
                };
                a.prototype.writeInt32BE = function (b, c, d) {
                    return b = +b, c |= 0, d || v(this, b, c, 4, 2147483647, -2147483648),
                        0 > b && (b = 4294967295 + b + 1), a.TYPED_ARRAY_SUPPORT ? (this[c] =
                            b >>> 24, this[c + 1] = b >>> 16, this[c + 2] = b >>> 8, this[c +
                                3] = 255 & b) : I(this, b, c, !1), c + 4
                };
                a.prototype.writeFloatLE = function (a, b, c) {
                    return D(this, a, b, !0, c)
                };
                a.prototype.writeFloatBE = function (a, b, c) {
                    return D(this, a, b, !1, c)
                };
                a.prototype.writeDoubleLE = function (a, b, c) {
                    return A(this, a, b, !0, c)
                };
                a.prototype.writeDoubleBE = function (a, b, c) {
                    return A(this, a, b, !1, c)
                };
                a.prototype.copy = function (b, c, d, e) {
                    if ((d || (d = 0), e || 0 === e || (e = this.length), c >= b.length &&
                            (c = b.length), c || (c = 0), 0 < e && e < d && (e = d), e ===
                            d) || 0 === b.length || 0 === this.length) return 0;
                    if (0 > c) throw new RangeError("targetStart out of bounds");
                    if (0 > d || d >= this.length) throw new RangeError(
                        "sourceStart out of bounds");
                    if (0 > e) throw new RangeError("sourceEnd out of bounds");
                    e > this.length && (e = this.length);
                    b.length - c < e - d && (e = b.length - c + d);
                    var f = e - d;
                    if (this === b && d < c && c < e)
                        for (e = f - 1; 0 <= e; --e) b[e + c] = this[e + d];
                    else if (1E3 > f || !a.TYPED_ARRAY_SUPPORT)
                        for (e = 0; e < f; ++e) b[e + c] = this[e + d];
                    else Uint8Array.prototype.set.call(b, this.subarray(d, d + f), c);
                    return f
                };
                a.prototype.fill = function (b, c, d, e) {
                    if ("string" == typeof b) {
                        if ("string" == typeof c ? (e = c, c = 0, d = this.length) :
                            "string" == typeof d && (e = d, d = this.length), 1 === b.length
                        ) {
                            var f = b.charCodeAt(0);
                            256 > f && (b = f)
                        }
                        if (void 0 !== e && "string" != typeof e) throw new TypeError(
                            "encoding must be a string");
                        if ("string" == typeof e && !a.isEncoding(e)) throw new TypeError(
                            "Unknown encoding: " + e);
                    } else "number" == typeof b && (b &= 255);
                    if (0 > c || this.length < c || this.length < d) throw new RangeError(
                        "Out of range index");
                    if (d <= c) return this;
                    c >>>= 0;
                    d = void 0 === d ? this.length : d >>> 0;
                    b || (b = 0);
                    if ("number" == typeof b)
                        for (e = c; e < d; ++e) this[e] = b;
                    else
                        for (b = a.isBuffer(b) ? b : E((new a(b, e)).toString()), f = b.length,
                            e = 0; e < d - c; ++e) this[e + c] = b[e % f];
                    return this
                };
                var S = /[^+\/0-9A-Za-z-_]/g
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self :
                "undefined" != typeof window ? window : {})
        }, {
            "base64-js": 30,
            ieee754: 32,
            isarray: 34
        }],
        30: [function (k, p, g) {
            function b(a) {
                var b = a.length;
                if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
                return "\x3d" === a[b - 2] ? 2 : "\x3d" === a[b - 1] ? 1 : 0
            }

            function e(a, b, e) {
                for (var d = [], g = b; g < e; g += 3) b = (a[g] << 16) + (a[g + 1] << 8) + a[g + 2],
                    d.push(c[b >> 18 & 63] + c[b >> 12 & 63] + c[b >> 6 & 63] + c[63 & b]);
                return d.join("")
            }
            g.byteLength = function (a) {
                return 3 * a.length / 4 - b(a)
            };
            g.toByteArray = function (c) {
                var d, e, g, l, k;
                d = c.length;
                l = b(c);
                k = new n(3 * d / 4 - l);
                e = 0 < l ? d - 4 : d;
                var q = 0;
                for (d = 0; d < e; d += 4) g = a[c.charCodeAt(d)] << 18 | a[c.charCodeAt(d + 1)] <<
                    12 | a[c.charCodeAt(d + 2)] << 6 | a[c.charCodeAt(d + 3)], k[q++] = g >> 16 &
                    255, k[q++] = g >> 8 & 255, k[q++] = 255 & g;
                return 2 === l ? (g = a[c.charCodeAt(d)] << 2 | a[c.charCodeAt(d + 1)] >> 4, k[
                    q++] = 255 & g) : 1 === l && (g = a[c.charCodeAt(d)] << 10 | a[c.charCodeAt(
                        d + 1)] << 4 | a[c.charCodeAt(d + 2)] >> 2, k[q++] = g >> 8 & 255,
                    k[q++] = 255 & g), k
            };
            g.fromByteArray = function (a) {
                for (var b, g = a.length, k = g % 3, l = "", n = [], q = 0, p = g - k; q < p; q +=
                    16383) n.push(e(a, q, q + 16383 > p ? p : q + 16383));
                return 1 === k ? (b = a[g - 1], l += c[b >> 2], l += c[b << 4 & 63], l +=
                        "\x3d\x3d") : 2 === k && (b = (a[g - 2] << 8) + a[g - 1], l += c[b >>
                        10], l += c[b >> 4 & 63], l += c[b << 2 & 63], l += "\x3d"), n.push(l),
                    n.join("")
            };
            var c = [],
                a = [],
                n = "undefined" != typeof Uint8Array ? Uint8Array : Array;
            for (k = 0; 64 > k; ++k) c[k] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [k], a[
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(k)
                    ] = k;
            a[45] = 62;
            a[95] = 63
        }, {}],
        31: [function (k, p, g) {
            function b() {
                if (!(this instanceof b)) return new b
            }! function (b) {
                function c(a) {
                    for (var b in d) a[b] = d[b];
                    return a
                }

                function a(b, c) {
                    function d(a) {
                        return a !== c && a.originalListener !== c
                    }
                    var k;
                    if (arguments.length)
                        if (c) {
                            if (k = e(this, b, !0)) {
                                if (k = k.filter(d), !k.length) return a.call(this, b);
                                this[g][b] = k
                            }
                        } else {
                            if (k = this[g], k && (delete k[b], !Object.keys(k).length)) return a.call(
                                this)
                        }
                    else delete this[g];
                    return this
                }

                function e(a, b, c) {
                    if (!c || a[g]) return a = a[g] || (a[g] = {}), a[b] || (a[b] = [])
                }
                "undefined" != typeof p && (p.exports = b);
                var g = "listeners",
                    d = {
                        on: function (a, b) {
                            return e(this, a).push(b), this
                        },
                        once: function (b, c) {
                            function d() {
                                a.call(g, b, d);
                                c.apply(this, arguments)
                            }
                            var g = this;
                            return d.originalListener = c, e(g, b).push(d), g
                        },
                        off: a,
                        emit: function (a, b) {
                            function c(a) {
                                a.call(k)
                            }

                            function d(a) {
                                a.call(k, b)
                            }

                            function g(a) {
                                a.apply(k, p)
                            }
                            var k = this,
                                m = e(k, a, !0);
                            if (!m) return !1;
                            var n = arguments.length;
                            if (1 === n) m.forEach(c);
                            else if (2 === n) m.forEach(d);
                            else {
                                var p = Array.prototype.slice.call(arguments, 1);
                                m.forEach(g)
                            }
                            return !!m.length
                        }
                    };
                c(b.prototype);
                b.mixin = c
            }(b)
        }, {}],
        32: [function (k, p, g) {
            g.read = function (b, e, c, a, g) {
                var k;
                k = 8 * g - a - 1;
                var d = (1 << k) - 1,
                    m = d >> 1,
                    n = -7;
                g = c ? g - 1 : 0;
                var l = c ? -1 : 1,
                    p = b[e + g];
                g += l;
                c = p & (1 << -n) - 1;
                p >>= -n;
                for (n += k; 0 < n; c = 256 * c + b[e + g], g += l, n -= 8);
                k = c & (1 << -n) - 1;
                c >>= -n;
                for (n += a; 0 < n; k = 256 * k + b[e + g], g += l, n -= 8);
                if (0 === c) c = 1 - m;
                else {
                    if (c === d) return k ? NaN : 1 / 0 * (p ? -1 : 1);
                    k += Math.pow(2, a);
                    c -= m
                }
                return (p ? -1 : 1) * k * Math.pow(2, c - a)
            };
            g.write = function (b, e, c, a, g, k) {
                var d, m, n, l = 8 * k - g - 1,
                    p = (1 << l) - 1,
                    q = p >> 1,
                    z = 23 === g ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                k = a ? 0 : k - 1;
                a = a ? 1 : -1;
                var r = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
                e = Math.abs(e);
                for (isNaN(e) || e === 1 / 0 ? (m = isNaN(e) ? 1 : 0, d = p) : (d = Math.floor(
                            Math.log(e) / Math.LN2), 1 > e * (n = Math.pow(2, -d)) && (d--, n *=
                            2), e += 1 <= d + q ? z / n : z * Math.pow(2, 1 - q), 2 <= e * n &&
                        (d++, n /= 2), d + q >= p ? (m = 0, d = p) : 1 <= d + q ? (m = (e * n -
                            1) * Math.pow(2, g), d += q) : (m = e * Math.pow(2, q - 1) * Math.pow(
                            2, g), d = 0)); 8 <= g; b[c + k] = 255 & m, k += a, m /= 256, g -=
                    8);
                d = d << g | m;
                for (l += g; 0 < l; b[c + k] = 255 & d, k += a, d /= 256, l -= 8);
                b[c + k - a] |= 128 * r
            }
        }, {}],
        33: [function (k, p, g) {
            (function (b) {
                ! function (e) {
                    function c(b, c, n) {
                        function q(a, b, c, e) {
                            if (this instanceof q)
                                if (v && C && (a instanceof C && (a = new v(a)), c instanceof C &&
                                        (c = new v(c))), a || b || c || r) {
                                    if (!d(a, b)) {
                                        var f = r || Array;
                                        e = b;
                                        c = a;
                                        b = 0;
                                        a = new f(8)
                                    }
                                    this.buffer = a;
                                    this.offset = b |= 0;
                                    if (F !== typeof c)
                                        if ("string" == typeof c) {
                                            e = e || 10;
                                            var f = 0,
                                                g = c.length,
                                                h = 0,
                                                k = 0;
                                            "-" === c[0] && f++;
                                            for (var l = f; f < g;) {
                                                var n = parseInt(c[f++], e);
                                                if (!(0 <= n)) break;
                                                k = k * e + n;
                                                h = h * e + Math.floor(k / D);
                                                k %= D
                                            }
                                            l && (h = ~h, k ? k = D - k : h++);
                                            B(a, b + x, h);
                                            B(a, b + z, k)
                                        } else d(c, e) ? m(a, b, c, e) : "number" == typeof e ?
                                            (B(a, b + x, c), B(a, b + z, e)) : 0 < c ? J(a, b,
                                                c) : 0 > c ? T(a, b, c) : m(a, b, I, 0);
                                    a = void 0
                                } else a = void(this.buffer = Array.prototype.slice.call(I, 0,
                                    8));
                            else a = new q(a, b, c, e);
                            return a
                        }

                        function E() {
                            var a = this.buffer,
                                b = this.offset,
                                c = G(a, b + x),
                                a = G(a, b + z);
                            return n || (c |= 0), c ? c * D + a : a
                        }

                        function B(a, b, c) {
                            a[b + t] = 255 & c;
                            c >>= 8;
                            a[b + w] = 255 & c;
                            c >>= 8;
                            a[b + h] = 255 & c;
                            a[b + f] = 255 & c >> 8
                        }

                        function G(a, b) {
                            return a[b + f] * A + (a[b + h] << 16) + (a[b + w] << 8) + a[b + t]
                        }
                        var x = c ? 0 : 4,
                            z = c ? 4 : 0,
                            f = c ? 0 : 3,
                            h = c ? 1 : 2,
                            w = c ? 2 : 1,
                            t = c ? 3 : 0,
                            J = c ? p : H,
                            T = c ? l : y;
                        c = q.prototype;
                        var Q = "is" + b,
                            R = "_" + Q;
                        return c.buffer = void 0, c.offset = 0, c[R] = !0, c.toNumber = E, c.toString =
                            function (a) {
                                var b = this.buffer,
                                    c = this.offset,
                                    d = G(b, c + x),
                                    b = G(b, c + z),
                                    c = "",
                                    e = !n && 2147483648 & d;
                                e && (d = ~d, b = D - b);
                                for (a = a || 10;;) {
                                    var f = d % a * D + b;
                                    if (d = Math.floor(d / a), b = Math.floor(f / a), c = (f %
                                            a).toString(a) + c, !d && !b) break
                                }
                                return e && (c = "-" + c), c
                            }, c.toJSON = E, c.toArray = a, u && (c.toBuffer = g), v && (c.toArrayBuffer =
                                k), q[Q] = function (a) {
                                return !(!a || !a[R])
                            }, e[b] = q, q
                    }

                    function a(a) {
                        var b = this.buffer,
                            c = this.offset;
                        return r = null, !1 !== a && 0 === c && 8 === b.length && J(b) ? b :
                            Array.prototype.slice.call(b, c, c + 8)
                    }

                    function g(a) {
                        var c = this.buffer,
                            d = this.offset;
                        if (r = u, !1 !== a && 0 === d && 8 === c.length && b.isBuffer(c))
                            return c;
                        a = new u(8);
                        return m(a, 0, c, d), a
                    }

                    function k(a) {
                        var b = this.buffer,
                            c = this.offset,
                            d = b.buffer;
                        if (r = v, !1 !== a && 0 === c && d instanceof C && 8 === d.byteLength)
                            return d;
                        a = new v(8);
                        return m(a, 0, b, c), a.buffer
                    }

                    function d(a, b) {
                        var c = a && a.length;
                        return b |= 0, c && b + 8 <= c && "string" != typeof a[b]
                    }

                    function m(a, b, c, d) {
                        b |= 0;
                        d |= 0;
                        for (var e = 0; 8 > e; e++) a[b++] = 255 & c[d++]
                    }

                    function p(a, b, c) {
                        for (var d = b + 8; d > b;) a[--d] = 255 & c, c /= 256
                    }

                    function l(a, b, c) {
                        var d = b + 8;
                        for (c++; d > b;) a[--d] = 255 & -c ^ 255, c /= 256
                    }

                    function H(a, b, c) {
                        for (var d = b + 8; b < d;) a[b++] = 255 & c, c /= 256
                    }

                    function y(a, b, c) {
                        var d = b + 8;
                        for (c++; b < d;) a[b++] = 255 & -c ^ 255, c /= 256
                    }

                    function z(a) {
                        return !!a && "[object Array]" == Object.prototype.toString.call(a)
                    }
                    var r, F = "undefined",
                        u = F !== typeof b && b,
                        v = F !== typeof Uint8Array && Uint8Array,
                        C = F !== typeof ArrayBuffer && ArrayBuffer,
                        I = [0, 0, 0, 0, 0, 0, 0, 0],
                        J = Array.isArray || z,
                        D = 4294967296,
                        A = 16777216;
                    c("Uint64BE", !0, !0);
                    c("Int64BE", !0, !1);
                    c("Uint64LE", !1, !0);
                    c("Int64LE", !1, !1)
                }("object" == typeof g && "string" != typeof g.nodeName ? g : this || {})
            }).call(this, k("buffer").Buffer)
        }, {
            buffer: 29
        }],
        34: [function (k, p, g) {
            var b = {}.toString;
            p.exports = Array.isArray || function (e) {
                return "[object Array]" == b.call(e)
            }
        }, {}]
    }, {}, [1])(1)
});