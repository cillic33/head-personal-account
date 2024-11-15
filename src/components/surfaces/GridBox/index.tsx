import {IProps} from "@components/surfaces/GridBox/props";
import styled from "styled-components";
import {FC} from "react";

export const StyledGridBox = styled.div<IProps>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns || undefined};
  grid-template-rows: ${props => props.gridTemplateRows || undefined};
  row-gap: ${props => props.rowGap || undefined};
  column-gap: ${props => props.columnGap || undefined};
`

export const GridBox: FC<IProps> = (props) => {
  return (
    <StyledGridBox {...props} />
  );
}
