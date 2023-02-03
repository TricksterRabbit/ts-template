import { NextFunction, Request, Response } from "express";

export default interface IAuthService {
  authUser(email: string, password: string): Promise<{ token: string }>;
}
