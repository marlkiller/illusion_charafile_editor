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

    this.LoadProductNo = this.br.readInt32_LE(); // 1位 | 64 | 100

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
    this.AIChara_BlockHeader = msgpack.decode(d, b);
    console.log("AICharaFile BlockHeader:\n", this.AIChara_BlockHeader);

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