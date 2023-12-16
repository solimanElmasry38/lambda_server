import { verify, sign } from "jsonwebtoken";

export const create_token = (id: string, secret: string):string => {
  if (!secret) {
    throw Error("secret key is required in create  token func");
  }
  return sign(id, secret!);
};

export const validate_token = (token: string, id: string): boolean => {
  const decode = verify(token, process.env.SECRET_ACCESS_TOKEN_KEY!);
  if (decode === id) {
    return true;
  } else {
    return false;
  }
};
