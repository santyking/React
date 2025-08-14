var usernames;
(function (usernames) {
    // first="Santosh",
    // last="Mhatre"
    usernames[usernames["rollno"] = 1] = "rollno";
    usernames[usernames["seatno"] = 23] = "seatno";
})(usernames || (usernames = {}));
// console.log(usernames.first);
// console.log(usernames.last);
console.log(usernames.rollno);
console.log(usernames.seatno);
