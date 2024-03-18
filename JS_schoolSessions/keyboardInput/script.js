/*
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

  let input = document.querySelector(".text-field");

for(let i = 0; i < ceskaAbeceda.length; i++){
    let btn = document.createElement("button");
    btn.innerHTML = ceskaAbeceda[i];
    btn.onclick = () => {
        input.innerHTML += btn.innerHTML; 
    }
    document.body.appendChild(btn);
}
*/
let colors = ["red", "blue", "green", "yellow"];
for(let i = 0; i < 4; i++){
    let btn = document.createElement("button");
    btn.style.backgroundColor = colors[i];
    btn.style.padding = "20px";
    btn.style.fontSize = "3rem";
    btn.style.fontWeight = "bold";
    btn.onclick = () => {
        ChangeColor(btn.innerHTML);
    }
    document.addEventListener("keydown", function(value){
        switch(value.key){
            case "r":
                ChangeColor("red");
                break;
            case "b":
                ChangeColor("blue");
                break;
            case "g":
                ChangeColor("green");
                break;
            case "y":
                ChangeColor("yellow");
                break;
            default:
                break;
        }

    });
    
    btn.innerHTML = colors[i];
    document.body.appendChild(btn);
}
function ChangeColor(color){
    document.body.style.backgroundColor = color;
}

