/*! AI-Syoujyo CharaFile Web Editor Internationalization Support | (c) LAHCS 2019-11-22 */
/*! If you translated an other language, you can send the JS Language Object to my email [lahcs@qq.com]. I will update to site.*/

//版本号
let Version = '1.1.1';

//初始化Languages数组,新增语言push进数组
let Languages = [];
let LanguageIdx = 0;

// 简体中文
// Reference https://zodgame.xyz/forum.php?mod=viewthread&tid=193385&extra=page%3D1
let Language_CN = {
	Language : {
		Name : "简体中文",
		ShortName : "zh-cn",
	},
	ToolInfo:{
		InfoTitle : "工具信息",
		AuthorTitle : "作者",
		UpdateTitle : "更新页",
		FriendlyLink : {
			Title : "友情链接",
			Detail1 : "支持官方/Booru社区人物卡",
			Detail2 : "浏览/上传/下载",
		},
 	},
	Title:"AI-少女 & Honey-Select2 卡牌在线编辑器", 
	FileSelect: {
		Title : "人物卡牌",
		LoadStatus:{
			Wait: "加载人物卡牌",
			Failed: "无效的人物卡牌文件"
		}
	},
	SaveButton : {
		Chara : "保存修改",
		ModifyCharaImage : "保存修改",
		Coordinate : "提取并导出服装卡",
	},
	PluginDepend :{
		Title: "依赖插件",
		Column:{
			ID : "ID",
			Name : "插件名称"
		},
	},
	VisitorsStatistics : "访客统计",
	AICharaFileModifyImage : {
		Title : "修改卡牌封面",
		NewImageSelect : {
			Title : "选择新的封面图片",
			LoadStatus:{
				Wait: "加载新的人物卡牌封面图片",
				Failed: "无效的PNG图片"
			},
		},
	},
	AICharaFileInfo : {
		Title : "卡牌信息",
		Parameter : {
			Title : "AI-少女 基础信息",
			FullName : "人物姓名",
			BirthMonth : "出生月份",
			BirthDay : "出生日期",
			Sex : {
				Title : "性别",
				Option : ["男性","女性"],
			},
			Personality : {
				Title : "人物类型",
				Option : ["如机械般无感情","落落大方且温柔","高意识且自信","一意孤行且自私","无精打采且懒散","积极开朗且乐观"],
			},
			HsWish : {
				Title : "特性",
				Option: ["无","温柔的","快乐的","小恶魔","喜爱刺激","有礼仪的","禁断的","冷静的","金钱","知性的","有信念的","忠诚的","有持久力","可爱","天真","不完全","理解能力","判断能力","治愈"],
			},
			Futanari : {
				Title : "扶他",
				Option : ["否","是"],
			}
		},
		GameInfo : {
			Title : "AI-少女 游戏信息",
			GameRegistration : {
				Title : "登岛状态",
				Option : ["未登岛","已登岛"],
			},
			Phase : {
				Title : "游戏进度(爱心)",
				Option : ["❤","❤❤","❤❤❤","❤❤❤❤"],
			},
			LifeStyle : {
				Title : "生活方式",
				Option : ["无","【索要者】物欲优先的强欲型。执着于食物，对道具的要求会变多。","【Baby】喜欢被宠爱的类型。喜欢收到礼物，寂寞的时候就靠近她。","【Driver】不依赖他人而自己行动的类型。容易进行食物，物品的收集等。","【Controller】不正视自己的类型。经常休息，睡觉。","【Excitement Seeker】是即刻有兴趣却容易厌倦的类型。容易移动到别的地方，但厌烦了又会去干别的事情。","【我行我素】总是我行我素。喜欢享受自己的世界，玩耍，洗澡"],
			},
			FlavorState : ["女子力 Exp","信赖 Exp","人性 Exp","本能 Exp","变态 Exp","警戒 Exp","暗 Exp","社交 Exp"],
			NormalSkill : {
				Title : "日常技能",
				Option : ["无","【厨艺爱好者】会更频繁地制作料理。","【爱美之心】会更频繁地洗澡。","【动物之友】能更容易地接触到动物。","【睡美人】嗜睡。","【巫女的血统】身体潮湿时不会体温下降、不会轻易黑化。","【努力就能做到】在行动中得到的成长值要高于平时。","【意志不坚】情绪易受外界影响。","【新刺激嗜好】将有更高几率收到女孩的礼物。","【亲近感】将有更高几率跟随玩家行动。","【贤妻良母】行动带来的信赖提升值将会更高、干劲上限提高10%。","【钓友】女孩去钓鱼的几率将会提高。","【冒失娘】会更频繁地受伤。","【种地专长】会更频繁地前往田地、农作物的生长速度会有少许提高。","【贪婪】女孩会更容易迷恋上某些物品。","【不知疲倦】不会进入疲惫的异常状态、会更频繁地进行探索。","【大胃王】会更频繁地进餐。","【喜欢下雨】即便是下雨天也会外出。","【野性】很少会使用营地的家具。","【物资收集】会更频繁地用手进行采集。","【御兽者】会有更高几率捡到猫咪。","【闷骚色狼】H感情的上升速度将会有少许提高。","【浮浪子】女孩会更频繁地出去玩。","【性欲旺盛】女孩发来H邀约的次数将会增加。","【好奇宝宝】会更容易对H的对话内容产生兴趣。","【诅咒体质】会时常积累疲劳、与此同时H感情的上升率也会提高、发来H邀约的次数也将增多。","【神经质】心情变差的阈值将会降低。","【疑神疑鬼】H对话失败时心情将会变得很差。","【心灵屏障】会更难接受玩家的建议。","【身体管理】当疲劳开始积攒、会优先去休息。","【忍耐】不会陷入空腹状态。","【容易寂寞】会更频繁地与玩家对话。","【善于交流】与其他女孩对话时能更容易拉近关系。","【健谈】会更频繁地与其他女孩对话。","【行动派】干劲上限提高10%。","【第六感】被呼叫时即便距离很远也能凭感觉掌握玩家所在的位置。","【怠惰】会更频繁地偷懒去休息。","【洁癖】不洗澡时心情将会变差。","【不幸】捡到等级1道具的几率将会提高。","【体弱多病】会更容易得感冒。","【阴暗】与其他女孩对话时、对方会积攒疲劳。","【勇敢】会更多地前往距离更远的区域。","【收藏家】会更频繁地捡拾道具。","【地质专家】会更频繁地使用十字镐挖取道具。","【毅力】很难陷入高温状态。","【强运】捡到等级3道具的几率将会提高。","【马大哈】饮料对其产生的体温调节作用将会减半。","【幸运】捡到等级2道具的几率将会提高。","【挖掘爱好者】会更频繁地使用铲子掘取道具。","【昆虫收藏家】会更频繁地使用虫网捉取昆虫。","【举一反三】获得道具时习得技能的几率将会提升。"],
			},
			HSkill : {
				Title : "H技能",
				Option : ["无","【胸部弱点】在H中的选择胸部系爱抚体位时，少女快感条的上升速度略微提高。","【名器】在H中选择股间插入系体位时，主人公快感条的上升速度略微提高。","【浪漫主义者】与少女同时高潮的话，H结束之后少女的信赖略微上升。","【敏感】少女快感条的上升速度略微提高。","【喜欢侍奉】在侍奉系的H中主人公高潮一次的话，H结束之后女子力略微上升。","【喜欢内射】在插入系体位时选择一次中出的话，H结束之后本能略微上升。","【股间弱点】在H中的选择股间爱抚体位时，少女快感条的上升速度略微提高。","【喜欢股间】在H中的选择股间系插入体位高潮一次的话，H结束之后信赖略微上升。","【喜欢外射】在H中的插入系或者侍奉系时选择一次外射的话，H结束之后变态略微上升。","【M】在H中的强迫系体位被高潮一次的话，H结束之后少女的变态稍微上升。","【S】在H中的女主导体位使主人公高潮一次的话，H结束之后信赖稍微上升。","【脸红】好色情绪的初期值上升10%。","【喜欢同性】在H中的百合系中使对手高潮一次的话，H结束之后社交略微上升。","【痴女】从少女那发起的H会变成过激的女主动H，主人公将会被袭击。","【放尿癖】在H中如果放尿的话，H结束之后变态略微上升。","【菊花弱点】在H中使用菊花爱抚系或者插入菊花的体位时，少女快感条的上升速度略微提高。","【喜欢爆菊】在H中通过菊花爱抚系或者插入菊花使少女高潮一次的话，H结束之后变态略微上升。","【讨厌性】好色情绪的初期值减少5%。","【技巧家】在H中的侍奉系体位时，主人公快感条的上升速度略微提高。","【喜欢百合】与主人公以外的女子H之后，行动结束后变态略微上升。","【想被玩坏】H中只要脱力一次，H结束之后，信赖和暗略微上升。","【不满】H中少女一次都没高潮就结束嘿啾之后，信赖略微下降。","【色欲魔】好色情绪的初期值上升20%。","【独善其身】少女在地图中自慰的话，行动结束后本能略微上升。"],
			},
		},
		Parameter2 : {
			Title : "Honey Select2 基础信息",
			Personality : {
				Title : "人物性格",
				Option : ["安静","普通","勤劳","女友感","时髦","胆小","母性","S","开朗","天然","小心翼翼","大和抚子","天真阳光","中二骄傲"],
			},
			Trait : {
				Title : "人物特性",
				Option : ["无","綺麗好き","ものぐさ","虚弱","タフネス","頻尿","我慢強い","グラスハート","不屈の精神","欲求不満","自制心","思うがまま","感受性豊か"],
			},
			Mind : {
				Title : "人物心情",
				Option : ["无","気になる","好きかも","一目惚れ","話づらい","苦手","嫌い","指示されたい","命令されたい","逆らえない","楽しい","苛めたい","服従させたい"],
			},
			hAttribute : {
				Title : "H属性",
				Option : ["无","性欲旺盛","S","M","胸が敏感","お尻が敏感","股間が敏感","キスに弱い","潔癖症","Hに抵抗がある","寂しがり屋"],
			},
		},
		GameInfo2 : {
			Title : "Honey Select2 游戏信息",
			Favor : "宠爱",  
			Enjoyment : "享受",
			Aversion : "厌恶",
			Slavery : "服从",
			Broken : "崩坏",
			Dependence : "依赖",
			Dirty : "清洁度",
			Tiredness : "疲劳度",
			Toilet : "厕意度",
			Libido : "性欲度", 
			NowState : "当前状态",
			NowDrawState : "NowDrawState",
			LockNowState : {
				Title : "锁定 当前状态值",
				Option : ["未锁定","锁定"],
			},
			LockBroken : {
				Title : "锁定 崩坏数值",
				Option : ["未锁定","锁定"],
			},
			LockDependence : {
				Title : "锁定 依赖数值",
				Option : ["未锁定","锁定"],
			},
			Alertness : "警觉度",
			CalcState : "CalcState",
			EscapeFlag : "EscapeFlag",
			EscapeExperienced : "EscapeExperienced",
			FirstHFlag : {
				Title : "处女",
				Option : ["否","是"],
			},
			GenericVoice : {
				Title : "GenericVoice",
				Option0 : [],
				Option1 : [],
			},
			
			GenericBrokenVoice : "GenericBrokenVoice",
			GenericDependencepVoice : "GenericDependencepVoice",
			GenericAnalVoice : "GenericAnalVoice",
			GenericPainVoice : "GenericPainVoice",
			GenericFlag : "GenericFlag",
			GenericBefore : "GenericBefore",
			
			InviteVoice : {
				Title : "InviteVoice",
				Option0 : [],
			},
			HCount : "战斗次数",
			Map : {
				Title : "Map",
				Option : [],
			},
			
			ArriveRoom50 : "ArriveRoom50",
			ArriveRoom80 : "ArriveRoom80",
			ArriveRoomHAfter : "ArriveRoomHAfter",
			ResistH : "H抵抗度",
			ResistPain : "疼痛抵抗度",
			ResistAnal : "菊花抵抗度",
			UsedItem : "UsedItem",
			IsChangeParameter : "IsChangeParameter",
			IsConcierge : "IsConcierge",
		},
	},
};

