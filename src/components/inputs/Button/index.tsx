import {Props} from "./props";
import styled from "styled-components";

const StyledButton = styled.button<Props>`
  padding: ${props => props.$padding || undefined};
`

const Button = ({...props}: Props) => {
  return (
    <StyledButton {...props} />
  );
}

export default Button;
