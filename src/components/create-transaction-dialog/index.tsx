import { Container, InputGroup } from "./styles";
import { Dialog } from "../dialog";
import { useCallback, useState } from "react";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";

export function CreateTransactionDialog() {
    const [open, setOpen] = useState(false)

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    const onSubmit = useCallback(() => {
        handleClose()
    }, [handleClose])

    return (
        <Dialog open={open} onOpenChange={setOpen} trigger={<Button>Nova Transação</Button>}>
            <Container>
                <Title title='Nova Transação' subtitle='Crie uma nova transação para seu controle financeiro' />
                <form>
                    <InputGroup>
                        <label htmlFor="">Categoria</label>
                        <select>
                            <option value="null">Selecione uma categoria</option>
                            <option value="null">Selecione uma categoria</option>
                            <option value="null">Selecione uma categoria</option>
                        </select>
                    </InputGroup>
                    <Input label="Nome" placeholder="Nome da Transação..." />
                    <Input label="Valor" placeholder="R$ 0,00" />
                    <Input label="Data" placeholder="01/01/2023" />

                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button onClick={onSubmit} type="button">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}