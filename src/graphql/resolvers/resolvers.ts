import { DateTimeResolver } from "graphql-scalars";
import { create_user } from "./user/mutations/createUser";
import { verify_email } from "./user/mutations/verifyEmail";
import { login } from "./user/mutations/login";
import { get_users } from "./user/querys/getUsers";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    USERS_GET: (_: any, { input }: any) => {
      const x = get_users(input);
      console.log(x);
      return x;
    },
  },
  Mutation: {
    USER_CREATE: (
      _: any,
      input: { user_name: string; email: string; password: string; img: any },
      { test }: any
    ) => {
      return create_user(input, test);
    },
    VERIFY_EMAIL: (_: any, args: { id: string; otp: any }, { test }: any) => {
      return verify_email(args, test);
    },
    LOGIN: (
      _: any,
      args: { email: string; password: string },
      { test }: any
    ) => {
      return login(args, test);
    },
  },
};
