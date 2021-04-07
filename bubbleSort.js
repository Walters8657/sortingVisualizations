// Curtesy of Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

let values = [];

let i = 0;
let j = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) { //Creates an array of numbers with a smooth slope to the top corner
        values[i] = i * (height/width);
    }

    randomizeArray();
}

function draw() {
    background(0);
    
    bubbleSort();

    displayArray();
}

function bubbleSort() {
    let a = values[j];
    let b = values[j + 1];
    if (a > b) {
        swap(values, j, j + 1);
    }

    if (i < values.length) { //Manual for loop for outisde for
        j = j + 1;
        if (j >= values.length - i - 1) { //Manual for loop for inside for
            j = 0;
            i = i + 1;            
        }
    } else {
        console.log('Sorted');
        noLoop();
    }

    displayArray(); //Displays the array each step of bubble sort
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function displayArray() {
    for (let i = 0; i < values.length; i++) { //Prints the array
        stroke(255);
        line(i, height, i, height - values[i]);
    }
}

function randomizeArray() {
    let randomNum;

    for (let i = 0; i < values.length; i++) { //Randomizes the array of numbers to be sorted
        randomNum = parseInt(random(width));
        swap(values, i, randomNum);
    }
}