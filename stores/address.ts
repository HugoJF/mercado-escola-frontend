import {createModel} from "@rematch/core";
import {RootModel} from "./index";

export type AddressState = {
    address?: string;
    number?: string;
    complement?: string;
    center?: [number, number];
};

export const address = createModel<RootModel>()({
    state: {} as AddressState,
    reducers: {
        setAddress: (state, payload: string | undefined) => ({
            ...state,
            address: payload
        }),
        setNumber: (state, payload: string) => ({
            ...state,
            number: payload
        }),
        setComplement: (state, payload: string) => ({
            ...state,
            complement: payload
        }),
        setCenter: (state, payload: [number, number]) => ({
            ...state,
            center: payload
        }),
    },
});
