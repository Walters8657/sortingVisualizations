// Curtesy of Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

let values = [];
let states = [];

let i = 0;
let j = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) { //Creates an array of numbers with a smooth slope to the top corner
        values[i] = i * (height/width);
        states[i] = -1;
    }

    randomizeArray();

    quickSort(values, 0, values.length-1); //Starts the sort
}

function draw() {
    background(0);

    displayArray(); //Displays array each frame
}

async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
    ]);
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];

    for (let i = start; i < end; i++) {
        states[i] = 1;
        if (arr[i] < pivotValue) {
            await swapDelay(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }
    await swapDelay(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
            states[i] = -1;
        }
    }

    return pivotIndex;
}

async function swapDelay(arr, a, b) {
    await sleep(1000/60);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayArray() {
    for (let i = 0; i < values.length; i++) { //Prints the array
        if (states[i] == 0) {
            stroke('#E0777D');
        } else if(states[i] == 1) {
            stroke('#D6FFB7');
        } else  {
            stroke(255);
        }
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

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}