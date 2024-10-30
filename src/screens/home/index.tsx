import { InputMask } from "@react-input/mask";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Filters, Header, Main, Section, InputGroup, Balance, ChartContainer, ChartContent, ChartAction } from "./styles";
import { ButtonIcon } from "../../components/button-icon";
import { Card } from "../../components/card";


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
                                mask='dd/mm/aaaa'
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask='dd/mm/aaaa'
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Receitas" amount={1000000} variant="incomes" />
                        <Card title="Gastos" amount={1000000} variant="expenses" />
                    </Balance>
                    <ChartContainer>
                        <header>
                            <Title title="Gastos" subtitle="Despesas por categoria no período" />
                            <ChartContent></ChartContent>
                        </header>
                    </ChartContainer>

                    <ChartContainer>
                        <header>
                            <Title title="Evolução Financeira" subtitle="Saldo, Receitas e Gastos no ano" />
                            <ChartAction>
                                <InputMask
                                    component={Input}
                                    mask='aaaa'
                                    replacement={{ a: /\d/ }}
                                    variant="black"
                                    label="Ano"
                                    placeholder="aaaa"
                                />
                                <ButtonIcon />
                            </ChartAction>
                        </header>
                        <ChartContent></ChartContent>
                    </ChartContainer>
                </Section>
            </Main>
        </>
    )
}