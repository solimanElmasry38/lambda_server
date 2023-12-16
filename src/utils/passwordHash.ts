import { genSaltSync, compareSync, hashSync } from "bcrypt";

export const hash_password = async (
  RowPass: string | Buffer
): Promise<string> => {
  const rounds = 10;
  const salt = genSaltSync(rounds);

  try {
    return hashSync(RowPass, salt);
  } catch (err) {
    throw err;
  }
};

export const validate_password = async (
  password: string,
  hashedPass: string
): Promise<boolean> => {
  try {
    return compareSync(password, hashedPass);
  } catch (err) {
    throw err;
  }
};
