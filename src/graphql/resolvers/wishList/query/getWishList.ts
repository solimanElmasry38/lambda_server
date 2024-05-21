import { prisma } from "../../../../conf/prisma";

export const get_wish_list=async ({input},_ctx:{})=>{
    const {usr_id}=input;

    try{
        const wishlist=await prisma.wishList.findFirst({
            where:{
                user_id:usr_id
            },
            include:{
                product:true
            }
        })
        console.log(wishlist?.product)
return wishlist?.product;
    }catch(err){
        throw err
    }
}