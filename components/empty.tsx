import {FC} from "react";
import {Archive, MapPin} from "react-feather";
import {ListItemGroup} from "./list-item-group";
import {ListItem} from "./list-item";

type Props = {
    title: string;
    description?: string;
}
export const Empty: FC<Props> = ({title, description}) => {
    return <div className="flex flex-col justify-center items-center">
        <Archive className="mb-4 text-gray-400" size={72}/>
        <h2 className="text-lg text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
}
