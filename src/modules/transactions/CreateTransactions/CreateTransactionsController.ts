import { Request, Response } from "express";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";

export class CreateTransactionsController {
  async handle(request: Request, response: Response) {
    console.log(request.body);
    const { accountId: id, username, value } = request.body;
    const { accountId } = request;
    const createTransactionsUseCase = new CreateTransactionsUseCase();
    const result = await createTransactionsUseCase.execute({
      id,
      username,
      valor: value,
      accountId,
    });

    return response.json(result);
  }
}
