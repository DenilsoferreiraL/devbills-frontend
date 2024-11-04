import { FormatCurrency } from "../../utils/format-currency";
import { Container, Info, Content } from "./styles";

export function Transaction() {
    return (
        <Container>
            <Info>
                <span>#000</span>
                <div>
                    <strong>Mercado</strong>
                    <span>18/01/2000</span>
                </div>
            </Info>

            <Content>
                <strong>{FormatCurrency(10000)}</strong>
                <span>ALIMENTAÇÃO</span>
            </Content>
        </Container>
    )
}