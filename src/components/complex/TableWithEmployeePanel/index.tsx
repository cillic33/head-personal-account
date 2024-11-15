import {Table} from "@components/data-display/Table";
import {RightPanel} from "@components/complex/RightPanel";
import {EmployeeCard} from "@components/complex/EmployeeCard";
import {Flexbox} from "@components/surfaces/Flexbox";
import {FC, MutableRefObject, useRef, useState} from "react";
import {IProps} from "./props";
import styled from "styled-components";
import {SLIDE_PANEL_TIME} from "@utils/const";

const StyledTableWrap = styled.div`
  width: 100%;
  transition: width ${SLIDE_PANEL_TIME}ms ease;
  
  &.active {
    width: calc(100% - 560px - 16px);
  }
`

export const TableWithEmployeePanel: FC<IProps> = ({data}) => {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const tableRef = useRef<HTMLTableElement | null>(null);

  // Снятие выделения со всех строк таблицы
  const unselectTableRows = () => {
    if (tableRef.current) {
      const rows = Array.from(tableRef.current.querySelectorAll('tr'));
      rows.forEach(row => row.classList.remove('active'));
    }
  }

  // Выделение строки таблицы
  const selectTableRow = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    unselectTableRows();
    if (trRef.current) {
      trRef.current.classList.add('active');
    }
  }

  // Обработка клика по строке таблицы
  const handleRowClick = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    selectTableRow(trRef);
    setShowPanel(true);
    // TODO заменить данные в панели
  }

  // Обработка клика по кнопке закрытия панели
  const handleClosePanelClick = () => {
    unselectTableRows();
    setShowPanel(false);
  }

  return (
    <Flexbox position="relative">
      <StyledTableWrap className={showPanel ? 'active' : undefined}>
        <Table data={data} onRowClick={handleRowClick} ref={tableRef} />
      </StyledTableWrap>

      <RightPanel isShow={showPanel} width="560px" onCloseClick={handleClosePanelClick}>
        <EmployeeCard />
      </RightPanel>
    </Flexbox>
  );
}
