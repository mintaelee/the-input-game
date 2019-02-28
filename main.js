// Global variables ftw

let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let results = [false, false, false, false, false];
let result = '';
let switched = true;;
let heading = ''; // What should the heading start out as?
let boroughs = ['manhattan', 'bronx', 'brooklyn', 'queens', 'staten island'];

// Set init to run when the window loads.
window.onload = init;

function init() {
    // Make sure we're dealing with a clean slate.
    reset();

    // Set event handlers.
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);

    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);

    document.querySelector('#user-input3')
        .addEventListener('keyup', handleUserInput3);

    document.querySelector('#user-input4')
            .addEventListener('keyup', handleUserInput4);

    document.querySelector('#user-input5')
        .addEventListener('keyup', handleUserInput5);

    document.querySelector('#submit')
        .addEventListener('click', printResult);

    document.querySelector('#reset')
        .addEventListener('click', reset);

    document.querySelector('#switch')
        .addEventListener('click', switchGears);
}

function reset() {
     input1 = '';
     input2 = '';
     input3 = '';
     input4 = '';
     input5 = '';
     result = '';
     boroughs = ['manhattan', 'bronx', 'brooklyn', 'queens', 'staten island'];
     heading = 'Name the five boroughs of NYC';

    document.querySelector('#user-input1').value = input1;
    document.querySelector('#user-input2').value = input2;
    document.querySelector('#user-input3').value = input3;
    document.querySelector('#user-input4').value = input4;
    document.querySelector('#user-input5').value = input5;


    
    // If you feel like it, you can comment out the five queries above and use the magical one below!
    // Feel free to ask how it works.

    // document.querySelectorAll('.input').forEach(function(node) { node.value = ''});

    document.querySelector('#heading').innerText = heading;
    document.querySelector('#result').innerText = result;
}

function switchGears() {
    // TODO: change the value:of 'switched' to the opposite of what it currently is

    if(switched) {
        heading = 'Name the five boroughs of NYC'; // TODO: change the heading to whatever would be appropriate for YOUR app.
        switched = false;
    } else {
        heading = 'ABEDD'; // TODO: change the heading to whatever would be appropriate for your OTHER app.
        switched = true;
    }
    
    changeHeading();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

function handleUserInput1(event) {
    let userInput = event.target.value.toLowerCase();
    let deleteIndex = 0;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            console.log(boroughs[i]);
            if (userInput === boroughs[i]) {
                results[0] = true;
                deleteIndex = i;
            }
        }
        boroughs.splice(deleteIndex, 1);
    } else {
        // TODO:  handle the input for one app version
    }
}

function handleUserInput2(event) {
    let userInput2 = event.target.value.toLowerCase();
    let deleteIndex = 0;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            console.log(boroughs[i]);
            if (userInput2 === boroughs[i]) {
                results[1] = true;
                deleteIndex = i;
            };
        }
        boroughs.splice(deleteIndex, 1);
    } else {
        // TODO:  handle the input for one app version
    }
}

function handleUserInput3(event) {
    let userInput3 = event.target.value.toLowerCase();
    let deleteIndex = 0;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            console.log(boroughs[i]);
            if (userInput3 === boroughs[i]) {
                results[2] = true;
                boroughs.splice(i, 1);
            };
        }
    } else {
        // TODO:  handle the input for one app version
    }
}
function handleUserInput4(event) {
    let userInput4 = event.target.value.toLowerCase();

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput4 === boroughs[i]) {
                results[3] = true;
                boroughs.splice(i, 1);
            };
        }
    } else {
        // TODO:  handle the input for one app version
    }
}
function handleUserInput5(event) {
    let userInput5 = event.target.value.toLowerCase();

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput5 === boroughs[i]) {
                results[4] = true;
                boroughs.splice(i, 1);
            };
        }
    } else {
        // TODO:  handle the input for one app version
    }
}

function printResult() {
    let temp = '';
    let pos = 0;
    let allCorrect = true;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === false) {
            pos = i+1;
            temp += pos.toString() + ' ';
            allCorrect = false;
        } 
    }
    result = 'Your answers for ' + temp + 'were wrong!';
    document.querySelector('#result').innerText = boroughs;
}