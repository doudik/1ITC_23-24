document.getElementById('changeBackground').onclick = function() {
    const colors = ['#FFC0CB', '#FFD700', '#8A2BE2', '#00FF00', '#00BFFF', '#FF4500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
};

const messages = [
    "Vždycky je příležitost udělat nový začátek.",
    "Nikdy není příliš pozdě být tím, kým jste mohli být.",
    "Jediný způsob, jak udělat skvělou práci, je milovat to, co děláte.",
    "Úspěch není klíčem ke štěstí. Štěstí je klíčem k úspěchu."
];

document.getElementById('showMessage').onclick = function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
};

document.getElementById('changeText').onclick = function() {
    const newText = prompt("Zadejte nový text pro nadpis:");
    if (newText) {
        document.getElementById('dynamicText').innerText = newText;
    }
};
