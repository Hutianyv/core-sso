import { z } from "zod";
export const LoginFormSchema = z.object({
  username: z.string().min(1, "Username has been taken"),
  password: z.string().min(8, " at least 8 characters"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>