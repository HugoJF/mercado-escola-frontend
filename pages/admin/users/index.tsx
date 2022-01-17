import {NextPage} from "next";
import {WithHeader} from "../../../components/layouts/with-header";
import {PageTitle} from "../../../components/text/page-title";
import {Table} from "../../../components/table/table";
import {Thead} from "../../../components/table/thead";
import {TheadTd} from "../../../components/table/thead-td";
import {Tbody} from "../../../components/table/tbody";
import {Tr} from "../../../components/table/tr";
import {Td} from "../../../components/table/td";
import {Badge} from "../../../components/badge";
import {Select} from "../../../components/select";

const UsersIndex: NextPage = () => {
    return <WithHeader>
        <PageTitle>Usuários registrados</PageTitle>
        <Table>
            <Thead>
                <TheadTd>Nome</TheadTd>
                <TheadTd>Situação</TheadTd>
                <TheadTd>Cargo</TheadTd>
            </Thead>
            <Tbody>
                {[1,2,3,4,5].map(() => (
                    <Tr>
                        <Td>
                            <h5>Rafael Fulano</h5>
                            <span className="block text-gray-700 text-sm mono">rafael.fulano@gmail.com</span>
                        </Td>
                        <Td>
                            <Badge>Verificado</Badge>
                        </Td>
                        <Td fit>
                            <Select>
                                <option value="administrator">Administrador</option>
                                <option value="user">Usuário</option>
                            </Select>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </WithHeader>
}
export default UsersIndex
