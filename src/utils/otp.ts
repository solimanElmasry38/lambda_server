import { generate } from "otp-generator";
export const generate_OTP = (): string => {
  return generate(10, {
    lowerCaseAlphabets: true,
    upperCaseAlphabets: true,
    specialChars: true,
  });
};
