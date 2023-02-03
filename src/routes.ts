import { Router } from "express";

import AuthMiddleware from "./middleware/auth";

import LoginController from "./controllers/LoginController";
import UserController from "./controllers/UserController";

import AuthService from "./services/AuthService";
import UserService from "./services/UserService";

const authMiddleware = new AuthMiddleware();

const userService = new UserService();
const authService = new AuthService();

const loginController = new LoginController(authService);
const userController = new UserController(userService);

const routes = Router();

routes.get("/login", (req, res) => loginController.authUser(req, res));

routes.get("/users", authMiddleware.authenticateToken, (req, res) =>
  userController.getUsers(req, res)
);
routes.get("/user/:id", authMiddleware.authenticateToken, (req, res) =>
  userController.getUser(req, res)
);
routes.get("/user", authMiddleware.authenticateToken, (req, res) =>
  userController.getUserByEmail(req, res)
);
routes.post("/user", (req, res) => userController.createUser(req, res));

routes.put("/user/:id", authMiddleware.authenticateToken, (req, res) =>
  userController.updateUser(req, res)
);
routes.delete("/user/:id", authMiddleware.authenticateToken, (req, res) =>
  userController.deleteUser(req, res)
);

export default routes;
