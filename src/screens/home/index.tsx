import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Filters, Header, Main, Section, InputGroup } from "./styles";


export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Button variant="default">Nova transação</Button>
                    <Button variant="default">Nova categoria</Button>
                </div>
            </Header>
            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no período" />
                        <InputGroup>
                            <Input variant="dark" label="Início" placeholder="dd/mm/aaaa" />
                            <Input variant="dark" label="Fim" placeholder="dd/mm/aaaa" />
                        </InputGroup>
                    </Filters>
                </Section>
            </Main>
        </>
    )
}