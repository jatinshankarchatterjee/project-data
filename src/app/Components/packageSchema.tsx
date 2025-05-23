"use client";
import { z } from "zod";

const Package = z.object({
  packageid: z.number().min(1).max(10),
  packagename: z.string().min(1).max(20),
  packageprice: z.number().min(1).max(1000),
  packagedescription: z.string().min(1).max(1000),
});

// extract the inferred type
type Package = z.infer<typeof Package>;

export const packageSchema = Package.extend({
  packageid: z
    .number()
    .min(1, { message: "Product ID must be between 1 and 10" })
    .max(10),
  packagename: z
    .string()
    .min(1, { message: "Product Name must be between 1 and 20" })
    .max(20),
  packageprice: z
    .number()
    .min(1, { message: "Product Price must be between 1 and 1000" })
    .max(1000),
  packagedescription: z
    .string()
    .min(1, { message: "Product Description must be between 1 and 1000" })
    .max(1000),
});
