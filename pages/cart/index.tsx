import {NextPage} from "next";
import Link from "next/link";
import {useState} from "react";
import {Calendar, Edit, MapPin, ShoppingBag, Trash} from "react-feather";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {SectionTitle} from "@components/section-title";
import {Button} from "@components/button";
import {CartTypeModal} from "@components/modals/cart-type-modal";
import {AddressSelectionModal} from "@components/modals/address-selection-modal";
import {AddressType} from "@models/addresses";
import {useCart} from "@queries/use-cart";
import {PriceFormatter} from "@components/ui/price-formatter";
import {useCartAddress} from "@mutations/use-cart-address";
import {useCurrentOpening} from "@queries/use-current-opening";
import {useOrderStore} from "@mutations/use-order-store";
import {useRouter} from "next/router";
import {OpeningType} from "@models/openings";
import {CartType} from "@models/cart";
import {ProductListItem} from "@components/product/product-list-item";
import {ProductList} from "@components/product/product-list";

type Props = {
    opening: OpeningType;
    cart: CartType;
}

export default function CartIndexContainer() {
    const cart = useCart();
    const opening = useCurrentOpening();

    return <UserLayout className="grid">
        {opening.data?.data.data && cart.data?.data && <CartIndex
            opening={opening.data?.data.data}
            cart={cart.data?.data}
        />}
    </UserLayout>
}

const CartIndex: NextPage<Props> = ({opening, cart}) => {
    const router = useRouter();
    const cartAddress = useCartAddress();
    const orderStore = useOrderStore();
    const [cartTypeModal, setCartTypeModal] = useState(false);
    const [addressModal, setAddressModal] = useState(false);

    async function handleCartTypeClose(delivery: boolean) {
        setCartTypeModal(false);

        if (delivery) {
            setAddressModal(true);
        } else {
            await cartAddress.mutateAsync(null)
        }
    }

    function handleAddressSelectionClose() {
        setAddressModal(false);
    }

    async function handleAddressSelection(address: AddressType) {
        await cartAddress.mutateAsync(address.id);
    }

    async function handleOrderStore() {
        const response = await orderStore.mutateAsync();
        await router.push(`/orders/${response.data.data.id}/success`);
    }

    return <>
        <CartTypeModal
            selected={!!cart.address}
            open={cartTypeModal}
            onClose={handleCartTypeClose}
        />

        <AddressSelectionModal
            open={addressModal}
            onClose={handleAddressSelectionClose}
            onAddressSelection={handleAddressSelection}
        />

        <PageTitle>Carrinho</PageTitle>

        <ProductList
            products={cart.products}
            onClick={product => router.push(`/products/${product.id}`)}
        >
            <a className="flex items-center gap-6 text-gray-500 cursor-pointer">
                <Trash/>
                <Edit/>
            </a>
        </ProductList>

        {opening.delivery_fee && <div className="flex justify-between">
            <span>Taxa de entrega</span>
            <span className="text-orange-500">
                <PriceFormatter price={opening.delivery_fee}/>
            </span>
        </div>}

        <div className="flex justify-between">
            <span>Valor total</span>
            <span className="text-orange-500">
                <PriceFormatter price={cart.cost ?? 0}/>
            </span>
        </div>

        <Link href="/">
            <a className="py-3 border-t border-b text-orange-500 text-sm text-center">
                Adicionar mais itens
            </a>
        </Link>

        <SectionTitle>Opções de entrega</SectionTitle>
        <div className="flex" onClick={() => setCartTypeModal(true)}>
            <ShoppingBag className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                {cart.address ? 'Entregar no endereço' : 'Retirar pessoalmente'}
            </p>
        </div>

        {cart.address && <>
            <SectionTitle>Endereço da entrega</SectionTitle>
            <div className="flex">
                <MapPin className="mr-6 text-gray-500"/>
                <p className="text-gray-500">
                    {cart.address.address}
                </p>
            </div>
        </>}

        {/* TODO pull information from opening */}
        <SectionTitle>Data de entrega</SectionTitle>
        <div className="flex">
            <Calendar className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                <span className="text-orange-500">06/09/2021</span>
                {' '}
                <span>a partir das 16h30m</span>
            </p>
        </div>

        <Button loading={orderStore.isLoading} color="primary" onClick={handleOrderStore}>
            Finalizar pedido
        </Button>
    </>
}
