let winSound = new Audio("spirits/win.mp3");
let click = new Audio("spirits/click.mp3");
let bgm = new Audio("spirits/bgm.mp3");
let draw = new Audio("spirits/draw.mp3");

let w = document.querySelector(".wScreen");
let b = document.querySelector(".Play");

w.classList.add("show");

// main handeler
function main() {
    let c = document.querySelector("input");
    let boxes = document.querySelectorAll(".box");

    // click event

    b.addEventListener("click", () => {
        w.classList.remove("show");
        bgm.volume = 0.1;
        bgm.play();
        bgm.loop = true;
        boxes.forEach((box) => {
            box.innerHTML = "";
            box.style.pointerEvents = "auto";
        });
    });
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            click.play();
            if (c.checked == false) {
                box.innerHTML = "X";
                c.checked = true;
            } else {
                box.innerHTML = "O";
                c.checked = false;
            }
            box.style.pointerEvents = "none";
            checkResult(box);
        });
    });
}


//winner screen
function winScreen(winner){
    let p = document.querySelector(".result");
    p.innerHTML = winner + " is winner";
    b.innerHTML = "Play again";
    w.classList.add("show");
    bgm.pause();
    winSound.volume = 0.2;
    if(winner === "Draw, no one"){
        draw.play();
    } else {
        winSound.play();
    }
}

// result check

function checkResult(box){
    let A = document.getElementById("0").innerText;
    let B = document.getElementById("1").innerText;
    let C = document.getElementById("2").innerText;
    let D = document.getElementById("3").innerText;
    let E = document.getElementById("4").innerText;
    let F = document.getElementById("5").innerText;
    let G = document.getElementById("6").innerText;
    let H = document.getElementById("7").innerText;
    let I = document.getElementById("8").innerText;
    // Check if the first row has the same value and is not empty
    if(A === B && B === C && A !== ""){
        box.style.pointerEvents = "none";
        winScreen(A);
    }
    else if(D === E && E === F && D !== ""){
        box.style.pointerEvents = "none";
        winScreen(D);
    }
    else if(G === H && H === I && G !== ""){
        box.style.pointerEvents = "none";
        winScreen(G);
    }
    else if(A === D && D === G && A !== ""){
        box.style.pointerEvents = "none";
        winScreen(A);
    }
    else if(B === E && E === H && B !== ""){
        box.style.pointerEvents = "none";
        winScreen(B);
    }
    else if(C === F && F === I && C !== ""){
        box.style.pointerEvents = "none";
        winScreen(C);
    }
    else if(A === E && E === I && A !== ""){
        box.style.pointerEvents = "none";
        winScreen(A);
    
    }
    else if(C === E && E === G && C !== ""){
        box.style.pointerEvents = "none";
        winScreen(C);
    }
    else if(A !== "" && B !== "" && C !== "" && D !== "" && E !== "" && F !== "" && G !== "" && H !== "" && I !== ""){
        box.style.pointerEvents = "none";
        winScreen("Draw, no one");
    }

}

main();