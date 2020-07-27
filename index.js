let plus = document.querySelector('.plus');
let plus_m = document.querySelector('.plus_m');
let minus = document.querySelector('.minus');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');



let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let intId=null;


let DATE=3;
const DATE_SET=()=>{
let min = Math.floor(DATE/60);
let sec = DATE%60;

min = (min<10)?"0"+min:min;
sec = (sec<10)?"0"+sec:sec;

minutes.innerHTML=min;
seconds.innerHTML=sec;


}
DATE_SET();

plus.addEventListener('click',(function(){
    DATE++;
    DATE_SET();
}));
plus_m.addEventListener('click',(function(){
    DATE+=60;
    DATE_SET();
}));
minus.addEventListener('click',date_min);

function date_min(){
        DATE--;
    DATE_SET();
}

start.addEventListener('click',(function(){
if(!intId){
intId=setInterval((function(){
    if(DATE>0){
        date_min();
    }
    else{
        clearInterval(intId);
        intId=null;
        alert('Таймер закончен')
    }
   

}),1000)

}
}));
pause.addEventListener('click',(function(){
         clearInterval(intId);
        intId=null;
}));

