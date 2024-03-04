import { prisma } from "../../../../conf/prisma";

export const add_to_cart = async ({ input }: any, _contx: {}) => {
  const { Product_id, usr_id } = input;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: Product_id,
      },
    });

    if (product?.count! === 0 ) {
      await prisma.product.update({
        where: {
          id: Product_id,
        },
        data: {
          is_available: false,
        },
      });
      throw new Error("out of stock");
    } else if (product?.count! < 1) {
      throw new Error("this count not avilable");
      // return ;
    } else {
      try {
        await prisma.product.update({
          where: {
            id: Product_id,
          },
          data: {
            count: product?.count! - 1,
          is_available: true,

            coun_in_cart: { increment: 1 },
          },
        });

        const cart = await prisma.cart.findFirst({
          where: {
            user_id: usr_id,
          },
        });

        if (cart) {
          await prisma.cart.update({
            where: {
              user_id: usr_id,
            },
            data: {
              ProductId: Product_id,
              product: {
                connect: { id: Product_id },
              },
            },
          });
          return "product added succsessfully";
        } else {
          try {
            await prisma.cart.create({
              data: {
                user_id: usr_id,
                ProductId: Product_id,
                product: {
                  connect: { id: Product_id },
                },
              },
            });

            return "cart create and product added succsessfully";
          } catch (err) {
            throw err;
          }
        }
      } catch (err) {
        throw err;
      }
    }
  } catch (err) {
    throw err;
  }
};
