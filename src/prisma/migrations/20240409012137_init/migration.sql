-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "wishListId" TEXT;

-- CreateTable
CREATE TABLE "WishList" (
    "id" TEXT NOT NULL,
    "ProductId" TEXT NOT NULL DEFAULT '',
    "user_id" TEXT NOT NULL,
    "number" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WishList_user_id_key" ON "WishList"("user_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "WishList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
