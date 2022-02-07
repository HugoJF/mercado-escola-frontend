import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Table} from "@components/table/table";
import {Thead} from "@components/table/thead";
import {TheadTd} from "@components/table/thead-td";
import {Tbody} from "@components/table/tbody";
import {Tr} from "@components/table/tr";
import {Td} from "@components/table/td";
import {Badge} from "@components/badge";
import {Select} from "@components/select";
import {useUsers} from "@queries/use-users";
import {useUserUpdate} from "@mutations/use-user-update";
import {UserType} from "@models/users";

type Props = {
    users: UserType[];
    onUserUpdate?: () => void;
};

export default () => {
    const users = useUsers();

    return <UserLayout>
        {users.data?.data.data && <UsersIndex
            users={users.data.data.data}
            onUserUpdate={() => users.refetch()}
        />}
    </UserLayout>
}
const UsersIndex: NextPage<Props> = ({users, onUserUpdate}) => {
    const updateUser = useUserUpdate();

    async function handleUserUpdate(user: UserType, role: string) {
        const admin = role === 'administrator';
        // TODO handle exceptions
        await updateUser.mutateAsync({id: user.id, data: {admin}});
        if (onUserUpdate) {
            onUserUpdate();
        }
    }

    return <>
        <PageTitle>Usuários registrados</PageTitle>
        <Table>
            <Thead>
                <TheadTd>Nome</TheadTd>
                <TheadTd>Situação</TheadTd>
                <TheadTd>Cargo</TheadTd>
            </Thead>
            <Tbody>
                {users.map(user => (
                    <Tr key={user.id}>
                        <Td>
                            <h5>{user.name}</h5>
                            <span className="block text-gray-700 text-sm font-mono">{user.email}</span>
                        </Td>
                        <Td>
                            {user.email_verified_at && <Badge color="green">Verificado</Badge>}
                            {!user.email_verified_at && <Badge color="red">Pendente</Badge>}
                        </Td>
                        <Td fit>
                            <Select
                                onChange={e => handleUserUpdate(user, e.target.value)}
                                value={user.admin ? 'administrator' : 'user'}
                            >
                                <option value="administrator">
                                    Administrador
                                </option>
                                <option value="user">
                                    Usuário
                                </option>
                            </Select>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </>
}
