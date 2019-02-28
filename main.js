// Global variables ftw

let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let results = [false, false, false, false, false];
let switchedResults = [0, 0, 0, 0, 0];
let result = '';
let switched = false;
let heading = 'Name the five boroughs of NYC'; // What should the heading start out as?
let boroughs = ['manhattan', 'bronx', 'brooklyn', 'queens', 'staten island'];
let teams = ['warriors', 'nuggets', 'thunder', 'blazers', 'rockets', 'jazz', 'spurs', 'clippers', 'kings', 'lakers', 'timberwolves', 'mavericks', 'pelicans', 'grizzlies', 'suns'];

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
     results = [false, false, false, false, false];
     switchedResults = [0, 0, 0, 0, 0];
     boroughs = ['manhattan', 'bronx', 'brooklyn', 'queens', 'staten island'];
     teams = ['warriors', 'nuggets', 'thunder', 'blazers', 'rockets', 'jazz', 'spurs', 'clippers', 'kings', 'lakers', 'timberwolves', 'mavericks', 'pelicans', 'grizzlies', 'suns'];

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
        heading = 'Enter five western conference NBA teams\nAnd I will guess the winner!'; // TODO: change the heading to whatever would be appropriate for your OTHER app.
        switched = true;
    }
    
    changeHeading();
    reset();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;

}

function handleUserInput1(event) {
    input1 = event.target.value;
    let userInput = input1.toLowerCase();
    let deleteIndex = 0;
    let found = false;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < teams.length; i++) {
            if (userInput === teams[i]) {
                found = true;
                switchedResults[0] = i+1;
                teams[i] = 'alreadyFound';
            }
        }
    } else {
        // TODO:  handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput === boroughs[i]) {
                results[0] = true;
                deleteIndex = i;
                found = true;
            }
        }
        if (found === true) {
            boroughs.splice(deleteIndex, 1);
        }
    }
}

function handleUserInput2(event) {
    input2 = event.target.value;
    let userInput2 = input2.toLowerCase();
    let deleteIndex = 0;
    let found = false;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < teams.length; i++) {
            if (userInput2 === teams[i]) {
                found = true;
                switchedResults[1] = i+1;
                teams[i] = 'alreadyFound';
            }
        }
    } else {
        // TODO:  handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput2 === boroughs[i]) {
                results[1] = true;
                deleteIndex = i;
                found = true;
            };
        }
        if (found === true) {
            boroughs.splice(deleteIndex, 1);
        }
    }
}

function handleUserInput3(event) {
    input3 = event.target.value;
    let userInput3 = input3.toLowerCase();
    let deleteIndex = 0;
    let found = false;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < teams.length; i++) {
            if (userInput3 === teams[i]) {
                found = true;
                switchedResults[2] = i+1;
                teams[i] = 'alreadyFound';
            }
        }
    } else {
        // TODO:  handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput3 === boroughs[i]) {
                results[2] = true;
                deleteIndex = i;
                found = true;
            };
        }
        if (found === true) {
            boroughs.splice(deleteIndex, 1);
        }
    }
}
function handleUserInput4(event) {
    input4 = event.target.value;
    let userInput4 = input4.toLowerCase();
    let deleteIndex = 0;
    let found = false;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < teams.length; i++) {
            if (userInput4 === teams[i]) {
                found = true;
                switchedResults[3] = i+1;
                teams[i] = 'alreadyFound';
            }
        }
    } else {
        // TODO:  handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput4 === boroughs[i]) {
                results[3] = true;
                deleteIndex = i;
                found = true;
            };
        }
        if (found === true) {
            boroughs.splice(deleteIndex, 1);
        }
    }
}
function handleUserInput5(event) {
    input5 = event.target.value;
    let userInput5 = input5.toLowerCase();
    let deleteIndex = 0;
    let found = false;

    if(switched) {
        // TODO: handle the input for one app version
        for (let i = 0; i < teams.length; i++) {
            if (userInput5 === teams[i]) {
                found = true;
                switchedResults[4] = i+1;
                teams[i] = 'alreadyFound';
            }
        }
    } else {
        // TODO:  handle the input for one app version
        for (let i = 0; i < boroughs.length; i++) {
            if (userInput5 === boroughs[i]) {
                results[4] = true;
                deleteIndex = i;
                found = true;
            };
        }
        if (found === true) {
            boroughs.splice(deleteIndex, 1);
        }
    }
}

function printResult() {
    let temp = '';
    let pos = 0;
    let allCorrect = true;

    if(switched) {
        switch(compareTeams(switchedResults)){
            case 0:
                temp = input1;
                break;
            case 1:
                temp = input2;
                break;
            case 2:
                temp = input3;
                break;
            case 3:
                temp = input4;
                break;
            case 4:
                temp = input5;
                break;
            case -10:
                allCorrect = false;
                break;
        }
        allCorrect === false ? result = 'You entered one or more wrong input' : result = 'The winner is ' + temp;
    } else {
        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) {
                pos = i+1;
                temp += pos.toString() + ' ';
                allCorrect = false;
            } 
        }
        if (allCorrect === false) {
            result = 'Your answer(s) for ' + temp + 'were wrong!';
        } else {
            result = 'Good job!';
        }
    }

    document.querySelector('#result').innerText = result;
}

function compareTeams(teams) {
    let winner = 20;
    let winnerIndex = 0;
    for (let i = 0; i < teams.length; i++){
        if (teams[i] === 0){
            winner = -10;
            winnerIndex = -10;
        }else if (teams[i] < winner) {
            winner = teams[i];
            winnerIndex = i;
        }
    }
    return winnerIndex;
}