var dino = document.getElementById("dino");
var pedra = document.getElementById("pedra");
var pontuacao = document.getElementById("pontuacao");

document.addEventListener("keypress", (verificaPulo) =>{
    if(!dino.classList.contains("Pulo")) {
        pular()
    }
});

function pular(){
    dino.classList.add("Pulo");
    setTimeout(()=>dino.classList.remove("Pulo"), 500);
};

setInterval(() => {
    const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue('top'));
    const pedraLeft = parseInt(getComputedStyle(pedra).getPropertyValue('left'));
    console.log("Dino: " + dinoTop);
    console.log("Pedra: " +pedraLeft);

    if(pedraLeft< 0){
        pedra.style.display = "none"
    }else{
        pedra.style.display = ""
    }

    if(pedraLeft < 50 && dinoTop>140 && pedraLeft >0){
        alert("Você perdeu. Jogar novamente?")
        location.reload();
    }
}, 50);
