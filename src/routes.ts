import { Router } from "express";

import UserController from "./controllers/UserController";
import UserService from "./services/UserService";

const userService = new UserService();

const userController = new UserController(userService);

const routes = Router();

routes.get("/users", (req, res) => userController.getUsers(req, res));
routes.get("/user/:id", (req, res) => userController.getUser(req, res));
routes.get("/user", (req, res) => userController.getUserByEmail(req, res));
routes.post("/user", (req, res) => userController.createUser(req, res));
routes.put("/user/:id", (req, res) => userController.updateUser(req, res));
routes.delete("/user/:id", (req, res) => userController.deleteUser(req, res));

export default routes;
