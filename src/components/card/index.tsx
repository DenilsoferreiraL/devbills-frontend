import { CurrencyCircleDollar } from "@phosphor-icons/react";
import { Container } from "./styles";

type CardProps = {
    variant?: 'balance' | 'incomes' | 'expenses',
    title: string
    amount: number
}

export function Card({ variant = 'balance', amount, title }: CardProps) {
    return (
        <Container $variant={variant}>
            <CurrencyCircleDollar />
            <span>{title}</span>
            <strong>{amount}</strong>
        </Container>
    )
}