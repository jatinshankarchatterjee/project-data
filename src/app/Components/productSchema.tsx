"use client";
import { z } from "zod";

const Product = z.object({
  productid: z.number().min(1).max(10),
  productname: z.string().min(1).max(20),
  productimage: z.string().min(1).max(100),
  productprice: z.number().min(1).max(1000),
  productdescription: z.string().min(1).max(1000),
});

// extract the inferred type
type Product = z.infer<typeof Product>;
// { username: string }

export const productSchema = Product.extend({
  productid: z
    .number()
    .min(1, { message: "Product ID must be between 1 and 10" })
    .max(10),
  productname: z
    .string()
    .min(1, { message: "Product Name must be between 1 and 20" })
    .max(20),
  productimage: z
    .string()
    .min(1, { message: "Product Image must be between 1 and 100" })
    .max(100),
  productprice: z
    .number()
    .min(1, { message: "Product Price must be between 1 and 1000" })
    .max(1000),
  productdescription: z
    .string()
    .min(1, { message: "Product Description must be between 1 and 1000" })
    .max(1000),
});
