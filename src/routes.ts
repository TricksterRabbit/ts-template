import { Router } from "express";

import HelloController from "./controllers/HelloController";

const helloController = new HelloController();

const routes = Router();

routes.get("/hello", (req, res) => helloController.index(req, res));

export default routes;
