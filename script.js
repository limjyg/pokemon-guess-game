// ----- Pokémon roster across all 9 generations -----
// tier "easy"  = common, iconic, early-route Pokémon (gentle for younger kids)
// tier "hard"  = legendaries, mythicals, pseudo-legendaries, and rarer/newer-gen Pokémon
const POKEMON = [
  // ----- Generation 1 -----
  { id: 1, name: "Bulbasaur", gen: 1, tier: "easy" },
  { id: 4, name: "Charmander", gen: 1, tier: "easy" },
  { id: 7, name: "Squirtle", gen: 1, tier: "easy" },
  { id: 12, name: "Butterfree", gen: 1, tier: "easy" },
  { id: 16, name: "Pidgey", gen: 1, tier: "easy" },
  { id: 19, name: "Rattata", gen: 1, tier: "easy" },
  { id: 25, name: "Pikachu", gen: 1, tier: "easy" },
  { id: 26, name: "Raichu", gen: 1, tier: "easy" },
  { id: 27, name: "Sandshrew", gen: 1, tier: "easy" },
  { id: 35, name: "Clefairy", gen: 1, tier: "easy" },
  { id: 37, name: "Vulpix", gen: 1, tier: "easy" },
  { id: 39, name: "Jigglypuff", gen: 1, tier: "easy" },
  { id: 41, name: "Zubat", gen: 1, tier: "easy" },
  { id: 43, name: "Oddish", gen: 1, tier: "easy" },
  { id: 46, name: "Paras", gen: 1, tier: "easy" },
  { id: 48, name: "Venonat", gen: 1, tier: "easy" },
  { id: 50, name: "Diglett", gen: 1, tier: "easy" },
  { id: 52, name: "Meowth", gen: 1, tier: "easy" },
  { id: 54, name: "Psyduck", gen: 1, tier: "easy" },
  { id: 56, name: "Mankey", gen: 1, tier: "easy" },
  { id: 58, name: "Growlithe", gen: 1, tier: "easy" },
  { id: 60, name: "Poliwag", gen: 1, tier: "easy" },
  { id: 63, name: "Abra", gen: 1, tier: "easy" },
  { id: 66, name: "Machop", gen: 1, tier: "easy" },
  { id: 69, name: "Bellsprout", gen: 1, tier: "easy" },
  { id: 72, name: "Tentacool", gen: 1, tier: "easy" },
  { id: 74, name: "Geodude", gen: 1, tier: "easy" },
  { id: 77, name: "Ponyta", gen: 1, tier: "easy" },
  { id: 79, name: "Slowpoke", gen: 1, tier: "easy" },
  { id: 81, name: "Magnemite", gen: 1, tier: "easy" },
  { id: 84, name: "Doduo", gen: 1, tier: "easy" },
  { id: 86, name: "Seel", gen: 1, tier: "easy" },
  { id: 88, name: "Grimer", gen: 1, tier: "easy" },
  { id: 90, name: "Shellder", gen: 1, tier: "easy" },
  { id: 92, name: "Gastly", gen: 1, tier: "easy" },
  { id: 95, name: "Onix", gen: 1, tier: "easy" },
  { id: 96, name: "Drowzee", gen: 1, tier: "easy" },
  { id: 98, name: "Krabby", gen: 1, tier: "easy" },
  { id: 100, name: "Voltorb", gen: 1, tier: "easy" },
  { id: 102, name: "Exeggcute", gen: 1, tier: "easy" },
  { id: 104, name: "Cubone", gen: 1, tier: "easy" },
  { id: 108, name: "Lickitung", gen: 1, tier: "easy" },
  { id: 109, name: "Koffing", gen: 1, tier: "easy" },
  { id: 111, name: "Rhyhorn", gen: 1, tier: "easy" },
  { id: 113, name: "Chansey", gen: 1, tier: "easy" },
  { id: 116, name: "Horsea", gen: 1, tier: "easy" },
  { id: 118, name: "Goldeen", gen: 1, tier: "easy" },
  { id: 120, name: "Staryu", gen: 1, tier: "easy" },
  { id: 129, name: "Magikarp", gen: 1, tier: "easy" },
  { id: 131, name: "Lapras", gen: 1, tier: "easy" },
  { id: 132, name: "Ditto", gen: 1, tier: "easy" },
  { id: 133, name: "Eevee", gen: 1, tier: "easy" },
  { id: 137, name: "Porygon", gen: 1, tier: "easy" },
  { id: 138, name: "Omanyte", gen: 1, tier: "easy" },
  { id: 140, name: "Kabuto", gen: 1, tier: "easy" },
  { id: 143, name: "Snorlax", gen: 1, tier: "easy" },
  { id: 147, name: "Dratini", gen: 1, tier: "easy" },
  { id: 144, name: "Articuno", gen: 1, tier: "hard" },
  { id: 145, name: "Zapdos", gen: 1, tier: "hard" },
  { id: 146, name: "Moltres", gen: 1, tier: "hard" },
  { id: 150, name: "Mewtwo", gen: 1, tier: "hard" },
  { id: 151, name: "Mew", gen: 1, tier: "hard" },

  // ----- Generation 2 -----
  { id: 152, name: "Chikorita", gen: 2, tier: "easy" },
  { id: 155, name: "Cyndaquil", gen: 2, tier: "easy" },
  { id: 158, name: "Totodile", gen: 2, tier: "easy" },
  { id: 161, name: "Sentret", gen: 2, tier: "easy" },
  { id: 163, name: "Hoothoot", gen: 2, tier: "easy" },
  { id: 170, name: "Chinchou", gen: 2, tier: "easy" },
  { id: 172, name: "Pichu", gen: 2, tier: "easy" },
  { id: 175, name: "Togepi", gen: 2, tier: "easy" },
  { id: 183, name: "Marill", gen: 2, tier: "easy" },
  { id: 194, name: "Wooper", gen: 2, tier: "easy" },
  { id: 196, name: "Espeon", gen: 2, tier: "easy" },
  { id: 197, name: "Umbreon", gen: 2, tier: "easy" },
  { id: 209, name: "Snubbull", gen: 2, tier: "easy" },
  { id: 216, name: "Teddiursa", gen: 2, tier: "easy" },
  { id: 218, name: "Slugma", gen: 2, tier: "easy" },
  { id: 220, name: "Swinub", gen: 2, tier: "easy" },
  { id: 223, name: "Remoraid", gen: 2, tier: "easy" },
  { id: 228, name: "Houndour", gen: 2, tier: "easy" },
  { id: 231, name: "Phanpy", gen: 2, tier: "easy" },
  { id: 227, name: "Skarmory", gen: 2, tier: "hard" },
  { id: 232, name: "Donphan", gen: 2, tier: "hard" },
  { id: 246, name: "Larvitar", gen: 2, tier: "hard" },
  { id: 248, name: "Tyranitar", gen: 2, tier: "hard" },
  { id: 243, name: "Raikou", gen: 2, tier: "hard" },
  { id: 244, name: "Entei", gen: 2, tier: "hard" },
  { id: 245, name: "Suicune", gen: 2, tier: "hard" },
  { id: 249, name: "Lugia", gen: 2, tier: "hard" },
  { id: 250, name: "Ho-Oh", gen: 2, tier: "hard" },
  { id: 251, name: "Celebi", gen: 2, tier: "hard" },

  // ----- Generation 3 -----
  { id: 252, name: "Treecko", gen: 3, tier: "easy" },
  { id: 255, name: "Torchic", gen: 3, tier: "easy" },
  { id: 258, name: "Mudkip", gen: 3, tier: "easy" },
  { id: 263, name: "Zigzagoon", gen: 3, tier: "easy" },
  { id: 265, name: "Wurmple", gen: 3, tier: "easy" },
  { id: 270, name: "Lotad", gen: 3, tier: "easy" },
  { id: 276, name: "Taillow", gen: 3, tier: "easy" },
  { id: 280, name: "Ralts", gen: 3, tier: "easy" },
  { id: 285, name: "Shroomish", gen: 3, tier: "easy" },
  { id: 293, name: "Whismur", gen: 3, tier: "easy" },
  { id: 296, name: "Makuhita", gen: 3, tier: "easy" },
  { id: 300, name: "Skitty", gen: 3, tier: "easy" },
  { id: 304, name: "Aron", gen: 3, tier: "easy" },
  { id: 322, name: "Numel", gen: 3, tier: "easy" },
  { id: 325, name: "Spoink", gen: 3, tier: "easy" },
  { id: 328, name: "Trapinch", gen: 3, tier: "easy" },
  { id: 349, name: "Feebas", gen: 3, tier: "easy" },
  { id: 350, name: "Milotic", gen: 3, tier: "hard" },
  { id: 354, name: "Banette", gen: 3, tier: "hard" },
  { id: 359, name: "Absol", gen: 3, tier: "hard" },
  { id: 373, name: "Salamence", gen: 3, tier: "hard" },
  { id: 376, name: "Metagross", gen: 3, tier: "hard" },
  { id: 380, name: "Latias", gen: 3, tier: "hard" },
  { id: 381, name: "Latios", gen: 3, tier: "hard" },
  { id: 382, name: "Kyogre", gen: 3, tier: "hard" },
  { id: 383, name: "Groudon", gen: 3, tier: "hard" },
  { id: 384, name: "Rayquaza", gen: 3, tier: "hard" },
  { id: 386, name: "Deoxys", gen: 3, tier: "hard" },

  // ----- Generation 4 -----
  { id: 387, name: "Turtwig", gen: 4, tier: "easy" },
  { id: 390, name: "Chimchar", gen: 4, tier: "easy" },
  { id: 393, name: "Piplup", gen: 4, tier: "easy" },
  { id: 396, name: "Starly", gen: 4, tier: "easy" },
  { id: 399, name: "Bidoof", gen: 4, tier: "easy" },
  { id: 401, name: "Kricketot", gen: 4, tier: "easy" },
  { id: 403, name: "Shinx", gen: 4, tier: "easy" },
  { id: 408, name: "Cranidos", gen: 4, tier: "easy" },
  { id: 418, name: "Buizel", gen: 4, tier: "easy" },
  { id: 427, name: "Buneary", gen: 4, tier: "easy" },
  { id: 431, name: "Glameow", gen: 4, tier: "easy" },
  { id: 441, name: "Chatot", gen: 4, tier: "easy" },
  { id: 442, name: "Spiritomb", gen: 4, tier: "hard" },
  { id: 445, name: "Garchomp", gen: 4, tier: "hard" },
  { id: 448, name: "Lucario", gen: 4, tier: "hard" },
  { id: 468, name: "Togekiss", gen: 4, tier: "hard" },
  { id: 479, name: "Rotom", gen: 4, tier: "hard" },
  { id: 483, name: "Dialga", gen: 4, tier: "hard" },
  { id: 484, name: "Palkia", gen: 4, tier: "hard" },
  { id: 487, name: "Giratina", gen: 4, tier: "hard" },
  { id: 491, name: "Darkrai", gen: 4, tier: "hard" },
  { id: 493, name: "Arceus", gen: 4, tier: "hard" },

  // ----- Generation 5 -----
  { id: 494, name: "Victini", gen: 5, tier: "hard" },
  { id: 495, name: "Snivy", gen: 5, tier: "easy" },
  { id: 498, name: "Tepig", gen: 5, tier: "easy" },
  { id: 501, name: "Oshawott", gen: 5, tier: "easy" },
  { id: 504, name: "Patrat", gen: 5, tier: "easy" },
  { id: 506, name: "Lillipup", gen: 5, tier: "easy" },
  { id: 511, name: "Pansage", gen: 5, tier: "easy" },
  { id: 519, name: "Pidove", gen: 5, tier: "easy" },
  { id: 531, name: "Audino", gen: 5, tier: "easy" },
  { id: 540, name: "Sewaddle", gen: 5, tier: "easy" },
  { id: 543, name: "Venipede", gen: 5, tier: "easy" },
  { id: 572, name: "Minccino", gen: 5, tier: "easy" },
  { id: 585, name: "Deerling", gen: 5, tier: "easy" },
  { id: 571, name: "Zoroark", gen: 5, tier: "hard" },
  { id: 612, name: "Haxorus", gen: 5, tier: "hard" },
  { id: 635, name: "Hydreigon", gen: 5, tier: "hard" },
  { id: 637, name: "Volcarona", gen: 5, tier: "hard" },
  { id: 643, name: "Reshiram", gen: 5, tier: "hard" },
  { id: 644, name: "Zekrom", gen: 5, tier: "hard" },
  { id: 646, name: "Kyurem", gen: 5, tier: "hard" },
  { id: 649, name: "Genesect", gen: 5, tier: "hard" },

  // ----- Generation 6 -----
  { id: 650, name: "Chespin", gen: 6, tier: "easy" },
  { id: 653, name: "Fennekin", gen: 6, tier: "easy" },
  { id: 656, name: "Froakie", gen: 6, tier: "easy" },
  { id: 659, name: "Bunnelby", gen: 6, tier: "easy" },
  { id: 661, name: "Fletchling", gen: 6, tier: "easy" },
  { id: 672, name: "Skiddo", gen: 6, tier: "easy" },
  { id: 674, name: "Pancham", gen: 6, tier: "easy" },
  { id: 694, name: "Helioptile", gen: 6, tier: "easy" },
  { id: 702, name: "Dedenne", gen: 6, tier: "easy" },
  { id: 658, name: "Greninja", gen: 6, tier: "hard" },
  { id: 700, name: "Sylveon", gen: 6, tier: "hard" },
  { id: 706, name: "Goodra", gen: 6, tier: "hard" },
  { id: 716, name: "Xerneas", gen: 6, tier: "hard" },
  { id: 717, name: "Yveltal", gen: 6, tier: "hard" },
  { id: 718, name: "Zygarde", gen: 6, tier: "hard" },
  { id: 719, name: "Diancie", gen: 6, tier: "hard" },
  { id: 720, name: "Hoopa", gen: 6, tier: "hard" },
  { id: 721, name: "Volcanion", gen: 6, tier: "hard" },

  // ----- Generation 7 -----
  { id: 722, name: "Rowlet", gen: 7, tier: "easy" },
  { id: 725, name: "Litten", gen: 7, tier: "easy" },
  { id: 728, name: "Popplio", gen: 7, tier: "easy" },
  { id: 731, name: "Pikipek", gen: 7, tier: "easy" },
  { id: 734, name: "Yungoos", gen: 7, tier: "easy" },
  { id: 736, name: "Grubbin", gen: 7, tier: "easy" },
  { id: 749, name: "Mudbray", gen: 7, tier: "easy" },
  { id: 761, name: "Bounsweet", gen: 7, tier: "easy" },
  { id: 745, name: "Lycanroc", gen: 7, tier: "hard" },
  { id: 746, name: "Wishiwashi", gen: 7, tier: "hard" },
  { id: 772, name: "Type: Null", gen: 7, tier: "hard" },
  { id: 785, name: "Tapu Koko", gen: 7, tier: "hard" },
  { id: 791, name: "Solgaleo", gen: 7, tier: "hard" },
  { id: 792, name: "Lunala", gen: 7, tier: "hard" },
  { id: 800, name: "Necrozma", gen: 7, tier: "hard" },
  { id: 801, name: "Magearna", gen: 7, tier: "hard" },
  { id: 802, name: "Marshadow", gen: 7, tier: "hard" },
  { id: 807, name: "Zeraora", gen: 7, tier: "hard" },

  // ----- Generation 8 -----
  { id: 810, name: "Grookey", gen: 8, tier: "easy" },
  { id: 813, name: "Scorbunny", gen: 8, tier: "easy" },
  { id: 816, name: "Sobble", gen: 8, tier: "easy" },
  { id: 819, name: "Skwovet", gen: 8, tier: "easy" },
  { id: 821, name: "Rookidee", gen: 8, tier: "easy" },
  { id: 831, name: "Wooloo", gen: 8, tier: "easy" },
  { id: 835, name: "Yamper", gen: 8, tier: "easy" },
  { id: 840, name: "Applin", gen: 8, tier: "easy" },
  { id: 845, name: "Cramorant", gen: 8, tier: "easy" },
  { id: 882, name: "Dracovish", gen: 8, tier: "hard" },
  { id: 887, name: "Dragapult", gen: 8, tier: "hard" },
  { id: 888, name: "Zacian", gen: 8, tier: "hard" },
  { id: 889, name: "Zamazenta", gen: 8, tier: "hard" },
  { id: 890, name: "Eternatus", gen: 8, tier: "hard" },
  { id: 892, name: "Urshifu", gen: 8, tier: "hard" },
  { id: 894, name: "Regieleki", gen: 8, tier: "hard" },
  { id: 896, name: "Glastrier", gen: 8, tier: "hard" },
  { id: 898, name: "Calyrex", gen: 8, tier: "hard" },

  // ----- Generation 9 -----
  { id: 906, name: "Sprigatito", gen: 9, tier: "easy" },
  { id: 909, name: "Fuecoco", gen: 9, tier: "easy" },
  { id: 912, name: "Quaxly", gen: 9, tier: "easy" },
  { id: 915, name: "Lechonk", gen: 9, tier: "easy" },
  { id: 917, name: "Tarountula", gen: 9, tier: "easy" },
  { id: 919, name: "Nymble", gen: 9, tier: "easy" },
  { id: 921, name: "Pawmi", gen: 9, tier: "easy" },
  { id: 930, name: "Wattrel", gen: 9, tier: "easy" },
  { id: 960, name: "Wiglett", gen: 9, tier: "easy" },
  { id: 950, name: "Klawf", gen: 9, tier: "hard" },
  { id: 1001, name: "Wo-Chien", gen: 9, tier: "hard" },
  { id: 1002, name: "Chien-Pao", gen: 9, tier: "hard" },
  { id: 1003, name: "Ting-Lu", gen: 9, tier: "hard" },
  { id: 1004, name: "Chi-Yu", gen: 9, tier: "hard" },
  { id: 1007, name: "Koraidon", gen: 9, tier: "hard" },
  { id: 1008, name: "Miraidon", gen: 9, tier: "hard" },
];

