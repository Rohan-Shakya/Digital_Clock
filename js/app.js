
function clock(){
    
    const fullDate = new Date();
    var days = fullDate.getDay();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var session = "AM";

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }

    if(hours < 10){
        hours = "0" + hours;
    }
    if(mins < 10){
        mins = "0"+ mins;
    }
    if(secs < 10){
        secs = "0"+ secs;
    }
    
    
    switch(days){
        case 0: 
                days = "Sun";
                break;
        case 1: 
                days = "Mon";
                break;
        case 2: 
                days = "Tue";
                break;
        case 3: 
                days = "Wed";
                break;
        case 4: 
                days = "Thr";
                break;
        case 5: 
                days = "Fri";
                break;
        case 6: 
                days = "Fri";
                break;
                
    };


    
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = mins;
    document.querySelector("#second").innerHTML = secs;
    document.querySelector("#session").innerHTML = session;

    
}

setInterval(clock, 1000);
