import { Container, Content, CurrencyInput, InputGroup, RadioForm, RadioGroup } from "./styles";
import { Dialog } from "../dialog";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { InputMask } from "@react-input/mask";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { CreateTransactionData } from "../../validators/types";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

export function CreateTransactionDialog() {
    const { categories, fetchCategories } = useFetchAPI()
    const [open, setOpen] = useState(false)
    const { register, reset, formState: { errors }, handleSubmit } = useForm<CreateTransactionData>({
        defaultValues: {
            categoryId: 'null',
            title: '',
            amount: '',
            date: dayjs('2024-01-01').format('DD/MM/YYYY'),
            type: 'income'
        }
    })

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

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
                    <Content>
                        <InputGroup>
                            <label >Categoria</label>
                            <select {...register('categoryId')}>
                                <option value="null">Selecione uma categoria</option>
                                {categories?.length && categories.map(item => (
                                    <option key={item._id} value={item._id}>{item.title}</option>
                                ))}
                            </select>
                            {errors.categoryId && ()}
                        </InputGroup>
                        <Input label="Nome" placeholder="Nome da Transação..." {...register('title')} />
                        <InputGroup>
                            <label>Valor</label>
                            <CurrencyInput placeholder="R$ 0,00" format="currency" currency="BRL" />
                        </InputGroup>
                        <InputMask
                            component={Input}
                            mask='dd/mm/aaaa'
                            replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                            variant="black"
                            label="Data"
                            placeholder="dd/mm/aaaa"
                        />

                        <RadioForm>
                            <RadioGroup>
                                <input type="radio" id="income" value="income" name="type" />
                                <label htmlFor="income"  >Receita</label>
                            </RadioGroup>
                            <RadioGroup>
                                <input type="radio" id="expense" value="expense" name="type" />
                                <label htmlFor="expense" >Gasto</label>
                            </RadioGroup>
                        </RadioForm>
                    </Content>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button onClick={onSubmit} type="button">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}