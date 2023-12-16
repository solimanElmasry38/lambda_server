import { ObjectSchema, AnyObject } from "yup";

export const validate_inputs = async (
  input: { user_name: string; email: string; password: string; img: string },
  schema: ObjectSchema<
    { user_name: string; email: string; password: string },
    AnyObject,
    { user_name: undefined; email: undefined; password: undefined },
    ""
  >
):Promise<boolean> => {
  try {
    await schema.validate(input, { strict: true });
    return true;
  } catch (err) {
    throw err;
  }
};
