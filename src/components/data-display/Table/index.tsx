import {IProps} from "./props";
import TableBody from "@components/data-display/TableBody";
import styled from "styled-components";
import {scrollX} from "@utils/mixins";
import {theme} from "@utils/theme/theme";
import TableHead from "@components/data-display/TableHead";
import {FC, MutableRefObject} from "react";

const StyledTableWrap = styled.div`
  width: 100%;
  height: calc(100vh - 170px);
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${theme.colors.surfacePrimary};
  overflow: auto;
  ${scrollX};
`

const StyledTable = styled.table`
  border-spacing: 0;
`

// @barrelblur: убрать доллары
const Table: FC<IProps> = ({data, $ref, onRowClick}) => {
  const handleSortClick = (id: string, direction: string) => {
    // TODO сделать сортировку данных
    console.log('Столбец', id, 'Направление', direction)
  }

  const handleRowClick = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    if (onRowClick) {
      onRowClick(trRef);
    }
  }

  return (
    <StyledTableWrap>
      <StyledTable ref={$ref}>
        <TableHead settings={data.settings} sortClick={handleSortClick} />
        <TableBody settings={data.settings} data={data.body} onClick={handleRowClick} />
      </StyledTable>
    </StyledTableWrap>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Table;
