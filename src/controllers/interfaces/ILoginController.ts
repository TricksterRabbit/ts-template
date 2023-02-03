import { Request, Response } from "express";

export default interface ILoginController {
  authUser(req: Request, res: Response): Promise<Response>;
}
