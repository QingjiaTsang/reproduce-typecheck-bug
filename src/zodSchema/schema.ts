import validator from "validator";
import { z } from "zod";

export const schema = z.object({
  price: z.string()
    .refine((val) =>
      validator.isCurrency(val, {
        allow_decimal: true,
        digits_after_decimal: [1, 2],
        allow_negatives: false,
      }), { message: "Invalid price format" })
    .transform(val => Number(val))
});