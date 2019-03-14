
var pressedKey = window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        // 
    }
});

const keys = document.querySelectorAll(".key");
keys.forEach(k => {
    k.addEventListener("transitionend", e => {
        // remove transition
        if (e.propertyName === "transform") {
            k.classList.remove("playing");
        }
    })
});

// could also be done with a function 
function removeTransition(e) {
    if (e.propertyName === "transform") {
        this.classList.remove("playing"); // "this" is the element on which the function got called (k)
    }
}