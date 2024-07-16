import { getAllProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { ProductList } from "@/components/product/product-list";
import { Metadata, Product } from "@/lib/types";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [metadata, setMetadata] = useState<Metadata>({
    totalData: 0,
    totalPage: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProduct();

      if (response?.status === "success") {
        setProducts(response?.data?.products);
        setMetadata({
          totalData: response?.data?.totalData ?? 0,
          totalPage: response?.data?.totalPage ?? 0,
        });
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <ProductList
        products={products}
        metadata={metadata}
        isLoading={isLoading}
      />
    </Layout>
  );
};
