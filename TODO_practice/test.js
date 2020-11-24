const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();    // Date()는 class임
    const minutes  = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hourConverter(hours)} : ${minutes < 10 ? `0${minutes}` : minutes }`;
}

function hourConverter(hourInfo){
    if(hourInfo === 12) return `PM ${hourInfo}`
    else if(hourInfo > 12) return `PM 0${hourInfo-12}`
    else if(hourInfo < 12 && hourInfo >= 10) return `AM ${hourInfo}`
    else return `AM 0${hourInfo}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    // getTime() 으로 setInterval안에 넣으면 안됨. getTime 그대로 넣어야 함.
}

init();

// 시계를 구현해 보았다.
