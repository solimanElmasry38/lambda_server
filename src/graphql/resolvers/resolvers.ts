import { DateTimeResolver } from "graphql-scalars";
import { IcreateUser, create_user } from "./user/mutations/createUser";
import { IverifyEmail, verify_email } from "./user/mutations/verifyEmail";
import { Ilogin, login } from "./user/mutations/login";
import { IgetUsers, get_users } from "./user/querys/getUsers";
import { get_user } from "./user/querys/getUser";
import { IgetOffers, get_offers } from "./offer/query/getOffers";
import { get_products } from "./product/querys/getProducts";
import { IgetProduct, get_product } from "./product/querys/getProduct";
import { add_to_cart } from "./cart/mutation/addToCart";
import { get_category } from "./Category/query/getCategory";
import { get_categorys } from "./Category/query/getCategorys";
import { get_review } from "./review/query/GetReview";
import { get_cart_prodcuts } from "./cart/query/getCartProducts";
import { is_avilable } from "./cart/query/isAvilable";
import { PubSub } from "graphql-subscriptions";
import { add_to_cart_sub } from "./cart/subscribtion/addToCartSub";
import { getCartCount } from "./cart/query/getCartCount";
import { remove_product } from "./product/mutation/removeProduct";
import { remove_offers } from "./offer/mutation/removeOffers";
import { remove_users } from "./user/mutations/removeUsers";
import { remove_categorys } from "./Category/mutation/removeCategory";
import { create_category } from "./Category/mutation/createCategory";
import { create_product } from "./product/mutation/createProduct";
import { create_offer } from "./offer/mutation/createOffer";
import { create_product_sub } from "./product/subscribtion/createProductSub";
import { create_offer_sub } from "./offer/subscribtion/createOfferSub";
import { create_category_sub } from "./Category/subscribtion/createCategorySub";
export const pubSub = new PubSub();

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    USERS_GET: (_: any, args: IgetUsers, contx: {}) => get_users(args, contx),
    USER_GET: (_: any, args:any, contx: {}) => get_user(args, contx),
    OFFERS_GET: (_: any, args: IgetOffers, contx: {}) =>
      get_offers(args, contx),
    PRODUCTS_GET: (_, args, contx) => get_products(args, contx),
    PRODUCT_GET: (_: any, args: IgetProduct, contx: {}) =>
      get_product(args, contx),
    GET_CATEGORY: (_: any, args: any, contx: {}) => get_category(args, contx),
    GET_CATEGORYS: (_: any, _args: any, contx: {}) => get_categorys(contx),
    GET_PRODUCT_REVIEWS: (_: any, args: any, contx: {}) =>
      get_review(args, contx),

      CART_PRODUCTS_GET: (_: any, args, contx: {}) =>
      get_cart_prodcuts(args, contx),

    IS_AVILABLE: (_: any, args, contx: {}) => is_avilable(args, contx),
    GET_CART_COUNT: (_: any, args, contx: {}) => getCartCount(args, contx),
    MAIN_QUERY:()=>"server deployed secc",
    MAIN_QU:()=>"ci pipline"
  },

  Mutation: {
    USER_CREATE: (_: any, args: IcreateUser, contx: {}) =>
      create_user(args, contx),

    VERIFY_EMAIL: (_: any, args: IverifyEmail, contx: {}) =>
      verify_email(args, contx),

    LOGIN: (_: any, args: Ilogin, contx: {}) => login(args, contx),

    ADD_TO_CART: (_: any, args, contx: {}) => add_to_cart(args, contx),
    REMOVE_PRODUCT: (_: any, args, contx: {}) => remove_product(args, contx),

    REMOVER_OFFERS: (_: any, args, contx: {}) => remove_offers(args, contx),
    REMOVER_USERS: (_: any, args, contx: {}) => remove_users(args, contx),
    REMOVER_CATEGORYS: (_: any, args, contx: {}) =>
      remove_categorys(args, contx),

    CREATE_CATEGORY: (_: any, args, contx: {}) => create_category(args, contx),
    CREATE_PRODUCT: (_: any, args, contx: {}) => create_product(args, contx),
    CREATE_OFFER: (_: any, args, contx: {}) => create_offer(args, contx),
  },
  Subscription: {
    ADD_TO_CART_SUB: {
      subscribe: () => {
        return add_to_cart_sub();

      },
    },
    CREATE_PRODUCT_SUB: {
      subscribe: () => {
        return create_product_sub();
      },
    },
  CREATE_OFFER_SUB: {
    subscribe: () => {
      return create_offer_sub();
    },
  },
  CREATE_CATEGORY_SUB: {
    subscribe: () => {
      return create_category_sub();
    },
  },
  },
};
