import {NextPage} from "next";
import {Header} from "../header";
import {Breadcrumb} from "../breadcrumb";
import clsx from "clsx";
import {NotificationBox} from "@components/notification-box";
import {CartBar} from "@components/cart-bar";
import {Authed} from "@components/gates/authed";
import {Loader} from "react-feather";

type Props = {
    className?: string;
}

export const UserLayout: NextPage<Props> = ({className, children}) => {
    return (<Authed>
            <Header/>
            <CartBar/>
            <Breadcrumb/>
            <main className={clsx('container mx-auto px-6 space-y-6 py-6', className)}>
                <NotificationBox/>
                {children}
                {!children && <div className="flex justify-center">
                    <Loader className="animate-spin"/>
                </div>}
            </main>
        </Authed>
    );
};
