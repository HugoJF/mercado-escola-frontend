import {SoftDeletes, Timestamps} from "@models/global";

export type UserType = UserProperties & UserComputedProperties & Timestamps & SoftDeletes;

export type UserProperties = {
    name: string,
    phone: string | null,
    email: string,
    admin: boolean,
}

export type UserComputedProperties = {
    id: number;
}
