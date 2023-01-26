import { Request, Response } from "express";

import IUserController from "./interfaces/IUserController";
import IUserService from "../services/interfaces/IUserService";

class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  async getUsers(req: Request, res: Response) {
    const users = await this.userService.getUsers();

    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const user = await this.userService.getUser(id);

    return res.status(200).json(user);
  }

  async getUserByEmail(req: Request, res: Response) {
    const email = req.body.email;

    const user = await this.userService.getUserByEmail(email);

    return res.status(200).json(user);
  }

  async createUser(req: Request, res: Response) {
    const { email, password, name } = req.body;

    const user = await this.userService.createUser(email, password, name);

    return res.status(201).json(user);
  }

  async updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { email, password, name } = req.body;

    const user = await this.userService.updateUser(id, email, password, name);

    return res.status(200).json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const user = await this.userService.deleteUser(id);

    return res.status(200).json(user);
  }
}

export default UserController;
