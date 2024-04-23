export class User {
    private id: number;
    private username : string;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(id: number, username: string, firstName : string, lastName: string, email: string){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public setId(id: number): void{
        this.id = id;
    }
    public getId() {
        return this.id;
    }
}


let user1 = new User(1,'test', 'firstName', 'lastName', 'tayeb1293@yahoo.com');

user1.setId(2);

console.log(user1.getId());
