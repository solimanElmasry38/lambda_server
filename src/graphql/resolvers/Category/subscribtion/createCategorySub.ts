import { pubSub } from "../../resolvers";

export const create_category_sub=()=>{

    return pubSub.asyncIterator("create_categorySub");
}