let container = document.getElementById('myDiv');
function createDiv() {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'green';
    div.style.margin = "10px";
    container.appendChild(div);
    document.body.appendChild(container);
}


let button = document.querySelector('button');
button.onclick = createDiv;
