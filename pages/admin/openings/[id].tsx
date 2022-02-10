import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {useOpening} from "@queries/use-opening";
import {useRouter} from "next/router";
import {OpeningType} from "@models/openings";
import {PageTitle} from "@components/text/page-title";
import {SectionTitle} from "@components/section-title";
import {Calendar, ShoppingCart} from "react-feather";
import {DateFormatter} from "@components/ui/date-formatter";
import {Button} from "@components/button";

type Props = {
    opening: OpeningType;
}

export default () => {
    const router = useRouter();
    const opening = useOpening(router.query.id as string)

    return <UserLayout className="grid">
        {opening.data?.data.data && <AdminOpeningShow opening={opening.data.data.data}/>}
    </UserLayout>
}

const AdminOpeningShow: NextPage<Props> = ({opening}) => {
    return <>
        <div className="flex justify-between">
            <PageTitle>Abertura {opening.id}</PageTitle>
            <div>
                <Button>Modificar produtos habilitados</Button> {/* todo */}
                <Button color="primary">Editar</Button> {/* todo */}
            </div>
        </div>

        <SectionTitle>Períodos de pedidos</SectionTitle>
        <div className="flex">
            <Calendar className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                Inicia em <span className="text-orange-500">
                    <DateFormatter input={opening.opens_at} format="dd/LL/yy"/>
                </span> às 18:00 {/* todo hour */}
                {' '}·{' '}
                Encerra em <span className="text-orange-500">
                    <DateFormatter input={opening.closes_at} format="dd/LL/yy"/>
                </span> às 18:00 {/* todo hour */}
                {' '}·{' '}
                Entrega em <span className="text-orange-500">
                    <DateFormatter input={opening.delivers_at} format="dd/LL/yy"/>
                </span> às 18:00 {/* todo hour */}
            </p>
        </div>

        <SectionTitle>Pedidos realizados</SectionTitle>
        <div className="flex">
            <ShoppingCart className="mr-6 text-gray-500"/>
            <p className="text-gray-500">
                {opening.delivery_count}/{opening.max_delivery_orders} pedidos para entrega
                {' '}·{' '}
                {opening.pickup_count}/{opening.max_pickup_orders} pedidos para retirada
            </p>
        </div>

        {/* todo link */}
        <Button>Visualizar todos os pedidos</Button>
    </>
}
