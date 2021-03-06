/*! AICharaFile Reader & Writer v1.0.6 | (c) LAHCS 2019-11-21 */
/*! Support AI-Syoujyo 1.0.3 or upper, Compatibled Some CharaFile BepInEx Plugin(MoreAccessories,OverlayMods,etc). */
var AICharaFile = function () {
    function z(b) {
        this.br = new binaryReader(b);
        this.HasKKEx = !1;
        this.PngSize = -1;
        this.loaded = !1;
        this.LoadProductNo = 0;
        this.LoadVersion = this.LoadCharaType = "";
        this.Language = 0;
        this.DataID = this.UserID = "";
        this.HasHS2Data = !1
    }

    function A(b, d) {
        var a;
        a = document.createElement("a");
        a.href = b;
        a.download = d;
        document.body.appendChild(a);
        a.style = "display: none";
        a.click();
        a.remove()
    }

    function B(b) {
        var d = b.position;
        b.seekFromBeginning(0);
        var a = b.readBytes(m.length);
        if (!C(a, 0, m, 0, m.length)) return -1;
        for (a = !0; a;) {
            var c = b.readUint32(),
                f = b.readBytes(y.length);
            C(f, 0, y, 0, y.length) && (a = !1);
            if (c + 4 > b.Size - b.position) return b.seekFromBeginning(d), -1;
            b.seekFromCurrent(c + 4)
        }
        a = b.position;
        b.seekFromBeginning(d);
        return a
    }

    function C(b, d, a, c, f) {
        for (i = 0; i < f; i++)
            if (b[d + i] != a[c + i]) return !1;
        return !0
    }
    var m = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
        y = new Uint8Array([73, 69, 78, 68]);
    z.prototype = {
        Parse: function () {
            console.log("AICharaFile Parse Init...");
            this.HasKKEx = !1;
            try {
                this.PngSize = B(this.br);
                if (-1 == this.PngSize) return console.log("Is Not A Png File!"), !1;
                this.br.seekFromBeginning(this.PngSize);
                this.LoadProductNo = this.br.readInt32_LE();
                if (100 < this.LoadProductNo) return console.log(
                    "\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3088\u308a\u3082\u65b0\u3057\u3044\u88fd\u54c1\u756a\u53f7\u3067\u3059\u3002"
                ), !1;
                this.LoadCharaType = this.br.readUtf8String();
                if ("\u3010AIS_Chara\u3011" != this.LoadCharaType) return console.log(
                    "\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e\u304c\u9055\u3044\u307e\u3059"), !1;
                this.LoadVersion = this.br.readUtf8String();
                if ("1.0.0" < this.LoadVersion) return console.log(
                    "\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3088\u308a\u3082\u65b0\u3057\u3044\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"
                ), !1;
                this.Language = this.br.readInt32_LE();
                this.UserID = this.br.readUtf8String();
                this.DataID = this.br.readUtf8String();
                var b = {
                        codec: msgpack.createCodec({
                            usemap: !0
                        })
                    },
                    d = this.br.readBytes(this.br.readInt32_LE());
                this.AIChara_BlockHeader = msgpack.decode(d, b);
                console.log("AICharaFile BlockHeader:\n", this.AIChara_BlockHeader);
                this.br.readInt64_LE();
                var a = this.br.position,
                    c = this.AIChara_BlockHeader.get("lstInfo");
                this.ExtendData = new Map;
                for (var d = {}, f = 0; f < c.length; d = {
                        HasOverlays: d.HasOverlays,
                        Keys: d.Keys
                    }, f++)
                    if (this.br.seekFromBeginning(a + c[f].get("pos")), "Custom" == c[f].get("name")) this.AIChara_Custom =
                        this.br.readBytes(c[f].get("size")), console.log("AICharaFile Custom:\n", this.AIChara_Custom);
                    else if ("Coordinate" == c[f].get("name")) this.AIChara_Coordinate_Version = c[f].get(
                    "version"), this.AIChara_Coordinate = this.br.readBytes(c[f].get("size")), console.log(
                    "AICharaFile Coordinate:\n", this.AIChara_Coordinate);
                else if ("Parameter" == c[f].get("name")) {
                    var r = this.br.readBytes(c[f].get("size"));
                    this.AIChara_Parameter = msgpack.decode(r, b);
                    console.log("AICharaFile Parameter:\n", this.AIChara_Parameter)
                } else if ("GameInfo" == c[f].get("name")) {
                    var x = this.br.readBytes(c[f].get("size"));
                    this.AIChara_GameInfo = msgpack.decode(x, b);
                    for (var n = this.AIChara_GameInfo.get("desireDefVal"), t = new Map, k = 0; k < n.size; k++) {
                        var p = n.get(k);
                        t.set(k, parseInt(p) + .001)
                    }
                    this.AIChara_GameInfo.set("desireDefVal", t);
                    for (var q = this.AIChara_GameInfo.get("desireBuffVal"), u = new Map, k = 0; k < q.size; k++)
                        p = q.get(k), u.set(k, parseInt(p) + .001);
                    this.AIChara_GameInfo.set("desireBuffVal", u);
                    console.log("AICharaFile GameInfo:\n", this.AIChara_GameInfo)
                } else if ("Parameter2" == c[f].get("name")) {
                    var v = this.br.readBytes(c[f].get("size"));
                    this.AIChara_Parameter2 = msgpack.decode(v, b);
                    console.log("AICharaFile Honey Select2 Parameter2:\n", this.AIChara_Parameter2);
                    this.HasHS2Data = !0
                } else if ("GameInfo2" == c[f].get("name")) {
                    var w = this.br.readBytes(c[f].get("size"));
                    this.AIChara_GameInfo2 = msgpack.decode(w, b);
                    console.log("AICharaFile Honey Select2 GameInfo2:\n", this.AIChara_GameInfo2);
                    this.HasHS2Data = !0
                } else if ("Status" == c[f].get("name")) this.AIChara_Status = this.br.readBytes(c[f].get(
                    "size")), console.log("AICharaFile Status:\n", this.AIChara_Status);
                else if (this.ExtendData.set(c[f].get("name"), this.br.readBytes(c[f].get("size"))),
                    console.log("AICharaFile Extend Info [", c[f].get("name"), "]:\n", this.ExtendData.get(
                        c[f].get("name"))), "KKEx" == c[f].get("name")) {
                    this.HasKKEx = !0;
                    var l = msgpack.decode(this.ExtendData.get("KKEx"), b);
                    d.Keys = [];
                    d.HasOverlays = !1;
                    console.log("AICharaFile Extend KKEx:\n", l);
                    l.forEach(function (a) {
                        return function (b, c) {
                            "com.bepis.sideloader.universalautoresolver" != c && ("KCOX" == c ||
                                "KSOX" == c ? a.HasOverlays || (a.Keys.push("OverlayMods"),
                                    a.HasOverlays = !0) : a.Keys.push(c))
                        }
                    }(d));
                    this.KKExKeys = d.Keys
                }
                this.loaded = !0
            } catch (h) {
                this.loaded = !1
            }
            return this.loaded
        },
        ParseOK: function () {
            return this.loaded
        },
        PngUInt8Array: function (b, d) {
            var a = b.position;
            b.seekFromBeginning(0);
            var c = b.readBytes(d);
            b.seekFromBeginning(a);
            return c
        },
        GetCharFilePngImg: function () {
            if (!this.loaded) return "";
            var b = this.br.position;
            this.br.seekFromBeginning(0);
            var d = this.br.readBytes(this.PngSize);
            this.br.seekFromBeginning(b);
            return d
        },
        toBinary: function (b, d) {
            if (!this.loaded) return new Uint8Array(0);
            var a = new binaryWriter(1024);
            b ? a.writeBytes(d) : a.writeBytes(this.PngUInt8Array(this.br, this.PngSize));
            a.writeInt32_LE(this.LoadProductNo);
            a.writeUtf8String(this.LoadCharaType);
            a.writeUtf8String(this.LoadVersion);
            a.writeInt32_LE(this.Language);
            a.writeUtf8String(this.UserID);
            a.writeUtf8String(this.DataID);
            for (var c = {
                        codec: msgpack.createCodec({
                            usemap: !0
                        })
                    }, f = this.AIChara_Custom.length, r = this.AIChara_Coordinate.length, x = msgpack.encode(
                        this.AIChara_Parameter, c), n = x.length, t = msgpack.encode(this.AIChara_GameInfo,
                        c), k = t.length, p = msgpack.encode(this.AIChara_Parameter2, c), q = p.length, u =
                    msgpack.encode(this.AIChara_GameInfo2, c), v = u.length, w = this.AIChara_Status.length,
                    l = 0, h = 0, g = this.AIChara_BlockHeader.get("lstInfo"), e = 0; e < g.length; e++)
                if ("Custom" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", f), h += f, l += f;
                else if ("Coordinate" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", r), h += r,
                l += r;
            else if ("Parameter" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", n), h += n, l +=
                n;
            else if ("GameInfo" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", k), h += k, l +=
                k;
            else if ("Status" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", w), h += w, l += w;
            else if ("Parameter2" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", q), h += q, l +=
                q;
            else if ("GameInfo2" == g[e].get("name")) g[e].set("pos", h), g[e].set("size", v), h += v, l +=
                v;
            else {
                var m = this.ExtendData.get(g[e].get("name"));
                g[e].set("pos", h);
                g[e].set("size", m.length);
                h += m.length;
                l += m.length
            }
            c = msgpack.encode(this.AIChara_BlockHeader, c);
            a.writeInt32_LE(c.length);
            a.writeBytes(c);
            a.writeInt32_LE(l);
            a.writeInt32_LE(0);
            for (e = 0; e < g.length; e++) "Custom" == g[e].get("name") ? a.writeBytes(this.AIChara_Custom) :
                "Coordinate" == g[e].get("name") ? a.writeBytes(this.AIChara_Coordinate) : "Parameter" == g[
                    e].get("name") ? a.writeBytes(x) : "GameInfo" == g[e].get("name") ? a.writeBytes(t) :
                "Status" == g[e].get("name") ? a.writeBytes(this.AIChara_Status) : "Parameter2" == g[e].get(
                    "name") ? a.writeBytes(p) : "GameInfo2" == g[e].get("name") ? a.writeBytes(u) : a.writeBytes(
                    this.ExtendData.get(g[e].get("name")));
            return a.toBuffer()
        },
        toFile: function (b, d, a, c) {
            var f;
            a ? (a = new binaryReader(c), c = B(a), d = -1 != c ? new Blob([this.toBinary(!0, this.PngUInt8Array(
                a, c))], {
                type: d
            }) : new Blob([this.toBinary(!1, null)], {
                type: d
            })) : d = new Blob([this.toBinary(!1, null)], {
                type: d
            });
            f = window.URL.createObjectURL(d);
            A(f, b);
            setTimeout(function () {
                return window.URL.revokeObjectURL(f)
            }, 1E3)
        },
        SaveCoordinatetoBinary: function () {
            if (!this.loaded) return new Uint8Array(0);
            var b = new binaryWriter(1024);
            b.writeBytes(this.PngUInt8Array(this.br, this.PngSize));
            b.writeInt32_LE(this.LoadProductNo);
            b.writeUtf8String("\u3010AIS_Clothes\u3011");
            b.writeUtf8String(this.AIChara_Coordinate_Version);
            b.writeInt32_LE(this.Language);
            b.writeUtf8String(this.AIChara_Parameter.get("fullname") + "\u306e\u670d\u88c5");
            b.writeInt32_LE(this.AIChara_Coordinate.length);
            b.writeBytes(this.AIChara_Coordinate);
            if (this.HasKKEx) {
                b.writeUtf8String("KKEx");
                b.writeInt32_LE(3);
                var d = {
                        codec: msgpack.createCodec({
                            usemap: !0
                        })
                    },
                    a = msgpack.decode(this.ExtendData.get("KKEx"), d);
                a.forEach(function (c, b) {
                    "KCOX" == b && 2 <= c.length && c[1].forEach(function (a, b) {
                        if ("Overlays" == b) {
                            var d;
                            d = a.slice(2);
                            c[1].set("Overlays", d)
                        }
                    });
                    "KSOX" != b && "com.deathweasel.bepinex.uncensorselector" != b || delete a[b]
                });
                d = msgpack.encode(a, d);
                b.writeInt32_LE(d.length);
                b.writeBytes(d)
            }
            return b.toBuffer()
        },
        SaveCoordinatetoFile: function (b, d) {
            var a, c;
            a = new Blob([this.SaveCoordinatetoBinary()], {
                type: d
            });
            c = window.URL.createObjectURL(a);
            A(c, b);
            setTimeout(function () {
                return window.URL.revokeObjectURL(c)
            }, 1E3)
        }
    };
    return z
}();