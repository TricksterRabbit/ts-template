import { PrismaClient, User } from "@prisma/client";
import IUserService from "./interfaces/IUserService";

const prisma = new PrismaClient();

class UserService implements IUserService {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async getUser(id: number): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } });
  }

  async createUser(
    email: string,
    password: string,
    name: string
  ): Promise<User> {
    return await prisma.user.create({ data: { email, password, name } });
  }

  async updateUser(
    id: number,
    email: string,
    password: string,
    name: string
  ): Promise<User> {
    return await prisma.user.update({
      where: { id },
      data: { email, password, name },
    });
  }

  async deleteUser(id: number): Promise<User | null> {
    return await prisma.user.delete({ where: { id } });
  }
}

export default UserService;
