import express from "express";

import routes from "./routes";

const app = express();

const json = express.json();

app.use(json);
app.use(routes);

export default app;
