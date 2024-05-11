/*
  Warnings:

  - You are about to drop the `WishList` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[wishListId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_ProductId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_user_id_fkey";

-- DropTable
DROP TABLE "WishList";

-- CreateIndex
CREATE UNIQUE INDEX "Product_wishListId_key" ON "Product"("wishListId");
