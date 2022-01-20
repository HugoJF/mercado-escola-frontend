import {bxios} from "../helpers/bxios";
import {ResourceResponse} from "../types/global";
import {ProductType} from "../types/products";

export const favorites = {
    index: () => bxios()
        .get('favorites')
        .send<ResourceResponse<ProductType[]>>(),
    store: (productId: Id) => bxios()
        .post('favorites', productId)
        .send<ResourceResponse<null>>(),
    destroy: (productId: Id) => bxios()
        .delete('favorites', productId)
        .send<ResourceResponse<null>>(),
};