const SPRITE_URL = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

// ----- DOM references -----
const imageEl = document.getElementById("poke-image");
const optionsEl = document.getElementById("options");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const nextBtn = document.getElementById("next-btn");
const musicToggleBtn = document.getElementById("music-toggle");
const sparklesEl = document.getElementById("sparkles");
const easyBtn = document.getElementById("diff-easy");
const hardBtn = document.getElementById("diff-hard");
const extraBtn = document.getElementById("diff-extra");
const typingForm = document.getElementById("typing-area");
const letterBoxesEl = document.getElementById("letter-boxes");
const checkBtn = typingForm.querySelector(".check-btn");
const revealHintBtn = document.getElementById("reveal-hint-btn");
const leaderboardToggleBtn = document.getElementById("leaderboard-toggle");
const leaderboardOverlay = document.getElementById("leaderboard-overlay");
const leaderboardCloseBtn = document.getElementById("leaderboard-close");
const leaderboardListEl = document.getElementById("leaderboard-list");
const leaderboardEmptyEl = document.getElementById("leaderboard-empty");
const recordOverlay = document.getElementById("record-overlay");
const recordForm = document.getElementById("record-form");
const recordNameInput = document.getElementById("record-name");
const recordMessageEl = document.getElementById("record-message");
const recordSkipBtn = document.getElementById("record-skip");

