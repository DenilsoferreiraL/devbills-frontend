import { ComponentProps } from "react";
import { Container } from "./styles";

type InputProps = ComponentProps<'input'> & {
    label?: string
    variant?: 'black' | 'dark'
}

export function Input({ label, variant = 'black', ...props }: InputProps) {
    return (
        <Container $variant={variant}>
            {label && <label>{label}</label>}
            <input{...props} />
        </Container>
    )
}