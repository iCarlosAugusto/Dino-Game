
var btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", iniciarContagem);

document.getElementById('btnMarcar').addEventListener("click", marcador);

document.getElementById("btnZerar").addEventListener("click", zerar)

let segundos = 0, minutos = 0, horas = 0, intervalo = 0;

const ss = document.getElementById("segundos");
const mm = document.getElementById("minutos");
const hh = document.getElementById("horas");

let btnVerificaçao = false;

function iniciarContagem(){
       if(btnVerificaçao == false){
           btnIniciar.innerText = "Pausar";
           btnIniciar.style.backgroundColor = "red";

           intervalo = setInterval(function(){
               segundos++;
               ss.innerHTML = segundos;

               if(segundos <= 9){
                   ss.innerHTML = "0"+segundos;
               }

               if(segundos > 59){
                   segundos = 0
                   ss.innerHTML = "00";
                   minutos++;
               }

               mm.innerHTML = minutos;
               if(minutos <= 9){
                   mm.innerHTML = "0"+minutos;
               }

               if(minutos > 59){
                   minutos = 0;
                   mm.innerHTML = "00";
                   horas++
               }

               hh.innerHTML = horas;
               if(horas<=9){
                   hh.innerHTML = "0"+horas;
               }
           },1000)
           btnVerificaçao = true;

       }else{
           btnIniciar.classList.add("pausar");
           btnIniciar.style.backgroundColor = "rgb(57, 230, 4)";
           btnIniciar.innerText = "Iniciar";
           btnVerificaçao = false;
            clearInterval(intervalo);
       }      
}

function marcador(){
    var valorSS = ss.innerHTML;
    var valorMM = mm.innerHTML;
    var valorHH = hh.innerHTML;

    var p = document.createElement("p");
    p.innerHTML = `Tempo: ${valorHH}:${valorMM}:${valorSS}`;

    document.getElementById("resultado").appendChild(p);
}

function zerar(){
    btnIniciar.style.backgroundColor = "rgb(57, 230, 4)";
    btnIniciar.innerText = "Iniciar";
    clearInterval(intervalo);
    btnVerificaçao = false;
    ss.innerHTML = "00";
    mm.innerHTML = "00";
    hh.innerHTML = "00";
    segundos = 0;
    minutos = 0;
    horas = 0;
}
