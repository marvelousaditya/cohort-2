import zod from "zod";

export const user = zod.object({
  username: zod
    .string()
    .min(6, { message: "username should be atleast 6 characters long" })
    .max(15, { message: "username should be no more than 15 characters" }),
  password: zod
    .string()
    .min(8, { message: "password should be atleast 8 characters" })
    .max(12, { message: "password should be no more than 12 characters" }),
});
