import {IProps} from "./props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import Typography from "@components/data-display/Typography";

const StyledTableHead = styled.thead`
  th {
    background: ${theme.colors.onSurfaceFaintQuaternary};
    white-space: nowrap;
    padding: 12px 16.5px;
    border-top: 1px solid ${theme.colors.surfacePrimary};
    border-right: 1px solid ${theme.colors.surfacePrimary};
    border-bottom: 1px solid ${theme.colors.surfacePrimary};
    text-align: left;
    
    &:first-child {
      border-radius: 8px 0 0 0;
      border-left: 1px solid ${theme.colors.surfacePrimary};
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }
`

const TableHead = ({data}: IProps) => {
  const tableTitles = Object.values(data);

  return (
    <StyledTableHead>
      <tr>
        {tableTitles.map((item, index) => (
          <th key={index}>
            <Typography $variant="caption-semibold" $color={theme.colors.textIconBaseSecondary}>{item}</Typography>
          </th>
        ))}
      </tr>
    </StyledTableHead>
  );
}

export default TableHead;
