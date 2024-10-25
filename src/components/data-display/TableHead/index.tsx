import {IProps} from "./props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import Typography from "@components/data-display/Typography";

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

interface IStyledHeadTh {
  width?: number;
}

const StyledHeadTh = styled.th<IStyledHeadTh>`
  width: ${props => props.width ? props.width + "px" : undefined};
`

const TableHead = ({settings}: IProps) => {
  const tableTitles = Object.values(settings);

  return (
    <StyledTableHead>
      <tr>
        {tableTitles.map((item, index) => (
          <StyledHeadTh key={index} width={item.width}>
            <Typography $variant="caption-semibold" $color={theme.colors.textIconBaseSecondary}>{item.name}</Typography>
          </StyledHeadTh>
        ))}
      </tr>
    </StyledTableHead>
  );
}

export default TableHead;
