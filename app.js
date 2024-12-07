const DialogQuoteIDs =
[
	// 0
	'QUOTE_SEE_ENEMY',
	'QUOTE_SEE_ENEMY_VARIATION',
	'QUOTE_IN_TROUBLE_SLASH_IN_BATTLE',
	'QUOTE_SEE_CREATURE',
	'QUOTE_FIRSTTIME_GAME_SEE_CREATURE',
	'QUOTE_TRACES_OF_CREATURE_ATTACK',
	'QUOTE_HEARD_SOMETHING',
	'QUOTE_SMELLED_CREATURE',
	'QUOTE_WEARY_SLASH_SUSPUCIOUS',
	'QUOTE_WORRIED_ABOUT_CREATURE_PRESENCE',

	//10
	'QUOTE_ATTACKED_BY_MULTIPLE_CREATURES',
	'QUOTE_SPOTTED_SOMETHING_ONE',
	'QUOTE_SPOTTED_SOMETHING_TWO',
	'QUOTE_OUT_OF_AMMO',
	'QUOTE_SERIOUSLY_WOUNDED',
	'QUOTE_BUDDY_ONE_KILLED',
	'QUOTE_BUDDY_TWO_KILLED',
	'QUOTE_LEARNED_TO_LIKE_MERC_KILLED',
	'QUOTE_FORGETFULL_SLASH_CONFUSED',
	'QUOTE_JAMMED_GUN',

	//20
	'QUOTE_UNDER_HEAVY_FIRE',
	'QUOTE_TAKEN_A_BREATING',
	'QUOTE_CLOSE_CALL',
	'QUOTE_NO_LINE_OF_FIRE',
	'QUOTE_STARTING_TO_BLEED',
	'QUOTE_NEED_SLEEP',
	'QUOTE_OUT_OF_BREATH',
	'QUOTE_KILLED_AN_ENEMY',
	'QUOTE_KILLED_A_CREATURE',
	'QUOTE_HATED_MERC_ONE',

	//30
	'QUOTE_HATED_MERC_TWO',
	'QUOTE_LEARNED_TO_HATE_MERC',
	'QUOTE_AIM_KILLED_MIKE',
	//'QUOTE_MERC_QUIT_LEARN_TO_HATE = QUOTE_AIM_KILLED_MIKE',
	'QUOTE_HEADSHOT',
	'QUOTE_PERSONALITY_TRAIT',
	'QUOTE_ASSIGNMENT_COMPLETE',
	'QUOTE_REFUSING_ORDER',
	'QUOTE_KILLING_DEIDRANNA',
	'QUOTE_KILLING_QUEEN',
	'QUOTE_ANNOYING_PC',

	//40
	'QUOTE_STARTING_TO_WHINE',
	'QUOTE_NEGATIVE_COMPANY',
	'QUOTE_AIR_RAID',
	'QUOTE_WHINE_EQUIPMENT',
	'QUOTE_SOCIAL_TRAIT',
	'QUOTE_PASSING_DISLIKE',
	'QUOTE_EXPERIENCE_GAIN',
	'QUOTE_PRE_NOT_SMART',
	'QUOTE_POST_NOT_SMART',
	'QUOTE_HATED_1_ARRIVES',
	//'QUOTE_MERC_QUIT_HATED1 = QUOTE_HATED_1_ARRIVES',

	//50
	'QUOTE_HATED_2_ARRIVES',
	//'QUOTE_MERC_QUIT_HATED2 = QUOTE_HATED_2_ARRIVES',
	'QUOTE_BUDDY_1_GOOD',
	'QUOTE_BUDDY_2_GOOD',
	'QUOTE_LEARNED_TO_LIKE_WITNESSED',
	'QUOTE_DELAY_CONTRACT_RENEWAL',
	//'QUOTE_NOT_GETTING_PAID = QUOTE_DELAY_CONTRACT_RENEWAL',
	'QUOTE_AIM_SEEN_MIKE',
	//'QUOTE_PC_DROPPED_OMERTA = QUOTE_AIM_SEEN_MIKE',
	'QUOTE_BLINDED',
	'QUOTE_DEFINITE_CANT_DO',
	'QUOTE_LISTEN_LIKABLE_PERSON',
	'QUOTE_ENEMY_PRESENCE',

	//60
	'QUOTE_WARNING_OUTSTANDING_ENEMY_AFTER_RT',
	'QUOTE_FOUND_SOMETHING_SPECIAL',
	'QUOTE_SATISFACTION_WITH_GUN_AFTER_KILL',
	'QUOTE_SPOTTED_JOEY',
	'QUOTE_RESPONSE_TO_MIGUEL_SLASH_QUOTE_MERC_OR_RPC_LETGO',
	'QUOTE_SECTOR_SAFE',
	'QUOTE_STUFF_MISSING_DRASSEN',
	'QUOTE_KILLED_FACTORY_MANAGER',
	'QUOTE_SPOTTED_BLOODCAT',
	'QUOTE_END_GAME_COMMENT',

	//70
	'QUOTE_ENEMY_RETREATED',
	'QUOTE_GOING_TO_AUTO_SLEEP',
	'QUOTE_WORK_UP_AND_RETURNING_TO_ASSIGNMENT', // woke up from auto sleep, going back to wo
	'QUOTE_ME_TOO', // me too quote, in agreement with whatever the merc previous said
	'QUOTE_USELESS_ITEM',
	'QUOTE_BOOBYTRAP_ITEM',
	'QUOTE_SUSPICIOUS_GROUND',
	'QUOTE_DROWNING',
	'QUOTE_MERC_REACHED_DESTINATION',
	'QUOTE_SPARE2', // 79: DUMMY

	//80
	'QUOTE_REPUTATION_REFUSAL',
	'QUOTE_DEATH_RATE_REFUSAL', //= 99
	'QUOTE_LAME_REFUSAL', //= 82
	'QUOTE_WONT_RENEW_CONTRACT_LAME_REFUSAL',			// ARM: now unused
	'QUOTE_ANSWERING_MACHINE_MSG',
	'QUOTE_DEPARTING_COMMENT_CONTRACT_NOT_RENEWED_OR_48_OR_MORE',
	'QUOTE_HATE_MERC_1_ON_TEAM',// = 100
	'QUOTE_HATE_MERC_2_ON_TEAM',// = 101
	'QUOTE_LEARNED_TO_HATE_MERC_ON_TEAM',// = 102
	'QUOTE_CONTRACTS_OVER',// = 89

	//90
	'QUOTE_ACCEPT_CONTRACT_RENEWAL',
	'QUOTE_CONTRACT_ACCEPTANCE',
	'QUOTE_JOINING_CAUSE_BUDDY_1_ON_TEAM',// = 103
	'QUOTE_JOINING_CAUSE_BUDDY_2_ON_TEAM',// = 104
	'QUOTE_JOINING_CAUSE_LEARNED_TO_LIKE_BUDDY_ON_TEAM',// = 105
	'QUOTE_REFUSAL_RENEW_DUE_TO_MORALE',// = 95
	'QUOTE_PRECEDENT_TO_REPEATING_ONESELF',// = 106
	'QUOTE_REFUSAL_TO_JOIN_LACK_OF_FUNDS',// = 107
	'QUOTE_DEPART_COMMET_CONTRACT_NOT_RENEWED_OR_TERMINATED_UNDER_48',// = 98
	'QUOTE_DEATH_RATE_RENEWAL',

	//100
	'QUOTE_HATE_MERC_1_ON_TEAM_WONT_RENEW',
	'QUOTE_HATE_MERC_2_ON_TEAM_WONT_RENEW',
	'QUOTE_LEARNED_TO_HATE_MERC_1_ON_TEAM_WONT_RENEW',
	'QUOTE_RENEWING_CAUSE_BUDDY_1_ON_TEAM',
	'QUOTE_RENEWING_CAUSE_BUDDY_2_ON_TEAM',
	'QUOTE_RENEWING_CAUSE_LEARNED_TO_LIKE_BUDDY_ON_TEAM',
	'QUOTE_PRECEDENT_TO_REPEATING_ONESELF_RENEW',
	'QUOTE_RENEW_REFUSAL_DUE_TO_LACK_OF_FUNDS',
	'QUOTE_GREETING',
	'QUOTE_SMALL_TALK',

	//110
	'QUOTE_IMPATIENT_QUOTE',
	'QUOTE_LENGTH_OF_CONTRACT',
	'QUOTE_COMMENT_BEFORE_HANG_UP',
	'QUOTE_PERSONALITY_BIAS_WITH_MERC_1',
	'QUOTE_PERSONALITY_BIAS_WITH_MERC_2',
	'QUOTE_MERC_LEAVING_ALSUCO_SOON',
	'QUOTE_MERC_GONE_UP_IN_PRICE'
];

