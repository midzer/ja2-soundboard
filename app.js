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

const mercSelect = document.getElementById('merc');
const quoteSelect = document.getElementById('quote');
const mercImage = document.getElementById('avatar');
const playQuoteButton = document.getElementById('playQuote');
const copyButton = document.getElementById('copy');
const musicSelect = document.getElementById('music');
const playMusicButton = document.getElementById('playMusic');
const randomHover = document.getElementById('randomHover');
const textDisplay = document.getElementById('text');

function createOption(select, array, i) {
	const option = document.createElement('option');
	option.value = i;
	option.text = array[i].replace('QUOTE_', '');
	select.add(option);
}

function createQuotes() {
	quoteSelect.innerHTML = '';

	const isAIMMerc = mercSelect.selectedIndex <= 39;
    const totalQuotes = DialogQuoteIDs.length;
    const skipStartIndex = isAIMMerc ? 0 : totalQuotes - 38;

	for (let i = 0; i < DialogQuoteIDs.length; i++) {
        // If not AIM merc, skip the last 38 quotes
        if (!isAIMMerc && i >= skipStartIndex) continue;

        createOption(quoteSelect, DialogQuoteIDs, i);
    }
}

function setImage(face) {
	if (['RPC65', 'RPC71'].includes(face)) face = 'ROBOT';
	mercImage.src = 'faces/' + face + '.png';
	mercImage.alt = 'Avatar of ' + face;
}

for (let i = 0; i < NPCIDs.length; i++) {
	createOption(mercSelect, NPCIDs, i);
}

mercSelect.addEventListener('change', () => {
	const idx = mercSelect.selectedIndex;
	let face = mercSelect.options[idx].text;

	if (idx >= 51 && idx <= 53) face = 'IMP_M' + Math.floor(Math.random() * 8);
	if (idx >= 54 && idx <= 56) face = 'IMP_W' + Math.floor(Math.random() * 8);

	setImage(face);
	createQuotes();
});

function padToThree(num) {
	return String(num).padStart(3, '0');
}

function playQuote(mercIndex, quoteIndex) {
	if ([62, 65, 71].includes(mercIndex)) {
        return alert(`${NPCIDs[mercIndex]} has no audio.`);
    }

    if (quoteIndex === 79) {
        return alert(`${DialogQuoteIDs[quoteIndex]} is a dummy without audio.`);
    }

    if (!audioQuote) {
        audioQuote = new Audio();
        audioQuote.addEventListener('canplaythrough', () => {
            audioQuote.play();
        });
    }

	const fileBase = `${padToThree(mercIndex)}_${padToThree(quoteIndex)}`;

    audioQuote.src = `speech/${fileBase}.webm`;
    audioQuote.load();

	fetch(`text/${fileBase}.txt`)
		.then(r => r.ok ? r.text() : Promise.reject(r))
		.then(text => {
			textDisplay.textContent = text.slice(1);
		})
		.catch(error => console.error('Failed to load text:', error));
}

function play() {
	const mercIndex = mercSelect.selectedIndex;
    const quoteIndex = parseInt(quoteSelect.options[quoteSelect.selectedIndex].value);
    playQuote(mercIndex, quoteIndex);
}

let audioQuote;
playQuoteButton.addEventListener('click', play);

function selectRandom() {
	const mercIndex = Math.floor(Math.random() * NPCIDs.length);
	mercSelect.selectedIndex = mercIndex;

	setImage(NPCIDs[mercIndex]);
	createQuotes();

	const options = quoteSelect.options;
	const quoteOption = options[Math.floor(Math.random() * options.length)];
	quoteSelect.value = quoteOption.value;
}

randomHover.addEventListener('click', () => {
	selectRandom();
	play();
});

copyButton.addEventListener('click', event => {
	const btn = event.target;
    const oldText = btn.textContent;

    btn.textContent = 'URL copied!';
    setTimeout(() => (btn.textContent = oldText), 1337);

    navigator.clipboard.writeText(
		`${window.location.origin}${window.location.pathname}` +
		`?merc=${mercSelect.selectedIndex}&quote=${quoteSelect.selectedIndex}`
	);
});

musicSelect.addEventListener('change', () => {
	if (audioMusic && !audioMusic.paused) {
		audioMusic.src = `music/${musicSelect.value}.webm`;
		audioMusic.load();
		audioMusic.play();
	}
});

let audioMusic;
playMusicButton.addEventListener('click', () => {
	if (!audioMusic) {
		audioMusic = new Audio();
		audioMusic.loop = true;
		audioMusic.src = `music/${musicSelect.value}.webm`;
	}
	if (audioMusic.paused) {
		audioMusic.play();
		playMusicButton.textContent = 'Pause';
	}
	else {
		audioMusic.pause();
		playMusicButton.textContent = 'Play';
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
    const mercIndex = parseInt(params.get('merc'));
    const quoteIndex = parseInt(params.get('quote'));

    if (!Number.isNaN(mercIndex) && NPCIDs[mercIndex]) {
        mercSelect.selectedIndex = mercIndex;
        setImage(NPCIDs[mercIndex]);
        createQuotes();

        for (let i = 0; i < quoteSelect.length; i++) {
            if (parseInt(quoteSelect.options[i].value) === quoteIndex) {
                quoteSelect.selectedIndex = i;
                break;
            }
        }
    }
	else {
		selectRandom();
	}
});
