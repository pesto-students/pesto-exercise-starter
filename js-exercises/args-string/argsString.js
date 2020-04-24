const argsString = (message, args) => {

  var liter_occurance_index = 0 
  console.log(message.indexOf('{}'));
  
  while(message.indexOf('{}')!==-1){
    var liter_index = message.indexOf('{}'); 
    var part_one = message.substring(0, liter_index); 
    var part_two = message.substring(liter_index+2, message.length)
    message = part_one+args[liter_occurance_index]+part_two
    liter_occurance_index+=1
    
  }
  return message; 
};

argsString('{}    {}  {}', ['ss', 'dd', 'cc'])

 module.exports = { argsString };
