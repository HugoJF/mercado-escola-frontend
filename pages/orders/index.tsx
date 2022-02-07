import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import Link from "next/link";
import {OrderType, OrderWithAddress, OrderWithOpening, OrderWithProducts} from "@models/orders";
import {useOrders} from "@queries/use-orders";
import {Badge} from "@components/badge";

type Props = {
    orders: OrderType<OrderWithAddress & OrderWithOpening & OrderWithProducts>[];
}
export default () => {
    const orders = useOrders();

    return <UserLayout>
        {orders.data?.data.data && <OrderIndex orders={orders.data.data.data}/>}
    </UserLayout>
}
const OrderIndex: NextPage<Props> = ({orders}) => {
    return <>
        <PageTitle>Pedidos</PageTitle>

        {/* todo: unmock */}
        {orders.map(product => (
            <Link href={`products/${product.id}`}>
                <div>
                    <div className="flex p-6 space-x-6 bg-white border border-gray-300 rounded">
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Código</h2>
                            <span>S25SZTI6</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Data do pedido</h2>
                            <span>24/11/21</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Valor</h2>
                            <span>R$ 39,56</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Status</h2>
                            <span><Badge>Entregue</Badge></span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-gray-700 text-sm uppercase">Endereço</h2>
                            <span>Casa</span>
                        </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1,2,3,4,5,6].map(() => (
                            <div className="flex space-x-3">
                                <div className="h-20 aspect-square bg-gray-200 rounded"/>
                                <div>
                                    <h2>Alface americana</h2>
                                    <div className="text-gray-700">2 unidades</div>
                                    <div className="text-orange-500">R$ 6,00</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        ))}
    </>
}
