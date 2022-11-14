const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");


function updateTime(){
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
console.log(newYear);
const currentDate = new Date();
console.log(currentDate);
const diff = newYear - currentDate;
/*
1000ms = 1s
60s = 1 min
60m = 1 hr
24 hrs = 1 day
*/
const d =Math.floor(diff/1000/60/60/24);
const h =Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
day.innerHTML=d<10?"0"+d:d;
hour.innerHTML=h<10?"0"+h:h;
minute.innerHTML=m<10?"0"+m:m;
second.innerHTML=s<10?"0"+s:s;
}

setInterval(updateTime,1000);

const today=new Date();
console.log(today);