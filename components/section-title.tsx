import {NextPage} from "next";

export const SectionTitle: NextPage = ({children}) => {
    return <section>
        <h3 className="text-xl font-medium">{children}</h3>
    </section>;
};
