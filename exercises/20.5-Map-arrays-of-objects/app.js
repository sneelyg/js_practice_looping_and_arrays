let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },//aun no esta de cumple
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },//aun no esta de cumple
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	
	
		var today = new Date();
		var birthDate = person.birthDate;
		var age = today.getFullYear() - person.birthDate.getFullYear();
		
		var m = today.getMonth() - person.birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
	
	
	
	return ( "Hi, my name is " +  person.name + " and I am " +age +  " years old");
};

console.log(people.map(simplifier));
console.log (new Date());