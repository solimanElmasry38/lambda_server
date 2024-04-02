import { pubSub } from "../../resolvers";

export const create_product_sub=()=>{
    return pubSub.asyncIterator("create_productSub");
}