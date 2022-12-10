
var saveBtnEL = $('.saveBtn');
var timeDisplayEl = $('#currentDay');

var date = dayjs().format('MMMM D, YYYY h:mm A');



function displayTime() {
  timeDisplayEl.textContent = date;
  console.log(timeDisplayEl.textContent);
}

setInterval(displayTime, 1000);

$('#currentDay').text(date);


$('[id^="hour-"]').each(function(){
  
  var textAreaEl = $(this).children('textarea');
  textAreaEl.val(localStorage.getItem($(this).attr('id')));
}
 
);



 $('.saveBtn').each(function(){

  $(this).on('click', function() {
  var textAreaEl = $(this).siblings('textarea');
  localStorage.setItem($(this).parent().attr('id'), (textAreaEl.val()));

  });
});





function updateTime () {
  var rightNow = dayjs().format('H');
  console.log(rightNow);
  $('.time-block').each(function(){
    var calenderHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(calenderHour);
    if(calenderHour < rightNow) {
      $(this).addClass('past')
    } else if (calenderHour == rightNow) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')}
  })
}

updateTime();





 



