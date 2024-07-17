import { getAllProduct, getProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { Detail } from "@/components/product/detail";
import { Recommendation } from "@/components/product/recommendation";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<Product | undefined>(
    undefined
  );
  const [isLoadingProductDetail, setIsLoadingProductDetail] =
    useState<boolean>(true);
  const [productsRecommendation, setProductsRecommendation] = useState<
    Product[]
  >([]);
  const [isLoadingRecommendation, setIsLoadingRecommendation] =
    useState<boolean>(true);
  const { id } = useParams();

  const fetchProductDetail = async (id: string) => {
    setIsLoadingProductDetail(true);

    const response = await getProduct(id);

    if (response?.status === "success") {
      setProductDetail(response?.data);
    }

    setIsLoadingProductDetail(false);
  };

  useEffect(() => {
    async function fetchProductsRecommendation() {
      const response = await getAllProduct({ page: 1, limit: 5 });

      if (response?.status === "success") {
        const responseProducts = response?.data?.products;
        const filteredProducts = responseProducts
          .filter((product: Product) => product.id !== id)
          .slice(0, 4);
        setProductsRecommendation(filteredProducts);
      }

      setIsLoadingRecommendation(false);
    }

    fetchProductsRecommendation();
    fetchProductDetail(id!);
  }, [id]);

  return (
    <Layout>
      <Detail product={productDetail!} isLoading={isLoadingProductDetail} />
      <Recommendation
        products={productsRecommendation}
        isLoading={isLoadingRecommendation}
        page="detail"
      />
    </Layout>
  );
};
