

function sumAll(brr) {
  let arr = [];
  let inc = 0;
  let incSec = 0;
  let x = 0;

  if(brr[0]>brr[1]){

    for(let i=brr[0];i<=brr;i++){
      arr[inc]= i;
      inc = inc +1;
    }
    while(incSec <arr.length )
    {
    	x =  arr[incSec]+x;
      incSec = incSec +1
    }

    return x ;


  }else{

    for(let i=brr[1];i<=brr[0];i++){
      arr[inc]= i;
      inc = inc +1;
    }
    while(incSec <arr.length )
    {
    	x =  arr[incSec]+x;
      incSec = incSec +1
    }

    return x ;
  }

}

export {
  sumAll,
};
