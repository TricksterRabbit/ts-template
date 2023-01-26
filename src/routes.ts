import { Router } from "express";

import UserController from "./controllers/UserController";

const userController = new UserController();

const routes = Router();

routes.get("/users", (req, res) => userController.getUsers(req, res));
routes.get("/user/:id", (req, res) => userController.getUser(req, res));

export default routes;
