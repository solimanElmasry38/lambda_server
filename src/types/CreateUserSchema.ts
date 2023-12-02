import { object, string} from "yup";
 
 export const userSchema = object({

   user_name: string().required().min(10).max(20,"long tex"),
   email: string().required().email(),
   password: string().required(),
  //  img: string().required().url(),
});