import { PrismaClient } from "@prisma/client";
import { runBackup } from "@vorlefan/prisma-backup";
export const prisma = new PrismaClient();

void (async function () {
  const [user, product, productReview, cart, category, 
    
    // wishList,
    
     offer] =
    await prisma.$transaction([
      prisma.user.findMany({}),
      prisma.product.findMany({}),
      prisma.productReview.findMany({}),
      prisma.cart.findMany({}),
      prisma.category.findMany({}),
    //   prisma.wishList.findMany({}),
      prisma.offer.findMany({}),
    ]);

  // w/out encrypt

  await runBackup({
    models: {
      user,
      product,
      productReview,
      cart,
      category,
    //   wishList,
      offer,
    },
  });

  // encrypting the models

  await runBackup({
    models: {
      user,
      product,
      productReview,
      cart,
      category,
    //   wishList,
      offer,
    },
    encrypt: true,
    password: "pwd123",
    backupFolderName: "encrypted",
  });
  console.log("backup  db  " )
})();
