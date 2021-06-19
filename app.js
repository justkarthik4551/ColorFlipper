const simpleView = "Simple";
const hexView = "Hex";
const colors = ["green", "red", "aquamarine", "purple"];
let view = simpleView;
let colorBtn = document.getElementById('btn');
let simpleViewBtn = document.getElementById(simpleView);
let hexViewBtn = document.getElementById(hexView);
colorBtn.addEventListener("click", function() {
    changeColor();
});

simpleViewBtn.addEventListener("click", function() {
    if (view === hexView) {
        view = simpleView;
        changeCursor();
        changeColor();
    }
});

hexViewBtn.addEventListener("click", function() {
    if (view === simpleView) {
        view = hexView;
        changeCursor();
        changeColor();
    }
});

function changeColor() {
    if (view === simpleView) {
        changeSimpleColor();
    }
    else {
        changeHexColor();
    }
}

function changeSimpleColor() {
    let index = Math.floor(Math.random()*colors.length);
    let color = colors[index];
    setColor(color);
}

function changeHexColor() {
    let colorCode = "#";
    for (let index = 0; index < 6; index++) {
        let value = Math.floor(Math.random()*16);
        let code = getCode(value);
        colorCode = colorCode + code;
    }
    setColor(colorCode);
}

function setColor(color) {
    document.body.style.backgroundColor = color;
    let currentColor = document.getElementById('currentColor');
    currentColor.innerText = color;
}

function getCode(value) {
    if (value>9) {
        switch (value) {
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
        }
    }
    return value;   
}

function changeCursor() {
    if (view === simpleView) {
        console.log("simpleView");
        simpleViewBtn.style.cursor = "default";
        hexViewBtn.style.cursor = "pointer";
    }
    else {
        console.log("hexView");
        simpleViewBtn.style.cursor = "pointer";
        hexViewBtn.style.cursor = "default";
    }
    
}

