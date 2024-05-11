import { prisma } from "../../../../conf/prisma";

export interface IgetCategorys {
  input: {
    
    usr_id: string;
    usr_token: string;
  };
}


export const get_categorys = async ( {input},_contx: {}) => {

const {takeCount}=input;
console.log("count is  categ "+takeCount)
if(takeCount){
  try {
    const result = await prisma.category.findMany({
      take:takeCount,
      include: {
        product: true,
      },
    });

    return result;
  } catch (err) {
    throw err;
  }
}else{
  try {
    const result = await prisma.category.findMany();

    return result;
  } catch (err) {
    throw err;
  }
}
    

};
