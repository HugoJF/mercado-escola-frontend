import {FC} from "react";
import Link from "next/link";
import {ShoppingCart} from "react-feather";
import {useCart} from "@queries/use-cart";

export const CartBar: FC = () => {
    const cart = useCart();

    if (!cart.data?.data.products.length) {
        return null;
    }

    return <Link href="/cart">
        <div className="flex px-6 py-3 bg-red-500 text-white cursor-pointer">
            <ShoppingCart/>
            <span className="flex-grow text-center">Ver carrinho</span>
            {/* TODO price */}
            <span>R$ 3,00</span>
        </div>
    </Link>
}
