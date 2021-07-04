// Debounce is a technique in Js by which we control the amount of events happening on the click of the button.
// For ex: When ordering item on amazon you reach to payment option and you click 5 times on the payment button. So to prevents the payment from happening the 5 times we will use debounce technique and event will fire only once

const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => { fn(...args) }, delay)
    }
}

document.getElementById("myId").addEventListener("click", debounce(e => {
    console.log('clicked');
}, 2000));

// https://www.youtube.com/watch?v=TBIEArmPywU
// Examples
// Searching some text in textbox