import {FC, ReactNode} from "react";
import {Check, Icon, MessageSquare, Slash, X} from "react-feather";
import useTimeout from "use-timeout";
import clsx from "clsx";
import {ToastTypes} from "@models/toasts";
import {useDispatcher} from "@hooks/use-dispatcher";

const classNames: Record<ToastTypes, string> = {
    [ToastTypes.DEFAULT]: 'bg-blue-500',
    [ToastTypes.SUCCESS]: 'bg-green-500',
    [ToastTypes.WARNING]: 'bg-yellow-500',
    [ToastTypes.ERROR]: 'bg-red-500',
}

const icons: Record<ToastTypes, Icon> = {
    [ToastTypes.DEFAULT]: MessageSquare,
    [ToastTypes.SUCCESS]: Check,
    [ToastTypes.WARNING]: Slash,
    [ToastTypes.ERROR]: X,
}

type Props = {
    id?: string;
    duration?: number;
    title: string | ReactNode;
    description?: string | ReactNode;
    type: ToastTypes;
}
export const Notification: FC<Props> = ({id, duration, title, description, type = ToastTypes.DEFAULT}) => {
    const dispatch = useDispatcher();
    const Icon = icons[type];

    function dismiss() {
        if (id) {
            dispatch.toasts.remove(id);
        }
    }

    useTimeout(dismiss, duration ?? null);

    return <div
        className="flex items-stretch px-6 py-3 space-x-6 border border-t-0 first:border-t border-gray-300 bg-white first:rounded-t last:rounded-b"
    >
        <div
            className={clsx('flex self-center items-center justify-center w-8 h-8 text-white font-bold rounded-full', classNames[type])}
        >
            <Icon size={18} strokeWidth={2.5}/>
        </div>
        <div className="flex-grow space-y-1">
            <h4 className="text-lg">{title}</h4>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
        <X
            onClick={() => dismiss()}
            className="duration-150 self-center text-gray-500 hover:text-gray-600 cursor-pointer"
        />
    </div>
}
