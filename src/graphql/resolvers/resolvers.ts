import { DateTimeResolver } from "graphql-scalars";
import { IcreateUser, create_user } from "./user/mutations/createUser";
import { IverifyEmail, verify_email } from "./user/mutations/verifyEmail";
import { Ilogin, login } from "./user/mutations/login";
import { IgetUsers, get_users } from "./user/querys/getUsers";
import { get_user } from "./user/querys/getUser";
import { IgetOffers, get_offers } from "./offer/mutation/getOffers";
import { get_products } from "./product/querys/getProducts";
import { IgetProduct, get_product } from "./product/querys/getProduct";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    USERS_GET: (_: any, args: IgetUsers, contx: {}) => get_users(args, contx),
    USER_GET: (_: any,  args : IgetUsers,contx: {}) =>get_user(args,contx),
    OFFERS_GET:(_: any, args: IgetOffers, contx: {})=>get_offers(args, contx),
    PRODUCTS_GET:()=> get_products(),
    PRODUCT_GET:(_: any, args:IgetProduct, contx: {})=>get_product(args,contx)
  },

  Mutation: {
    USER_CREATE: (_: any, args: IcreateUser, contx: {}) =>
      create_user(args, contx),

    VERIFY_EMAIL: (_: any, args: IverifyEmail, contx: {}) =>
      verify_email(args, contx),

    LOGIN: (_: any, args: Ilogin, contx: {}) => login(args, contx),
  },
};
