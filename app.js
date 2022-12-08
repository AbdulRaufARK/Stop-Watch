var milisecs = 0;
var sec =0;
var min = 0;
var interval;

var displaymilisec = document.getElementById("displaymilisec");
var displaySec = document.getElementById("displaysec");
var displayMin = document.getElementById("displaymin");

function timer(){
    milisecs++
    if(milisecs == 10){
        milisecs=0
        sec++
        
        if(sec == 60){
            sec = 0
            min++
            
        }
      
        // console.log(displaymilisec.innerHTML);
    }
    displaymilisec.innerHTML = milisecs; 
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;

}

function startTimer(){
  interval = setInterval 
(function()  {
    timer();
}, 100);
}

function pause(){
    clearInterval (interval);
}

function reset(){
    min=0;
    sec=0;
    milisecs= 0;
    displaymilisec.innerHTML = milisecs;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;

}










