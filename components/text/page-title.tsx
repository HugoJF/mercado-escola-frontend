import {NextPage} from "next";

type Props = {
    description?: string;
}
export const PageTitle: NextPage<Props> = ({description, children}) => (<section>
    <h1 className="text-4xl text-left font-bold">{children}</h1>
    {description && <p className="text-left">{description}</p>}
</section>)
