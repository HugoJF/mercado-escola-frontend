import {NextPage} from "next";
import {Authed} from "../../../components/gates/authed";
import {WithHeader} from "../../../components/layouts/with-header";
import {PageTitle} from "../../../components/text/page-title";
import {Button} from "../../../components/button";
import {Empty} from "../../../components/empty";
import {ListItem} from "../../../components/list-item";
import {MapPin, MoreVertical} from "react-feather";
import {ListItemGroup} from "../../../components/list-item-group";
import {useAddresses} from "../../../queries/use-addresses";
import Link from "next/link";

const AddressesIndex: NextPage = () => {
    const addresses = useAddresses();

    return <Authed><WithHeader className="grid">
        <div className="flex justify-between">
            <PageTitle>Endereços</PageTitle>
            <Link href="/account/addresses/new">
                <Button>Adicionar novo endereço</Button>
            </Link>
        </div>

        {/* Update title to name and description to address */}
        {!addresses.isLoading && <ListItemGroup>
            {addresses.data?.data && addresses.data.data.map(address => (
                <ListItem
                    leftIcon={MapPin}
                    rightIcon={MoreVertical}
                    title={address.address}
                    description={address.complement}
                />
            ))}
        </ListItemGroup>}

        {!addresses.isLoading && !addresses.data?.data?.length && <Empty
            title="Nenhum endereço"
            description="Você ainda não cadastrou um endereço de entrega!"
        />}
    </WithHeader></Authed>
}
export default AddressesIndex
