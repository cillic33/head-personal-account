import {IProps} from "./props";
import TableBody from "@components/data-display/TableBody";
import styled from "styled-components";
import {scroll} from "@utils/mixins";
import {theme} from "@utils/theme/theme";
import TableHead from "@components/data-display/TableHead";

const StyledTableWrap = styled.div`
  width: 100%;
  height: calc(100vh - 170px);
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${theme.colors.surfacePrimary};
  overflow: auto;
  ${scroll};
  
  
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    box-shadow: inset 0 0 16px 16px ${theme.colors.onSurfaceFaintTertiary};
    border: solid 6px transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    cursor: pointer;
    box-shadow: inset 0 0 16px 16px ${theme.colors.onSurfaceFaintPrimary};
    border: solid 6px transparent;
  }
`

const StyledTable = styled.table`
  border-spacing: 0;
`

const Table = ({data}: IProps) => {
  return (
    <StyledTableWrap>
      <StyledTable>
        <TableHead settings={data.settings} />
        <TableBody settings={data.settings} data={data.body} />
      </StyledTable>
    </StyledTableWrap>
  );
}

export default Table;
