import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import Link from "next/link";
import {OrderType, OrderWithAddress, OrderWithOpening, OrderWithProducts} from "@models/orders";
import {useOrders} from "@queries/use-orders";
import {Badge} from "@components/badge";
import {PriceFormatter} from "@components/ui/price-formatter";
import {DateFormatter} from "@components/ui/date-formatter";
import {Button} from "@components/button";
import {ProductList} from "@components/product/product-list";

type Props = {
    orders: OrderType<OrderWithAddress & OrderWithOpening & OrderWithProducts>[];
}
export default function OrderIndexContainer() {
    const orders = useOrders();

    return <UserLayout>
        {orders.data?.data.data && <OrderIndex orders={orders.data.data.data}/>}
    </UserLayout>
}

const OrderIndex: NextPage<Props> = ({orders}) => {
    return <>
        {/* todo add order filter  */}
        <PageTitle>Pedidos</PageTitle>

        {/* todo: unmock */}
        {orders.map(order => (
            <Link key={order.id} href={`orders/${order.id}`}>
                <div className="cursor-pointer">
                    <div className="flex p-6 space-x-6 bg-white border border-gray-300 rounded">
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Código</h2>
                            <span className="font-medium font-mono tracking-tight uppercase">{order.id}</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Data do pedido</h2>
                            <span>
                                <DateFormatter input={order.created_at} format="dd/LL/yy"/>
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Valor</h2>
                            <span>
                                <PriceFormatter price={order.products_cost + order.delivery_fee}/>
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Status</h2>
                            {/* todo translation */}
                            <span><Badge>{order.state}</Badge></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Endereço</h2>
                            {/* todo get name */}
                            <span>{order.address.address}</span>
                        </div>
                        <div className="flex flex-grow justify-end items-center">
                            <Button>Detalhes</Button>
                        </div>
                    </div>

                    <ProductList compact products={order.products}/>
                </div>
            </Link>
        ))}
    </>
}

OrderIndex.displayName = 'OrderIndex';
