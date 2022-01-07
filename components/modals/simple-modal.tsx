import {NextPage} from "next";
import clsx from "clsx";
import {Portal} from "../portal";
import {ReactNode} from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    title: ReactNode;
    description?: ReactNode;
}
export const SimpleModal: NextPage<Props> = ({title, description, open, onClose, children}) => (
    <Portal>
        <div
            onClick={() => onClose && onClose()}
            className={clsx('fixed inset-x-0 inset-y-0 bg-black ', {
                'z-40 opacity-25': open,
                '-z-10 opacity-0': !open,
            })}
        />

        <div className={clsx('duration-150 fixed inset-x-0 bottom-0 bg-gray-100 border-t border-gray-300 z-50', {
            'translate-y-0': open,
            'translate-y-full': !open,
        })}>
            <div className="p-4 space-y-2">
                <h4 className="text-center">
                    {title}
                </h4>
                {description && <p className="text-center text-gray-500 text-sm">{description}</p>}
            </div>
            <hr/>
            {children}
        </div>
    </Portal>
)
