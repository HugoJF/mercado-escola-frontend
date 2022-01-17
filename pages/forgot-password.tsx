import {Input} from "../components/input";
import {Button} from "../components/button";
import {CompactCentered} from "../components/layouts/compact-centered";
import {PageTitle} from "../components/text/page-title";

export default function ForgotPassword() {
    return <CompactCentered className="grid">
        <PageTitle
            description="Enviaremos um email contendo instruções para trocar a senha de sua conta."
        >
            Esqueci minha senha
        </PageTitle>

        <Input placeholder="Digite o email da sua conta"/>

        {/* TODO link */}
        <Button color="primary">Enviar instruções</Button>
    </CompactCentered>
}
