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

export type AddCrtInp = {
  product_id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategInp = {
  Categ_name?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type CategsInp = {
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type GetReviewsInp = {
  Product_id?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  __typename?: 'Id';
  id?: Maybe<Scalars['ID']['output']>;
};

export type LoginInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ADD_TO_CART?: Maybe<Scalars['String']['output']>;
  LOGIN?: Maybe<Token>;
  RATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  USER_CREATE?: Maybe<Id>;
  VERIFY_EMAIL?: Maybe<Token>;
};


export type MutationAdd_To_CartArgs = {
  input?: InputMaybe<AddCrtInp>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInp>;
};


export type MutationRate_ProductArgs = {
  input?: InputMaybe<ReatingInp>;
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
  GET_CATEGORY?: Maybe<Category>;
  GET_CATEGORYS?: Maybe<Array<Maybe<Category>>>;
  GET_PRODUCT_REVIEWS?: Maybe<Review>;
  OFFERS_GET?: Maybe<Array<Maybe<Offer>>>;
  PRODUCTS_GET?: Maybe<Array<Maybe<Product>>>;
  PRODUCT_GET?: Maybe<Product>;
  USERS_GET?: Maybe<Array<Maybe<User>>>;
  USER_GET?: Maybe<User>;
};


export type QueryGet_CategoryArgs = {
  input?: InputMaybe<CategInp>;
};


export type QueryGet_CategorysArgs = {
  input?: InputMaybe<CategsInp>;
};


export type QueryGet_Product_ReviewsArgs = {
  input?: InputMaybe<GetReviewsInp>;
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

export type Token = {
  __typename?: 'Token';
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  Cart?: Maybe<Cart>;
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

export type Category = {
  __typename?: 'category';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
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

export type Review = {
  __typename?: 'review';
  review?: Maybe<Scalars['Int']['output']>;
};

export type VerifyInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
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
  AddCrtInp: AddCrtInp;
  AuthInp: AuthInp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cart: ResolverTypeWrapper<Cart>;
  CategInp: CategInp;
  CategsInp: CategsInp;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  GetReviewsInp: GetReviewsInp;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Id: ResolverTypeWrapper<Id>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginInp: LoginInp;
  Mutation: ResolverTypeWrapper<{}>;
  Offer: ResolverTypeWrapper<Offer>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  ReatingInp: ReatingInp;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  UserInp: UserInp;
  category: ResolverTypeWrapper<Category>;
  offerInp: OfferInp;
  prodInp: ProdInp;
  prodsInp: ProdsInp;
  review: ResolverTypeWrapper<Review>;
  verifyInp: VerifyInp;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddCrtInp: AddCrtInp;
  AuthInp: AuthInp;
  Boolean: Scalars['Boolean']['output'];
  Cart: Cart;
  CategInp: CategInp;
  CategsInp: CategsInp;
  DateTime: Scalars['DateTime']['output'];
  GetReviewsInp: GetReviewsInp;
  ID: Scalars['ID']['output'];
  Id: Id;
  Int: Scalars['Int']['output'];
  LoginInp: LoginInp;
  Mutation: {};
  Offer: Offer;
  Product: Product;
  Query: {};
  ReatingInp: ReatingInp;
  String: Scalars['String']['output'];
  Token: Token;
  User: User;
  UserInp: UserInp;
  category: Category;
  offerInp: OfferInp;
  prodInp: ProdInp;
  prodsInp: ProdsInp;
  review: Review;
  verifyInp: VerifyInp;
}>;

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
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
  ADD_TO_CART?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationAdd_To_CartArgs>>;
  LOGIN?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  RATE_PRODUCT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationRate_ProductArgs>>;
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
  GET_CATEGORY?: Resolver<Maybe<ResolversTypes['category']>, ParentType, ContextType, Partial<QueryGet_CategoryArgs>>;
  GET_CATEGORYS?: Resolver<Maybe<Array<Maybe<ResolversTypes['category']>>>, ParentType, ContextType, Partial<QueryGet_CategorysArgs>>;
  GET_PRODUCT_REVIEWS?: Resolver<Maybe<ResolversTypes['review']>, ParentType, ContextType, Partial<QueryGet_Product_ReviewsArgs>>;
  OFFERS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['Offer']>>>, ParentType, ContextType, Partial<QueryOffers_GetArgs>>;
  PRODUCTS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryProducts_GetArgs>>;
  PRODUCT_GET?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProduct_GetArgs>>;
  USERS_GET?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryUsers_GetArgs>>;
  USER_GET?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUser_GetArgs>>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  Cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
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

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['category'] = ResolversParentTypes['category']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['review'] = ResolversParentTypes['review']> = ResolversObject<{
  review?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Cart?: CartResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Id?: IdResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  category?: CategoryResolvers<ContextType>;
  review?: ReviewResolvers<ContextType>;
}>;

