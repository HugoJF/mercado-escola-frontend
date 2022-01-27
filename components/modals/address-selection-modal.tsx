import {NextPage} from "next";
import {SimpleModal} from "./simple-modal";
import {useAddresses} from "../../queries/use-addresses";
import {AddressList} from "../addresses/address-list";
import {AddressType} from "../../types/addresses";
import {Button} from "../button";

type Props = {
    open: boolean;
    onClose: () => void;
    onAddressSelection: (address: AddressType) => void;
}
export const AddressSelectionModal: NextPage<Props> = ({open, onClose, onAddressSelection}) => {
    const addresses = useAddresses();

    function handleAddressSelection(address: AddressType) {
        onAddressSelection(address);
        onClose();
    }

    return <SimpleModal
        open={open}
        onClose={onClose}
        title="Selecione um endereço"
        description="Seu pedido será entregue no endereço selecionado"
    >
        <div className="flex flex-col gap-6 p-6">

            {/* Update title to name and description to address */}
            {!addresses.isLoading && <AddressList
                addresses={addresses.data!.data}
                onClick={handleAddressSelection}
            />}

            <Button onClick={() => onClose()}>Cancelar</Button>
        </div>
    </SimpleModal>
}
