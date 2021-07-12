document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
        e.stopPropagation();
        e.
    }, true);

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, true);

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);

/*******************************************
**********Syntax of addEventListener********
*******************************************/

// element.addEventListener(event, function, useCapture);

// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional. If provided true then capturing will be use or if provided false then bubbling will be used.