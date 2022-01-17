import type {NextPage} from 'next'
import {Title} from "../components/title";
import {Button} from "../components/button";
import {Mail, Minus, Plus, ShoppingBag, ShoppingCart, Trash, User, Users} from "react-feather";
import {IconButton} from "../components/icon-button";
import {ToggleGroup} from "../components/toggle-group";
import {Toggle} from "../components/toggle";
import {Header} from "../components/header";
import {Breadcrumb} from "../components/breadcrumb";
import {useState} from "react";
import {SimpleModal} from "../components/modals/simple-modal";
import {ProductCard} from "../components/product-card";
import {ProductToggle} from "../components/product-toggle";
import {SectionTitle} from "../components/section-title";
import {Table} from "../components/table/table";
import {Thead} from "../components/table/thead";
import {TheadTd} from "../components/table/thead-td";
import {LinkGroup} from "../components/link-group";
import {Badge} from "../components/badge";
import {Td} from "../components/table/td";
import {Pagination} from "../components/pagination";
import {Select} from "../components/select";
import {LinkGroupItem} from "../components/link-group-item";
import {Tbody} from "../components/table/tbody";
import {ListItem} from "../components/list-item";
import {Tr} from "../components/table/tr";
import {Input} from "../components/input";

const Home: NextPage = () => {
    const [simpleModal, setSimpleModal] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [productModal, setProductModal] = useState(false);

    return <>
        <Header/>
        <Breadcrumb/>

        <div className="container mx-auto space-y-4 pt-6 pb-32 px-6">
            <Title description="Introduction to NextJS">
                Hello Next.js
            </Title>

            <div className="flex space-x-4">
                <Button
                    onClick={() => setSimpleModal(!simpleModal)}>
                    {['Abrir modal simple', 'Fechar'][+simpleModal]}
                </Button>
                <Button
                    onClick={() => setToggleModal(!toggleModal)}>
                    {['Abrir toggle modal', 'Fechar'][+toggleModal]}
                </Button>
                <Button
                    onClick={() => setProductModal(!productModal)}>
                    {['Abrir product modal', 'Fechar'][+productModal]}
                </Button>
            </div>

            <SimpleModal
                title={<>Deseja remover <strong>Abobrinha Paulista picado pequeno</strong> do carrinho?</>}
                open={simpleModal}
                onClose={() => setSimpleModal(false)}
            >
                <div className="p-6 grid grid-cols-2 gap-4">
                    <Button
                        onClick={() => setSimpleModal(false)}
                    >
                        Cancelar
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => setSimpleModal(false)}
                    >
                        Remover do carrinho
                    </Button>
                </div>
            </SimpleModal>

            <SimpleModal
                title={<>Deseja remover <strong>Abobrinha Paulista picado pequeno</strong> do carrinho?</>}
                description={<>O pedido pode ser entregue ou retirado na feira</>}
                open={toggleModal}
                onClose={() => setToggleModal(false)}
            >
                <div className="p-6 grid grid-cols-1 gap-4">
                    <ToggleGroup>
                        <Toggle name="type" id="takeout">Entregar no endereço</Toggle>
                        <Toggle name="type" id="delivery">Retirar pessoalmente</Toggle>
                    </ToggleGroup>
                    <Button onClick={() => setToggleModal(false)} color="primary">Atualizar</Button>
                </div>
            </SimpleModal>

            <SimpleModal
                title={<>Adicionando <strong>Abobrinha Paulista picado pequeno</strong> ao carrinho</>}
                open={productModal}
                onClose={() => setProductModal(false)}
            >
                <div className="p-6 grid grid-cols-1 gap-4">
                    <div className="flex gap-4 justify-between">
                        <span>R$ 5,00</span>
                        <span>1 pacote</span>
                    </div>
                    <div className="flex gap-4">
                        <IconButton icon={Minus}/>
                        <IconButton icon={Plus}/>
                        <Button
                            onClick={() => setProductModal(false)}
                            color="primary"
                            className="flex-grow"
                        >
                            Adicionar
                        </Button>
                    </div>
                </div>
            </SimpleModal>

            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(() => <ProductCard
                    name="Abobrinha Paulista picado pequeno"
                    unit="pacote"
                    price={2.50}
                />)}
            </div>

            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <ProductToggle
                    id={i + ''}
                    name="Abobrinha Paulista picado pequeno"
                />)}
            </div>

            <SectionTitle>Another part of this</SectionTitle>

            <Input name="email1" placeholder="Email para contato" type="email" id="pog" error="Invalid email"
                   value="notemail"/>
            <Input name="email2" placeholder="Email para contato" type="email" id="pog"/>
            <Input name="email3" placeholder="Email para contato" type="email" id="pog" value="asd@asd.com"/>

            <div className="grid grid-cols-2 gap-4">
                <Input name="email4" placeholder="Email para contato" type="email" id="pog"/>
                <Input name="email5" placeholder="Email para contato" type="email" id="pog" value="asd@asd.com"/>
            </div>

            <Table>
                <Thead>
                    <Tr>
                        <TheadTd>NOME</TheadTd>
                        <TheadTd>SITUAÇÃO</TheadTd>
                        <TheadTd>CARGO</TheadTd>
                    </Tr>
                </Thead>
                <Tbody>
                    {[1, 2, 3, 4, 5].map(() => (
                        <Tr>
                            <Td>
                                <h5>Rafael Fulano</h5>
                                <span className="block text-gray-700 text-sm mono">rafael.fulano@gmail.com</span>
                            </Td>
                            <Td>
                                <Badge>Verificado</Badge>
                            </Td>
                            <Td>
                                <Select>
                                    <option value="administrator">Administrador</option>
                                    <option value="user">Usuário</option>
                                </Select>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <div className="space-x-4">
                <Button>Entrar</Button>
                <Button color="primary">Entrar</Button>
                <Button color="danger">Entrar</Button>
            </div>

            <div className="flex items-center space-x-4">
                <Badge>Green</Badge>
                <Badge color="red">Red</Badge>
                <Badge color="orange">Orange</Badge>
                <Badge color="blue">Blue</Badge>
            </div>

            <Pagination/>

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
                <ToggleGroup>
                    <Toggle id="pog1" name="pog">Por unidade</Toggle>
                    <Toggle id="pog2" name="pog">Automatico</Toggle>
                    <Toggle id="pog3" name="pog">Por peso</Toggle>
                </ToggleGroup>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <LinkGroup title="Produtos" icon={ShoppingBag}>
                    <LinkGroupItem>Adicionar novo produto</LinkGroupItem>
                    <LinkGroupItem>Ver todos os produtos</LinkGroupItem>
                </LinkGroup>
                <LinkGroup title="Produtores" icon={Users}>
                    <LinkGroupItem>Registrar novo produtor</LinkGroupItem>
                    <LinkGroupItem>Ver todos os produtores</LinkGroupItem>
                </LinkGroup>
                <LinkGroup title="Aberturas" icon={ShoppingCart}>
                    <LinkGroupItem>Adicionar nova abertura</LinkGroupItem>
                    <LinkGroupItem>Ver aberturas pendentes</LinkGroupItem>
                    <LinkGroupItem>Ver todas as aberturas</LinkGroupItem>
                </LinkGroup>
                <LinkGroup title="Usuários" icon={User}>
                    <LinkGroupItem>Ver todos os usuários</LinkGroupItem>
                </LinkGroup>
            </div>
            <div className="divide-y border border-gray-300 bg-white rounded">
                {Object.keys(Array(10).fill(0)).map(i => <ListItem
                    title="Abobrinha"
                    description={(+i % 2) === 0 ? undefined : 'Abobrinha é uma fruta muito boa'}
                    rightIcon={(+i % 2) === 0 ? undefined : null}
                />)}
            </div>
        </div>

    </>
}

export default Home
