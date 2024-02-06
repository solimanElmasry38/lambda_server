-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cart_id_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "cart_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
