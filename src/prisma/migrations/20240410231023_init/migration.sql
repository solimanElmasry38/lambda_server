/*
  Warnings:

  - The primary key for the `WishList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WishList` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_wishListId_fkey";

-- AlterTable
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "WishList_pkey" PRIMARY KEY ("user_id", "ProductId");

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