// ----- Game state -----
let score = 0;
let streak = 0;
let bestStreak = 0;
let current = null;
let answered = false;
let usedRecently = [];
let difficulty = "easy";
let sessionTrainerName = null;
let recordDismissedScore = -1;
let typingInputs = [];
let hintableInputs = [];

// "Extra Hard" reuses the rare/legendary pool — typing their names is the
// extra layer of challenge on top of already-tricky Pokémon.
function currentPool() {
  const tier = difficulty === "easy" ? "easy" : "hard";
  return POKEMON.filter((p) => p.tier === tier);
}

function setDifficulty(level) {
  if (level === difficulty) return;
  difficulty = level;
  easyBtn.classList.toggle("active", level === "easy");
  hardBtn.classList.toggle("active", level === "hard");
  extraBtn.classList.toggle("active", level === "extra");
  usedRecently = [];
  newRound();
}

easyBtn.addEventListener("click", () => setDifficulty("easy"));
hardBtn.addEventListener("click", () => setDifficulty("hard"));
extraBtn.addEventListener("click", () => setDifficulty("extra"));

function pickRandom(arr, count, exclude = []) {
  const pool = arr.filter((item) => !exclude.includes(item));
  const picks = [];
  while (picks.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(idx, 1)[0]);
  }
  return picks;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function newRound() {
  answered = false;
  nextBtn.hidden = true;
  messageEl.textContent = difficulty === "extra"
    ? "Look at the shadow… then spell out its name!"
    : "Look at the shadow… who could it be?";
  messageEl.className = "message";
  sparklesEl.innerHTML = "";

  // Avoid repeating the last few Pokémon (within the chosen difficulty pool)
  const pool = currentPool();
  const candidates = pool.filter((p) => !usedRecently.includes(p.id));
  const choosable = candidates.length > 0 ? candidates : pool;
  current = choosable[Math.floor(Math.random() * choosable.length)];
  usedRecently.push(current.id);
  const recentLimit = Math.max(4, Math.floor(pool.length / 2));
  if (usedRecently.length > recentLimit) usedRecently.shift();

  imageEl.src = SPRITE_URL(current.id);
  imageEl.classList.remove("revealed");
  imageEl.classList.add("silhouette");

  if (difficulty === "extra") {
    optionsEl.hidden = true;
    optionsEl.innerHTML = "";
    typingForm.hidden = false;
    checkBtn.disabled = false;
    revealHintBtn.disabled = false;
    buildTypingPuzzle(current.name);
  } else {
    typingForm.hidden = true;
    letterBoxesEl.innerHTML = "";
    typingInputs = [];
    hintableInputs = [];
    optionsEl.hidden = false;

    const wrongChoices = pickRandom(pool, 4, [current]);
    const choices = shuffle([current, ...wrongChoices]);

    optionsEl.innerHTML = "";
    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = choice.name;
      btn.addEventListener("click", () => handleAnswer(btn, choice));
      optionsEl.appendChild(btn);
    });
  }
}

