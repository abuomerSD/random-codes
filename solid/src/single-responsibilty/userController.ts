import { User } from "./user";
const register =async (req:Request, res: Response) => {
    let reqBody  = {
        id: 1,
        email: 'test@gmail.com',
        password: 'djnjkhrb2930'
    }
    const { id, email, password } = reqBody;
    let user = new User(id, email, password);
    user.save(user);
}