import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { Filters, Header, Main, Section } from "./styles";


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

                    </Filters>
                </Section>
            </Main>
        </>
    )
}