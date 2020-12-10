//variables
var currentDayEl = $("#currentDay")
var containerEl = $(".container")
var userStorage = window.localStorage
var now = luxon.DateTime.local(2020, 5, 15, 8, 35)
var dt = luxon.DateTime.local()
var currentHour = dt.hour
console.log(currentHour)
// current day
    let todayDate =  Object.assign(luxon.DateTime.DATE_FULL, { weekday: "long"})
    currentDayEl.text(JSON.stringify(todayDate))
    console.log( dt.toLocaleString(todayDate))
   

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
    textBox.attr("placeholder","Today's Plans are...")
    newTimeBlock.append(textBox)

    var save = $("<button>")
    save.attr("class", "saveBtn col-2")
    save.attr("id", "savebutton" + i)
    save.html("<i class= 'fas fa-save'> <br> Save</i>")
    newTimeBlock.append(save)

}




//css timeblock



//local storage