import { Router } from "express";

import { createDriverController } from "../useCases/Driver/CreateDriver";

const routes = Router();

routes.post("/", createDriverController.handle);

export default routes;
