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

    let L = [n1];
    let R = [n2];

    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;

    let k = l;

    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            i++
        } else {
            arr[k] = R[j];
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function sort(arr, l, r) {
    if (l < r) {
        let m = l + (r - 1)/2;

        sort(arr, l, m);
        sort(arr, m+1, r);

        merge(arr, l, m, r);
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