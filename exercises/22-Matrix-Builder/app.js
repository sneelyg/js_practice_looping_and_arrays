// Code goes here
var matrixBuilder = (size) => {
    var array1 = [];
    for (var i = 0 ; i < size; i ++) {

       array1[i] = [];
        for (let j = 0; j< size ; j++){ //recorre y

            array1[i].push( Math.floor(Math.random()+0.5));

        }
    }
return array1;
}



// do not change anything from this line down
console.log(matrixBuilder(6))