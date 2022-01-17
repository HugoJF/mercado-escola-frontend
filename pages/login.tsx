import {Input} from "../components/input";
import {Button} from "../components/button";
import {BigTitle} from "../components/text/big-title";
import {CompactCentered} from "../components/layouts/compact-centered";

export default function Login() {
    return <CompactCentered className="grid">
        <BigTitle>MercadoEscola</BigTitle>

        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>

        {/* TODO link */}
        <a className="text-orange-500 text-right" href="#">Esqueceu a sua senha?</a>
        <Button color="primary">Entrar</Button>

        {/* TODO link */}
        <a className="block text-center" href="#">Ainda não possui uma conta? <span className="text-orange-500">Registre-se clicando aqui</span></a>
    </CompactCentered>
}
