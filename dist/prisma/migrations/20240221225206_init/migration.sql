/*
  Warnings:

  - The primary key for the `Rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Rating` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Rating_product_id_key";

-- AlterTable
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "product_id" SET DEFAULT '',
ADD CONSTRAINT "Rating_pkey" PRIMARY KEY ("user_id", "product_id");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
