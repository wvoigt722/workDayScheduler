// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html

 // TODO: Add code to display the current date in the header of the page.
var saveBtnEL = $('.saveBtn');
var timeDisplayEl = $('#currentDay');



// var textAreaEl = document.querySelector('');

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.textContent = rightNow;
}

setInterval(displayTime, 1000);







// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



$('[id^="hour-"]').each(function(){
  
  var textAreaEl = $(this).children('textarea');
  textAreaEl.val(localStorage.getItem($(this).attr('id')));
}
 
);

  // var saveBtnEl = $('.saveBtn')

  // var textAreaEl = saveBtnEL.siblings('textarea').text(localStorage.getItem('hour-9'))

  // console.log(textAreaEl)



 // TODO: Add a listener for click events on the save button. This code should


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //



 $('.saveBtn').each(function(){
  
  $(this).on('click', function() {
  var textAreaEl = $(this).siblings('textarea');
  localStorage.setItem($(this).parent().attr('id'), (textAreaEl.val()));



    // console.log(textAreaEl);
    // console.log(this.parentNode);
  });
});







$(function () {
 


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  

});