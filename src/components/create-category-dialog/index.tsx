import { Container } from "./styles";
import { Dialog } from "../dialog";
import { useCallback, useState } from "react";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";

export function CreateCategoryDialog() {
    const [open, setOpen] = useState(false)

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    const onSubmit = useCallback(() => {
        handleClose()
    }, [handleClose])

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
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button onClick={onSubmit} type="button">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}