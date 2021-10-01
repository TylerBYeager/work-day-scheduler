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

})