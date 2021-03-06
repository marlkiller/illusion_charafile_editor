/*! JS Binary Reader v1.0.0 | (c) LAHCS */
var binaryReader = function () {
    function d(a) {
        this.position = 0;
        this.data = a
    }
    d.prototype = {
        readUtf8String: function () {
            for (var a, c = a = 0, b, d = !0; d;) b = this.readUint8(), d = 0 != (b & 128), a |= (b & 127) <<
                c, c += 7;
            if (0 >= a) return "";
            a = 128 < a - 0 ? 128 : a - 0;
            return (new TextDecoder("utf-8")).decode(this.readBytes(a))
        },
        readAsciiString: function (a) {
            if (this.data.length < this.position + a) throw "range error";
            for (var c = "", b = 0; b < a; b++) c += String.fromCharCode(this.data[this.position + b]);
            this.position += a;
            return c
        },
        readBytes: function (a) {
            if (this.data.length < this.position + a) throw "range error";
            for (var c = new Uint8Array(a), b = 0; b < a; b++) c[b] = this.data[this.position + b];
            this.position += a;
            return c
        },
        readInt8: function () {
            var a = this.readUint8();
            a & 128 && (a = -(a - 1 ^ 255));
            return a
        },
        readUint8: function () {
            if (this.data.length < this.position + 1) throw "range error";
            var a;
            a = this.data[this.position];
            this.position += 1;
            return a
        },
        readInt16: function () {
            var a = this.readUint16();
            a & 32768 && (a = -(a - 1 ^ 65535));
            return a
        },
        readInt16_LE: function () {
            var a = this.readUint16_LE();
            a & 32768 && (a = -(a - 1 ^ 65535));
            return a
        },
        readUint16: function () {
            if (this.data.length < this.position + 2) throw "range error";
            var a = this.data[this.position + 1] + (this.data[this.position] << 8);
            this.position += 2;
            return a
        },
        readUint16_LE: function () {
            if (this.data.length < this.position + 2) throw "range error";
            var a = this.data[this.position] + (this.data[this.position + 1] << 8);
            this.position += 2;
            return a
        },
        readInt32: function () {
            var a = this.readUint32();
            a & 2147483648 && (a = -(a - 1 ^ 4294967295));
            return a
        },
        readInt32_LE: function () {
            var a = this.readUint32_LE();
            a & 2147483648 && (a = -(a - 1 ^ 4294967295));
            return a
        },
        readUint32: function () {
            if (this.data.length < this.position + 4) throw "range error";
            var a = this.data[this.position + 3] + (this.data[this.position + 2] << 8) + (this.data[this.position +
                1] << 16) + (this.data[this.position] << 24);
            this.position += 4;
            return a
        },
        readUint32_LE: function () {
            if (this.data.length < this.position + 4) throw "range error";
            var a = this.data[this.position] + (this.data[this.position + 1] << 8) + (this.data[this.position +
                2] << 16) + (this.data[this.position + 3] << 24);
            this.position += 4;
            return a
        },
        readInt64: function () {
            var a = this.readUint64();
            a & 0x7fffffffffffffff && (a = -(a - 1 ^ 1.8446744073709552E19));
            return a
        },
        readInt64_LE: function () {
            var a = this.readUint64_LE();
            a & 0x7fffffffffffffff && (a = -(a - 1 ^ 1.8446744073709552E19));
            return a
        },
        readUint64: function () {
            if (this.data.length < this.position + 8) throw "range error";
            var a = this.data[this.position + 7] + (this.data[this.position + 6] << 8) + (this.data[this.position +
                    5] << 16) + (this.data[this.position + 4] << 24) + (this.data[this.position + 3] << 32) +
                (this.data[this.position + 2] << 40) + (this.data[this.position + 1] << 48) + (this.data[
                    this.position] << 56);
            this.position += 8;
            return a
        },
        readUint64_LE: function () {
            if (this.data.length < this.position + 8) throw "range error";
            var a = this.data[this.position] + (this.data[this.position + 1] << 8) + (this.data[this.position +
                    2] << 16) + (this.data[this.position + 3] << 24) + (this.data[this.position + 4] << 32) +
                (this.data[this.position + 5] << 40) + (this.data[this.position + 6] << 48) + (this.data[
                    this.position + 7] << 56);
            this.position += 8;
            return a
        },
        seekFromBeginning: function (a) {
            this.position = a
        },
        seekFromCurrent: function (a) {
            this.position += a
        },
        setEndian: function (a) {
            this.endian = a
        },
        position: function () {
            return this.position
        },
        size: function () {
            return this.data.length
        }
    };
    return d
}();