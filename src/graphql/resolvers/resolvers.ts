import { DateTimeResolver } from "graphql-scalars";
import { create_user } from "./user/mutations/createUser";
import { verify_email } from "./user/mutations/verifyEmail";
import { login } from "./user/mutations/login";
import { get_users } from "./user/querys/getUsers";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    USERS_GET:(_, { input })=>{
      const x = get_users(input)
      console.log(x)
      return x
    },
  },
  Mutation: {
    USER_CREATE: (_, input, { test }) => {
      return create_user(input, test);
    },
    VERIFY_EMAIL: (_, args, { test }) => {
      return verify_email(args, test);
    },
    LOGIN: (_, args, { test })=>{
      return login(args, test);
    },
  },
};
