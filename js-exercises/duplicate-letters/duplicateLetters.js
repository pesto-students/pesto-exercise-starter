
function duplicateLetters(...args) {
  const S = args[0];
  let lower = Array(26); lower.fill(0);
  let upper = Array(26); upper.fill(0);

	for(let iter=0; iter< S.length; iter++){
		let ch = S.charCodeAt(iter);
		if ((ch >= 97) && (ch <= 122)) {
			lower[ch-97]++;
		}
		else if((ch>=65) && (ch <= 90)) {
			upper[ch-65]++;
		}
  }
	let maxl = Math.max(...lower);
	let maxu = Math.max(...upper);

	if ((maxl===1) || (maxu===1)) {
		return false;
	}
	else {
		if(maxl > maxu ) {
			return maxl;
		}
		else {
			return maxu;
		}
	}

  //return args;
}

export {
  duplicateLetters,
};
