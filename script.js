let niver = new Date(2022, 8, 17)

let dataAtual = new Date()

let x = setInterval(function() {
let now = new Date().getTime();
let t = niver - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);


document.getElementById("niver").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("niver").innerHTML = "";
        document.querySelector('.parabens').style.display = "flex";
    }
}, 1000);

function secreto(){
    alert("TE AMO NEBILIS 💜💜💜");
}


console.log(niver)