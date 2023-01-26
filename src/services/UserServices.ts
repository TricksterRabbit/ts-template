import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

class UserServices {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async createUser(
    email: string,
    password: string,
    name: string
  ): Promise<User> {
    const user = await prisma.user.create({ data: { email, password, name } });
    return user;
  }

  async updateUser(
    id: number,
    email: string,
    password: string,
    name: string
  ): Promise<User> {
    const user = await prisma.user.update({
      where: { id },
      data: { email, password, name },
    });
    return user;
  }

  async deleteUser(id: number): Promise<User | null> {
    const user = await prisma.user.delete({ where: { id } });
    return user;
  }
}

export default UserServices;
