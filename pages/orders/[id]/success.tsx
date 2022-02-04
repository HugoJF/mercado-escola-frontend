import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {Approve} from "@components/svg/approve";
import Link from "next/link";

const OrderSuccess: NextPage = () => {
    return <UserLayout className="grid">
        <PageTitle description="Seu pedido foi registrado com sucesso!">
            Obrigado pelo pedido!
        </PageTitle>

        <div className="flex justify-center">
            <Approve/>
        </div>

        {/* TODO format */}
        <p className="text-center">Seu pedido estará disponível para retirada no dia <span className="text-orange-500">01/01/0101</span> às <span className="text-orange-500">14h</span></p>

        <Link href="/orders">
            <Button color="primary">Ver meus pedidos</Button>
        </Link>
    </UserLayout>
}
export default OrderSuccess
