import * as z from "zod";

export const sendEmailSchema = z.object({
  name: z.string().min(1, {
    message: "Required field",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(1, {
    message: "Required field",
  }),
});
