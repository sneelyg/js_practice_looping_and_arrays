function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here

let lastElement = myStupidArray.length;
//console.log(lastElement);
let theLastOne = myStupidArray[lastElement-1];
//console.log(myStupidArray);
console.log(theLastOne);

