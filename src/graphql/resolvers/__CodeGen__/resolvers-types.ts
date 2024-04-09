import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthInp = {
  input:{
    id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  }
};

export type Cart = {
  __typename?: 'Cart';
  ProductId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type CartCount = {
  __typename?: 'CartCount';
  ProductsInCart?: Maybe<Scalars['Int']['output']>;
};

export type CategInp = {
  Categ_name?: InputMaybe<Scalars['String']['input']>;
};

export type GetReviewsInp = {
  Product_id?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  __typename?: 'Id';
  id?: Maybe<Scalars['ID']['output']>;
};

export type IsAvInp = {
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ADD_TO_CART?: Maybe<AddToCart>;
  CREATE_CATEGORY?: Maybe<Scalars['String']['output']>;
  CREATE_OFFER?: Maybe<Scalars['String']['output']>;
  CREATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  LOGIN?: Maybe<Token>;
  RATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  REMOVER_CATEGORYS?: Maybe<Scalars['String']['output']>;
  REMOVER_OFFERS?: Maybe<Scalars['String']['output']>;
  REMOVER_USERS?: Maybe<Scalars['String']['output']>;
  REMOVE_PRODUCT?: Maybe<Scalars['String']['output']>;
  USER_CREATE?: Maybe<Id>;
  VERIFY_EMAIL?: Maybe<Token>;
};


export type MutationAdd_To_CartArgs = {
  input?: InputMaybe<AddToCartInp>;
};


export type MutationCreate_CategoryArgs = {
  input?: InputMaybe<CreateCategoryInp>;
};


export type MutationCreate_OfferArgs = {
  input?: InputMaybe<CreateOfferInp>;
};


export type MutationCreate_ProductArgs = {
  input?: InputMaybe<CreateProductInp>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInp>;
};


export type MutationRate_ProductArgs = {
  input?: InputMaybe<ReatingInp>;
};


export type MutationRemover_CategorysArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemover_OffersArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemover_UsersArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemove_ProductArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationUser_CreateArgs = {
  input?: InputMaybe<UserInp>;
};


export type MutationVerify_EmailArgs = {
  input?: InputMaybe<VerifyInp>;
};

export type Offer = {
  __typename?: 'Offer';
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  categorys?: Maybe<Category>;
  coun_in_cart?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  is_available?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  CART_PRODUCTS_GET?: Maybe<CartPoducts>;
  GET_CART_COUNT?: Maybe<Scalars['Int']['output']>;
  GET_CATEGORY?: Maybe<Category>;
  GET_CATEGORYS?: Maybe<Array<Maybe<Category>>>;
  GET_PRODUCT_REVIEWS?: Maybe<Review>;
  IS_AVILABLE?: Maybe<Scalars['Boolean']['output']>;
  MAIN_QU?: Maybe<Scalars['String']['output']>;
  MAIN_QUERY?: Maybe<Scalars['String']['output']>;
  OFFERS_GET?: Maybe<Array<Maybe<Offer>>>;
  PRODUCTS_GET?: Maybe<Array<Maybe<Product>>>;
  PRODUCT_GET?: Maybe<Product>;
  USERS_GET?: Maybe<Array<Maybe<User>>>;
  USER_GET?: Maybe<User>;
};


export type QueryCart_Products_GetArgs = {
  input?: InputMaybe<GetCartInp>;
};


export type QueryGet_Cart_CountArgs = {
  input?: InputMaybe<GetCartCountInp>;
};


export type QueryGet_CategoryArgs = {
  input?: InputMaybe<CategInp>;
};


export type QueryGet_Product_ReviewsArgs = {
  input?: InputMaybe<GetReviewsInp>;
};


export type QueryIs_AvilableArgs = {
  input?: InputMaybe<IsAvInp>;
};


export type QueryOffers_GetArgs = {
  input?: InputMaybe<OfferInp>;
};


export type QueryProducts_GetArgs = {
  input?: InputMaybe<ProdsInp>;
};


export type QueryProduct_GetArgs = {
  input?: InputMaybe<ProdInp>;
};


export type QueryUsers_GetArgs = {
  input?: InputMaybe<AuthInp>;
};


export type QueryUser_GetArgs = {
  input?: InputMaybe<AuthInp>;
};

export type ReatingInp = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  reating?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  ADD_TO_CART_SUB?: Maybe<CartCount>;
  CREATE_CATEGORY_SUB?: Maybe<Category>;
  CREATE_OFFER_SUB?: Maybe<Offer>;
  CREATE_PRODUCT_SUB?: Maybe<Product>;
};

