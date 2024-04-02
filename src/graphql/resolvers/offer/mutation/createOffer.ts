import { prisma } from "../../../../conf/prisma";
import { pubSub } from "../../resolvers";

export const create_offer=async ({input},_contx)=>{

    
    const {name,img}= input;

    try{
       const CreateOffer = await prisma.offer.create({
        data:{
            name,img
        }
       })
       await pubSub.publish("create_offerSub", {
        CREATE_OFFER_SUB: CreateOffer,
      });
  
    }catch(err){
        throw err
    }
    
    return "offer created"
}