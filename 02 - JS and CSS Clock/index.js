
function setDate() {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");


    const secsToDegs = secs * 6;
    secondHand.style.transform = `rotate(${secsToDegs+90}deg)`;
    
    const minsToDegs = mins * 6;
    minuteHand.style.transform = `rotate(${minsToDegs+90}deg)`;
    
    const hoursToDegs = (hours / 12)*360;
    hourHand.style.transform = `rotate(${hoursToDegs+90}deg)`;
    
    console.log(secs);
}

setInterval(setDate, 1000);