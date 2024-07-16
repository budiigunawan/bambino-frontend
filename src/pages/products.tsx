import { getAllProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { ProductList } from "@/components/product/product-list";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

export const Products = () => {
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
      <ProductList products={products} isLoading={isLoading} />
    </Layout>
  );
};
