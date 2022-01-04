import {NextPage} from "next";

type Props = {
    description?: string;
}

export const Title: NextPage<Props> = ({description, children}) => {
    return <section>
        <h1 className="text-4xl font-bold">{children}</h1>
        {description && <h2 className="text-gray-700">{description}</h2>}
    </section>;
};
