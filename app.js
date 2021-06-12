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

    const minute = now.getMinutes();
    const minuteDegrees = ((minute/60)*360);
    minuteHand.style.transform = `rotate(${minuteDegrees+90}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/60)*360);
    hourHand.style.transform = `rotate(${hourDegrees+90}deg)`

    digitalSecond.innerHTML = second;
    digitalMinute.innerHTML = minute;
    digitalHour.innerHTML = hour;
}

setInterval(setDate,1000); /*active setDate function every second*/