import {google, Loader} from "google-maps";


let instance: google | null = null;

export const load = async () => {
    const loader = new Loader(process.env.NEXT_PUBLIC_GOOGLE_API_KEY, {
        libraries: ['places'],
        language: 'pt-BR',
    });

    instance = await loader.load();
};

export const Google = (): google => {
    if (instance === null) {
        throw new Error('Google API is not loaded');
    }

    return instance;
};
