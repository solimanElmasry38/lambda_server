import { prisma } from "../../../../conf/prisma";
import { validate_token } from "../../../../utils/token";

export interface IgetOffers {
  input: { usr_id: string; usr_token: string };
}
type TgetOffers = {
  id: string;
  img: string;
  name: string;
};
export const get_offers = async (
  { input }: IgetOffers,
  _contx: {}
): Promise<TgetOffers[] > => {
  const { usr_id, usr_token } = input;

  if (validate_token(usr_token, usr_id)) {
   
    try {
      const offers = prisma.offer.findMany();

      return offers;
    } catch (err) {
      throw err;
    }
  }else{
    throw new Error("unauthrized")
  }
};
