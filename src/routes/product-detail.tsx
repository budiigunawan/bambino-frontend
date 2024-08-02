import { addCartItem, getCart } from "@/api/checkout-api";
import { getAllProduct, getProduct } from "@/api/products-api";
import { Detail } from "@/components/product/detail";
import { Recommendation } from "@/components/product/recommendation";
import { authCookie } from "@/lib/auth";
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
  const token = authCookie.get("token");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (token && data) {
    const { quantity, productId } = data;
    const payload = {
      productId: productId as string,
      quantity: Number(quantity),
    };

    const cartResponse = await getCart(token);

    if (cartResponse.status !== "success") {
      return null;
    }

    const cartItemResponse = await addCartItem(token, payload);

    if (cartItemResponse.code !== 201) {
      return null;
    }

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
