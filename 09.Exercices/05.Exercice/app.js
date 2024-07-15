"use strict";
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
function nombreDeJoursDansMois(month) {
    switch (month) {
        case Month.January ||
            Month.March ||
            Month.May ||
            Month.July ||
            Month.August ||
            Month.October ||
            Month.December:
            return 31;
        case Month.April || Month.June || Month.September || Month.November:
            return 30;
        case Month.February:
            return 28;
        default:
            throw new Error("Invalid month");
    }
}
console.log(nombreDeJoursDansMois(Month.February)); // 28
