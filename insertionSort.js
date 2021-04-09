let values = [];

let i = 0;
let key;
let midsorting = false;

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
    
    //insertionSort();

    if (i >= values.length) { //Ends loop if at end of array
            return;
    }

    if (!midsorting) { //Controls if outside of the while runs
        j = i;
    }

    if (values[j] < values[j-1] && j >= 0) { //Inner while
        midsorting = true; //Keep running the while

        var temp = values[j-1]; //Holds values[j - 1]
        values[j-1] = values[j]; //Switches comparison with spot before
        values[j] = temp; //Switches spot before with comparison

        j--; //Step down one in comparison
    } else {
        midsorting = false; //End the while
    }

    if (!midsorting) { //Controls if outside of the while runs
        i++; //Go to next array position
    }

    displayArray();
}

// function insertionSort() {
//     j = values.length;

//     if (i < values.length) {
//         key = values[i];
//         j = i - 1;
//         while (j >= 0 && values[j] > key) {
//             values[j + 1] = values[j];
//             j--;
//         }
//         values[j + 1] = key;
//     } else {
//         console.log('Sorted');
//         noLoop();
//     }
//     i++
// }

function displayArray() {
    for (let k = 0; k < values.length; k++) { //Prints the array
        if (i == k) {
            stroke('red')
        } else if (k > j && k < i) {
            stroke('green');
        } else {
            stroke(255)
        }
        line(k, height, k, height - values[k]);
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