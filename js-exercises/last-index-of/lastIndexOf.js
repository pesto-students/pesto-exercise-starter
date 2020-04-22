
function lastIndexOf(n, input) {
	let store = [];
   for(let i =0; i <input.length;i++){
   		if(input[i]===n){
   			store.push(i);
   		}
   }	
   if( store[store.length-1] === undefined ){
  	return -1 ;
  }else{
  	return store[store.length-1];
  }
}

export {
  lastIndexOf,
};
