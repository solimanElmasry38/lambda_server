import { genSaltSync, compareSync, hashSync } from "bcrypt";

export const hash_password = async (RowPass) => {
  const rounds = 10;
  const salt = genSaltSync(rounds);

  try {
    return  hashSync(RowPass, salt);
  } catch (err) {
    throw err;
  }
};

export const validate_password = async (password: string, hashedPass: string) => {
  try {
   
    return compareSync(password, hashedPass);
  } catch (err) {
    throw err;
  }
};
