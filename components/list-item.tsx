import {ChevronRight, Icon, ShoppingBag} from "react-feather";
import {forwardRef} from "react";

type Props = {
    title: string;
    description?: string;
    leftIcon?: Icon | null;
    rightIcon?: Icon | null;
    onClick?: () => void;
}

export const ListItem = forwardRef<HTMLDivElement, Props>(({
                                                               title,
                                                               description,
                                                               onClick,
                                                               leftIcon: LeftIcon = ShoppingBag,
                                                               rightIcon: RightIcon = ChevronRight,
                                                           }, ref) => {
    return <div
        ref={ref}
        onClick={onClick}
        className="duration-150 flex items-center p-3 hover:bg-gray-100 first:rounded-t last:rounded-b cursor-pointer">
        {LeftIcon && <LeftIcon className="my-3 ml-3 text-gray-500"/>}

        <div className="ml-4 flex flex-grow flex-col justify-center">
            <h4>{title}</h4>
            {description && <p className="mt-2 text-gray-500 text-sm">
                {description}
            </p>}
        </div>

        {RightIcon && <RightIcon className="my-3 mr-3 text-gray-700"/>}
    </div>;
});
