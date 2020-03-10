function rot13(...args) {
  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'];

  let decode = function(word){
    let store = [];
    store[0] = '';
    store['result'] = '';
    for(let i=0;i<word.length;i++){
      if(alphabets.indexOf(word[i]) !== -1){
        let index = alphabets.indexOf(word[i])+13;
        if(index > 26 ){
          index = index-26 * -1;
        }
        store[0] = store[0] + alphabets[index];
    }}else{
      store[0] = store[0] + word[i];
    }
    let result =  store[0];
    store[0] = '';
    return result;

  }

  let words = args.split(' ');
  for(let i=0,i<words.length;i++){
    store['result'] = store['result'] + decode(words[i]);
  }
  return store['result'];
}

export {
  rot13,
};
