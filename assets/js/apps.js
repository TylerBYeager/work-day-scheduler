$(document).ready(function () {

console.log(moment()); //confirming that moment is working. 

//console.log(moment().format());

$("#today").text(moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a"));
//places current time and date on the html




})