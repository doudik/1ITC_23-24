const slova = [
  "přetěžováni",
  "povztekání",
  "prozpěvování",
  "pořizovateli",
  "přemazávání",
  "převazovanými",
  "perverznějšími",
  "prezentovanými",
  "příznakovější",
  "převzorkování",
  "keprový",
  "keynesiánců",
  "kejklavé",
  "kesonech",
  "keprovýma",
  "keser",
  "kesonovýma",
  "kelímkovým",
  "kempem",
  "ken",
  "nedokážeš",
  "neprivatizujme",
  "vymalovali",
  "linhartického",
  "ploutevním",
  "zakreslený",
  "čistokrevností",
  "kopolyesterovému",
  "účastnily",
  "nenasazovaly",
  "zelináře",
  "radostí",
  "obešly",
  "kyzovém",
  "skrývými",
  "zneprůzračnit",
  "předepsánými",
  "jihoameričanovo",
  "záškodníkova",
  "netřebickou",
  "příjmového",
  "roznožky",
  "obkladovým",
  "hospodyňskýma",
  "nerovnoramenném",
  "nevědecký",
  "zajistitelem",
  "nejuspořádanějším",
  "vidítou",
  "korpulentních",
  "osvobozují",
  "toaletnímu",
  "nezablokujte",
  "rozlišovány",
  "jamajce",
  "spínátkem",
  "litovaného",
  "vysypte",
  "rozměřovaném",
  "taxikářův",
  "křečkové",
  "odpálíte",
  "rovnodušný",
  "zbytečným",
  "rohlíčku",
  "paralytikovy",
  "peršanovou",
  "automatizujme",
  "práčem",
  "vyťukaných",
  "arzenálem",
  "zanikajícího",
  "otitulkovávat",
  "sebedefinice",
  "aktivem",
  "zreorganizovaném",
  "svízelný",
  "zahnulo",
  "lékarnický",
  "nezachráněni",
  "založily",
  "okořeňují",
  "přeplní",
  "rozostřili",
  "plnomocných",
  "podsouvaná",
  "dokládali",
  "ukřivdíme",
  "svačinkovýma",
  "nestřídé",
  "nešikových",
  "polévejte",
  "nominujte",
  "osívaném",
  "kalibrací",
  "nepoučen",
  "malečovskou",
  "dovřeli",
  "stylce",
  "okrašlovat",
];
let ceskaAbeceda = [
  "A",
  "Á",
  "B",
  "C",
  "Č",
  "D",
  "Ď",
  "E",
  "É",
  "Ě",
  "F",
  "G",
  "H",
  "CH",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ň",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "Ř",
  "S",
  "Š",
  "T",
  "Ť",
  "U",
  "Ú",
  "Ů",
  "V",
  "W",
  "X",
  "Y",
  "Ý",
  "Z",
  "Ž",
];
let word;
let guessingWord = []; // after generateWordAndDashes -> "_", "_", "_"
generateWordAndDashes();

function generateWordAndDashes() {
  word = slova[Math.floor(Math.random() * slova.length)];
  for (let i = 0; i < word.length; i++) {
    guessingWord.push("_");
  }
  newGame();
}
function newGame() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < guessingWord.length; i++) {
    let dash = document.createElement("li");
    dash.innerHTML = "_";
    ul.appendChild(dash);
  }
  generateButtons();
}
function generateButtons() {
  let buttonContainer = document.querySelector(".button-letters");
  for (let i = 0; i < ceskaAbeceda.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = ceskaAbeceda[i];
    button.classList.add("btn", "btn-primary");
    buttonContainer.appendChild(button);
    button.onclick = () => checkButton(button, i);
  }
}
function checkButton(button, index) {
  let text = button.innerText.toLowerCase();

  if (checkCorrectness(text)) {
    console.log(text);
    button.style.backgroundColor = "lightgreen";
    button.disabled = true;
  }else{
    button.style.backgroundColor = "red";
    button.disabled = true;
  }
  //Refresh the li values
  UpdateDashes();
  CheckWinCondition();
}
function checkCorrectness(text) {
  let found = false; // Initialize a flag to track if the letter was found
  for (let i = 0; i < word.length; i++) {
    if (word[i] == text) {
      guessingWord[i] = text;
      found = true; // Set flag to true because we found at least one match
    }
  }
  return found; // Return true if we found a match, false otherwise
}

function UpdateDashes() {
  let li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = guessingWord[i];
  }
}
function CheckWinCondition(){
  
}