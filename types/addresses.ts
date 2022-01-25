import {SoftDeletes, Timestamps} from "./global";

export type AddressType = AddressProperties & AddressComputedProperties & Timestamps & SoftDeletes;

// TODO: migrate to address store
export type AddressProperties = {
    address: string;
    number: string;
    latitude: number;
    longitude: number;
    complement?: string;
}

export type AddressComputedProperties = {
    id: number;
    user_id: number;
}
