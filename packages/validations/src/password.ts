import { z } from 'zod';
const passwordSchema = z
  .string()
  .min(8, {
    message: 'Password must be at least 8 characters long',
  })
  .max(100, {
    message: 'Password must not exceed 100 characters',
  });

export { passwordSchema };
