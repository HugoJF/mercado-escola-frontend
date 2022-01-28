import {PaginatedResourceResponse, ResourceResponse} from "../models/global";
import {ProductType} from "../models/products";
import {bxios} from "../helpers/bxios";

export const products = {
    index: () => bxios()
        .get('products')
        .send<PaginatedResourceResponse<ProductType[]>>(),
    ids: (ids: Id[]) => bxios()
        .get('products')
        .setCustom({params: {ids}})
        .send<ResourceResponse<ProductType[]>>(),
    create: (data: FormData) => bxios()
        .post('products')
        .body(data)
        .multipartFormData()
        .send<ResourceResponse<ProductType>>(),
    show: (id: Id) => bxios()
        .get('products', id)
        .send<ResourceResponse<ProductType>>(),
    update: (id: Id, data: FormData) => bxios()
        .patch('products', id)
        .body(data)
        .patchFormDataFix()
        .send<ResourceResponse<ProductType>>(),
    destroy: (id: Id) => bxios()
        .delete('products', id)
        .send<ResourceResponse<ProductType>>(),
    destroyMedia: (productId: Id, mediaId: Id) => bxios()
        .delete('products', productId, 'media', mediaId)
        .send<ResourceResponse<ProductType>>()
};
