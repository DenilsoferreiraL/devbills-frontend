import { Container } from "./styles";
import { Dialog } from "../dialog";
import { useCallback, useState } from "react";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { CreateCategoryData } from "../../validators/types";
import { theme } from "../../styles/theme";
import { createCategorySchema } from "../../validators/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchAPI } from "../../hooks/useFetchAPI";

export function CreateCategoryDialog() {
    const { createCategory } = useFetchAPI()
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState } = useForm<CreateCategoryData>({
        defaultValues: {
            title: '',
            color: theme.colors.primary,
        },
        resolver: zodResolver(createCategorySchema),
    });

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const onSubmit = useCallback(
        async (data: CreateCategoryData) => {
            await createCategory(data)
            handleClose()
        },
        [handleClose, createCategory],
    );

    return (
        <Dialog open={open} onOpenChange={setOpen} trigger={<Button>Nova categoria</Button>}>
            <Container>
                <Title title='Nova Transação' subtitle='Crie uma nova categoria para suas transações' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input label="Nome" placeholder="Nome da categoria..." />
                        <Input label="Cor" type="color" style={{ cursor: "pointer" }} />
                    </div>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button type="submit">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    );
}



