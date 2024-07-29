import { rupiahFormat } from "@/lib/helpers";
import { Product } from "@/lib/types";
import { useMemo } from "react";
import { Button } from "../ui/button";
import { FaX } from "react-icons/fa6";

type DataItem = {
  quantity: number;
  cartId: string;
  productId: string;
  createdAt: string | null;
  updatedAt: string | null;
  product: Product;
};

type CartItemParams = {
  dataItem: DataItem;
};

export const CartItem = ({ dataItem }: CartItemParams) => {
  const { product, quantity } = dataItem;

  const subTotal = useMemo(() => quantity * product.price, [quantity, product]);

  return (
    <div className="py-4 border-b border-b-gray-light flex  gap-4">
      <img
        className="w-20 h-20 md:w-40 md:h-40"
        src={product.imageUrl}
        alt={product.slug}
      />
      <div className="w-full pr-0 md:pr-4">
        <div className="flex justify-between gap-6">
          <p className="font-plus font-bold text-lg min-h-14">{product.name}</p>
          <Button variant="ghost" className="px-1 rounded-none">
            <FaX fontSize="12px" />
          </Button>
        </div>
        <p className="font-plus font-semibold">{rupiahFormat(product.price)}</p>
        <p className="mt-4 uppercase text-sm font-semibold">Quantity</p>
        <div className="mt-4 flex justify-between gap-4">
          <input
            className="border border-b-gray-light p-3 max-w-36"
            type="number"
            defaultValue={quantity}
            min={1}
          />
          <p className="font-plus font-bold">
            Subtotal: {rupiahFormat(subTotal)}
          </p>
        </div>
      </div>
    </div>
  );
};
