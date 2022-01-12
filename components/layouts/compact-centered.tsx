import {NextPage} from "next";

export const CompactCentered: NextPage = ({children}) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="container px-6 space-y-6">
                {children}
            </div>
        </div>
    );
};
