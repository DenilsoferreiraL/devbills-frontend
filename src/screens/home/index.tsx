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
import { CategoriesPieChart, CategoryProps } from "../../components/categories-pie-chart";
import { FinancialEvolutionBarChart } from "../../components/financial-evolution-bar-chart";
import { TransactionsFilterData } from "../../validators/types";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionsFilterSchema } from "../../validators/schemas";
import { useCallback, useEffect, useState } from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI";


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

    const { transactions, fetchTransactions } = useFetchAPI()

    useEffect(() => {
        fetchTransactions(transactionsFilterForm.getValues())
    }, [fetchTransactions, transactionsFilterForm])

    const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null)

    const handleSelectCategory = useCallback(({ title, id, color }: CategoryProps) => {
        setSelectedCategory({ title, id, color })
        transactionsFilterForm.setValue('categoryId', id)
    }, [transactionsFilterForm])

    const handleDeselectCategory = useCallback(() => {
        setSelectedCategory(null)
        transactionsFilterForm.setValue('categoryId', '')
    }, [transactionsFilterForm])

    const onSubmitTransactions = useCallback(async (data: TransactionsFilterData) => {
        await fetchTransactions(data)
    }, [fetchTransactions])

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
                                error={transactionsFilterForm.formState.errors.beginDate?.message}
                                {...transactionsFilterForm.register('beginDate')}
                            />
                            <InputMask
                                component={Input}
                                mask='dd/mm/aaaa'
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                                error={transactionsFilterForm.formState.errors.endDate?.message}
                                {...transactionsFilterForm.register('endDate')}
                            />
                            <ButtonIcon onClick={transactionsFilterForm.handleSubmit(onSubmitTransactions)} />
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
                                <CategoriesPieChart onClick={handleSelectCategory} />
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
                        <Title title="Transações" subtitle="Receitas e gastos no período" {...transactionsFilterForm.register('title')} />
                        <SerachTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar transações"
                            />
                            <ButtonIcon onClick={transactionsFilterForm.handleSubmit(onSubmitTransactions)} />
                        </SerachTransaction>
                    </header>
                    <TransactionGroup>
                        {transactions?.length > 0 && (
                            transactions.map((item, index) => (
                                <Transaction
                                    key={item._id}
                                    id={index + 1}
                                    amount={item.type === 'expense' ? item.amount * -1 : item.amount}
                                    date={dayjs(item.date).add(3, 'hours').format('DD/MM/YYYY')}
                                    category={{ title: item.category.title, color: item.category.color }}
                                    title={item.title}
                                    variant={item.type}
                                />
                            ))
                        )}
                    </TransactionGroup>

                </Aside>
            </Main >
        </>
    )
}