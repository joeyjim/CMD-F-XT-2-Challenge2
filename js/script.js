function showtime() {// We create a new Date object and assign it to a variable called "time".
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var j = date.getFullYear();
    var mo = date.getMonth()+1;
    var d = date.getDate();
    
    var session = "ochtend";
    
  
    
    if(h > 12){
       
        session = "middag";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var fulldate = d + " - " + mo + " - " + j;
    var time = h + ":" + m + ":" + s;
    document.getElementById("month").innerHTML = fulldate;
    document.getElementById("clock").innerHTML = time;
    
    setTimeout(showtime, 1000);
}
   showtime();


