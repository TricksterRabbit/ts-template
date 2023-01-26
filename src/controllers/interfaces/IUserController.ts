import { Request, Response } from "express";

export default interface IUserController {
  getUsers(req: Request, res: Response): Promise<Response>;
  getUser(req: Request, res: Response): Promise<Response>;
  // createUser(req: Request, res: Response): Response;
  // updateUser(req: Request, res: Response): Response;
  // deleteUser(req: Request, res: Response): Response;
}