// ----- Extra Hard: type-the-name puzzle -----
function buildTypingPuzzle(name) {
  letterBoxesEl.innerHTML = "";
  typingInputs = [];
  hintableInputs = [];

  const letterIndices = [];
  for (let i = 0; i < name.length; i++) {
    if (/[a-zA-Z]/.test(name[i])) letterIndices.push(i);
  }
  // Start with no revealed letters; use the hint button to unlock them one by one.
  const hintCount = 0;
  const hintIndices = new Set(pickRandom(letterIndices, hintCount));

  [...name].forEach((char, i) => {
    if (!/[a-zA-Z]/.test(char)) {
      const span = document.createElement("span");
      span.className = "letter-box separator";
      span.textContent = char === " " ? " " : char;
      letterBoxesEl.appendChild(span);
      return;
    }
    if (hintIndices.has(i)) {
      const span = document.createElement("span");
      span.className = "letter-box hint";
      span.textContent = char;
      letterBoxesEl.appendChild(span);
      return;
    }
    const input = document.createElement("input");
    input.type = "text";
    input.className = "letter-box input-box";
    input.maxLength = 1;
    input.autocomplete = "off";
    input.autocapitalize = "characters";
    input.spellcheck = false;
    input.inputMode = "text";
    input.dataset.answer = char.toLowerCase();
    input.addEventListener("input", () => onLetterInput(input));
    input.addEventListener("keydown", (event) => onLetterKeydown(event, input));
    letterBoxesEl.appendChild(input);
    typingInputs.push(input);
  });

  // Shuffle remaining inputs so hints are revealed in a random order
  hintableInputs = shuffle([...typingInputs]);
  updateRevealButton();

  if (typingInputs.length > 0) {
    typingInputs[0].focus();
  }
}

