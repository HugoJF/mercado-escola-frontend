import {NextPage} from "next";
import {useEffect} from "react";
import {WithHeader} from "@components/layouts/with-header";
import {PageTitle} from "@components/text/page-title";
import {Authed} from "@components/gates/authed";
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

    return <Authed><WithHeader>
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
    </WithHeader></Authed>
}
export default NewAddress
