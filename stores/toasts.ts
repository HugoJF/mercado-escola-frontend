import {createModel} from "@rematch/core";
import {v4 as uuid} from 'uuid';
import {RootModel} from "./index";
import {ToastType, ToastTypes} from "@models/toasts";

// TODO move to models
export type ToastsState = {
    [id: string]: ToastType
}

const defaults: ToastType = {
    title: '',
    duration: 5000,
    type: ToastTypes.DEFAULT,
};

export const toasts = createModel<RootModel>()({
    state: {} as ToastsState,
    reducers: {
        add: (state, payload: Partial<ToastType>) => {
            state[uuid()] = {...defaults, ...payload};

            return state;
        },
        remove: (state, payload: string) => {
            delete state[payload];

            return state;
        }
    },
});
