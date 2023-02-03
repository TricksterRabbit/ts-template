import { Request, Response } from "express";

import IAuthService from "../services/interfaces/IAuthService";
import ILoginController from "./interfaces/ILoginController";

class LoginController implements ILoginController {
  constructor(private authService: IAuthService) {}

  async authUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await this.authService.authUser(email, password);

    return res.status(200).json(token);
  }
}

export default LoginController;
