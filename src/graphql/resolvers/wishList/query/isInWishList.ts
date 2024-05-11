import { prisma } from "../../../../conf/prisma";

export const is_in_wish_list=async ({input},_ctx):Promise<boolean>=>{
    
  const {productId,usetId}=input;

  const wishList=await prisma.wishList.findFirst({
    where:{
        user_id:usetId
       
    },
    include:{
        product:{
            where:{
id:productId
            }
        }
    }
  })
 
return wishList?.product!.length! > 0

}