const NPCIDs =
[
	'BARRY',
	'BLOOD',
	'LYNX',
	'GRIZZLY',
	'VICKY',
	'TREVOR',
	'GRUNTY',
	'IVAN',
	'STEROID',
	'IGOR',
	'SHADOW',
	'RED',
	'REAPER',
	'FIDEL',
	'FOX',
	'SIDNEY',
	'GUS',
	'BUNS',
	'ICE',
	'SPIDER',
	'CLIFF',
	'BULL',
	'HITMAN',
	'BUZZ',
	'RIDER',
	'RAVEN',
	'STATIC',
	'LEN',
	'DANNY',
	'MAGIC',
	'STEPHEN',
	'SCULLY',
	'MALICE',
	'DR_Q',
	'NAILS',
	'THOR',
	'SCOPE',
	'WOLF',
	'MD',
	'MELTDOWN', // 39
	'BIFF',
	'HAYWIRE',
	'GASKET',
	'RAZOR',
	'FLO',
	'GUMPY',
	'LARRY_NORMAL',
	'LARRY_DRUNK',
	'COUGAR',
	'NUMB',
	'BUBBA',
	'IMP_M0', // 51
	'IMP_M1',
	'IMP_M2',
	'IMP_W0',
	'IMP_W1',
	'IMP_W2',
	'MIGUEL', // 57
	'CARLOS',
	'IRA',
	'DIMITRI',
	'DEVIN',
	'ROBOT', // 62: DUMMY 
	'HAMOUS',
	'SLAY',
	'RPC65', // 65: DUMMY
	'DYNAMO',
	'SHANK',
	'IGGY',
	'VINCE',
	'CONRAD',
	'RPC71', // 71: DUMMY
	'MADDOG'
];

