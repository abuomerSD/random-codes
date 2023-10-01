enum Status{
    online,
    offline
}
class Usr {
     private id : number;
     private usrname: string;
     private status: Status;

    constructor(id: number, usrname:string, status: Status){
        this.id = id;
        this.usrname = usrname;
        this.status = status;
    }

    get username(): string{
        return this.usrname;
    }

    set username(username: string)  {
        this.usrname = username;
    }

}

let usr = new Usr(1, "user233", Status.online);

console.log(usr);

console.log("#".repeat(30));

usr.username = 'tayeb332';

console.log(usr);