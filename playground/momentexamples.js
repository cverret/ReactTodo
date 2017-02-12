var moment = require('moment');

console.log(moment().format());

//January 1, 1970 @ 12:00AM

var now = moment();

console.log('current timestamp', now.unix());


var timestamp = 1486922070;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// January 3rd, 2017 @ 12:13 AM
console.log('current moment challenge - ', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
