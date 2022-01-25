import {NextPage} from "next";
import {SimpleModal} from "./simple-modal";
import {Input} from "../input";
import {Button} from "../button";
import Link from "next/link";
import {useDispatcher} from "../../hooks/use-dispatcher";

type Props = {
    address: string;
    open: boolean;
    onClose: () => void;
}
// TODO: form this
export const AddressDetailsModal: NextPage<Props> = ({address, open, onClose, children}) => {
    const dispatch = useDispatcher();

    return <SimpleModal
        open={open}
        onClose={onClose}
        title="Informações do endereço"
        description={address}
    >
        <div className="flex flex-col gap-6 p-6">
            <div className="grid grid-cols-2 gap-6">
                <Input
                    placeholder="Número do endereço"
                    onChange={e => dispatch.address.setNumber(e.target.value)}
                />
                <Input
                    placeholder="Complemento (opcional)"
                    onChange={e => dispatch.address.setComplement(e.target.value)}
                />
            </div>
            <div className="grid">
                <Link href="/account/addresses/confirm">
                    <Button color="primary">Continuar</Button>
                </Link>
            </div>
        </div>
    </SimpleModal>
}
