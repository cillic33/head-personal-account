import {IProps} from "./props";
import TableHead from "@components/data-display/TableHead/TableHead";
import TableBody from "@components/data-display/TableBody";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {scroll} from "@utils/mixins";
import {theme} from "@utils/theme/theme";

const PADDING_WITH_SCROLL = '14px';
const PADDING_WITHOUT_SCROLL = '18px';

const StyledTableWrap = styled.div`
  width: 100%;
  height: calc(100vh - 162px);
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

  //width: calc(100% + ${PADDING_WITHOUT_SCROLL});
  //margin-right: -${PADDING_WITHOUT_SCROLL};
  //padding-right: ${PADDING_WITHOUT_SCROLL};
`

const StyledTable = styled.table`
  border-spacing: 0;
`

const Table = ({data}: IProps) => {
  const tableWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tableWrapRef.current && tableWrapRef.current.scrollHeight > tableWrapRef.current.offsetHeight) {
      tableWrapRef.current.style.paddingRight = PADDING_WITH_SCROLL;
    }
  }, []);

  return (
    <StyledTableWrap ref={tableWrapRef}>
      <StyledTable>
        <TableHead data={data.head} />
        <TableBody data={data.body} />
      </StyledTable>
    </StyledTableWrap>
  );
}

export default Table;