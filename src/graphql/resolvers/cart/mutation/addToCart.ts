import { prisma } from "../../../../conf/prisma"
import { validate_token } from "../../../../utils/token"

export const add_to_cart=async ({input},_contx)=>{
    const{usr_id,token,product_id}=input
if(validate_token(token,usr_id)){
const Cart= await prisma.cartItems.create({
   data:{
        user_id:usr_id,
        product_id:product_id
    }
})
console.log(JSON.stringify(Cart))
return "cart"
}else{
    throw new Error("unAuthrized")
}
}