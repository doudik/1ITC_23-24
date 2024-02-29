let container = document.querySelector('.container');
container.style.display = 'flex';

let arrayOfCubes = [];
http://tinyurl.com/434x9vbx
function CreateSquare(){
    let square = document.createElement('div');
    arrayOfCubes.push(square);
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.margin = "5px";
    square.style.position = "absolute";
    square.style.backgroundColor = 
    "rgb(" + Math.floor(Math.random()* 256) + "," + 
     + Math.floor(Math.random()* 256) + ", " +
     + Math.floor(Math.random()* 256) + ")";
    container.appendChild(square);
}
function MoveAllCubes(){
    arrayOfCubes.forEach(element => {
        element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    });
}
function Demolish(number){
    for (let i = 0; i < number; i++){
        CreateSquare();
    }
}