/*
  Warnings:

  - You are about to drop the column `cart_id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cart_id_fkey";

-- DropIndex
DROP INDEX "Product_cart_id_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cart_id";
