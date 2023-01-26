import { User } from "@prisma/client";

export default interface IUserService {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  createUser(email: string, password: string, name: string): Promise<User>;
  updateUser(
    id: number,
    email: string,
    password: string,
    name: string
  ): Promise<User | null>;
  deleteUser(id: number): Promise<User | null>;
}
