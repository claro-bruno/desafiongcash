import { Request, Response } from "express";
import { GetTransactionsByAccountUseCase } from "./GetTransactionsByAccountUseCase";

export class GetTransactionsByAccountController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { filter } = request.body;
    const getTransactionsByAccountUseCase =
      new GetTransactionsByAccountUseCase();
    const result = await getTransactionsByAccountUseCase.execute(id, filter);

    return response.json({ transactions: result });
  }
}
