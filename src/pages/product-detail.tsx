import { getAllProduct } from "@/api/products-api";
import { Layout } from "@/components/layout/layout";
import { Detail } from "@/components/product/detail";
import { Recommendation } from "@/components/product/recommendation";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [productsRecommendation, setProductsRecommendation] = useState<
    Product[]
  >([]);
  const [isLoadingRecommendation, setIsLoadingRecommendation] =
    useState<boolean>(true);
  const { id } = useParams();

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
  }, [id]);

  return (
    <Layout>
      <Detail />
      <Recommendation
        products={productsRecommendation}
        isLoading={isLoadingRecommendation}
        page="details"
      />
    </Layout>
  );
};
