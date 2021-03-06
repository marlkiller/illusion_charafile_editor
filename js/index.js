$(document).ready(function () {
    var b = $.cookie("lang");
    null == b && (b = "zh-cn");
    for (var b = b.toLowerCase(), d = LanguageIdx = 0; d < Languages.length; d++) $("#LangSelect").append(
            "\x3coption\x3e" + Languages[d].Language.Name + "\x3c/option\x3e"), b == Languages[d].Language.ShortName &&
        (LanguageIdx = d);
    ChangeLanguage(Languages, LanguageIdx);
    $("#LangSelect").change(function () {
        LanguageIdx = $("#LangSelect").get(0).selectedIndex;
        ChangeLanguage(Languages, LanguageIdx)
    });
    InitMonthDaysSelect()
});

function SetHsDataShowHide(b) {
    b ? ($(".hs2_hide_hr").show(), $("#AI_CharaFile_HoneySelect2_Parameter_Title").show(), $(
            "#AI_CharaFile_HoneySelect2_Parameter").show(), $("#AI_CharaFile_HoneySelect2_GameInfo_Title").show(),
        $("#AI_CharaFile_HoneySelect2_GameInfo1").show(), $("#AI_CharaFile_HoneySelect2_GameInfo2").show(), $(
            "#AI_CharaFile_HoneySelect2_GameInfo3").show()) : ($(".hs2_hide_hr").hide(), $(
            "#AI_CharaFile_HoneySelect2_Parameter_Title").hide(), $("#AI_CharaFile_HoneySelect2_Parameter").hide(),
        $("#AI_CharaFile_HoneySelect2_GameInfo_Title").hide(), $("#AI_CharaFile_HoneySelect2_GameInfo1").hide(), $(
            "#AI_CharaFile_HoneySelect2_GameInfo2").hide(), $("#AI_CharaFile_HoneySelect2_GameInfo3").hide())
}

