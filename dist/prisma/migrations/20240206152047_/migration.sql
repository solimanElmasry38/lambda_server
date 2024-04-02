/*
  Warnings:

  - A unique constraint covering the columns `[cart_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cart_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "cart_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_cart_id_key" ON "Product"("cart_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
