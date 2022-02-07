import {NextPage} from "next";
import {useRouter} from "next/router";
import {UserLayout} from "@components/layouts/user-layout";
import {useProduct} from "@queries/use-product";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {SectionTitle} from "@components/section-title";
import {PriceFormatter} from "@components/ui/price-formatter";
import {useCart} from "@queries/use-cart";
import {useMemo, useState} from "react";
import {AddToCartModal} from "@components/modals/add-to-card-modal";
import {ProductType} from "@models/products";
import {CartType} from "@models/cart";

type Props = {
    product: ProductType;
    cart: CartType;
}

export default () => {
    const router = useRouter();
    const product = useProduct(router.query.id as string);
    const cart = useCart()

    return <UserLayout>
        {cart.data?.data && product.data?.data.data && <ProductShow
            cart={cart.data?.data}
            product={product.data.data.data}
        />}
    </UserLayout>
}
const ProductShow: NextPage<Props> = ({cart, product}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const inCart = useMemo(() => {
        return cart.products.map(product => product.id).includes(product.id);
    }, [cart])

    return <UserLayout className="grid">
        {product && <AddToCartModal
            product={product}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
        />}

        {/* TODO needs full rework */}
        <div className="w-full max-h-64 overflow-hidden rounded">
            <img
                className="w-full"
                src={Object.values(product.media_links ?? {})?.[0]}
                alt={product.name}
            />
        </div>

        <PageTitle>{product.name}</PageTitle>
        <SectionTitle>Descrição</SectionTitle>
        <p>{product.description}</p>

        <div>
            <span className="text-orange-500">
                <PriceFormatter price={product.quantity_cost!}/>
            </span>
            <span className="text-sm">/{product.unit_name_singular}</span>
        </div>

        <Button color="primary" onClick={() => setModalOpen(true)}>
            {inCart ? 'Modificar' : 'Adicionar ao carrinho'}
        </Button>
    </UserLayout>
}
