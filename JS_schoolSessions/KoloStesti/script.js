const names = [
    "Adamec Ondřej",
    "Beutler Filip",
    "Brož Matěj",
    "Do Tony",
    "Hladík Vojtěch",
    "Klaška Josef",
    "Kodeš Ondřej",
    "Koritko Jan",
    "Kratochvíl Jakub",
    "Levchenko Radomyr",
    "Očenáš František Filip",
    "Pecha Jakub",
    "Poddaný Lukáš",
    "Podolský Jiří",
    "Porubský Max",
    "Prokeš Tomáš",
    "Sanejstr Filip",
    "Schod Filip",
    "Štros Svatoplus",
    "Tůma Kryštof",
    "Vašíček Martin",
    "Verner Michal"
]
let players = names;

let Winners = [];
let Losers = [];

let nameContainer = document.querySelectorAll(".p-name");
let random;

function GetRandomPlayer(){
    random = Math.floor(Math.random() * players.length);
    return players[random];
}
function InitBattle(){
    //while(players.length % 2 == 1){
    //    console.log(GetRandomPlayer());
    //}
        let p1 = GetRandomPlayer();
        let p2 = GetRandomPlayer();
    
        nameContainer[0].innerHTML = p1;
        nameContainer[1].innerHTML = p2;
        Battle(p1, p2);
    
}
function Battle(p1, p2){
    if(Math.random() <= 0.5){
        Winners.push(p1);
        Losers.push(p2);
        RemovePlayer(p2);
    }else{
        Winners.push(p2);
        Losers.push(p1);
        RemovePlayer(p1);
    }
}
function RemovePlayer(player){
    players.splice(players.indexOf(player), 1);
    console.log(player);
}