export type Token = {
  __typename?: 'Token';
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  Cart?: Maybe<Cart>;
  WishList?: Maybe<WishList>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  joined_at?: Maybe<Scalars['DateTime']['output']>;
  last_update?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export type UserInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type AddToCart = {
  __typename?: 'addToCart';
  availability?: Maybe<Scalars['Boolean']['output']>;
  cartLength?: Maybe<Scalars['Int']['output']>;
};

export type AddToCartInp = {
  Product_count?: InputMaybe<Scalars['Int']['input']>;
  Product_id?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type CartPoducts = {
  __typename?: 'cartPoducts';
  TotalProductInCart?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type Category = {
  __typename?: 'category';
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
};

export type CreateCategoryInp = {
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOfferInp = {
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInp = {
  count?: InputMaybe<Scalars['Int']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  is_available?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCartCountInp = {
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type GetCartInp = {
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type OfferInp = {
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type ProdInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProdsInp = {
  byCategory?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderByName?: InputMaybe<Sort>;
};

export type RemoveProdInp = {
  Ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Review = {
  __typename?: 'review';
  review?: Maybe<Scalars['Int']['output']>;
};

export type VerifyInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
};

export type WishList = {
  __typename?: 'wishList';
  ProductId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthInp: AuthInp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartCount: ResolverTypeWrapper<CartCount>;
  CategInp: CategInp;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  GetReviewsInp: GetReviewsInp;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Id: ResolverTypeWrapper<Id>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IsAvInp: IsAvInp;
  LoginInp: LoginInp;
  Mutation: ResolverTypeWrapper<{}>;
  Offer: ResolverTypeWrapper<Offer>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  ReatingInp: ReatingInp;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  UserInp: UserInp;
  addToCart: ResolverTypeWrapper<AddToCart>;
  addToCartInp: AddToCartInp;
  cartPoducts: ResolverTypeWrapper<CartPoducts>;
  category: ResolverTypeWrapper<Category>;
  createCategoryInp: CreateCategoryInp;
  createOfferInp: CreateOfferInp;
  createProductInp: CreateProductInp;
  getCartCountInp: GetCartCountInp;
  getCartInp: GetCartInp;
  offerInp: OfferInp;
  prodInp: ProdInp;
  prodsInp: ProdsInp;
  removeProdInp: RemoveProdInp;
  review: ResolverTypeWrapper<Review>;
  verifyInp: VerifyInp;
  wishList: ResolverTypeWrapper<WishList>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthInp: AuthInp;
  Boolean: Scalars['Boolean']['output'];
  Cart: Cart;
  CartCount: CartCount;
  CategInp: CategInp;
  DateTime: Scalars['DateTime']['output'];
  GetReviewsInp: GetReviewsInp;
  ID: Scalars['ID']['output'];
  Id: Id;
  Int: Scalars['Int']['output'];
  IsAvInp: IsAvInp;
  LoginInp: LoginInp;
  Mutation: {};
  Offer: Offer;
  Product: Product;
  Query: {};
  ReatingInp: ReatingInp;
  String: Scalars['String']['output'];
  Subscription: {};
  Token: Token;
  User: User;
  UserInp: UserInp;
  addToCart: AddToCart;
  addToCartInp: AddToCartInp;
  cartPoducts: CartPoducts;
  category: Category;
  createCategoryInp: CreateCategoryInp;
  createOfferInp: CreateOfferInp;
  createProductInp: CreateProductInp;
  getCartCountInp: GetCartCountInp;
  getCartInp: GetCartInp;
  offerInp: OfferInp;
  prodInp: ProdInp;
  prodsInp: ProdsInp;
  removeProdInp: RemoveProdInp;
  review: Review;
  verifyInp: VerifyInp;
  wishList: WishList;
}>;

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  ProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartCount'] = ResolversParentTypes['CartCount']> = ResolversObject<{
  ProductsInCart?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Id'] = ResolversParentTypes['Id']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ADD_TO_CART?: Resolver<Maybe<ResolversTypes['addToCart']>, ParentType, ContextType, Partial<MutationAdd_To_CartArgs>>;
  CREATE_CATEGORY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreate_CategoryArgs>>;
  CREATE_OFFER?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreate_OfferArgs>>;
  CREATE_PRODUCT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreate_ProductArgs>>;
  LOGIN?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  RATE_PRODUCT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRate_ProductArgs>>;
  REMOVER_CATEGORYS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRemover_CategorysArgs>>;
  REMOVER_OFFERS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRemover_OffersArgs>>;
  REMOVER_USERS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRemover_UsersArgs>>;
  REMOVE_PRODUCT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRemove_ProductArgs>>;
  USER_CREATE?: Resolver<Maybe<ResolversTypes['Id']>, ParentType, ContextType, Partial<MutationUser_CreateArgs>>;
  VERIFY_EMAIL?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, Partial<MutationVerify_EmailArgs>>;
}>;

export type OfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  categorys?: Resolver<Maybe<ResolversTypes['category']>, ParentType, ContextType>;
  coun_in_cart?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  CART_PRODUCTS_GET?: Resolver<Maybe<ResolversTypes['cartPoducts']>, ParentType, ContextType, Partial<QueryCart_Products_GetArgs>>;
  GET_CART_COUNT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<QueryGet_Cart_CountArgs>>;
  GET_CATEGORY?: Resolver<Maybe<ResolversTypes['category']>, ParentType, ContextType, Partial<QueryGet_CategoryArgs>>;
  GET_CATEGORYS?: Resolver<Maybe<Array<Maybe<ResolversTypes['category']>>>, ParentType, ContextType>;
  GET_PRODUCT_REVIEWS?: Resolver<Maybe<ResolversTypes['review']>, ParentType, ContextType, Partial<QueryGet_Product_ReviewsArgs>>;
  IS_AVILABLE?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<QueryIs_AvilableArgs>>;
  MAIN_QU?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  MAIN_QUERY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OFFERS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['Offer']>>>, ParentType, ContextType, Partial<QueryOffers_GetArgs>>;
  PRODUCTS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryProducts_GetArgs>>;
  PRODUCT_GET?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProduct_GetArgs>>;
  USERS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryUsers_GetArgs>>;
  USER_GET?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUser_GetArgs>>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  ADD_TO_CART_SUB?: SubscriptionResolver<Maybe<ResolversTypes['CartCount']>, "ADD_TO_CART_SUB", ParentType, ContextType>;
  CREATE_CATEGORY_SUB?: SubscriptionResolver<Maybe<ResolversTypes['category']>, "CREATE_CATEGORY_SUB", ParentType, ContextType>;
  CREATE_OFFER_SUB?: SubscriptionResolver<Maybe<ResolversTypes['Offer']>, "CREATE_OFFER_SUB", ParentType, ContextType>;
  CREATE_PRODUCT_SUB?: SubscriptionResolver<Maybe<ResolversTypes['Product']>, "CREATE_PRODUCT_SUB", ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  Cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  WishList?: Resolver<Maybe<ResolversTypes['wishList']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_admin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  joined_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_update?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddToCartResolvers<ContextType = any, ParentType extends ResolversParentTypes['addToCart'] = ResolversParentTypes['addToCart']> = ResolversObject<{
  availability?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cartLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartPoductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cartPoducts'] = ResolversParentTypes['cartPoducts']> = ResolversObject<{
  TotalProductInCart?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['category'] = ResolversParentTypes['category']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['review'] = ResolversParentTypes['review']> = ResolversObject<{
  review?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WishListResolvers<ContextType = any, ParentType extends ResolversParentTypes['wishList'] = ResolversParentTypes['wishList']> = ResolversObject<{
  ProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Cart?: CartResolvers<ContextType>;
  CartCount?: CartCountResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Id?: IdResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  addToCart?: AddToCartResolvers<ContextType>;
  cartPoducts?: CartPoductsResolvers<ContextType>;
  category?: CategoryResolvers<ContextType>;
  review?: ReviewResolvers<ContextType>;
  wishList?: WishListResolvers<ContextType>;
}>;

