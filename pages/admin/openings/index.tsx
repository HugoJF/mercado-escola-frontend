import {NextPage} from "next";
import Link from "next/link";
import {WithHeader} from "@components/layouts/with-header";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";
import {Select} from "@components/select";
import {useOpenings} from "@queries/use-openings";

const OpeningsIndex: NextPage = () => {
    const openings = useOpenings();

    return <WithHeader>
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
            {openings.data?.data.data.map(opening => (
                <ListItem
                    title={`Abertura ${opening.id}`}
                    description={`Taxa de entrega de R$ ${opening.delivery_fee} · ${opening.delivery_count} pedidos de entrega · ${opening.pickup_count} pedidos para retirada`}
                />
            ))}
        </ListItemGroup>
    </WithHeader>
}
export default OpeningsIndex
