//THIS FILE CONTAINS ALL HTML ELEMENT VARIABLES AND EVENT LISTENERS

//HTML VARIABLES
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let monthYear = document.getElementById("monthYear-container");
let monthElement = document.getElementById("month");
let yearElement = document.getElementById("year");
let addEventButton = document.getElementById("add-event-button");
let switchToTimelineButton = document.getElementById("switch-to-timeline-button");
let mainCalendar = document.getElementById("main-calendar-container");
let timelineContainer = document.getElementById("timeline-container");
let addEventForm = document.getElementById("addEvent-form-container");
let addEventFormBackButton = document.getElementById("addEventFormBackButton");
let addEventFormButton = document.getElementById("addEventFormButton");
//functions used to trigger stateObject
function setTimeline(){
    stateObject.stateVar="timeline";
    leftArrow.style.display="none";
    rightArrow.style.display="none";
    monthYear.style.display="none";
    monthYear.style.justifyContent="center";
    mainCalendar.style.display="none";
    timelineContainer.style.display="block";
    document.getElementById("mini-calendar").style.display="none";
    document.getElementById("timeline-date-container").style.display="grid";
    document.getElementById("close-miniCalendar-button").style.display="none";
}
function setCalendar(){
    stateObject.stateVar="calendar";
    leftArrow.style.display="grid";
    rightArrow.style.display="grid";
    monthYear.style.display="grid";
    mainCalendar.style.display="block";
    timelineContainer.style.display="none";
    document.getElementById("timeline-date-container").style.display="none";
}
//state object for mobile use switching between calendar/timeline
let stateObject = {
    state : "calendar",
    changeState(){
        //change button text, remove past event listeners, assigning new event listenter
        if(this.state==="calendar"){
            switchToTimelineButton.innerText="Timeline";
            switchToTimelineButton.removeEventListener("click",setCalendar);
            switchToTimelineButton.addEventListener("click", setTimeline);
        }
        else if(this.state==="timeline"){
            switchToTimelineButton.innerText="Calendar";
            switchToTimelineButton.removeEventListener("click",setTimeline);
            switchToTimelineButton.addEventListener("click", setCalendar);
        }
    },
    get stateVar(){
        return this.state;
    },
    set stateVar(state){
        this.state = state;
        this.changeState();
    }
}
//stateObject eventListeners
switchToTimelineButton.addEventListener("click", setTimeline);



