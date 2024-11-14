import {IProps} from "./props";
import styled from "styled-components";

// @barrelblur: убрать доллары
const StyledLink = styled.a<IProps>`
  flex: ${props => props.$flex || undefined}
`

// @barrelblur: неправильно размечена функция
const LinkComponent = ({...props}: IProps) => {
  return (
    <StyledLink {...props} />
  );
}

// @barrelblur: неправильно размечена функция
export default LinkComponent;
