/*
  Warnings:

  - You are about to drop the column `rating` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `reating` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "rating",
ADD COLUMN     "reating" INTEGER NOT NULL;
