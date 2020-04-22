function longestWordInString(...args) {
 let _lengthOfWord =[]
 args.toString().split(" ").forEach(
   (word)=>{  _lengthOfWord.push(word.length)}
  )
  
  return _lengthOfWord.sort((a,b)=>a-b).pop();
}

export { longestWordInString };
