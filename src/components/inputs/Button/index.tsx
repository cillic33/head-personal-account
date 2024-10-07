import {Props} from "./props";
import styled from "styled-components";

const StyledButton = styled.button<Props>`
  border: none;
  background: none;
`

const Button = ({...props}: Props) => {
  return (
    <StyledButton {...props} />
  );
}

export default Button;
