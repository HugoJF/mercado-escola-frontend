import {Pivot, SoftDeletes, Timestamps} from "@models/global";
import {Media} from "@models/media";

export type WithMedia = {
    media: Media[];
}

export type WithQuantityPivot = Pivot<{
    quantity: number;
    quantity_cost: number;
}>

export type ProductType<T = unknown> = T &
    ProductProperties &
    ProductComputedProperties &
    ProductRelationshipProperties &
    Timestamps &
    SoftDeletes;

export type ProductProperties = {
    name: string;
    description: string;
    quantity_cost: number;
    quantity_step: number;
    unit_name_singular: string;
    unit_name_plural: string;
}

export type ProductRelationshipProperties = {
    media: Media[];
}

export type ProductComputedProperties = {
    id: number;
    media_links: { [id: number]: string };
}
