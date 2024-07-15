import { Collections } from "@/components/home/collections";
import { Hero } from "@/components/home/hero";
import { Layout } from "@/components/layout/layout";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Collections />
    </Layout>
  );
};
