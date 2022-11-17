import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../middlewares/AppError";

export class GetTransactionsByAccountUseCase {
  async execute(id: string, filter: string) {
    const accountExist = await prisma.accounts.findFirst({
      where: {
        id,
      },
    });

    if (!accountExist) {
      throw new AppError("Conta inexistente");
    }
    if (!filter) {
      const transations = await prisma.transactions.findMany({
        where: {
          OR: [
            {
              debitedAccountId: id,
            },
            {
              creditedAccountId: id,
            },
          ],
        },
      });
      return transations;
    }
    if (filter == "cash-in") {
      const transations = await prisma.transactions.findMany({
        where: {
          creditedAccountId: id,
        },
      });
      return transations;
    }

    if (filter == "cash-out") {
      const transations = await prisma.transactions.findMany({
        where: {
          debitedAccountId: id,
        },
      });
      return transations;
    }
  }
}
