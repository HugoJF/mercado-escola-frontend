import type {NextPage} from 'next'
import {Input} from "../components/input";
import {Title} from "../components/title";
import {SectionTitle} from "../components/section-title";
import {Button} from "../components/button";
import {Select} from "../components/select";
import {Mail, Trash} from "react-feather";
import {IconButton} from "../components/icon-button";
import {ToggleGroup} from "../components/toggle-group";
import {Toggle} from "../components/toggle";
import {Header} from "../components/header";
import {ListItem} from "../components/list-item";

const Home: NextPage = () => {
    return (
        <div className="container mx-auto space-y-4">
            <Header/>
            <Title description="Introduction to NextJS">
                Hello Next.js
            </Title>

            <SectionTitle>Another part of this</SectionTitle>

            <Input name="email" placeholder="Email para contato" type="email" id="pog" error="Invalid email"
                   value="notemail"/>
            <Input name="email" placeholder="Email para contato" type="email" id="pog"/>
            <Input name="email" placeholder="Email para contato" type="email" id="pog" value="asd@asd.com"/>

            <div className="grid grid-cols-2 gap-4">
                <Input name="email" placeholder="Email para contato" type="email" id="pog"/>
                <Input name="email" placeholder="Email para contato" type="email" id="pog" value="asd@asd.com"/>
            </div>

            <div className="space-x-4">
                <Button>Entrar</Button>
                <Button color="primary">Entrar</Button>
                <Button color="danger">Entrar</Button>
            </div>

            <div className="space-x-4">
                <Select icon={Mail}>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                <Select icon={Mail} chevron={false}>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                <Select chevron={false}>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                <Select>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
            </div>
            <div className="space-x-4">
                <IconButton icon={Trash}/>
                <IconButton color="primary" icon={Trash}/>
                <IconButton color="danger" icon={Trash}/>
            </div>
            <div className="space-x-4">
                <form action="">
                    <ToggleGroup>
                        <Toggle id="pog1" name="pog" value="1" checked>Por unidade</Toggle>
                        <Toggle id="pog2" name="pog" value="2">Automatico</Toggle>
                        <Toggle id="pog3" name="pog" value="3">Por peso</Toggle>
                    </ToggleGroup>
                </form>
            </div>
            <div>
                {Object.keys(Array(10).fill(0)).map(i => <ListItem
                    title="Abobrinha"
                    description={(+i % 2) === 0 ? undefined : 'Abobrinha é uma fruta muito boa'}
                    rightIcon={null}
                />)}
            </div>
        </div>
    )
}

export default Home
