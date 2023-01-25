import { Router } from "express";

import helloController from "./controllers/hellocontroller";

const routes = Router();

routes.get("/", helloController.index);

export default routes;
