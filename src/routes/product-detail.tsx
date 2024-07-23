import { getAllProduct, getProduct } from "@/api/products-api";
import { Detail } from "@/components/product/detail";
import { Recommendation } from "@/components/product/recommendation";
import { Product, ProductDetailPageData } from "@/lib/types";
import { useMemo } from "react";
import {
  Navigation,
  Params,
  redirect,
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

async function action({ request }: { request: Request }) {
  const cartId = localStorage.getItem("cartId");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { quantity } = data;

  if (cartId && quantity) {
    return redirect("/cart");
  } else {
    return redirect("/login");
  }
}

export const ProductDetail = () => {
  const { productDetail, productsRecommendation } =
    useLoaderData() as ProductDetailPageData;
  const navigation: Navigation = useNavigation();
  const isLoading = useMemo(() => navigation.state === "loading", [navigation]);

  return (
    <>
      <Detail product={productDetail!} isLoading={isLoading} />
      <Recommendation
        products={productsRecommendation}
        isLoading={isLoading}
        page="detail"
      />
    </>
  );
};

ProductDetail.loader = loader;
ProductDetail.action = action;
