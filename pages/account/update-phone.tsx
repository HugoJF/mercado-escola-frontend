import {Button} from "../../components/button";
import {PageTitle} from "../../components/text/page-title";
import {Input} from "../../components/input";
import {WithHeader} from "../../components/layouts/with-header";
import Link from "next/link";

export default function UpdatePhone() {
    return <WithHeader className="grid">
        <PageTitle
            description="Esse número será utilizado apenas para confirmar seu pedido e em caso de problemas"
        >
            Telefone para contato
        </PageTitle>

        <Input placeholder="Telefone para contato"/>

        {/* TODO link */}
        <Link href="/account">
            <Button color="primary">Salvar</Button>
        </Link>
    </WithHeader>
}
