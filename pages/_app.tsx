import '../styles/globals.css'
import './_bootstrap';
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../stores/store";
import Global from "./global";

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Global>
            <Component {...pageProps} />
        </Global>
    </Provider>
}

export default MyApp
