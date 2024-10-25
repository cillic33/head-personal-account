import {IProps} from "./props";
import {TTableCell} from "@typing/TTable";
import styled from "styled-components";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import Flexbox from "@components/surfaces/Flexbox";
import Person from "@components/data-display/Person";

interface IStyledTableBodyTd {
  width?: number;
}

const StyledTableBodyTd = styled.td<IStyledTableBodyTd>`
  background: #fff;
  padding: 6px 8px;
  border-bottom: 1px solid ${theme.colors.surfacePrimary};
  width: ${props => props.width + "px" || undefined};
  min-width: ${props => props.width + "px" || undefined};
  max-width: ${props => props.width + "px" || undefined};
`

const TableBodyTd = ({k: key, data, settings}: IProps) => {
  const width = (settings && settings.width) ? settings.width : undefined;
  const isEmployee = (settings && settings.isEmployee) ? settings.isEmployee : undefined;

  if (key === "id") {
    return;
  }

  if (typeof data === "object") {
    return (
      <StyledTableBodyTd key={key} width={width}>
        <Flexbox $gap="8px" $align="center">
          {isEmployee &&
            <Person src={data["avatar" as keyof TTableCell]} name={data["name" as keyof TTableCell]} $fontVariant="caption-regular" />
          }
          {!isEmployee && Object.keys(data).map((nestedKey) => {
              return (
                <Typography $variant="caption-regular" key={nestedKey}>
                  {data[nestedKey as keyof TTableCell]}
                </Typography>
              );
            })}
        </Flexbox>
      </StyledTableBodyTd>
    );
  }

  return (
    <StyledTableBodyTd key={key} width={width}>
      <Typography $variant="caption-regular" $isNowrap $isEllipsis>
        {data}
      </Typography>
    </StyledTableBodyTd>
  );
}

export default TableBodyTd;
