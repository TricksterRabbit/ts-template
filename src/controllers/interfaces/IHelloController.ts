import { Request, Response } from "express";

export default interface IHelloController {
  index(req: Request, res: Response): Response;
}
