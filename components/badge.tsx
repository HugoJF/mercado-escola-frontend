import {NextPage} from "next";
import clsx from "clsx";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type BadgeColor = 'green' | 'red' | 'orange' | 'blue';

const classMap: { [key in BadgeColor]: string } = {
    green: 'text-white bg-green-200 border-green-300 text-green-900',
    red: 'text-white bg-red-200 border-red-300 text-red-900',
    orange: 'text-white bg-orange-200 border-orange-300 text-orange-900',
    blue: 'text-white bg-blue-200 border-blue-300 text-blue-900',
}

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
type ExtraProps = {
    color?: BadgeColor,
}

export const Badge: NextPage<NativeProps & ExtraProps> = ({color = 'green', children}) => {
    return <span className={clsx('text-sm font-medium border py-1 px-3 rounded', classMap[color])}>
        {children}
    </span>;
};
