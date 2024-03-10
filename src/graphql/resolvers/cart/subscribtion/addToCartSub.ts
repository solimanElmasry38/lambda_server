import { pubSub } from "../../resolvers";

export const add_to_cart_sub = () => {
  return pubSub.asyncIterator("add_toCartSub");
};
