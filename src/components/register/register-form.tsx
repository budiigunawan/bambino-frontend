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
import { Link, useSubmit } from "react-router-dom";

export const RegisterForm = () => {
  const submit = useSubmit();

  const formSchema = z.object({
    username: z.string().min(8),
    email: z.string().email(),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (userData: z.infer<typeof formSchema>) => {
    submit(userData, {
      method: "post",
    });
  };

  return (
    <section className="my-20 p-4 grid grid-cols-12 gap-x-4 md:my-28 md:p-0">
      <section className="col-span-12 border border-b-gray-light p-5 md:col-span-6">
        <h2 className="font-bold font-poppins text-4xl text-b-black uppercase mb-4">
          Register
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg font-poppins uppercase">
                    Username *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="jane.doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg font-poppins uppercase">
                    Email address *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="jane.doe@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg font-poppins uppercase">
                    Password *
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 8 characters, and contain both
                    letters and numbers.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-3">
              <Button type="submit" className="uppercase">
                Create an account
              </Button>
              <Button
                type="button"
                variant="outline"
                className="uppercase"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <section className="hidden md:block md:col-span-6 ">
        <img
          src="https://im.uniqlo.com/global-cms/spa/res16eaafe8979a56ac888b771530e50e0afr.jpg"
          alt="boy hold a ball"
        />
      </section>
    </section>
  );
};
