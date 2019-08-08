module.exports.function = function queryFunction (day, month) {
  const console = require('console');
  const data = require("./data.js");
  const fail = require('fail');

  let event = null;
  for(let i = 0; i < data.length; i++){
    if(data[i].month == month && data[i].day == day){
      event = data[i].event;
    } 
  }
  
  
 return {event: event};
}