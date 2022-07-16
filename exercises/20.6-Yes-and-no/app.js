let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
var wiki = (item)  => {
    if (item ==0) return "woko";
    if (item == 1) return "wiki";

};
var wArra = theBools.map(wiki); 

console.log (wArra);