function createOption(select, array, i) {
	const option = document.createElement('option');
	option.value = i;
	option.text = array[i].replace('QUOTE_', '');
	select.add(option);
}

function createQuotes() {
	// Clear
	while (quoteSelect.firstChild) {
		quoteSelect.removeChild(quoteSelect.lastChild);
	}
	let length = DialogQuoteIDs.length;
	if (mercSelect.selectedIndex > 39) {
		// Non-AIM mercs have less quotes
		length -= 38;
	}
	for (let i = 0; i < length; i++) {
		createOption(quoteSelect, DialogQuoteIDs, i);
	}
}

function setImage(face) {
	if (face === 'RPC65' || face === 'RPC71') face = 'ROBOT';
	mercImage.src = 'faces/' + face + '.png';
	mercImage.alt = 'Avatar of ' + face;
}

const mercSelect = document.querySelector('select[name=merc]');
for (let i = 0; i < NPCIDs.length; i++) {
	createOption(mercSelect, NPCIDs, i);
}

const mercImage = document.getElementById('avatar');
mercSelect.addEventListener('change', () => {
	let face = mercSelect.options[mercSelect.selectedIndex].text;

	// Check special IMP case
	switch (mercSelect.selectedIndex) {
		case 51:
		case 52:
		case 53:
			face = 'IMP_M' + Math.floor(Math.random() * 8)
			break;
		case 54:
		case 55:
		case 56:
			face = 'IMP_W' + Math.floor(Math.random() * 8)
			break;
	}
	setImage(face);
	createQuotes();
});

const quoteSelect = document.querySelector('select[name=quote]');
createQuotes();

function padToThree(num) {
	return String(num).padStart(3, '0');
}

function getLang() {
	return document.querySelector('input[name=lang]:checked').value;
}

function playQuote(merc, quote) {
	if (merc === 62 ||
		merc === 65 ||
		merc === 71) {
		return alert(`${NPCIDs[merc]} has no audio.`);
	}
	if (quote === 79) {
		return alert(`${DialogQuoteIDs[quote]} is a dummy without audio.`);
	}
	if (!audio) {
		audio = new Audio();
		audio.addEventListener('canplaythrough', () => {
			audio.play();
		});
	}
	audio.src = 'speech/' + getLang() + '/' + padToThree(merc) + '_' + padToThree(quote) + '.webm';
	audio.load();
}

let audio;
const playButton = document.getElementById('play');
playButton.addEventListener('click', () => {
	playQuote(mercSelect.selectedIndex, quoteSelect.selectedIndex);
});

const randomButton = document.getElementById('random');
randomButton.addEventListener('click', () => {
	const mercIndex = Math.floor(Math.random() * NPCIDs.length);
	mercSelect.selectedIndex = mercIndex;
	setImage(NPCIDs[mercIndex]);
	createQuotes();
	const quoteIndex = Math.floor(Math.random() * quoteSelect.children.length);
	quoteSelect.selectedIndex = quoteIndex;
	playQuote(mercIndex, quoteIndex);
});

const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', event => {
	const btn = event.target;
    const oldText = btn.textContent;
    btn.textContent = 'URL copied!';
    setTimeout(() => {
	    btn.textContent = oldText;
    }, 1337);
    navigator.clipboard.writeText(
      window.location.origin +
      window.location.pathname +
      '?merc=' + mercSelect.selectedIndex +
      '&quote=' + quoteSelect.selectedIndex +
	  '&lang=' + getLang());
});

document.addEventListener("DOMContentLoaded", () => {
	const query = window.location.search;
	if (!query) {
		return;
	}
	const params = new URLSearchParams(query);
	const mercIndex = params.get('merc');
	if (!mercIndex || NPCIDs[mercIndex] === undefined) {
		return;
	}
	mercSelect.selectedIndex = mercIndex;
	setImage(NPCIDs[mercIndex]);
	createQuotes();
	const quoteIndex = params.get('quote');
	if (!quoteIndex || DialogQuoteIDs[quoteIndex] === undefined) {
		return;
	}
	quoteSelect.selectedIndex = quoteIndex;
	const lang = params.get('lang');
	document.querySelector('input[value=' + lang + ']').checked = true;
});