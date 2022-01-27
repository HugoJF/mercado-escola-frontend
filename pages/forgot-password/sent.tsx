import {CompactCentered} from "../../components/layouts/compact-centered";
import {PageTitle} from "../../components/text/page-title";
import {Button} from "../../components/button";
import Link from "next/link";
import {Mail} from "../../components/svg/mail";

export default function ForgotPasswordSent() {
    return <CompactCentered className="grid">
        <PageTitle
            description="Instruções contendo informações para redefinir a sua senha foi enviado para o seu email!"
        >
            Email enviado!
        </PageTitle>

        <div className="flex justify-center h-48">
            <Mail/>
        </div>

        <Link href="/login">
            <Button color="primary">Continuar</Button>
        </Link>
    </CompactCentered>
}
