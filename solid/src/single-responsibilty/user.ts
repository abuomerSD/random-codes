export class User {

    constructor(id: number, email: string , password: string) {
        this._id = id,
        this._email = email;
        this._password = password;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }


    save(User:User) : boolean {
        console.log('user saved');
        return true;
    }

    delete(user: User): boolean {
        console.log('user deleted');
        return true;
    }
    
}