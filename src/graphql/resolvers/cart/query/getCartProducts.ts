
import { prisma } from "../../../../conf/prisma";

export const get_cart_prodcuts = async ({ input }, _contx) => {
    const {usr_id}=input;

    const cart = await prisma.cart.findFirst({
        where:{
            user_id:usr_id
        },
        include:{
            product:true
        }
    });
    // console.log(JSON.stringify(products?.product));
    // console.log(JSON.stringify(products?.product));
    // const totalPrice = cart?.product.reduce((total, item) => {
    //         const productPrice = item.price;
    //         return total + item.coun_in_cart * productPrice;
    //       }, 0);


          const TotalProductInCart = cart?.product.reduce((total, item) => {
                return total + item.coun_in_cart ;
              }, 0);

    // console.log("cont is"+totalCount)
    return{
        products:cart?.product,
        TotalProductInCart
    } 

};

