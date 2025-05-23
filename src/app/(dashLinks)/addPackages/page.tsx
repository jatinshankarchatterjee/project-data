"use client";
import { packageSchema } from "@/app/Components/packageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AddPackages() {
  const form = useForm<z.infer<typeof packageSchema>>({
    resolver: zodResolver(packageSchema),
    defaultValues: {
      packageid: 0,
      packagename: "",
      packageprice: 0,
      packagedescription: "",
    },
  });
  function onSubmit(values: z.infer<typeof packageSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-row mt-6 m-6 justify-between align-middle">
      <div className="flex flex-col w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="packageid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package ID</FormLabel>
                  <FormControl>
                    <Input placeholder="add package ID#..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="packagename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Name</FormLabel>
                  <FormControl>
                    <Input placeholder="add package name..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="packageprice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Price</FormLabel>
                  <FormControl>
                    <Input placeholder="add package price..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="packagedescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="add package description..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-col w-1/2 border-2 rounded-s">
        <h1>Services</h1>
      </div>
    </div>
  );
}
