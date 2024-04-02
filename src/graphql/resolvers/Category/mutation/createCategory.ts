import { prisma } from "../../../../conf/prisma";

export const create_category=async ({input},_contx)=>{
    const {name,img}= input;

    try{
       const x = await prisma.category.create({
        data:{
            img,
            name
        }
       })
console.log(JSON.stringify(x))
    }catch(err){
        throw err
    }


    return "category created"
}