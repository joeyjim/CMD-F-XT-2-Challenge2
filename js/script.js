var moon = document.getElementById('moon');
var sun = document.getElementById('sun');
var ufo = document.getElementById('ufo');
var time = 3.5;

//TweenMax.from(ufo, time, {css:{top: "-750px", scaleX:.1, scaleY:.1}, ease:Strong.easeInOut, delay: 1.5});

var tl1 = new TimelineMax({repeat:-1});
tl1.to(moon, 10, {top: "500px", ease: Sine.easeInOut})
   .to(moon, 10, {left: "500px", ease: Sine.easeInOut} )
   .to(moon, 10, {top: 8, ease: Sine.easeInOut} )
   .to(moon, 10, {left: 8, ease: Sine.easeInOut} );

var tl2 = new TimelineMax({repeat:-1});
tl2.to(sun, 10, {bottom: "250px", ease: Sine.easeInOut})
   .to(sun, 10, {right: "500px", ease: Sine.easeInOut})
   .to(sun, 10, {bottom: 8, ease: Sine.easeInOut})
   .to(sun, 10, {right: 8, ease: Sine.easeInOut});

var tl3 = new TimelineMax({repeat:-1});
tl3.from(ufo, time, {css:{top: "-750px", scaleX:.1, scaleY:.1}, ease:Strong.easeInOut, delay: 1.5})
    .to(ufo, 5, {left: 6000, ease: Sine.easeInOut});  

function showtime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var j = date.getFullYear();
    var mo = date.getMonth()+1;
    var d = date.getDate();
    
    var session = "dag";
 
    if(h < 8 && h > 16 ){
        session = "nacht";
        moon.style.visibility = "visible";
        sun.style.visibility = "hidden";
        
    } else{
        session = "dag";
        moon.style.visibility = "hidden";
        sun.style.visibility = "visible";
    }
    
    d = (d < 10) ? "0" + d : d;
    mo = (mo < 10) ? "0" + mo : mo;
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


