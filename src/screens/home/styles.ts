import { styled } from 'styled-components'

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem;
width: 100%;

>div{
    display:flex ;
    align-items: center;
    gap: 0.5rem;

}
`

export const Main = styled.main`
display: flex;
width: 100%;
gap: 0.75rem;
padding: 0 1.5rem 1.5rem 1.5rem;
`

export const Section = styled.section`
display: flex;
width: 100%;
flex-direction: column;
gap: 0.75rem;
`

export const Filters = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;

`
export const InputGroup = styled.div`
display: flex;
width: 100%;
align-items: flex-end;
max-width: 22.5rem;
gap: 0.5rem;
`

