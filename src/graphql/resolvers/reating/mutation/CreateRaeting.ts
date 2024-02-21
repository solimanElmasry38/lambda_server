import { prisma } from "../../../../conf/prisma";

export const create_raeting=async ({input},_ctx)=>{

    try{
        const {reating,product_id}=input;
        await prisma.rating.create({
            data:{
                product_id:product_id,
                reating
            }
        })
        return "thanks"
    
    }catch(err){
        throw err
    }
  
}