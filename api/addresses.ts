import {AddressProperties, AddressType} from "../types/addresses";
import {bxios} from "../helpers/bxios";

export const addresses = {
    index: () => bxios()
        .get('addresses')
        .send<AddressType[]>(),
    store: (data: AddressProperties) => bxios()
        .post('addresses')
        .body(data)
        .send<AddressType>(),
    show: (id: Id) => bxios()
        .get('address', id)
        .send<AddressType>(),
    destroy: (id: Id) => bxios()
        .delete('addresses', id)
        .send<AddressType>(),
};
