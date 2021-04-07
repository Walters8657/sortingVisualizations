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

    let randomNum;

    for (let i = 0; i < values.length; i++) { //Randomizes the array of numbers to be sorted
        randomNum = parseInt(random(width));
        swap(values, i, randomNum);
    }

}

function draw() {
    background(0);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            let a = values[j];
            let b = values[j + 1];
            if (a > b) {
                swap(values, j, j + 1);
            }
        }
    } else {
        console.log('Sorted');
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(255);
        line(i, height, i, height - values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}