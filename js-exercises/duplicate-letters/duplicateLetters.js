
function duplicateLetters(...args) {

  let str = args;
    let stringArray =[];
    for (var i = 0; i < str.length; i++) {
          console.log(str.charAt(i));
          stringArray[i]  =  str.charAt(i);
    }


    let j =1;
    let count = [];
    for (let i = 0; i < stringArray.length; i++) {
      let item = stringArray[i];
      count[item] = (count[item] + 1) || 1;
      return count;
    }

    let p =0;
    while(p < count.length){
      if(count[p]>1){
        j =j+1;
      }
    }

    if(j>0){
      return j;
    }else{
      return false;
    }

}

export {
  duplicateLetters,
};
