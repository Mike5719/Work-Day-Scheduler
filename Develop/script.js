var timeBlockNineEl = $('#hour-9');
var timeBlockTenEl = $('#hour-10');
var timeBlockElevenEl = $('#hour-11');
var timeBlockTwelveEl = $('#hour-12');
var timeBlockOneEl = $('#hour-1');
var timeBlockTwoEl = $('#hour-2');
var timeBlockThreeEl = $('#hour-3');
var timeBlockFourEl = $('#hour-4');
var timeBlockFiveEl = $('#hour-5');
var taskDisplayEl = $('#task-display');
var saveButton = $('#save');

var DayHourBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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

//display saved tasks TODO
function renderTasks() {

}

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
    console.log(before);
   pastColor(before);
  } else if (DayHourBlocks[i] == timeNow) {
    var current = DayHourBlocksEl[i];
    console.log(current);
    currentColor(current);
    } else {
      var later = DayHourBlocksEl[i];
      console.log(later);
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

// function readTasksFromStorage() {
//   var tasks = local.Storage.getItem('tasks');
//     if (tasks) {
//       tasks = JSON.parse(tasks);
//     } else {
//     tasks = [];
//   }
//   return tasks;
// }

function printTasksData () {

}

taskDisplayEl.addEventListener("click", function(event) {
  event.preventDefault();
  var element = event.target;

  if(todoText === "") {
    return;
  }

  
  if (element.matches("button") === true) {
   var li = document.createElement("li");
   var todoText = todoInput.value.trim(); //TODO -DEFINE todoInput
   li.textContent = todoText;
   i = element.parentElement
   console.log(i);
   li.setAttribute("data-index", i);
  }



  
});