Languages.push(Language_CN);

// 繁體中文
// Reference https://zodgame.xyz/forum.php?mod=viewthread&tid=193385&extra=page%3D1
let Language_TW = {
	Language : {
		Name : "繁體中文",
		ShortName : "zh-tw",
	},
	ToolInfo:{
		InfoTitle : "工具信息",
		AuthorTitle : "作者",
		UpdateTitle : "更新頁",
		FriendlyLink : {
			Title : "友情鏈接",
			Detail1 : "支持官方/Booru社區人物卡",
			Detail2 : "瀏覽/上傳/下載",
		},
 	},
	Title:"AI-少女 & Honey-Select2 卡牌在線編輯器", 
	FileSelect: {
		Title : "人物卡牌",
		LoadStatus:{
			Wait: "載入人物卡牌",
			Failed: "無效的人物卡牌文件"
		}
	},
	SaveButton : {
		Chara : "保存修改",
		ModifyCharaImage : "保存修改",
		Coordinate : "提取並導出服裝卡",
	},
	PluginDepend :{
		Title: "依賴插件",
		Column:{
			ID : "ID",
			Name : "插件名稱"
		},
	},
	VisitorsStatistics : "訪客統計",
	AICharaFileModifyImage : {
		Title : "修改卡牌封面",
		NewImageSelect : {
			Title : "選擇新的封面圖片",
			LoadStatus:{
				Wait: "載入新的人物卡牌封面圖片",
				Failed: "無效的PNG圖片"
			},
		},
	},
	AICharaFileInfo : {
		Title : "卡牌信息",
		Parameter : {
			Title : "AI-少女 基礎信息",
			FullName : "人物姓名",
			BirthMonth : "出生月份",
			BirthDay : "出生日期",
			Sex : {
				Title : "性別",
				Option : ["男性","女性"],
			},
			Personality : {
				Title : "人物類型",
				Option : ["如機械般無感情","落落大方且溫柔","高意識且自信","壹意孤行且自私","無精打采且懶散","積極開朗且樂觀"],
			},
			HsWish : {
				Title : "特性",
				Option: ["無","溫柔的","快樂的","小惡魔","喜愛刺激","有禮儀的","禁斷的","冷靜的","金錢","知性的","有信念的","忠誠的","有持久力","可愛","天真","不完全","理解能力","判斷能力","治愈"],
			},
			Futanari : {
				Title : "扶他",
				Option : ["否","是"],
			}
		},
		GameInfo : {
			Title : "AI-少女 遊戲信息",
			GameRegistration : {
				Title : "登島狀態",
				Option : ["未登島","已登島"],
			},
			Phase : {
				Title : "遊戲進度(愛心)",
				Option : ["❤","❤❤","❤❤❤","❤❤❤❤"],
			},
			LifeStyle : {
				Title : "生活方式",
				Option : ["無","【索要者】物欲優先的強欲型。執著於食物，對道具的要求會變多。","【Baby】喜歡被寵愛的類型。喜歡收到禮物，寂寞的時候就靠近她。","【Driver】不依賴他人而自己行動的類型。容易進行食物，物品的收集等。","【Controller】不正視自己的類型。經常休息，睡覺。","【Excitement Seeker】是即刻有興趣卻容易厭倦的類型。容易移動到別的地方，但厭煩了又會去幹別的事情。","【我行我素】總是我行我素。喜歡享受自己的世界，玩耍，洗澡"],
			},
			FlavorState : ["女子力 Exp","信賴 Exp","人性 Exp","本能 Exp","變態 Exp","警戒 Exp","暗 Exp","社交 Exp"],
			NormalSkill : {
				Title : "日常技能",
				Option : ["無","【廚藝愛好者】會更頻繁地制作料理。","【愛美之心】會更頻繁地洗澡。","【動物之友】能更容易地接觸到動物。","【睡美人】嗜睡。","【巫女的血統】身體潮濕時不會體溫下降、不會輕易黑化。","【努力就能做到】在行動中得到的成長值要高於平時。","【意誌不堅】情緒易受外界影響。","【新刺激嗜好】將有更高幾率收到女孩的禮物。","【親近感】將有更高幾率跟隨玩家行動。","【賢妻良母】行動帶來的信賴提升值將會更高、幹勁上限提高10%。","【釣友】女孩去釣魚的幾率將會提高。","【冒失娘】會更頻繁地受傷。","【種地專長】會更頻繁地前往田地、農作物的生長速度會有少許提高。","【貪婪】女孩會更容易迷戀上某些物品。","【不知疲倦】不會進入疲憊的異常狀態、會更頻繁地進行探索。","【大胃王】會更頻繁地進餐。","【喜歡下雨】即便是下雨天也會外出。","【野性】很少會使用營地的家具。","【物資收集】會更頻繁地用手進行采集。","【禦獸者】會有更高幾率撿到貓咪。","【悶騷色狼】H感情的上升速度將會有少許提高。","【浮浪子】女孩會更頻繁地出去玩。","【性欲旺盛】女孩發來H邀約的次數將會增加。","【好奇寶寶】會更容易對H的對話內容產生興趣。","【詛咒體質】會時常積累疲勞、與此同時H感情的上升率也會提高、發來H邀約的次數也將增多。","【神經質】心情變差的閾值將會降低。","【疑神疑鬼】H對話失敗時心情將會變得很差。","【心靈屏障】會更難接受玩家的建議。","【身體管理】當疲勞開始積攢、會優先去休息。","【忍耐】不會陷入空腹狀態。","【容易寂寞】會更頻繁地與玩家對話。","【善於交流】與其他女孩對話時能更容易拉近關系。","【健談】會更頻繁地與其他女孩對話。","【行動派】幹勁上限提高10%。","【第六感】被呼叫時即便距離很遠也能憑感覺掌握玩家所在的位置。","【怠惰】會更頻繁地偷懶去休息。","【潔癖】不洗澡時心情將會變差。","【不幸】撿到等級1道具的幾率將會提高。","【體弱多病】會更容易得感冒。","【陰暗】與其他女孩對話時、對方會積攢疲勞。","【勇敢】會更多地前往距離更遠的區域。","【收藏家】會更頻繁地撿拾道具。","【地質專家】會更頻繁地使用十字鎬挖取道具。","【毅力】很難陷入高溫狀態。","【強運】撿到等級3道具的幾率將會提高。","【馬大哈】飲料對其產生的體溫調節作用將會減半。","【幸運】撿到等級2道具的幾率將會提高。","【挖掘愛好者】會更頻繁地使用鏟子掘取道具。","【昆蟲收藏家】會更頻繁地使用蟲網捉取昆蟲。","【舉壹反三】獲得道具時習得技能的幾率將會提升。"],
			},
			HSkill : {
				Title : "H技能",
				Option : ["無","【胸部弱點】在H中的選擇胸部系愛撫體位時，少女快感條的上升速度略微提高。","【名器】在H中選擇股間插入系體位時，主人公快感條的上升速度略微提高。","【浪漫主義者】與少女同時高潮的話，H結束之後少女的信賴略微上升。","【敏感】少女快感條的上升速度略微提高。","【喜歡侍奉】在侍奉系的H中主人公高潮壹次的話，H結束之後女子力略微上升。","【喜歡內射】在插入系體位時選擇壹次中出的話，H結束之後本能略微上升。","【股間弱點】在H中的選擇股間愛撫體位時，少女快感條的上升速度略微提高。","【喜歡股間】在H中的選擇股間系插入體位高潮壹次的話，H結束之後信賴略微上升。","【喜歡外射】在H中的插入系或者侍奉系時選擇壹次外射的話，H結束之後變態略微上升。","【M】在H中的強迫系體位被高潮壹次的話，H結束之後少女的變態稍微上升。","【S】在H中的女主導體位使主人公高潮壹次的話，H結束之後信賴稍微上升。","【臉紅】好色情緒的初期值上升10%。","【喜歡同性】在H中的百合系中使對手高潮壹次的話，H結束之後社交略微上升。","【癡女】從少女那發起的H會變成過激的女主動H，主人公將會被襲擊。","【放尿癖】在H中如果放尿的話，H結束之後變態略微上升。","【菊花弱點】在H中使用菊花愛撫系或者插入菊花的體位時，少女快感條的上升速度略微提高。","【喜歡爆菊】在H中通過菊花愛撫系或者插入菊花使少女高潮壹次的話，H結束之後變態略微上升。","【討厭性】好色情緒的初期值減少5%。","【技巧家】在H中的侍奉系體位時，主人公快感條的上升速度略微提高。","【喜歡百合】與主人公以外的女子H之後，行動結束後變態略微上升。","【想被玩壞】H中只要脫力壹次，H結束之後，信賴和暗略微上升。","【不滿】H中少女壹次都沒高潮就結束嘿啾之後，信賴略微下降。","【色欲魔】好色情緒的初期值上升20%。","【獨善其身】少女在地圖中自慰的話，行動結束後本能略微上升。"],
			},
		},
		
		Parameter2 : {
			Title : "Honey Select2 基礎信息",
			Personality : {
				Title : "人物性格",
				Option : ["安靜","普通","勤勞","女友感","時髦","膽小","母性","S","開朗","天然","小心翼翼","大和撫子","天真陽光","中二驕傲"],
			},
			Trait : {
				Title : "人物特性",
				Option : ["無","綺麗好き","ものぐさ","虚弱","タフネス","頻尿","我慢強い","グラスハート","不屈の精神","欲求不満","自制心","思うがまま","感受性豊か"],
			},
			Mind : {
				Title : "人物心情",
				Option : ["無","気になる","好きかも","一目惚れ","話づらい","苦手","嫌い","指示されたい","命令されたい","逆らえない","楽しい","苛めたい","服従させたい"],
			},
			hAttribute : {
				Title : "H屬性",
				Option : ["無","性欲旺盛","S","M","胸が敏感","お尻が敏感","股間が敏感","キスに弱い","潔癖症","Hに抵抗がある","寂しがり屋"],
			},
		},
		GameInfo2 : {
			Title : "Honey Select2 遊戲信息",
			Favor : "寵愛",  
			Enjoyment : "享受",
			Aversion : "厭惡",
			Slavery : "服從",
			Broken : "崩壞",
			Dependence : "依賴",
			Dirty : "清潔度",
			Tiredness : "疲勞度",
			Toilet : "廁意度",
			Libido : "性欲度", 
			NowState : "當前狀態",
			NowDrawState : "NowDrawState",
			LockNowState : {
				Title : "鎖定 當前狀態值",
				Option : ["未鎖定","鎖定"],
			},
			LockBroken : {
				Title : "鎖定 崩壞數值",
				Option : ["未鎖定","鎖定"],
			},
			LockDependence : {
				Title : "鎖定 依賴數值",
				Option : ["未鎖定","鎖定"],
			},
			Alertness : "警覺度",
			CalcState : "CalcState",
			EscapeFlag : "EscapeFlag",
			EscapeExperienced : "EscapeExperienced",
			FirstHFlag : {
				Title : "處女",
				Option : ["否","是"],
			},
			GenericVoice : {
				Title : "GenericVoice",
				Option0 : [],
				Option1 : [],
			},
			
			GenericBrokenVoice : "GenericBrokenVoice",
			GenericDependencepVoice : "GenericDependencepVoice",
			GenericAnalVoice : "GenericAnalVoice",
			GenericPainVoice : "GenericPainVoice",
			GenericFlag : "GenericFlag",
			GenericBefore : "GenericBefore",
			
			InviteVoice : {
				Title : "InviteVoice",
				Option0 : [],
			},
			HCount : "戰鬥次數",
			Map : {
				Title : "Map",
				Option : [],
			},
			
			ArriveRoom50 : "ArriveRoom50",
			ArriveRoom80 : "ArriveRoom80",
			ArriveRoomHAfter : "ArriveRoomHAfter",
			ResistH : "H抵抗度",
			ResistPain : "疼痛抵抗度",
			ResistAnal : "菊花抵抗度",
			UsedItem : "UsedItem",
			IsChangeParameter : "IsChangeParameter",
			IsConcierge : "IsConcierge",
		},
	},
};

