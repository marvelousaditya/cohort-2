import zod from "zod";

export const user = zod.object({
  username: zod
    .string()
    .min(6, { message: "username should be atleast 6 characters" })
    .max(15, { message: "username should be no more than 15 characters" }),
  password: zod
    .string()
    .min(8, { message: "password should be atleast 8 characters" })
    .max(20, { message: "username should be no more than 20 characters" }),
});
