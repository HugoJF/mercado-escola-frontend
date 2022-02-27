import {NextPage} from "next";
import Link from "next/link";
import {MapPin, MoreVertical} from "react-feather";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {Empty} from "@components/empty";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";
import {useAddresses} from "@queries/use-addresses";
import {AddressType} from "@models/addresses";

type Props = {
    addresses: AddressType[];
}
export default () => {
    const addresses = useAddresses();

    return <UserLayout className="grid">
        {addresses.data?.data && <AddressesIndex addresses={addresses.data?.data}/>}
    </UserLayout>
}

const AddressesIndex: NextPage<Props> = ({addresses}) => {
    return <>
        <div className="flex justify-between">
            <PageTitle>Endereços</PageTitle>
            <Link href="/account/addresses/new">
                <Button>Adicionar novo endereço</Button>
            </Link>
        </div>

        {/* Update title to name and description to address */}
        <ListItemGroup>
            {addresses.map(address => (
                <ListItem
                    leftIcon={MapPin}
                    rightIcon={MoreVertical}
                    title={address.name}
                    description={[address.address, address.number].filter(Boolean).join(', ')}
                />
            ))}
        </ListItemGroup>

        {!addresses.length && <Empty
            title="Nenhum endereço"
            description="Você ainda não cadastrou um endereço de entrega!"
        />}
    </>
}
