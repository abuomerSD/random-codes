"use strict";
var Status;
(function (Status) {
    Status[Status["online"] = 0] = "online";
    Status[Status["offline"] = 1] = "offline";
})(Status || (Status = {}));
class Usr {
    constructor(id, usrname, status) {
        this.id = id;
        this.usrname = usrname;
        this.status = status;
    }
    get username() {
        return this.usrname;
    }
    set username(username) {
        this.usrname = username;
    }
}
let usr = new Usr(1, "user233", Status.online);
console.log(usr);
console.log("#".repeat(30));
usr.username = 'tayeb332';
console.log(usr);
