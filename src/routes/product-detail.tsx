import { getAllProduct, getProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { Detail } from "@/components/product/detail";
import { Recommendation } from "@/components/product/recommendation";
import { Product, ProductDetailPageData } from "@/lib/types";
import { useMemo } from "react";
import {
  Navigation,
  Params,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

async function loader({ params }: { params: Params }) {
  try {
    const slug = params.slug;

    const [productDetailResponse, productListResponse] = await Promise.all([
      getProduct(slug!),
      getAllProduct({ page: 1, limit: 5 }),
    ]);

    const responseProducts = productListResponse.data.products;
    const filteredProducts = responseProducts
      .filter((product: Product) => product.slug !== slug)
      .slice(0, 4);

    return {
      productDetail: productDetailResponse.data,
      productsRecommendation: filteredProducts,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const ProductDetail = () => {
  const { productDetail, productsRecommendation } =
    useLoaderData() as ProductDetailPageData;
  const navigation: Navigation = useNavigation();
  const isLoading = useMemo(() => navigation.state === "loading", [navigation]);

  return (
    <Layout>
      <Detail product={productDetail!} isLoading={isLoading} />
      <Recommendation
        products={productsRecommendation}
        isLoading={isLoading}
        page="detail"
      />
    </Layout>
  );
};

ProductDetail.loader = loader;
