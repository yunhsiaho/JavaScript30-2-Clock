const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const tickSound = document.querySelector('audio');
const digitalHour = document.querySelector('.digital-hour');
const digitalMinute = document.querySelector('.digital-minute');
const digitalSecond = document.querySelector('.digital-second');


function setDate (){
    const now = new Date;
    const second = now.getSeconds();
    const secondDegrees = ((second/60)*360);
    console.log(second);
    secondHand.style.transform = `rotate(${secondDegrees+90}deg)`
    tickSound.currentTime = 0;
    tickSound.play();   
    document.querySelector('.digital-clock').classList.add('playing');


    const minute = now.getMinutes();
    const minuteDegrees = ((minute/60)*360);
    minuteHand.style.transform = `rotate(${minuteDegrees+90}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/60)*360);
    hourHand.style.transform = `rotate(${hourDegrees+90}deg)`

    if(second<10){
        digitalSecond.innerHTML = `0${second}`;
    }else{
        digitalSecond.innerHTML = second;
    }
    if(minute<10){
        digitalMinute.innerHTML = `0${minute}`;
    }else{
        digitalMinute.innerHTML = minute;
    }
    if(hour<10){
        digitalHour.innerHTML = `0${hour}`;
    }else{
        digitalHour.innerHTML = hour;
    }

}

setInterval(setDate,1000); /*active setDate function every second*/

function shine(){
    // if(document.querySelector('.digital-clock').propertyName !== "transform") return
    // if(document.querySelector('.digital-clock').classList)
    document.querySelector('.digital-clock').classList.remove('playing');
}
setInterval (shine, 1000);