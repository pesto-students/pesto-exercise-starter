const argsString = (message, args) => {
  if(message.includes("{}")){
    let stringMsg =message.split(" ");
    for (var i=0;i<stringMsg.length;i++){
      if(stringMsg[i].length==3 && stringMsg[i].includes("{}")){
        let character=stringMsg[i].split("")[2]
        stringMsg[i]=args[i]+character
      }else if(stringMsg[i].length==2 && stringMsg[i].includes("{}")){
        stringMsg[i]=args[i]
      }
    }
    return stringMsg.join(" ")
  }else{
    return message;
  }
};

export { argsString };
