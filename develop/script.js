//current day display 
function currentDay (){
$('#currentDay').text(dayjs().format('dddd, MMM D'));
}
currentDay ();
//update timeblocks with corresponding color to reflect time of day
function timeBlockClasses(){
  const currentHour = dayjs().hour();
  $('time-block').each(function(){
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour){
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
  } else {
    $(this).addClass('future')
}
  });
}
timeBlockClasses();









    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?







    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

  