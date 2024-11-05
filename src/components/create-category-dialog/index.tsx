import { Container } from "./styles";
import { Dialog } from "../dialog";
import { useState } from "react";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";

// type DialogProps = {
//     children: ReactNode;
//     trigger: JSX.Element;
//     open?: boolean;
//     onOpenChange?: (open: boolean) => void
// }

export function CreateCategoryDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} trigger={<Button>Nova categoria</Button>}>
            <Container>
                <Title title='Nova Transação' subtitle='Crie uma nova transação para seu controle financeiro' />
                <form>
                    <div>
                        <Input label="Nome" placeholder="Nome da categoria..." />
                        <Input label="Cor" type="color" style={{ cursor: "pointer" }} />
                    </div>
                    <footer>
                        <Button variant="outline" type="button">Cancelar</Button>
                        <Button type="button">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}