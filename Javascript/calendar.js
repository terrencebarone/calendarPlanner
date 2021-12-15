
let board1 = document.getElementById("board1");
let board2 = document.getElementById("board2");
let board3 = document.getElementById("board3");
let board4 = document.getElementById("board4");
let board5 = document.getElementById("board5");
let board6 = document.getElementById("board6");
let board7 = document.getElementById("board7");
let board8 = document.getElementById("board8");
let board9 = document.getElementById("board9");
let board10 = document.getElementById("board10");
let board11 = document.getElementById("board11");
let board12 = document.getElementById("board12");
let board13 = document.getElementById("board13");
let board14 = document.getElementById("board14");
let board15 = document.getElementById("board15");
let board16 = document.getElementById("board16");
let board17 = document.getElementById("board17");
let board18 = document.getElementById("board18");
let board19 = document.getElementById("board19");
let board20 = document.getElementById("board20");
let board21 = document.getElementById("board21");
let board22 = document.getElementById("board22");
let board23 = document.getElementById("board23");
let board24 = document.getElementById("board24");
let board25 = document.getElementById("board25");
let board26 = document.getElementById("board26");
let board27 = document.getElementById("board27");
let board28 = document.getElementById("board28");
let board29 = document.getElementById("board29");
let board30 = document.getElementById("board30");
let board31 = document.getElementById("board31");
let board32 = document.getElementById("board32");
let board33 = document.getElementById("board33");
let board34 = document.getElementById("board34");
let board35 = document.getElementById("board35");
let board36 = document.getElementById("board36");
let board37 = document.getElementById("board37");
let board38 = document.getElementById("board38");
let board39 = document.getElementById("board39");
let board40 = document.getElementById("board40");
let board41 = document.getElementById("board41");
let board42 = document.getElementById("board42");

let boardArray = [board1,board2,board3,board4,board5,board6,board7,board8,board9,
    board10,board11,board12,board13,board14,board15,board16,board17,board18,board19,board20
,board21,board22,board23,board24,board25,board26,board27,board28,board29,board30,board31,board32,
board33,board34,board35,board36,board37,board38,board39,board40,board41,board42];


//INITIAL GETS TODAYS MONTH AND YEAR
let currentTime = new Date();
let month = currentTime.getMonth();
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let boardStartDay = firstDayOfMonth(month,year);
setBoard(boardStartDay,daysInMonth(month, year));
monthElement.innerText=returnMonthString(month);
yearElement.innerText=year;
checkMainBoard();

//loops through board array and checks if the element value equals one 
//in localStorage if does not return back null then with backs the 
//boards background green to let user know event is there
function checkMainBoard(){
    for(let i = 0 ; i < boardArray.length;i++){
        if(localStorage.getItem(boardArray[i].value) !== null){
            boardArray[i].style.background="green";
        }
    }
}
function timeToString(time){
    let stringHour = time.substring(0,2);
    let stringMinutes = time.substring(3,5);
    let endString="AM";
    if(stringHour<10){
        stringHour=time.substring(1,2);
        if(stringMinutes<10){
            stringMinutes=time.substring(4,5);
            if(stringMinutes==="0"){
                stringMinutes="00";
            }
        }
        else{
            stringMinutes=time.substring(3,5);
        }
    }
    else{
        stringHour = time.substring(0,2);
        if(parseInt(stringHour) > 12){
            endString="PM";
            switch(parseInt(stringHour)){
                case 13:
                    stringHour="1";
                    break;
                case 14:
                    stringHour="2";
                    break;
                case 15:
                    stringHour="3";
                    break;
                case 16:
                    stringHour="4";
                    break;
                case 17:
                    stringHour="5";
                    break;
                case 18:
                    stringHour="6";
                    break;
                case 19:
                    stringHour="7";
                    break;
                case 20:
                    stringHour="8";
                    break;
                case 21:
                    stringHour="9";
                    break;
                case 22:
                    stringHour="10";
                    break;
                case 23:
                    stringHour="11";
                    break;
                case 24:
                    stringHour="12";
                    endString="AM";
                    break;

            }
        }
        if(stringMinutes<10){
            stringMinutes=time.substring(4,5);
            if(stringMinutes==="0"){
                stringMinutes="00";
            }
        }
        else{
            stringMinutes=time.substring(3,5);
        }
    }
    return stringHour+":"+stringMinutes+endString;
}
//this function is called when clicking on one of the board in main board
//it takes the clicked board and checks to see if its value exists in localStorage
//if exists in localStorage htmlString is used to create event divs with info
//for as many are in the array value for keyed date in localStorage
//then inserts htmlString into event-info-container html element as its child element
function getDayInfo(date){
    //sets date in mini cali
    let num = date.substring(8,10);
    let stringDate='';
    if(month<9){
        if(num<10){
            stringDate=`${num}`+" / 0"+`${month+1}`+ " / " +`${year}`;
        }
        else{
            stringDate=`${num}`+" / 0"+`${month+1}`+ " / " +`${year}`;
        }
    }
    else{
        if(num<10){
            stringDate=`${num}`+" / "+`${month+1}`+ " / " +`${year}`;
        }
        else{
            stringDate=`${num}`+" / "+`${month+1}`+ " / " +`${year}`;
        }
    }
    document.getElementById("chosenDate").innerText=stringDate;
    document.getElementById("chosenDate-timelineHeader").innerText=stringDate;
    //counts how many events are that day
    let thatDay = JSON.parse(localStorage.getItem(date));
    let htmlString=``;
    if(thatDay===null){
        document.getElementById("timeline-minutes").innerHTML='';
    }
    else
    {
    let howManyEvent = thatDay.length;
    for(let k=0 ; k < howManyEvent;k++){
        let startTimeString = timeToString(thatDay[k][1]);
        let endTimeString = timeToString(thatDay[k][2]);
        htmlString +=`<div class="event"> 
                <h1 class="event-title event-header">Event Name:</h1>
                <h1 class="event-info event-header">${thatDay[k][0]}</h1>
                <h1 class="event-title">Event Start:</h1>
                <h1 class="event-info">${startTimeString}</h1>
                <h1 class="event-title">Event End:</h1>
                <h1 class="event-info">${endTimeString}</h1>
            </div>`;
    }
    }
    document.getElementById("event-info-container").innerHTML=htmlString;
}

