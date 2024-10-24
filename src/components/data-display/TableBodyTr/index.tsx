import {IProps} from "@components/data-display/TableBodyTr/props";
import TableBodyTd from "@components/data-display/TableBodyTd";

const TableBodyTr = ({data}: IProps) => {
  return (
    <tr>
      {Object.keys(data).map(key => (
        <TableBodyTd key={key} k={key} data={data[key]} />
      ))}
    </tr>
  );
}

export default TableBodyTr;
