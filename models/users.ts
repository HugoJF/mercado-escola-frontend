import {SoftDeletes, Timestamps} from "@models/global";

export type UserType = UserProperties & UserComputedProperties & Timestamps & SoftDeletes;

export type UserProperties = {
    name: string;
    phone: string | null;
    email: string;
    email_verified_at: string | null;
    admin: boolean;
    cart_address_id: number;
} & Timestamps;

export type UserComputedProperties = {
    id: number;
}
