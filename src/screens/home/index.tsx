import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { Header } from "./styles";


export function Home() {
    return (
        <Header>
            <Logo />
            <div>
                <Button variant="default">Nova transação</Button>
                <Button variant="default">Nova categoria</Button>
            </div>
        </Header>
    )
}