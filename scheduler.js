$( document ).ready(function() {

    var scheduledEvents = {
        "6 AM": "",
        "7 AM": "",
        "8 AM": "",
        "9 AM": "",
        "10 AM": "",
        "11 AM": "",
        "12 PM": "",
        "1 PM": "",
        "2 PM": "",
        "3 PM": "",
        "4 PM": "",
        "5 PM": "",
        "6 PM": "",
        "7 PM": "",
      };

    //matching the text with today's date
$("#currentDay").text(moment().format('LL'));


//check if anything is in local storage
if(!localStorage.getItem('scheduledEvents')) {
    updateCalendar(scheduledEvents);
  } else {
updateCalendar(JSON.parse(localStorage.getItem('scheduledEvents')))
  }
  //and adds the text to the calender
function updateCalendar(scheduledEvents){
    $(".calendar-row").each(function() {
        let theHour = $(this).children("div");
        $(this).children("textarea").text(scheduledEvents[theHour.text()]);
    })
}


//check hour and change every hour's color
var counter = 1;
for(const property in scheduledEvents) {
  var textEntry = "#hour" + counter;
  var timeId = "#time" + counter;
  var presentHour = moment().hour();
  var timeString = $(timeId).text();
  var timeNumber = timeToNumber(timeString); 
  if(timeNumber < presentHour) {
    $(textEntry).addClass("past");
  } else if (timeNumber > presentHour) {
    $(textEntry).addClass("future");
  } else {
    $(textEntry).addClass("present");
  }

  counter ++;


}

//changing the hour to a number to compare with moment.js

function timeToNumber(hourString) {
    switch(hourString) {
      case "6 AM": return 6;
      case "7 AM": return 7;
      case "8 AM": return 8;
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
      case "6 PM": return 18;
      case "7 PM": return 19;
    }
  }

//makes on save click that the text area gets saved to local storage
$("button").click(function() {
    scheduleNotes = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();   
    saveSchedule(hourString, scheduleNotes);
  });

  function saveSchedule() {
      //if nothing is in local storage add the blank array
    if(!localStorage.getItem('scheduledEvents')) {
        localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
    }
    // gets original local storage and adds the saved hour to it
    let workHours = JSON.parse(localStorage.getItem('scheduledEvents'));
    workHours[hourString] = scheduleNotes
    localStorage.setItem('scheduledEvents', JSON.stringify(workHours));
  }
});