function updateRevealButton() {
  const left = hintableInputs.length;
  revealHintBtn.disabled = left === 0;
  revealHintBtn.textContent = left > 0
    ? `💡 Show a letter (${left} left)`
    : "💡 No more hints";
}

function revealNextHint() {
  if (hintableInputs.length === 0) return;
  const input = hintableInputs.shift();
  // Convert this input box into a hint box (same styling as the pre-revealed letter)
  input.value = input.dataset.answer.toUpperCase();
  input.disabled = true;
  input.classList.remove("input-box");
  input.classList.add("hinted");
  // Remove from typingInputs so it won't be re-checked
  typingInputs = typingInputs.filter((el) => el !== input);
  updateRevealButton();
  // Focus the next available empty input
  const nextEmpty = typingInputs.find((el) => !el.value);
  if (nextEmpty) nextEmpty.focus();
}

revealHintBtn.addEventListener("click", revealNextHint);

function onLetterInput(input) {
  const letter = input.value.replace(/[^a-zA-Z]/g, "").slice(0, 1);
  input.value = letter.toUpperCase();
  if (letter) {
    const idx = typingInputs.indexOf(input);
    const next = typingInputs[idx + 1];
    if (next) next.focus();
  }
}

function onLetterKeydown(event, input) {
  if (event.key === "Backspace" && !input.value) {
    const idx = typingInputs.indexOf(input);
    const prev = typingInputs[idx - 1];
    if (prev) {
      prev.value = "";
      prev.focus();
    }
  }
}

typingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkTypedAnswer();
});

function checkTypedAnswer() {
  if (answered) return;
  answered = true;

  // typingInputs holds only the user-typed boxes (hint-revealed ones were removed)
  let allCorrect = true;
  typingInputs.forEach((input) => {
    input.disabled = true;
    if (input.value.toLowerCase() === input.dataset.answer) {
      input.classList.add("correct");
    } else {
      input.classList.add("wrong");
      allCorrect = false;
    }
  });
  checkBtn.disabled = true;
  revealHintBtn.disabled = true;

  imageEl.classList.remove("silhouette");
  imageEl.classList.add("revealed");

  if (allCorrect) {
    const pointsEarned = 40;
    score += pointsEarned;
    streak += 1;
    if (streak > bestStreak) bestStreak = streak;
    messageEl.textContent = `🎉 Amazing spelling! It's ${current.name}! +${pointsEarned} pts — you're a word wizard! 🌟`;
    messageEl.classList.add("correct");
    spawnSparkles();
    playCorrectSound();
  } else {
    streak = 0;
    messageEl.textContent = `So close! It's actually ${current.name}. Try the next one!`;
    messageEl.classList.add("wrong");
    playWrongSound();
    checkForRecord();
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;
  nextBtn.hidden = false;
}

// Rare/legendary Pokémon (the "hard" tier, also used for Extra Hard) are
// worth double points — correct answers feel extra rewarding when they're tough.
function awardPoints() {
  const basePoints = 10 + streak * 2;
  const multiplier = current.tier === "hard" ? 2 : 1;
  const pointsEarned = basePoints * multiplier;
  score += pointsEarned;
  streak += 1;
  if (streak > bestStreak) bestStreak = streak;
  return { pointsEarned, multiplier };
}

function handleAnswer(button, choice) {
  if (answered) return;
  answered = true;

  const isCorrect = choice.id === current.id;
  const allButtons = [...optionsEl.querySelectorAll(".option-btn")];

  imageEl.classList.remove("silhouette");
  imageEl.classList.add("revealed");

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === current.name) {
      btn.classList.add("correct");
    } else if (btn === button) {
      btn.classList.add("wrong");
    } else {
      btn.classList.add("dim");
    }
  });

  if (isCorrect) {
    const { pointsEarned, multiplier } = awardPoints();
    messageEl.textContent = multiplier === 2
      ? `🎉 Yes! It's ${current.name}! +${pointsEarned} pts — Rare Pokémon double points! 🔥`
      : `🎉 Yes! It's ${current.name}! +${pointsEarned} pts — great job, Trainer!`;
    messageEl.classList.add("correct");
    spawnSparkles();
    playCorrectSound();
  } else {
    streak = 0;
    messageEl.textContent = `Aww, that's ${current.name}! Try the next one!`;
    messageEl.classList.add("wrong");
    playWrongSound();
    // Only offer to save a record once the streak has ended, so the
    // name-entry prompt never interrupts an active run.
    checkForRecord();
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;
  nextBtn.hidden = false;
}

