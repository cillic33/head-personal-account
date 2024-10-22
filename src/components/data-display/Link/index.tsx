import {IProps} from "./props";
import styled from "styled-components";

const StyledLink = styled.a<IProps>`
  flex: ${props => props.$flex || undefined}
`

const Link = ({...props}: IProps) => {
  return (
    <StyledLink {...props} />
  );
}

export default Link;
