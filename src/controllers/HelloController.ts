import { Request, Response } from "express";

import IHelloController from "./interfaces/IHelloController";

class HelloController implements IHelloController {
  index(req: Request, res: Response) {
    return res.json({
      message: "hello",
    });
  }
}

export default HelloController;
