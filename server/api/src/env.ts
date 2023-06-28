import dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const schema = z.object({
  PORT: z.number(),
});

const env = {
  PORT: parseInt(process.env.PORT as string),
};
schema.parse(env);

export default env;
