/*
  Warnings:

  - Added the required column `product_count` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItems" ADD COLUMN     "product_count" INTEGER NOT NULL;
