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


var moon = document.getElementById('moon');
var sun = document.getElementById('sun');

var tl1 = new TimelineMax({repeat:-1});
tl1.to(moon, 2, {top: 250, ease: Sine.easeInOut})
   .to(moon, 2, {left: 500, ease: Sine.easeInOut}, '-=0.25')
   .to(moon, 2, {top: 8, ease: Sine.easeInOut}, '-=0.25')
   .to(moon, 2, {left: 8, ease: Sine.easeInOut}, '-=0.25');

var tl2 = new TimelineMax({repeat:-1});
tl2.to(sun, 2, {bottom: 250, ease: Sine.easeInOut})
   .to(sun, 2, {right: 500, ease: Sine.easeInOut}, '-=0.25')
   .to(sun, 2, {bottom: 8, ease: Sine.easeInOut}, '-=0.25')
   .to(sun, 2, {right: 8, ease: Sine.easeInOut}, '-=0.25');
