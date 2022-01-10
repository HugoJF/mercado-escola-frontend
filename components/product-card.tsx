import {NextPage} from "next";
import {PlusCircle} from "react-feather";

export const ProductCard: NextPage = () => (
    <div className="p-6 bg-white border border-gray-300 rounded">
        {/* TODO image */}
        <div className="bg-gray-200 h-32 rounded"/>
        {/* TODO product information */}
        <div className="space-y-2 mt-6">
            <h2>Alface americana</h2>
            <p>
                <span className="text-orange-500">R$ 5,00</span>
                <span className="text-sm text-gray-700">/pacote</span>
            </p>
        </div>
        {/* TODO cart logic */}
        <div className="flex items-center justify-center space-x-3 mt-6 text-gray-500 text-sm">
            <PlusCircle/>
            <span>Adicionar ao carrinho</span>
        </div>
    </div>
)
