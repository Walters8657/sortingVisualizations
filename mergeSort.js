let values = [];


function setup () {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) { //Creates an array of numbers with a smooth slope to the top corner
        values[i] = i * (height/width);
    }

    randomizeArray();
    sort(values, 0, values.length-1);
}

function draw() {
    background(0);

    displayArray();
}

function merge(arr, l, m, r) {
    let n1 = m -l + 1;
    let n2 = r - m;

    let L = [n1]; //Creates left and right half arrays with correct num of elements
    let R = [n2];

    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i]; //Creates array with first half of section
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j]; //Creates array with second half of section
    }

    let i = 0; //Resets i and j for for loop
    let j = 0;

    let k = l; //Sets k to strating point in main array

    while(i < n1 && j < n2) { //Loops through sub arrays, inserting into main array the sub arrays merged together
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            i++
        } else {
            arr[k] = R[j];
        }
        k++;
    }

    while (i < n1) { //Puts remaining items into main array if any left
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) { //Puts remaining items into main array if any left
        arr[k] = R[j];
        j++;
        k++;
    }
}

function sort(arr, l, r) {
    if (l < r) {
        let m = l + (r - 1)/2; //Finds midpoint of array section

        sort(arr, l, m); //Sorts with bottom half of array
        sort(arr, m+1, r); //Sorts with top half of array 

        merge(arr, l, m, r); //Once array is broken into singular pieces, they are merged together in order
    } else {
        noLoop();
    }
}

function displayArray() {
    for (let k = 0; k < values.length; k++) { //Prints the array
        stroke(255);
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