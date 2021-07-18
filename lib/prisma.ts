import { PrismaClient } from "@prisma/client";

const prisma = () => {
  if(process.env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
      // @ts-ignore
      if (!global.prisma) {
      // @ts-ignore
      global.prisma = new PrismaClient();
    }
    // @ts-ignore
    return global.prisma
  }
}

export default prisma;