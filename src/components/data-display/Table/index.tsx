import {IProps} from "./props";
import TableHead from "@components/data-display/TableHead/TableHead";
import TableBody from "@components/data-display/TableBody";
import styled from "styled-components";

const StyledTable = styled.table`
  border-spacing: 0;
`

const Table = ({data}: IProps) => {
  return (
    <StyledTable>
      <TableHead data={data.head} />
      <TableBody data={data.body} />
    </StyledTable>
  );
}

export default Table;
