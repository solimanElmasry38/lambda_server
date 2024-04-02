import { prisma } from "../../../../conf/prisma";
import { pubSub } from "../../resolvers";

export const create_category=async ({input},_contx)=>{
    const {name,img}= input;

    try{
       const createCategory = await prisma.category.create({
        data:{
            img,
            name
        }
       })
       await pubSub.publish("create_categorySub", {
        CREATE_CATEGORY_SUB:createCategory,
      });
    }catch(err){
        throw err
    }


    return "category created"
}