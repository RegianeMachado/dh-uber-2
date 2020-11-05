import { Request, Response } from "express";
import CreateDriverCase from "./CreateDriverCase";

export default class CreateDriverController {
  constructor(private CreateDriverCase: CreateDriverCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { placa, carro } = request.body;

    try {
      await this.CreateDriverCase.execute({ placa, carro });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Não foi possível identificar o erro",
      });
    }
  };
}
