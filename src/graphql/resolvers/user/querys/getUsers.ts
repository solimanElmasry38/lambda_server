import { prisma } from "../../../../conf/prisma"
import { validate_token } from "../../../../utils/token"

export const get_users=async ({id,token})=>{

if(validate_token(token,id)){
    try{

        const usr =await prisma.user.findFirstOrThrow();
        return usr;
    }catch(err){
        throw err;
    }

}else{
    throw new Error("unauthrized")
}












}