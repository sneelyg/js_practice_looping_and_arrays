var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
var deletePerson = (name) => {
var newpeople = people.filter((element) => element != name );
return newpeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