function ChangeLanguage(b, d) {
    var a = b[d];
    $.cookie("lang", a.Language.ShortName, {
        expires: 365
    });
    $("#LangSelect").get(0).selectedIndex = d;
    $("#Title").text(a.Title + " v" + Version);
    $("#FileSelectTitle").text(a.FileSelect.Title);
    $("#AI_LoadStatus").text(a.FileSelect.LoadStatus.Wait);
    $("#PluginDependTitle").text(a.PluginDepend.Title);
    $("#PluginDependIDColumnTitle").text(a.PluginDepend.Column.ID);
    $("#PluginDependNameColumnTitle").text(a.PluginDepend.Column.Name);
    $("#Visitors_Statistics").text(a.VisitorsStatistics);
    $("#Info_Tag").text(a.ToolInfo.InfoTitle);
    $(".Author_Tag").text(a.ToolInfo.AuthorTitle);
    $("#Update_Tag").text(a.ToolInfo.UpdateTitle);
    $("#Friendlylink_Tag").text(a.ToolInfo.FriendlyLink.Title);
    $("#Friendlylink_Detail1").text(a.ToolInfo.FriendlyLink.Detail1);
    $("#Friendlylink_Detail2").text(a.ToolInfo.FriendlyLink.Detail2);
    $("#AI_CharaExchange_Title").text(a.AICharaFileModifyImage.Title);
    $("#AI_CharaFile_NewPng_Title").text(a.AICharaFileModifyImage.NewImageSelect.Title);
    $("#AI_NewImage_LoadStatus").text(a.AICharaFileModifyImage.NewImageSelect.LoadStatus.Wait);
    $("#AI_CharaFile_Title").text(a.AICharaFileInfo.Title);
    $("#AI_CharaFile_Parameter_Title").text(a.AICharaFileInfo.Parameter.Title);
    $("#AI_FullName_Title").text(a.AICharaFileInfo.Parameter.FullName);
    $("#AI_BirthMonth_Title").text(a.AICharaFileInfo.Parameter.BirthMonth);
    $("#AI_BirthDay_Title").text(a.AICharaFileInfo.Parameter.BirthDay);
    SetSelectLanguage("AI_Sex_Title", "AI_Sex", a.AICharaFileInfo.Parameter.Sex);
    SetSelectLanguage("AI_Personality_Title", "AI_Personality", a.AICharaFileInfo.Parameter.Personality);
    for (var c = 1; 3 >= c; c++) SetSelectLanguageCustom("AI_HsWish_Title" + c, "AI_HsWish" + c, a.AICharaFileInfo.Parameter
        .HsWish.Title + c, a.AICharaFileInfo.Parameter.HsWish.Option);
    SetSelectLanguage("AI_Futanari_Title", "AI_Futanari", a.AICharaFileInfo.Parameter.Futanari);
    $("#AI_CharaFile_GameInfo_Title").text(a.AICharaFileInfo.GameInfo.Title);
    SetSelectLanguage("AI_GameRegistration_Title", "AI_GameRegistration", a.AICharaFileInfo.GameInfo.GameRegistration);
    SetSelectLanguage("AI_Phase_Title", "AI_Phase", a.AICharaFileInfo.GameInfo.Phase);
    SetSelectLanguage("AI_LifeStyle_Title", "AI_LifeStyle", a.AICharaFileInfo.GameInfo.LifeStyle);
    for (c = 1; 8 >= c; c++) $("#AI_FlavorState_Title" + c).text(a.AICharaFileInfo.GameInfo.FlavorState[c - 1]);
    for (c = 1; 5 >= c; c++) SetSelectLanguageCustom("AI_NormalSkill_Title" + c, "AI_NormalSkill" + c, a.AICharaFileInfo
        .GameInfo.NormalSkill.Title + c, a.AICharaFileInfo.GameInfo.NormalSkill.Option);
    for (c = 1; 5 >= c; c++) SetSelectLanguageCustom("AI_HSkill_Title" + c, "AI_HSkill" + c, a.AICharaFileInfo.GameInfo
        .HSkill.Title + c, a.AICharaFileInfo.GameInfo.HSkill.Option);
    $("#AICharaFileSave").val(a.SaveButton.Chara);
    $("#AICharaFileCombineSave").val(a.SaveButton.ModifyCharaImage);
    $("#AICharaFileCoordinateSave").val(a.SaveButton.Coordinate);
    $("#AI_CharaFile_HoneySelect2_Title").text(a.AICharaFileInfo.HS2_Title);
    $("#AI_CharaFile_HoneySelect2_Parameter_Title").text(a.AICharaFileInfo.Parameter2.Title);
    SetSelectLanguage("HS2_Personality_Title", "HS2_Personality", a.AICharaFileInfo.Parameter2.Personality);
    SetSelectLanguage("HS2_Trait_Title", "HS2_Trait", a.AICharaFileInfo.Parameter2.Trait);
    SetSelectLanguage("HS2_Mind_Title", "HS2_Mind", a.AICharaFileInfo.Parameter2.Mind);
    SetSelectLanguage("HS2_hAttribute_Title", "HS2_hAttribute", a.AICharaFileInfo.Parameter2.hAttribute);
    $("#AI_CharaFile_HoneySelect2_GameInfo_Title").text(a.AICharaFileInfo.GameInfo2.Title);
    $("#HS2_Favor_Title").text(a.AICharaFileInfo.GameInfo2.Favor);
    $("#HS2_Enjoyment_Title").text(a.AICharaFileInfo.GameInfo2.Enjoyment);
    $("#HS2_Aversion_Title").text(a.AICharaFileInfo.GameInfo2.Aversion);
    $("#HS2_Slavery_Title").text(a.AICharaFileInfo.GameInfo2.Slavery);
    $("#HS2_Broken_Title").text(a.AICharaFileInfo.GameInfo2.Broken);
    $("#HS2_Dependence_Title").text(a.AICharaFileInfo.GameInfo2.Dependence);
    $("#HS2_HCount_Title").text(a.AICharaFileInfo.GameInfo2.HCount);
    $("#HS2_Dirty_Title").text(a.AICharaFileInfo.GameInfo2.Dirty);
    $("#HS2_Tiredness_Title").text(a.AICharaFileInfo.GameInfo2.Tiredness);
    $("#HS2_Toilet_Title").text(a.AICharaFileInfo.GameInfo2.Toilet);
    $("#HS2_Libido_Title").text(a.AICharaFileInfo.GameInfo2.Libido);
    $("#HS2_Alertness_Title").text(a.AICharaFileInfo.GameInfo2.Alertness);
    SetSelectLanguage("HS2_FirstHFlag_Title", "HS2_FirstHFlag", a.AICharaFileInfo.GameInfo2.FirstHFlag);
    SetSelectLanguage("HS2_LockBroken_Title", "HS2_LockBroken", a.AICharaFileInfo.GameInfo2.LockBroken);
    SetSelectLanguage("HS2_LockDependence_Title", "HS2_LockDependence", a.AICharaFileInfo.GameInfo2.LockDependence);
    $("#HS2_ResistH_Title").text(a.AICharaFileInfo.GameInfo2.ResistH);
    $("#HS2_ResistPain_Title").text(a.AICharaFileInfo.GameInfo2.ResistPain);
    $("#HS2_ResistAnal_Title").text(a.AICharaFileInfo.GameInfo2.ResistAnal)
}

