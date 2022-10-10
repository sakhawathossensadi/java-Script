const d = new Date();

console.log("Date : ",d);

const dt = new Date("2015-03-25T12:00:00Z");

console.log("ISO date : ",dt);

const msec = Date.parse("March 21, 2012");
console.log("msec : ",msec);
const dateFromMsec = new Date(msec);
console.log("Date from msec : ",dateFromMsec);
