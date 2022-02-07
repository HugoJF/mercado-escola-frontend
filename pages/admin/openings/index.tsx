import {NextPage} from "next";
import Link from "next/link";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";
import {Select} from "@components/select";
import {useOpenings} from "@queries/use-openings";
import {OpeningType} from "@models/openings";

type Props = {
    openings: OpeningType[];
}
export default () => {
    const openings = useOpenings();

    return <UserLayout>
        {openings.data?.data.data && <OpeningsIndex openings={openings.data.data.data}/>}
    </UserLayout>
}

const OpeningsIndex: NextPage<Props> = ({openings}) => {
    return <>
        <PageTitle>Aberturas</PageTitle>
        <div className="w-full flex justify-between gap-6">
            <Select>
                <option value="administrator">Aberturas disponíveis</option>
            </Select>
            <Link href="/admin/openings/create">
                <Button color="primary">Adicionar abertura</Button>
            </Link>
        </div>
        <ListItemGroup>
            {openings.map(opening => (
                <ListItem
                    title={`Abertura ${opening.id}`}
                    description={`Taxa de entrega de R$ ${opening.delivery_fee} · ${opening.delivery_count} pedidos de entrega · ${opening.pickup_count} pedidos para retirada`}
                />
            ))}
        </ListItemGroup>
    </>
}
