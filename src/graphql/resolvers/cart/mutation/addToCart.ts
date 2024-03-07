import { prisma } from "../../../../conf/prisma";
import { pubSub } from "../../resolvers";


export const add_to_cart = async ({ input }: any, _contx: {}) => {
  const { Product_id, usr_id } = input;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: Product_id,
        count: {
          not: {
            equals: 0,
          },
        },
      },
    });
    // console.log(product?.count!)
    // if()
    if (!product) {
      return {
        availability:false,
        TotalProductInCart:0
      }
    } else {
      if (product?.count! < 1) {
        throw new Error("this count not avilable");
      } else {
        try {
          await prisma.product.update({
            where: {
              id: Product_id,
            },
            data: {
              count: product?.count! - 1,
              // is_available: true,

              coun_in_cart: { increment: 1 },
            },
          });
          // console.log(product?.is_available!)

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

             
            } catch (err) {
              throw err;
            }
          }
        } catch (err) {
          throw err;
        }
        const cart = await prisma.cart.findFirst({
          where: {
            user_id: usr_id,
          },
          include: {
            product: true,
          },
        });

        const TotalProductInCart = cart?.product.reduce((total, item) => {
          return total + item.coun_in_cart;
        }, 0);
        await pubSub.publish("click",  {
          addToCart:{

            home:"soly",
            price:233
          }
        });
        return {
          availability:true,
          TotalProductInCart
        }
      }
    }
  } catch (err) {
    throw err;
  }
};

// import { prisma } from "../../../../conf/prisma";

// export const add_to_cart = async ({ input }: any, _contx: {}) => {
//   const { Product_id, usr_id } = input;

//   try {
//     // Start a transaction
//     await prisma.$transaction([
//       // Update product availability
//       prisma.product.update({
//         where: { id: Product_id },
//         data: { is_available: true }, // Ensure availability is set to true
//       }),
//       // Decrement product count and increment count_in_cart
//       prisma.product.update({
//         where: { id: Product_id },
//         data: {
//           count: { decrement: 1 },
//           coun_in_cart: { increment: 1 },
//         },
//       }),
//       // Check if cart exists for the user
//       prisma.cart.upsert({
//         where: { user_id: usr_id },
//         update: {
//           ProductId: Product_id,
//           product: { connect: { id: Product_id } },
//         },
//         create: {
//           user_id: usr_id,
//           ProductId: Product_id,
//           product: { connect: { id: Product_id } },
//         },
//       }),
//     ]);

//     // Retrieve updated cart
//     const cart = await prisma.cart.findFirst({
//       where: { user_id: usr_id },
//       include: { product: true },
//     });

//     // Calculate total products in cart
//     const TotalProductInCart = cart?.product.reduce(
//       (total, item) => total + item.coun_in_cart,
//       0
//     );

//     return TotalProductInCart ?? 0; // Return total products in cart
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     throw err; // Throw error for further handling
//   }
// };

// import { prisma } from "../../../../conf/prisma";

// export const add_to_cart = async ({ input }: any, _contx: {}) => {
//   const { Product_id, usr_id } = input;

//   try {
//     // Check if product exists and is available
//     const product = await prisma.product.findFirst({
//       where: {
//         id: Product_id,
//         is_available: true,
//       },
//     });

//     if (!product) {
//       throw new Error("Product not found or not available");
//     }

//     // Update product availability to false
//     await prisma.product.update({
//       where: {
//         id: Product_id,
//       },
//       data: {
//         is_available: true,
//       },
//     });

//     // Decrement product count and increment count_in_cart
//     await prisma.product.update({
//       where: {
//         id: Product_id,
//       },
//       data: {
//         count: { decrement: 1 },
//         coun_in_cart: { increment: 1 },
//       },
//     });

//     // Check if cart exists for the user
//     const cart = await prisma.cart.upsert({
//       where: {
//         user_id: usr_id,
//       },
//       update: {
//         ProductId: Product_id,
//         product: { connect: { id: Product_id } },
//       },
//       create: {
//         user_id: usr_id,
//         ProductId: Product_id,
//         product: { connect: { id: Product_id } },
//       },
//       include: { product: true },
//     });

//     // Calculate total products in cart
//     const TotalProductInCart = cart.product.reduce(
//       (total, item) => total + item.coun_in_cart,
//       0
//     );

//     return TotalProductInCart;
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     throw err; // Throw error for further handling
//   }
// };
