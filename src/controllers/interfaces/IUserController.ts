import { Request, Response } from "express";

export default interface IUserController {
  getUsers(req: Request, res: Response): Promise<Response>;
  getUser(req: Request, res: Response): Promise<Response>;
  getUserByEmail(req: Request, res: Response): Promise<Response>;
  createUser(req: Request, res: Response): Promise<Response>;
  updateUser(req: Request, res: Response): Promise<Response>;
  deleteUser(req: Request, res: Response): Promise<Response>;
}
