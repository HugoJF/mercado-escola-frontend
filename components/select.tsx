import {NextPage} from "next";
import {DetailedHTMLProps, SelectHTMLAttributes} from "react";
import {ChevronDown, Icon} from "react-feather";
import clsx from "clsx";

type NativeProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type ComponentProps = {
    chevron?: boolean;
    icon?: Icon;
}
type Props = NativeProps & ComponentProps;

export const Select: NextPage<Props> = ({chevron = true, icon: Icon, children, ...rest}) => {
    return <div className="inline-block relative">
        {Icon &&
        <div className="absolute flex items-center left-0 top-0 bottom-0 ml-6 text-gray-500 pointer-events-none">
            <Icon/>
        </div>}
        <select
            className={clsx('duration-150 py-6 px-8 bg-white hover:bg-gray-50',
                'border border-gray-300 rounded appearance-none cursor-pointer', {
                    'pl-16': Icon,
                    'pr-16': chevron,
                })}
            {...rest}
        >
            {children}
        </select>
        {chevron && <div className="absolute flex items-center right-0 top-0 bottom-0 mr-6 pointer-events-none">
            <ChevronDown size={16}/>
        </div>}
    </div>;
};
