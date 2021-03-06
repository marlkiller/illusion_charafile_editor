/*! JS Binary Writer v1.0.0 | (c) LAHCS */
var binaryWriter = function () {
    function d(a) {
        if (!a || 0 >= a) a = 2048;
        this._buffer = new Uint8Array(a);
        this._length = 0
    }

    function b(a, c) {
        var b = a._length + c;
        if (!(a._buffer.length >= b)) {
            var e = Math.max(2048, 1024),
                d = b / e >>> 0;
            0 < b % e && (d += 1);
            b = new Uint8Array(d * e);
            for (e = 0; e < a._buffer.length; e++) b[e] = a._buffer[e];
            a._buffer = b
        }
    }

    function f(a, b) {
        for (var c = b; 128 <= c;) a.writeUint8(c | 128), c >>= 7;
        wByte = c;
        a.writeUint8(wByte)
    }
    d.prototype = {
        writeUtf8String: function (a) {
            a = (new TextEncoder("utf-8")).encode(a);
            f(this, a.length);
            this.writeBytes(a)
        },
        writeAsciiString: function (a) {
            for (var b = [], d = 0; d < a.length; d++) b.push(a.charCodeAt(d));
            f(this, b.length);
            this.writeBytes(b)
        },
        writeBytes: function (a) {
            b(this, a.length);
            for (var c = 0; c < a.length; c++) this._buffer[this._length++] = a[c]
        },
        writeUint8: function (a) {
            b(this, 1);
            this._buffer[this._length++] = a
        },
        writeInt8: function (a) {
            b(this, 1);
            this._buffer[this._length++] = a
        },
        writeUint16: function (a) {
            b(this, 2);
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeUint16_LE: function (a) {
            b(this, 2);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8
        },
        writeInt16: function (a) {
            b(this, 2);
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeInt16_LE: function (a) {
            b(this, 2);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8
        },
        writeUint32: function (a) {
            b(this, 4);
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeUint32_LE: function (a) {
            b(this, 4);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 24
        },
        writeInt32: function (a) {
            b(this, 4);
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeInt32_LE: function (a) {
            b(this, 4);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 24
        },
        writeUint64: function (a) {
            b(this, 8);
            this._buffer[this._length++] = a >> 56;
            this._buffer[this._length++] = a >> 48;
            this._buffer[this._length++] = a >> 40;
            this._buffer[this._length++] = a >> 32;
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeUint64_LE: function (a) {
            b(this, 8);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 32;
            this._buffer[this._length++] = a >> 40;
            this._buffer[this._length++] = a >> 48;
            this._buffer[this._length++] = a >> 56
        },
        writeInt64: function (a) {
            b(this, 8);
            this._buffer[this._length++] = a >> 56;
            this._buffer[this._length++] = a >> 48;
            this._buffer[this._length++] = a >> 40;
            this._buffer[this._length++] = a >> 32;
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a
        },
        writeInt64_LE: function (a) {
            b(this, 8);
            this._buffer[this._length++] = a;
            this._buffer[this._length++] = a >> 8;
            this._buffer[this._length++] = a >> 16;
            this._buffer[this._length++] = a >> 24;
            this._buffer[this._length++] = a >> 32;
            this._buffer[this._length++] = a >> 40;
            this._buffer[this._length++] = a >> 48;
            this._buffer[this._length++] = a >> 56
        },
        getLength: function () {
            return this._length
        },
        reset: function () {
            this._length = 0
        },
        toBuffer: function () {
            for (var a = new Uint8Array(this._length), b = 0; b < this._length; b++) a[b] = this._buffer[b];
            return a
        }
    };
    return d
}();