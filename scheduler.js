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
    console.log(moment().format('LL'));
$("#currentDay").text(moment().format('LL'));



//check if anything is in local storage







//cycle through every hour?



//check hour and change every hour's color



//makes on save click that text area gets saved to local storage
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
