import { getAllProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { ProductList } from "@/components/product/product-list";
import { Metadata, Product } from "@/lib/types";
import { useMemo } from "react";
import { Navigation, useLoaderData, useNavigation } from "react-router-dom";

type ProductListData = {
  products: Product[];
  metadata: Metadata;
};

async function loader({
  request,
}: {
  request: Request;
}): Promise<ProductListData> {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const limit = url.searchParams.get("limit");
  const q = url.searchParams.get("q");

  const payload = {
    page: !page ? 1 : parseInt(page),
    limit: !limit ? 10 : parseInt(limit),
    q: q ?? "",
  };
  const response = await getAllProduct(payload);

  return {
    products: response?.data?.products,
    metadata: {
      totalData: response?.data?.totalData,
      totalPage: response?.data?.totalPage,
    },
  };
}

export const Products = () => {
  const productsListData = useLoaderData() as ProductListData;
  const navigation: Navigation = useNavigation();

  const isLoading = useMemo(() => navigation.state === "loading", [navigation]);

  return (
    <Layout>
      <ProductList
        products={productsListData.products}
        metadata={productsListData.metadata}
        isLoading={isLoading}
      />
    </Layout>
  );
};

Products.loader = loader;
