import {NextPage} from "next";
import {useEffect} from "react";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {AddressAutocomplete} from "@components/address-autocomplete";
import {AddressDetailsModal} from "@components/modals/address-details-modal";
import {useDispatcher} from "@hooks/use-dispatcher";
import {useAddress} from "@helpers/selectors";

const NewAddress: NextPage = () => {
    const dispatch = useDispatcher();
    const address = useAddress();

    useEffect(() => {
        dispatch.address.setAddress(undefined);
    }, [])

    function handleOnSelect(address: string) {
        dispatch.address.setAddress(address);
    }

    return <UserLayout>
        <AddressDetailsModal
            address={address.address ?? ''}
            open={Boolean(address.address)}
            onClose={() => dispatch.address.setAddress(undefined)}
        />

        <PageTitle>Adicionando novo endereço</PageTitle>

        <AddressAutocomplete
            onSelect={handleOnSelect}
        />

        {address && <></>}
    </UserLayout>
}
export default NewAddress
