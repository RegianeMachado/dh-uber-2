import { Request, Response } from "express";
import CreateUserRunningCase from "./CreateUserRunningCase";

export default class CreateRunningController {
  constructor(private CreateUserRunningCase:CreateUserRunningCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { origem, destino, status, user, driver } = request.body;

    try {
      await this.CreateUserRunningCase.execute({ origem, destino, status, user, driver  })
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Não foi possível identificar o erro",
      });
    }
  };
}
