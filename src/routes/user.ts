import { Router } from "express";

import { createUserController } from "../useCases/Client/CreateUser";

const routes = Router();

routes.post("/", createUserController.handle);

export default routes;
