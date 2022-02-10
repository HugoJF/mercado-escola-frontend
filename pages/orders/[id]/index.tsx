import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {useOrder} from "@queries/use-order";
import {useRouter} from "next/router";
import {PageTitle} from "@components/text/page-title";
import {OrderType} from "@models/orders";
import {DollarSign, Info, ShoppingBag} from "react-feather";
import {SectionTitle} from "@components/section-title";

type Props = {
    order: OrderType;
}

export default () => {
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
                O pedido foi recebido pelo sistema mas ainda não foi confirmado pelo mercado.
            </p>
        </div>
    </>
}
