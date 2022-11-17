import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../middlewares/AppError";

export interface IRequest {
  id: string;
  accountId: string;
}

export class GetAccountBalanceUseCase {
  public async execute({ id, accountId }: IRequest) {
    if (accountId != id) {
      throw new AppError("Operação não permitida");
    }
    const accountExist = await prisma.accounts.findFirst({
      where: {
        id,
      },
    });

    return accountExist;
  }
}