function SetSelectLanguage(b, d, a) {
    $("#" + b).text(a.Title);
    b = $("#" + d).get(0).selectedIndex;
    0 > b && (b = 0);
    $("#" + d).empty();
    for (var c = 0; c < a.Option.length; c++) $("#" + d).append("\x3coption\x3e" + a.Option[c] + "\x3c/option\x3e");
    $("#" + d).get(0).selectedIndex = b
}

function SetSelectLanguageCustom(b, d, a, c) {
    $("#" + b).text(a);
    b = $("#" + d).get(0).selectedIndex;
    0 > b && (b = 0);
    $("#" + d).empty();
    for (a = 0; a < c.length; a++) $("#" + d).append("\x3coption\x3e" + c[a] + "\x3c/option\x3e");
    $("#" + d).get(0).selectedIndex = b
}

function SetBoolSelect(b, d) {
    var a = 0;
    1 == d && (a = 1);
    $("#" + b).get(0).selectedIndex = a
}
var HasNewPngImage = !1,
    NewPngImageArray = new Uint8Array(0);

function SelectNewImageFile() {
    HasNewPngImage = !1;
    NewPngImageArray = new Uint8Array(0);
    var b = document.getElementById("chara_new_image_input").files[0];
    if ("undefined" != typeof b) {
        var d = new FileReader;
        d.readAsArrayBuffer(b);
        d.onload = function () {
            NewPngImageArray = new Uint8Array(d.result);
            SetNewPngImage(NewPngImageArray);
            HasNewPngImage = !0
        }
    }
}

