"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast from "react-hot-toast";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DialogWrapper from "@/components/Common/DialogWrapper";

const AddAllowedEmail = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string({
      required_error: "Add Allowed Email.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formattedValues = {
        ...values,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/allowed`,
        {
          method: "PATCH",
          body: JSON.stringify(formattedValues),
          credentials: "include", // to send cookies to the server
          headers: {
            "Content-Type": "application/json", // Specify content type
          },
        }
      );

      if (res.ok) {
        toast.success("Email Added", { duration: 4000 });
        form.reset();
        router.refresh();
      } else {
        const errorMessage = await res.text();

        toast.error(`An error occured ${errorMessage}`, { duration: 6000 });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An Unexpected error occured");
    }
  }

  return (
    <DialogWrapper isBtn btnTitle="Add an Allowed Email" title="Add an Allowed Email">
      <div className=" bg-white p-4 rounded-md shadow-md dark:bg-black">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Email Allowed</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Allowed" {...field} />
                  </FormControl>
                  <FormDescription>Add an Email to allow.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </DialogWrapper>
  );
};

export default AddAllowedEmail;
