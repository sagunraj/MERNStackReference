let personObject = {
	id: 1,
	name: 'Sam Chakre',
	college: 'Samriddhi',
	friends: ['Dipendra', 'Arpan'],
}

/* let newObject = {...personObject};
delete newObject['id'];
console.log(newObject); */


let {id, ...y} = personObject; // set id into id and the rest in y THIS IS THE REST Operator
console.log(id);
console.log(y);
