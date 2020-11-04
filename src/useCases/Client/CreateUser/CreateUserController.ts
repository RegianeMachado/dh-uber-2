import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

export default class CreateUserController {
  constructor(private CreateUserUseCase: CreateUserUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { email, password } = request.body;

    try {
      await this.CreateUserUseCase.execute({ email, password });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Não foi possível identificar o erro",
      });
    }
  };
}
