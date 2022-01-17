import {NextPage} from "next";
import {WithHeader} from "../../../components/layouts/with-header";
import {PageTitle} from "../../../components/text/page-title";
import {Button} from "../../../components/button";
import {ListItem} from "../../../components/list-item";
import {ListItemGroup} from "../../../components/list-item-group";
import {Select} from "../../../components/select";

const OpeningsIndex: NextPage = () => {
    return <WithHeader>
        <PageTitle>Aberturas</PageTitle>
        <div className="w-full flex justify-between gap-6">
            <Select>
                <option value="administrator">Aberturas disponíveis</option>
            </Select>
            <Button color="primary">Adicionar abertura</Button>
        </div>
        <ListItemGroup>
            {[1, 2, 3, 4, 5].map(() => (
                <ListItem
                    title="Abobrinha"
                    description="R$ 5,00/pacote · 3 imagens"
                />
            ))}
        </ListItemGroup>
    </WithHeader>
}
export default OpeningsIndex
