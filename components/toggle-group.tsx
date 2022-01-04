import {NextPage} from "next";

export const ToggleGroup: NextPage = ({children}) => {
    return <div className="grid grid-flow-col auto-rows-min">
        {children}
    </div>;
};