Languages.push(Language_TW);

// English
// Reference https://github.com/IllusionMods/AI-Girl-Translations
let Language_EN = {
	Language : {
		Name : "English",
		ShortName : "en-us",
	},
	ToolInfo:{
		InfoTitle : "Tool Info",
		AuthorTitle : "Author",
		UpdateTitle : "UpdatePage",
		FriendlyLink : {
			Title : "Friendly Link",
			Detail1 : "Support Illusion and Booru",
			Detail2 : "Browse/Upload/Download",
		},
 	},
	Title:"AI-Syoujyo & Honey-Select2 CharaFile Web Editor", 
	FileSelect: {
		Title : "Select Character File",
		LoadStatus:{
			Wait: "Load Character File",
			Failed: "Invalid Character File"
		}
	},
	SaveButton : {
		Chara : "Save Modified",
		ModifyCharaImage : "Save Modified",
		Coordinate : "Export Clothes File",
	},
	PluginDepend :{
		Title: "BepInEx Plugin Detected",
		Column:{
			ID : "ID",
			Name : "Plugin Name"
		},
	},
	VisitorsStatistics : "Visitor Statistics",
	AICharaFileModifyImage : {
		Title : "Modify Chara File Image",
		NewImageSelect : {
			Title : "Select New Image To Modify Loaded Character Image",
			LoadStatus:{
				Wait: "Load New Image File",
				Failed: "Invalid Png File"
			},
		},
	},
	AICharaFileInfo : {
		Title : "Character File Info",
		Parameter : {
			Title : "AI-Syoujyo Parameter Info",
			FullName : "FullName",
			BirthMonth : "BirthMonth",
			BirthDay : "BirthDay",
			Sex : {
				Title : "Sex",
				Option : ["Male","Female"],
			},
			Personality : {
				Title : "Personality",
				Option : ["Emotionless and stoic","Friendly and gentle","Confident and aware","Selfish and spoiled","Lazy and sluggish","Positive and cheerful"],
			},
			HsWish : {
				Title : "Desires",
				Option: ["Empty","Kindness","Pleasure","Mischief","Thrills","Courtesy","Taboos","Calmness","Wealth","Intelligence","Conviction","Loyalty","Endurance","Sweetness","Innocence","Imperfection","Understanding","Sharpness","Comfort"],
			},
			Futanari : {
				Title : "Futanari",
				Option : ["No","Yes"],
			}
		},
		GameInfo : {
			Title : "AI-Syoujyo Game Info",
			GameRegistration : {
				Title : "Game Registration",
				Option : ["No","Yes"],
			},
			Phase : {
				Title : "Phase",
				Option : ["❤","❤❤","❤❤❤","❤❤❤❤"],
			},
			LifeStyle : {
				Title : "LifeStyle",
				Option : ["Empty","【Getter】Type that is greedy and prioritizes materialistic desires. Obsessed with food and will request items more frequently.","【Baby】Type that always tries to be liked. Will approach to give gifts or when lonely.","【Driver】Type that acts by themselves without asking others. Inclined to gathering food and items.","【Controller】Type that does not try to appeal to others. Rests and sleeps a lot.","【Excitement Seeker】Type that is quickly interested, but easily bored. Likely to move to other places, but gets bored and starts doing something else.","【Armchair】Type that is always at its own pace. Likes to enjoy their own world, play and get into baths."],
			},
			FlavorState : ["Femininity","Trust","Humanity","Instinct","Perversion","Vigilance","Darkness","Sociability"],
			NormalSkill : {
				Title : "Normal Skill ",
				Option : ["Empty","【Cooking Lover】Often goes cooking.","【Clean Lover】Often gets into baths.","【Animal Lover】Makes it easier to get in cantact with animals.","【Sleeping Princess】Often sleeps.","【Priestess Bloodline】Prevents Body Temperature from lowering when the body is dirty, furthermore, darkness from increasing.","【Achiever】During actions, growth occasionally increases faster than normal.","【Simple】Makes it easier for Mood to get better with compliments.","【Reaction Lover】Increases the opportunities for to the girl to come gift.","【Dear】Slightly increases success rate of Follow Me.","【Devoted Partner】Increases Motivation's maximum value by 10% and each time she acts, Trust rises.","【Fishing Lover】Makes the girl go fishing more often.","【Klutz】Often gets injured.","【Crop Knowledge】Makes it easier to go the fields and make crops grow a slightly faster.","【Avarice】Makes it easier for the girls to request something.","【Tireless】Will not be afflicted with Exhaustion, making it easier to explore.","【Glutton】Makes it easier to go eat.","【Rain Lover】Goes outside even in rainy days.","【Wild】Makes it harder to use the house furniture.","【Goods Supplier】Makes it easier to go gathering items with the hands.","【Beastmaster】Makes it easier to pick up cats.","【Moody】Makes it easier to increase Naughty Mood.","【Loves to Play】The girl often comes play.","【Sexual Desire】Often the girl will come invite for sex.","【Curiosity】Makes it easier to show interest in Naughty Conversation.","【Cursed Body】In exchange for always ending up tired, Naughty Mood rises more rapidly and will often invite for sex.","【Sensitiveness】Makes it easier for Mood to get worse.","【Distrustful】Mood gets fairly worse when a Naughty Conversation fails.","【Heart Wall】Makes it harder to listen to what you say when advising.","【Body Management】When Fatigue accumulates, makes it easier to take breaks with priority.","【Endurance】Does not become hungry.","【Lonely】Makes it easier to come and talk with the protagonist.","【Good Talker】When talking with other girls, makes it easier to get along with them.","【Chat】Makes it easier to talk with other girls.","【Doer】Increases Motivation's maximum value by 10%.","【Super Sense】When you Call, can sense the protagonist's position even from far away.","【Slack】Makes it easier to skip tasks and rest.","【Fastidious】Mood gets worse when she can't get into baths.","【Misfortune】Makes it easier to pick up grade 1 items.","【Weak Constitution】Makes it easier to contract colds.","【Deep Darkness】When talking to another girl, the partner Fatigue will accumulate.","【Courage】Makes it easier to move to far places.","【Collector】Makes it easier to go pick up items.","【Terrain Grasp】More often gathers items with the pickaxe.","【Guts】Makes it harder to become afflicted with High Temperature status.","【Good Luck】Makes it easier to pick up grade 3 items.","【Unkempt】The temperature regulation effect of Drinks is halved.","【Lucky】Makes it easier to pick up grade 2 items.","【Digging Maniac】Makes it easier to go gathering items with the shovel.","【Bug Collector】More often gathers items with the bug net.","【Hunter】Makes it easier to pick up Skills when obtaining items."],
			},
			HSkill : {
				Title : "Ecchi Skill ",
				Option : ["Empty","【Weak Breasts】When you choose Breast Caress sex, the girl's Pleasure Gage becomes slightly faster.","【Masterpussy】When you choose Crotch Insertion, the protagonist's Pleasure Gage becomes slightly faster during sex.","【Romantic】When you climax at the same time as the girl, the girl's Trust slightly increases when sex ends.","【Sensitive】The girl's Pleasure Gage rise speed increases slightly.","【Likes to service】When the protagonist climax even once during Service sex, Femininity slightly increases after sex.","【Creampie Lover】When you cum inside even once during Insertion sex, the girl's Instinct slightly increases after sex.","【Weak Crotch】When you choose Crotch Caress sex, the girl's Pleasure Gage rise speed increases slightly.","【Crotch Lover】When you choose Crotch Insertion sex and girl climaxes even once, the girl's Trust slightly increases after sex.","【Cumshot Lover】When you choose to cum outside even once with Insertion or Service sex, Perversion slightly increases after sex.","【Masochist】When the girl is made to climax even once with Forced sex, the girl's Perversion slightly increases after sex.","【Sadist】When the protagonist climaxes even once with Female-led sex, Trust slightly increases after sex.","【Heat】Increases Naughty Mood's initial value by 10%.","【Homosexual】When you make your partner climax in Lesbian sex even once, Sociability slightly increases after sex.","【Nympho】Being invited to sex by the girl changes into extreme woman-led sex, and the protagonist will start being attacked.","【Peeing Habit】When the girl pees during sex, Perversion slightly increases after sex.","【Weak Ass】The girl's Pleasure Gage becomes slightly faster during Anal Caress or Anal Insertion sex. ","【Anal Lover】When the girl climaxes even once with Anal Caress or Anal Insertion sex, the girl's Perversion slightly increases after sex.","【Sexual Aversion】Decreases Naughty Mood's initial value by 5%.","【Technician】The protagonist's Pleasure Gage becomes slightly faster during Service sex.","【Lesbian Lover】Excluding the protagonist, in the case of girls having sex between themselves, Perversion slightly increases after the act.","【Wants to be broken】When the girl gets exhausted even once during sex, Darkness slightly increases after sex.","【Dissatisfied】During sex, when the girl does not climax even once and sex ends, Trust slightly decreases after sex.","【Lust Devil】Increases Naughty Mood's initial value by 20%.","【Self-satisfied】When the girl Masturbates around the map, Instinct slightly increases after the act."],
			},
		},
		Parameter2 : {
			Title : "Honey Select2 Parameter Info",
			Personality : {
				Title : "Personality",
				Option : ["Quiet","Average","Hard worker","Girlfriend","Gal","Timid","Motherhood","S","Open","Natural","Careful","Yamato nadeshiko","Boyish","Yandere"],
			},
			Trait : {
				Title : "Traits",
				Option : ["None","Fastidious","Lazy","Weak","Toughness","Pees Often","Patiently","Glass-Heart","Brave","Perverted","Self-Control","At will","Sensitive"],
			},
			Mind : {
				Title : "Mentality",
				Option : ["None","Concern","Affectionate","Lovestruck","Awkward","Reluctant","Loathing","Cooperative","Obedient","Submissive","Pleased","Want to bully","want to submit"],
			},
			hAttribute : {
				Title : "H-Attribute",
				Option : ["None","Horny","S","M","Sensitive Breasts","Sensitive Ass","Sensitive Pussy","Weakness to Kisses","Clean Freak","Resisting Sex","Lonely"],
			},
		},
		GameInfo2 : {
			Title : "Honey Select2 Game Info",
			Favor : "Favor",  
			Enjoyment : "Enjoyment",
			Aversion : "Aversion",
			Slavery : "Slavery",
			Broken : "Broken",
			Dependence : "Dependence",
			Dirty : "Dirty",
			Tiredness : "Tiredness",
			Toilet : "Toilet",
			Libido : "Libido", 
			NowState : "NowState",
			NowDrawState : "NowDrawState",
			LockNowState : {
				Title : "Lock NowState",
				Option : ["UnLock","Lock"],
			},
			LockBroken : {
				Title : "Lock Broken",
				Option : ["UnLock","Lock"],
			},
			LockDependence : {
				Title : "Lock Dependence",
				Option : ["UnLock","Lock"],
			},
			Alertness : "Alertness",
			CalcState : "CalcState",
			EscapeFlag : "EscapeFlag",
			EscapeExperienced : "EscapeExperienced",
			FirstHFlag : {
				Title : "First H",
				Option : ["No","Yes"],
			},
			GenericVoice : {
				Title : "GenericVoice",
				Option0 : [],
				Option1 : [],
			},
			
			GenericBrokenVoice : "GenericBrokenVoice",
			GenericDependencepVoice : "GenericDependencepVoice",
			GenericAnalVoice : "GenericAnalVoice",
			GenericPainVoice : "GenericPainVoice",
			GenericFlag : "GenericFlag",
			GenericBefore : "GenericBefore",
			
			InviteVoice : {
				Title : "InviteVoice",
				Option0 : [],
			},
			HCount : "H Count",
			Map : {
				Title : "Map",
				Option : [],
			},
			
			ArriveRoom50 : "ArriveRoom50",
			ArriveRoom80 : "ArriveRoom80",
			ArriveRoomHAfter : "ArriveRoomHAfter",
			ResistH : "Resist H",
			ResistPain : "Resist Pain",
			ResistAnal : "Resist Anal",
			UsedItem : "UsedItem",
			IsChangeParameter : "IsChangeParameter",
			IsConcierge : "IsConcierge",
		},
	},
};

