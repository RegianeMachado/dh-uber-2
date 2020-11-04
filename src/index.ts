import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import userRoutes from "./routes/user";
import runningRoutes from "./routes/running";
import connectionOptions from "./config/connection";

createConnection(connectionOptions).then((connection) => {
  const app = express();
  app.use(express.json());
  app.use("/user", userRoutes);
  app.use("/running", runningRoutes);

  app.listen(3000, () => console.log("Servidor rodando"));
});
