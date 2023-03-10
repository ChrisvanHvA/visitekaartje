console.log("dit niet checken meneer de docent");

document.getElementById("face").addEventListener("click", punch);


var count = 1;

function punch() {
    console.log("haha auwW!!!");
    count += 1;
    console.log(count);
    document.getElementById("face").src = "images/painface.png";

    setTimeout(facereset, 800);
    setTimeout(paincheck, 800);
    paincheck();
}

function facereset() {

    document.getElementById("face").src = "images/face.png";
}

function paincheck() {

    if (count > 5) {
        document.getElementById("face").src = "images/dead.png";
    }
}