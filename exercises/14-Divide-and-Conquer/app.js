let list_of_numbers = [4,1,1,1,1,1,1,2,2,2,2,2, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
console.log (list_of_numbers.length);


var mergeTwoList = (arr) => {
    let odd = [];
    let even = [];
    let aux = [];

    for (let i = 0; i < list_of_numbers.length; i++) {
        if (list_of_numbers[i] % 2 == 0) { even.push(list_of_numbers[i]) }
        else { odd.push(list_of_numbers[i]) }

    }
console.log(odd.length);
console.log (even.length);


    for (let j = 0; j < odd.length; j++) {
        aux.push(odd[j]);
    }
    for (let k = 0; k < even.length; k++) {
        aux.push(even[k]);
    }
    console.log (aux.length);
    return aux;
}

console.log(mergeTwoList(list_of_numbers))
