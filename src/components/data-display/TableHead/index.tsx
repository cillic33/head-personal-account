import {IProps} from "./props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import {Typography} from "@components/data-display/Typography";
import {Flexbox} from "@components/surfaces/Flexbox";
import {Button} from "@components/inputs/Button";
import {Image} from "@components/data-display/Image";
import CaretDownGray from "@images/CaretDownGray.svg";
import {FC, MouseEvent} from "react";
import {TTableSortDirections} from "@typing/TTable";

const StyledTableHead = styled.thead`
  th {
    position: sticky;
    top: 0;
    background: ${theme.colors.onSurfaceFaintQuaternaryNotTransparent};
    white-space: nowrap;
    padding: 12px 16.5px;
    border-right: 1px solid ${theme.colors.surfacePrimary};
    border-bottom: 1px solid ${theme.colors.surfacePrimary};
    text-align: left;
    
    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
      border-right: none;
    }
  }
`

export const TableHead: FC<IProps> = ({settings, sortClick}) => {
  const tableTitles = Object.values(settings);

  const handleSortClick = (event: MouseEvent<HTMLElement>, id: string) => {
    const btnTarget = event.target instanceof HTMLImageElement
      ? (event.target as HTMLImageElement).closest('button')
      : event.target;

    let sortDirection = (btnTarget as HTMLButtonElement).dataset.sort;

    sortDirection =
      sortDirection === TTableSortDirections.NONE ? TTableSortDirections.ASC :
        sortDirection === TTableSortDirections.ASC ? TTableSortDirections.DESC : TTableSortDirections.ASC;

    (btnTarget as HTMLButtonElement).dataset.sort = sortDirection;

    if (sortClick) {
      sortClick(id, sortDirection);
    }
  }

  return (
    <StyledTableHead>
      <tr>
        {tableTitles.map((item, index) => (
          <th key={index}>
            <Flexbox gap="4px" align="center">
              <Typography variant="caption-semibold" color={theme.colors.textIconBaseSecondary}>{item.name}</Typography>
              {item.isSorted &&
                <Button
                  width="16px"
                  height="16px"
                  background={theme.colors.onSurfaceFaintQuaternary}
                  borderRadius="2.67px"
                  data-sort={TTableSortDirections.NONE}
                  onClick={(event) => handleSortClick(event, item.id)}
                >
                  <Image src={CaretDownGray} width="14px" />
                </Button>
              }
            </Flexbox>
          </th>
        ))}
      </tr>
    </StyledTableHead>
  );
}
