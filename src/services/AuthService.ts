import { CustomError } from "express-handler-errors";

import { PrismaClient } from "@prisma/client";

const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

class AuthService {
  async authUser(email: string, password: string): Promise<{ token: string }> {
    const user = await prisma.user.findFirst({ where: { email, password } });
    if (!user) {
      throw new CustomError({
        code: "USER_NOT_FOUND",
        message: "Usuário não encontrado",
        status: 404,
      });
    }
    const token = jwt.sign(email, process.env.TOKEN_SECRET);
    return { token };
  }
}

export default AuthService;
