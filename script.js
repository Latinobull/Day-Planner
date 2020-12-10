//variables
var currentDayEl = $("#currentDay")
var containerEl = $(".container")
var userStorage = window.localStorage
var dt = luxon.DateTime.local()
var currentHour = dt.hour

    var todayDate =  Object.assign(luxon.DateTime.DATE_FULL, { weekday: "long"})
    currentDayEl.text(JSON.stringify(dt.toLocaleString(luxon.DateTime.DATE_FULL)))
   

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

    colorHours(i, textBox)
}

function colorHours(hour, eventColor) {
    
    if(hour < currentHour) {
        eventColor.attr("class", "past description col-8") 
    }else if (hour == currentHour) {
        eventColor.attr("class", "present description col-8")
    }else if (hour > currentHour) {
        eventColor.attr("class", "future description col-8")
    }
}

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

var saveBtnEvent = $(".saveBtn")
saveBtnEvent.click(saveUserEvents)
