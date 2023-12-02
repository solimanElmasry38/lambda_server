export const validate_inputs = async (input, schema) => {
  try {
    await schema.validate(input, { strict: true });
    return true;
  } catch (err) {
    throw err;
  }
};
