"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.pubSub = void 0;
const graphql_scalars_1 = require("graphql-scalars");
const createUser_1 = require("./user/mutations/createUser");
const verifyEmail_1 = require("./user/mutations/verifyEmail");
const login_1 = require("./user/mutations/login");
const getUsers_1 = require("./user/querys/getUsers");
const getUser_1 = require("./user/querys/getUser");
const getOffers_1 = require("./offer/query/getOffers");
const getProducts_1 = require("./product/querys/getProducts");
const getProduct_1 = require("./product/querys/getProduct");
const addToCart_1 = require("./cart/mutation/addToCart");
const getCategory_1 = require("./Category/query/getCategory");
const getCategorys_1 = require("./Category/query/getCategorys");
const GetReview_1 = require("./review/query/GetReview");
const getCartProducts_1 = require("./cart/query/getCartProducts");
const isAvilable_1 = require("./cart/query/isAvilable");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const addToCartSub_1 = require("./cart/subscribtion/addToCartSub");
const getCartCount_1 = require("./cart/query/getCartCount");
const removeProduct_1 = require("./product/mutation/removeProduct");
const removeOffers_1 = require("./offer/mutation/removeOffers");
const removeUsers_1 = require("./user/mutations/removeUsers");
const removeCategory_1 = require("./Category/mutation/removeCategory");
exports.pubSub = new graphql_subscriptions_1.PubSub();
exports.resolvers = {
    DateTime: graphql_scalars_1.DateTimeResolver,
    Query: {
        USERS_GET: (_, args, contx) => (0, getUsers_1.get_users)(args, contx),
        USER_GET: (_, args, contx) => (0, getUser_1.get_user)(args, contx),
        OFFERS_GET: (_, args, contx) => (0, getOffers_1.get_offers)(args, contx),
        PRODUCTS_GET: (_, args, contx) => (0, getProducts_1.get_products)(args, contx),
        PRODUCT_GET: (_, args, contx) => (0, getProduct_1.get_product)(args, contx),
        GET_CATEGORY: (_, args, contx) => (0, getCategory_1.get_category)(args, contx),
        GET_CATEGORYS: (_, _args, contx) => (0, getCategorys_1.get_categorys)(contx),
        GET_PRODUCT_REVIEWS: (_, args, contx) => (0, GetReview_1.get_review)(args, contx),
        GET_CART_PRODUCTS: (_, args, contx) => (0, getCartProducts_1.get_cart_prodcuts)(args, contx),
        IS_AVILABLE: (_, args, contx) => (0, isAvilable_1.is_avilable)(args, contx),
        GET_CART_COUNT: (_, args, contx) => (0, getCartCount_1.getCartCount)(args, contx),
    },
    Mutation: {
        USER_CREATE: (_, args, contx) => (0, createUser_1.create_user)(args, contx),
        VERIFY_EMAIL: (_, args, contx) => (0, verifyEmail_1.verify_email)(args, contx),
        LOGIN: (_, args, contx) => (0, login_1.login)(args, contx),
        ADD_TO_CART: (_, args, contx) => (0, addToCart_1.add_to_cart)(args, contx),
        REMOVE_PRODUCT: (_, args, contx) => (0, removeProduct_1.remove_product)(args, contx),
        REMOVER_OFFERS: (_, args, contx) => (0, removeOffers_1.remove_offers)(args, contx),
        REMOVER_USERS: (_, args, contx) => (0, removeUsers_1.remove_users)(args, contx),
        REMOVER_CATEGORYS: (_, args, contx) => (0, removeCategory_1.remove_categorys)(args, contx),
    },
    Subscription: {
        ADD_TO_CART_SUB: {
            subscribe: () => {
                return (0, addToCartSub_1.add_to_cart_sub)();
            },
        },
    },
};
