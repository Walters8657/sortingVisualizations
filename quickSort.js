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

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
    ]);
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swapDelay(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swapDelay(arr, pivotIndex, end);
    return pivotIndex;
}

async function swapDelay(arr, a, b) {
    await sleep(0);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}