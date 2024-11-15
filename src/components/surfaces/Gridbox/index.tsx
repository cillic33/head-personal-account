import {IProps} from "@components/surfaces/Gridbox/props";
import styled from "styled-components";
import {FC} from "react";

// @barrelblur: убрать доллары
export const StyledGridbox = styled.div<IProps>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplateColumns || undefined};
  grid-template-rows: ${props => props.$gridTemplateRows || undefined};
  row-gap: ${props => props.$rowGap || undefined};
  column-gap: ${props => props.$columnGap || undefined};
`

export const Gridbox: FC<IProps> = (props) => {
  return (
    <StyledGridbox {...props} />
  );
}
