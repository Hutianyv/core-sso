import { z } from "zod";
export const RegisterFormSchema = z.object({
  username: z.string().min(1, "Username has been taken"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, " At least 8 characters"),
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;
