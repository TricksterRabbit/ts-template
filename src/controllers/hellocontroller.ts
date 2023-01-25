import { Request, Response } from "express";

class HelloController {
  index(req: Request, res: Response) {
    return res.json({
      message: "hello",
    });
  }
}

const helloController = new HelloController();

export default helloController;