function SelectInputFile() {
    var b = document.getElementById("chara_image_input").files[0];
    if ("undefined" != typeof b) {
        $("#AICharaFileSave").unbind();
        $("#AICharaFileCombineSave").unbind();
        $("#AICharaFileCoordinateSave").unbind();
        var d = new FileReader;
        d.readAsArrayBuffer(b);
        d.onload = function () {
            var a = new AICharaFile(new Uint8Array(d.result));
            if (a.Parse()) {
                $("#AI_LoadStatus").html(Languages[LanguageIdx].FileSelect.LoadStatus.Wait);
                $("#chara_image_input").val("");
                $("#PluginDepend").hide();
                $("#PluginDependList").html("");
                SetPngImage(a.GetCharFilePngImg());
                $("#AI_FullName").val(a.AIChara_Parameter.get("fullname"));
                $("#AI_BirthMonth").get(0).selectedIndex = a.AIChara_Parameter.get("birthMonth") - 1;
                $("#AI_BirthDay").get(0).selectedIndex = a.AIChara_Parameter.get("birthDay") - 1;
                $("#AI_Sex").get(0).selectedIndex = a.AIChara_Parameter.get("sex");
                $("#AI_Personality").get(0).selectedIndex = a.AIChara_Parameter.get("personality");
                $("#AI_HsWish1").get(0).selectedIndex = 0;
                $("#AI_HsWish2").get(0).selectedIndex = 0;
                for (var c = $("#AI_HsWish3").get(0).selectedIndex = 0; c < a.AIChara_Parameter.get("hsWish").length; c++)
                    $("#AI_HsWish" + (c + 1)).get(0).selectedIndex = a.AIChara_Parameter.get("hsWish")[c] + 1;
                a.AIChara_Parameter.get("futanari") ? $("#AI_Futanari").get(0).selectedIndex = 1 : $("#AI_Futanari")
                    .get(0).selectedIndex = 0;
                a.AIChara_GameInfo.get("gameRegistration") ? $("#AI_GameRegistration").get(0).selectedIndex = 1 : $(
                    "#AI_GameRegistration").get(0).selectedIndex = 0;
                $("#AI_Phase").get(0).selectedIndex = a.AIChara_GameInfo.get("phase");
                $("#AI_LifeStyle").get(0).selectedIndex = a.AIChara_GameInfo.get("lifestyle") + 1;
                for (c = 0; c < a.AIChara_GameInfo.get("normalSkill").size; c++) $("#AI_NormalSkill" + (c + 1)).get(
                    0).selectedIndex = a.AIChara_GameInfo.get("normalSkill").get(c) + 1;
                for (c = 0; c < a.AIChara_GameInfo.get("hSkill").size; c++) $("#AI_HSkill" + (c + 1)).get(0).selectedIndex =
                    a.AIChara_GameInfo.get("hSkill").get(c) + 1;
                for (c = 0; c < a.AIChara_GameInfo.get("flavorState").size; c++) $("#AI_FlavorState" + (c + 1)).val(
                    a.AIChara_GameInfo.get("flavorState").get(c));
                1 == a.HasHS2Data ? (SetHsDataShowHide(a.HasHS2Data), $("#HS2_Personality").get(0).selectedIndex =
                        a.AIChara_Parameter2.get("personality"), $("#HS2_Trait").get(0).selectedIndex = a.AIChara_Parameter2
                        .get("trait"), $("#HS2_Mind").get(0).selectedIndex = a.AIChara_Parameter2.get("mind"), $(
                            "#HS2_hAttribute").get(0).selectedIndex = a.AIChara_Parameter2.get("hAttribute"), $(
                            "#HS2_Favor").val(a.AIChara_GameInfo2.get("Favor")), $("#HS2_Enjoyment").val(a.AIChara_GameInfo2
                            .get("Enjoyment")), $("#HS2_Aversion").val(a.AIChara_GameInfo2.get("Aversion")), $(
                            "#HS2_Slavery").val(a.AIChara_GameInfo2.get("Slavery")), $("#HS2_Broken").val(a.AIChara_GameInfo2
                            .get("Broken")), $("#HS2_Dependence").val(a.AIChara_GameInfo2.get("Dependence")), $(
                            "#HS2_HCount").val(a.AIChara_GameInfo2.get("hCount")), $("#HS2_Dirty").val(a.AIChara_GameInfo2
                            .get("Dirty")), $("#HS2_Tiredness").val(a.AIChara_GameInfo2.get("Tiredness")), $(
                            "#HS2_Toilet").val(a.AIChara_GameInfo2.get("Toilet")), $("#HS2_Libido").val(a.AIChara_GameInfo2
                            .get("Libido")), $("#HS2_Alertness").val(a.AIChara_GameInfo2.get("alertness")),
                        SetBoolSelect("HS2_FirstHFlag", a.AIChara_GameInfo2.get("firstHFlag")), SetBoolSelect(
                            "HS2_LockBroken", a.AIChara_GameInfo2.get("lockBroken")), SetBoolSelect(
                            "HS2_LockDependence", a.AIChara_GameInfo2.get("lockDependence")), $("#HS2_ResistH").val(
                            a.AIChara_GameInfo2.get("resistH")), $("#HS2_ResistPain").val(a.AIChara_GameInfo2.get(
                            "resistPain")), $("#HS2_ResistAnal").val(a.AIChara_GameInfo2.get("resistAnal"))) :
                    SetHsDataShowHide(a.HasHS2Data);
                console.log("\u52a0\u8f7d\u6210\u529f");
                if (a.HasKKEx) {
                    for (c = 0; c < a.KKExKeys.length; c++) $("#PluginDependList").append("\x3ctr\x3e\x3ctd\x3e" +
                        Number(c + 1) + "\x3c/td\x3e\x3ctd\x3e" + a.KKExKeys[c] + "\x3c/td\x3e\x3c/tr\x3e");
                    $("#PluginDepend").show()
                }
                $("#AICharaFileCoordinateSave").click(function () {
                    a.SaveCoordinatetoFile("AISCoordeF_" + Math.round((new Date).getTime() / 1E3) + ".png",
                        "image/png");
                    console.log("AICharaFile Coordinate Saved.");
                    window.location.reload()
                });
                $("#AICharaFileSave , #AICharaFileCombineSave").click(function () {
                    console.log("AICharaFile Param Save...");
                    a.AIChara_Parameter.set("fullname", $("#AI_FullName").val());
                    a.AIChara_Parameter.set("birthMonth", $("#AI_BirthMonth").get(0).selectedIndex + 1);
                    a.AIChara_Parameter.set("birthDay", $("#AI_BirthDay").get(0).selectedIndex + 1);
                    a.AIChara_Parameter.set("sex", $("#AI_Sex").get(0).selectedIndex);
                    a.AIChara_Parameter.set("personality", $("#AI_Personality").get(0).selectedIndex);
                    for (var c = [], b = 0; 3 > b; b++) {
                        var d = $("#AI_HsWish" + (b + 1)).get(0).selectedIndex - 1; - 1 != d && c.push(d)
                    }
                    a.AIChara_Parameter.set("hsWish", unique(c));
                    a.AIChara_Parameter.set("futanari", 1 == $("#AI_Futanari").get(0).selectedIndex);
                    a.AIChara_GameInfo.set("gameRegistration", 1 == $("#AI_GameRegistration").get(0).selectedIndex);
                    a.AIChara_GameInfo.set("phase", $("#AI_Phase").get(0).selectedIndex);
                    a.AIChara_GameInfo.set("lifestyle", $("#AI_LifeStyle").get(0).selectedIndex - 1);
                    for (b = 0; b < a.AIChara_GameInfo.get("normalSkill").size; b++) a.AIChara_GameInfo.get(
                        "normalSkill").set(b, $("#AI_NormalSkill" + (b + 1)).get(0).selectedIndex - 1);
                    for (b = 0; b < a.AIChara_GameInfo.get("hSkill").size; b++) a.AIChara_GameInfo.get(
                        "hSkill").set(b, $("#AI_HSkill" + (b + 1)).get(0).selectedIndex - 1);
                    for (b = c = 0; b < a.AIChara_GameInfo.get("flavorState").size; b++) c += Number($(
                        "#AI_FlavorState" + (b + 1)).val()), a.AIChara_GameInfo.get("flavorState").set(
                        b, Number($("#AI_FlavorState" + (b + 1)).val()));
                    a.AIChara_GameInfo.set("totalFlavor", c);
                    a.HasHS2Data && (a.AIChara_Parameter2.set("personality", $("#HS2_Personality").get(0).selectedIndex),
                        a.AIChara_Parameter2.set("trait", $("#HS2_Trait").get(0).selectedIndex), a.AIChara_Parameter2
                        .set("mind", $("#HS2_Mind").get(0).selectedIndex), a.AIChara_Parameter2.set(
                            "hAttribute", $("#HS2_hAttribute").get(0).selectedIndex), a.AIChara_GameInfo2
                        .set("Favor", Number($("#HS2_Favor").val())), a.AIChara_GameInfo2.set(
                            "Enjoyment", Number($("#HS2_Enjoyment").val())), a.AIChara_GameInfo2.set(
                            "Aversion", Number($("#HS2_Aversion").val())), a.AIChara_GameInfo2.set(
                            "Slavery", Number($("#HS2_Slavery").val())), a.AIChara_GameInfo2.set(
                            "Broken", Number($("#HS2_Broken").val())), a.AIChara_GameInfo2.set(
                            "Dependence", Number($("#HS2_Dependence").val())), a.AIChara_GameInfo2.set(
                            "hCount", Number($("#HS2_HCount").val())), a.AIChara_GameInfo2.set("Dirty",
                            Number($("#HS2_Dirty").val())), a.AIChara_GameInfo2.set("Tiredness", Number(
                            $("#HS2_Tiredness").val())), a.AIChara_GameInfo2.set("Toilet", Number($(
                            "#HS2_Toilet").val())), a.AIChara_GameInfo2.set("Libido", Number($(
                            "#HS2_Libido").val())), a.AIChara_GameInfo2.set("alertness", Number($(
                            "#HS2_Alertness").val())), a.AIChara_GameInfo2.set("firstHFlag", 1 == $(
                            "#HS2_FirstHFlag").get(0).selectedIndex), a.AIChara_GameInfo2.set(
                            "lockBroken", 1 == $("#HS2_LockBroken").get(0).selectedIndex), a.AIChara_GameInfo2
                        .set("lockDependence", 1 == $("#HS2_LockDependence").get(0).selectedIndex), a.AIChara_GameInfo2
                        .set("resistH", Number($("#HS2_ResistH").val())), a.AIChara_GameInfo2.set(
                            "resistPain", Number($("#HS2_ResistPain").val())), a.AIChara_GameInfo2.set(
                            "resistAnal", Number($("#HS2_ResistAnal").val())));
                    console.log("AICharaFile Encode...");
                    a.toFile("NewChara.png", "image/png", HasNewPngImage, NewPngImageArray);
                    console.log("AICharaFile Saved.");
                    window.location.reload()
                })
            } else $("#AI_LoadStatus").html(Languages[LanguageIdx].FileSelect.LoadStatus.Failed)
        }
    }
}

