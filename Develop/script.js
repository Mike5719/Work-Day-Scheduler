var timeBlockNineEl = $('#hour-9');
var timeBlockTenEl = $('#hour-10');
var timeBlockElevenEl = $('#hour-11');
var timeBlockTwelveEl = $('#hour-12');
var timeBlockOneEl = $('#hour-1');
var timeBlockTwoEl = $('#hour-2');
var timeBlockThreeEl = $('#hour-3');
var timeBlockFourEl = $('#hour-4');
var timeBlockFiveEl = $('#hour-5');

var DayHourBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var DayHourBlocksEl = [
  timeBlockNineEl,
  timeBlockTenEl,
  timeBlockElevenEl,
  timeBlockTwelveEl,
  timeBlockOneEl,
  timeBlockTwoEl,
  timeBlockThreeEl,
  timeBlockFourEl,
  timeBlockFiveEl
];

function pastColor() {
    before.addClass('past');
}

function currentColor() {
  current.addClass('present');
}

function futureColor() {
  later.addClass('future');
}


var timeNow = dayjs().format('H');
console.log(timeNow);

for (var i = 0; i < DayHourBlocks.length; i++) {
  if (DayHourBlocks[i] < timeNow) {
    var before = DayHourBlocksEl[i];
   pastColor(before);
  } else if (DayHourBlocks[i] = timeNow) {
    var current = DayHourBlocksEl[i];
    currentColor(current);
    } else {
      var later = DayHourBlocksEl[i];
      futureColor(later);
    }
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

});

var today = dayjs().format('dddd,MMMM D, YYYY h:mm A');
$('#currentDay').text(today);

