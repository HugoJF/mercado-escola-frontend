import {NextPage} from "next";
import {SimpleModal} from "./simple-modal";
import {Button} from "../button";
import {ProductType} from "@models/products";
import {PriceFormatter} from "@components/ui/price-formatter";
import {useMemo, useState} from "react";
import {useCartAddProduct} from "@mutations/use-cart-add-product";
import {useCartRemoveProduct} from "@mutations/use-cart-remove-product";
import {useCart} from "@queries/use-cart";
import {useRouter} from "next/router";
import {useTrigger} from "@hooks/use-trigger";

type Props = {
    product: ProductType;
    open: boolean;
    onClose: () => void;
}
// todo: deal with weight increment being null
export const AddToCartModal: NextPage<Props> = ({product, open, onClose, children}) => {
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();
    const cart = useCart();
    const addToCart = useCartAddProduct();
    const removeFromCart = useCartRemoveProduct();

    const cartQuantity = useMemo(() => {
        const products = cart.data?.data.products ?? [];
        const found = products.find(p => p.id === product.id);

        return found?.pivot?.quantity ?? 0;
    }, [cart.data])

    const changed = cartQuantity !== quantity;
    const loading = cart.isLoading || addToCart.isLoading || removeFromCart.isLoading;

    useTrigger(() => {
        setQuantity((product.weight_increment ?? 1));
    }, open, [true])

    function addQuantity() {
        setQuantity(quantity + (product.weight_increment ?? 1));
    }

    function subtractQuantity() {
        setQuantity(Math.max(0, quantity - (product.weight_increment ?? 1)));
    }

    async function add() {
        await addToCart.mutateAsync({product_id: product.id, quantity});
    }

    async function goToCart() {
        await router.push('/cart');
    }

    async function update() {
        await addToCart.mutateAsync({product_id: product.id, quantity});
    }

    async function remove() {
        await removeFromCart.mutateAsync(product.id);
    }

    async function cancel() {
        onClose();
    }

    return <SimpleModal
        open={open}
        onClose={onClose}
        title={`Adicinando ${product.name} ao carrinho`}
    >
        <div className="grid gap-6 p-6">
            <div className="flex justify-between gap-6">
                <span><PriceFormatter price={quantity * product.quantity_cost}/></span>
                <span>{quantity} {quantity === 1 ? product.unit_name_singular : product.unit_name_plural}</span>
            </div>
            <div className="flex gap-6">
                <Button
                    onClick={subtractQuantity}
                >
                    -
                </Button>

                <Button
                    onClick={addQuantity}
                >
                    +
                </Button>

                {quantity > 0 && !cartQuantity && <Button
                    onClick={add}
                    className="flex-grow"
                    loading={loading}
                    color="primary"
                >
                    Adicionar
                </Button>}

                {quantity > 0 && Boolean(cartQuantity) && !changed && <Button
                    onClick={goToCart}
                    className="flex-grow"
                    loading={loading}
                    color="default"
                >
                    Ver no carrinho
                </Button>}

                {quantity > 0 && Boolean(cartQuantity) && changed && <Button
                    onClick={update}
                    className="flex-grow"
                    loading={loading}
                    color="primary"
                >
                    Atualizar
                </Button>}

                {quantity === 0 && Boolean(cartQuantity) && <Button
                    onClick={remove}
                    className="flex-grow"
                    loading={loading}
                    color="danger"
                >
                    Remover
                </Button>}

                {quantity === 0 && !cartQuantity && <Button
                    onClick={cancel}
                    className="flex-grow"
                    loading={loading}
                    color="default"
                >
                    Cancelar
                </Button>}
            </div>
        </div>
    </SimpleModal>
}
