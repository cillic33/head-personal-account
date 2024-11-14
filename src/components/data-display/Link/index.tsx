import {IProps} from "./props";
import styled from "styled-components";

const StyledLink = styled.a<IProps>`
  flex: ${props => props.$flex || undefined};
  color: ${props => props.$color || undefined};
`

const LinkComponent = ({...props}: IProps) => {
  return (
    <StyledLink {...props} />
  );
}

export default LinkComponent;
