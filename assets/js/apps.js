$(document).ready(function () {


//console.log(moment().format());

//$("#today").text(moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a"));
//places current time and date on the html

function liveTime() {
    var currentTime = moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a")
    $("#today").text(currentTime)
} //function sets the current date and time. Set at an interval of a half a second. 



liveTime();


setInterval(liveTime, 500);


});


var dateInput = $("#datepicker");
var textBox = $("textarea");
var saveInput = $(".saveBtn");
//console.log(textBox);//log test on textBox
//console.log(saveInput);//log test on saveInput

//saveInput.addEventListener("click", saveEvent); //to be used later



$( function() { //added date picker widget from jqueryui.com
    $( "#datepicker" ).datepicker();
} );




$('textarea').each(function(saveEvent) {
    let userInput = [];
    $(textBox).each(function (index, element) { // this will display the textarea's text which should be blank
    console.log(`textarea${index}: ${$(element).text()}`); // this will grab the value of the current textarea
    let value = $(element).val(); //display the value
    console.log(`Value: ${value}`); // put the current value into the array
    userInput.push(value);
    localStorage.setItem("value", JSON.stringify(userInput));
    })
});
