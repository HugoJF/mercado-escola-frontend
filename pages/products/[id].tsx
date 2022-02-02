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

const ProductShow: NextPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    const product = useProduct(router.query.id as string);
    const cart = useCart()

    const inCart = useMemo(() => {
        return cart.data?.data.products.map(product => product.id).includes(product.data?.data.data.id!);
    }, [cart])

    return <UserLayout className="grid">
        {product.data?.data.data && <AddToCartModal
            product={product.data?.data.data}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
        />}
        {/* TODO needs full rework */}
        <div className="w-full max-h-64 overflow-hidden rounded">
            <img
                className="w-full"
                src={Object.values(product.data?.data.data.media_links ?? {})?.[0]}
                alt={product.data?.data.data.name}
            />
        </div>

        <PageTitle>{product.data?.data.data.name}</PageTitle>
        <SectionTitle>Descrição</SectionTitle>
        <p>{product.data?.data.data.description}</p>

        <div>
            <span className="text-orange-500">
                <PriceFormatter price={product.data?.data.data.quantity_cost!}/>
            </span>
            <span className="text-sm">/{product.data?.data.data.unit_name_singular}</span>
        </div>


        <Button color="primary" onClick={() => setModalOpen(true)}>
            {inCart ? 'Modificar' : 'Adicionar ao carrinho'}
        </Button>
    </UserLayout>
}
export default ProductShow
