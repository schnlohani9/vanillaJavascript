// Throttle is little different from debounce. In this when the user click on the button, then after some delay the other click will execute.
// and if he click the multiple times then also events will execute in series multiple times but after some delay
// For example, “execute this function at most once every 100 milliseconds.

const throttle = (fn, delay) => {
    let last = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    }
}

document.getElementById("myId").addEventListener("click", throttle(e => {
    console.log('throttle->you clicked me');
}, 5000));


// https://www.youtube.com/watch?v=TBIEArmPywU

//Examples:
// Page resize