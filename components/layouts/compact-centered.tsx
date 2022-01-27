import {NextPage} from "next";
import clsx from "clsx";

type Props = {
    className?: string;
}

export const CompactCentered: NextPage<Props> = ({className, children}) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className={clsx('container px-6 md:px-16 lg:px-32 xl:px-64 space-y-6', className)}>
                {children}
            </div>
        </div>
    );
};
