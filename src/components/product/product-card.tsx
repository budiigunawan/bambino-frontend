import { Product } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { rupiahFormat } from "@/lib/helpers";
import { Link } from "react-router-dom";

type ProductCardParams = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardParams) => {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="lg:col-span-3 md:col-span-4 col-span-6 "
    >
      <Card className="rounded-none border-0 shadow-none min-h-80">
        <CardHeader className="p-0">
          <img src={product.imageUrl} alt={product.slug} />
          <CardTitle className="text-xl md:min-h-14 min-h-20">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="font-semibold">{rupiahFormat(product.price)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
