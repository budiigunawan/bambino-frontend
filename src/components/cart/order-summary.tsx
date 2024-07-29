import { rupiahFormat } from "@/lib/helpers";
import { Product } from "@/lib/types";
import { Button } from "../ui/button";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

type CartItem = {
  quantity: number;
  cartId: string;
  productId: string;
  createdAt: string | null;
  updatedAt: string | null;
  product: Product;
};

type DataCart = {
  id: string;
  userId: string;
  products: CartItem[];
  createdAt: string | null;
  updatedAt: string | null;
};

type OrderSummaryParams = {
  dataCart: DataCart;
};

export const OrderSummary = ({ dataCart }: OrderSummaryParams) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const itemsCounter = useMemo(() => {
    const counter = dataCart.products.reduce((sum, current) => {
      return sum + current.quantity;
    }, 0);

    return counter;
  }, [dataCart]);

  return (
    <section className="col-span-12 lg:col-start-8 lg:col-end-13">
      <section className="border border-b-gray-light p-4">
        <h3 className="uppercase font-plus font-bold mb-5">
          {`Order summary | ${itemsCounter} item${itemsCounter && "(s)"}`}
        </h3>
        <div className="flex justify-between mb-5">
          <p>{"Item(s) subtotal"}</p>
          <p>{rupiahFormat(248000)}</p>
        </div>
        <div className="flex justify-between">
          <p className="uppercase font-plus font-bold">Subtotal</p>
          <p>{rupiahFormat(248000)}</p>
        </div>
      </section>
      <section>
        <Button
          type="button"
          className="mt-8 rounded-none h-12 w-full uppercase bg-b-pink-dark hover:bg-b-pink-light"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
        <Button
          type="button"
          variant="outline"
          className="mt-4 border-black rounded-none h-12 w-full uppercase"
          onClick={handleContinueShopping}
        >
          Continue shopping
        </Button>
      </section>
    </section>
  );
};
