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
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="my-20 p-4 grid grid-cols-12 gap-x-4 md:my-28 md:p-0">
      <section className="col-span-12 border border-b-gray-light p-5 md:col-span-6">
        <h2 className="font-bold font-poppins text-4xl text-b-black uppercase">
          Login
        </h2>
        <p className="my-4">Login with your email address and password</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <div className="pt-6 flex flex-col gap-3">
              <Button type="submit" className="uppercase">
                Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="uppercase"
                asChild
              >
                <Link to="/register">Create an account</Link>
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <section className="hidden md:block md:col-span-6 ">
        <img
          src="https://im.uniqlo.com/global-cms/spa/res18318d321ed197c854b99f75a39a0469fr.jpg"
          alt="two babies"
        />
      </section>
    </section>
  );
};
