import {IProps} from "./props";
import styled from "styled-components";

const StyledButton = styled.button<IProps>`
  padding: ${props => props.$padding || undefined};
  position: ${props => props.$position || undefined};
`

const Button = ({...props}: IProps) => {
  return (
    <StyledButton {...props} />
  );
}

export default Button;
