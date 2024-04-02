import { prisma } from "../../../../conf/prisma";

export const create_offer=async ({input},_contx)=>{

    
    const {name,img}= input;

    try{
       const x = await prisma.offer.create({
        data:{
            name,img
        }
       })
console.log(JSON.stringify(x))
    }catch(err){
        throw err
    }


    return "offer created"
}