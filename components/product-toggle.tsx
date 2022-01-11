import {NextPage} from "next";
import {Plus} from "react-feather";

type Props = {
    id: string;
    name: string;
}
// TODO: missing updated text
export const ProductToggle: NextPage<Props> = ({id, name}) => (<div>
    <input id={id} className="peer appearance-none" type="checkbox"/>
    <label
        htmlFor={id}
        className="block p-6 border border-gray-300 peer-checked:border-2 peer-checked:border-green-500 bg-white rounded select-none cursor-pointer"
    >
        {/* TODO image */}
        <div className="bg-gray-200 h-32 rounded"/>
        {/* TODO product information */}
        <div className="space-y-2 mt-6">
            <h2>{name}</h2>
        </div>
        {/* TODO cart logic */}
        <div className="flex items-center justify-center space-x-3 mt-6 text-gray-500 text-sm">
            <Plus/>
            <span>Adicionar produto</span>
        </div>
    </label>
</div>)
