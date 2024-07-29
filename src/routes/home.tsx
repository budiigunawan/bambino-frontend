import { getAllProduct } from "@/api/products-api";
import { Collections } from "@/components/home/collections";
import { Hero } from "@/components/home/hero";
import { ProductListData } from "@/lib/types";
import { useMemo } from "react";
import { Navigation, useLoaderData, useNavigation } from "react-router-dom";

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
    limit: !limit ? 8 : parseInt(limit),
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

export const Home = () => {
  const productListData = useLoaderData() as ProductListData;
  const navigation: Navigation = useNavigation();

  const isLoading = useMemo(() => navigation.state === "loading", [navigation]);

  return (
    <>
      <Hero />
      <Collections products={productListData?.products} isLoading={isLoading} />
    </>
  );
};

Home.loader = loader;
