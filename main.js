const hours = document.getElementById("hour")
const minuts = document.getElementById("min")
const secondes = document.getElementById("second")
const milisecondes = document.getElementById("milisecond")

const restBtn = document.getElementById("rest")
const startBtn = document.getElementById("start")
const StopBtn = document.getElementById("stop")

startBtn.addEventListener('click' ,start)
restBtn.addEventListener('click' ,rest)
StopBtn.addEventListener('click' ,stop)

let intervall = null;
let mi =0;
let s = 0;
let m = 0;
let h = 0;

function start(){
    if(intervall) return
    intervall = setInterval(()=> {
        mi++;
        milisecondes.textContent = mi < 10 ? '0' + mi : mi;
        if (mi > 99){
            mi = 0
            s++;
            secondes.textContent = s < 10 ? '0' + s : s;
        }
        else if (s > 59){
            s = 0;
            m++
            min.textContent = m < 10 ? '0' + m : m;
        }
        else if (m > 59){
            m = 0;
            h++
            hour.textContent = h < 10 ? '0' + h : h;
        }
    }, 10)
}
function rest(){
    
    clearInterval(intervall)
    mi =0;  
    s = 0;
    m = 0;
    h = 0;
    milisecondes.textContent = mi < 10 ? '0' + mi : mi;
    secondes.textContent = s < 10 ? '0' + s : s;
    min.textContent = m < 10 ? '0' + m : m;
    hour.textContent = h < 10 ? '0' + h : h;
    intervall = null;
}
function stop(){

    clearInterval(intervall)
    intervall = null;
}
