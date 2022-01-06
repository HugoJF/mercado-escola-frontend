import {NextPage} from "next";
import clsx from "clsx";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type BadgeColor = 'green' | 'red' | 'orange' | 'blue';

const classMap: { [key in BadgeColor]: string } = {
    green: 'text-white border-green-600 text-green-600',
    red: 'text-white border-red-600 text-red-600',
    orange: 'text-white border-orange-600 text-orange-600',
    blue: 'text-white border-blue-600 text-blue-600',
}

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
type ExtraProps = {
    color?: BadgeColor,
}

export const Badge: NextPage<NativeProps & ExtraProps> = ({color = 'green', children}) => {
    return <span className={clsx('text-sm font-medium border-2 py-1 px-3 rounded-full', classMap[color])}>
        {children}
    </span>;
};
