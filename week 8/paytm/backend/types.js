const zod = require("zod");

const signupAuth = zod.object({
  username: zod
    .string()
    .min(6)
    .max(12, { message: "username must be less than 12 characters" }),
  password: zod
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(12, { message: "Password should be less than 12 characters" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
  firstName: zod.string().max(12),
  lastName: zod.string().max(12),
});

const signinAuth = zod.object({
  username: zod
    .string()
    .min(6)
    .max(12, { message: "username must be less than 12 characters" }),
  password: zod
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(12, { message: "Password should be less than 12 characters" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
});

const updateUserData = zod.object({
  password: zod
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(12, { message: "Password should be less than 12 characters" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
  firstName: zod.string().max(12),
  lastName: zod.string().max(12),
});

const transferAuth = zod.object({
  to: zod.string().min(6).max(12),
  amount: zod.number,
});

module.exports = { signupAuth, signinAuth, updateUserData, transferAuth };
