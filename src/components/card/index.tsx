import { ArrowCircleDownRight, ArrowCircleUpRight, CurrencyCircleDollar } from "@phosphor-icons/react";
import { Container } from "./styles";
import { FormatCurrency } from "../../utils/format-currency";

type CardProps = {
    variant?: 'balance' | 'incomes' | 'expenses',
    title: string
    amount: number
}

const iconsMap = {
    balance: <CurrencyCircleDollar />,
    incomes: <ArrowCircleUpRight />,
    expenses: <ArrowCircleDownRight />,
}

export function Card({ variant = 'balance', amount, title }: CardProps) {
    return (
        <Container $variant={variant}>
            {iconsMap[variant]}
            <span>{title}</span>
            <strong>{FormatCurrency(amount)}</strong>
        </Container>
    )
}