import { getAllProduct } from "@/api/products-api";
import { Collections } from "@/components/home/collections";
import { Hero } from "@/components/home/hero";
import { Layout } from "@/components/layout/layout";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProduct();

      if (response?.status === "success") {
        setProducts(response?.data?.products);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <Hero />
      <Collections products={products} isLoading={isLoading} />
    </Layout>
  );
};
