import { prisma } from "../../../../conf/prisma";

export const create_raeting=async ({input},_ctx)=>{

    const {reating,product_id,user_id}=input;
    console.log(reating)
    console.log(product_id)
    
    console.log(user_id)

    try{

    
        await prisma.rating.create({
            data:{
                product_id:product_id,
                user_id,
                reating,
            }
            
        })
        return "thanks"
    
    }catch(err){
        throw err
    }
  
}