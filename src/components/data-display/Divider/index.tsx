import {IProps} from "./props";
import styled, {css} from "styled-components";

const StyledDivider = styled.div<IProps>`
  background: ${props => props.$color ? props.$color : props.theme.colors.surfacePrimary};
  
  ${props => {
    switch (props.direction) {
      case "vertical":
        return css`
          width: 1px;
        `
      case "horizontal":
        return css`
          width: 100%;
          height: 1px;
        `
    }
  }}
`

const Divider = (props: IProps) => {
  return (
    <StyledDivider {...props} />
  );
}

export default Divider;
