import {Input} from "../components/input";
import {Button} from "../components/button";
import {CompactCentered} from "../components/layouts/compact-centered";
import {PageTitle} from "../components/text/page-title";

export default function Register() {
    return <CompactCentered className="grid">
        <PageTitle>Dados para registro</PageTitle>

        <Input placeholder="Nome completo"/>
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>

        {/* TODO link */}
        <Button color="primary">Registrar</Button>

        {/* TODO link */}
        <a className="block text-center" href="#">Já possui uma conta? <span className="text-orange-500">Clique aqui para entrar</span></a>
    </CompactCentered>
}
