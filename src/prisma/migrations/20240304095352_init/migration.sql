/*
  Warnings:

  - You are about to drop the column `C_product_id` on the `Cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "C_product_id",
ADD COLUMN     "number" INTEGER NOT NULL DEFAULT 0;