function spawnSparkles() {
  const emojis = ["✨", "⭐", "🌟", "💫"];
  for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.className = "sparkle";
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 70;
    span.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    span.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    span.style.left = "50%";
    span.style.top = "50%";
    span.style.animationDelay = `${Math.random() * 0.2}s`;
    sparklesEl.appendChild(span);
  }
  setTimeout(() => (sparklesEl.innerHTML = ""), 1100);
}

nextBtn.addEventListener("click", newRound);

// ----- Leaderboard: global Top 5 via Firebase Realtime Database -----
//
// SETUP (one-time, takes ~3 minutes):
// 1. Go to https://console.firebase.google.com and sign in with Google.
// 2. Click "Add project" → give it a name → hit Continue → Create project.
// 3. In the left sidebar: Build → Realtime Database → Create Database.
// 4. Choose any region → select "Start in test mode" → Enable.
// 5. Copy the database URL shown (e.g. https://your-app-default-rtdb.firebaseio.com).
// 6. Paste it below, replacing the empty string.
// 7. Redeploy (git add -A && git commit -m "add firebase" && git push).
//
// While FIREBASE_DB_URL is empty the game still works — scores are saved
// locally in the browser (localStorage) but won't sync across devices.

const FIREBASE_DB_URL = ""; // ← paste your Realtime Database URL here

const LEADERBOARD_KEY = "pokequiz-leaderboard";
const MAX_LEADERBOARD = 5;

function loadLeaderboard() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function sortLeaderboard(list) {
  return [...list]
    .sort((a, b) => b.score - a.score || b.streak - a.streak)
    .slice(0, MAX_LEADERBOARD);
}

let leaderboard = sortLeaderboard(loadLeaderboard());

function saveLocalLeaderboard() {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
}

// Fetch latest leaderboard from Firebase; returns sorted array or null on failure.
async function fetchGlobalLeaderboard() {
  if (!FIREBASE_DB_URL) return null;
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/leaderboard.json`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data) return [];
    const entries = Array.isArray(data) ? data : Object.values(data);
    return sortLeaderboard(entries.filter((e) => e && e.name));
  } catch {
    return null;
  }
}

// Push current leaderboard to Firebase (fire-and-forget, falls back silently).
async function pushGlobalLeaderboard() {
  if (!FIREBASE_DB_URL) return;
  try {
    await fetch(`${FIREBASE_DB_URL}/leaderboard.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leaderboard),
    });
  } catch {
    // Network error — localStorage already holds the latest data.
  }
}

function renderLeaderboard() {
  leaderboardListEl.innerHTML = "";
  leaderboardEmptyEl.hidden = leaderboard.length > 0;
  const medals = ["🥇", "🥈", "🥉"];
  leaderboard.forEach((entry, i) => {
    const li = document.createElement("li");
    li.className = `leaderboard-row rank-${i + 1}`;

    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = medals[i] || String(i + 1);

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = entry.name;

    const stats = document.createElement("span");
    stats.className = "stats";
    stats.textContent = `⭐ ${entry.score} · 🔥 ${entry.streak}`;

    li.append(rank, name, stats);
    leaderboardListEl.appendChild(li);
  });
}

// Boot: immediately show cached scores then silently sync from Firebase.
renderLeaderboard();
fetchGlobalLeaderboard().then((global) => {
  if (global !== null) {
    leaderboard = global;
    saveLocalLeaderboard();
    renderLeaderboard();
  }
});

function qualifiesForLeaderboard(candidateScore, candidateStreak) {
  if (leaderboard.length < MAX_LEADERBOARD) return candidateScore > 0;
  const last = leaderboard[leaderboard.length - 1];
  return candidateScore > last.score || (candidateScore === last.score && candidateStreak > last.streak);
}

function upsertLeaderboardEntry(name, scoreVal, streakVal) {
  const idx = leaderboard.findIndex((e) => e.name.toLowerCase() === name.toLowerCase());
  if (idx >= 0) {
    if (scoreVal > leaderboard[idx].score || (scoreVal === leaderboard[idx].score && streakVal > leaderboard[idx].streak)) {
      leaderboard[idx] = { name, score: scoreVal, streak: streakVal };
    }
  } else {
    leaderboard.push({ name, score: scoreVal, streak: streakVal });
  }
  leaderboard = sortLeaderboard(leaderboard);
  saveLocalLeaderboard();
  renderLeaderboard();
  pushGlobalLeaderboard(); // sync to Firebase in the background
}

