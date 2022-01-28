import {bxios} from "../helpers/bxios";
import {CartType, PivotCartProductsUser} from "../models/cart";
import {ResourceResponse} from "../models/global";
import {ProductType} from "../models/products";

export const cart = {
    index: () => bxios()
        .get('cart')
        .send<CartType>(),
    updateAddress: (addressId: Id | null) => bxios()
        .patch('cart', 'address')
        .body({address_id: addressId})
        .send<CartType>(),
    product: (id: Id) => bxios()
        .get('cart', 'products', id)
        .send<ResourceResponse<null | ProductType<PivotCartProductsUser>>>(),
    addProduct: (id: Id, quantity: number) => bxios()
        .post('cart', 'products', id)
        .body({quantity})
        .send<CartType>(),
    removeProduct: (id: Id) => bxios()
        .delete('cart', 'products', id)
        .send<CartType>(),
};
