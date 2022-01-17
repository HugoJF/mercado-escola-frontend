import {NextPage} from "next";
import {Header} from "../header";
import {Breadcrumb} from "../breadcrumb";
import clsx from "clsx";

type Props = {
    className?: string;
}

export const WithHeader: NextPage<Props> = ({className, children}) => {
    return (<>
            <Header/>
            <Breadcrumb/>
            <main className={clsx('container mx-auto px-6 space-y-6 pt-20 pb-10', className)}>
                {children}
            </main>
        </>
    );
};