function checkForRecord() {
  if (sessionTrainerName) {
    upsertLeaderboardEntry(sessionTrainerName, score, bestStreak);
    return;
  }
  if (score > recordDismissedScore && qualifiesForLeaderboard(score, bestStreak)) {
    showRecordModal();
  }
}

function showRecordModal() {
  recordMessageEl.textContent =
    `You scored ${score} points with a streak of ${bestStreak}! Type your Trainer name to join the Top 5!`;
  recordNameInput.value = "";
  recordOverlay.hidden = false;
  recordNameInput.focus();
}

function hideRecordModal() {
  recordOverlay.hidden = true;
}

recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = recordNameInput.value.trim().slice(0, 14);
  if (!name) return;
  sessionTrainerName = name;
  upsertLeaderboardEntry(name, score, bestStreak);
  hideRecordModal();
});

recordSkipBtn.addEventListener("click", () => {
  recordDismissedScore = score;
  hideRecordModal();
});

leaderboardToggleBtn.addEventListener("click", async () => {
  renderLeaderboard(); // show cached data immediately
  leaderboardOverlay.hidden = false;
  // Refresh from Firebase so players always see the latest global scores.
  const global = await fetchGlobalLeaderboard();
  if (global !== null) {
    leaderboard = global;
    saveLocalLeaderboard();
    renderLeaderboard();
  }
});
leaderboardCloseBtn.addEventListener("click", () => {
  leaderboardOverlay.hidden = true;
});
leaderboardOverlay.addEventListener("click", (event) => {
  if (event.target === leaderboardOverlay) leaderboardOverlay.hidden = true;
});

// ----- Audio: synthesized chiptune background music + sound effects -----
// (Uses the Web Audio API to generate a cheerful original melody loop —
// no external audio files needed.)
let audioCtx = null;
let musicPlaying = false;
let musicTimer = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(freq, startTime, duration, type = "square", gainPeak = 0.06) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

// A cheerful, bouncy original melody (note names -> frequencies in Hz)
const NOTE = {
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
  A5: 880.0, B5: 987.77, C6: 1046.5, E6: 1318.51, G6: 1567.98,
};
const MELODY = [
  ["E5", 0.25], ["G5", 0.25], ["A5", 0.25], ["G5", 0.25],
  ["E5", 0.25], ["C5", 0.25], ["E5", 0.5],
  ["F5", 0.25], ["A5", 0.25], ["C6", 0.25], ["A5", 0.25],
  ["F5", 0.25], ["D5", 0.25], ["F5", 0.5],
  ["G5", 0.25], ["B5", 0.25], ["D5", 0.25],
  ["E5", 0.25], ["G5", 0.25], ["E5", 0.25], ["C5", 0.5],
];
const LOOP_LENGTH = MELODY.reduce((sum, [, dur]) => sum + dur, 0);

function scheduleMusicLoop() {
  if (!musicPlaying) return;
  const ctx = getCtx();
  const startAt = ctx.currentTime + 0.05;
  let t = startAt;
  MELODY.forEach(([note, dur]) => {
    playTone(NOTE[note], t, dur * 0.92, "square", 0.045);
    // soft bass harmony an octave-and-a-fifth below
    playTone(NOTE[note] / 4, t, dur * 0.92, "triangle", 0.025);
    t += dur;
  });
  musicTimer = setTimeout(scheduleMusicLoop, LOOP_LENGTH * 1000 - 60);
}

function startMusic() {
  const ctx = getCtx();
  if (ctx.state === "suspended") ctx.resume();
  if (musicPlaying) return;
  musicPlaying = true;
  scheduleMusicLoop();
  musicToggleBtn.textContent = "🔊";
  musicToggleBtn.title = "Turn music off";
}

function stopMusic() {
  musicPlaying = false;
  if (musicTimer) clearTimeout(musicTimer);
  musicToggleBtn.textContent = "🔇";
  musicToggleBtn.title = "Turn music on";
}

musicToggleBtn.addEventListener("click", () => {
  if (musicPlaying) stopMusic();
  else startMusic();
});

function playCorrectSound() {
  const ctx = getCtx();
  const t = ctx.currentTime;
  [NOTE.C5, NOTE.E5, NOTE.G5, NOTE.C6].forEach((freq, i) => {
    playTone(freq, t + i * 0.09, 0.25, "square", 0.08);
  });
}

function playWrongSound() {
  const ctx = getCtx();
  const t = ctx.currentTime;
  playTone(220, t, 0.18, "sawtooth", 0.06);
  playTone(180, t + 0.16, 0.28, "sawtooth", 0.06);
}

// ----- Boot -----
newRound();
