import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {useOrder} from "@queries/use-order";
import {useRouter} from "next/router";
import {PageTitle} from "@components/text/page-title";
import {OrderType, OrderWithOpening} from "@models/orders";
import {Calendar, DollarSign, Info} from "react-feather";
import {SectionTitle} from "@components/section-title";
import {PriceFormatter} from "@components/ui/price-formatter";
import {ProductList} from "@components/product/product-list";
import {DateFormatter} from "@components/ui/date-formatter";

type Props = {
    order: OrderType<OrderWithOpening>;
}

export default function OrderShowContainer() {
    const router = useRouter()
    const order = useOrder(router.query.id as string)

    return <UserLayout>
        {order.data?.data.data && <OrderShow order={order.data.data.data}/>}
    </UserLayout>
}

const OrderShow: NextPage<Props> = ({order}) => {
    return <>
        <PageTitle>Pedido #{order.id}</PageTitle>

        {/* todo update with state */}
        <div className="flex">
            <Info className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                O pedido foi recebido pelo sistema mas ainda não foi confirmado pelo mercado.
            </p>
        </div>

        <SectionTitle>Valor total</SectionTitle>
        <div className="flex">
            <DollarSign className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                {/* todo plural singular */}
                <span className="text-orange-500"><PriceFormatter
                    price={order.total}/></span> em {order.products.length} itens
            </p>
        </div>

        <SectionTitle>Data de entrega</SectionTitle>
        <div className="flex">
            <Calendar className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                {/* todo fix hour */}
                <span className="text-orange-500"><DateFormatter
                    input={order.opening.delivers_at}
                    format="dd/LL/yy"
                /></span> às 14h
            </p>
        </div>

        <SectionTitle>Produtos</SectionTitle>

        <ProductList compact products={order.products}/>
    </>
}
