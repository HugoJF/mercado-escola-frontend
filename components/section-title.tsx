import {NextPage} from "next";

export const SectionTitle: NextPage = ({children}) => {
    return <section>
        <h3 className="text-gray-900 text-xl font-medium">{children}</h3>
    </section>;
};
