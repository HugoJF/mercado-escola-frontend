import {NextPage} from "next";
import Link from "next/link";
import {SimpleModal} from "./simple-modal";
import {Input} from "../input";
import {Button} from "../button";
import {useDispatcher} from "@hooks/use-dispatcher";

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
            <div className="flex flex-col md:flex-row gap-6">
                <Input
                    type="number"
                    placeholder="Número do endereço"
                    className="w-full md:w-1/3"
                    onChange={e => dispatch.address.setNumber(e.target.value)}
                />
                <Input
                    placeholder="Complemento (opcional)"
                    className="w-full md:w-2/3"
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
