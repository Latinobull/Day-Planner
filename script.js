//variables
var currentDayEl = $("#currentDay")
var containerEl = $(".container")
var userStorage = window.localStorage
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
    newHour.attr("id", "hour")
    newHour.attr("value", i)
    newHour.text(i)
    newTimeBlock.append(newHour)
    console.log(newHour.val())

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
function colorHours() {

    if(hour < currentHour) {
        eventSlot.attr("class", "past description col-10")
        console.log(hour)
    }else if (hour == currentHour) {
        eventSlot.attr("class", "present description col-10")
    }else if (hour > currentHour) {
        eventSlot.attr("class", "future description col-10")
    }
}


//local storage
function getUserEvents() {
    for (var o = 0; o < containerEl.children().length; o++) {
        var hoursTakenOut =  containerEl.children().get(o).children[0].textContent
        var entrySet = containerEl.children().get(o).children[1]
        if (userStorage.getItem(hoursTakenOut) != undefined) {
            entrySet.value = (userStorage.getItem(hoursTakenOut))
        }
    }
}

getUserEvents()

function saveUserEvents(event) {
    event.preventDefault
    var target = $(event.target)
    var eventHour = target.siblings(".hour").text()
    var eventData = target.siblings("textarea").val()
    userStorage.setItem(eventHour, eventData)

}

//save btn
var saveBtnEvent = $(".saveBtn")
saveBtnEvent.click(saveUserEvents)
