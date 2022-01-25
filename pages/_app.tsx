import '../styles/globals.css'
import './_bootstrap';
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../stores/store";
import Global from "./global";
import {QueryClient, QueryClientProvider} from "react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
    return <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <Global>
                <Component {...pageProps} />
            </Global>
        </Provider>
    </QueryClientProvider>
}

export default MyApp
