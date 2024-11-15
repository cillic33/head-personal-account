import {IProps} from "@components/data-display/TableBodyTr/props";
import {TableBodyTd} from "@components/data-display/TableBodyTd";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import {FC, useRef} from "react";

const StyledTableBodyTr = styled.tr`
  &.active td {
    background: ${theme.colors.surfaceBackground};
    border-color: ${theme.colors.AccentBrandFaded};
  }
`

export const TableBodyTr: FC<IProps> = ({data, settings, onClick}) => {
  const trRef = useRef<HTMLTableRowElement | null>(null);
  const handleClick = () => {
    if (onClick) {
      onClick(trRef);
    }
  }

  return (
    <StyledTableBodyTr ref={trRef}>
      {Object.keys(data).map(key => (
        <TableBodyTd key={key} k={key} data={data[key]} settings={settings[key]} onClick={handleClick} />
      ))}
    </StyledTableBodyTr>
  );
}
