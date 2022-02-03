import {NextPage} from "next";
import {ChangeEventHandler, useEffect, useState} from "react";
import {SimpleModal} from "./simple-modal";
import {Button} from "../button";
import {Toggle} from "../toggle";
import {ToggleGroup} from "../toggle-group";

type Props = {
    selected: boolean;
    open: boolean;
    onClose: (delivery: boolean) => void;
    onDeliverySelected?: (delivery: boolean) => void; // TODO this may be useless
}
export const CartTypeModal: NextPage<Props> = ({selected, open, onClose, onDeliverySelected}) => {
    const [delivery, setDelivery] = useState(selected);

    useEffect(() => {
        setDelivery(selected)
    }, [selected])

    const handleToggleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const flag = e.target.value === 'delivery';

        setDelivery(flag)
        if (onDeliverySelected) {
            onDeliverySelected(flag);
        }
    }

    function handleOnClose() {
        onClose(delivery);
    }

    return <SimpleModal
        open={open}
        onClose={handleOnClose}
        title="Selecione uma opção"
        description="O pedido pode ser entregue ou retirado"
    >
        <div className="flex flex-col gap-6 p-6">
            <ToggleGroup>
                {/* TODO: add event to move the state higher */}
                <Toggle
                    name="type"
                    id="delivery"
                    value="delivery"
                    onChange={handleToggleChange}
                    checked={delivery}
                >
                    Entregar no endereço
                </Toggle>
                <Toggle
                    name="type"
                    id="takeout"
                    value="takeout"
                    onChange={handleToggleChange}
                    checked={!delivery}
                >
                    Retirar pessoalmente
                </Toggle>
            </ToggleGroup>

            <div className="grid">
                <Button color="primary" onClick={handleOnClose}>Atualizar</Button>
            </div>
        </div>
    </SimpleModal>
}
