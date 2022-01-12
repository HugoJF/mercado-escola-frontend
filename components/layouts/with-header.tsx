import {NextPage} from "next";
import {Header} from "../header";
import {Breadcrumb} from "../breadcrumb";

export const WithHeader: NextPage = ({children}) => {
    return (<div>
            <Header/>
            <Breadcrumb/>
            <main className="container mx-auto space-y-6 pt-20">
                {children}
            </main>
        </div>
    );
};
