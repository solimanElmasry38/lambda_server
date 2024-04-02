/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rating_product_id_key" ON "Rating"("product_id");
