//game.import(name: "活动武将",
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { config } from './js/config.js';
import { precontent } from './js/precontent/index.js';
import { content } from './js/content/index.js';
import { help } from './js/help.js';

lib.init.css(lib.assetURL + 'extension/活动武将', 'extension');

//更新公告
game.bolShowNewPack = function () {
	//更新告示
	var HuoDong_update = [
		'/setPlayer/',
		'bugfix，微信武将图片素材补充',
		'整合@xizifu 的PR',
		'添加武将欢杀谋关羽、极蔡文姬、微信谋马超、微信霍骏',
		'To be continued...',
	];
	//更新武将
	var HuoDong_players = [
		'Mbaby_ol_sb_guanyu', 'wechat_re_caiwenji', 'wechat_sb_machao', 'wechat_huojun',
	];
	//加载
	var dialog = ui.create.dialog(
		'<span class="text center">' +
		'新人制作扩展，希望大家支持<br>新人技术不足，希望大家包涵' +
		'<br>' +
		'<a href="https://github.com/mengxinzxz/HuoDong-update.git">点击前往活动武将Github仓库</a>' +
		'<br>' +
		'活动武将 ' + lib.extensionPack.活动武将.version + ' 更新内容' +
		'</span>', 'hidden');
	for (var i = 0; i < HuoDong_update.length; i++) {
		if (HuoDong_update[i] == '/setPlayer/') {
			if (HuoDong_players.length) dialog.addSmall([HuoDong_players, 'character']);
		}
		else {
			var li = document.createElement('li');
			li.innerHTML = HuoDong_update[i];
			li.style.textAlign = 'left';
			dialog.content.appendChild(li);
		}
	}
	dialog.open();
	var hidden = false;
	if (!ui.auto.classList.contains('hidden')) {
		ui.auto.hide();
		hidden = true;
	}
	game.pause();
	var control = ui.create.control('确定', function () {
		dialog.close();
		control.close();
		if (hidden) ui.auto.show();
		game.resume();
	});
};

let extensionPackage = {
	name: "活动武将",
	editable: false,
	content: content,
	precontent: precontent,
	config: config,
	help: help,
	package: {
		intro: '新人制作扩展，希望大家支持。' +
			'<br>新人技术不足，希望大家包涵。' +
			'<br><a href="https://github.com/mengxinzxz/HuoDong-update.git">点击前往活动武将Github仓库</a>' +
			'<br><li>欢迎大家进群支持活动武将' +
			//入群二维码图片
			'<br><img style=width:238px src=' + lib.assetURL + 'extension/活动武将/HuoDong_QQ.png>' +
			'',
		author: '萌新（转型中）',
		diskURL: '',
		forumURL: '',
		version: '0.3.1-待定',
		//新人制作扩展，希望大家支持。
		//新人技术不足，希望大家包涵。
		//壹、贰、叁、肆、伍、陆、柒、捌、玖、拾
	},
	files: {}
};

export let type = 'extension';
export default extensionPackage;