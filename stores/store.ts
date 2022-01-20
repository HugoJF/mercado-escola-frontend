import {init, RematchDispatch, RematchRootState} from "@rematch/core";
import {models, RootModel} from ".";
import createImmerPlugin from "@rematch/immer";
import persist from '@rematch/persist';
import storage from 'redux-persist/lib/storage'

export const store = init<RootModel>({
    models,
    plugins: [
        persist({
            key: 'persist-storage',
            storage,
        }),
        createImmerPlugin(),
    ]
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
