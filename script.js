//variables
var currentDayEl = $("#currentDay")
var containerEl = $(".container")
var now = luxon.DateTime.local(2020, 5, 15, 8, 35)
var dt = luxon.DateTime.local(2017, 5, 15, 8, 30);

console.log(now)

// current day


//make timeblocks
for (var i = 9; i < 19; i++) {
    var newTimeBlock = $("<div>")
    newTimeBlock.attr("class", "row col-8 description")
    newTimeBlock.attr("id", "description")
    newTimeBlock.attr("id", "time" + i)
    containerEl.append(newTimeBlock)

    var newHour = $("<textarea>")
    newHour.attr("class", "hour col-2")
    newHour.attr("id", "hour" + i)
    newHour.text(i)
    newTimeBlock.append(newHour)
}
console.log(dt.toLocaleString(DateTime.DATE_SHORT))



//css timeblock



//local storage