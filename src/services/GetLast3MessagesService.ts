import prismaClient from "./../prisma";

class GetLast3MessagesService {
  async execute() {
    const messsage = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });

    return messsage;
  }
}
export { GetLast3MessagesService };
