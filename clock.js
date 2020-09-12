var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function showTime()
{
	var date = new Date();
	document.getElementById("date").innerHTML= date.getDate();
	document.getElementById("month").innerHTML= months[date.getMonth()].substring(0,3);
	document.getElementById("day").innerHTML= days[date.getDay()].substring (0,3);
	document.getElementById("AM_PM").innerHTML= (date.getHours()>=11?"PM":"AM");
	document.getElementById("second1").setAttribute("transform","rotate(" + 6*date.getSeconds()  + ",500,500)");
	document.getElementById("second2").setAttribute("transform","rotate(" + 6*date.getSeconds()  + ",500,500)");
	document.getElementById("minute1").setAttribute("transform","rotate(" +(6*date.getMinutes()  + date.getSeconds()/10)+ ",500,500)");
	document.getElementById("minute2").setAttribute("transform","rotate(" +(6*date.getMinutes()  + date.getSeconds()/10)+ ",500,500)");
	document.getElementById("hour1"  ).setAttribute("transform","rotate(" +(30*date.getHours()   + date.getMinutes()/2.5 )+",500,500)");
	document.getElementById("hour2"  ).setAttribute("transform","rotate(" +(30*date.getHours()   + date.getMinutes()/2.5 )+",500,500)");
	document.getElementById("sound"  ).play();
}
showTime();
setInterval(showTime,1000);
