SelectInputFile();


this.br = new binaryReader(b);
this.HasKKEx = !1;
this.PngSize = -1;
this.loaded = !1;
this.LoadProductNo = 0;
this.LoadVersion = this.LoadCharaType = "";
this.Language = 0;
this.DataID = this.UserID = "";
this.HasHS2Data = !1



function B(b) {
    m = [137,80,78,71,13,10,26,10]
    y = [73, 69, 78, 68]

    var d = b.position;
    b.seekFromBeginning(0);
    var a = b.readBytes(m.length);
    if (!C(a, 0, m, 0, m.length)) return -1;


    // while 循环 读取 4位, 直到 IEND®B`‚ | 49 45 4E 44 AE 42 60 82 | 73 69 78 68 174 66 96 130
    a = b.position; // 118912
    b.seekFromBeginning(d); // d = 0
    return a
}


function parse (){

    this.PngSize = B(this.br);
    this.br.seekFromBeginning(this.PngSize);

    // 32bit = 4byte , 1byte = 8bit
    this.LoadProductNo = this.br.readInt32_LE(); // 32bit | 64 | 100

    this.LoadCharaType = this.br.readUtf8String(); // "【AIS_Chara】"
    this.LoadVersion = this.br.readUtf8String(); // "1.0.0"
    this.Language = this.br.readInt32_LE(); // 0
    this.UserID = this.br.readUtf8String(); // UserID: "2e5495c4-30d6-4ffd-91a5-f5475a7b7ce7"
    this.DataID = this.br.readUtf8String(); // DataID: "0fc8f49b-0f4c-4ccb-b72e-69247dc555b9"

    var b = {
            codec: msgpack.createCodec({
                usemap: !0
            })
        },
    d = this.br.readBytes(this.br.readInt32_LE()); // this.br.readInt32_LE() = 225
    this.AIChara_BlockHeader = msgpack.decode(d, b); // 81...27 | 129...39 | ..lstInfo...size..'
    console.log("AICharaFile BlockHeader:\n", this.AIChara_BlockHeader);
//    0: {"name" => "Custom"}
//    1: {"version" => "0.0.0"}
//    2: {"pos" => 0}
//    3: {"size" => 4530}

//    64 00 00 00  = 100 开始
//
//    获取 下一位 1字节 长度, 忽略0
//    读取
//
//
//    E1 00 00 00 读取 4 字节长度
//
//    获取 listinfo , 解析 listinfo
//
//         获取下一位1字节长度, 忽略 小于 160 , 获取到 减去 160
//


}


readUtf8String: function () {
    for (var a, c = a = 0, b, d = !0; d;)
        b = this.readUint8(), d = 0 != (b & 128);
        a |= (b & 127) <<c;
        c += 7;
    if (0 >= a) return "";
    a = 128 < a - 0 ? 128 : a - 0;
    return (new TextDecoder("utf-8")).decode(this.readBytes(a))
}

readUint8: function () {
    if (this.data.length < this.position + 1) throw "range error";
    var a;
    a = this.data[this.position];
    this.position += 1;
    return a
}

readBytes: function (a) {
    if (this.data.length < this.position + a) throw "range error";
    for (var c = new Uint8Array(a), b = 0; b < a; b++) c[b] = this.data[this.position + b];
    this.position += a;
    return c
}

readInt32_LE: function () {
    var a = this.readUint32_LE();
    a & 2147483648 && (a = -(a - 1 ^ 4294967295));
    return a
}

readUint32_LE: function () {
    if (this.data.length < this.position + 4) throw "range error";
    var a = this.data[this.position] + (this.data[this.position + 1] << 8) + (this.data[this.position +
        2] << 16) + (this.data[this.position + 3] << 24);
    this.position += 4;
    return a
}