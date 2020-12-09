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
    newTimeBlock.attr("class", "row")
    newTimeBlock.attr("id", "time-block time" + i)
    containerEl.append(newTimeBlock)

    var newHour = $("<aside>")
    newHour.attr("class", "hour col-2")
    newHour.attr("id", "hour" + i)
    newHour.text(i)
    newTimeBlock.append(newHour)

    var textBox = $("<textarea>")
    textBox.attr("class", "description col-8")
    textBox.attr("id", "textTime" + i)
    textBox.val("Today's Plans are...")
    newTimeBlock.append(textBox)

    var save = $("<button>")
    save.attr("class", "saveBtn col-2")
    save.attr("id", "savebutton" + i)
    save.html("<i class= 'fas fa-save'\> <br> Save<\i>")
    newTimeBlock.append(save)

}
console.log(dt.toLocaleString(DateTime.DATE_SHORT))



//css timeblock



//local storage