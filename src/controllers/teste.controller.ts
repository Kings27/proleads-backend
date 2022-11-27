import { Request, Response } from 'express';

class UserController {
    public static test = (req: Request, res: Response, next: any) => {
        try {
            res.send("its works men, respeita os homi");
        } catch(e) {
            console.log("iih mane, deu erro aqui ein");
            next();
        }
    }
}

export default UserController;