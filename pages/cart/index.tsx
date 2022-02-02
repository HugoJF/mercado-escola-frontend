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

// TODO: address selection and cancelation needs work
const CartIndex: NextPage = () => {
    const cart = useCart();
    const [cartTypeModal, setCartTypeModal] = useState(false);
    const [addressModal, setAddressModal] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [address, setAddress] = useState<AddressType | null>(null);

    function handleCartTypeClose() {
        setCartTypeModal(false);
        if (!delivery) {
            return
        }

        if (!address) {
            setAddressModal(true);
        } else {
            setAddress(null);
            setDelivery(false);
        }
    }

    function handleAddressSelectionClose() {
        setAddressModal(false);
    }

    function handleAddressSelection(address: AddressType) {
        setAddress(address);
    }

    return <UserLayout className="grid">
        <CartTypeModal
            selected={delivery}
            open={cartTypeModal}
            onClose={handleCartTypeClose}
            onDeliverySelected={setDelivery}
        />

        <AddressSelectionModal
            open={addressModal}
            onClose={handleAddressSelectionClose}
            onAddressSelection={handleAddressSelection}
        />

        <PageTitle>Carrinho</PageTitle>

        {/* TODO: pull items from API */}
        <ul className="flex flex-col gap-6">
            {cart.data?.data.products.map(product => (
                <Link href={`/products/${product.id}`}>

                    <li className="flex gap-6">
                        {/* Product image */}
                        <img
                            alt={product.name}
                            src={Object.values(product.media_links)?.[0]}
                            className="h-24 h-full aspect-square rounded"
                        />

                        {/* Product details */}
                        <div className="flex flex-col flex-grow">
                            <h2>{product.name}</h2>
                            <span className="text-gray-500">
                                {product.pivot.quantity}
                                    {' '}
                                    {product.pivot.quantity === 1 ? product.unit_name_singular : product.unit_name_plural}
                            </span>
                            <span className="text-orange-500">
                                <PriceFormatter price={product.pivot.quantity_cost * product.pivot.quantity}/>
                            </span>
                        </div>

                        {/* Product controls */}
                        <a className="flex items-center gap-6 text-gray-500 cursor-pointer">
                            <Trash/>
                            <Edit/>
                        </a>
                    </li>
                </Link>
            ))}
        </ul>

        <div className="flex justify-between">
            <span>Valor total</span>
            <span className="text-orange-500">
                <PriceFormatter price={cart.data?.data.cost ?? 0}/>
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
                {delivery ? 'Entregar no endereço' : 'Retirar pessoalmente'}
            </p>
        </div>

        {delivery && address && <>
            <SectionTitle>Endereço da entrega</SectionTitle>
            <div className="flex">
                <MapPin className="mr-6 text-gray-500"/>
                <p className="text-gray-500">
                    {address.address}
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

        {/* TODO call API */}
        <Button color="primary">Finalizar pedido</Button>
    </UserLayout>
}
export default CartIndex
