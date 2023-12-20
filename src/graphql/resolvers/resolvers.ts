import { DateTimeResolver } from "graphql-scalars";
import { IcreateUser, create_user } from "./user/mutations/createUser";
import { IverifyEmail, verify_email } from "./user/mutations/verifyEmail";
import { Ilogin, login } from "./user/mutations/login";
import { IgetUsers, get_users } from "./user/querys/getUsers";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    USERS_GET: (_: any, args: IgetUsers, contx: {}) => get_users(args, contx),
    USER_GET: (_: any, { input }: any) => {
      return input;
    },
  },

  Mutation: {
    USER_CREATE: (_: any, args: IcreateUser, contx: {}) =>
      create_user(args, contx),

    VERIFY_EMAIL: (_: any, args: IverifyEmail, contx: {}) =>
      verify_email(args, contx),

    LOGIN: (_: any, args: Ilogin, contx: {}) => login(args, contx),
  },
};
