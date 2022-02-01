import {NextPage} from "next";
import {Header} from "../header";
import {Breadcrumb} from "../breadcrumb";
import clsx from "clsx";
import {NotificationBox} from "@components/notification-box";
import {CartBar} from "@components/cart-bar";

type Props = {
    className?: string;
}

export const WithHeader: NextPage<Props> = ({className, children}) => {
    return (<>
            <Header/>
            <CartBar/>
            <Breadcrumb/>
            <main className={clsx('container mx-auto px-6 space-y-6 py-6', className)}>
                <NotificationBox/>
                {children}
            </main>
        </>
    );
};
