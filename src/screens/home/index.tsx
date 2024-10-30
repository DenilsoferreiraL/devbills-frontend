import { InputMask } from "@react-input/mask";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Filters, Header, Main, Section, InputGroup } from "./styles";
import { ButtonIcon } from "../../components/button-icon";


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
                            <InputMask
                                component={Input}
                                mask='dd/mm/yyyy'
                                replacement={{ d: /\d/, m: /\m/, y: /\y/ }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/yyyy"
                            />
                            <InputMask
                                component={Input}
                                mask='dd/mm/yyyy'
                                replacement={{ d: /\d/, m: /\m/, y: /\y/ }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/yyyy"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                </Section>
            </Main>
        </>
    )
}