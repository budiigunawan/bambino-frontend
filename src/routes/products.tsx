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
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (
    page: number = 1,
    limit: number = 10,
    search?: string
  ) => {
    setIsLoading(true);

    const response = await getAllProduct({ page, limit, q: search });

    if (response?.status === "success") {
      setProducts(response?.data?.products);
      setMetadata({
        totalData: response?.data?.totalData ?? 0,
        totalPage: response?.data?.totalPage ?? 0,
      });
    }

    setIsLoading(false);
  };

  const handleSearch = (value: string) => {
    setSearch(value ?? "");
  };

  const handleLimit = (value: number) => {
    setLimit(value ?? 0);
  };

  useEffect(() => {
    fetchData(1, limit, search);
  }, [limit, search]);

  return (
    <Layout>
      <ProductList
        products={products}
        metadata={metadata}
        isLoading={isLoading}
        setLimit={handleLimit}
        setSearch={handleSearch}
      />
    </Layout>
  );
};
