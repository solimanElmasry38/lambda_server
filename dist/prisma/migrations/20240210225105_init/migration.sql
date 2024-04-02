/*
  Warnings:

  - You are about to drop the column `product_id` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_product_id_fkey";

-- DropIndex
DROP INDEX "Category_product_id_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category_id" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
