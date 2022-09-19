
const dt=new Date();

function renderCalender(){
   // dt.setDate(1);
    var day=dt.getDay();

    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    // console.log(months[dt.getMonth()]);
    //console.log(day);
    // console.log(dt.setMonth(11));//it return the months in 0-11 index 
    
    document.getElementById("month-disp").innerHTML=months[dt.getMonth()];
    document.getElementById("date-disp").innerHTML=dt.toDateString();

    //to find the Today Date
    var todayDate=new Date();
    //console.log(todayDate);
    
    
    //to find the End Date of this Current Month
    var endDate=new Date(
        dt.getFullYear(),
        dt.getMonth()+1,
        0,
    ).getDate();
    //console.log(endDate);
    
    //To find the Prev Month last Date
    var prevDate=new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0,
    ).getDate();
    //console.log(prevDate);

    //to find the First Days of the Current month
    const firstDayIndex=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    1
    ).getDay();
    //console.log(firstDayIndex);

    //To find the last Days of the Current Month
    const lastDayIndex=new Date(
        dt.getFullYear(),
        dt.getMonth()+1,
        0
    ).getDay();
   //console.log(lastDayIndex); 

   

    
    var cells="";
    
    for(x=firstDayIndex;x>0;x--){
        cells+= "<div class='prev-date'>"+ (prevDate-x+1) + "</div>";
    }
    
    for(i=1;i<=endDate;i++){
        if(i==todayDate.getDate() && dt.getMonth()==todayDate.getMonth() ){
            cells+= "<div class='today'>"+ i + "</div>"; // this will show the current date
        }else{
           cells+= "<div>"+ i + "</div>";
        }
    }

    //it gives the Next Day of the Month
   const nextDays=7-lastDayIndex-1;
   // console.log(nextDays);
     
    for(j=1;j<=nextDays;j++){
        cells+=`<div class="next-date">${j}</div>`
    }
    document.getElementsByClassName("days")[0].innerHTML=cells;  //we can access the element from class with the help of Array ...bcz it return array
   
  
}
 renderCalender();

 function moveDate(param){

    if(param=='prev'){

      dt.setMonth(dt.getMonth()-1);

      }else if(param=='next'){
  
       dt.setMonth(dt.getMonth()+1);

     }
renderCalender();
}
