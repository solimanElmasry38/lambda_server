import { prisma } from "../../../../conf/prisma";

export const add_to_wish_list=async ({input},_ctx)=>{
    const {
        Product_id,
        usr_id
    }=input;
    try{


       await prisma.wishList.upsert({
        where: {
          user_id: usr_id,
        },
        update: {
            // user_id:usr_id,
            ProductId:Product_id,
            product:{
              connect:{id:Product_id}
            }
        },
        create: {
          user_id:usr_id,
          ProductId:Product_id,
          product:{
            connect:{id:Product_id}
          }
        },
      })
        return "added succ"
    }catch(err){
        throw err;
    }

}