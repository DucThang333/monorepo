import { z } from "@package/zod";

const emailSchema = z.string().email({ message: "Invalid email address" });

const validateEmail = (email: string) => {
  const result = emailSchema.safeParse(email);

  if (!result.success) {
    return { success: false, errors: result.error.errors };
  }

  return { success: true };
};


export {validateEmail}