Languages.push(Language_EN);

// 日本語
// Reference https://github.com/IllusionMods/AI-Girl-Translations
let Language_JP = {
	Language : {
		Name : "日本語",
		ShortName : "ja-jp",
	},
	ToolInfo:{
		InfoTitle : "ツール情報",
		AuthorTitle : "著者",
		UpdateTitle : "更新ページ",
		FriendlyLink : {
			Title : "フレンドリーリンク",
			Detail1 : "支援 Illusion 及び Booru",
			Detail2 : "ブラウズ/アップロードする/ダウンロード",
		},
 	},
	Title:"AI-Syoujyo & Honey-Select2 Chara File Web Editor", 
	FileSelect: {
		Title : "キャラ選択",
		LoadStatus:{
			Wait: "キャラ選択",
			Failed: "データが破損している可能性があります"
		}
	},
	SaveButton : {
		Chara : "保存",
		ModifyCharaImage : "保存",
		Coordinate : "保存コーデ",
	},
	PluginDepend :{
		Title: "BepInEx プラグイン 検出",
		Column:{
			ID : "ID",
			Name : "プラグイン名前"
		},
	},
	VisitorsStatistics : "訪問者統計",
	AICharaFileModifyImage : {
		Title : "カードカバーの変更",
		NewImageSelect : {
			Title : "新しいカバー画像を選択",
			LoadStatus:{
				Wait: "新しい画像を読み込む",
				Failed: "無効なPNG画像"
			},
		},
	},
	AICharaFileInfo : {
		Title : "キャラ設定",
		Parameter : {
			Title : "AI-少女 基本 情報",
			FullName : "名前",
			BirthMonth : "誕生日·月",
			BirthDay : "誕生日·日",
			Sex : {
				Title : "性別",
				Option : ["男性","女性"],
			},
			Personality : {
				Title : "個性",
				Option : ["機械的で無感情","おおらかでやさしい","意識が高く自信家","自分勝手でわがまま","無気力でものぐさ","ポジティブで明るい"],
			},
			HsWish : {
				Title : "願望",
				Option: ["なし","やさしさ","快楽","小悪魔","刺激","礼儀","禁断","落ち着き","お金","知性","信念","忠誠","持久力","可憐さ","無邪気","不完全","理解力","判断力","癒やし"],
			},
			Futanari : {
				Title : "ふたなり",
				Option : ["いや","はい"],
			}
		},
		GameInfo : {
			Title : "AI-少女 ゲーム 情報",
			GameRegistration : {
				Title : "ゲーム登録",
				Option : ["いや","はい"],
			},
			Phase : {
				Title : "ゲーム段階",
				Option : ["❤","❤❤","❤❤❤","❤❤❤❤"],
			},
			LifeStyle : {
				Title : "ライフスタイル",
				Option : ["なし","【ゲッター】物欲が先行してしまう欲張りなタイプ。食べ物に執着したり、アイテムを要求することが多くなる。","【ベイビー】常に好かれようとするタイプ。プレゼントしてくれたり、寂しくなると近寄ってくる。","【ドライバー】他人に頼らず自分で行動するタイプ。食べ物や、アイテム収集などを行いやすい。","【コントローラー】自分自身を前面にアピールしないタイプ。休んだり、寝ることが多い。","【エキサイトメント・シーカー】すぐ興味を持つが飽きっぽいタイプ。別の場所に移動しやすいが、飽きて別のことをしだす。","【アームチェア】常にマイペースタイプ。自分の世界を楽しみ、遊んだりお風呂に入るのが好き。"],
			},
			FlavorState : ["女子力 EXP","信頼 EXP","人間性 EXP","本能 EXP","変態 EXP","警戒 EXP","闇 EXP","社交 EXP"],
			NormalSkill : {
				Title : "通常スキル ",
				Option : ["なし","【料理好き】料理をしにいくことが多くなる。","【綺麗好き】お風呂に入りにいくことが多くなる。","【動物好き】動物と触れ合いやすくなる。","【眠り姫】良く寝るようになる。","【巫女の血族】体が汚れたときの体温低下を防ぎ、さらに闇が増づらくなる。","【やればできる子】行動中、まれに成長が普段より早くなる。","【チョロい】おだてるで機嫌がよくなりやすくなる。","【反応好き】女の子がプレゼントにしにくる機会が増える。","【親愛】ついてきての成功率がすこし上がる。","【良妻賢母】行動する度に信頼が上昇するようになり、やる気の最大値が10%アップする。","【釣り好き】女の子が釣りをしやすくなる。","【ドジ】ケガをすることが多くなる。","【作物の知識】畑に行きやすくなり、作物の成長をすこし早めてくる。","【強欲】女の子が何か物をねだりやすくなる。","【疲れ知らず】状態異常過労にならなくなり、探索しに行きやすくなる。","【大食い】ご飯を食べに行きやすくなる。","【雨好き】雨の日でも外に出るようになる。","【野生】ハウジングの家具を使用しにくくなる。","【物資調達】手で採取しにいきやすくなる。","【獣使いの素質】ネコを拾ってきやすくなる。","【むっつり】エッチな気分がすこし上昇しやくすなる。","【遊び好き】女の子が遊びに行くことが多くなる。","【性欲旺盛】女の子からエッチを誘いに来ることが多くなる。","【好奇心】エッチな会話に興味をしめしやすくなる。","【呪われた体】常に疲労がたまってしまう代わりにエッチな気分の上昇率が上がり、エッチに誘ってくることも多くなる。","【神経質】機嫌が悪くなりやすくなる。","【疑い深い】エッチな会話の失敗時に機嫌がかなり悪くなる。","【心の壁】アドバイスしたときに言うことを聞きにくくなる。","【体調管理】疲労が溜まると、優先で休憩を取りやすくなる。","【忍耐】お腹がすかなくなる。","【寂しがりや】主人公に話しかけてきやすくなる。","【話し上手】他の女の子と話すと仲良くなりやすくなる。","【おしゃべり】他の女の子と話しやすくなる。","【行動派】やる気の最大値が10%上昇する。","【超感覚】コールすると距離が離れていても感覚で主人公の位置を感じ取れるようになる。","【なまけ】さぼって休憩をしやすくなる。","【潔癖】お風呂に入れないと機嫌が悪くなる。","【不幸】グレード1のアイテムを拾ってきやすくなる。","【病弱】風邪をひきやすくなる。","【深い闇】他の女と会話すると相手の女の子の疲労が溜まってしまう。","【勇気】遠い場所に移動しやすくなる。","【収集家】アイテムを拾いに行きやすくなる。","【地形把握】ツルハシでアイテムを採取することが多くなる。","【根性】状態異常の高温状態になりにくくなる。","【強運】グレード3のアイテムを拾ってきやすくなる。","【ずぼら】飲み物の体温調節効果が半減。","【ラッキー】グレード2のアイテムを拾ってきやすくなる。","【穴掘りマニア】シャベルを使って採取に行きやすくなる。","【虫コレクター】虫網を使って採取に行きやすくなる。","【ハンター】アイテム入手時スキルを拾いやすくなる。"],
			},
			HSkill : {
				Title : "エッチスキル ",
				Option : ["なし","【胸が弱い】エッチ中に胸系愛撫エッチを選択時、女の子の快感ゲージがすこし早くなる。","【名器】エッチ中に股間挿入系エッチを選択時、主人公の快感ゲージがすこし早くなる。","【ロマンチスト】女の子と同時に絶頂すると、エッチ終了時に女の子の信頼がすこし上がる。","【敏感】女の子の快感ゲージの上昇速度が少し上がる。","【奉仕好き】奉仕系のエッチ中に主人公が一回でも絶頂すると、エッチ終了後に女子力が少し上がる。","【中好き】挿入系エッチ中に中出しを一回でもすると、エッチ後に女の子の本能がすこしあがる。","【股間が弱い】エッチ中に股間系愛撫エッチを選択時、女の子の快感ゲージの上昇速度がすこし上がる。","【股間が好き】エッチ中に股間系挿入エッチを選択して一回でも絶頂するとエッチ終了後に信頼が少し上がる。","【外好き】エッチ中に挿入系エッチ又奉仕エッチで一回でも外出しを選ぶと、エッチ終了時に変態がすこし上がる。","【Ｍ】エッチ中に無理やり系エッチで一回でも絶頂させると、エッチ終了後に女の子の変態が少し上がる。","【Ｓ】エッチ中に女主導エッチで一回でも主人公が絶頂すると、エッチ終了後に信頼が少し上がる。","【火照り】エッチな気分の初期値に10%上昇する。","【同性好き】エッチ中にレズ系エッチで一回でも相手を絶頂させると、エッチ終了後に社交が少し上がる。","【痴女】女の子から誘われるエッチが過激な女主導エッチに変わり、主人公が襲われるようになる。","【放尿癖】エッチ中におしっこを漏らすと、エッチ終了時に変態が少し上がる。","【お尻弱い】エッチ中にアナル系愛撫で又は挿入エッチで女の子の快感ゲージがすこし早くなる。","【お尻好き】エッチ中にアナル系愛撫で又は挿入エッチで女の子が一回でも絶頂すると、エッチ終了後に変態がすこし上がる。","【性嫌悪】エッチな気分の初期値に5%減少する。","【テクニシャン】エッチ中に奉仕系のエッチで主人公の快感ゲージがすこし早くなる。","【レズ好き】主人公を除く女の子同士がエッチをした場合、行動終了後に変態がすこし上がる。","【壊されたい】エッチ中に一回でも脱力するとエッチ終了後に、闇がすこし上がる。","【不満】エッチ中に女の子が一回も絶頂せずにエッチを終えるとエッチ終了後に、信頼が少し下がる。","【色欲魔】エッチな気分の初期値に20%上昇する。","【独りよがり】女の子がマップ中でオナニーすると行動終了後に本能が少し上がる。"],
			},
		},
		Parameter2 : {
			Title : "Honey Select2 基本 情報",
			Personality : {
				Title : "個性",
				Option : ["クール","普通","苦労人","女友達","ギャル","気弱","母性的","ドS","オープン","天然","几帳面","大和撫子","ボーイッシュ","ヤンデレ"], 
			},
			Trait : {
				Title : "特性",
				Option : ["なし","綺麗好き","ものぐさ","虚弱","タフネス","頻尿","我慢強い","グラスハート","不屈の精神","欲求不満","自制心","思うがまま","感受性豊か"],
			},
			Mind : {
				Title : "心情",
				Option : ["なし","気になる","好きかも","一目惚れ","話づらい","苦手","嫌い","指示されたい","命令されたい","逆らえない","楽しい","苛めたい","服従させたい"],
			},
			hAttribute : {
				Title : "H属性",
				Option : ["なし","性欲旺盛","S","M","胸が敏感","お尻が敏感","股間が敏感","キスに弱い","潔癖症","Hに抵抗がある","寂しがり屋"],
			},
		},
		GameInfo2 : {
			Title : "Honey Select2 ゲーム 情報",
			Favor : "好意",  
			Enjoyment : "楽しみ",
			Aversion : "嫌悪",
			Slavery : "奴隷",
			Broken : "壊れた",
			Dependence : "依存",
			Dirty : "汚れた",
			Tiredness : "疲れ",
			Toilet : "トイレ",
			Libido : "リビドー", 
			NowState : "今の状態",
			NowDrawState : "今状態を描く",
			LockNowState : {
				Title : "ロック 今の状態",
				Option : ["ロック解除","ロック"],
			},
			LockBroken : {
				Title : "ロック 壊れた",
				Option : ["ロック解除","ロック"],
			},
			LockDependence : {
				Title : "ロック 依存",
				Option : ["ロック解除","ロック"],
			},
			Alertness : "覚醒",
			CalcState : "計算状態",
			EscapeFlag : "脱出フラグ",
			EscapeExperienced : "脱出体験",
			FirstHFlag : {
				Title : "最初のH",
				Option : ["いいえ","はい"],
			},
			GenericVoice : {
				Title : "一般的な声",
				Option0 : [],
				Option1 : [],
			},
			
			GenericBrokenVoice : "一般的な壊れた声",
			GenericDependencepVoice : "一般的な依存音声",
			GenericAnalVoice : "一般的な肛門の声",
			GenericPainVoice : "一般的な痛みの声",
			GenericFlag : "一般的なフラグ",
			GenericBefore : "以前のジェネリック",
			
			InviteVoice : {
				Title : "音声を招待",
				Option0 : [],
			},
			HCount : "Hカウント",
			Map : {
				Title : "地図",
				Option : [],
			},
			
			ArriveRoom50 : "50号室到着",
			ArriveRoom80 : "80号室到着",
			ArriveRoomHAfter : "部屋H到着後",
			ResistH : "抵抗のH",
			ResistPain : "抵抗の痛み",
			ResistAnal : "抵抗の肛門",
			UsedItem : "UsedItem",
			IsChangeParameter : "パラメータを変更です",
			IsConcierge : "接客係です",
		},
	},
};
Languages.push(Language_JP);