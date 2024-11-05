import styled from "styled-components";
import { theme } from "../../styles/theme";
import { InputNumberFormat } from "@react-input/number-format";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;

form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
 
footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem
}
`

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 0.25rem;

>label{
color: ${theme.colors.white};
font-size: 0.625rem;
}

select{
    height: 2.25rem;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    background-color: ${theme.colors.black};
    color: ${theme.colors.neutral};
    border: 1px solid transparent;
    transform: all 100ms;

    option{
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
    }

    &:focus{
       border-color: ${theme.colors.primary} ;
    }
}
`

export const CurrencyInput = styled(InputNumberFormat)`
width: 100%;
height: 2.25rem;
background-color: ${theme.colors.black};
border: 0;
border-radius: 0.25rem;
padding: 0 0.75rem;
color: ${theme.colors.neutral};
font-size: 1rem;
border: 1px solid transparent;
transform: all 100ms;

&::placeholder{
    color: ${theme.colors.neutral};
}

&:focus{
       border-color: ${theme.colors.primary} ;
    }
`