function  getTimelineInfo(date){
    if(localStorage.getItem(date)!==null){
        dayEventArray = JSON.parse(localStorage.getItem(date));
        let timeLineBlock='';
        let dayStart;
        let dayEnd;
        let timeStart=[];
        let timeEnd=[];
        for(let i = 1 ; i < dayEventArray.length +1; i ++){
            timeLineBlock += `<div id="event${i}" class="timeline-block"></div>`;
           //get start and end time
           dayStart=dayEventArray[i-1][1];
           dayStartHour = parseInt(dayStart.substring(0,2));
           dayStartMinute =parseInt(dayStart.substring(3,5));
           rowStart=((dayStartHour*12)+13)+ (Math.round((dayStartMinute/60)*12));
           timeStart.push(rowStart);

           dayEnd=dayEventArray[i-1][2]
           dayEndHour = parseInt(dayEnd.substring(0,2));
           dayEndMinute = parseInt(dayEnd.substring(3,5));
           rowEnd=((dayEndHour*12)+13)+ (Math.round((dayEndMinute/60)*12));
           timeEnd.push(rowEnd);
        }
        document.getElementById("timeline-minutes").innerHTML=timeLineBlock;
        for(let i = 0 ; i < dayEventArray.length; i++){
            document.getElementById(`event${i+1}`).style.gridRow = `${timeStart[i]} / ${timeEnd[i]}`;
            document.getElementById(`event${i+1}`).style.gridColumn="1 / 2 ";
        }
       
    }
}


//this functioin is called when website is first opened, also when left/right arrow is clicked
//the function takes the boardStartDay/daysinmonth variables. Using boardstartday it blacks out
//board pieces that are not included in calendar month. Then adds the value date to each board
// & creates an event listener to each board that will run getDayInfo function in the second for loop.
// the third for loop will black out the remainer boards if any.
function setBoard(boardStartDay,daysinmonth){
    let num=1;
    
    for(let i = 0 ; i < boardStartDay;i++){
        boardArray[i].style.background="black";
    }
    for( let i = 0 ; i < daysinmonth ; i++){
        boardArray[boardStartDay].children[0].children[0].innerText=num;
        if(month<9){
            if(num<10){
                boardArray[boardStartDay].value=`${year}`+"-0"+`${month+1}`+"-0"+`${num}`;
            }
            else{
                boardArray[boardStartDay].value=`${year}`+"-0"+`${month+1}`+"-"+`${num}`;
            }
        }
        else{
            if(num<10){
                boardArray[boardStartDay].value=`${year}`+"-"+`${month+1}`+"-0"+`${num}`;
            }
            else{
                boardArray[boardStartDay].value=`${year}`+"-"+`${month+1}`+"-"+`${num}`;
            }
        }
        num++;
      
        boardArray[boardStartDay].addEventListener("click",function (){
            console.log(this.value);
            getDayInfo(this.value)
            getTimelineInfo(this.value);
            if(window.innerWidth <= 1024){
                document.getElementById("mini-calendar").style.display="block";
                document.getElementById("mini-calendar").style.gridArea="3 / 1 /8 / 9";
                document.getElementById("mini-calendar").style.zIndex="5";
                leftArrow.style.display="none";
                rightArrow.style.display="none";
                monthYear.style.display="none";
                document.getElementById("close-miniCalendar-button").style.display="block";
            }
        });
        boardStartDay++;
        
    }
    for(boardStartDay;boardStartDay<42;boardStartDay++){
        boardArray[boardStartDay].style.background="black";
        num++;
    }
}

