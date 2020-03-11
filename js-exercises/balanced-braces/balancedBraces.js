
function balancedBraces(...args) {
	const regex = /\(\)|\[\]|\{\}/;
	const validBraces = braces => regex.test(braces)? validBraces(braces.replace(regex, '')): '' === braces;
	let tracer = [];
	  for(let string of args[0]){
	    if ( string === "(" || string === "{" || string === "[" || string === ")" || string === "}" || string === "]"){
	      tracer.push(string);    
	    }
	  }
  return validBraces(tracer.join(''));
}


export {
  balancedBraces,
};
