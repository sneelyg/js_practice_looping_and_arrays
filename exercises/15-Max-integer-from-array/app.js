var myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];

var findMax = (arr) => {
    var aux = -1000;

    for (let elementos of arr) {
        if (elementos > aux)
        aux = elementos;
    }
return aux;

}

console.log (findMax(myArray));