import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding: 1rem;
gap: 0.5rem;
background-color: ${theme.colors.dark};
border-radius: 0.25rem;
`