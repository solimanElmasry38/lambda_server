import { pubSub } from "../../resolvers";

export const create_offer_sub=()=>{
    return pubSub.asyncIterator("create_offerSub");
}