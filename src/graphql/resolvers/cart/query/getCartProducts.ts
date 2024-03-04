
import { prisma } from "../../../../conf/prisma";

export const get_cart_prodcuts = async ({ input }, _contx) => {
    const {usr_id}=input;

    const products = await prisma.cart.findFirst({
        where:{
            user_id:usr_id
        },
        include:{
            product:true
        }
    });
    console.log(JSON.stringify(products?.product));
    return products?.product;

};