function SetPngImage(b) {
    b = new Blob([b]);
    var d = new FileReader;
    d.onload = function () {
        $("#upload_chara_photo span").hide();
        $("#upload_chara_photo img").attr("src", d.result).css("margin-left", "-6px").css("margin-top", "0%").css(
            "margin-top", "!important").css("width", "105%").css("height", "100%")
    };
    d.readAsDataURL(b)
}

function SetNewPngImage(b) {
    b = new Blob([b]);
    var d = new FileReader;
    d.onload = function () {
        $("#upload_chara_new_image span").hide();
        $("#upload_chara_new_image img").attr("src", d.result).css("margin-left", "0px").css("margin-top", "0%").css(
            "margin-top", "!important").css("width", "100%").css("height", "100%").css("object-fit", "contain")
    };
    d.readAsDataURL(b)
}

function unique(b) {
    for (var d = 0, a = b.length; d < a; d++)
        for (var c = d + 1, a = b.length; c < a; c++) b[d] === b[c] && (b.splice(c, 1), c--, a--);
    return b
}

function InitMonthDaysSelect() {
    for (var b = "", d = 1; 12 >= d; d++) b += "\x3coption\x3e" + d + "\x3c/option\x3e";
    $("#AI_BirthMonth").html(b);
    $("#AI_BirthMonth").get(0).selectedIndex = 0;
    b = "";
    for (d = 1; 31 >= d; d++) b += "\x3coption\x3e" + d + "\x3c/option\x3e";
    $("#AI_BirthDay").html(b);
    $("#AI_BirthDay").get(0).selectedIndex = 0;
    $("#AI_BirthMonth").on("change", function () {
        if ($(this).val()) {
            var a = Number($(this).val()),
                b = 30;
            2 == a && (b = 29);
            if (1 == a || 3 == a || 5 == a || 7 == a || 8 == a || 10 == a || 12 == a) b = 31;
            for (var a = "", d = 1; d <= b; d++) a += "\x3coption\x3e" + d + "\x3c/option\x3e";
            $("#AI_BirthDay").html(a);
            $("#AI_BirthDay").get(0).selectedIndex = 0
        }
    })
};