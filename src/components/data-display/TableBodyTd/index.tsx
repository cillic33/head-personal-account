import {IProps} from "./props";
import {TTableCell} from "@typing/TTable";
import styled from "styled-components";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";

const StyledTableBodyTd = styled.td`
  background: #fff;
  padding: 6px 8px;
  border-bottom: 1px solid ${theme.colors.surfacePrimary};
`

const TableBodyTd = ({k: key, data}: IProps) => {
  if (key === "id") {
    return;
  }

  if (typeof data === "object") {
    return (
      <StyledTableBodyTd key={key}>
        {Object.keys(data).map(nestedKey => {
          const obj = data;

          return (
            <Typography $variant="caption-regular" key={nestedKey}>
              {obj[nestedKey as keyof TTableCell]}
            </Typography>
          );
        })}
      </StyledTableBodyTd>
    );
  }

  return (
    <StyledTableBodyTd key={key}>
      <Typography $variant="caption-regular">
        {data}
      </Typography>
    </StyledTableBodyTd>
  );
}

export default TableBodyTd;
