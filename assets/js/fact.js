async function randomize() {
    const request = new Request("https://api.ethanexline.com/fact");
    const response = await fetch(request);
    const fact = await response.json();
    let body = document.getElementById("body");
    let factElement = document.getElementById("fact");
    let returnElement = document.getElementById("return");
    let back = document.getElementById("back");
    let refresh = document.getElementById("refresh");

    const font = await Math.floor(Math.random() * 6) + 1;
    const background = await Math.floor(Math.random() * 16777215).toString(16);
    const animation = await Math.floor(Math.random() * 4) + 1;

    switch(font) {
        case 1:
            factElement.style.fontFamily = '"DotGothic16", cursive';
            factElement.style.fontWeight = '100';
            back.style.fontFamily = '"DotGothic16", cursive';
            back.style.fontWeight = '100';
            refresh.style.fontFamily = '"DotGothic16", cursive';
            refresh.style.fontWeight = '100';
            break;
        case 2:
            factElement.style.fontFamily = '"Meow Script", cursive';
            factElement.style.fontWeight = '100';
            back.style.fontFamily = '"Meow Script", cursive';
            back.style.fontWeight = '100';
            refresh.style.fontFamily = '"Meow Script", cursive';
            refresh.style.fontWeight = '100';
            break;
        case 3:
            factElement.style.fontFamily = '"Moo Lah Lah", cursive';
            factElement.style.fontWeight = '100';
            back.style.fontFamily = '"Moo Lah Lah", cursive';
            back.style.fontWeight = '100';
            refresh.style.fontFamily = '"Moo Lah Lah", cursive';
            refresh.style.fontWeight = '100';
            break;
        case 4:
            factElement.style.fontFamily = '"Rock 3D", cursive';
            factElement.style.fontWeight = 'bold';
            back.style.fontFamily = '"Rock 3D", cursive';
            back.style.fontWeight = 'bold';
            refresh.style.fontFamily = '"Rock 3D", cursive';
            refresh.style.fontWeight = 'bold';
            refresh.style.fontSize = '15px';
            break;
        case 5:
            factElement.style.fontFamily = '"Rubik Beastly", cursive';
            factElement.style.fontWeight = '100';
            back.style.fontFamily = '"Rubik Beastly", cursive';
            back.style.fontWeight = '100';
            refresh.style.fontFamily = '"Rubik Beastly", cursive';
            refresh.style.fontWeight = '100';
            break;
        case 6:
            factElement.style.fontFamily = '"ZCOOL KuaiLe", cursive';
            factElement.style.fontWeight = '100';
            back.style.fontFamily = '"ZCOOL KuaiLe", cursive';
            back.style.fontWeight = '100';
            refresh.style.fontFamily = '"ZCOOL KuaiLe", cursive';
            refresh.style.fontWeight = '100';
            break;
    }

    switch(animation) {
        case 1:
            factElement.style.animation = 'rotateIn 2s ease-in-out';
            break;
        case 2:
            factElement.style.animation = 'getBig 2s ease-in-out';
            break;
        case 3:
            factElement.style.animation = 'flipRev 2s ease-in-out';
            break;
        case 4:
            factElement.style.animation = 'flip 2s ease-in-out';
            break;
    }

    body.style.backgroundColor = "#" + background;
    factElement.style.color = "#" + background;
    factElement.style.filter = "invert(100%)";
    back.style.color = "#" + background;
    returnElement.style.backgroundColor = "#" + invertHex(background);
    refresh.style.color = "#" + background;
    refresh.style.backgroundColor = "#" + invertHex(background);
    factElement.innerHTML = fact['fact'];
}

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

document.onreadystatechange = async function() {
    await randomize();
    document.querySelector("#loader").style.display = "none"
};