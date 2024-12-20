import {IProps} from "./props";
import styled from "styled-components";
import {FC} from "react";

const StyledLink = styled.a<IProps>`
  flex: ${props => props.flex || undefined};
  color: ${props => props.color || undefined};
`

export const LinkComponent: FC<IProps> = ({...props}) => {
  return (
    <StyledLink {...props} />
  );
}
