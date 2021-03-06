import { Request, Response } from "express";
import ListUserRunningCase from "./ListUserRunningCase";

export default class ListUserRunningController {
  constructor(private ListUserRunningCase: ListUserRunningCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const run = await this.ListUserRunningCase.execute();
      return response.status(201).json(run);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Não foi possível identificar o erro",
      });
    }
  };
}
