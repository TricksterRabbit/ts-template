import { Request, Response } from "express";

import IUserController from "./interfaces/IUserController";

import UserServices from "../services/UserServices";

const userServices = new UserServices();

class UserController implements IUserController {
  async getUsers(req: Request, res: Response) {
    const users = await userServices.getUsers();

    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const id = req.params;

    console.log(id);

    // const user = await userServices.getUser(id);

    // return res.status(200).json(user);
    return res.status(200).json({ message: "ok" });
  }
}

export default UserController;
