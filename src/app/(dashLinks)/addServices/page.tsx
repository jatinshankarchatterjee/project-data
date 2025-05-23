"use client";
import { serviceSchema } from "@/app/Components/serviceSchema";
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

export default function AddServices() {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      serviceid: 0,
      servicename: "",
      serviceprice: 0,
      servicedescription: "",
    },
  });
  function onSubmit(values: z.infer<typeof serviceSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-row mt-6 m-6 justify-between align-middle">
      <div className="flex flex-col w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="serviceid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service ID</FormLabel>
                  <FormControl>
                    <Input placeholder="add service ID#..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="servicename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input placeholder="add service name..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceprice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Price</FormLabel>
                  <FormControl>
                    <Input placeholder="add service price..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="servicedescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="add service description..."
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
