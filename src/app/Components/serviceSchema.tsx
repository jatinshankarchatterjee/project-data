"use client";
import { z } from "zod";

const Service = z.object({
  serviceid: z.number().min(1).max(10),
  servicename: z.string().min(1).max(20),
  serviceprice: z.number().min(1).max(1000),
  servicedescription: z.string().min(1).max(1000),
});

// extract the inferred type
type Service = z.infer<typeof Service>;
// { username: string }

export const serviceSchema = Service.extend({
  serviceid: z
    .number()
    .min(1, { message: "Product ID must be between 1 and 10" })
    .max(10),
  servicename: z
    .string()
    .min(1, { message: "Product Name must be between 1 and 20" })
    .max(20),
  serviceprice: z
    .number()
    .min(1, { message: "Product Price must be between 1 and 1000" })
    .max(1000),
  servicedescription: z
    .string()
    .min(1, { message: "Product Description must be between 1 and 1000" })
    .max(1000),
});
