import {IProps} from "./props";
import styled from "styled-components";
import {FC} from "react";

// @barrelblur: убрать доллары
const StyledLink = styled.a<IProps>`
  flex: ${props => props.$flex || undefined}
`

const LinkComponent: FC<IProps> = ({...props}) => {
  return (
    <StyledLink {...props} />
  );
}

// @barrelblur: не используем дефолтный экспорт
export default LinkComponent;
