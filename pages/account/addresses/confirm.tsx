import {NextPage} from "next";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {useEffect} from "react";
import {WithHeader} from "@components/layouts/with-header";
import {PageTitle} from "@components/text/page-title";
import {Authed} from "@components/gates/authed";
import {Input} from "@components/input";
import {Select} from "@components/select";
import {Button} from "@components/button";
import {useGeocode} from "@hooks/use-geocode";
import {useDispatcher} from "@hooks/use-dispatcher";
import {useAddress} from "@helpers/selectors";
import {useAddressCreate} from "@mutations/use-address-create";

// This dynamic import is required since react-leaflet will crash with 'window is not defined'
const MapWithPing = dynamic(() => import("@components/map-with-ping"), {ssr: false});

const ConfirmAddress: NextPage = () => {
    const dispatch = useDispatcher();
    const address = useAddress();
    const router = useRouter();
    const codedCenter = useGeocode(address.address!);
    const addressCreate = useAddressCreate();

    useEffect(() => {
        if (codedCenter) {
            dispatch.address.setCenter(codedCenter)
        }
    }, [codedCenter])

    useEffect(() => {
        if (!address.address || !address.number) {
            router.push('/account/addresses/new');
        }
    }, [address])

    function handleOnCenter(center: [number, number]) {
        dispatch.address.setCenter(center);
    }

    async function handleAddressCreation() {
        await addressCreate.mutateAsync({
            address: address.address!,
            number: address.number!,
            complement: address.complement,
            latitude: address.center![0],
            longitude: address.center![1],
        });
        // TODO: add notification
        await router.push('/account/addresses');
    }

    return <Authed><WithHeader>
        <PageTitle>Dados do endereço</PageTitle>

        <div className="grid grid-cols-2 gap-6">
            <Input
                placeholder="Endereço"
                value={address.address}
                readOnly
            />
            <Input
                placeholder="Número"
                value={address.number}
                readOnly
            />
        </div>

        <div className="grid">
            <Input
                placeholder="Complemento"
                value={address.complement}
                readOnly
            />
        </div>

        {codedCenter && address.center && <MapWithPing center={address.center} onCenter={handleOnCenter}/>}

        <div className="flex gap-6">
            <Select>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
            </Select>
            <Button onClick={handleAddressCreation} className="flex-grow" color="primary">Salvar</Button>
        </div>

        {address && <></>}
    </WithHeader></Authed>
}
export default ConfirmAddress
