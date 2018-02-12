var os = require('os');

function getOStime() {
	var uptime = os.uptime().toFixed(0);

	var minutes = Math.floor(uptime / 60).toFixed(0);
	var restMinutes = (uptime % 60);

	var hours = Math.floor(uptime / 3600);		
	var restHuor = (minutes % 60).toFixed(0);

	console.log('Uptime in secends: ~ ' + uptime + " s");	
	console.log('Uptime in minutes: ~ ' + minutes + ' min ' + restMinutes+ ' s');
	console.log('Uptime in hours: ~ '+ hours + " h " + restHuor + ' min ' + restMinutes + " s");

}


exports.print = getOStime;