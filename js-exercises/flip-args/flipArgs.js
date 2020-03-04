const flipped = function(){
	return reverseArray(argument);
}

const reverseArray = function(){
	let increment = 0;
	for(let i = argument.length-1;i<=0;i--){
		argument[increment] = argument[i];
		increment = increment +1;
	}
	return argument;
}


export{
	flipped,
};