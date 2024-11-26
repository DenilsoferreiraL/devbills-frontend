import { InputMask } from "@react-input/mask";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Filters, Header, Main, Section, InputGroup, Balance, ChartContainer, ChartContent, ChartAction, Aside, SerachTransaction, TransactionGroup } from "./styles";
import { ButtonIcon } from "../../components/button-icon";
import { Card } from "../../components/card";
import { Transaction } from "../../components/transaction";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { CreateTransactionDialog } from "../../components/create-transaction-dialog";
import { CategoriesPieChart } from "../../components/categories-pie-chart";
import { FinancialEvolutionBarChart } from "../../components/financial-evolution-bar-chart";
import { TransactionsFilterData } from "../../validators/types";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionsFilterSchema } from "../../validators/schemas";


export function Home() {

    const transactionsFilterForm = useForm<TransactionsFilterData>({
        defaultValues: {
            title: '',
            categoryId: '',
            beginDate: dayjs().startOf('month').format('DD/MM/YYYY'),
            endDate: dayjs().endOf('month').format('DD/MM/YYYY')
        },
        resolver: zodResolver(transactionsFilterSchema)
    })

    return (
        <>
            <Header>
                <Logo />
                <div>
                    <CreateTransactionDialog />
                    <CreateCategoryDialog />
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
                        <header style={{ display: 'flex', flexDirection: 'column' }}>
                            <Title title="Gastos" subtitle="Despesas por categoria no período" />
                            <ChartContent>
                                <CategoriesPieChart />
                            </ChartContent>
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
                        <ChartContent>
                            <FinancialEvolutionBarChart />
                        </ChartContent>
                    </ChartContainer>
                </Section>
                <Aside>
                    <header>
                        <Title title="Transações" subtitle="Receitas e gastos no período" />
                        <SerachTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar transações"
                            />
                            <ButtonIcon />
                        </SerachTransaction>
                    </header>
                    <TransactionGroup>
                        <Transaction id={1} amount={20000} date='09/09/2023' category={{ title: 'Alimentação', color: '#ff33bb' }} title='Mercado' />
                    </TransactionGroup>
                </Aside>
            </Main >
        </>
    )
}