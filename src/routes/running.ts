import { Router } from "express";

import { createUserRunningController } from "../useCases/Client/CreateRunning";
import { listUserRunningController } from "../useCases/Client/ListRunning";

const routes = Router();

routes.post("/", createUserRunningController.handle);
routes.get("/list", listUserRunningController.handle);
routes.delete("user/cancelar:id", createUserRunningController.handle);
routes.put("/user/cancelarCorrida:id", createUserRunningController.handle);

export default routes;
