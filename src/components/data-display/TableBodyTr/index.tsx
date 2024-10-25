import {IProps} from "@components/data-display/TableBodyTr/props";
import TableBodyTd from "@components/data-display/TableBodyTd";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";

const StyledTableBodyTr = styled.tr`
  td:first-child {
    border-left: 1px solid ${theme.colors.surfacePrimary};
  }
  
  td:last-child {
    border-right: 1px solid ${theme.colors.surfacePrimary};
  }
  
  &:last-child {
    td:first-child {
      border-radius: 0 0 0 8px;
    }
    
    td:last-child {
      border-radius: 0 0 8px 0;
    }
  }
`

const TableBodyTr = ({data}: IProps) => {
  return (
    <StyledTableBodyTr>
      {Object.keys(data).map(key => (
        <TableBodyTd key={key} k={key} data={data[key]} />
      ))}
    </StyledTableBodyTr>
  );
}

export default TableBodyTr;
