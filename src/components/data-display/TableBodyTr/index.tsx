import {IProps} from "@components/data-display/TableBodyTr/props";
import TableBodyTd from "@components/data-display/TableBodyTd";
import styled from "styled-components";

const StyledTableBodyTr = styled.tr`
`

const TableBodyTr = ({data, settings}: IProps) => {
  return (
    <StyledTableBodyTr>
      {Object.keys(data).map(key => (
        <TableBodyTd key={key} k={key} data={data[key]} settings={settings[key]} />
      ))}
    </StyledTableBodyTr>
  );
}

export default TableBodyTr;