//function is called when left/right arrow is clicked
//1.Go through board array and set the day number in each board to an empty string
//2.Set boards to a white background and makes all values equal to null
function emptyCal(){
    for(let i= 0 ; i < 42 ;i++){
        document.getElementsByClassName("dayNum")[i].innerText="";
        boardArray[i].style.background="white";
        boardArray[i].value=null;
    }
}
//used to get the days in a month using the current month/year
function daysInMonth(month, year){
    return new Date(year, month+1, 0).getDate();
}
//gets the first day of the month using the current month/year
function firstDayOfMonth(month, year){
    return  new Date(year, month , 1).getDay();
}
//function used to update and change the month header of the calendar
//takes the numbered month returned by date object and switches to string
function returnMonthString(num){
    switch(num){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}


//LEFT AND RIGHT ARROW EVENT LISTENERS
//both control month and year and once month = jan/dec it sets the month/year to the 
//apporiate month/year. Sets both month/year HTML elements, sets boardStartDay
//(used in setBoard function), sets the board, and check the board for any events
leftArrow.addEventListener("click",()=>{
    emptyCal()
    if(month===0){
        year--;
        month=11;
      
       
    }
    else{
        month--;
    }
    monthElement.innerText=returnMonthString(month);
    yearElement.innerText=year;
    let boardStartDay = firstDayOfMonth(month,year);
    setBoard(boardStartDay,daysInMonth(month, year));
    checkMainBoard();
});
rightArrow.addEventListener("click",()=>{
    emptyCal()
    if(month===11){
        year++;
        month=0;
       
    }
    else{
        month++;
       
    }
    monthElement.innerText=returnMonthString(month);
    yearElement.innerText=year;
    let boardStartDay = firstDayOfMonth(month,year);
    setBoard(boardStartDay,daysInMonth(month, year));
    checkMainBoard();
});

//EVENT LISTENER for addEventButton - makes eventForm visible
addEventButton.addEventListener("click",()=>{
    addEventForm.style.display="flex";
});
//EVENT LISTENER for addEventBackButton - makes eventForm display none
addEventFormBackButton.addEventListener("click",()=>{
    addEventForm.style.display="none";
});

//variables in the event form inputed by the user 
let dateInput = document.getElementById("date-input");
let eventInput = document.getElementById("event-input");
let eventStartInput = document.getElementById("eventStart-input");
let eventEndInput = document.getElementById("eventEnd-input");


//EVENT LISTENER for addEventButton(On Event Form).
//1. Checks that user put in correct input
//2. Checks localStorage to see if it has an event on that day. 
//   IF TRUE it retrieves the array, pushes the next event, and puts back in localStorage
//   IF FALSE it creates an array in localStorage making the date as key
//   and in the array is the eventName,startTime,endTime
//3. checksMainBoard() - to update the calendar right after successful eventInput
//4. makes eventForm display none
document.getElementById("addEvent-form").addEventListener("submit",()=>{
    if(localStorage.getItem(dateInput.value) !== null){
        let val = JSON.parse(localStorage.getItem(dateInput.value));
        val.push([eventInput.value , eventStartInput.value , eventEndInput.value]);
        localStorage.setItem(dateInput.value,JSON.stringify(val));
    }
    else{
        let emptyArray = [[eventInput.value , eventStartInput.value , eventEndInput.value]];
        localStorage.setItem(dateInput.value,JSON.stringify(emptyArray));
    }
    checkMainBoard();
    addEventForm.style.display="none";
});

document.getElementById("close-miniCalendar-button").addEventListener("click",()=>{
    document.getElementById("mini-calendar").style.display="none";
    leftArrow.style.display="block";
    rightArrow.style.display="block";
    monthYear.style.display="block";
    document.getElementById("close-miniCalendar-button").style.display="none";
});