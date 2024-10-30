import { CurrencyCircleDollar } from "@phosphor-icons/react";
import { Container } from "./styles";

export function Card() {
    return (
        <Container>
            <CurrencyCircleDollar/>
            <span>Saldo</span>
            <strong>R$ 00,00</strong>
        </Container>
    )
}